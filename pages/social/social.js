var mydata = require("./data.js");
var gamedata = require("../game/data.js");
Page({
  data: {
    contacts: mydata.contacts
  },
  invite: function(event) {
    var id = event.currentTarget.dataset.id;
    var contact = this.data.contacts[id];
    //模拟邀请
    wx.showToast({
      title: '邀请已发出',
      icon: 'success',
      duration: 2000
    });
    setTimeout(()=> {
      wx.showToast({
        title: '对方接受邀请',
        icon: 'success',
        duration: 2000
      });
      if (contact.sex==="male"){
        gamedata.birds.push({
          imgUrl: "/images/game/bird1.gif"
        });
      } else {
        gamedata.birds.push({
          imgUrl: "/images/game/bird2.gif"
        });
      }
      
    }, 5000);
  },
  onLoad: function (options) {
  
  },

  onReady: function () {
  
  },

  onShow: function () {
  
  },

  onHide: function () {
  
  },
  onUnload: function () {
  
  },
  onPullDownRefresh: function () {
  
  },
  onReachBottom: function () {
  
  },
  onShareAppMessage: function () {
  
  }
})