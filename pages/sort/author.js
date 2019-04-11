// pages/sort/author.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    author: Array.from(new Set(app.globalData.poems.map(item => item[3])))
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  }
})