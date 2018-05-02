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
          imgUrl: gamedata.allBirds[0].imgUrl,
          width: gamedata.allBirds[0].width,
          height: gamedata.allBirds[0].height,
        });
      } else {
        gamedata.birds.push({
          imgUrl: gamedata.allBirds[1].imgUrl,
          width: gamedata.allBirds[1].width,
          height: gamedata.allBirds[1].height,
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