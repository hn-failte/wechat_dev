// pages/detail/detail.js
Page({

  data: {
    id: -1
  },

  onLoad: function (options) {
    this.setData({
      id: options.id
    }),
    wx.setNavigationBarTitle({
      title: "详情"
    })
  },

})