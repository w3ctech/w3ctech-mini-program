function request (method, url, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      method,
      url,
      data,
      success (data) {
        resolve(data)
      },

      fail (error) {
        reject(new Error(error))
      }
    })
  })
}

export default {
  get (url, data = {}) {
    return request('GET', url, data)
  },

  post (url, data = {}) {
    return request('POST', url, data)
  }
}
