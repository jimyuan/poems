// index/poem/list.js
const app = getApp()
const poems = app.globalData.poems
Page({

  /**
   * 页面的初始数据
   */
  data: {
    poemsArr: []
  },

  goPoem (evt) {
    const poem = evt.currentTarget.dataset.poem
    wx.setStorageSync('poem', poem)
    wx.navigateTo({
      url: '../poem/poem',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    // 按年级过滤
    options.terms && this.setData({
      poemsArr: poems.filter(item => item[0] === +options.terms)
    })
    // 按朝代过滤
    options.dynasty && this.setData({
      poemsArr: poems.filter(item => item[2] === options.dynasty)
    })
    // 按作者过滤
    options.author && this.setData({
      poemsArr: poems.filter(item => item[3] === options.author)
    })
  }
})