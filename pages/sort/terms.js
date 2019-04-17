// pages/sort/terms.js
const app = getApp()
const { getCount } = require('../../utils/sortCount.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    terms: getCount(app.globalData.poems.map(item => item[0]))
  },

  goList (evt) {
    const terms = evt.currentTarget.dataset.terms
    wx.navigateTo({
      url: `../index/list?terms=${terms}`,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    this.setData({
      orders: Object.keys(this.data.terms).sort()
    })
  }
})