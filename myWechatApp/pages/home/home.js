// pages/home/home.js
import { getBannerlist, getProlist } from './../../api/api.js'
Page({

  /**
   * 页面的初始数据
   */

  data: {
    bannerlist: [],
    prolist: [],
    list: [
      {
        text: '超市',
        icon: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/125678/35/5947/4868/5efbf28cEbf04a25a/e2bcc411170524f0.png.webp'
      },
      {
        text: '电器',
        icon: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/135931/4/3281/5598/5efbf2c0Edbdc82c7/ed9861b4ddfb9f30.png.webp'
      },
      {
        text: '服饰',
        icon: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/140012/8/1804/3641/5efbf318E38bd5dad/0db99d859ab16ce9.png.webp'
      },
      {
        text: '生鲜',
        icon: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/129215/21/5978/3618/5efbf344Ebec23ae8/59712d986b10bb0a.png.webp'
      },
      {
        text: '到家',
        icon: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/116602/7/11200/3796/5efbf375Ebba41029/f07cc166f368fa05.png.webp'
      },
      {
        text: '充值缴费',
        icon: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/146390/3/1846/4909/5efbf39aEe5f5f797/300071558a9ab078.png.webp'
      },
      {
        text: '9.9元拼',
        icon: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/143365/25/1824/3716/5efbf3c0E5175e1fb/88f6227257a29f1d.png.webp'
      },
      {
        text: '领券',
        icon: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/113589/24/11332/4897/5efbf3feE705d87db/e5c12d5e943266b9.png.webp'
      },
      {
        text: '领津贴',
        icon: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/131663/33/3380/3674/5efbf50fEf79cf314/af4b57d2383e605d.png.webp'
      },
      {
        text: 'plus会员',
        icon: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/123730/37/5924/4189/5efbf567E0a226121/d04df7c74c87cf68.png.webp'
      }
    ],
    count: 2,
    finished: false,
    flag: false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getBannerlist().then((res) => {
      console.log(res.data.data)
      this.setData({
        bannerlist: res.data.data
      })
    })
    getProlist().then(res => {
      console.log(res.data.data)
      this.setData({
        prolist: res.data.data
      })
      
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    getProlist().then(res => {
      this.setData({
        prolist: res.data.data,
        finished: false,
        count: 2
      })
      wx.stopPullDownRefresh()
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    getProlist({
      limit: 10,
      count: this.data.count
    }).then(res => {
      // console.log(res.data.data)
      if (res.data.data.length === 0) {
        this.setData({
          finished: true
        })
      } else {
        this.setData({
          prolist: [...this.data.prolist, ...res.data.data],
          count: this.data.count + 1
        })
      }
    })
  },

  onPageScroll ({scrollTop}) {
    const flag = scrollTop > 300
    this.setData({
      flag
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getUserInfo(obj) {
    console.log(obj)
  },
  
  // 自定义函数
  backtop () {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 500
    })
  }
})