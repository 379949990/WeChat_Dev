const baseURL = "http://localhost:3000/api"
export default {
  get (url, params) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: baseURL + url,
        data: params,
        methods: 'GET',
        success: (res) => {
          resolve(res)
        }
      })
    })
  },
  post (url, params) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: baseURL + url,
        data: params,
        methods: 'POST',
        success: (res) => {
          resolve(res)
        }
      })
    })
  }
}