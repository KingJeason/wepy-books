import wepy from 'wepy'
import { api } from '../config'
import store from '../utils/storage'
const interfaces = {
    async getUserInfo() {
        const loginData = await wepy.login()
        const userinfo = await wepy.getUserInfo()
        userinfo.code = loginData.code
        return userinfo
    },
    async login() {
        let userinfoRaw = {}
        let userinfo = {}

        try {
            userinfoRaw = await interfaces.getUserInfo()
            userinfo = await wepy.request({
                url: api.user.login.url + userinfoRaw.code,
                method: api.user.login.method,
                dataType: 'json',
                data: {
                }
            })
            await store.setStorage({
                'userid': userinfo.data.user.id,
                'userInfo': userinfoRaw.userInfo

            })

        } catch (e) {
            wepy.showModal({
                title: '提示',
                content: `获取用户信息失败，请关闭重新进入。${e.message}`
            })
        }
    }
}

export default interfaces
