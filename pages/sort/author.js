// pages/sort/author.js
const app = getApp()
const { getCount } = require('../../utils/sortCount.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    author: getCount(app.globalData.poems.map(item => item[3]))
  },

  goList(evt) {
    const author = evt.currentTarget.dataset.author
    wx.navigateTo({
      url: `../index/list?author=${author}`,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    this.setData({
      orders: Object.keys(this.data.author)
    })
  }
})