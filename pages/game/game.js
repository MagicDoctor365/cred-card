// pages/game/game.js
Page({
  data: {
    canvasWidth: 0,
    canvasHeight: 0
  },
  onLoad: function (options) {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.canvasWidth = res.windowWidth;
        that.canvasHeight = res.windowHeight * 0.8;
        console.log(that.canvasWidth);
        console.log(that.canvasHeight);
      }
    })
  },
  onReady: function () {
    var context = wx.createCanvasContext('myCanvas');
    
    context.drawImage('/images/game/bf0.png', 0, 0, 50, 50);
    context.drawImage('/images/game/bf1.png', 100, 100, 50, 50);
    context.drawImage('/images/game/bf2.png', 200, 200, 50, 50);
    context.drawImage('/images/game/fl0.png', 120, 200, 100, 100);
    context.drawImage('/images/game/fl1.png', 50, 400, 100, 100);
    context.drawImage('/images/game/fl2.png', 160, 300, 100, 100);
    wx.drawCanvas({
      canvasId: "myCanvas",
      actions: context.getActions()
    })
  }
})