// pages/ticket/pages/mylist/mylist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tickets: [
      {
        "id": 1,
        "name": "全国通用卷",
        "date": 1500977330748,
        "dateinfo" : "",
        "garden": "荷兰花卉乐园",
        "src": "../../resources/image/01.jpg"
      },
      {
        "id": 2,
        "name": "全国通用卷",
        "date": 1280977330748,
        "dateinfo": "",
        "garden": "荷兰花卉乐园",
        "src": "../../resources/image/02.jpg"
      }, {
        "id": 3,
        "name": "全国通用卷",
        "date": 1280977330748,
        "dateinfo": "",
        "garden": "荷兰花卉乐园",
        "src": "../../resources/image/03.jpg"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var t = this.data.tickets;
    t.forEach(function (item, index) {
      let time = new Date(item.date);
      item.dateinfo = "" + time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate() + "&nbsp;&nbsp;&nbsp;8:30-18:30";
    });

    this.setData({
      tickets: t
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})