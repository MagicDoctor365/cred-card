var mydata = require("./data.js");

Page({
  data: {
    bannerImgUrl: mydata.bannerImgUrl,
    catglist: mydata.catglist
  },
  onTap: function(e){
    console.log(e);
  }
})