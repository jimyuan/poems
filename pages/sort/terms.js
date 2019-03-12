// pages/sort/terms.js
const app = getApp()
const keyTerms = Array.from(new Set(app.globalData.poems.map(item => item[0]))).sort()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    terms: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    const grade = ['一', '二', '三', '四', '五']
    const term = ['上', '下']
    const terms = keyTerms.map((item, idx) => `${grade[idx / 2 | 0]}年级${term[idx & 1]}`)
    this.setData({
      terms
    })
  }
})