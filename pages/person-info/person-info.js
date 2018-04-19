// pages/person-info/person-info.js
var app=getApp();

Page({
  data: {
    userInfo: {}
  },
  onLoad: function (options) {
    var userinfo = app.globalData.userInfo;
    this.setData({userInfo: userinfo});
  }
})