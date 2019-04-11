// pages/sort/terms.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    terms: Array.from(new Set(app.globalData.poems.map(item => item[0]))).sort()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    
  }
})