//index.js
//获取应用实例
const app = getApp()
const poemDB = app.globalData.poems.sort((a, b) => {
  return Math.random() > 0.5 ? -1 : 1
})

Page({
  onShareAppMessage() {
    return {
      title: '小学生诗词库',
      path: '/pages/index/index'
    }
  },
  data: {
    num: 0,
    poem: []
  },
  //事件处理函数
  showPoem () {
    const limit = poemDB.length
    const num = num >= limit ? 0 : this.data.num + 1
    this.setData({
      num,
      poem: poemDB[num]
    })
  },
  // 页面加载，随机显示诗词一首
  onLoad () {
    this.setData({
      poem: poemDB[this.data.num]
    })
  }
})
