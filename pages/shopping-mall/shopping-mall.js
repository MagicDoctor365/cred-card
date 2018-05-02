var mydata = require("./data.js");
var persondata = require("../person-info/data.js");

Page({
  data: {
    bannerImgUrl: mydata.bannerImgUrl,
    goods: mydata.goods
  },
  buy:function(event){
    var id=event.currentTarget.dataset.id;
    var goodsTobuy = mydata.goods[id];
    wx.showModal({
      title: '请确认购买',
      content: '您将支付' + goodsTobuy.price + '元，购买后将获得'+goodsTobuy.point+'积分。',
      success: function (res) {
        if (res.confirm) {
          //积分增加，账户减少，账单增加一条记录
          persondata.points += goodsTobuy.point;
          persondata.balance -= goodsTobuy.price;
          persondata.deallist.push(goodsTobuy); 
          wx.showToast({
            title: '购买成功',
            icon: 'success',
            duration: 2000
          })
        } else if (res.cancel) {
          wx.showToast({
            title: '取消购买',
            icon: 'success',
            duration: 2000
          })
        }
      }
    })
  }
})