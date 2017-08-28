import wepy from 'wepy'
import interfacess from '../../interfaces/index'
export default class login extends wepy.mixin {
    data = {
        userId: ''
    }
    methods = {
        tap() {
            this.mixin = 'mixin data was changed'
            console.log('mixin method tap')
        }
    }
    async getStoreById() {
        console.log('进入了')
        try {
            let userId = await wepy.getStorage({
                key: 'userId'
            })
            this.userId = userId.data
            this.$apply()
        } catch (error) {
            try {
                await interfacess.login1()
                let userId = await wepy.getStorage({
                    key: 'userId'
                })

                this.userId = userId.data
                this.$apply()
            } catch (error) {
            }

        }

    }

    onLoad() {
        console.log('mixin onLoad')
    }
}
