import wepy from 'wepy'

const store = {
    async setStorage(obj){
       for(let o in obj){
           wepy.setStorage({
               key: o,
               data: obj[o]
           })
       }
    }
}
export default  store
