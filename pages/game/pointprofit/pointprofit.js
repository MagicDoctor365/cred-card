var persondata = require("../../person-info/data.js");
var gamedata = require("../data.js");

Page({
  data: {
    points: persondata.points,
    butterflyNum: 0,
    reduceAge: 0,
    birdNum:0,
    increaseProfit: 0,
    reduceAgePercent: 0,
    increaseProfitPercent: 0,
    groupedFlowers: [],
    eclipseDays: 0
  },
  
  daysChange: function(e){
    gamedata.eclipseDays = e.detail.value;
  },

  onLoad: function (options) {
    var reduceAge = gamedata.butterflies.length * 0.05;
    var increaseProfit = gamedata.birds.length * 0.1;

    var flowers = gamedata.flowers;
    var flowersInShop = gamedata.flowersInShop;
    var groups = {};
    var groupedFlowers = [];
    flowers.map((flower) => {
      if (flower.id in groups) {
        groups[flower.id]++;
      } else {
        groups[flower.id] = 1;
      }
    });
    Object.keys(groups).forEach((id)=>{
      var flower = flowersInShop[id];
      var curProfit = Math.round(Math.round(30 / (flower.age * (1 - reduceAge))) * flower.profit * (1 + increaseProfit)*groups[id]);
      var preProfit = Math.round(Math.round(30 / flower.age) * flower.profit * groups[id]);
      groupedFlowers.push({
        name: flower.name,
        amount: groups[id],
        curProfit: curProfit,
        preProfit: preProfit,
      });
    });

    this.setData({
      points: persondata.points,
      butterflyNum: gamedata.butterflies.length,
      reduceAge: reduceAge,
      birdNum: gamedata.birds.length,
      increaseProfit: increaseProfit,
      reduceAgePercent: Math.round(reduceAge*100) + "%",
      increaseProfitPercent: Math.round(increaseProfit*100) + "%",
      groupedFlowers: groupedFlowers,
      flowersInShop: gamedata.flowersInShop,
      eclipseDays: gamedata.eclipseDays
    });
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