// pages/ticket/pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    types: [
      {
        "id": 1,
        "name": '随买随用'
      },
      {
        "id": 2,
        "name": '保障入园'
      }
    ],

    dates: [
      {
        "day": 0,
        "date": '1-23',
        "info": '今天'
      },
      {
        "day": 1,
        "date": '1-24',
        "info": '明天'
      },
      {
        "day": 2,
        "date": '1-25',
        "info": '后天'
      }
    ],
    selected: {
      day: 0,
      date: "1-23"
    },
    buyNum: 0,          //购买数量
    title: "",          //门票名
    price: 0,           //门票单价
    amount: 0,          //总支付数额
    buyInfo: "购票",    //购票按钮信息
    isVip: true,        //是否VIP
    isDiscount: true,   //是否享受9.5折优惠
    isUseScore: true    //是否使用积分
  },

  dateSelected: function (e) {   //TODO：选择购买日期
    var day = e.currentTarget.id;
    var date = e.currentTarget.dataset.info;
    this.setData({
      ['selected.day']: day,
      ['selected.date']: date
    })
  },

  numOps: function (e) {        //TODO：修改购买数量
    var ops = e.currentTarget.dataset.ops;
    var num = this.data.buyNum;
    var price = this.data.price;
    var isVip = this.data.isVip;
    

    if(ops=='plus') {
      num++;
    } else if (num > 0) {
      num--;
    }

    this.setData({
      buyNum: num,
    });

    this.updateAmount();
  },

  toggleDiscount: function (e) {
    var discount = this.data.isDiscount;
    this.setData({
      isDiscount: !discount
    });
    this.updateAmount();
  },

  toggleUseScore: function (e) {
    var useScore = this.data.isUseScore;
    this.setData({
      isUseScore: !useScore
    });
    this.updateAmount();
  },

  updateAmount: function() {      //TODO: 更新data.amount，并且更新购买按钮
    var isVip = this.data.isVip;
    var isDiscount = this.data.isDiscount;
    var isUseScore = this.data.isUseScore;
    var num = this.data.buyNum;
    var price = this.data.price;
    var currentAmount = num * price;

    if (isVip) {
      if (isDiscount) {
        currentAmount *= 0.95;
      }

      if (isUseScore && currentAmount >= 2) {
        currentAmount -= 2;
      } else if (currentAmount < 2) {
        currentAmount = 0;
      }
    }

    currentAmount = Math.floor(currentAmount * 100) / 100;    //保留两位有效数字

    var info = "购票";

    if (num > 0) {
      info = isVip ? "会员支付 " : "微信支付 ";
      info += currentAmount + "元";
    }

    this.setData({
      buyInfo: info
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var d = this.data.dates;
    var now = new Date();
    var s = "";
    d.forEach(function(item,index){
      item.date = "" + (now.getMonth() + 1) + "-" + (now.getDate() + index);
      s = index == 0 ? item.date : s;
    });
    this.setData({
      dates: d,
      ["selected.date"]: s,
      title: options.title,
      price: options.price
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