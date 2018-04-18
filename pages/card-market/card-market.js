var mydata = require("./data.js");

Page({
  data: {
    cardlist: mydata.cardlist,
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  }
})