var canvasWidth = 0;
var canvasHeight = 0;

var butterflies = [];
var flowers = [];
var birds = [];

var allBirds = [
  "/images/game/bird1.gif",
 "/images/game/bird2.gif"
]

var allButterflies = [
  "/images/game/bf1.gif",
  "/images/game/bf2.gif",
  "/images/game/bf3.gif",
  "/images/game/bf4.gif"
];

var flowersInShop = [
  {
    imgUrl: "/images/game/fl1.gif",
    name: "姹紫嫣红",
    age: 10,
    profit: 0.2,
    price: 100
  },
  {
    imgUrl: "/images/game/fl2.gif",
    name: "清新脱俗",
    age: 10,
    profit: 0.2,
    price: 100
  },
  {
    imgUrl: "/images/game/fl3.gif",
    name: "杏雨梨云",
    age: 10,
    profit: 0.2,
    price: 100
  },
  {
    imgUrl: "/images/game/fl4.gif",
    name: "亭亭玉立",
    age: 10,
    profit: 0.2,
    price: 100
  },
  {
    imgUrl: "/images/game/fl5.gif",
    name: "人面桃花",
    age: 10,
    profit: 0.2,
    price: 100
  },
  {
    imgUrl: "/images/game/fl6.gif",
    name: "暗香疏影",
    age: 10,
    profit: 0.2,
    price: 100
  }
];

module.exports = {
  allButterflies: allButterflies,
  butterflies: butterflies,
  flowersInShop: flowersInShop,
  flowers: flowers,
  birds: birds,
  allBirds: allBirds,
  canvasWidth,
  canvasHeight
}