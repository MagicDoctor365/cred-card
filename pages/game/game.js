// pages/game/game.js
var mydata = require('./data.js');
var util = require('./util.js');

Page({
  data: {
  },
  onLoad: function (options) {
  },
  onReady: function () {
  },
  onShow: function() {
    this.initDraw();
    this.draw();
  },
  gotoFlowerShop: function(){
    wx.navigateTo({
      url: './buyflower/buyflower',
    })
  },
  draw: function() {
    var that = this;
    setInterval(() => {
      var context = wx.createCanvasContext('myCanvas');
      context.drawImage("/images/game/bg.gif", 0, 0, mydata.canvasWidth, mydata.canvasHeight);

      //重新打乱蝴蝶的坐标
      mydata.butterflies.forEach((butterfly, index) => {
        butterfly.x = util.x(Math.random());
        butterfly.y = util.y(Math.random()*0.4+0.5);
      });

      //重新打乱鸟的坐标
      mydata.birds.forEach((bird) => {
        bird.x = util.x(Math.random());
        bird.y = util.y(Math.random()*0.4);
      });

      //绘制蝴蝶 鸟 花
      mydata.butterflies.forEach(butterfly => {
        context.drawImage(butterfly.imgUrl, butterfly.x, butterfly.y, 50, 50);
      });
      mydata.flowers.forEach(flower => {
        context.drawImage(flower.imgUrl, flower.x, flower.y, 80, 100);
      });

      mydata.birds.forEach(bird => {
        context.drawImage(bird.imgUrl, bird.x, bird.y, 60, 60);
      });

      wx.drawCanvas({
        canvasId: "myCanvas",
        actions: context.getActions()
      });
    }, 400);
  },
  initDraw: function(){
    var that = this;
    //确定画布的宽和高
    wx.getSystemInfo({
      success: function (res) {
        mydata.canvasWidth = res.windowWidth;
        mydata.canvasHeight = res.windowHeight;
      }
    });

    //初始化蝴蝶的位置
    var butterflies = mydata.butterflies;
    butterflies.forEach((butterfly) => {
      butterfly.x = util.x(Math.random());
      butterfly.y = util.y(Math.random() * 0.4 + 0.5);
    });

    //初始化鸟的位置
    var birds = mydata.birds;
    birds.forEach(bird => {
      bird.x = util.x(Math.random());
      bird.y = util.y(Math.random() * 0.4);
    });

    //初始化花瓶的位置
    var flowers = mydata.flowers;
    flowers.forEach((flower, index) => {
      flower.x = util.x(index * 0.85 / flowers.length);
      flower.y = util.y(0.7);
    });
  }
})