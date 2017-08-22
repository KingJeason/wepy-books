import wepy from 'wepy'
import interfaces from '../interfaces'

export default async function request (options) {
  if (options.header) {
    options.header['x-wechat-session'] = wepy.getStorageSync('_session')
  } else {
    options.header = {
      'x-wechat-session': wepy.getStorageSync('_session')
    }
  }

  let response = await wepy.request(options)

  if (response.statusCode === 401) {
    await interfaces.login()
    return await request(options)
  } else if (response.statusCode === 500) {
    wepy.showModal({
      title: '提示',
      content: `服务器错误，请截图本提示，并联系深大汪峰。${response.data.errmsg}`
    })
  } else {
    return response
  }
}
