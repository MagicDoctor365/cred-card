// pages/person-info/person-info.js
var app=getApp();
var myData = require('./data.js');

Page({
  data: {
    userInfo: {},
    iconList: myData.iconList
  },
  getPoint: function(){
    wx.showModal({
      title: '积分查询',
      content: '您当前的积分为：' + myData.points
    });
  },
  getLimit: function(){
    wx.showModal({
      title: '额度查询',
      content: '您的额度为：￥' + myData.limit + "元"
    })
  },
  getProgress: function(){
    wx.showModal({
      title: '进度查询',
      content: '您的信用卡已经办理完成，请等候收取'
    })
  },
  getInstallment: function(){
    wx.showModal({
      title: '办理分期',
      content: '您确定要办理分期业务吗？',
      success: function (res) {
        if (res.confirm) {
          wx.showToast({
            title: '分期成功！',
            icon: 'success',
            duration: 2000
          });
        } else if (res.cancel) {
          wx.showToast({
            title: '取消分期！',
            icon: 'success',
            duration: 2000
          })
        }
      }
    })
  },
  getAuth: function(){
    var auth = "";
    myData.auth.forEach((item)=> {
      auth+=item+" "
    })
    wx.showModal({
      title: '查询权限',
      content: '您目前有以下权限:\n'+auth
    });
  },
  applyCard: function(){
    wx.showModal({
      title: '办理信用卡',
      content: '请前往“卡中心”选择适合您的信用卡进行办理'
    });
  },
  manageCards: function(){
    var content;
    var cards="";
    if(myData.cards.length === 0) {
      content = "您还没有申请过信用卡，快去申请一个吧";
    } else {
      myData.cards.forEach((item) => {
        cards += item + " ";
      })
      content = "您已经申请了以下信用卡：\n" + cards;
    }
   
    wx.showModal({
      title: '卡片管理',
      content: content
    });
  },
  getDealllist: function(){
    var info = "";
    myData.deallist.forEach((deal,index)=>{
      info += (index+1) + ". "+ deal.desc + "消费" + deal.price +"元；"
    });
    info += "余额为"+myData.balance+"元。";
    wx.showModal({
      title: '我的账单',
      content: info
    });
  },
  click: function(event) {
    var id = event.currentTarget.dataset.id;
    var icon = myData.iconList[id];
    switch(id){
      case 0:
        this.getLimit();
        break;
      case 1:
        this.getDealllist();
        break;
      case 2:
        this.getPoint();
        break;
      case 3:
        this.manageCards();
        break;
      case 4:
        this.applyCard();
        break;
      case 5:
        this.getInstallment();
        break;
      case 6:
        this.getAuth();
        break;
      case 7:
        this.getProgress();
        break;
      case 8:
        wx.navigateTo({
          url: 'neighbour/neighbour',
        })
        break; 
      default:
        break;
    }
  },
  onLoad: function (options) {
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