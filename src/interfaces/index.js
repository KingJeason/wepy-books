import wepy from 'wepy'
import { api } from '../config'

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
      await wepy.setStorage({
        key: 'userid',
        data: userinfo.data.id
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
