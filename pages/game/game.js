// pages/game/game.js
var mydata = require('./data.js');
var util = require('./util.js');
var gamedata = require("./data.js");

Page({
  data: {
  },
  click: function(){
    wx.showActionSheet({
      itemList: ['逛花店','查看收益'],
      success: function (res) {
        switch(res.tapIndex) {
          case 0:
            wx.navigateTo({
              url: 'buyflower/buyflower'
            })
            break;
          case 1:
            wx.navigateTo({
              url: 'pointprofit/pointprofit'
            })
            break;
          default:
            break;
        }
      }
    })
  },
  onLoad: function (options) {
  },
  onReady: function () {
  },
  onShow: function() {
    this.initDraw();
    this.draw();
  },
  draw: function() {
    var that = this;
    setInterval(() => {
      var context = wx.createCanvasContext('myCanvas');
      context.drawImage("/images/game/bg.jpg", 0, 0, mydata.canvasWidth, mydata.canvasHeight);

      //确定花的坐标
      var flowers = mydata.flowers;
      flowers.forEach((flower, index) => {
        flower.x = util.x(index * 0.95 / flowers.length);
        flower.y = util.y(0.7);
      });

      //计算积分收益
      flowers.forEach((flower) => {
        var flowerInshop = gamedata.flowersInShop[flower.id];
        //计算每期收益，一只鸟能增加10%的每期收益
        flower.profit = (1 + gamedata.birds.length * 0.1) * flowerInshop.profit;

        //计算花期，一只蝴蝶能够减少5%的花期
        flower.age = Math.ceil((1 - gamedata.butterflies.length * 0.05) * flowerInshop.age);

        var peroids = Math.floor(gamedata.eclipseDays / flower.age);
        //计算

        var gain = flower.profit * peroids;
        flower.gain = gain;
      });

      //确定蝴蝶的坐标
      var butterflies = mydata.butterflies;
      butterflies.forEach((butterfly, index) => {
        butterfly.x = util.x(Math.random());
        butterfly.y = util.y(Math.random()*0.4+0.5);
      });

      //确定鸟的坐标
      var birds = mydata.birds;
      birds.forEach((bird) => {
        bird.x = util.x(Math.random());
        bird.y = util.y(Math.random()*0.4);
      });

      //绘制蝴蝶
      butterflies.forEach(butterfly => {
        context.drawImage(butterfly.imgUrl, butterfly.x, butterfly.y, gamedata.butterflyWidth, gamedata.butterflyWidth);
      });

      //绘制花
      flowers.forEach(flower => {
        context.drawImage(flower.imgUrl, flower.x, flower.y, gamedata.flowerWidth, gamedata.flowerWidth*flower.aspect);
        //如果有收益 就把金币画出来
        if(flower.gain > 0){
          var peroids = Math.floor(gamedata.eclipseDays / flower.age);
          var mygold;
          if(flower.profit >=50 && flower.profit < 100){
            mygold = gamedata.gold[0];
          } 
          else if (flower.profit >= 100 && flower.profit < 150) {
            mygold = gamedata.gold[1];
          }
          else if (flower.profit >= 150 && flower.profit < 200) {
            mygold = gamedata.gold[2];
          } else {
            mygold = gamedata.gold[3];
          }

          for(var i=0; i<peroids;i++) {
            var goldx = flower.x + gamedata.flowerWidth * 0.3;
            var goldy = flower.y - 15 - 10*i;
            context.drawImage(mygold.imgUrl, goldx, goldy, mygold.width, mygold.height);
          }
          
        }
      });

      //绘制鸟
      birds.forEach(bird => {
        context.drawImage(bird.imgUrl, bird.x, bird.y, bird.width, bird.height);
      });

      wx.drawCanvas({
        canvasId: "myCanvas",
        actions: context.getActions()
      });
    }, 700);
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
  }
})