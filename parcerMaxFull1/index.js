
console.log("Hello world");

const puppeteer = require("puppeteer");
// const puppeteer = require('puppeteer-extra');
// const StealthPlugin = require('puppeteer-extra-plugin-stealth');
// puppeteer.use(StealthPlugin());





const arrLinkJabko16IPH = [
  "https://jabko.ua/iphone/apple-iphone-16/apple-iphone-16-128gb-black",
  "https://jabko.ua/iphone/apple-iphone-16/apple-iphone-16-128gb-ultramarine",
  "https://jabko.ua/iphone/apple-iphone-16/apple-iphone-16-128gb-white",
  "https://jabko.ua/iphone/apple-iphone-16/apple-iphone-16-128gb-pink",
  "https://jabko.ua/iphone/apple-iphone-16/apple-iphone-16-128gb-teal",

  "https://jabko.ua/iphone/apple-iphone-16/apple-iphone-16-256gb-black",
  "https://jabko.ua/iphone/apple-iphone-16/apple-iphone-16-256gb-ultramarine",
  "https://jabko.ua/iphone/apple-iphone-16/apple-iphone-16-256gb-white",
  "https://jabko.ua/iphone/apple-iphone-16/apple-iphone-16-256gb-pink",
  "https://jabko.ua/iphone/apple-iphone-16/apple-iphone-16-256gb-teal",

  "https://jabko.ua/iphone/apple-iphone-16/apple-iphone-16-512gb-black",
  "https://jabko.ua/iphone/apple-iphone-16/apple-iphone-16-512gb-ultramarine",
  "https://jabko.ua/iphone/apple-iphone-16/apple-iphone-16-512gb-white",
  "https://jabko.ua/iphone/apple-iphone-16/apple-iphone-16-512gb-pink",
  "https://jabko.ua/iphone/apple-iphone-16/apple-iphone-16-512gb-teal",


  "https://jabko.ua/iphone/apple-iphone-16-plus/apple-iphone-16-plus-128gb-black",
  "https://jabko.ua/iphone/apple-iphone-16-plus/apple-iphone-16-plus-128gb-ultramarine",
  "https://jabko.ua/iphone/apple-iphone-16-plus/apple-iphone-16-plus-128gb-white",
  "https://jabko.ua/iphone/apple-iphone-16-plus/apple-iphone-16-plus-128gb-pink",
  "https://jabko.ua/iphone/apple-iphone-16-plus/apple-iphone-16-plus-128gb-teal",

  "https://jabko.ua/iphone/apple-iphone-16-plus/apple-iphone-16-plus-256gb-black",
  "https://jabko.ua/iphone/apple-iphone-16-plus/apple-iphone-16-plus-256gb-ultramarine",
  "https://jabko.ua/iphone/apple-iphone-16-plus/apple-iphone-16-plus-256gb-white",
  "https://jabko.ua/iphone/apple-iphone-16-plus/apple-iphone-16-plus-256gb-pink",
  "https://jabko.ua/iphone/apple-iphone-16-plus/apple-iphone-16-plus-256gb-teal",

  "https://jabko.ua/iphone/apple-iphone-16-plus/apple-iphone-16-plus-512gb-black",
  "https://jabko.ua/iphone/apple-iphone-16-plus/apple-iphone-16-plus-512gb-ultramarine",
  "https://jabko.ua/iphone/apple-iphone-16-plus/apple-iphone-16-plus-512gb-white",
  "https://jabko.ua/iphone/apple-iphone-16-plus/apple-iphone-16-plus-512gb-pink",
  "https://jabko.ua/iphone/apple-iphone-16-plus/apple-iphone-16-plus-512gb-teal",




  "https://jabko.ua/iphone/apple-iphone-16-pro/apple-iphone-16-pro-128gb-natural-titanium",
  "https://jabko.ua/iphone/apple-iphone-16-pro/apple-iphone-16-pro-128gb-black-titanium",
  "https://jabko.ua/iphone/apple-iphone-16-pro/apple-iphone-16-pro-128gb-white-titanium",
  "https://jabko.ua/iphone/apple-iphone-16-pro/apple-iphone-16-pro-128gb-desert-titanium",

  "https://jabko.ua/iphone/apple-iphone-16-pro/apple-iphone-16-pro-256gb-natural-titanium",
  "https://jabko.ua/iphone/apple-iphone-16-pro/apple-iphone-16-pro-256gb-black-titanium",
  "https://jabko.ua/iphone/apple-iphone-16-pro/apple-iphone-16-pro-256gb-white-titanium",
  "https://jabko.ua/iphone/apple-iphone-16-pro/apple-iphone-16-pro-256gb-desert-titanium",

  "https://jabko.ua/iphone/apple-iphone-16-pro/apple-iphone-16-pro-512gb-natural-titanium",
  "https://jabko.ua/iphone/apple-iphone-16-pro/apple-iphone-16-pro-512gb-black-titanium",
  "https://jabko.ua/iphone/apple-iphone-16-pro/apple-iphone-16-pro-512gb-white-titanium",
  "https://jabko.ua/iphone/apple-iphone-16-pro/apple-iphone-16-pro-512gb-desert-titanium",

  "https://jabko.ua/iphone/apple-iphone-16-pro/apple-iphone-16-pro-1tb-natural-titanium",
  "https://jabko.ua/iphone/apple-iphone-16-pro/apple-iphone-16-pro-1tb-black-titanium",
  "https://jabko.ua/iphone/apple-iphone-16-pro/apple-iphone-16-pro-1tb-white-titanium",
  "https://jabko.ua/iphone/apple-iphone-16-pro/apple-iphone-16-pro-1tb-desert-titanium",



  "https://jabko.ua/iphone/apple-iphone-16-pro-max/apple-iphone-16-pro-max-256gb-natural-titanium",
  "https://jabko.ua/iphone/apple-iphone-16-pro-max/apple-iphone-16-pro-max-256gb-black-titanium",
  "https://jabko.ua/iphone/apple-iphone-16-pro-max/apple-iphone-16-pro-max-256gb-white-titanium",
  "https://jabko.ua/iphone/apple-iphone-16-pro-max/apple-iphone-16-pro-max-256gb-desert-titanium",

  "https://jabko.ua/iphone/apple-iphone-16-pro-max/apple-iphone-16-pro-max-512gb-natural-titanium",
  "https://jabko.ua/iphone/apple-iphone-16-pro-max/apple-iphone-16-pro-max-512gb-black-titanium",
  "https://jabko.ua/iphone/apple-iphone-16-pro-max/apple-iphone-16-pro-max-512gb-white-titanium",
  "https://jabko.ua/iphone/apple-iphone-16-pro-max/apple-iphone-16-pro-max-512gb-desert-titanium",

  "https://jabko.ua/iphone/apple-iphone-16-pro-max/apple-iphone-16-pro-max-1tb-natural-titanium",
  "https://jabko.ua/iphone/apple-iphone-16-pro-max/apple-iphone-16-pro-max-1tb-black-titanium",
  "https://jabko.ua/iphone/apple-iphone-16-pro-max/apple-iphone-16-pro-max-1tb-white-titanium",
  "https://jabko.ua/iphone/apple-iphone-16-pro-max/apple-iphone-16-pro-max-1tb-desert-titanium",
];

const arrLinkIstore16IPH = [
  "https://www.istore.ua/ua/item/iphone-16-128-black/",
  "https://www.istore.ua/ua/item/iphone-16-128gb-ultramarine/",
  "https://www.istore.ua/ua/item/iphone-16-128gb-white/",
  "https://www.istore.ua/ua/item/iphone-16-128gb-pink/",
  "https://www.istore.ua/ua/item/iphone-16-128gb-teal/",

  "https://www.istore.ua/ua/item/iphone-16-256gb-black/",
  "https://www.istore.ua/ua/item/iphone-16-256gb-ultramarine/",
  "https://www.istore.ua/ua/item/iphone-16-256gb-white/",
  "https://www.istore.ua/ua/item/iphone-16-256gb-pink/",
  "https://www.istore.ua/ua/item/iphone-16-256gb-teal/",

  "https://www.istore.ua/ua/item/iphone-16-512gb-black/",
  "https://www.istore.ua/ua/item/iphone-16-512gb-ultramarine/",
  "https://www.istore.ua/ua/item/iphone-16-512gb-white/",
  "https://www.istore.ua/ua/item/iphone-16-512gb-pink/",
  "https://www.istore.ua/ua/item/iphone-16-512gb-teal/",

  "https://www.istore.ua/ua/item/iphone-16-plus-128gb-black/",
  "https://www.istore.ua/ua/item/iphone-16-plus-128gb-ultramarine/",
  "https://www.istore.ua/ua/item/iphone-16-plus-128gb-white/",
  "https://www.istore.ua/ua/item/iphone-16-plus-128gb-pink/",
  "https://www.istore.ua/ua/item/iphone-16-plus-128gb-teal/",

  "https://www.istore.ua/ua/item/iphone-16-plus-256gb-black/",
  "https://www.istore.ua/ua/item/iphone-16-plus-256gb-ultramarine/",
  "https://www.istore.ua/ua/item/iphone-16-plus-256gb-white/",
  "https://www.istore.ua/ua/item/iphone-16-plus-256gb-pink/",
  "https://www.istore.ua/ua/item/iphone-16-plus-256gb-teal/",

  "https://www.istore.ua/ua/item/iphone-16-plus-512gb-black/",
  "https://www.istore.ua/ua/item/iphone-16-plus-512gb-ultramarine/",
  "https://www.istore.ua/ua/item/iphone-16-plus-512gb-white/",
  "https://www.istore.ua/ua/item/iphone-16-plus-512gb-pink/",
  "https://www.istore.ua/ua/item/iphone-16-plus-512gb-teal/",



  "https://www.istore.ua/ua/item/iphone-16-pro-128gb-natural-titanium/",
  "https://www.istore.ua/ua/item/iphone-16-pro-128gb-black-titanium/",
  "https://www.istore.ua/ua/item/iphone-16-pro-128gb-white-titanium/",
  "https://www.istore.ua/ua/item/iphone-16-pro-128gb-desert-titanium/",

  "https://www.istore.ua/ua/item/iphone-16-pro-256gb-natural-titanium/",
  "https://www.istore.ua/ua/item/iphone-16-pro-256gb-black-titanium/",
  "https://www.istore.ua/ua/item/iphone-16-pro-256gb-white-titanium/",
  "https://www.istore.ua/ua/item/iphone-16-pro-256gb-desert-titanium/",

  "https://www.istore.ua/ua/item/iphone-16-pro-512gb-natural-titanium/",
  "https://www.istore.ua/ua/item/iphone-16-pro-512gb-black-titanium/",
  "https://www.istore.ua/ua/item/iphone-16-pro-512gb-white-titanium/",
  "https://www.istore.ua/ua/item/iphone-16-pro-512gb-desert-titanium/",

  "https://www.istore.ua/ua/item/iphone-16-pro-1tb-natural-titanium/",
  "https://www.istore.ua/ua/item/iphone-16-pro-1tb-black-titanium/",
  "https://www.istore.ua/ua/item/iphone-16-pro-1tb-white-titanium/",
  "https://www.istore.ua/ua/item/iphone-16-pro-1tb-desert-titanium/",



  "https://www.istore.ua/ua/item/iphone-16-pro-max-256gb-natural-titanium/",
  "https://www.istore.ua/ua/item/iphone-16-pro-max-256gb-black-titanium/",
  "https://www.istore.ua/ua/item/iphone-16-pro-max-256gb-white-titanium/",
  "https://www.istore.ua/ua/item/iphone-16-pro-max-256gb-desert-titanium/",

  "https://www.istore.ua/ua/item/iphone-16-pro-max-512gb-natural-titanium/",
  "https://www.istore.ua/ua/item/iphone-16-pro-max-512gb-black-titanium/",
  "https://www.istore.ua/ua/item/iphone-16-pro-max-512gb-white-titanium/",
  "https://www.istore.ua/ua/item/iphone-16-pro-max-512gb-desert-titanium/",

  "https://www.istore.ua/ua/item/iphone-16-pro-max-1tb-natural-titanium/",
  "https://www.istore.ua/ua/item/iphone-16-pro-max-1tb-black-titanium/",
  "https://www.istore.ua/ua/item/iphone-16-pro-max-1tb-white-titanium/",
  "https://www.istore.ua/ua/item/iphone-16-pro-max-1tb-desert-titanium/",
];

const arrLinkMobilePlanet16IPH = [
  "https://mobileplanet.ua/ua/apple-iphone-16-128gb-black-mye73-322275",
  "https://mobileplanet.ua/ua/apple-iphone-16-128gb-ultramarine-myec3-322283",
  "https://mobileplanet.ua/ua/apple-iphone-16-128gb-white-mye93-322284",
  "https://mobileplanet.ua/ua/apple-iphone-16-128gb-pink-myea3-322281",
  "https://mobileplanet.ua/ua/apple-iphone-16-128gb-teal-myed3-322282",

  "https://mobileplanet.ua/ua/apple-iphone-16-256gb-black-myee3-322285",
  "https://mobileplanet.ua/ua/apple-iphone-16-256gb-ultramarine-myeh3-322293",
  "https://mobileplanet.ua/ua/apple-iphone-16-256gb-white-myef3-322294",
  "https://mobileplanet.ua/ua/apple-iphone-16-256gb-pink-myeg3-322291",
  "https://mobileplanet.ua/ua/apple-iphone-16-256gb-teal-myej3-322292",

  "https://mobileplanet.ua/ua/apple-iphone-16-512gb-black-myek3-322295",
  "https://mobileplanet.ua/ua/apple-iphone-16-512gb-ultramarine-myer3-322303",
  "https://mobileplanet.ua/ua/apple-iphone-16-512gb-white-myep3-322304",
  "https://mobileplanet.ua/ua/apple-iphone-16-512gb-pink-myeq3-322301",
  "https://mobileplanet.ua/ua/apple-iphone-16-512gb-teal-myeu3-322302",


  "https://mobileplanet.ua/ua/apple-iphone-16-plus-128gb-black-mxvu3-322305",
  "https://mobileplanet.ua/ua/apple-iphone-16-plus-128gb-ultramarine-m-322313",
  "https://mobileplanet.ua/ua/apple-iphone-16-plus-128gb-white-mxvv3-322314",
  "https://mobileplanet.ua/ua/apple-iphone-16-plus-128gb-pink-mxvw3-322311",
  "https://mobileplanet.ua/ua/apple-iphone-16-plus-128gb-teal-mxvy3-322312",

  "https://mobileplanet.ua/ua/apple-iphone-16-plus-256gb-black-mxwn3-322315",
  "https://mobileplanet.ua/ua/apple-iphone-16-plus-256gb-ultramarine-m-322323",
  "https://mobileplanet.ua/ua/apple-iphone-16-plus-256gb-white-mxwv3-322324",
  "https://mobileplanet.ua/ua/apple-iphone-16-plus-256gb-pink-mxy13-322321",
  "https://mobileplanet.ua/ua/apple-iphone-16-plus-256gb-teal-mxy53-322322",

  "https://mobileplanet.ua/ua/apple-iphone-16-plus-512gb-black-my1p3-322325",
  "https://mobileplanet.ua/ua/apple-iphone-16-plus-512gb-ultramarine-m-322333",
  "https://mobileplanet.ua/ua/apple-iphone-16-plus-512gb-white-my1x3-322334",
  "https://mobileplanet.ua/ua/apple-iphone-16-plus-512gb-pink-my253-322331",
  "https://mobileplanet.ua/ua/apple-iphone-16-plus-512gb-teal-my2j3-322332",



  "https://mobileplanet.ua/ua/apple-iphone-16-pro-128gb-natural-titani-322341",
  "https://mobileplanet.ua/ua/apple-iphone-16-pro-128gb-black-titanium-322335",
  "https://mobileplanet.ua/ua/apple-iphone-16-pro-128gb-white-titanium-322342",
  "https://mobileplanet.ua/ua/apple-iphone-16-pro-128gb-desert-titaniu-322336",


  "https://mobileplanet.ua/ua/apple-iphone-16-pro-256gb-natural-titani-322357",
  "https://mobileplanet.ua/ua/apple-iphone-16-pro-256gb-black-titanium-322351",
  "https://mobileplanet.ua/ua/apple-iphone-16-pro-256gb-white-titanium-322358",
  "https://mobileplanet.ua/ua/apple-iphone-16-pro-256gb-desert-titaniu-322352",


  "https://mobileplanet.ua/ua/apple-iphone-16-pro-512gb-natural-titani-322365",
  "https://mobileplanet.ua/ua/apple-iphone-16-pro-512gb-black-titanium-322359",
  "https://mobileplanet.ua/ua/apple-iphone-16-pro-512gb-white-titanium-322366",
  "https://mobileplanet.ua/ua/apple-iphone-16-pro-512gb-desert-titaniu-322360",

  "https://mobileplanet.ua/ua/apple-iphone-16-pro-1tb-natural-titanium-322349",
  "https://mobileplanet.ua/ua/apple-iphone-16-pro-1tb-black-titanium-m-322343",
  "https://mobileplanet.ua/ua/apple-iphone-16-pro-1tb-white-titanium-m-322350",
  "https://mobileplanet.ua/ua/apple-iphone-16-pro-1tb-desert-titanium-322344",



  "https://mobileplanet.ua/ua/apple-iphone-16-pro-max-256gb-natural-ti-322381",
  "https://mobileplanet.ua/ua/apple-iphone-16-pro-max-256gb-black-tita-322375",
  "https://mobileplanet.ua/ua/apple-iphone-16-pro-max-256gb-white-tita-322382",
  "https://mobileplanet.ua/ua/apple-iphone-16-pro-max-256gb-desert-tit-322376",

  "https://mobileplanet.ua/ua/apple-iphone-16-pro-max-512gb-natural-ti-322389",
  "https://mobileplanet.ua/ua/apple-iphone-16-pro-max-512gb-black-tita-322383",
  "https://mobileplanet.ua/ua/apple-iphone-16-pro-max-512gb-white-tita-322390",
  "https://mobileplanet.ua/ua/apple-iphone-16-pro-max-512gb-desert-tit-322384",

  "https://mobileplanet.ua/ua/apple-iphone-16-pro-max-1tb-natural-tita-322373",
  "https://mobileplanet.ua/ua/apple-iphone-16-pro-max-1tb-black-titani-322367",
  "https://mobileplanet.ua/ua/apple-iphone-16-pro-max-1tb-white-titani-322374",
  "https://mobileplanet.ua/ua/apple-iphone-16-pro-max-1tb-desert-titan-322368",
];

const arrLinkGro16IPH = [
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16/smartfon-apple-iphone-16-128gb-black-mye73/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16/smartfon-apple-iphone-16-128gb-ultramarine-myec3/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16/smartfon-apple-iphone-16-128gb-white-mye93/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16/smartfon-apple-iphone-16-128gb-pink-myea3/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16/smartfon-apple-iphone-16-128gb-teal-myed3/",

  "https://grokholsky.com/ua/product/apple/iphone/iphone-16/smartfon-apple-iphone-16-256gb-black-myee3/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16/smartfon-apple-iphone-16-256gb-ultramarine-myeh3/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16/smartfon-apple-iphone-16-256gb-white-myef3/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16/smartfon-apple-iphone-16-256gb-pink-myeg3/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16/smartfon-apple-iphone-16-256gb-teal-myej3/",

  "https://grokholsky.com/ua/product/apple/iphone/iphone-16/smartfon-apple-iphone-16-512gb-black-myek3/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16/smartfon-apple-iphone-16-512gb-ultramarine-myer3/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16/smartfon-apple-iphone-16-512gb-white-myep3/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16/smartfon-apple-iphone-16-512gb-pink-myeq3/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16/smartfon-apple-iphone-16-512gb-teal-myeu3/",

  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-plus/smartfon-apple-iphone-16-plus-128gb-black-mxvu3/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-plus/smartfon-apple-iphone-16-plus-128gb-ultramarine-mxvx3/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-plus/smartfon-apple-iphone-16-plus-128gb-white-mxvv3/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-plus/smartfon-apple-iphone-16-plus-128gb-pink-mxvw3/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-plus/smartfon-apple-iphone-16-plus-128gb-teal-mxvy3/",

  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-plus/smartfon-apple-iphone-16-plus-256gb-black-mxwn3/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-plus/smartfon-apple-iphone-16-plus-256gb-ultramarine-mxy23/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-plus/smartfon-apple-iphone-16-plus-256gb-white-mxwv3/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-plus/smartfon-apple-iphone-16-plus-256gb-pink-mxy13/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-plus/smartfon-apple-iphone-16-plus-256gb-teal-mxy53/",

  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-plus/smartfon-apple-iphone-16-plus-512gb-black-my1p3/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-plus/smartfon-apple-iphone-16-plus-512gb-ultramarine-my2d3/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-plus/smartfon-apple-iphone-16-plus-512gb-white-my1x3/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-plus/smartfon-apple-iphone-16-plus-512gb-pink-my253/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-plus/smartfon-apple-iphone-16-plus-512gb-teal-my2j3/",



  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro/smartfon-apple-iphone-16-pro-128gb-natural-titanium-myng3/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro/smartfon-apple-iphone-16-pro-128gb-black-titanium-mynd3/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro/smartfon-apple-iphone-16-pro-128gb-white-titanium-myne3/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro/smartfon-apple-iphone-16-pro-128gb-desert-titanium-mynf3/",

  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro/smartfon-apple-iphone-16-pro-256gb-natural-titanium-mynl3/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro/smartfon-apple-iphone-16-pro-256gb-black-titanium-mynh3/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro/smartfon-apple-iphone-16-pro-256gb-white-titanium-mynj3/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro/smartfon-apple-iphone-16-pro-256gb-desert-titanium-mynk3/",

  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro/smartfon-apple-iphone-16-pro-512gb-natural-titanium-mynq3/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro/smartfon-apple-iphone-16-pro-512gb-black-titanium-mynm3/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro/smartfon-apple-iphone-16-pro-512gb-white-titanium-mynn3/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro/smartfon-apple-iphone-16-pro-512gb-desert-titanium-mynp3/",

  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro/smartfon-apple-iphone-16-pro-1tb-natural-titanium-mynx3/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro/smartfon-apple-iphone-16-pro-1tb-black-titanium-mynr3/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro/smartfon-apple-iphone-16-pro-1tb-white-titanium-mynt3/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro/smartfon-apple-iphone-16-pro-1tb-desert-titanium-mynw3/",



  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro-max/smartfon-apple-iphone-16-pro-max-256gb-natural-titanium-mywy3/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro-max/smartfon-apple-iphone-16-pro-max-256gb-black-titanium-mywv3/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro-max/smartfon-apple-iphone-16-pro-max-256gb-white-titanium-myww3/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro-max/smartfon-apple-iphone-16-pro-max-256gb-desert-titanium-mywx3/",

  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro-max/smartfon-apple-iphone-16-pro-max-512gb-natural-titanium-myx33/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro-max/smartfon-apple-iphone-16-pro-max-512gb-black-titanium-myx03/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro-max/smartfon-apple-iphone-16-pro-max-512gb-white-titanium-myx13/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro-max/smartfon-apple-iphone-16-pro-max-512gb-desert-titanium-myx23/",

  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro-max/smartfon-apple-iphone-16-pro-max-1tb-natural-titanium-myx73/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro-max/smartfon-apple-iphone-16-pro-max-1tb-black-titanium-myx43/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro-max/smartfon-apple-iphone-16-pro-max-1tb-white-titanium-myx53/",
  "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro-max/smartfon-apple-iphone-16-pro-max-1tb-desert-titanium-myx63/",
];

const arrLinkEstore16IPH = [
  "https://estore.ua/ua/iphone-16-128gb-black/?q=mye73",
  "https://estore.ua/ua/iphone-16-128gb-soft-peach/?q=myec3",
  "https://estore.ua/ua/iphone-16-128gb-purple/?q=mye93",
  "https://estore.ua/ua/iphone-16-128gb-pink/?q=myea3",
  "https://estore.ua/ua/iphone-16-128gb-ocean-blue/?q=myed3",

  "https://estore.ua/ua/iphone-16-256gb-black/?q=myee3",
  "https://estore.ua/ua/iphone-16-256gb-soft-peach/?q=myeh3",
  "https://estore.ua/ua/iphone-16-256gb-purple/?q=myef3",
  "https://estore.ua/ua/iphone-16-256gb-pink/?q=myeg3",
  "https://estore.ua/ua/iphone-16-256gb-ocean-blue/?q=myej3",

  "https://estore.ua/ua/iphone-16-512gb-black/?q=myek3",
  "https://estore.ua/ua/iphone-16-512gb-soft-peach/?q=myer3",
  "https://estore.ua/ua/iphone-16-512gb-purple/?q=myep3",
  "https://estore.ua/ua/iphone-16-512gb-pink/?q=myeq3",
  "https://estore.ua/ua/iphone-16-512gb-ocean-blue/?q=myeu3",

  "https://estore.ua/ua/iphone-16-plus-128gb-black/",
  "https://estore.ua/ua/iphone-16-plus-128gb-soft-peach/?q=mxvx3",
  "https://estore.ua/ua/iphone-16-plus-128gb-purple/",
  "https://estore.ua/ua/iphone-16-plus-128gb-pink/",
  "https://estore.ua/ua/iphone-16-plus-128gb-ocean-blue/",

  "https://estore.ua/ua/iphone-16-plus-256gb-black/?q=mxwn3",
  "https://estore.ua/ua/iphone-16-plus-256gb-soft-peach/",
  "https://estore.ua/ua/iphone-16-plus-256gb-purple/",
  "https://estore.ua/ua/iphone-16-plus-256gb-pink/",
  "https://estore.ua/ua/iphone-16-plus-256gb-ocean-blue/",

  "https://estore.ua/ua/iphone-16-plus-512gb-black/?q=my1p3",
  "https://estore.ua/ua/iphone-16-plus-512gb-soft-peach/",
  "https://estore.ua/ua/iphone-16-plus-512gb-purple/",
  "https://estore.ua/ua/iphone-16-plus-512gb-pink/?q=my253",
  "https://estore.ua/ua/iphone-16-plus-512gb-ocean-blue/?q=my2j3",



  "https://estore.ua/ua/iphone-16-pro-128gb-natural-titanium/?q=myng3",
  "https://estore.ua/ua/iphone-16-pro-128gb-black-titanium/?q=mynd3",
  "https://estore.ua/ua/iphone-16-pro-128gb-white-titanium/?q=myne3",
  "https://estore.ua/ua/iphone-16-pro-128gb-desert-titanium/?q=mynf3",

  "https://estore.ua/ua/iphone-16-pro-256gb-titanium-gray/?q=mynl3",
  "https://estore.ua/ua/iphone-16-pro-256gb-black-titanium/?q=mynh3",
  "https://estore.ua/ua/iphone-16-pro-256gb-white-titanium/?q=mynj3",
  "https://estore.ua/ua/iphone-16-pro-256gb-desert-titanium/?q=mynk3",

  "https://estore.ua/ua/iphone-16-pro-512gb-titanium-gray/?q=mynq3",
  "https://estore.ua/ua/iphone-16-pro-512gb-black-titanium/?q=mynm3",
  "https://estore.ua/ua/iphone-16-pro-512gb-white-titanium/?q=mynn3",
  "https://estore.ua/ua/iphone-16-pro-512gb-desert-titanium/?q=mynp3",

  "https://estore.ua/ua/iphone-16-pro-1tb-titanium-gray/?q=mynx3",
  "https://estore.ua/ua/iphone-16-pro-1tb-black-titanium/?q=mynr3",
  "https://estore.ua/ua/iphone-16-pro-1tb-white-titanium/",
  "https://estore.ua/ua/iphone-16-pro-1tb-desert-titanium/",


  "https://estore.ua/ua/iphone-16-pro-max-256gb-titanium-gray/?q=mywy3",
  "https://estore.ua/ua/iphone-16-pro-max-256gb-black-titanium/?q=mywv3",
  "https://estore.ua/ua/iphone-16-pro-max-256gb-white-titanium/?q=myww3",
  "https://estore.ua/ua/iphone-16-pro-max-256gb-desert-titanium/?q=mywx3",

  "https://estore.ua/ua/iphone-16-pro-max-512gb-titanium-gray/?q=myx33",
  "https://estore.ua/ua/iphone-16-pro-max-512gb-black-titanium/?q=myx03",
  "https://estore.ua/ua/iphone-16-pro-max-512gb-white-titanium/?q=myx13",
  "https://estore.ua/ua/iphone-16-pro-max-512gb-desert-titanium/?q=myx23",

  "https://estore.ua/ua/iphone-16-pro-max-1tb-titanium-gray/?q=myx73",
  "https://estore.ua/ua/iphone-16-pro-max-1tb-black-titanium/?q=myx43",
  "https://estore.ua/ua/iphone-16-pro-max-1tb-white-titanium/?q=myx53",
  "https://estore.ua/ua/iphone-16-pro-max-1tb-desert-titanium/",
];


const arrLinkCts16IPH = [
  "https://www.ctrs.com.ua/smartfony/iphone-16-128gb-black-apple-752183.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-256gb-black-apple-752186.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-512gb-black-apple-752192.html",

  "https://www.ctrs.com.ua/smartfony/iphone-16-plus-128gb-black-apple-752201.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-plus-256gb-black-apple-752206.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-plus-512gb-black-apple-752211.html",

  "https://www.ctrs.com.ua/smartfony/iphone-16-pro-128gb-black-titanium-apple-752249.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-pro-256gb-black-titanium-apple-752218.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-pro-512gb-black-titanium-apple-752224.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-pro-1tb-black-titanium-apple-752228.html",

  "https://www.ctrs.com.ua/smartfony/iphone-16-pro-max-256gb-black-titanium-apple-752236.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-pro-max-512gb-black-titanium-apple-752240.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-pro-max-1tb-black-titanium-apple-752244.html",
];

const arrLinkCts16IPHiNfo = [
  "https://www.ctrs.com.ua/smartfony/iphone-16-128gb-black-apple-752183.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-128gb-ultramarine-apple-752179.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-128gb-white-apple-752184.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-128gb-pink-apple-752182.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-128gb-teal-apple-752181.html",

  "https://www.ctrs.com.ua/smartfony/iphone-16-256gb-black-apple-752186.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-256gb-ultramarine-apple-752189.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-256gb-white-apple-752190.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-256gb-pink-apple-752187.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-256gb-teal-apple-752188.html",

  "https://www.ctrs.com.ua/smartfony/iphone-16-512gb-black-apple-752192.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-512gb-ultramarine-apple-752195.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-512gb-white-apple-752196.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-512gb-pink-apple-752193.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-512gb-teal-apple-752194.html",


  "https://www.ctrs.com.ua/smartfony/iphone-16-plus-128gb-black-apple-752201.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-plus-128gb-ultramarine-apple-752204.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-plus-128gb-white-apple-752205.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-plus-128gb-pink-apple-752202.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-plus-128gb-teal-apple-752203.html",

  "https://www.ctrs.com.ua/smartfony/iphone-16-plus-256gb-black-apple-752206.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-plus-256gb-ultramarine-apple-752209.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-plus-256gb-white-apple-752210.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-plus-256gb-pink-apple-752207.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-plus-256gb-teal-apple-752208.html",

  "https://www.ctrs.com.ua/smartfony/iphone-16-plus-512gb-black-apple-752211.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-plus-512gb-ultramarine-apple-752214.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-plus-512gb-white-apple-752215.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-plus-512gb-pink-apple-752212.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-plus-512gb-teal-apple-752213.html",



  "https://www.ctrs.com.ua/smartfony/iphone-16-pro-128gb-natural-titanium-apple-752251.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-pro-128gb-black-titanium-apple-752249.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-pro-128gb-white-titanium-apple-752250.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-pro-128gb-desert-titanium-apple-752252.html",

  "https://www.ctrs.com.ua/smartfony/iphone-16-pro-256gb-natural-titanium-apple-752219.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-pro-256gb-black-titanium-apple-752218.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-pro-256gb-white-titanium-apple-752220.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-pro-256gb-desert-titanium-apple-752221.html",

  "https://www.ctrs.com.ua/smartfony/iphone-16-pro-512gb-natural-titanium-apple-752226.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-pro-512gb-black-titanium-apple-752224.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-pro-512gb-white-titanium-apple-752225.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-pro-512gb-desert-titanium-apple-752227.html",

  "https://www.ctrs.com.ua/smartfony/iphone-16-pro-1tb-natural-titanium-apple-752231.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-pro-1tb-black-titanium-apple-752228.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-pro-1tb-white-titanium-apple-752229.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-pro-1tb-desert-titanium-apple-752230.html",




  "https://www.ctrs.com.ua/smartfony/iphone-16-pro-max-256gb-natural-titanium-apple-752239.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-pro-max-256gb-black-titanium-apple-752236.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-pro-max-256gb-white-titanium-apple-752237.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-pro-max-256gb-desert-titanium-apple-752238.html",

  "https://www.ctrs.com.ua/smartfony/iphone-16-pro-max-512gb-natural-titanium-apple-752242.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-pro-max-512gb-black-titanium-apple-752240.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-pro-max-512gb-white-titanium-apple-752241.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-pro-max-512gb-desert-titanium-apple-752243.html",

  "https://www.ctrs.com.ua/smartfony/iphone-16-pro-max-1tb-natural-titanium-apple-752246.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-pro-max-1tb-black-titanium-apple-752244.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-pro-max-1tb-white-titanium-apple-752245.html",
  "https://www.ctrs.com.ua/smartfony/iphone-16-pro-max-1tb-desert-titanium-apple-752247.html",
];

const arrLinkiPeople16 = [
  "https://www.ipeople.in.ua/products/apple-iphone-16-128gb-black-mye73",
"https://www.ipeople.in.ua/products/apple-iphone-16-128gb-ultramarine",
"https://www.ipeople.in.ua/products/apple-iphone-16-128gb-white-mye93",
"https://www.ipeople.in.ua/products/apple-iphone-16-128gb-pink-myea3",
"https://www.ipeople.in.ua/products/apple-iphone-16-128gb-teal-myed3",

"https://www.ipeople.in.ua/products/apple-iphone-16-256gb-black-myee3",
"https://www.ipeople.in.ua/products/apple-iphone-16-256gb-ultramarine-myeh3",
"https://www.ipeople.in.ua/products/apple-iphone-16-256gb-white-myef3",
"https://www.ipeople.in.ua/products/apple-iphone-16-256gb-pink-myeg3",
"https://www.ipeople.in.ua/products/apple-iphone-16-256gb-teal-myej3",

// "https://www.ipeople.in.ua/products/apple-iphone-16-512gb-black-myek3",
// "https://www.ipeople.in.ua/products/apple-iphone-16-512gb-ultramarine-myer3",
// "https://www.ipeople.in.ua/products/apple-iphone-16-512gb-white-myep3",
// "https://www.ipeople.in.ua/products/apple-iphone-16-512gb-pink-myeq3",
// "https://www.ipeople.in.ua/products/apple-iphone-16-512gb-teal-myeu3",



"https://www.ipeople.in.ua/products/apple-iphone-16-plus-128gb-black-mxvu3",
"https://www.ipeople.in.ua/products/apple-iphone-16-plus-128gb-ultramarine-mxvx3",
"https://www.ipeople.in.ua/products/apple-iphone-16-plus-128gb-black-mxvu3",
"https://www.ipeople.in.ua/products/apple-iphone-16-plus-128gb-pink-mxvw3",
"https://www.ipeople.in.ua/products/apple-iphone-16-plus-128gb-teal-mxvy3",

"https://www.ipeople.in.ua/products/apple-iphone-16-plus-256gb-black-mxwn3",
"https://www.ipeople.in.ua/products/apple-iphone-16-plus-256gb-ultramarine-mxy23",
"https://www.ipeople.in.ua/products/apple-iphone-16-plus-256gb-white-mxwv3",
"https://www.ipeople.in.ua/products/apple-iphone-16-plus-256gb-pink",
"https://www.ipeople.in.ua/products/apple-iphone-16-plus-256gb-teal-mxy53",

"https://www.ipeople.in.ua/products/apple-iphone-16-plus-512gb-black-my1p3",
// "https://www.ipeople.in.ua/products/apple-iphone-16-plus-512gb-ultramarine-my2d3",
// "https://www.ipeople.in.ua/products/apple-iphone-16-plus-512gb-white-my1x3",
// "https://www.ipeople.in.ua/products?keyword=Apple+iPhone+16+Plus+512GB+Pink+%28MY253%29",
"https://www.ipeople.in.ua/products/apple-iphone-16-plus-512gb-teal-my2j3",



"https://www.ipeople.in.ua/products/apple-iphone-16-pro-128gb-natural-titanium-myng3",
"https://www.ipeople.in.ua/products/apple-iphone-16-pro-128gb-black-titanium-mynd3",
"https://www.ipeople.in.ua/products?keyword=Apple+iPhone+16+Pro+128GB+White+Titanium+%28MYNE3%29",
"https://www.ipeople.in.ua/products/apple-iphone-16-pro-128gb-desert-titanium",

"https://www.ipeople.in.ua/products/apple-iphone-16-pro-256gb-natural-titanium-mynl3",
"https://www.ipeople.in.ua/products/apple-iphone-16-pro-256gb-black-titanium",
"https://www.ipeople.in.ua/products/apple-iphone-16-pro-256gb-white-titanium",
"https://www.ipeople.in.ua/products/apple-iphone-16-pro-256gb-desert-titanium",

"https://www.ipeople.in.ua/products/apple-iphone-16-pro-512gb-natural-titanium-mynq3",
"https://www.ipeople.in.ua/products/apple-iphone-16-pro-512gb-black-titanium-mynm3",
"https://www.ipeople.in.ua/products/apple-iphone-16-pro-512gb-white-titanium-mynn3",
"https://www.ipeople.in.ua/products?keyword=Apple+iPhone+16+Pro+512GB+Desert+Titanium+%28MYNP3%29",

"https://www.ipeople.in.ua/products/apple-iphone-16-pro-1tb-natural-titanium-mynx3",
"https://www.ipeople.in.ua/products/apple-iphone-16-pro-1tb-black-titanium-mynr3",
"https://www.ipeople.in.ua/products/apple-iphone-16-pro-1tb-white-titanium-mynt3",
"https://www.ipeople.in.ua/products/apple-iphone-16-pro-1tb-desert-titanium-mynw3",



"https://www.ipeople.in.ua/products/apple-iphone-16-pro-max-256gb-natural-titanium",
"https://www.ipeople.in.ua/products?keyword=Apple+iPhone+16+Pro+Max+256GB+Black+Titanium+%28MYWV3%29",
"https://www.ipeople.in.ua/products/apple-iphone-16-pro-max-256gb-white-titanium-myww3",
"https://www.ipeople.in.ua/products/apple-iphone-16-pro-max-256gb-desert-titanium-mywx3",

"https://www.ipeople.in.ua/products/apple-iphone-16-pro-max-512gb-natural-titanium-myx33",
"https://www.ipeople.in.ua/products/apple-iphone-16-pro-max-512gb-black-titanium-myx03",
"https://www.ipeople.in.ua/products/apple-iphone-16-pro-max-512gb-white-titanium-myx13",
"https://www.ipeople.in.ua/products/apple-iphone-16-pro-max-512gb-desert-titanium-myx23",

"https://www.ipeople.in.ua/products/apple-iphone-16-pro-max-1tb-natural-titanium-myx73",
"https://www.ipeople.in.ua/products/apple-iphone-16-pro-max-1tb-black-titanium-myx43",
"https://www.ipeople.in.ua/products/apple-iphone-16-pro-max-1tb-white-titanium-myx53",
"https://www.ipeople.in.ua/products/apple-iphone-16-pro-max-1tb-desert-titanium-myx63",
];

const arrLinkYua16 = [
  "https://y.ua/apple-iphone-16-128gb-black-mye73/p1350345/",
"https://y.ua/apple-iphone-16-128gb-ultramarine-myec3/p1350346/",
"https://y.ua/apple-iphone-16-128gb-white-mye93/p1350347/",
"https://y.ua/apple-iphone-16-128gb-pink-myea3/p1350348/",
"https://y.ua/apple-iphone-16-128gb-teal-myed3/p1350349/",

"https://y.ua/apple-iphone-16-256gb-black/p1350350/",
"https://y.ua/apple-iphone-16-256gb-ultramarine/p1350351/",
"https://y.ua/apple-iphone-16-256gb-white/p1350352/",
"https://y.ua/apple-iphone-16-256gb-pink/p1350353/",
"https://y.ua/apple-iphone-16-256gb-teal/p1350354/",

"https://y.ua/apple-iphone-16-512gb-black/p1350355/",
"https://y.ua/apple-iphone-16-512gb-ultramarine/p1350356/",
"https://y.ua/apple-iphone-16-512gb-white/p1350357/",
"https://y.ua/apple-iphone-16-512gb-pink/p1350358/",
"https://y.ua/apple-iphone-16-512gb-teal/p1350359/",

"https://y.ua/apple-iphone-16-plus-128gb-black-1350360/p1350360/",
"https://y.ua/apple-iphone-16-plus-128gb-ultramarine/p1350361/",
"https://y.ua/apple-iphone-16-plus-128gb-black-1350360/p1350360/",
"https://y.ua/apple-iphone-16-plus-128gb-pink-1350363/p1350363/",
"https://y.ua/uk/apple-iphone-16-plus-128gb-teal/p1350364/",

"https://y.ua/uk/apple-iphone-16-plus-256gb-black/p1350365/",
"https://y.ua/uk/apple-iphone-16-plus-256gb-ultramarine/p1350366/",
"https://y.ua/uk/apple-iphone-16-plus-256gb-white/p1350367/",
"https://y.ua/uk/apple-iphone-16-plus-256gb-pink/p1350368/",
"https://y.ua/uk/apple-iphone-16-plus-256gb-teal/p1350369/",

"https://y.ua/uk/apple-iphone-16-plus-512gb-black/p1350370/",
"https://y.ua/uk/apple-iphone-16-plus-512gb-ultramarine/p1350371/",
"https://y.ua/uk/apple-iphone-16-plus-512gb-white/p1350372/",
"https://y.ua/uk/apple-iphone-16-plus-512gb-pink/p1350373/",
"https://y.ua/uk/apple-iphone-16-plus-512gb-teal/p1350374/",

"https://y.ua/uk/apple-iphone-16-pro-128gb-natural-titanium-myng3/p1350376/",
"https://y.ua/uk/apple-iphone-16-pro-128gb-black-titanium-mynd3/p1350375/",
"https://y.ua/uk/apple-iphone-16-pro-128gb-white-titanium-myne3/p1350378/",
"https://y.ua/uk/apple-iphone-16-pro-128gb-desert-titanium-mynf3/p1350377/",

"https://y.ua/uk/apple-iphone-16-pro-256gb-natural-titanium-mynl3/p1350380/",
"https://y.ua/uk/apple-iphone-16-pro-256gb-black-titanium-mynh3/p1350379/",
"https://y.ua/uk/apple-iphone-16-pro-256gb-white-titanium-mynj3/p1350382/",
"https://y.ua/uk/apple-iphone-16-pro-256gb-desert-titanium-mynk3/p1350381/",

"https://y.ua/uk/apple-iphone-16-pro-512gb-natural-titanium-mynq3/p1350384/",
"https://y.ua/uk/apple-iphone-16-pro-512gb-black-titanium-mynm3/p1350383/",
"https://y.ua/uk/apple-iphone-16-pro-512gb-white-titanium-mynn3/p1350386/",
"https://y.ua/uk/apple-iphone-16-pro-512gb-desert-titanium-mynp3/p1350385/",

"https://y.ua/uk/apple-iphone-16-pro-1tb-natural-titanium-mynx3/p1350388/",
"https://y.ua/uk/apple-iphone-16-pro-1tb-black-titanium-mynr3/p1350387/",
"https://y.ua/uk/apple-iphone-16-pro-1tb-white-titanium-mynt3/p1350390/",
"https://y.ua/uk/apple-iphone-16-pro-1tb-desert-titanium-mynw3/p1350389/",


"https://y.ua/uk/apple-iphone-16-pro-max-256gb-natural-titanium-mywy3/p1350392/",
"https://y.ua/uk/apple-iphone-16-pro-max-256gb-black-titanium-mywv3/p1350391/",
"https://y.ua/uk/apple-iphone-16-pro-max-256gb-white-titanium-myww3/p1350394/",
"https://y.ua/uk/apple-iphone-16-pro-max-256gb-desert-titanium-mywx3/p1350393/",

"https://y.ua/uk/apple-iphone-16-pro-max-512gb-natural-titanium-myx33/p1350396/",
"https://y.ua/uk/apple-iphone-16-pro-max-512gb-black-titanium-myx03/p1350395/",
"https://y.ua/uk/apple-iphone-16-pro-max-512gb-white-titanium-myx13/p1350398/",
"https://y.ua/uk/apple-iphone-16-pro-max-512gb-desert-titanium-myx23/p1350397/",

"https://y.ua/uk/apple-iphone-16-pro-max-1tb-natural-titanium-myx73/p1350400/",
"https://y.ua/uk/apple-iphone-16-pro-max-1tb-black-titanium-myx43/p1350399/",
"https://y.ua/uk/apple-iphone-16-pro-max-1tb-white-titanium-myx53/p1350402/",
"https://y.ua/uk/apple-iphone-16-pro-max-1tb-desert-titanium-myx63/p1350401/",
];

const arrLinkYabloki16 = [
  "https://yabloki.ua/iphone-16-128-gb-black.html",
"https://yabloki.ua/iphone-16-128-gb-ultramarine.html",
"https://yabloki.ua/iphone-16-128-gb-white.html",
"https://yabloki.ua/iphone-16-128-gb-pink.html",
"https://yabloki.ua/iphone-16-128-gb-teal.html",

"https://yabloki.ua/iphone-16-256-gb-black.html",
"https://yabloki.ua/iphone-16-256-gb-ultramarine.html",
"https://yabloki.ua/iphone-16-256-gb-white.html",
"https://yabloki.ua/iphone-16-256-gb-pink.html",
"https://yabloki.ua/iphone-16-256-gb-teal.html",

"https://yabloki.ua/iphone-16-512-gb-black.html",
"https://yabloki.ua/iphone-16-512-gb-ultramarine.html",
"https://yabloki.ua/iphone-16-512-gb-white.html",
"https://yabloki.ua/iphone-16-512-gb-pink.html",
"https://yabloki.ua/iphone-16-512-gb-teal.html",


"https://yabloki.ua/iphone-16-plus-128-gb-black.html",
"https://yabloki.ua/iphone-16-plus-128-gb-ultramarine.html",
"https://yabloki.ua/iphone-16-plus-128-gb-white.html",
"https://yabloki.ua/iphone-16-plus-128-gb-pink.html",
"https://yabloki.ua/iphone-16-plus-128-gb-teal.html",

"https://yabloki.ua/iphone-16-plus-256-gb-black.html",
"https://yabloki.ua/iphone-16-plus-256-gb-ultramarine.html",
"https://yabloki.ua/iphone-16-plus-256-gb-white.html",
"https://yabloki.ua/iphone-16-plus-256-gb-pink.html",
"https://yabloki.ua/iphone-16-plus-256-gb-teal.html",

"https://yabloki.ua/iphone-16-plus-512-gb-black.html",
"https://yabloki.ua/iphone-16-plus-512-gb-ultramarine.html",
"https://yabloki.ua/iphone-16-plus-512-gb-white.html",
"https://yabloki.ua/iphone-16-plus-512-gb-pink.html",
"https://yabloki.ua/iphone-16-plus-512-gb-teal.html",


"https://yabloki.ua/iphone-16-pro-128-gb-natural-titanium.html",
"https://yabloki.ua/iphone-16-pro-128-gb-black-titanium.html",
"https://yabloki.ua/iphone-16-pro-128-gb-white-titanium.html",
"https://yabloki.ua/iphone-16-pro-128-gb-desert-titanium.html",

"https://yabloki.ua/iphone-16-pro-256-gb-natural-titanium.html",
"https://yabloki.ua/iphone-16-pro-256-gb-white-titanium.html",
"https://yabloki.ua/iphone-16-pro-256-gb-white-titanium.html",
"https://yabloki.ua/iphone-16-pro-256-gb-natural-titanium.html",

"https://yabloki.ua/iphone-16-pro-512-gb-natural-titanium.html",
"https://yabloki.ua/iphone-16-pro-512-gb-black-titanium.html",
"https://yabloki.ua/iphone-16-pro-512-gb-white-titanium.html",
"https://yabloki.ua/iphone-16-pro-512-gb-desert-titanium.html",

"https://yabloki.ua/iphone-16-pro-1-tb-natural-titanium.html",
"https://yabloki.ua/iphone-16-pro-1-tb-black-titanium.html",
"https://yabloki.ua/iphone-16-pro-1-tb-white-titanium.html",
"https://yabloki.ua/iphone-16-pro-1-tb-desert-titanium.html",


"https://yabloki.ua/iphone-16-pro-max-256-gb-natural-titanium.html",
"https://yabloki.ua/iphone-16-pro-max-256-gb-black-titanium.html",
"https://yabloki.ua/iphone-16-pro-max-256-gb-white-titanium.html",
"https://yabloki.ua/iphone-16-pro-max-256-gb-desert-titanium.html",

"https://yabloki.ua/iphone-16-pro-max-512-gb-natural-titanium.html",
"https://yabloki.ua/iphone-16-pro-max-512-gb-black-titanium.html",
"https://yabloki.ua/iphone-16-pro-max-512-gb-white-titanium.html",
"https://yabloki.ua/iphone-16-pro-max-512-gb-desert-titanium.html",

"https://yabloki.ua/iphone-16-pro-max-1-tb-natural-titanium.html",
"https://yabloki.ua/iphone-16-pro-max-1tb-black-titanium.html",
"https://yabloki.ua/iphone-16-pro-max-1-tb-white-titanium.html",
"https://yabloki.ua/iphone-16-pro-max-1-tb-desert-titanium.html",
];


const arrLinkJabko16eIPH = [
  "https://jabko.ua/iphone/apple-iphone-16e/apple-iphone-16e-128gb-white",
"https://jabko.ua/iphone/apple-iphone-16e/apple-iphone-16e-128gb-black",

"https://jabko.ua/iphone/apple-iphone-16e/apple-iphone-16e-256gb-white",
"https://jabko.ua/iphone/apple-iphone-16e/apple-iphone-16e-256gb-black",

"https://jabko.ua/iphone/apple-iphone-16e/apple-iphone-16e-512gb-white",
"https://jabko.ua/iphone/apple-iphone-16e/apple-iphone-16e-512gb-black",
];
const arrLinkIstore16eIPH = [
  "https://www.istore.ua/ua/item/iphone-16e-128gb-white-md1r4/",
"https://www.istore.ua/ua/item/iphone-16e-128gb-black-md1q4/",

"https://www.istore.ua/ua/item/iphone-16e-256gb-white/",
"https://www.istore.ua/ua/item/iphone-16e-256gb-black-md1t4/",

"https://www.istore.ua/ua/item/iphone-16e-512gb-white/",
"https://www.istore.ua/ua/item/iphone-16e-512gb-black/",
];
const arrLinkMobilePlanet16eIPH = [
  "https://mobileplanet.ua/apple-iphone-16e-128gb-white-md1r4-338355",
"https://mobileplanet.ua/apple-iphone-16e-128gb-black-md1q4-338350",

"https://mobileplanet.ua/apple-iphone-16e-256gb-white-md1w4-338361",
"https://mobileplanet.ua/apple-iphone-16e-256gb-black-md1t4-338356",

"https://mobileplanet.ua/apple-iphone-16e-512gb-white-md274-338367",
"https://mobileplanet.ua/apple-iphone-16e-512gb-black-md1x4-338362",
];
const arrLinkGro16eIPH = [
  "https://grokholsky.com/product/apple/iphone/iphone-16e/smartfon-apple-iphone-16e-128gb-white-md1r4/",
"https://grokholsky.com/product/apple/iphone/iphone-16e/smartfon-apple-iphone-16e-128gb-black-md1q4/",

"https://grokholsky.com/product/apple/iphone/iphone-16e/smartfon-apple-iphone-16e-256gb-white-md1w4/",
"https://grokholsky.com/product/apple/iphone/iphone-16e/smartfon-apple-iphone-16e-256gb-black-md1t4/",

"https://grokholsky.com/product/apple/iphone/iphone-16e/smartfon-apple-iphone-16e-512gb-white-md274/",
"https://grokholsky.com/product/apple/iphone/iphone-16e/smartfon-apple-iphone-16e-512gb-black-md1x4/",
];

const arrLinkEstore16eIPH = [
  "https://estore.ua/ua/iphone-16e-128gb-white/?q=md1r4",
"https://estore.ua/ua/iphone-16e-128gb-black/",

"https://estore.ua/ua/iphone-16e-256gb-white/",
"https://estore.ua/ua/iphone-16e-256gb-black/",

"https://estore.ua/ua/iphone-16e-512gb-white/",
"https://estore.ua/ua/iphone-16e-512gb-black/",
];
const arrLinkiPeople16e = [
  "https://www.ipeople.in.ua/products/apple-iphone-16e-128gb-white-md1r4",
"https://www.ipeople.in.ua/products/apple-iphone-16e-128gb-black-md1q4",

"https://www.ipeople.in.ua/products/apple-iphone-16e-256gb-white-md1w4",
"https://www.ipeople.in.ua/products/apple-iphone-16e-256gb-black-md1t4",
];
const arrLinkYua16e = [
  "https://y.ua/uk/apple-iphone-16e-128gb-white/p1418925/",
"https://y.ua/uk/apple-iphone-16e-128gb-black/p1418924/",

"https://y.ua/uk/apple-iphone-16e-256gb-white/p1418927/",
"https://y.ua/uk/apple-iphone-16e-256gb-black/p1418926/",

"https://y.ua/uk/apple-iphone-16e-512gb-white/p1418929/",
"https://y.ua/uk/apple-iphone-16e-512gb-black/p1418928/",
];
const arrLinkYabloki16e = [
  "https://yabloki.ua/iphone-16e-128gb-white.html",
"https://yabloki.ua/iphone-16e-128gb-black.html",

"https://yabloki.ua/iphone-16e-256gb-white.html",
"https://yabloki.ua/iphone-16e-256gb-black.html",

"https://yabloki.ua/iphone-16e-512gb-white.html",
"https://yabloki.ua/iphone-16e-512gb-black.html",

];

const arrLinkJabko15ProAndProMax = [
    'https://jabko.ua/iphone/apple-iphone-15-pro/apple-iphone-15-pro-128gb-blue-titanium',
    'https://jabko.ua/iphone/apple-iphone-15-pro/apple-iphone-15-pro-128gb-black-titanium',
    'https://jabko.ua/iphone/apple-iphone-15-pro/apple-iphone-15-pro-128gb-natural-titanium',
    'https://jabko.ua/iphone/apple-iphone-15-pro/apple-iphone-15-pro-128gb-white-titanium',
  
    'https://jabko.ua/iphone/apple-iphone-15-pro/apple-iphone-15-pro-256gb-blue-titanium',
    'https://jabko.ua/iphone/apple-iphone-15-pro/apple-iphone-15-pro-256gb-black-titanium',
    'https://jabko.ua/iphone/apple-iphone-15-pro/apple-iphone-15-pro-256gb-natural-titanium',
    'https://jabko.ua/iphone/apple-iphone-15-pro/apple-iphone-15-pro-256gb-white-titanium',
  
    'https://jabko.ua/iphone/apple-iphone-15-pro/apple-iphone-15-pro-512gb-dark-blue-',
    'https://jabko.ua/iphone/apple-iphone-15-pro/apple-iphone-15-pro-512gb--midnight-',
    'https://jabko.ua/iphone/apple-iphone-15-pro/apple-iphone-15-pro-512gb--silver-',
    'https://jabko.ua/iphone/apple-iphone-15-pro/apple-iphone-15-pro-512gb-titan-gray',
  
    'https://jabko.ua/iphone/apple-iphone-15-pro/apple-iphone-15-pro-1tb-dark-blue-',
    'https://jabko.ua/iphone/apple-iphone-15-pro/apple-iphone-15-pro-1tb--midnight-',
    'https://jabko.ua/iphone/apple-iphone-15-pro/apple-iphone-15-pro-1tb--silver-',
    'https://jabko.ua/iphone/apple-iphone-15-pro/apple-iphone-15-pro-1tb-titan-gray-',
  
    'https://jabko.ua/iphone/apple-iphone-15-pro-max/apple-iphone-15-pro-max-256gb-blue-titanium',
    'https://jabko.ua/iphone/apple-iphone-15-pro-max/apple-iphone-15-pro-max-256gb-black-titanium',
    'https://jabko.ua/iphone/apple-iphone-15-pro-max/apple-iphone-15-pro-max-256gb-natural-titanium',
    'https://jabko.ua/iphone/apple-iphone-15-pro-max/apple-iphone-15-pro-max-256gb-white-titanium',
  
    'https://jabko.ua/iphone/apple-iphone-15-pro-max/apple-iphone-15-pro-max-512gb-blue-titanium',
    'https://jabko.ua/iphone/apple-iphone-15-pro-max/apple-iphone-15-pro-max-512gb-black-titanium',
    'https://jabko.ua/iphone/apple-iphone-15-pro-max/apple-iphone-15-pro-max-512gb-natural-titanium',
    'https://jabko.ua/iphone/apple-iphone-15-pro-max/apple-iphone-15-pro-max-512gb-white-titanium',
  
    'https://jabko.ua/iphone/apple-iphone-15-pro-max/apple-iphone-15-pro-max-1tb-blue-titanium',
    'https://jabko.ua/iphone/apple-iphone-15-pro-max/apple-iphone-15-pro-max-1tb-black-titanium',
    'https://jabko.ua/iphone/apple-iphone-15-pro-max/apple-iphone-15-pro-max-1tb-natural-titanium',
    'https://jabko.ua/iphone/apple-iphone-15-pro-max/apple-iphone-15-pro-max-1tb-white-titanium'
  ]
  const arrLinkJabko15 = [
    'https://jabko.ua/iphone/apple-iphone-15-/apple-iphone-15-128gb--black-',
    'https://jabko.ua/iphone/apple-iphone-15-/apple-iphone-15-128gb--blue-',
    'https://jabko.ua/iphone/apple-iphone-15-/apple-iphone-15-128gb--green-',
    'https://jabko.ua/iphone/apple-iphone-15-/apple-iphone-15-128gb--pink-',
    'https://jabko.ua/iphone/apple-iphone-15-/apple-iphone-15-128gb--yellow-',
  
    'https://jabko.ua/iphone/apple-iphone-15-/apple-iphone-15-256gb-black',
    'https://jabko.ua/iphone/apple-iphone-15-/apple-iphone-15-256gb--blue-',
    'https://jabko.ua/iphone/apple-iphone-15-/apple-iphone-15-256gb-green',
    'https://jabko.ua/iphone/apple-iphone-15-/apple-iphone-15-256gb--pink-',
    'https://jabko.ua/iphone/apple-iphone-15-/apple-iphone-15-256gb-yellow',
  
    "https://jabko.ua/iphone/apple-iphone-15-/apple-iphone-15-512gb-black",
    "https://jabko.ua/iphone/apple-iphone-15-/apple-iphone-15-512gb--blue-",
    "https://jabko.ua/iphone/apple-iphone-15-/apple-iphone-15-512gb-green",
    "https://jabko.ua/iphone/apple-iphone-15-/apple-iphone-15-512gb--pink-",
    "https://jabko.ua/iphone/apple-iphone-15-/apple-iphone-15-512gb-yellow"
  ]
  const arrLinkMobilePlanet15ProAndProMax = [
    'https://mobileplanet.ua/apple-iphone-15-pro-128gb-blue-titanium-mtv03-285400',
    'https://mobileplanet.ua/apple-iphone-15-pro-128gb-black-titanium-mtuv3-285399',
    'https://mobileplanet.ua/apple-iphone-15-pro-128gb-natural-titanium-mtux3-285401',
    'https://mobileplanet.ua/apple-iphone-15-pro-128gb-white-titanium-mtuw3-285402',
  
    'https://mobileplanet.ua/apple-iphone-15-pro-256gb-blue-titanium-mtv63-285408',
    'https://mobileplanet.ua/apple-iphone-15-pro-256gb-black-titanium-mtv13-285407',
    'https://mobileplanet.ua/apple-iphone-15-pro-256gb-natural-titanium-mtv53-285409',
    'https://mobileplanet.ua/apple-iphone-15-pro-256gb-white-titanium-mtv43-285410',
  
    'https://mobileplanet.ua/apple-iphone-15-pro-512gb-blue-titanium-mtva3-285412',
    'https://mobileplanet.ua/apple-iphone-15-pro-512gb-black-titanium-mtv73-285411',
    'https://mobileplanet.ua/apple-iphone-15-pro-512gb-natural-titanium-mtv93-285413',
    'https://mobileplanet.ua/apple-iphone-15-pro-512gb-white-titanium-mtv83-285414',
  
    'https://mobileplanet.ua/apple-iphone-15-pro-1tb-blue-titanium-mtvg3-285404',
    'https://mobileplanet.ua/apple-iphone-15-pro-1tb-black-titanium-mtvc3-285403',
    'https://mobileplanet.ua/apple-iphone-15-pro-1tb-natural-titanium-mtvf3-285405',
    'https://mobileplanet.ua/apple-iphone-15-pro-1tb-white-titanium-mtvd3-285406',
  
  
  
    'https://mobileplanet.ua/apple-iphone-15-pro-max-256gb-blue-titanium-mu7a3-285393',
    'https://mobileplanet.ua/apple-iphone-15-pro-max-256gb-black-titanium-mu773-285394',
    'https://mobileplanet.ua/apple-iphone-15-pro-max-256gb-natural-titanium-mu7-285392',
    'https://mobileplanet.ua/apple-iphone-15-pro-max-256gb-white-titanium-mu783-285391',
  
    'https://mobileplanet.ua/apple-iphone-15-pro-max-512gb-blue-titanium-mu7f3-285389',
    'https://mobileplanet.ua/apple-iphone-15-pro-max-512gb-black-titanium-mu7c3-285390',
    'https://mobileplanet.ua/apple-iphone-15-pro-max-512gb-natural-titanium-mu7-285388',
    'https://mobileplanet.ua/apple-iphone-15-pro-max-512gb-white-titanium-mu7d3-285387',
  
    'https://mobileplanet.ua/apple-iphone-15-pro-max-1tb-blue-titanium-mu7k3-285397',
    'https://mobileplanet.ua/apple-iphone-15-pro-max-1tb-black-titanium-mu7g3-285398',
    'https://mobileplanet.ua/apple-iphone-15-pro-max-1tb-natural-titanium-mu7j3-285396',
    'https://mobileplanet.ua/apple-iphone-15-pro-max-1tb-white-titanium-mu7h3-285395'
  ]
  const arrLinkMobilePlanet15 = [
    'https://mobileplanet.ua/apple-iphone-15-128gb-black-mtp03-285371',
    'https://mobileplanet.ua/apple-iphone-15-128gb-blue-mtp43-285370',
    'https://mobileplanet.ua/apple-iphone-15-128gb-green-mtp53-285369',
    'https://mobileplanet.ua/apple-iphone-15-128gb-pink-mtp13-285368',
    'https://mobileplanet.ua/apple-iphone-15-128gb-yellow-mtp23-285367',
  
    'https://mobileplanet.ua/apple-iphone-15-256gb-black-mtp63-285366',
    'https://mobileplanet.ua/apple-iphone-15-256gb-blue-mtp93-285365',
    'https://mobileplanet.ua/apple-iphone-15-256gb-green-mtpa3-285364',
    'https://mobileplanet.ua/apple-iphone-15-256gb-pink-mtp73-285363',
    'https://mobileplanet.ua/apple-iphone-15-256gb-yellow-mtp83-285362',
  
    "https://mobileplanet.ua/ua/apple-iphone-15-512gb-black-mtpc3-285361",
    "https://mobileplanet.ua/ua/apple-iphone-15-512gb-blue-mtpg3-285360",
    "https://mobileplanet.ua/ua/apple-iphone-15-512gb-green-mtph3-285359",
    "https://mobileplanet.ua/ua/apple-iphone-15-512gb-pink-mtpd3-285358",
    "https://mobileplanet.ua/ua/apple-iphone-15-512gb-yellow-mtpf3-285357"
  ]
  const arrLinkIstore15ProAndProMax = [
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-128-gb-blue-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-128-gb-space-black/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-128-gb-natural-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-128-gb-white-titanium/',
  
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-256-gb-blue-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-256-gb-black-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-256-gb-natural-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-256-gb-white-titanium/',
  
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-512-gb-blue-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-512-gb-black-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-512-gb-natural-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-512-gb-white-titanium/',
  
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-1-tb-blue-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-1-tb-black-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-1-tb-natural-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-1-tb-white-titanium/',
  
  
  
  
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-max-256-gb-blue-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-max-256-gb-black-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-max-256-gb-natural-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-max-256-gb-white-titanium/',
  
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-max-512-gb-blue-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-max-512-gb-black-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-max-512-gb-natural-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-max-512-gb-white-titanium/',
  
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-max-1-tb-blue-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-max-1-tb-black-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-max-1-tb-natural-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-max-1-tb-white-titanium/'
  ]
  const arrLinkIstore15 = [
    'https://www.istore.ua/catalog/item/apple-iphone-15-128-gb-black/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-128-gb-blue/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-128-gb-green/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-128-gb-pink/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-128-gb-yellow/',
  
    'https://www.istore.ua/catalog/item/apple-iphone-15-256-gb-black/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-256-gb-blue/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-256-gb-green/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-256-gb-pink/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-256-gb-yellow/',
  
    "https://www.istore.ua/ua/item/apple-iphone-15-512-gb-black/",
    "https://www.istore.ua/ua/item/apple-iphone-15-512-gb-blue/",
    "https://www.istore.ua/ua/item/apple-iphone-15-512-gb-green/",
    "https://www.istore.ua/ua/item/apple-iphone-15-512-gb-pink/",
    "https://www.istore.ua/ua/item/apple-iphone-15-512-gb-yellow/"
  ]
  const arrLinkEstore15ProAndProMax = [
    'https://estore.ua/ua/iphone-15-pro-128gb-blue-titanium/',
    'https://estore.ua/ua/iphone-15-pro-128gb-black-titanium/',
    'https://estore.ua/ua/iphone-15-pro-128gb-natural-titanium/',
    'https://estore.ua/ua/iphone-15-pro-128gb-white-titanium/',
  
    'https://estore.ua/ua/iphone-15-pro-256gb-blue-titanium/',
    'https://estore.ua/ua/iphone-15-pro-256gb-black-titanium/',
    'https://estore.ua/ua/iphone-15-pro-256gb-natural-titanium/',
    'https://estore.ua/ua/iphone-15-pro-256gb-white-titanium/',
  
    'https://estore.ua/ua/iphone-15-pro-512gb-blue-titanium/',
    'https://estore.ua/ua/iphone-15-pro-512gb-black-titanium/',
    'https://estore.ua/ua/iphone-15-pro-512gb-natural-titanium/',
    'https://estore.ua/ua/iphone-15-pro-512gb-white-titanium/',
  
    'https://estore.ua/ua/iphone-15-pro-1tb-blue-titanium/',
    'https://estore.ua/ua/iphone-15-pro-1tb-space-black/',
    'https://estore.ua/ua/iphone-15-pro-1tb-natural-titanium/',
    'https://estore.ua/ua/iphone-15-pro-1tb-white-titanium/',
  
  
  
  
  
    'https://estore.ua/ua/iphone-15-pro-max-256gb-blue-titanium/',
    'https://estore.ua/ua/iphone-15-pro-max-256gb-black-titanium/',
    'https://estore.ua/ua/iphone-15-pro-max-256gb-natural-titanium/',
    'https://estore.ua/ua/iphone-15-pro-max-256gb-white-titanium/',
  
    'https://estore.ua/ua/iphone-15-pro-max-512gb-blue-titanium/',
    'https://estore.ua/ua/iphone-15-pro-max-512gb-black-titanium/',
    'https://estore.ua/ua/iphone-15-pro-max-512gb-natural-titanium/',
    'https://estore.ua/ua/iphone-15-pro-max-512gb-white-titanium/',
  
    'https://estore.ua/ua/iphone-15-pro-max-1tb-blue-titanium/',
    'https://estore.ua/ua/iphone-15-pro-max-1tb-black-titanium/',
    'https://estore.ua/ua/iphone-15-pro-max-1tb-natural-titanium/',
    'https://estore.ua/ua/iphone-15-pro-max-1tb-white-titanium/'
  ]
  const arrLinkEstore15 = [
    'https://estore.ua/ua/iphone-15-128gb-midnight/',
    'https://estore.ua/ua/iphone-15-128gb-blue/',
    'https://estore.ua/ua/iphone-15-128gb-green/',
    'https://estore.ua/ua/iphone-15-128gb-pink/',
    'https://estore.ua/ua/iphone-15-128gb-yellow/',
  
    'https://estore.ua/ua/iphone-15-256gb-midnight/',
    'https://estore.ua/ua/iphone-15-256gb-blue/',
    'https://estore.ua/ua/iphone-15-256gb-green/',
    'https://estore.ua/ua/iphone-15-256gb-pink/',
    'https://estore.ua/ua/iphone-15-256gb-yellow/'
  ]
  
  
  
  const arrLinkGro14andPlus = [
    'https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-128gb-starlight-mpur3/',
    'https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-128gb-product-red-mpva3/',
    'https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-128gb-purple-mpv03/',
    'https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-128gb-blue-mpvn3/',
    'https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-128gb-midnight-mpuf3/',
    'https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-128gb-yellow-mr3x3/',
  
    'https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-256gb-starlight-mpw43/',
    'https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-256gb-product-red-mpwh3/',
    'https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-256gb-purple-mpwa3/',
    'https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-256gb-blue-mpwp3/',
    'https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-256gb-midnight-mpvx3/',
    'https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-256gb-yellow-mr3y3/',
  
    'https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-512gb-starlight-mpx33/',
    'https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-512gb-product-red-mpxg3/',
    'https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-512gb-purple-mpx93/',
    'https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-512gb-blue-mpxn3/',
    'https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-512gb-midnight-mpww3/',
    'https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-512gb-yellow-mr513/',
  
  
    'https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-128gb-starlight-mq4y3/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-128gb-product-red-mq513/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-128gb-purple-mq503/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-128gb-blue-mq523/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-128gb-midnight-mq4x3/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-128gb-yellow-mr693/',
  
    'https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-256gb-starlight-mq553/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-256gb-product-red-mq573/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-256gb-purple-mq563/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-256gb-blue-mq583/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-256gb-midnight-mq533/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-256gb-yellow-mr6d3/',
  
    'https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-512gb-starlight-mq5d3/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-512gb-product-red-mq5f3/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-512gb-purple-mq5e3/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-512gb-blue-mq5g3/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-512gb-midnight-mq593/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-512gb-yellow-mr6g3/'
  ];
  const arrLinkGro14ProAndMax = [
    'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-128gb-deep-purple-mq0g3/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-128gb-space-black-mpxv3/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-128gb-silver-mq023/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-128gb-gold-mq083/',
  
    'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-256gb-deep-purple-mq1f3/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-256gb-space-black-mq0t3/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-256gb-silver-mq103/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-256gb-gold-mq183/',
  
    'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-512gb-deep-purple-mq293/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-512gb-space-black-mq1m3/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-512gb-silver-mq1w3/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-512gb-gold-mq233/',
  
    'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-1tb-deep-purple-mq323/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-1tb-space-black-mq2g3/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-1tb-silver-mq2n3/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-1tb-gold-mq2v3/',
  
  
  
    'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-128gb-deep-purple-mq9t3/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-128gb-space-black-mq9p3/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-128gb-silver-mq9q3/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-128gb-gold-mq9r3/',
  
    'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-256gb-deep-purple-mq9x3/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-256gb-space-black-mq9u3/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-256gb-silver-mq9v3/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-256gb-gold-mq9w3/',
  
    'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-512gb-deep-purple-mqam3/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-512gb-space-black-mqaf3/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-512gb-silver-mqah3/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-512gb-gold-mqaj3/',
  
    'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-1tb-deep-purple-mqc53/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-1tb-space-black-mqc23/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-1tb-silver-mqc33/',
    'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-1tb-gold-mqc43/'
  ];
  const arrLinkGro14ProAndMaxEsim = [
    'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro/iphone-14-pro-128gb-esim-deep-purple-mq0e3/',
    'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro/iphone-14-pro-128gb-esim-space-black-mpxt3/',
    'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro/iphone-14-pro-128gb-esim-silver-mq003/',
    'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro/iphone-14-pro-128gb-esim-gold-mq063/',
  
    'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro/iphone-14-pro-256gb-esim-deep-purple-mq1d3/',
    'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro/iphone-14-pro-256gb-esim-space-black-mq0n3/',
    'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro/iphone-14-pro-256gb-esim-silver-mq0x3/',
    'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro/iphone-14-pro-256gb-esim-gold-mq163/',
  
    'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro/iphone-14-pro-512gb-esim-deep-purple-mq273/',
    'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro/iphone-14-pro-512gb-esim-space-black-mq1k3/',
    'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro/iphone-14-pro-512gb-esim-silver-mq1u3/',
    'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro/iphone-14-pro-512gb-esim-gold-mq213/',
  
    'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro/iphone-14-pro-1tb-esim-deep-purple-mq303/',
    'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro/iphone-14-pro-1tb-esim-space-black-mq2e3/',
    'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro/iphone-14-pro-1tb-esim-silver-mq2l3/',
    'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro/iphone-14-pro-1tb-esim-gold-mq2t3/',
  
  
  
    'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-128gb-esim-deep-purple-mq8r3/',
    'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-128gb-esim-space-black-mq8n3/',
    'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-128gb-esim-silver-mq8p3/',
    'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-128gb-esim-gold-mq8q3/',
  
    'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-256gb-esim-deep-purple-mq8w3/',
    'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-256gb-esim-space-black-mq8t3/',
    'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-256gb-esim-silver-mq8u3/',
    'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-256gb-esim-gold-mq8v3/',
  
    'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-512gb-esim-deep-purple-mq913/',
    'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-512gb-esim-space-black-mq8x3/',
    'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-512gb-esim-silver-mq8y3/',
    'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-512gb-esim-gold-mq903/',
  
    'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-1tb-esim-deep-purple-mq953/',
    'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-1tb-esim-space-black-mq923/',
    'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-1tb-esim-silver-mq933/',
    'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-1tb-esim-gold-mq943/'
  ];
  const arrLinkGro15ProAndMax = [
    'https://grokholsky.com/product/apple/iphone/iphone-15-pro/iphone-15-pro-128gb-blue-titanium-mtv03/',
    'https://grokholsky.com/product/apple/iphone/iphone-15-pro/iphone-15-pro-128gb-black-titanium-mtuv3/',
    'https://grokholsky.com/product/apple/iphone/iphone-15-pro/iphone-15-pro-128gb-natural-titanium-mtux3/',
    'https://grokholsky.com/product/apple/iphone/iphone-15-pro/iphone-15-pro-128gb-white-titanium-mtuw3/',
  
    'https://grokholsky.com/product/apple/iphone/iphone-15-pro/iphone-15-pro-256gb-blue-titanium-mtv63/',
    'https://grokholsky.com/product/apple/iphone/iphone-15-pro/iphone-15-pro-256gb-black-titanium-mtv13/',
    'https://grokholsky.com/product/apple/iphone/iphone-15-pro/iphone-15-pro-256gb-natural-titanium-mtv53/',
    'https://grokholsky.com/product/apple/iphone/iphone-15-pro/iphone-15-pro-256gb-white-titanium-mtv43/',
  
    'https://grokholsky.com/product/apple/iphone/iphone-15-pro/iphone-15-pro-512gb-blue-titanium-mtva3/',
    'https://grokholsky.com/product/apple/iphone/iphone-15-pro/iphone-15-pro-512gb-black-titanium-mtv73/',
    'https://grokholsky.com/product/apple/iphone/iphone-15-pro/iphone-15-pro-512gb-natural-titanium-mtv93/',
    'https://grokholsky.com/product/apple/iphone/iphone-15-pro/iphone-15-pro-512gb-white-titanium-mtv83/',
  
    'https://grokholsky.com/product/apple/iphone/iphone-15-pro/iphone-15-pro-1tb-blue-titanium-mtvg3/',
    'https://grokholsky.com/product/apple/iphone/iphone-15-pro/iphone-15-pro-1tb-black-titanium-mtvc3/',
    'https://grokholsky.com/product/apple/iphone/iphone-15-pro/iphone-15-pro-1tb-natural-titanium-mtvf3/',
    'https://grokholsky.com/product/apple/iphone/iphone-15-pro/iphone-15-pro-1tb-white-titanium-mtvd3/',
  
  
    'https://grokholsky.com/product/apple/iphone/iphone-15-pro-max/iphone-15-pro-max-256gb-blue-titanium-mu7a3/',
    'https://grokholsky.com/product/apple/iphone/iphone-15-pro-max/iphone-15-pro-max-256gb-black-titanium-mu773/',
    'https://grokholsky.com/product/apple/iphone/iphone-15-pro-max/iphone-15-pro-max-256gb-natural-titanium-mu793/',
    'https://grokholsky.com/product/apple/iphone/iphone-15-pro-max/iphone-15-pro-max-256gb-white-titanium-mu783/',
  
    'https://grokholsky.com/product/apple/iphone/iphone-15-pro-max/iphone-15-pro-max-512gb-blue-titanium-mu7f3/',
    'https://grokholsky.com/product/apple/iphone/iphone-15-pro-max/iphone-15-pro-max-512gb-black-titanium-mu7c3/',
    'https://grokholsky.com/product/apple/iphone/iphone-15-pro-max/iphone-15-pro-max-512gb-natural-titanium-mu7e3/',
    'https://grokholsky.com/product/apple/iphone/iphone-15-pro-max/iphone-15-pro-max-512gb-white-titanium-mu7d3/',
  
    'https://grokholsky.com/product/apple/iphone/iphone-15-pro-max/iphone-15-pro-max-1tb-blue-titanium-mu7k3/',
    'https://grokholsky.com/product/apple/iphone/iphone-15-pro-max/iphone-15-pro-max-1tb-black-titanium-mu7g3/',
    'https://grokholsky.com/product/apple/iphone/iphone-15-pro-max/iphone-15-pro-max-1tb-natural-titanium-mu7j3/',
    'https://grokholsky.com/product/apple/iphone/iphone-15-pro-max/iphone-15-pro-max-1tb-white-titanium-mu7h3/'
  
  ];
  const arrLinkGro15 = [
    'https://grokholsky.com/product/apple/iphone/iphone-15/iphone-15-128gb-black-mtp03/',
    'https://grokholsky.com/product/apple/iphone/iphone-15/iphone-15-128gb-blue-mtp43/',
    'https://grokholsky.com/product/apple/iphone/iphone-15/iphone-15-128gb-green-mtp53/',
    'https://grokholsky.com/product/apple/iphone/iphone-15/iphone-15-128gb-pink-mtp13/',
    'https://grokholsky.com/product/apple/iphone/iphone-15/iphone-15-128gb-yellow-mtp23/',
  
    'https://grokholsky.com/product/apple/iphone/iphone-15/iphone-15-256gb-black-mtp63/',
    'https://grokholsky.com/product/apple/iphone/iphone-15/iphone-15-256gb-blue-mtp93/',
    'https://grokholsky.com/product/apple/iphone/iphone-15/iphone-15-256gb-green-mtpa3/',
    'https://grokholsky.com/product/apple/iphone/iphone-15/iphone-15-256gb-pink-mtp73/',
    'https://grokholsky.com/product/apple/iphone/iphone-15/iphone-15-256gb-yellow-mtp83/',
  
    "https://grokholsky.com/product/apple/iphone/iphone-15/iphone-15-512gb-black-mtpc3/",
    "https://grokholsky.com/product/apple/iphone/iphone-15/iphone-15-512gb-blue-mtpg3/",
    "https://grokholsky.com/product/apple/iphone/iphone-15/iphone-15-512gb-green-mtph3/",
    "https://grokholsky.com/product/apple/iphone/iphone-15/iphone-15-512gb-pink-mtpd3/",
    "https://grokholsky.com/product/apple/iphone/iphone-15/iphone-15-512gb-yellow-mtpf3/",
  
  
    'https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-128gb-black-mu0y3/',
    'https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-128gb-blue-mu163/',
    'https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-128gb-green-mu173/',
    'https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-128gb-pink-mu103/',
    'https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-128gb-yellow-mu123/',
  
    'https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-256gb-black-mu183/',
    'https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-256gb-blue-mu1f3/',
    'https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-256gb-green-mu1g3/',
    'https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-256gb-pink-mu193/',
    'https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-256gb-yellow-mu1d3/',
  
    "https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-512gb-black-mu1h3/",
    "https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-512gb-blue-mu1p3/",
    "https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-512gb-green-mu1q3/",
    "https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-512gb-pink-mu1j3/",
    "https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-512gb-yellow-mu1m3/"
  ];
  
  const arrLinkYabko15Plus = [
    'https://jabko.ua/iphone/apple-iphone-15-plus/apple-iphone-15-plus-128gb-black',
    'https://jabko.ua/iphone/apple-iphone-15-plus/apple-iphone-15-plus-128gb-blue',
    'https://jabko.ua/iphone/apple-iphone-15-plus/apple-iphone-15-plus-128gb--green-',
    'https://jabko.ua/iphone/apple-iphone-15-plus/apple-iphone-15-plus-128gb-pink',
    'https://jabko.ua/iphone/apple-iphone-15-plus/apple-iphone-15-plus-128gb-yellow',
  
    'https://jabko.ua/iphone/apple-iphone-15-plus/apple-iphone-15-plus-256gb-black',
    'https://jabko.ua/iphone/apple-iphone-15-plus/apple-iphone-15-plus-256gb--blue-',
    'https://jabko.ua/iphone/apple-iphone-15-plus/apple-iphone-15-plus-256gb--green-',
    'https://jabko.ua/iphone/apple-iphone-15-plus/apple-iphone-15-plus-256gb-pink',
    'https://jabko.ua/iphone/apple-iphone-15-plus/apple-iphone-15-plus-256gb-yellow',
  
    "https://jabko.ua/iphone/apple-iphone-15-plus/apple-iphone-15-plus-512gb-black",
    "https://jabko.ua/iphone/apple-iphone-15-plus/apple-iphone-15-plus-512gb--blue-",
    "https://jabko.ua/iphone/apple-iphone-15-plus/apple-iphone-15-plus-512gb--green-",
    "https://jabko.ua/iphone/apple-iphone-15-plus/apple-iphone-15-plus-512gb-pink",
    "https://jabko.ua/iphone/apple-iphone-15-plus/apple-iphone-15-plus-512gb-yellow"
  ];
  const arrLinkMP15Plus = [
    'https://mobileplanet.ua/apple-iphone-15-plus-128gb-black-mu0y3-285372',
    'https://mobileplanet.ua/apple-iphone-15-plus-128gb-blue-mu163-285373',
    'https://mobileplanet.ua/apple-iphone-15-plus-128gb-green-mu173-285374',
    'https://mobileplanet.ua/apple-iphone-15-plus-128gb-pink-mu103-285375',
    'https://mobileplanet.ua/apple-iphone-15-plus-128gb-yellow-mu123-285376',
  
    'https://mobileplanet.ua/apple-iphone-15-plus-256gb-black-mu183-285377',
    'https://mobileplanet.ua/apple-iphone-15-plus-256gb-blue-mu1f3-285378',
    'https://mobileplanet.ua/apple-iphone-15-plus-256gb-green-mu1g3-285379',
    'https://mobileplanet.ua/apple-iphone-15-plus-256gb-pink-mu193-285380',
    'https://mobileplanet.ua/apple-iphone-15-plus-256gb-yellow-mu1d3-285381',
  
  
    "https://mobileplanet.ua/ua/apple-iphone-15-plus-512gb-black-mu1h3-285382",
    "https://mobileplanet.ua/ua/apple-iphone-15-plus-512gb-blue-mu1p3-285383",
    "https://mobileplanet.ua/ua/apple-iphone-15-plus-512gb-green-mu1q3-285384",
    "https://mobileplanet.ua/ua/apple-iphone-15-plus-512gb-pink-mu1j3-285385",
    "https://mobileplanet.ua/ua/apple-iphone-15-plus-512gb-yellow-mu1m3-285386"
  ];
  const arrLinkIstore15Plus = [
    'https://www.istore.ua/ua/item/apple-iphone-15-plus-128-gb-black/',
    'https://www.istore.ua/ua/item/apple-iphone-15-plus-128-gb-blue/',
    'https://www.istore.ua/ua/item/apple-iphone-15-plus-128-gb-green/',
    'https://www.istore.ua/ua/item/apple-iphone-15-plus-128-gb-pink/',
    'https://www.istore.ua/ua/item/apple-iphone-15-plus-128-gb-yellow/',
  
    'https://www.istore.ua/ua/item/apple-iphone-15-plus-256-gb-black/',
    'https://www.istore.ua/ua/item/apple-iphone-15-plus-256-gb-blue/',
    'https://www.istore.ua/ua/item/apple-iphone-15-plus-256-gb-green/',
    'https://www.istore.ua/ua/item/apple-iphone-15-plus-256-gb-pink/',
    'https://www.istore.ua/ua/item/apple-iphone-15-plus-256-gb-yellow/',
  
  
    "https://www.istore.ua/ua/item/apple-iphone-15-plus-512-gb-black/",
    "https://www.istore.ua/ua/item/apple-iphone-15-plus-512-gb-blue/",
    "https://www.istore.ua/ua/item/apple-iphone-15-plus-512-gb-green/",
    "https://www.istore.ua/ua/item/apple-iphone-15-plus-512-gb-pink/",
    "https://www.istore.ua/ua/item/apple-iphone-15-plus-512-gb-yellow/"
  ];
  const arrLinkEstore15Plus = [
    'https://estore.ua/ua/iphone-15-plus-128gb-black/',
    'https://estore.ua/ua/iphone-15-plus-128gb-blue/',
    'https://estore.ua/ua/iphone-15-plus-128gb-green/',
    'https://estore.ua/ua/iphone-15-plus-128gb-pink/',
    'https://estore.ua/ua/iphone-15-plus-128gb-yellow/',
  
    'https://estore.ua/ua/iphone-15-plus-256gb-black/',
    'https://estore.ua/ua/iphone-15-plus-256gb-blue/',
    'https://estore.ua/ua/iphone-15-plus-256gb-green/',
    'https://estore.ua/ua/iphone-15-plus-256gb-pink/',
    'https://estore.ua/ua/iphone-15-plus-256gb-yellow/'
  ];


  const arrLinkJabkoAWS10andUltra2024 = [
    "https://jabko.ua/apple-watch/apple-watch-series-10/apple-watch-series-10-gps-42mm-silver-aluminum-case-with-denim-sport-band-sm",
    "https://jabko.ua/apple-watch/apple-watch-series-10/apple-watch-series-10-gps-42mm-silver-aluminum-case-with-denim-sport-band-ml",
    "https://jabko.ua/apple-watch/apple-watch-series-10/apple-watch-series-10-gps-42mm-silver-aluminum-case-with-blue-cloud-sport-loop",
  
    "https://jabko.ua/apple-watch/apple-watch-series-10/apple-watch-series-10-42mm-jet-black-aluminum-case-with-black-sport-band-2024",
    "https://jabko.ua/apple-watch/apple-watch-series-10/apple-watch-series-10-42mm-jet-black-aluminum-case-with-black-sport-band-ml",
    "https://jabko.ua/apple-watch/apple-watch-series-10/apple-watch-series-10-gps-42mm-jet-black-aluminum-case-with-ink-sport-loop",
  
    "https://jabko.ua/apple-watch/apple-watch-series-10/apple-watch-series-10-gps-42mm-rose-gold-aluminum-case-with-light-blush-sport-band-sm",
    "https://jabko.ua/apple-watch/apple-watch-series-10/apple-watch-series-10-gps-42mm-rose-gold-aluminum-case-with-light-blush-sport-band-ml",
    "https://jabko.ua/apple-watch/apple-watch-series-10/apple-watch-series-10-gps-42mm-rose-gold-aluminum-case-with-plum-sport-loop",
  
    "https://jabko.ua/apple-watch/apple-watch-series-10/apple-watch-series-10-gps-46mm-silver-aluminum-case-with-denim-sport-band-sm",
    "https://jabko.ua/apple-watch/apple-watch-series-10/apple-watch-series-10-gps-46mm-silver-aluminum-case-with-denim-sport-band-ml",
    "https://jabko.ua/apple-watch/apple-watch-series-10/apple-watch-series-10-gps-46mm-silver-aluminum-case-with-blue-cloud-sport-loop",
  
    "https://jabko.ua/apple-watch/apple-watch-series-10/apple-watch-series-10-46mm-jet-black-aluminum-case-with-black-sport-band-2024",
    "https://jabko.ua/apple-watch/apple-watch-series-10/apple-watch-series-10-46mm-jet-black-aluminum-case-with-black-sport-band-ml",
    "https://jabko.ua/apple-watch/apple-watch-series-10/apple-watch-series-10-gps-46mm-jet-black-aluminum-case-with-ink-sport-loop",
  
    "https://jabko.ua/apple-watch/apple-watch-series-10/apple-watch-series-10-gps-46mm-rose-gold-aluminum-case-with-light-blush-sport-band-sm",
    "https://jabko.ua/apple-watch/apple-watch-series-10/apple-watch-series-10-gps-46mm-rose-gold-aluminum-case-with-light-blush-sport-band-ml",
    "https://jabko.ua/apple-watch/apple-watch-series-10/apple-watch-series-10-gps-46mm-rose-gold-aluminum-case-with-plum-sport-loop",
  
    "https://jabko.ua/apple-watch/apple-watch-ultra-2/apple-watch-ultra-2-49mm-gps--lte-satin-black-titanium-case-with-black-ocean-band",
  
    "https://jabko.ua/apple-watch/apple-watch-ultra-2/apple-watch-ultra-2-49mm-gps--lte-satin-black-titanium-case-with-black-titanium-milanese-loop-2024",
    "https://jabko.ua/apple-watch/apple-watch-ultra-2/apple-watch-ultra-2-49mm-gps--lte-satin-black-titanium-case-with-black-titanium-milanese-loop-medium-2024",
    "https://jabko.ua/apple-watch/apple-watch-ultra-2/apple-watch-ultra-2-49mm-gps--lte-satin-black-titanium-case-with-black-titanium-milanese-loop-large-2024",
  
  
    "https://jabko.ua/apple-watch/apple-watch-ultra-2/apple-watch-ultra-2-49mm-gps--lte-satin-black-titanium-case-with-dark-green-alpine-loop",
    "https://jabko.ua/apple-watch/apple-watch-ultra-2/apple-watch-ultra-2-49mm-gps--lte-satin-black-titanium-case-with-dark-green-alpine-loop-medium",
    "https://jabko.ua/apple-watch/apple-watch-ultra-2/apple-watch-ultra-2-49mm-gps--lte-satin-black-titanium-case-with-dark-green-alpine-loop-large",
  
    "https://jabko.ua/apple-watch/apple-watch-ultra-2/apple-watch-ultra-2-49mm-gps--lte-satin-black-titanium-case-with-black-trail-loop",
    "https://jabko.ua/apple-watch/apple-watch-ultra-2/apple-watch-ultra-2-49mm-gps--lte-satin-black-titanium-case-with-black-trail-loop-ml",
  
    "https://jabko.ua/apple-watch/apple-watch-ultra-2/apple-watch-ultra-2-49mm-gps--lte-titanium-case-with-navy-ocean-band",
  
    "https://jabko.ua/apple-watch/apple-watch-ultra-2/apple-watch-ultra-2-49mm-gps--lte-titanium-case-with-natural-titanium-milanese-loop-small",
    "https://jabko.ua/apple-watch/apple-watch-ultra-2/apple-watch-ultra-2-49mm-gps--lte-titanium-case-with-natural-titanium-milanese-loop-medium",
    "https://jabko.ua/apple-watch/apple-watch-ultra-2/apple-watch-ultra-2-49mm-gps--lte-titanium-case-with-natural-titanium-milanese-loop-large",
  
    "https://jabko.ua/apple-watch/apple-watch-ultra-2/apple-watch-ultra-2-49mm-gps--lte-titanium-case-with-tan-alpine-loop-small",
    "https://jabko.ua/apple-watch/apple-watch-ultra-2/apple-watch-ultra-2-49mm-gps--lte-titanium-case-with-tan-alpine-loop-medium",
    "https://jabko.ua/apple-watch/apple-watch-ultra-2/apple-watch-ultra-2-49mm-gps--lte-titanium-case-with-tan-alpine-loop-large",
  
    "https://jabko.ua/apple-watch/apple-watch-ultra-2/apple-watch-ultra-2-49mm-gps--lte-titanium-case-with-blue-trail-loop-sm",
    "https://jabko.ua/apple-watch/apple-watch-ultra-2/apple-watch-ultra-2-49mm-gps--lte-titanium-case-with-blue-trail-loop-ml",
  ];
  const arrLinkiPeopleAWS10andUltra2024 = [
    "https://www.ipeople.in.ua/products/apple-watch-series-10-gps-42mm-silver-alu-case-w-denim-sport-band---sm-mwwa3",
    "https://www.ipeople.in.ua/products/apple-watch-series-10-gps-42mm-silver-alu-case-w-denim-sport-band---ml-mwwc3",
    // "https://www.ipeople.in.ua/products/apple-watch-series-10-gps-42mm-silver-aluminum-case-w-blue-cloud-sport-loop-mwwd3",
  
    "https://www.ipeople.in.ua/products/apple-watch-series-10-gps-42mm-jet-black-alu-case-w-black-sport-band---sm-mwwe3",
    "https://www.ipeople.in.ua/products/apple-watch-series-10-42mm-jet-black-aluminum-case-with-black-sport-band---ml-mxlk3",
    "https://www.ipeople.in.ua/products/apple-watch-series-10-gps-42mm-jet-black-alu-case-w-ink-sport-loop-mwwg3",
  
    "https://www.ipeople.in.ua/products/apple-watch-series-10-gps-42mm-rose-gold-alu-case-w-light-blush-sport-band---sm-mwwh3",
    "https://www.ipeople.in.ua/products/apple-watch-series-10-gps-42mm-rose-gold-alu-case-w-light-blush-sport-band---ml-mwwj3",
  
    // "https://www.ipeople.in.ua/products/apple-watch-series-10-gps-46mm-silver-alu-case-w-denim-sport-band---sm-mwwl3",
    "https://www.ipeople.in.ua/products/apple-watch-series-10-gps-46mm-silver-alu-case-w-denim-sport-band---ml-mwwm3",
    // "https://www.ipeople.in.ua/products/apple-watch-series-10-gps-46mm-silver-aluminum-case-w-blue-cloud-sport-loop-mwwn3",
  
    "https://www.ipeople.in.ua/products/apple-watch-series-10-46mm-jet-black-aluminum-case-with-black-sport-band---sm-mwwp3",
    "https://www.ipeople.in.ua/products/apple-watch-series-10-46mm-jet-black-aluminum-case-with-black-sport-band---ml-mwwq3",
    "https://www.ipeople.in.ua/products/apple-watch-series-10-gps-46mm-jet-black-aluminum-case-w-ink-sport-loop-mwwr3",
  
    "https://www.ipeople.in.ua/products/apple-watch-series-10-gps-46mm-rose-gold-alu-case-w-light-blush-sport-band---sm-mwwt3",
    "https://www.ipeople.in.ua/products/apple-watch-series-10-gps-46mm-rose-gold-alu-case-w-light-blush-sport-band---ml-mwwu3",
  
    "https://www.ipeople.in.ua/products/apple-watch-ultra-2-gps--cellular-49mm-black-titanium-case-with-black-ocean-band-mx4p3",
  
    "https://www.ipeople.in.ua/products/apple-watch-ultra-2-gps--cellular-49mm-black-titanium-case-with-black-titanium-milanese-loop---sm-mx4w3",
    // "https://www.ipeople.in.ua/products/apple-watch-ultra-2-gps--cellular-49mm-black-titanium-case-with-black-titanium-milanese-loop---ml-mx5u3",
    // "https://www.ipeople.in.ua/products/apple-watch-ultra-2-gps--cellular-49mm-black-titanium-case-with-black-titanium-milanese-loop---xl-mx5v3",
  
  
    "https://www.ipeople.in.ua/products/apple-watch-ultra-2-gps--cellular-49mm-black-titanium-case-with-dark-green-alpine-loop---m-mx4r3",
    "https://www.ipeople.in.ua/products/apple-watch-ultra-2-gps--cellular-49mm-black-titanium-case-with-dark-green-alpine-loop---l-mx4t3",
  
    // "https://www.ipeople.in.ua/products/apple-watch-ultra-2-gps--cellular-49mm-black-titanium-case-with-black-trail-loop---sm-mx4u3",
    "https://www.ipeople.in.ua/products/apple-watch-ultra-2-gps--cellular-49mm-black-titanium-case-with-black-trail-loop---ml-mx4v3",
  
  
    // "https://www.ipeople.in.ua/products/apple-watch-ultra-2-gps--cellular-49mm-natural-titanium-case-with-natural-titanium-milanese-loop---sm-mx4m3",
    // "https://www.ipeople.in.ua/products/apple-watch-ultra-2-gps--cellular-49mm-natural-titanium-case-with-natural-titanium-milanese-loop---ml-mx5r3",
    // "https://www.ipeople.in.ua/products/apple-watch-ultra-2-gps--cellular-49mm-natural-titanium-case-with-natural-titanium-milanese-loop---xl-mx5t3",
  ];
  const arrLinkEstoreAWS10andUltra2024 = [
    "https://estore.ua/ua/apple-watch-series-10-silver-aluminium-case-with-sport-band/?q=mwwa3",
    "https://estore.ua/ua/apple-watch-series-10-42mm-silver-aluminium-case-with-denim-sport-band-ml-mwwc3/?q=mwwc3",
    "https://estore.ua/ua/apple-watch-series-10-42mm-silver-aluminium-case-with-blue-cloud-sport-loop-mwwd3/?q=mwwd3",
  
    "https://estore.ua/ua/apple-watch-series-10-midnight-aluminium-case-with-sport-band/?q=mwwe3",
    "https://estore.ua/ua/apple-watch-series-10-42mm-jet-black-aluminium-case-with-black-sport-band-ml-mwwf3/?q=mwwf3",
    "https://estore.ua/ua/apple-watch-series-10-42mm-jet-black-aluminium-case-with-ink-sport-loop-mwwg3/?q=mwwg3",
  
    "https://estore.ua/ua/apple-watch-series-10-42mm-rose-gold-aluminium-case-with-light-blush-sport-band-s-m-mwwh3/?q=mwwh3",
    "https://estore.ua/ua/apple-watch-series-10-42mm-rose-gold-aluminium-case-with-light-blush-sport-band-ml-mwwj3/?q=mwwj3",
    "https://estore.ua/ua/apple-watch-series-10-42mm-rose-gold-aluminium-case-with-plum-sport-loop-mwwk3/?q=mwwk3",
  
    "https://estore.ua/ua/apple-watch-series-10-46mm-silver-aluminium-case-with-sport-band/?q=mwwl3",
    "https://estore.ua/ua/apple-watch-series-10-46mm-silver-aluminium-case-with-denim-sport-band-ml-mwwm3/?q=mwwm3",
    "https://estore.ua/ua/apple-watch-series-10-46mm-silver-aluminium-case-with-blue-cloud-sport-loop-mwwn3/?q=mwwn3",
  
    "https://estore.ua/ua/apple-watch-series-10-46mm-jet-black-aluminium-case-with-sport-band/?q=mwwp3",
    "https://estore.ua/ua/apple-watch-series-10-46mm-jet-black-aluminium-case-with-black-sport-band-ml-mwwq3/?q=mwwq3",
    "https://estore.ua/ua/apple-watch-series-10-46mm-jet-black-aluminium-case-with-ink-sport-loop-mwwr3/?q=mwwr3",
  
    "https://estore.ua/ua/apple-watch-series-10-46mm-rose-gold-aluminium-case-with-sport-band/?q=mwwt3",
    "https://estore.ua/ua/apple-watch-series-10-46mm-rose-gold-aluminium-case-with-light-blush-sport-band-ml-mwwu3/?q=mwwu3",
    "https://estore.ua/ua/apple-watch-series-10-46mm-rose-gold-aluminium-case-with-plum-sport-loop-mwwv3/?q=mwwv3",
  
    
  ];
  
  const arrLinkEstoreAWS10andUltra2024Two = [
  "https://estore.ua/ua/apple-watch-ultra-2-black-titanium-case-with-black-ocean-band/?q=mx4p3",
  
    "https://estore.ua/ua/apple-watch-ultra-2-black-titanium-case-with-black-titanium-milanese-loop-small-mx4w3/?q=mx4w3",
    "https://estore.ua/ua/apple-watch-ultra-2-black-titanium-case-with-milanese-loop-medium-mx5u3/?q=mx5u3",
    "https://estore.ua/ua/apple-watch-ultra-2-black-titanium-case-with-black-titanium-milanese-loop-large-mx5v3/?q=mx5v3",
  
  
    "https://estore.ua/ua/apple-watch-ultra-2-black-titanium-case-with-dark-green-alpine-loop-small-mx4q3/?q=mx4q3",
    "https://estore.ua/ua/apple-watch-ultra-2-black-titanium-case-with-dark-green-alpine-loop-medium-mx4r3/?q=mx4r3",
    "https://estore.ua/ua/apple-watch-ultra-2-black-titanium-case-with-dark-green-alpine-loop-large-mx4t3/?q=mx4t3",
  
    "https://estore.ua/ua/apple-watch-ultra-2-black-titanium-case-with-black-trail-loop-sm-mx4u3/?q=mx4u3",
    "https://estore.ua/ua/apple-watch-ultra-2-black-titanium-case-with-black-trail-loop-ml-mx4v3/?q=mx4v3",
  
    "https://estore.ua/ua/apple-watch-ultra-2-natural-titanium-case-with-navy-ocean-band-mx4d3/?q=mx4d3",
  
    "https://estore.ua/ua/apple-watch-ultra-2-natural-titanium-case-with-natural-titanium-milanese-loop-medium-mx5r3/?q=mx5r3",
    "https://estore.ua/ua/apple-watch-ultra-2-natural-titanium-case-with-natural-titanium-milanese-loop-large-mx5t3/?q=mx5t3",
  
    "https://estore.ua/ua/apple-watch-ultra-2-natural-titanium-case-with-tan-alpine-loop-small-mx4e3/?q=mx4e3",
    "https://estore.ua/ua/apple-watch-ultra-2-natural-titanium-case-with-tan-alpine-loop-medium-mx4f3/?q=mx4f3",
    "https://estore.ua/ua/apple-watch-ultra-2-natural-titanium-case-with-tan-alpine-loop-large-mx4h3/?q=mx4h3",
  
    "https://estore.ua/ua/apple-watch-ultra-2-natural-titanium-case-with-blue-trail-loop-sm-mx4j3/?q=mx4j3",
    "https://estore.ua/ua/apple-watch-ultra-2-natural-titanium-case-with-blue-trail-loop-ml-mx4l3/?q=mx4l3",
  ];
  const arrLinkGroAWS10andUltra2024 = [
    "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-10/smart-godinnik-apple-watch-series-10-gps-42mm-silver-alu-case-w-denim-sport-band-s-m-mwwa3/",
    "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-10/smart-godinnik-apple-watch-series-10-gps-42mm-silver-alu-case-w-denim-sport-band-m-l-mwwc3/",
    "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-10/smart-godinnik-apple-watch-series-10-gps-42mm-silver-aluminum-case-w-blue-cloud-sport-loop-mwwd3/",
  
    "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-10/smart-godinnik-apple-watch-series-10-gps-42mm-jet-black-alu-case-w-black-sport-band-s-m-mwwe3/",
    "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-10/smart-godinnik-apple-watch-series-10-gps-42mm-jet-black-alu-case-w-black-sport-band-m-l-mwwf3/",
    "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-10/smart-godinnik-apple-watch-series-10-gps-42mm-jet-black-aluminum-case-w-ink-sport-loop-mwwg3/",
  
    "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-10/smart-godinnik-apple-watch-series-10-gps-42mm-rose-gold-alu-case-w-light-blush-sport-band-s-m-mwwh3/",
    "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-10/smart-godinnik-apple-watch-series-10-gps-42mm-rose-gold-alu-case-w-light-blush-sport-band-m-l-mwwj3/",
    "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-10/smart-godinnik-apple-watch-series-10-gps-42mm-rose-gold-aluminum-case-w-plum-sport-loop-mwwk3/",
  
    "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-10/smart-godinnik-apple-watch-series-10-gps-46mm-silver-alu-case-w-denim-sport-band-s-m-mwwl3/",
    "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-10/smart-godinnik-apple-watch-series-10-gps-46mm-silver-alu-case-w-denim-sport-band-m-l-mwwm3/",
    "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-10/smart-godinnik-apple-watch-series-10-gps-46mm-silver-aluminum-case-w-blue-cloud-sport-loop-mwwn3/",
  
    "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-10/smart-godinnik-apple-watch-series-10-gps-46mm-jet-black-alu-case-w-black-sport-band-s-m-mwwp3/",
    "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-10/smart-godinnik-apple-watch-series-10-gps-46mm-jet-black-alu-case-w-black-sport-band-m-l-mwwq3/",
    "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-10/smart-godinnik-apple-watch-series-10-gps-46mm-jet-black-aluminum-case-w-ink-sport-loop-mwwr3/",
  
    "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-10/smart-godinnik-apple-watch-series-10-gps-46mm-rose-gold-alu-case-w-light-blush-sport-band-s-m-mwwt3/",
    "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-10/smart-godinnik-apple-watch-series-10-gps-46mm-rose-gold-alu-case-w-light-blush-sport-band-m-l-mwwu3/",
    "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-10/smart-godinnik-apple-watch-series-10-gps-46mm-rose-gold-aluminum-case-w-plum-sport-loop-mwwv3/",
  
    "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/smart-godinnik-apple-watch-ultra-2-gps-cellular-49mm-black-titanium-case-w-black-ocean-band-mx4p3/",
  
    "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/smart-godinnik-apple-watch-ultra-2-gps-cellular-49mm-black-titanium-case-w-black-titanium-milanese-loop-s-mx4w3/",
    "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/smart-godinnik-apple-watch-ultra-2-gps-cellular-49mm-black-titanium-case-w-black-titanium-milanese-loop-m-mx5u3/",
    "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/smart-godinnik-apple-watch-ultra-2-gps-cellular-49mm-black-titanium-case-w-black-titanium-milanese-loop-l-mx5v3/",
  
  
    "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/smart-godinnik-apple-watch-ultra-2-gps-cellular-49mm-black-titan-case-w-dark-green-alpine-loop-small-mx4q3/",
    "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/smart-godinnik-apple-watch-ultra-2-gps-cellular-49mm-black-titan-case-w-dark-green-alpine-loop-medium-mx4r3/",
    "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/smart-godinnik-apple-watch-ultra-2-gps-cellular-49mm-black-titan-case-w-dark-green-alpine-loop-large-mx4t3/",
  
    "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/smart-godinnik-apple-watch-ultra-2-gps-cellular-49mm-black-titan-case-w-black-trail-loop-s-m-mx4u3/",
    "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/smart-godinnik-apple-watch-ultra-2-gps-cellular-49mm-black-titan-case-w-black-trail-loop-m-l-mx4v3/",
  
    "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/smart-godinnik-apple-watch-ultra-2-gps-cellular-49mm-natural-titanium-case-w-navy-ocean-band-mx4d3/",
  
    "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/smart-godinnik-apple-watch-ultra-2-gps-cellular-49mm-natural-titanium-case-w-n-titanium-milanese-loop-s-mx4m3/",
    "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/smart-godinnik-apple-watch-ultra-2-gps-cellular-49mm-natural-titanium-case-w-n-titanium-milanese-loop-m-mx5r3/",
    "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/smart-godinnik-apple-watch-ultra-2-gps-cellular-49mm-natural-titanium-case-w-n-titanium-milanese-loop-l-mx5t3/",
  
    "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/smart-godinnik-apple-watch-ultra-2-gps-cellular-49mm-natural-titan-case-w-tan-alpine-loop-small-mx4e3/",
    "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/smart-godinnik-apple-watch-ultra-2-gps-cellular-49mm-natural-titan-case-w-tan-alpine-loop-medium-mx4f3/",
    "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/smart-godinnik-apple-watch-ultra-2-gps-cellular-49mm-natural-titan-case-w-tan-alpine-loop-large-mx4h3/",
  
    "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/smart-godinnik-apple-watch-ultra-2-gps-cellular-49mm-natural-titan-case-w-blue-trail-loop-s-m-mx4j3/",
    "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/smart-godinnik-apple-watch-ultra-2-gps-cellular-49mm-natural-titan-case-w-blue-trail-loop-m-l-mx4l3/",
  ];
  
  
  const arrLinkJabkoAWSSE2024 = [
    "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-gps-40mm-silver-aluminium-case-with-denim-sport-band-sm-mxec3-2024",
  "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-gps-40mm-silver-aluminium-case-with-denim-sport-band-ml-mxed3-2024",
  "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-gps-40mm-silver-aluminium-case-with-blue-cloud-sport-loop-mxee3-2024",
  
  "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-gps-40mm-midnight-aluminium-case-with-midnight-sport-band-sm-mxe73-2024",
  "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-gps-40mm-midnight-aluminium-case-with-midnight-sport-band-ml-mxe93-2024",
  "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-gps-40mm-midnight-aluminium-case-with-ink-sport-loop-mxea3-2024",
  
  "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-gps-40mm-starlight-aluminium-case-with-starlight-sport-band-sm-mxef3-2024",
  "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-gps-40mm-starlight-aluminium-case-with-starlight-sport-band-ml-mxeg3-2024",
  
  "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-gps-44mm-starlight-aluminium-case-with-starlight-sport-band-sm-mxeu3-2024",
  "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-gps-44mm-starlight-aluminium-case-with-starlight-sport-band-ml-mxev3-2024",
  
  "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-gps-44mm-silver-aluminium-case-with-denim-sport-band-sm-mxeq3-2024",
  "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-gps-44mm-silver-aluminium-case-with-denim-sport-band-ml-mxer3-2024",
  "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-gps-44mm-silver-aluminium-case-with-blue-cloud-sport-loop-mxet3-2024",
  
  "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-gps-44mm-midnight-aluminium-case-with-midnight-sport-band-sm-mxej3-2024",
  "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-gps-44mm-midnight-aluminium-case-with-midnight-sport-band-ml-mxek3-2024",
  "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-gps-44mm-midnight-aluminium-case-with-ink-sport-loop-mxep3-2024",
  ];
  const arrLinkMobilePlanetSE2024 = [
    "https://mobileplanet.ua/ua/apple-watch-se-2-gps-40mm-silver-alumini-328336",
  "https://mobileplanet.ua/ua/apple-watch-se-2-gps-40mm-silver-alumini-328341",
  "https://mobileplanet.ua/ua/apple-watch-se-2-gps-40mm-silver-alumini-328344",
  
  "https://mobileplanet.ua/ua/apple-watch-series-se2-gps-40mm-midnight-327688",
  "https://mobileplanet.ua/ua/apple-watch-se-2-gps-40mm-midnight-alumi-328339",
  "https://mobileplanet.ua/ua/apple-watch-se-2-gps-40mm-midnight-alumi-328343",
  
  "https://mobileplanet.ua/ua/apple-watch-series-se2-gps-40mm-starligh-327689",
  "https://mobileplanet.ua/ua/apple-watch-se-2-gps-40mm-starlight-alum-328342",
  
  "https://mobileplanet.ua/ua/apple-watch-se-2-gps-44mm-starlight-alu-328355",
  "https://mobileplanet.ua/ua/apple-watch-se-2-gps-44mm-starlight-alum-327690",
  
  "https://mobileplanet.ua/ua/apple-watch-se-2-gps-44mm-silver-alumini-328353",
  "https://mobileplanet.ua/ua/apple-watch-se-2-gps-44mm-silver-alumini-328351",
  "https://mobileplanet.ua/ua/apple-watch-se-2-gps-44mm-silver-alumini-328348",
  
  "https://mobileplanet.ua/ua/apple-watch-se-2-gps-44mm-midnight-alumi-328349",
  "https://mobileplanet.ua/ua/apple-watch-se-2-gps-44mm-midnight-alumi-328345",
  ];
  const arrLinkGroAWSSE2024 = [
    "https://grokholsky.com/ua/product/apple/apple-watch/apple-watch-series-se-2/smart-godinnik-apple-watch-se-2-gps-40mm-silver-aluminium-case-w-denim-sport-band-s-m-mxec3/",
  "https://grokholsky.com/ua/product/apple/apple-watch/apple-watch-series-se-2/smart-godinnik-apple-watch-se-2-gps-40mm-silver-aluminium-case-w-denim-sport-band-m-l-mxed3/",
  "https://grokholsky.com/ua/product/apple/apple-watch/apple-watch-series-se-2/smart-godinnik-apple-watch-se-2-gps-40mm-silver-aluminium-case-w-blue-cloud-sport-loop-mxee3/",
  
  "https://grokholsky.com/ua/product/apple/apple-watch/apple-watch-series-se-2/smart-godinnik-apple-watch-se-2-gps-40mm-midnight-alu-case-w-midnight-sport-band-s-m-mxe73/",
  "https://grokholsky.com/ua/product/apple/apple-watch/apple-watch-series-se-2/smart-godinnik-apple-watch-se-2-gps-40mm-midnight-aluminium-case-w-midnight-sport-band-m-l-mxe93/",
  "https://grokholsky.com/ua/product/apple/apple-watch/apple-watch-series-se-2/smart-godinnik-apple-watch-se-2-gps-40mm-midnight-aluminium-case-w-ink-sport-loop-mxea3/",
  
  "https://grokholsky.com/ua/product/apple/apple-watch/apple-watch-series-se-2/smart-godinnik-apple-watch-se-2-gps-40mm-starlight-aluminium-case-w-starlight-sport-band-s-m-mxef3/",
  "https://grokholsky.com/ua/product/apple/apple-watch/apple-watch-series-se-2/smart-godinnik-apple-watch-se-2-gps-40mm-starlight-aluminium-case-w-starlight-sport-band-m-l-mxeg3/",
  
  "https://grokholsky.com/ua/product/apple/apple-watch/apple-watch-series-se-2/smart-godinnik-apple-watch-se-2-gps-44mm-starlight-alu-case-w-starlight-sport-band-s-m-mxeu3/",
  "https://grokholsky.com/ua/product/apple/apple-watch/apple-watch-series-se-2/smart-godinnik-apple-watch-se-2-gps-44mm-starlight-aluminium-case-w-starlight-sport-band-m-l-mxev3/",
  
  "https://grokholsky.com/ua/product/apple/apple-watch/apple-watch-series-se-2/smart-godinnik-apple-watch-se-2-gps-44mm-silver-aluminium-case-w-denim-sport-band-s-m-mxeq3/",
  "https://grokholsky.com/ua/product/apple/apple-watch/apple-watch-series-se-2/smart-godinnik-apple-watch-se-2-gps-44mm-silver-aluminium-case-w-denim-sport-band-m-l-mxer3/",
  "https://grokholsky.com/ua/product/apple/apple-watch/apple-watch-series-se-2/smart-godinnik-apple-watch-se-2-gps-44mm-silver-aluminium-case-w-blue-cloud-sport-loop-mxet3/",
  
  "https://grokholsky.com/ua/product/apple/apple-watch/apple-watch-series-se-2/smart-godinnik-apple-watch-se-2-gps-44mm-midnight-aluminium-case-w-midnight-sport-band-s-m-mxej3/",
  "https://grokholsky.com/ua/product/apple/apple-watch/apple-watch-series-se-2/smart-godinnik-apple-watch-se-2-gps-44mm-midnight-aluminium-case-w-midnight-sport-band-m-l-mxek3/",
  "https://grokholsky.com/ua/product/apple/apple-watch/apple-watch-series-se-2/smart-godinnik-apple-watch-se-2-gps-44mm-midnight-aluminium-case-w-ink-sport-loop-mxep3/",
  ];
  const arrLinkEstoreAWSSE2024 = [
    "https://estore.ua/ua/apple-watch-se-2-2024-gps-40mm-silver-aluminium-case-with-denim-sport-band-sm-mxec3/?q=mxec3",
  "https://estore.ua/ua/apple-watch-se-2-2024-gps-40mm-silver-aluminium-case-with-denim-sport-band-ml-mxed3/?q=mxed3",
  "https://estore.ua/ua/apple-watch-se-2-2024-gps-40mm-silver-aluminium-case-with-blue-cloud-sport-loop-mxee3/?q=mxee3",
  
  "https://estore.ua/ua/apple-watch-se-2-2024-gps-40mm-midnight-aluminium-case-with-midnight-sport-band-sm-mxe73/?q=mxe73",
  "https://estore.ua/ua/apple-watch-se-2-2024-gps-40mm-midnight-aluminium-case-with-midnight-sport-band-ml-mxe93/?q=mxe93",
  "https://estore.ua/ua/apple-watch-se-2-2024-gps-40mm-midnight-aluminium-case-with-ink-sport-loop-mxea3/?q=mxea3",
  
  "https://estore.ua/ua/apple-watch-se-2-2024-gps-40mm-starlight-aluminium-case-with-starlight-sport-band-sm-mxef3/?q=mxef3",
  "https://estore.ua/ua/apple-watch-se-2-2024-gps-40mm-starlight-aluminium-case-with-starlight-sport-band-ml-mxeg3/?q=mxeg3",
  
  "https://estore.ua/ua/apple-watch-se-2-2024-gps-44mm-starlight-aluminium-case-with-starlight-sport-band-sm-mxeu3/?q=mxeu3",
  "https://estore.ua/ua/apple-watch-se-2-2024-gps-44mm-starlight-aluminium-case-with-starlight-sport-band-ml-mxev3/?q=mxev3",
  
  "https://estore.ua/ua/apple-watch-se-2-2024-gps-44mm-silver-aluminium-case-with-denim-sport-band-sm-mxeq3/?q=mxeq3",
  "https://estore.ua/ua/apple-watch-se-2-2024-gps-44mm-silver-aluminium-case-with-denim-sport-band-ml-mxer3/?q=mxer3",
  "https://estore.ua/ua/apple-watch-se-2-2024-gps-44mm-silver-aluminium-case-with-blue-cloud-sport-loop-mxet3/?q=mxet3",
  
  "https://estore.ua/ua/apple-watch-se-2-2024-gps-44mm-midnight-aluminium-case-with-midnight-sport-band-sm-mxej3/?q=mxej3",
  "https://estore.ua/ua/apple-watch-se-2-2024-gps-44mm-midnight-aluminium-case-with-midnight-sport-band-ml-mxek3/?q=mxek3",
  "https://estore.ua/ua/apple-watch-se-2-2024-gps-44mm-midnight-aluminium-case-with-ink-sport-loop-mxep3/?q=mxep3",
  ];



async function f() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();


  for (let i = 0; i < arrLinkJabko16IPH.length; i += 1) {
    await page.goto(arrLinkJabko16IPH[i]);
    const n = await page.$("#txt");

    let arr8 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-new__uah") != null) {
        return (
          text2 + "J: " + document.querySelector(".price-new__uah").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr8);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkIstore16IPH.length; i += 1) {
    await page.goto(arrLinkIstore16IPH[i]);
    const n = await page.$("#txt");

    let arr4 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".product_price ") != null) {
        return (
          text2 + "I: " + document.querySelector(".product_price ").innerText
        );
      } else {
        return;
      }
    });

    console.log(arr4);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkMobilePlanet16IPH.length; i += 1) {
    await page.goto(arrLinkMobilePlanet16IPH[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-value") != null) {
        return (
          text2 + "MP: " + document.querySelector(".price-value").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr3);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkGro16IPH.length; i += 1) {
    await page.goto(arrLinkGro16IPH[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector(".sku").innerText;
      if (document.querySelector(".product-price-value") != null) {
        return (
          text2 + "Gro: " + document.querySelector(".product-price-value").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr3);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkEstore16IPH.length; i += 1) {
    await page.goto(arrLinkEstore16IPH[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".regular-price") != null) {
        return (
          text2 + "Estore: " + document.querySelector(".regular-price").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkCts16IPH.length; i += 1) {
    await page.goto(arrLinkCts16IPH[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price") != null) {
        return (
          text2 + "CRS: " + document.querySelector(".price").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkiPeople16.length; i += 1) {
    await page.goto(arrLinkiPeople16[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector(".usd").innerText;
      if (document.querySelector(".usd") != null) {
        return (
          text2 + "iPeople: " + document.querySelector(".usd").innerText
        );
      } else {
        return ;
      }
    });

    console.log(arr3);
    await page.setDefaultNavigationTimeout(0);
  }

  for (let i = 0; i < arrLinkJabko16eIPH.length; i += 1) {
    await page.goto(arrLinkJabko16eIPH[i]);
    const n = await page.$("#txt");

    let arr8 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-new__uah") != null) {
        return (
          text2 + "J: " + document.querySelector(".price-new__uah").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr8);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkIstore16eIPH.length; i += 1) {
    await page.goto(arrLinkIstore16eIPH[i]);
    const n = await page.$("#txt");

    let arr4 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".product_price ") != null) {
        return (
          text2 + "I: " + document.querySelector(".product_price ").innerText
        );
      } else {
        return;
      }
    });

    console.log(arr4);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkMobilePlanet16eIPH.length; i += 1) {
    await page.goto(arrLinkMobilePlanet16eIPH[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-value") != null) {
        return (
          text2 + "MP: " + document.querySelector(".price-value").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr3);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkGro16eIPH.length; i += 1) {
    await page.goto(arrLinkGro16eIPH[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector(".sku").innerText;
      if (document.querySelector(".product-price-value") != null) {
        return (
          text2 + "Gro: " + document.querySelector(".product-price-value").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr3);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkEstore16eIPH.length; i += 1) {
    await page.goto(arrLinkEstore16eIPH[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".regular-price") != null) {
        return (
          text2 + "Estore: " + document.querySelector(".regular-price").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkiPeople16e.length; i += 1) {
    await page.goto(arrLinkiPeople16e[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector(".usd").innerText;
      if (document.querySelector(".usd") != null) {
        return (
          text2 + "iPeople: " + document.querySelector(".usd").innerText
        );
      } else {
        return ;
      }
    });

    console.log(arr3);
    await page.setDefaultNavigationTimeout(0);
  }


  for (let i = 0; i < arrLinkYua16.length; i += 1) {
    await page.goto(arrLinkYua16[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price") != null) {
        return (
          text2 + "Yua: " + document.querySelector(".price").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkYabloki16.length; i += 1) {
    await page.goto(arrLinkYabloki16[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".product-price-title") != null) {
        return (
          text2 + "Yabloki: " + document.querySelector(".product-price-title").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkYua16e.length; i += 1) {
    await page.goto(arrLinkYua16e[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price") != null) {
        return (
          text2 + "Yua: " + document.querySelector(".price").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkYabloki16e.length; i += 1) {
    await page.goto(arrLinkYabloki16e[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".product-price-title") != null) {
        return (
          text2 + "Yabloki: " + document.querySelector(".product-price-title").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }


//   for (let i = 0; i < arrLinkCts16IPHiNfo.length; i += 1) {
//     await page.goto(arrLinkCts16IPHiNfo[i]);
//     const n = await page.$("#txt");

//     let arr2 = await page.evaluate(() => {
//       let text2 = document.querySelector("h1").innerText;
//       if (document.querySelector(".Description_block__cKP9f") != null) {
//         return (
//           text2 + "CRS: " + document.querySelector(".Description_block__cKP9f").innerText
//         );
//       } else {
//         return text2;
//       }
//     });

//     console.log(arr2);
//     await page.setDefaultNavigationTimeout(0);
//   }

for (let i = 0; i < arrLinkJabko15ProAndProMax.length; i += 1) {
    await page.goto(arrLinkJabko15ProAndProMax[i]);
    const n = await page.$("#txt");

    let arr8 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-new__uah") != null) {
        return (
          text2 + "J: " + document.querySelector(".price-new__uah").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr8);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkJabko15.length; i += 1) {
    await page.goto(arrLinkJabko15[i]);
    const n = await page.$("#txt");

    let arr8 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-new__uah") != null) {
        return (
          text2 + "J: " + document.querySelector(".price-new__uah").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr8);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkMobilePlanet15ProAndProMax.length; i += 1) {
    await page.goto(arrLinkMobilePlanet15ProAndProMax[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-value") != null) {
        return (
          text2 + "MP: " + document.querySelector(".price-value").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr3);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkMobilePlanet15.length; i += 1) {
    await page.goto(arrLinkMobilePlanet15[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-value") != null) {
        return (
          text2 + "MP: " + document.querySelector(".price-value").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr3);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkIstore15ProAndProMax.length; i += 1) {
    await page.goto(arrLinkIstore15ProAndProMax[i]);
    const n = await page.$("#txt");

    let arr4 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".product_price ") != null) {
        return (
          text2 + "I: " + document.querySelector(".product_price ").innerText
        );
      } else {
        return;
      }
    });

    console.log(arr4);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkIstore15.length; i += 1) {
    await page.goto(arrLinkIstore15[i]);
    const n = await page.$("#txt");

    let arr4 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".product_price ") != null) {
        return (
          text2 + "I: " + document.querySelector(".product_price ").innerText
        );
      } else {
        return;
      }
    });

    console.log(arr4);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkGro15ProAndMax.length; i += 1) {
    await page.goto(arrLinkGro15ProAndMax[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector(".sku").innerText;
      if (document.querySelector(".product-price-value") != null) {
        return (
          text2 + "Gro: " + document.querySelector(".product-price-value").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr3);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkGro15.length; i += 1) {
    await page.goto(arrLinkGro15[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector(".sku").innerText;
      if (document.querySelector(".product-price-value") != null) {
        return (
          text2 + "Gro: " + document.querySelector(".product-price-value").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr3);
    await page.setDefaultNavigationTimeout(0);
  }



  for (let i = 0; i < arrLinkYabko15Plus.length; i += 1) {
    await page.goto(arrLinkYabko15Plus[i]);
    const n = await page.$("#txt");

    let arr8 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-new__uah") != null) {
        return (
          text2 + "J: " + document.querySelector(".price-new__uah").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr8);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkMP15Plus.length; i += 1) {
    await page.goto(arrLinkMP15Plus[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-value") != null) {
        return (
          text2 + "MP: " + document.querySelector(".price-value").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr3);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkIstore15Plus.length; i += 1) {
    await page.goto(arrLinkIstore15Plus[i]);
    const n = await page.$("#txt");

    let arr4 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".product_price ") != null) {
        return (
          text2 + "I: " + document.querySelector(".product_price ").innerText
        );
      } else {
        return;
      }
    });

    console.log(arr4);
    await page.setDefaultNavigationTimeout(0);
  }


  for (let i = 0; i < arrLinkJabkoAWS10andUltra2024.length; i += 1) {
    await page.goto(arrLinkJabkoAWS10andUltra2024[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-new__uah") != null) {
        return (
          text2 + "J: " + document.querySelector(".price-new__uah").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkiPeopleAWS10andUltra2024.length; i += 1) {
    await page.goto(arrLinkiPeopleAWS10andUltra2024[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector(".usd").innerText;
      if (document.querySelector(".usd") != null) {
        return (
          text2 + "iPeople: " + document.querySelector(".usd").innerText
        );
      } else {
        return;
      }
    });

    console.log(arr3);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkEstoreAWS10andUltra2024.length; i += 1) {
    await page.goto(arrLinkEstoreAWS10andUltra2024[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector("p .price") != null) {
        return (
          text2 + "Estore: " + document.querySelector("p .price").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkEstoreAWS10andUltra2024Two.length; i += 1) {
    await page.goto(arrLinkEstoreAWS10andUltra2024Two[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price") != null) {
        return (
          text2 + "Estore: " + document.querySelector(".price").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkGroAWS10andUltra2024.length; i += 1) {
    await page.goto(arrLinkGroAWS10andUltra2024[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector(".sku").innerText;
      if (document.querySelector(".product-price-value") != null) {
        return (
          text2 + "Gro: " + document.querySelector(".product-price-value").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr3);
    await page.setDefaultNavigationTimeout(0);
  }

  for (let i = 0; i < arrLinkJabkoAWSSE2024.length; i += 1) {
    await page.goto(arrLinkJabkoAWSSE2024[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-new__uah") != null) {
        return (
          text2 + "J: " + document.querySelector(".price-new__uah").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkMobilePlanetSE2024.length; i += 1) {
    await page.goto(arrLinkMobilePlanetSE2024[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-value") != null) {
        return (
          text2 + "MP: " + document.querySelector(".price-value").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr3);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkGroAWSSE2024.length; i += 1) {
    await page.goto(arrLinkGroAWSSE2024[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector(".sku").innerText;
      if (document.querySelector(".product-price-value") != null) {
        return (
          text2 + "Gro: " + document.querySelector(".product-price-value").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr3);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkEstoreAWSSE2024.length; i += 1) {
    await page.goto(arrLinkEstoreAWSSE2024[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector("p .price") != null) {
        return (
          text2 + "Estore: " + document.querySelector("p .price").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }



}
f();
