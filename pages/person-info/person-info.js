// pages/person-info/person-info.js
var app=getApp();
var myData = require('./data.js');

Page({
  data: {
    userInfo: {},
    iconList: myData.iconList
  },
  onLoad: function (options) {
    var userinfo = app.globalData.userInfo;
    this.setData({userInfo: userinfo});
  }
})