
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select: false,
    tihuoWay: '门店自提',
    selectArray: [{
      "id": "10",
      "text": "会计类"
    }, {
      "id": "21",
      "text": "工程类"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bindShowMsg() {
    this.setData({
      select: !this.data.select
    })
  },
  mySelect(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      tihuoWay: name,
      select: false
    })
  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
