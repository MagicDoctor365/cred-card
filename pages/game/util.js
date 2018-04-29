var mydata = require("./data.js");

var x = function(percent) {
  return percent * mydata.canvasWidth;
};

var y = function(percent) {
  return percent * mydata.canvasHeight;
};

module.exports = {
  x: x,
  y: y
}