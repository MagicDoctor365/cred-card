var canvasWidth = 0;
var canvasHeight = 0;

var butterflies = [];
var flowers = [];
var birds = [];

var allBirds = [
  {
      imgUrl: "/images/game/bird1.gif",
      width: 60,
      height: 63.18
  },
  {
    imgUrl: "/images/game/bird2.gif",
    width: 150,
    height: 47.5
  }
];

var allButterflies = [
  "/images/game/bf1.gif",
  "/images/game/bf2.gif",
  "/images/game/bf3.gif",
  "/images/game/bf4.gif"
];

var flowersInShop = [
  {
    id: 0,
    imgUrl: "/images/game/fl1.gif",
    name: "鸢尾",
    age: 5,
    profit: 100,
    price: 450,
    aspect: 1.5
  },
  {
    id: 1,
    imgUrl: "/images/game/fl2.gif",
    name: "向日葵",
    age: 6,
    profit: 100,
    price: 300,
    aspect: 1.535
  },
  {
    id: 2,
    imgUrl: "/images/game/fl3.gif",
    name: "牵牛花",
    age: 3,
    profit: 50,
    price: 350,
    aspect: 1.18
  },
  {
    id: 3,
    imgUrl: "/images/game/fl4.gif",
    name: "玫瑰",
    age: 5,
    profit: 150,
    price: 600,
    aspect: 1.185
  },
  {
    id: 4,
    imgUrl: "/images/game/fl5.gif",
    name: "飞燕草",
    age: 3,
    profit: 50,
    price: 300,
    aspect: 1.355
  },
  {
    id: 5,
    imgUrl: "/images/game/fl6.gif",
    name: "琴叶珊瑚",
    age: 10,
    profit: 200,
    price: 300,
    aspect: 1.435
  }
];

var eclipseDays = 0;
var flowerWidth = 80;
var butterflyWidth = 50;

var gold = [
  {
    imgUrl: "/images/game/coin.gif",
    width: 30,
    height: 30
  },
  {
    imgUrl: "/images/game/yuanbao.gif",
    width: 40,
    height: 28.8
  },
  {
    imgUrl: "/images/game/gem.gif",
    width: 30,
    height: 28
  },
  {
    imgUrl: "/images/game/diamond.gif",
    width: 40,
    height: 35
  }
];

module.exports = {
  allButterflies: allButterflies,
  butterflies: butterflies,
  flowersInShop: flowersInShop,
  flowers: flowers,
  birds: birds,
  allBirds: allBirds,
  canvasWidth: canvasWidth,
  canvasHeight: canvasHeight,
  eclipseDays: eclipseDays,
  flowerWidth: flowerWidth,
  butterflyWidth: butterflyWidth,
  gold: gold
}