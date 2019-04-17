// pages/sort/dynasty.js
const app = getApp()
const { getCount } = require('../../utils/sortCount.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dynasty: getCount(app.globalData.poems.map(item => item[2]))
  },

  goList(evt) {
    const dynasty = evt.currentTarget.dataset.dynasty
    wx.navigateTo({
      url: `../index/list?dynasty=${dynasty}`,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    this.setData({
      orders: Object.keys(this.data.dynasty)
    })
  }
})