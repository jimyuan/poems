// pages/poem/poem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    poem: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      poem: wx.getStorageSync('poem')
    })
  }
})