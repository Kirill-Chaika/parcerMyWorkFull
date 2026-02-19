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
"https://www.google.com/",
"https://www.google.com/",
"https://www.google.com/",
"https://www.google.com/",
"https://www.google.com/",

"https://www.google.com/",
"https://www.google.com/",
"https://www.google.com/",
"https://www.google.com/",
"https://www.google.com/",


"https://www.google.com/",
"https://www.google.com/",
"https://www.google.com/",
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

"https://www.ipeople.in.ua/products/apple-iphone-16-512gb-black-myek3",
"https://www.ipeople.in.ua/products/apple-iphone-16-512gb-ultramarine-myer3",
"https://www.ipeople.in.ua/products/apple-iphone-16-512gb-white-myep3",
"https://www.ipeople.in.ua/products/apple-iphone-16-512gb-pink-myeq3",
"https://www.ipeople.in.ua/products/apple-iphone-16-512gb-teal-myeu3",



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
"https://www.ipeople.in.ua/products/apple-iphone-16-plus-512gb-ultramarine-my2d3",
"https://www.ipeople.in.ua/products/apple-iphone-16-plus-512gb-white-my1x3",
"https://www.ipeople.in.ua/products?keyword=Apple+iPhone+16+Plus+512GB+Pink+%28MY253%29",
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
  "https://y.ua/apple-iphone-16-128gb-black/p1285251/",
"https://y.ua/apple-iphone-16-128gb-blue/p1285247/",
"https://y.ua/apple-iphone-16-128gb-white/p1285252/",
"https://y.ua/apple-iphone-16-128gb-pink/p1285248/",
"https://y.ua/apple-iphone-16-128gb-green/p1285250/",

"https://y.ua/apple-iphone-16-256gb-black-ua/p1350292/",
"https://y.ua/apple-iphone-16-256gb-ultramarine-ua/p1350293/",
"https://y.ua/apple-iphone-16-256gb-white-ua/p1350294/",
"https://y.ua/apple-iphone-16-256gb-pink-ua/p1350295/",
"https://y.ua/apple-iphone-16-256gb-teal-ua/p1350296/",

"https://y.ua/apple-iphone-16-512gb-black-ua/p1350297/",
"https://y.ua/apple-iphone-16-512gb-ultramarine-ua/p1350298/",
"https://y.ua/apple-iphone-16-512gb-white-ua/p1350299/",
"https://y.ua/apple-iphone-16-512gb-pink-ua/p1350300/",
"https://y.ua/apple-iphone-16-512gb-teal-ua/p1350301/",

"https://y.ua/apple-iphone-16-plus-128gb-black/p1285259/",
"https://y.ua/apple-iphone-16-plus-128gb-blue/p1285254/",
"https://y.ua/apple-iphone-16-plus-128gb-white/p1285260/",
"https://y.ua/apple-iphone-16-plus-128gb-pink/p1285255/",
"https://y.ua/apple-iphone-16-plus-128gb-green/p1285258/",

"https://y.ua/apple-iphone-16-plus-256gb-black-ua/p1350304/",
"https://y.ua/apple-iphone-16-plus-256gb-ultramarine-ua/p1350302/",
"https://y.ua/apple-iphone-16-plus-256gb-white-ua/p1350305/",
"https://y.ua/apple-iphone-16-plus-256gb-pink-ua/p1350306/",
"https://y.ua/apple-iphone-16-plus-256gb-teal-ua/p1350307/",

"https://y.ua/apple-iphone-16-plus-512gb-black-ua/p1350308/",
"https://y.ua/apple-iphone-16-plus-512gb-ultramarine-ua/p1350303/",
"https://y.ua/apple-iphone-16-plus-512gb-white-ua/p1350309/",
"https://y.ua/apple-iphone-16-plus-512gb-pink-ua/p1350310/",
"https://y.ua/apple-iphone-16-plus-512gb-teal-ua/p1350311/",

"https://y.ua/apple-iphone-16-pro-128gb-gray/p1285270/",
"https://y.ua/apple-iphone-16-pro-128gb-space-black/p1285269/",
"https://y.ua/apple-iphone-16-pro-128gb-white/p1285272/",
"https://y.ua/apple-iphone-16-pro-128gb-rose/p1285271/",

"https://y.ua/apple-iphone-16-pro-256gb-gray/p1285262/",
"https://y.ua/apple-iphone-16-pro-256gb-space-black/p1285261/",
"https://y.ua/apple-iphone-16-pro-256gb-white/p1285264/",
"https://y.ua/apple-iphone-16-pro-256gb-rose/p1285263/",

"https://y.ua/apple-iphone-16-pro-512gb-natural-titanium-ua/p1350313/",
"https://y.ua/apple-iphone-16-pro-512gb-black-titanium-ua/p1350312/",
"https://y.ua/apple-iphone-16-pro-512gb-white-titanium-ua/p1350315/",
"https://y.ua/apple-iphone-16-pro-512gb-desert-titanium-ua/p1350314/",

"https://y.ua/apple-iphone-16-pro-1tb-natural-titanium-ua/p1350317/",
"https://y.ua/apple-iphone-16-pro-1tb-black-titanium-ua/p1350316/",
"https://y.ua/apple-iphone-16-pro-1tb-white-titanium-ua/p1350319/",
"https://y.ua/apple-iphone-16-pro-1tb-desert-titanium-ua/p1350318/",


"https://y.ua/apple-iphone-16-pro-max-256gb-gray/p1285266/",
"https://y.ua/apple-iphone-16-pro-max-256gb-space-black/p1285265/",
"https://y.ua/apple-iphone-16-pro-max-256gb-white/p1285268/",
"https://y.ua/apple-iphone-16-pro-max-256gb-rose/p1285267/",

"https://y.ua/apple-iphone-16-pro-max-512gb-gray/p1285278/",
"https://y.ua/apple-iphone-16-pro-max-512gb-space-black/p1285277/",
"https://y.ua/apple-iphone-16-pro-max-512gb-white/p1285280/",
"https://y.ua/apple-iphone-16-pro-max-512gb-rose/p1285279/",

"https://y.ua/apple-iphone-16-pro-max-128gb-gray/p1285274/",
"https://y.ua/apple-iphone-16-pro-max-128gb-space-black/p1285273/",
"https://y.ua/apple-iphone-16-pro-max-128gb-white/p1285276/",
"https://y.ua/apple-iphone-16-pro-max-128gb-rose/p1285275/",
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
  "https://y.ua/apple-iphone-16e-128gb-white-ua/p1418931/",
"https://y.ua/apple-iphone-16e-128gb-black-ua/p1418930/",

"https://y.ua/apple-iphone-16e-256gb-white-ua/p1418933/",
"https://y.ua/apple-iphone-16e-256gb-black-ua/p1418932/",

"https://y.ua/apple-iphone-16e-512gb-white-ua/p1418935/",
"https://y.ua/apple-iphone-16e-512gb-black-ua/p1418934/",
];
const arrLinkYabloki16e = [
  "https://yabloki.ua/iphone-16e-128gb-white.html",
"https://yabloki.ua/iphone-16e-128gb-black.html",

"https://yabloki.ua/iphone-16e-256gb-white.html",
"https://yabloki.ua/iphone-16e-256gb-black.html",

"https://yabloki.ua/iphone-16e-512gb-white.html",
"https://yabloki.ua/iphone-16e-512gb-black.html",

];

const arrLinkJabko17ProIPH = [
  "https://jabko.ua/product/apple-iphone-17-pro-256gb-orange",
"https://jabko.ua/product/apple-iphone-17-pro-256gb-dark-blue",
"https://jabko.ua/product/apple-iphone-17-pro-256gb-gray",
 
"https://jabko.ua/product/apple-iphone-17-pro-512gb-dark-blue",
"https://jabko.ua/product/apple-iphone-17-pro-512gb-dark-blue",
"https://jabko.ua/product/apple-iphone-17-pro-512gb-gray",
 
"https://jabko.ua/product/apple-iphone-17-pro-1tb-orange",
"https://jabko.ua/product/apple-iphone-17-pro-1tb-dark-blue",
"https://jabko.ua/product/apple-iphone-17-pro-1tb-gray",
 
"https://jabko.ua/product/apple-iphone-17-pro-max-256gb-orange",
"https://jabko.ua/product/apple-iphone-17-pro-max-256gb-dark-blue",
"https://jabko.ua/product/apple-iphone-17-pro-max-256gb-gray",
 
"https://jabko.ua/product/apple-iphone-17-pro-max-512gb-orange",
"https://jabko.ua/product/apple-iphone-17-pro-max-512gb-dark-blue",
"https://jabko.ua/product/apple-iphone-17-pro-max-512gb-gray",
 
"https://jabko.ua/product/apple-iphone-17-pro-max-1tb-orange",
"https://jabko.ua/product/apple-iphone-17-pro-max-1tb-dark-blue",
"https://jabko.ua/product/apple-iphone-17-pro-max-1tb-gray",
 
"https://jabko.ua/product/apple-iphone-17-pro-max-2tb-orange",
"https://jabko.ua/product/apple-iphone-17-pro-max-2tb-dark-blue",
"https://jabko.ua/product/apple-iphone-17-pro-max-1tb-gray_5zxg",
]
const arrLinkMobilePlanet17ProIPH = [
  "https://mobileplanet.ua/apple-iphone-17-pro-256gb-cosmic-orange-mg8h4-354248",
"https://mobileplanet.ua/apple-iphone-17-pro-256gb-deep-blue-mg8j4-354249",
"https://mobileplanet.ua/apple-iphone-17-pro-256gb-silver-mg8g4-354256",
 
"https://mobileplanet.ua/apple-iphone-17-pro-512gb-deep-blue-mg8n4-354258",
"https://mobileplanet.ua/apple-iphone-17-pro-512gb-deep-blue-mg8n4-354258",
"https://mobileplanet.ua/apple-iphone-17-pro-512gb-silver-mg8k4-354265",
 
"https://mobileplanet.ua/apple-iphone-17-pro-1tb-cosmic-orange-mg8q4-354239",
"https://mobileplanet.ua/apple-iphone-17-pro-1tb-deep-blue-mg8r4-354240",
"https://mobileplanet.ua/apple-iphone-17-pro-1tb-silver-mg8p4-354247",

"https://mobileplanet.ua/apple-iphone-17-pro-max-256gb-cosmic-orange-mfyn4-354275",
"https://mobileplanet.ua/apple-iphone-17-pro-max-256gb-deep-blue-mfyp4-354276",
"https://mobileplanet.ua/apple-iphone-17-pro-max-256gb-silver-mfym4-354283",
 
"https://mobileplanet.ua/apple-iphone-17-pro-max-512gb-cosmic-orange-mfyt4-354293",
"https://mobileplanet.ua/apple-iphone-17-pro-max-512gb-deep-blue-mfyu4-354294",
"https://mobileplanet.ua/apple-iphone-17-pro-max-512gb-silver-mfyq4-354301",
 
"https://mobileplanet.ua/apple-iphone-17-pro-max-1tb-cosmic-orange-mfyw4-354266",
"https://mobileplanet.ua/apple-iphone-17-pro-max-1tb-deep-blue-mfyx4-354267",
"https://mobileplanet.ua/apple-iphone-17-pro-max-1tb-silver-mfyv4-354274",
 
"https://mobileplanet.ua/apple-iphone-17-pro-max-2tb-cosmic-orange-mg004-354284",
"https://mobileplanet.ua/apple-iphone-17-pro-max-2tb-deep-blue-mg014-354285",
"https://mobileplanet.ua/apple-iphone-17-pro-max-2tb-silver-mfyy4-354292",
]
const arrLinkGro17ProIPH = [
  "https://grokholsky.com/ua/product/apple/iphone/iphone-17-pro/smartfon-apple-iphone-17-pro-256gb-cosmic-orange-mg8h4/",
"https://grokholsky.com/ua/product/apple/iphone/iphone-17-pro/smartfon-apple-iphone-17-pro-256gb-deep-blue-mg8j4/",
"https://grokholsky.com/ua/product/apple/iphone/iphone-17-pro/smartfon-apple-iphone-17-pro-256gb-silver-mg8g4/",
 
"https://grokholsky.com/ua/product/apple/iphone/iphone-17-pro/smartfon-apple-iphone-17-pro-512gb-deep-blue-mg8n4/",
"https://grokholsky.com/ua/product/apple/iphone/iphone-17-pro/smartfon-apple-iphone-17-pro-512gb-deep-blue-mg8n4/",
"https://grokholsky.com/ua/product/apple/iphone/iphone-17-pro/smartfon-apple-iphone-17-pro-512gb-silver-mg8k4/",
 
"https://grokholsky.com/ua/product/apple/iphone/iphone-17-pro/smartfon-apple-iphone-17-pro-1tb-cosmic-orange-mg8q4/",
"https://grokholsky.com/ua/product/apple/iphone/iphone-17-pro/smartfon-apple-iphone-17-pro-1tb-deep-blue-mg8r4/",
"https://grokholsky.com/ua/product/apple/iphone/iphone-17-pro/smartfon-apple-iphone-17-pro-1tb-silver-mg8p4/",
 
"https://grokholsky.com/ua/product/apple/iphone/iphone-17-pro-max/smartfon-apple-iphone-17-pro-max-256gb-cosmic-orange-mfyn4/",
"https://grokholsky.com/ua/product/apple/iphone/iphone-17-pro-max/smartfon-apple-iphone-17-pro-max-256gb-deep-blue-mfyp4/",
"https://grokholsky.com/ua/product/apple/iphone/iphone-17-pro-max/smartfon-apple-iphone-17-pro-max-256gb-silver-mfym4/",
 
"https://grokholsky.com/ua/product/apple/iphone/iphone-17-pro-max/smartfon-apple-iphone-17-pro-max-512gb-cosmic-orange-mfyt4/",
"https://grokholsky.com/ua/product/apple/iphone/iphone-17-pro-max/smartfon-apple-iphone-17-pro-max-512gb-deep-blue-mfyu4/",
"https://grokholsky.com/ua/product/apple/iphone/iphone-17-pro-max/smartfon-apple-iphone-17-pro-max-512gb-silver-mfyq4/",
 
"https://grokholsky.com/ua/product/apple/iphone/iphone-17-pro-max/smartfon-apple-iphone-17-pro-max-1tb-cosmic-orange-mfyw4/",
"https://grokholsky.com/ua/product/apple/iphone/iphone-17-pro-max/smartfon-apple-iphone-17-pro-max-1tb-deep-blue-mfyx4/",
"https://grokholsky.com/ua/product/apple/iphone/iphone-17-pro-max/smartfon-apple-iphone-17-pro-max-1tb-silver-mfyv4/",
 
"https://grokholsky.com/ua/product/apple/iphone/iphone-17-pro-max/smartfon-apple-iphone-17-pro-max-2tb-cosmic-orange-mg004/",
"https://grokholsky.com/ua/product/apple/iphone/iphone-17-pro-max/smartfon-apple-iphone-17-pro-max-2tb-deep-blue-mg014/",
"https://grokholsky.com/ua/product/apple/iphone/iphone-17-pro-max/smartfon-apple-iphone-17-pro-max-2tb-silver-mfyy4/",
]
const arrLinkEstore17ProIPH = [
  "https://estore.ua/ua/iphone-17-pro-256gb-cosmic-orange-mg8h4/?q=mg8h4",
"https://estore.ua/ua/iphone-17-pro-256gb-deep-blue-mg8j4/?q=mg8j4",
"https://estore.ua/ua/iphone-17-pro-256gb-silver-mg8g4/?q=mg8g4",
 
"https://estore.ua/ua/iphone-17-pro-512gb-cosmic-orange-mg8n4/?q=mg8n4",
"https://estore.ua/ua/iphone-17-pro-512gb-deep-blue-mg8n4/?q=mg8n4",
"https://estore.ua/ua/iphone-17-pro-512gb-silver-mg8k4/?q=mg8k4",
 
"https://estore.ua/ua/iphone-17-pro-1tb-cosmic-orange-mg8q4/?q=mg8q4",
"https://estore.ua/ua/iphone-17-pro-1tb-deep-blue-mg8r4/?q=mg8r4",
"https://estore.ua/ua/iphone-17-pro-1tb-silver-mg8p4/?q=mg8p4",
 
"https://estore.ua/ua/iphone-17-pro-max-256gb-cosmic-orange-mfyn4/?q=mfyn4",
"https://estore.ua/ua/iphone-17-pro-max-256gb-deep-blue-mfyp4/?q=mfyp4",
"https://estore.ua/ua/iphone-17-pro-max-256gb-silver-mfym4/?q=mfym4",
 
"https://estore.ua/ua/iphone-17-pro-max-512gb-cosmic-orange-mfyt4/?q=mfyt4",
"https://estore.ua/ua/iphone-17-pro-max-512gb-deep-blue-mfyu4/?q=mfyu4",
"https://estore.ua/ua/iphone-17-pro-max-512gb-silver-mfyq4/?q=mfyq4",
 
"https://estore.ua/ua/iphone-17-pro-max-1tb-cosmic-orange-mfyw/?q=mfyw",
"https://estore.ua/ua/iphone-17-pro-max-1tb-deep-blue-mfyx4/?q=mfyx4",
"https://estore.ua/ua/iphone-17-pro-max-1tb-silver-mfyv4/?q=mfyv4",
 
"https://estore.ua/ua/iphone-17-pro-max-2tb-cosmic-orange/?q=mg004",
"https://estore.ua/ua/iphone-17-pro-max-2tb-deep-blue/?q=mg014",
"https://estore.ua/ua/iphone-17-pro-max-2tb-silver/?q=mfyy4",
]
const arrLinkYua17Pro = [
  "https://y.ua/apple-iphone-17-pro-256gb-cosmic-orange/p1441914/",
"https://y.ua/apple-iphone-17-pro-256gb-deep-blue/p1441913/",
"https://y.ua/apple-iphone-17-pro-256gb-silver/p1441915/",
 
"https://y.ua/apple-iphone-17-pro-512gb-cosmic-orange/p1441917/",
"https://y.ua/apple-iphone-17-pro-512gb-deep-blue/p1441916/",
"https://y.ua/apple-iphone-17-pro-512gb-silver/p1441918/",
 
"https://y.ua/apple-iphone-17-pro-1tb-cosmic-orange/p1441920/",
"https://y.ua/apple-iphone-17-pro-1tb-deep-blue/p1441919/",
"https://y.ua/apple-iphone-17-pro-1tb-silver/p1441921/",
 
"https://y.ua/apple-iphone-17-pro-max-256gb-cosmic-orange/p1441923/",
"https://y.ua/apple-iphone-17-pro-max-256gb-deep-blue/p1441922/",
"https://y.ua/apple-iphone-17-pro-max-256gb-silver/p1441924/",
 
"https://y.ua/apple-iphone-17-pro-max-512gb-cosmic-orange/p1441926/",
"https://y.ua/apple-iphone-17-pro-max-512gb-deep-blue/p1441925/",
"https://y.ua/apple-iphone-17-pro-max-512gb-silver/p1441927/",
 
"https://y.ua/apple-iphone-17-pro-max-1tb-cosmic-orange/p1441929/",
"https://y.ua/apple-iphone-17-pro-max-1tb-deep-blue/p1441928/",
"https://y.ua/apple-iphone-17-pro-max-1tb-silver/p1441930/",
 
"https://y.ua/apple-iphone-17-pro-max-2tb-cosmic-orange/p1441932/",
"https://y.ua/apple-iphone-17-pro-max-2tb-deep-blue/p1441931/",
"https://y.ua/apple-iphone-17-pro-max-2tb-silver/p1441933/",
]
const arrLinkYabloki17Pro = [
  "https://yabloki.ua/iphone-17-pro-256-gb-cosmic-orange.html",
"https://yabloki.ua/iphone-17-pro-256-gb-deep-blue.html",
"https://yabloki.ua/iphone-17-pro-256-gb-white-silver.html",
 
"https://yabloki.ua/iphone-17-pro-512-gb-orange-now.html",
"https://yabloki.ua/iphone-17-pro-512-gb-deep-blue.html",
"https://yabloki.ua/iphone-17-pro-512-gb-silver.html",
 
"https://yabloki.ua/iphone-17-pro-1-tb-cosmic-orange.html",
"https://yabloki.ua/iphone-17-pro-1-tb-navy-now.html",
"https://yabloki.ua/iphone-17-pro-1-tb-silver.html",
 
"https://yabloki.ua/iphone-17-pro-max-256-gb-orange.html",
"https://yabloki.ua/iphone-17-pro-max-256-gb-deep-blue.html",
"https://yabloki.ua/iphone-17-pro-max-256-gb-silver.html",
 
"https://yabloki.ua/iphone-17-pro-max-512-gb-orange.html",
"https://yabloki.ua/iphone-17-pro-max-512-gb-deep-blue.html",
"https://yabloki.ua/iphone-17-pro-max-512-gb-silver.html",
 
"https://yabloki.ua/iphone-17-pro-max-1-tb-orange.html",
"https://yabloki.ua/iphone-17-pro-max-1-tb-deep-blue.html",
"https://yabloki.ua/iphone-17-pro-max-1-tb-silver.html",
 
"https://yabloki.ua/iphone-17-pro-max-2-tb-orange.html",
"https://yabloki.ua/iphone-17-pro-max-2-tb-deep-blue.html",
"https://yabloki.ua/iphone-17-pro-max-2-tb-silver.html",
]
const arrLinkCts17ProIPH = [
  "https://www.ctrs.com.ua/smartfony/iphone-17-pro-256gb-cosmic-orange-apple-775206.html",
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-256gb-deep-blue-apple-775207.html",
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-256gb-silver-apple-775202.html",
 
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-512gb-cosmic-orange-apple-775208.html",
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-512gb-deep-blue-apple-775210.html",
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-512gb-silver-apple-775213.html",
 
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-1tb-cosmic-orange-apple-775216.html",
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-1tb-deep-blue-apple-775217.html",
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-1tb-silver-apple-775219.html",
 
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-max-256gb-cosmic-orange-apple-775224.html",
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-max-256gb-deep-blue-apple-775226.html",
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-max-256gb-silver-apple-775229.html",
 
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-max-512gb-cosmic-orange-apple-775233.html",
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-max-512gb-deep-blue-apple-775235.html",
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-max-512gb-silver-apple-775237.html",
 
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-max-1tb-cosmic-orange-apple-775239.html",
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-max-1tb-deep-blue-apple-775240.html",
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-max-1tb-silver-apple-775241.html",
 
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-max-2tb-cosmic-orange-apple-775242.html",
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-max-2tb-deep-blue-apple-775243.html",
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-max-2tb-silver-apple-775244.html",
]
const arrLinkCts17ProIPHinfo = [
  "https://www.ctrs.com.ua/smartfony/iphone-17-pro-256gb-cosmic-orange-apple-775206.html",
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-256gb-deep-blue-apple-775207.html",
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-256gb-silver-apple-775202.html",
 
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-512gb-cosmic-orange-apple-775208.html",
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-512gb-deep-blue-apple-775210.html",
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-512gb-silver-apple-775213.html",
 
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-1tb-cosmic-orange-apple-775216.html",
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-1tb-deep-blue-apple-775217.html",
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-1tb-silver-apple-775219.html",
 
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-max-256gb-cosmic-orange-apple-775224.html",
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-max-256gb-deep-blue-apple-775226.html",
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-max-256gb-silver-apple-775229.html",
 
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-max-512gb-cosmic-orange-apple-775233.html",
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-max-512gb-deep-blue-apple-775235.html",
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-max-512gb-silver-apple-775237.html",
 
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-max-1tb-cosmic-orange-apple-775239.html",
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-max-1tb-deep-blue-apple-775240.html",
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-max-1tb-silver-apple-775241.html",
 
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-max-2tb-cosmic-orange-apple-775242.html",
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-max-2tb-deep-blue-apple-775243.html",
"https://www.ctrs.com.ua/smartfony/iphone-17-pro-max-2tb-silver-apple-775244.html",
]
const arrLinkSkay17ProIPH = [

"https://skay.ua/iphone-17-pro/80210-apple-iphone-17-pro-256gb-cosmic-orange-mg8h4.html",
"https://skay.ua/iphone-17-pro/80208-apple-iphone-17-pro-256gb-deep-blue-mg8j4.html",
"https://skay.ua/iphone-17-pro/80209-apple-iphone-17-pro-256gb-silver-mg8g4.html",
 
"https://skay.ua/iphone-17-pro/80243-apple-iphone-17-pro-512gb-cosmic-orange-mg8m4.html",
"https://skay.ua/iphone-17-pro/80241-apple-iphone-17-pro-512gb-deep-blue-mg8n4.html?search_query=MG8N4&fast_search=fs",
"https://skay.ua/iphone-17-pro/80242-apple-iphone-17-pro-512gb-silver-mg8k4.html",
 
"https://skay.ua/iphone-17-pro/80246-apple-iphone-17-pro-1tb-cosmic-orange-mg8q4.html",
"https://skay.ua/iphone-17-pro/80244-apple-iphone-17-pro-1tb-deep-blue-mg8r4.html",
"https://skay.ua/iphone-17-pro/80245-apple-iphone-17-pro-1tb-silver-mg8p4.html",
 
"https://skay.ua/iphone-17-pro-max/80217-apple-iphone-17-pro-max-256gb-cosmic-orange-mfyn4.html?search_query=MFYN4&fast_search=fs",
"https://skay.ua/iphone-17-pro-max/80215-apple-iphone-17-pro-max-256gb-deep-blue-mfyp4.html",
"https://skay.ua/iphone-17-pro-max/80216-apple-iphone-17-pro-max-256gb-silver.html",
 
"https://skay.ua/iphone-17-pro-max/80249-apple-iphone-17-pro-max-512gb-cosmic-orange-mfyt4.html",
"https://skay.ua/iphone-17-pro-max/80247-apple-iphone-17-pro-max-512gb-deep-blue-mfyu4.html",
"https://skay.ua/iphone-17-pro-max/80248-apple-iphone-17-pro-max-512gb-silver-mfyq4.html",
 
"https://skay.ua/iphone-17-pro-max/80252-apple-iphone-17-pro-max-1tb-cosmic-orange-mfyw.html",
"https://skay.ua/iphone-17-pro-max/80250-apple-iphone-17-pro-max-1tb-deep-blue-mfyx4.html",
"https://skay.ua/iphone-17-pro-max/80251-apple-iphone-17-pro-max-1tb-silver-mfyv4.html",
 
"https://skay.ua/iphone-17-pro-max/80255-apple-iphone-17-pro-max-2tb-cosmic-orange-mg004.html",
"https://skay.ua/iphone-17-pro-max/80253-apple-iphone-17-pro-max-2tb-deep-blue-mg014.html",
"https://skay.ua/iphone-17-pro-max/80254-apple-iphone-17-pro-max-2tb-silver-mfyy4.html",
]


const arrLinkJabko17ProIPHeSim = [
  "https://jabko.ua/product/apple-iphone-17-pro-256gb-orange-e-sim",
"https://jabko.ua/product/apple-iphone-17-pro-256gb-dark-blue-e-sim",
"https://jabko.ua/product/apple-iphone-17-pro-256gb-gray-e-sim",

 
"https://jabko.ua/product/apple-iphone-17-pro-512gb-orange-e-sim",
"https://jabko.ua/product/apple-iphone-17-pro-512gb-dark-blue-e-sim",
"https://jabko.ua/product/apple-iphone-17-pro-512gb-gray-e-sim",
 
"https://jabko.ua/product/apple-iphone-17-pro-1tb-orange-e-sim",
"https://jabko.ua/product/apple-iphone-17-pro-1tb-dark-blue-e-sim",
"https://jabko.ua/product/apple-iphone-17-pro-1tb-gray-e-sim",

 
"https://jabko.ua/product/apple-iphone-17-pro-max-256gb-orange-e-sim",
"https://jabko.ua/product/apple-iphone-17-pro-max-256gb-dark-blue-e-sim",
"https://jabko.ua/product/apple-iphone-17-pro-max-256gb-gray-e-sim",

"https://jabko.ua/product/apple-iphone-17-pro-max-512gb-orange-e-sim",
"https://jabko.ua/product/apple-iphone-17-pro-max-512gb-dark-blue-e-sim",
"https://jabko.ua/product/apple-iphone-17-pro-max-512gb-gray-e-sim",
"https://jabko.ua/product/apple-iphone-17-pro-max-1tb-orange-e-sim",
"https://jabko.ua/product/apple-iphone-17-pro-max-1tb-dark-blue-e-sim",
"https://jabko.ua/product/apple-iphone-17-pro-max-1tb-gray-e-sim",

"https://jabko.ua/product/apple-iphone-17-pro-max-2tb-orange-e-sim",
"https://jabko.ua/product/apple-iphone-17-pro-max-2tb-dark-blue-e-sim",
"https://jabko.ua/product/apple-iphone-17-pro-max-2tb-gray-e-sim",



"https://jabko.ua/product/apple-iphone-17-air-256gb-black-e-sim",
"https://jabko.ua/product/apple-iphone-17-air-256gb-light-blue-e-sim",
"https://jabko.ua/product/apple-iphone-17-air-256gb-white-e-sim",
"https://jabko.ua/product/apple-iphone-17-air-256gb-light-gold-e-sim",

"https://jabko.ua/product/apple-iphone-17-air-512gb-black-e-sim",
"https://jabko.ua/product/apple-iphone-17-air-512gb-light-blue-e-sim",
"https://jabko.ua/product/apple-iphone-17-air-512gb-white-e-sim",
"https://jabko.ua/product/apple-iphone-17-air-512gb-light-gold-e-sim",

"https://jabko.ua/product/apple-iphone-17-air-128gb-black-e-sim",
"https://jabko.ua/product/apple-iphone-17-air-128gb-light-blue-e-sim",
"https://jabko.ua/product/apple-iphone-17-air-128gb-white-e-sim",
"https://jabko.ua/product/apple-iphone-17-air-128gb-light-gold-e-sim",
]
const arrLinkMobilePlanet17ProIPHeSim = [
  "https://mobileplanet.ua/apple-iphone-17-pro-256gb-esim-cosmic-orange-mg7l4-354253",
"https://mobileplanet.ua/apple-iphone-17-pro-256gb-esim-deep-blue-mg7m4-354254",
"https://mobileplanet.ua/apple-iphone-17-pro-256gb-esim-silver-mg7k4-354255",

"https://mobileplanet.ua/apple-iphone-17-pro-512gb-esim-cosmic-orange-mg7p4-354262",
"https://mobileplanet.ua/apple-iphone-17-pro-512gb-esim-deep-blue-mg7q4-354263",
"https://mobileplanet.ua/apple-iphone-17-pro-512gb-esim-silver-mg7n4-354264",

"https://mobileplanet.ua/apple-iphone-17-pro-1tb-esim-cosmic-orange-mg7t4-354244",
"https://mobileplanet.ua/apple-iphone-17-pro-1tb-esim-deep-blue-mg7u4-354245",
"https://mobileplanet.ua/apple-iphone-17-pro-1tb-esim-silver-mg7r4-354246",

"https://mobileplanet.ua/apple-iphone-17-pro-max-256gb-esim-cosmic-orange-m-354280",
"https://mobileplanet.ua/apple-iphone-17-pro-max-256gb-esim-deep-blue-mfxj4-354281",
"https://mobileplanet.ua/apple-iphone-17-pro-max-256gb-esim-silver-mfxg4-354282",

"https://mobileplanet.ua/apple-iphone-17-pro-max-512gb-esim-cosmic-orange-m-354298",
"https://mobileplanet.ua/apple-iphone-17-pro-max-512gb-esim-deep-blue-mfxm4-354299",
"https://mobileplanet.ua/apple-iphone-17-pro-max-512gb-esim-silver-mfxk4-354300",

"https://mobileplanet.ua/apple-iphone-17-pro-max-1tb-esim-cosmic-orange-mfx-354271",
"https://mobileplanet.ua/apple-iphone-17-pro-max-1tb-esim-deep-blue-mfxq4-354272",
"https://mobileplanet.ua/apple-iphone-17-pro-max-1tb-esim-silver-mfxn4-354273",

"https://mobileplanet.ua/apple-iphone-17-pro-max-2tb-esim-cosmic-orange-mfx-354289",
"https://mobileplanet.ua/apple-iphone-17-pro-max-2tb-esim-deep-blue-mfxu4-354290",
"https://mobileplanet.ua/apple-iphone-17-pro-max-2tb-esim-silver-mfxr4-354291",

"https://mobileplanet.ua/apple-iphone-air-256gb-space-black-mg314-354323",
"https://mobileplanet.ua/apple-iphone-air-256gb-sky-blue-mg364-354320",
"https://mobileplanet.ua/apple-iphone-air-256gb-cloud-white-mg334-354314",
"https://mobileplanet.ua/apple-iphone-air-256gb-light-gold-mg344-354317",

"https://mobileplanet.ua/apple-iphone-air-512gb-space-black-mg374-354335",
"https://mobileplanet.ua/apple-iphone-air-512gb-sky-blue-mg3c4-354332",
"https://mobileplanet.ua/apple-iphone-air-512gb-cloud-white-mg394-354326",
"https://mobileplanet.ua/apple-iphone-air-512gb-light-gold-mg3a4-354329",

"https://mobileplanet.ua/apple-iphone-air-1tb-space-black-mg3d4-354311",
"https://mobileplanet.ua/apple-iphone-air-1tb-sky-blue-mg3g4-354308",
"https://mobileplanet.ua/apple-iphone-air-1tb-cloud-white-mg3e4-354302",
"https://mobileplanet.ua/apple-iphone-air-1tb-light-gold-mg3f4-354305",
]
const arrLinkGro17ProIPHeSim = [
  "https://grokholsky.com/product/apple/iphone/iphone-17-pro/smartfon-apple-iphone-17-pro-256gb-esim-cosmic-orange-mg7l4/",
"https://grokholsky.com/product/apple/iphone/iphone-17-pro/smartfon-apple-iphone-17-pro-256gb-esim-deep-blue-mg7m4/",
"https://grokholsky.com/product/apple/iphone/iphone-17-pro/smartfon-apple-iphone-17-pro-256gb-esim-silver-mg7k4/",

"https://grokholsky.com/product/apple/iphone/iphone-17-pro/smartfon-apple-iphone-17-pro-512gb-esim-cosmic-orange-mg7p4/",
"https://grokholsky.com/product/apple/iphone/iphone-17-pro/smartfon-apple-iphone-17-pro-512gb-esim-deep-blue-mg7q4/",
"https://grokholsky.com/product/apple/iphone/iphone-17-pro/smartfon-apple-iphone-17-pro-512gb-esim-silver-mg7n4/",

"https://grokholsky.com/product/apple/iphone/iphone-17-pro/smartfon-apple-iphone-17-pro-1tb-esim-cosmic-orange-mg7t4/",
"https://grokholsky.com/product/apple/iphone/iphone-17-pro/smartfon-apple-iphone-17-pro-1tb-esim-deep-blue-mg7u4/",
"https://grokholsky.com/product/apple/iphone/iphone-17-pro/smartfon-apple-iphone-17-pro-1tb-esim-silver-mg7r4/",

"https://grokholsky.com/product/apple/iphone/iphone-17-pro-max/smartfon-apple-iphone-17-pro-max-256gb-esim-cosmic-orange-mfxh4/",
"https://grokholsky.com/product/apple/iphone/iphone-17-pro-max/smartfon-apple-iphone-17-pro-max-256gb-esim-deep-blue-mfxj4/",
"https://grokholsky.com/product/apple/iphone/iphone-17-pro-max/smartfon-apple-iphone-17-pro-max-256gb-esim-silver-mfxg4/",

"https://grokholsky.com/product/apple/iphone/iphone-17-pro-max/smartfon-apple-iphone-17-pro-max-512gb-esim-cosmic-orange-mfxl4/",
"https://grokholsky.com/product/apple/iphone/iphone-17-pro-max/smartfon-apple-iphone-17-pro-max-512gb-esim-deep-blue-mfxm4/",
"https://grokholsky.com/product/apple/iphone/iphone-17-pro-max/smartfon-apple-iphone-17-pro-max-512gb-esim-silver-mfxk4/",

"https://grokholsky.com/product/apple/iphone/iphone-17-pro-max/smartfon-apple-iphone-17-pro-max-1tb-esim-cosmic-orange-mfxp4/",
"https://grokholsky.com/product/apple/iphone/iphone-17-pro-max/smartfon-apple-iphone-17-pro-max-1tb-esim-deep-blue-mfxq4/",
"https://grokholsky.com/product/apple/iphone/iphone-17-pro-max/smartfon-apple-iphone-17-pro-max-1tb-esim-silver-mfxn4/",

"https://grokholsky.com/product/apple/iphone/iphone-17-pro-max/smartfon-apple-iphone-17-pro-max-2tb-esim-cosmic-orange-mfxt4/",
"https://grokholsky.com/product/apple/iphone/iphone-17-pro-max/smartfon-apple-iphone-17-pro-max-2tb-esim-deep-blue-mfxu4/",
"https://grokholsky.com/product/apple/iphone/iphone-17-pro-max/smartfon-apple-iphone-17-pro-max-2tb-esim-silver-mfxr4/",

"https://grokholsky.com/product/apple/iphone/iphone-17-air/smartfon-apple-iphone-air-256gb-space-black-mg314-mg184-mg2l4/",
"https://grokholsky.com/product/apple/iphone/iphone-17-air/smartfon-apple-iphone-air-256gb-sky-blue-mg364-mg1d4-mg2p4/",
"https://grokholsky.com/product/apple/iphone/iphone-17-air/smartfon-apple-iphone-air-256gb-cloud-white-mg334-mg194-mg2m4/",
"https://grokholsky.com/product/apple/iphone/iphone-17-air/smartfon-apple-iphone-air-256gb-light-gold-mg344-mg1a4-mg2n4/",

"https://grokholsky.com/product/apple/iphone/iphone-17-air/smartfon-apple-iphone-air-512gb-space-black-mg374-mg1e4-mg2q4/",
"https://grokholsky.com/product/apple/iphone/iphone-17-air/smartfon-apple-iphone-air-512gb-sky-blue-mg3c4-mg1j4-mg2v4/",
"https://grokholsky.com/product/apple/iphone/iphone-17-air/smartfon-apple-iphone-air-512gb-cloud-white-mg394-mg1g4-mg2t4/",
"https://grokholsky.com/product/apple/iphone/iphone-17-air/smartfon-apple-iphone-air-512gb-light-gold-mg3a4-mg1h4-mg2u4/",

"https://grokholsky.com/product/apple/iphone/iphone-17-air/smartfon-apple-iphone-air-1tb-space-black-mg3d4-mg1l4-mg2w4/",
"https://grokholsky.com/product/apple/iphone/iphone-17-air/smartfon-apple-iphone-air-1tb-sky-blue-mg3g4-mg1q4-mg304/",
"https://grokholsky.com/product/apple/iphone/iphone-17-air/smartfon-apple-iphone-air-1tb-cloud-white-mg3e4-mg1n4-mg2x4/",
"https://grokholsky.com/product/apple/iphone/iphone-17-air/smartfon-apple-iphone-air-1tb-light-gold-mg3f4-mg1p4-mg2y4/",

]
const arrLinkEstore17ProIPHeSim = [
"https://estore.ua/ua/iphone-17-pro-256gb-cosmic-orange-esim-mg7l4/?q=mg7l4",
"https://estore.ua/ua/iphone-17-pro-256gb-deep-blue-esim-mg7m4/?q=mg7m4",
"https://estore.ua/ua/iphone-17-pro-256gb-silver-esim-mg7k4/?q=mg7k4",


"https://estore.ua/ua/iphone-17-pro-512gb-cosmic-orange-esim-mg7p4/?q=mg7p4",
"https://estore.ua/ua/iphone-17-pro-512gb-deep-blue-esim-mg7q4/?q=mg7q4",
"https://estore.ua/ua/iphone-17-pro-512gb-silver-esim-mg7n4/?q=mg7n4",

"https://estore.ua/ua/iphone-17-pro-1tb-cosmic-orange-esim-mg7t4/?q=mg7t4",
"https://estore.ua/ua/iphone-17-pro-1tb-deep-blue-esim-mg7u4/?q=mg7u4",
"https://estore.ua/ua/iphone-17-pro-1tb-silver-esim-mg7r4/?q=mg7r4",

"https://estore.ua/ua/iphone-17-pro-max-256gb-cosmic-orange-esim-mfxh4/?q=mfxh4",
"https://estore.ua/ua/iphone-17-pro-max-256gb-deep-blue-esim-mfxj4/?q=mfxj4",
"https://estore.ua/ua/iphone-17-pro-max-512gb-silver-esim-mfxk4-48819/?q=mfxg4",

"https://estore.ua/ua/iphone-17-pro-max-512gb-cosmic-orange-esim-mfxl4/?q=mfxl4",
"https://estore.ua/ua/iphone-17-pro-max-512gb-deep-blue-esim-mfxm4/?q=mfxm4",
"https://estore.ua/ua/iphone-17-pro-max-512gb-silver-esim-mfxk4/?q=mfxk4",

"https://estore.ua/ua/iphone-17-pro-max-1tb-cosmic-orange-esim-mfxp4/?q=mfxp4",
"https://estore.ua/ua/iphone-17-pro-max-1tb-deep-blue-esim-mfxq4/?q=mfxq4",
"https://estore.ua/ua/iphone-17-pro-max-1tb-silver-esim-mfxn4/?q=mfxn4",

"https://estore.ua/ua/iphone-17-pro-max-2tb-cosmic-orange-esim-mfxt4/?q=mfxt4",
"https://estore.ua/ua/iphone-17-pro-max-2tb-deep-blue-esim-mfxu4/?q=mfxu4",
"https://estore.ua/ua/iphone-17-pro-max-2tb-silver-esim-mfxr4/?q=mfxr4",

"https://estore.ua/ua/iphone-17-air-256gb-space-black-mg2l4/?q=mg2l4",
"https://estore.ua/ua/iphone-17-air-256gb-sky-blue-mg2p4/?q=mg2p4",
"https://estore.ua/ua/iphone-17-air-256gb-cloud-white-mg2m4/?q=mg2m4",
"https://estore.ua/ua/iphone-17-air-256gb-light-gold-mg2n4/?q=mg2n4",

"https://estore.ua/ua/iphone-17-air-512gb-space-black-mg2q4/?q=mg2q4",
"https://estore.ua/ua/iphone-17-air-512gb-sky-blue-mg2v4/?q=mg2v4",
"https://estore.ua/ua/iphone-17-air-512gb-cloud-white-mg2t4/?q=mg2t4",
"https://estore.ua/ua/iphone-17-air-512gb-light-gold-mg2u4/?q=mg2u4",

"https://estore.ua/ua/iphone-17-air-1tb-space-black-mg2w4/?q=mg2w4",
"https://estore.ua/ua/iphone-17-air-1tb-sky-blue-mg304/?q=mg304",
"https://estore.ua/ua/iphone-17-air-1tb-cloud-white-mg2x4/?q=mg2x4",
"https://estore.ua/ua/iphone-17-air-1tb-light-gold-mg2y4/?q=mg2y4",
]

const arrLinkJabko17IPH = [
  "https://jabko.ua/product/apple-iphone-17-256gb-black",
"https://jabko.ua/product/apple-iphone-17-256gb-white",
"https://jabko.ua/product/apple-iphone-17-256gb-light-blue",
"https://jabko.ua/product/apple-iphone-17-256gb-green",
"https://jabko.ua/product/apple-iphone-17-256gb-purple",
 
"https://jabko.ua/product/apple-iphone-17-512gb-black",
"https://jabko.ua/product/apple-iphone-17-512gb-white",
"https://jabko.ua/product/apple-iphone-17-512gb-light-blue",
"https://jabko.ua/product/apple-iphone-17-512gb-green",
"https://jabko.ua/product/apple-iphone-17-512gb-purple",

 
"https://jabko.ua/product/apple-iphone-17-256gb-black-e-sim",
"https://jabko.ua/product/apple-iphone-17-256gb-white-e-sim",
"https://jabko.ua/product/apple-iphone-17-256gb-light-blue-e-sim",
"https://jabko.ua/product/apple-iphone-17-256gb-green-e-sim",
"https://jabko.ua/product/apple-iphone-17-256gb-purple-e-sim",

 
"https://jabko.ua/product/apple-iphone-17-512gb-black-e-sim",
"https://jabko.ua/product/apple-iphone-17-512gb-white-e-sim",
"https://jabko.ua/product/apple-iphone-17-512gb-light-blue-e-sim",
"https://jabko.ua/product/apple-iphone-17-512gb-green-e-sim",
"https://jabko.ua/product/apple-iphone-17-512gb-purple-e-sim",
]
const arrLinkMobilePlanet17IPH = [
  "https://mobileplanet.ua/apple-iphone-17-256gb-black-mg6j4-354209",
"https://mobileplanet.ua/apple-iphone-17-256gb-white-mg6k4-354223",
"https://mobileplanet.ua/apple-iphone-17-256gb-mist-blue-mg6l4-354221",
"https://mobileplanet.ua/apple-iphone-17-256gb-sage-mg6n4-354222",
"https://mobileplanet.ua/apple-iphone-17-256gb-lavender-mg6m4-354220",

"https://mobileplanet.ua/apple-iphone-17-512gb-black-mg6p4-354224",
"https://www.google.com/",
"https://mobileplanet.ua/apple-iphone-17-512gb-mist-blue-mg6t4-354236",
"https://www.google.com/",
"https://www.google.com/",

"https://mobileplanet.ua/apple-iphone-17-256gb-esim-black-mg464-354215",
"https://mobileplanet.ua/apple-iphone-17-256gb-esim-white-mg474-354219",
"https://mobileplanet.ua/apple-iphone-17-256gb-esim-mist-blue-mg484-354217",
"https://mobileplanet.ua/apple-iphone-17-256gb-esim-sage-mg4a4-354218",
"https://mobileplanet.ua/apple-iphone-17-256gb-esim-lavender-mg494-354216",

"https://www.google.com/",
"https://www.google.com/",
"https://www.google.com/",
"https://www.google.com/",
"https://www.google.com/"

]
const arrLinkGro17IPH = [
  "https://grokholsky.com/ua/product/apple/iphone/iphone-17/smartfon-apple-iphone-17-256gb-black-mg6j4/",
"https://grokholsky.com/ua/product/apple/iphone/iphone-17/smartfon-apple-iphone-17-256gb-white-mg6k4/",
"https://grokholsky.com/ua/product/apple/iphone/iphone-17/smartfon-apple-iphone-17-256gb-mist-blue-mg6l4/",
"https://grokholsky.com/ua/product/apple/iphone/iphone-17/smartfon-apple-iphone-17-256gb-sage-mg6n4/",
"https://grokholsky.com/ua/product/apple/iphone/iphone-17/smartfon-apple-iphone-17-256gb-lavender-mg6m4/",

"https://grokholsky.com/ua/product/apple/iphone/iphone-17/smartfon-apple-iphone-17-512gb-black-mg6p4/",
"https://grokholsky.com/ua/product/apple/iphone/iphone-17/smartfon-apple-iphone-17-512gb-white-mg6q4/",
"https://grokholsky.com/ua/product/apple/iphone/iphone-17/smartfon-apple-iphone-17-512gb-mist-blue-mg6t4/",
"https://grokholsky.com/ua/product/apple/iphone/iphone-17/smartfon-apple-iphone-17-512gb-sage-mg6v4/",
"https://grokholsky.com/ua/product/apple/iphone/iphone-17/smartfon-apple-iphone-17-512gb-lavender-mg6u4/",

"https://grokholsky.com/ua/product/apple/iphone/iphone-17/smartfon-apple-iphone-17-256gb-esim-black-mg464/",
"https://grokholsky.com/ua/product/apple/iphone/iphone-17/smartfon-apple-iphone-17-256gb-esim-white-mg474/",
"https://grokholsky.com/ua/product/apple/iphone/iphone-17/smartfon-apple-iphone-17-256gb-esim-mist-blue-mg484/",
"https://grokholsky.com/ua/product/apple/iphone/iphone-17/smartfon-apple-iphone-17-256gb-esim-sage-mg4a4/",
"https://grokholsky.com/ua/product/apple/iphone/iphone-17/smartfon-apple-iphone-17-256gb-esim-lavender-mg494/",

"https://grokholsky.com/ua/product/apple/iphone/iphone-17/smartfon-apple-iphone-17-512gb-esim-black-mg4e4/",
"https://grokholsky.com/ua/product/apple/iphone/iphone-17/smartfon-apple-iphone-17-512gb-esim-white-mg4f4/",
"https://grokholsky.com/ua/product/apple/iphone/iphone-17/smartfon-apple-iphone-17-512gb-esim-mist-blue-mg4h4/",
"https://grokholsky.com/ua/product/apple/iphone/iphone-17/smartfon-apple-iphone-17-512gb-esim-sage-mg4q4/",
"https://grokholsky.com/ua/product/apple/iphone/iphone-17/smartfon-apple-iphone-17-512gb-esim-lavender-mg4j4/"
]

const arrLinkEstore17IPH = [
"https://estore.ua/ua/iphone-17-256gb-black-mg6j4/?q=mg6j4",
"https://estore.ua/ua/iphone-17-256gb-white/?q=mg6k4",
"https://estore.ua/ua/iphone-17-256gb-mist-blue-mg6l4/?q=mg6l4",
"https://estore.ua/ua/iphone-17-256gb-sage-mg6n4/?q=mg6n4",
"https://estore.ua/ua/iphone-17-256gb-lavender-mg6m4/?q=mg6m4",
 
"https://estore.ua/ua/iphone-17-512gb-black-mg6p4/?q=mg6p4",
"https://estore.ua/ua/iphone-17-512gb-white-mg6q4/?q=mg6q4",
"https://estore.ua/ua/iphone-17-512gb-mist-blue-mg6t4/?q=mg6t4",
"https://estore.ua/ua/iphone-17-512gb-sage-mg6v4/?q=mg6v4",
"https://estore.ua/ua/iphone-17-512gb-lavender-mg6u4/?q=mg6u4",

"https://estore.ua/ua/iphone-17-256gb-black-esim-mg464/?q=mg464",
"https://estore.ua/ua/iphone-17-256gb-white-esim-mg474/?q=mg474",
"https://estore.ua/ua/iphone-17-256gb-mist-blue-esim-mg484/?q=mg484",
"https://estore.ua/ua/iphone-17-256gb-sage-esim-mg4a4/?q=mg4a4",
"https://estore.ua/ua/iphone-17-256gb-lavender-esim-mg494/?q=mg494",

"https://estore.ua/ua/iphone-17-512gb-black-esim-mg4e4/?q=mg4e4",
"https://estore.ua/ua/iphone-17-512gb-white-esim-mg4f4/?q=mg4f4",
"https://estore.ua/ua/iphone-17-512gb-mist-blue-esim-mg4h4/?q=mg4h4",
"https://estore.ua/ua/iphone-17-512gb-sage-esim-mg4q4/?q=mg4q4",
"https://estore.ua/ua/iphone-17-512gb-lavender-esim-mg4j4/",
]
const arrLinkYabloki17 = [
"https://yabloki.ua/iphone-17-256-gb-black-now.html",
"https://yabloki.ua/iphone-17-256gb-white-now.html",
"https://yabloki.ua/iphone-17-256-gb-purple-lavender-now.html",
"https://yabloki.ua/iphone-17-256-gb-green-now.html",
"https://yabloki.ua/iphone-17-256-gb-purple-now.html",

"https://yabloki.ua/iphone-17-512-gb-black-now.html",
"https://yabloki.ua/iphone-17-512gb-white-now.html",
"https://yabloki.ua/iphone-17-512-gb-purple-lavender-now.html",
"https://yabloki.ua/iphone-17-512-gb-green-now.html",
"https://yabloki.ua/iphone-17-512-gb-purple-now.html",

"https://www.google.com/",
"https://www.google.com/",
"https://www.google.com/",
"https://www.google.com/",
"https://www.google.com/",

"https://www.google.com/",
"https://www.google.com/",
"https://www.google.com/",
"https://www.google.com/",
"https://www.google.com/",
]




async function f() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
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
  
  for (let i = 0; i < arrLinkJabko16IPH.length; i += 1) {
  await page.goto(arrLinkJabko16IPH[i], { waitUntil: "domcontentloaded" });

  let arr8 = await page.evaluate(() => {
    const normalize = (text) =>
      text
        ?.replace(/\n+/g, " ")   // убираем переносы строк
        .replace(/\s+/g, " ")    // убираем лишние пробелы
        .trim();

    const title = normalize(document.querySelector("h1")?.innerText);
    const price = normalize(document.querySelector(".price-new__uah")?.innerText);

    return price ? `${title} J: ${price}` : title;
  });

  console.log(arr8);
}
  for (let link of arrLinkIstore16IPH) {
  try {
    await page.goto(link, { waitUntil: "domcontentloaded" });

    const result = await page.evaluate(() => {
      const title =
        document.querySelector("h1")?.innerText?.trim() || "NO TITLE";

      const price =
        document.querySelector(".product_price")?.innerText?.trim();

      return price ? `${title} I: ${price}` : `${title} — нет цены`;
    });

    console.log(result);
  } catch (err) {
    console.log("❌ Ошибка страницы:", link);
    console.log(err.message);
  }
}
  for (let link of arrLinkMobilePlanet16IPH) {
  await page.goto(link, { timeout: 0 });

  let result = await page.evaluate(() => {
    const h1 = document.querySelector("h1");
    const price = document.querySelector(".price-value");

    if (!h1 && !price) return "❌ MP: страница без товара";

    return `${h1?.innerText || "Товар"} MP: ${price?.innerText || "нет цены"}`;
  });

  console.log(result);
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
    const h1 = document.querySelector("h1");
    const price = document.querySelector(".regular-price");

    if (h1) {
      const text2 = h1.innerText.trim();
      if (price) {
        return `${text2} Estore: ${price.innerText.trim()}`;
      } else {
        return text2;
      }
    } else {
      return "⚠️ Нет H1";
    }
  });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkCts16IPH.length; i++) {
  const link = arrLinkCts16IPH[i];

  try {
    await page.goto(link, {
      waitUntil: "domcontentloaded",
      timeout: 15000,
    });

    const result = await page.evaluate(() => {
      const clean = (t) =>
        typeof t === "string"
          ? t.replace(/\n+/g, " ").replace(/\s+/g, " ").trim()
          : "";

      const title = clean(document.querySelector("h1")?.innerText);
      const price = clean(document.querySelector(".price")?.innerText);

      // если это не товар (google, редирект, пустая страница)
      if (!title || title.length < 3) {
        return "❌ CRS: страница без товара";
      }

      return price ? `${title} CRS: ${price}` : `${title} CRS: нет цены`;
    });

    // печатаем ТОЛЬКО если строка нормальная
    if (result && result.trim()) {
      console.log(result);
    }

  } catch (err) {
    console.log(`❌ CRS: не открылся ${link}`);
  }
}
  for (let i = 0; i < arrLinkiPeople16.length; i++) {
  const link = arrLinkiPeople16[i];

  try {
    const response = await page.goto(link, {
      waitUntil: "domcontentloaded",
      timeout: 20000,
    });

    if (!response || !response.ok()) {
      console.log(`❌ iPeople16: не открылся ${link}`);
      continue;
    }

    await page.waitForSelector("body", { timeout: 5000 });

    const result = await page.evaluate(() => {
      const clean = (t) =>
        typeof t === "string"
          ? t.replace(/\n+/g, " ").replace(/\s+/g, " ").trim()
          : "";

      const title = clean(document.querySelector("h1")?.innerText);
      const usd = clean(document.querySelector(".usd")?.innerText);

      if (!title) return "❌ iPeople16: страница без товара";

      return usd
        ? `${title} iPeople: ${usd}`
        : `${title} iPeople: нет цены`;
    });

    console.log(result);
    await new Promise(r => setTimeout(r, 600));

  } catch (err) {
    console.log(`❌ iPeople16: не открылся ${link}`);
  }
}

  for (let i = 0; i < arrLinkYua16.length; i += 1) {
    await page.goto(arrLinkYua16[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price .regular") != null) {
        return (
          text2 + "Yua: " + document.querySelector(".price .regular").innerText
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

  
  for (let i = 0; i < arrLinkJabko16eIPH.length; i += 1) {
  await page.goto(arrLinkJabko16eIPH[i], {
    waitUntil: "domcontentloaded",
  });

  const result = await page.evaluate(() => {
    const clean = (t) =>
      t
        ?.replace(/\n+/g, " ")
        .replace(/\s+/g, " ")
        .trim();

    const title = clean(
      document.querySelector("h1")?.innerText ||
      document.querySelector(".sku")?.innerText ||
      "NO TITLE"
    );

    const price = clean(
      document.querySelector(".price-new__uah")?.innerText ||
      document.querySelector(".product-price-title")?.innerText ||
      document.querySelector(".product-price-value")?.innerText
    );

    return price ? `${title} J: ${price}` : title;
  });

  console.log(result);
}
  for (let i = 0; i < arrLinkIstore16eIPH.length; i += 1) {
  await page.goto(arrLinkIstore16eIPH[i], {
    waitUntil: "domcontentloaded",
  });

  let arr4 = await page.evaluate(() => {
    const title = document.querySelector("h1")?.innerText || "NO TITLE";
    const price = document.querySelector(".product_price")?.innerText;

    return price ? `${title} I: ${price}` : title;
  });

  console.log(arr4);
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
    const h1 = document.querySelector("h1");
    const price = document.querySelector(".regular-price");

    if (h1) {
      const text2 = h1.innerText.trim();
      if (price) {
        return `${text2} Estore: ${price.innerText.trim()}`;
      } else {
        return text2;
      }
    } else {
      return "⚠️ Нет H1";
    }
  });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkiPeople16e.length; i++) {
  const link = arrLinkiPeople16e[i];

  try {
    const response = await page.goto(link, {
      waitUntil: "domcontentloaded",
      timeout: 20000,
    });

    if (!response || !response.ok()) {
      console.log(`❌ iPeople16e: не открылся ${link}`);
      continue;
    }

    await page.waitForSelector("body", { timeout: 5000 });

    const result = await page.evaluate(() => {
      const clean = (t) =>
        typeof t === "string"
          ? t.replace(/\n+/g, " ").replace(/\s+/g, " ").trim()
          : "";

      const title = clean(document.querySelector("h1")?.innerText);
      const usd = clean(document.querySelector(".usd")?.innerText);

      if (!title) return "❌ iPeople16e: страница без товара";

      return usd
        ? `${title} iPeople: ${usd}`
        : `${title} iPeople: нет цены`;
    });

    console.log(result);
    await new Promise(r => setTimeout(r, 500));

  } catch (err) {
    console.log(`❌ iPeople16e: не открылся ${link}`);
  }
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
 for (let i = 0; i < arrLinkYabloki16e.length; i++) {
  try {
    await page.goto(arrLinkYabloki16e[i], {
      waitUntil: "domcontentloaded",
      timeout: 20000
    });

    // небольшая пауза — КЛЮЧЕВО
    await page.waitForTimeout(500);

    const arr2 = await page.evaluate(() => {
      const h1 = document.querySelector("h1");
      const price = document.querySelector(".product-price-title");

      const title = h1?.innerText?.trim() || "Без названия";
      const priceText = price?.innerText?.trim() || "нет цены";

      return `${title} Yabloki: ${priceText}`;
    });

    console.log(arr2);

  } catch (err) {
    console.log("❌ Ошибка при загрузке:", arrLinkYabloki16e[i]);
    console.log(err.message);
  }
}

 for (let i = 0; i < arrLinkJabko17ProIPH.length; i += 1) {
  await page.goto(arrLinkJabko17ProIPH[i], {
    waitUntil: "domcontentloaded",
  });

  const result = await page.evaluate(() => {
    const clean = (t) =>
      t?.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();

    const title = clean(document.querySelector("h1")?.innerText);
    const price = clean(
      document.querySelector(".price-new__uah")?.innerText
    );

    return price ? `${title} J: ${price}` : title;
  });

  console.log(result);
}
  for (let i = 0; i < arrLinkMobilePlanet17ProIPH.length; i += 1) {
    await page.goto(arrLinkMobilePlanet17ProIPH[i]);
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
  for (let i = 0; i < arrLinkGro17ProIPH.length; i += 1) {
    await page.goto(arrLinkGro17ProIPH[i]);
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
  for (let i = 0; i < arrLinkEstore17ProIPH.length; i += 1) {
    await page.goto(arrLinkEstore17ProIPH[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
    const h1 = document.querySelector("h1");
    const price = document.querySelector(".regular-price");

    if (h1) {
      const text2 = h1.innerText.trim();
      if (price) {
        return `${text2} Estore: ${price.innerText.trim()}`;
      } else {
        return text2;
      }
    } else {
      return "⚠️ Нет H1";
    }
  });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkYua17Pro.length; i += 1) {
    await page.goto(arrLinkYua17Pro[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price .regular") != null) {
        return (
          text2 + "Yua: " + document.querySelector(".price .regular").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkYabloki17Pro.length; i++) {
  try {
    await page.goto(arrLinkYabloki17Pro[i], {
      waitUntil: "domcontentloaded",
      timeout: 0,
    });

    // небольшая пауза — ОБЯЗАТЕЛЬНО
    await page.waitForTimeout(500);

    const arr2 = await page.evaluate(() => {
      const h1 = document.querySelector("h1");
      const price = document.querySelector(".product-price-title");

      const title = h1 ? h1.innerText.trim() : "Без названия";
      const cost = price ? price.innerText.trim() : "нет цены";

      return `${title} Yabloki: ${cost}`;
    });

    console.log(arr2);

  } catch (e) {
    console.log("❌ ошибка на ссылке:", arrLinkYabloki17Pro[i]);
    console.log(e.message);
  }
}
   for (let i = 0; i < arrLinkCts17ProIPH.length; i++) {
  try {
    await page.goto(arrLinkCts17ProIPH[i], {
      waitUntil: "domcontentloaded",
      timeout: 20000,
    });

    const result = await page.evaluate(() => {
      const clean = (t) =>
        typeof t === "string"
          ? t
              .replace(/\n+/g, " ")
              .replace(/\s+/g, " ")
              .replace(/Швидка покупка/gi, "")
              .replace(/Передзамовити.*/gi, "Передзамовити")
              .trim()
          : "";

      const title = clean(document.querySelector("h1")?.innerText);
      if (!title) return "";

      const priceRaw = document.querySelector(".price");
      const price = clean(priceRaw?.innerText);

      return price ? `${title} CRS: ${price}` : `${title} CRS: Передзамовити`;
    });

    if (result && result.trim()) console.log(result);

  } catch {
    console.log(`❌ CRS: не открылся ${arrLinkCts17ProIPH[i]}`);
  }
}
  for (let i = 0; i < arrLinkCts17ProIPHinfo.length; i++) {
  try {
    await page.goto(arrLinkCts17ProIPHinfo[i], {
      waitUntil: "domcontentloaded",
      timeout: 20000,
    });

    const result = await page.evaluate(() => {
      const clean = (t) =>
        typeof t === "string"
          ? t
              .replace(/\n+/g, " ")
              .replace(/\s+/g, " ")
              .replace(/Швидка покупка/gi, "")
              .replace(/Купити/gi, "Купити")
              .replace(/Передзамовити.*/gi, "Передзамовити")
              .trim()
          : "";

      const title = clean(document.querySelector("h1")?.innerText);
      if (!title) return "";

      const priceRaw = document.querySelector(".Price_buttonWrapper__QsXNG");
      const price = clean(priceRaw?.innerText);

      return price ? `${title} CRS: ${price}` : `${title} CRS: Передзамовити`;
    });

    if (result && result.trim()) console.log(result);

  } catch {
    console.log(`❌ CRS: не открылся ${arrLinkCts17ProIPHinfo[i]}`);
  }
}
   for (let i = 0; i < arrLinkSkay17ProIPH.length; i++) {
  const link = arrLinkSkay17ProIPH[i];

  try {
    const response = await page.goto(link, {
      waitUntil: "domcontentloaded",
      timeout: 20000,
    });

    // сайт не открылся
    if (!response || !response.ok()) {
      console.log(`❌ S: не открылось — ${link}`);
      continue;
    }

    const result = await page.evaluate(() => {
      const clean = (t) =>
        t ? t.replace(/\n+/g, " ").replace(/\s+/g, " ").trim() : "";

      const h1 = document.querySelector("h1");
      if (!h1) return "⚠️ S: нет H1";

      const price = document.querySelector(".products-item-cost");

      return price
        ? `${clean(h1.innerText)} S: ${clean(price.innerText)}`
        : `${clean(h1.innerText)} S: нет цены`;
    });

    console.log(result);

    await new Promise(r => setTimeout(r, 500));

  } catch (err) {
    console.log(`❌ S: ошибка или не открылось — ${link}`);
  }
}
  
  for (let i = 0; i < arrLinkJabko17ProIPHeSim.length; i += 1) {
  await page.goto(arrLinkJabko17ProIPHeSim[i], {
    waitUntil: "domcontentloaded",
  });

  const result = await page.evaluate(() => {
    const clean = (text) =>
      text?.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();

    const title = clean(document.querySelector("h1")?.innerText);
    const price = clean(
      document.querySelector(".price-new__uah")?.innerText
    );

    return price ? `${title} J: ${price}` : title;
  });

  console.log(result);
}
  for (let i = 0; i < arrLinkMobilePlanet17ProIPHeSim.length; i += 1) {
    await page.goto(arrLinkMobilePlanet17ProIPHeSim[i]);
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
  for (let i = 0; i < arrLinkGro17ProIPHeSim.length; i += 1) {
    await page.goto(arrLinkGro17ProIPHeSim[i]);
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
  for (let i = 0; i < arrLinkEstore17ProIPHeSim.length; i += 1) {
    await page.goto(arrLinkEstore17ProIPHeSim[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
    const h1 = document.querySelector("h1");
    const price = document.querySelector(".regular-price");

    if (h1) {
      const text2 = h1.innerText.trim();
      if (price) {
        return `${text2} Estore: ${price.innerText.trim()}`;
      } else {
        return text2;
      }
    } else {
      return "⚠️ Нет H1";
    }
  });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }

  for (let i = 0; i < arrLinkJabko17IPH.length; i += 1) {
  await page.goto(arrLinkJabko17IPH[i], {
    waitUntil: "domcontentloaded",
  });

  const result = await page.evaluate(() => {
    const clean = (t) =>
      t?.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();

    const title = clean(document.querySelector("h1")?.innerText);
    const price = clean(
      document.querySelector(".price-new__uah")?.innerText
    );

    return price ? `${title} J: ${price}` : title;
  });

  console.log(result);
}
 for (let i = 0; i < arrLinkMobilePlanet17IPH.length; i += 1) {
  try {
    await page.goto(arrLinkMobilePlanet17IPH[i], { waitUntil: "domcontentloaded" });
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      const h1 = document.querySelector("h1");
      const price = document.querySelector(".price-value");

      if (h1) {
        const text2 = h1.innerText.trim();
        if (price) {
          return `${text2} MP: ${price.innerText.trim()}`;
        } else {
          return `${text2} MP: нет цены`;
        }
      } else {
        return "⚠️ Нет H1";
      }
    });

    console.log(arr3);
    await page.setDefaultNavigationTimeout(0);
  } catch (err) {
    console.log(`❌ Ошибка на ссылке ${arrLinkMobilePlanet17IPH[i]}: ${err.message}`);
  }
}
  for (let i = 0; i < arrLinkGro17IPH.length; i += 1) {
    await page.goto(arrLinkGro17IPH[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector(".sku").innerText;
      if (document.querySelector(".product-price-value") != null) {
        return (
          text2 + "Gro: " + document.querySelector(".product-price-value").innerText
        );
      } else {
        return "text2";
      }
    });

    console.log(arr3);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkEstore17IPH.length; i += 1) {
    await page.goto(arrLinkEstore17IPH[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
    const h1 = document.querySelector("h1");
    const price = document.querySelector(".regular-price");

    if (h1) {
      const text2 = h1.innerText.trim();
      if (price) {
        return `${text2} Estore: ${price.innerText.trim()}`;
      } else {
        return text2;
      }
    } else {
      return "⚠️ Нет H1";
    }
  });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkYabloki17.length; i++) {
  try {
    await page.goto(arrLinkYabloki17[i], {
      waitUntil: "domcontentloaded",
      timeout: 0,
    });

    // обязательно дать странице чуть времени
    await page.waitForTimeout(500);

    const arr2 = await page.evaluate(() => {
      const h1 = document.querySelector("h1");
      const price = document.querySelector(".product-price-title");

      const title = h1 ? h1.innerText.trim() : "Без названия";
      const cost = price ? price.innerText.trim() : "нет цены";

      return `${title} Yabloki: ${cost}`;
    });

    console.log(arr2);

  } catch (err) {
    console.log("❌ Ошибка на странице:", arrLinkYabloki17[i]);
    console.log(err.message);
  }
}


  // for (let i = 0; i < arrLinkCts16IPHiNfo.length; i += 1) {
  //   await page.goto(arrLinkCts16IPHiNfo[i]);
  //   const n = await page.$("#txt");

  //   let arr2 = await page.evaluate(() => {
  //     let text2 = document.querySelector("h1").innerText;
  //     if (document.querySelector(".Description_block__cKP9f") != null) {
  //       return (
  //         text2 + "CRS: " + document.querySelector(".Description_block__cKP9f").innerText
  //       );
  //     } else {
  //       return text2;
  //     }
  //   });

  //   console.log(arr2);
  //   await page.setDefaultNavigationTimeout(0);
  // }


}
f();
