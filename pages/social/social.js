var mydata = require("./data.js");
var gamedata = require("../game/data.js");
var persondata = require("../person-info/data.js");
Page({
  data: {
    contacts: mydata.contacts
  },
  invite: function(event) {
    var id = event.currentTarget.dataset.id;
    var contact = this.data.contacts[id];
    //模拟邀请
    wx.showModal({
      title: '邀请加入',
      content: '您将向'+contact.name + '发出邀请，对方接受邀请后您将获得500积分',
      success: function (res) {
        if (res.confirm) {
          wx.showToast({
            title: '邀请已发出',
            icon: 'success',
            duration: 2000
          });
          setTimeout(() => {
            persondata.points += 500;
            wx.showToast({
              title: '对方接受邀请',
              icon: 'success',
              duration: 1000
            });
            if (contact.sex === "male") {
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
          }, 3000);
        } else if (res.cancel) {
          wx.showToast({
            title: "取消邀请",
            icon: 'success',
            duration: 2000
          });
        }
      }
    });
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