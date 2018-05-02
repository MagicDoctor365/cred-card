var mydata = require("./data.js");
var gamedata = require("../game/data.js");
var persondata = require("../person-info/data.js");

Page({
  data: {
    cardlist: mydata.cardlist,
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  apply: function(event){
    var id = event.currentTarget.dataset.id;
    var cardToApply = this.data.cardlist[id];
    wx.showModal({
      title: '您即将办理“' + cardToApply.name+'”',
      content: '请您充分核实您的个人信息，确认办理。办理成功后，您将获得300积分。',
      success: function (res) {
        if (res.confirm) {
          //办理成功后往cards增添一项
          persondata.cards.push(cardToApply.name);
          //办理成功后增加一个蝴蝶
          var butterfly = gamedata.allButterflies[id];
          gamedata.butterflies.push({
            imgUrl: butterfly
          });
          //获得300积分
          persondata.points += 300;
          wx.showToast({
            title: "办理成功",
            icon: 'success',
            duration: 1000
          });
        } else if (res.cancel) {
          wx.showToast({
            title: "取消办理",
            icon: 'success',
            duration: 2000
          });
        }
      }
    });
    
  }
})