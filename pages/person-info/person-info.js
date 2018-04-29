// pages/person-info/person-info.js
var app=getApp();
var myData = require('./data.js');

Page({
  data: {
    userInfo: {},
    iconList: myData.iconList
  },
  onLoad: function (options) {
    console.log(this.data.iconList);
    var userinfo = app.globalData.userInfo;
    if (userinfo){
      this.setData({ userInfo: userinfo });
    } else {
      this.setData({
        userInfo: {
          "avatarUrl": "/images/social/male.png",
          "nickName": "未登录用户"
        }
      })
    }
    
  }
})