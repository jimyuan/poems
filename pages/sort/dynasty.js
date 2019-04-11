// pages/sort/dynasty.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dynasty: Array.from(new Set(app.globalData.poems.map(item => item[2])))
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }
})