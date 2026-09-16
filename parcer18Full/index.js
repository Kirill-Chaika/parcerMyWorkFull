

console.log("Hello world");

const puppeteer = require("puppeteer");
// const puppeteer = require('puppeteer-extra');
// const StealthPlugin = require('puppeteer-extra-plugin-stealth');
// puppeteer.use(StealthPlugin());





const arrLinkJabko18IPH = [
"https://jabko.ua/product/apple-iphone-18-pro-256gb-burgundy",
"https://jabko.ua/product/apple-iphone-18-pro-256gb-glacier-blue",
"https://jabko.ua/product/apple-iphone-18-pro-256gb-black",
"https://jabko.ua/product/apple-iphone-18-pro-256gb-silver",

 
"https://jabko.ua/product/apple-iphone-18-pro-512gb-burgundy",
"https://jabko.ua/product/apple-iphone-18-pro-512gb-glacier-blue",
"https://jabko.ua/product/apple-iphone-18-pro-512gb-black",
"https://jabko.ua/product/apple-iphone-18-pro-512gb-silver",
 
"https://jabko.ua/product/apple-iphone-18-pro-1tb-burgundy",
"https://jabko.ua/product/apple-iphone-18-pro-1tb-glacier-blue",
"https://jabko.ua/product/apple-iphone-18-pro-1tb-black",
"https://jabko.ua/product/apple-iphone-18-pro-1tb-silver",
 
"https://jabko.ua/product/apple-iphone-18-pro-2tb-burgundy",
"https://jabko.ua/product/apple-iphone-18-pro-2tb-glacier-blue",
"https://jabko.ua/product/apple-iphone-18-pro-2tb-black",
"https://jabko.ua/product/apple-iphone-18-pro-2tb-silver",




 
"https://jabko.ua/product/apple-iphone-18-pro-256gb-burgundy-e-sim",
"https://jabko.ua/product/apple-iphone-18-pro-256gb-glacier-blue-e-sim",
"https://jabko.ua/product/apple-iphone-18-pro-256gb-black-e-sim",
"https://jabko.ua/product/apple-iphone-18-pro-256gb-silver-e-sim",
 
"https://jabko.ua/product/apple-iphone-18-pro-512gb-burgundy-e-sim",
"https://jabko.ua/product/apple-iphone-18-pro-512gb-glacier-blue-e-sim",
"https://jabko.ua/product/apple-iphone-18-pro-512gb-black-e-sim",
"https://jabko.ua/product/apple-iphone-18-pro-512gb-silver-e-sim",
 
"https://jabko.ua/product/apple-iphone-18-pro-1tb-burgundy-e-sim",
"https://jabko.ua/product/apple-iphone-18-pro-1tb-glacier-blue-e-sim",
"https://jabko.ua/product/apple-iphone-18-pro-1tb-black-e-sim",
"https://jabko.ua/product/apple-iphone-18-pro-1tb-silver-e-sim",
 
"https://jabko.ua/product/apple-iphone-18-pro-2tb-burgundy-e-sim",
"https://jabko.ua/product/apple-iphone-18-pro-2tb-glacier-blue-e-sim",
"https://jabko.ua/product/apple-iphone-18-pro-2tb-black-e-sim",
"https://jabko.ua/product/apple-iphone-18-pro-2tb-silver-e-sim",

 
"https://jabko.ua/product/apple-iphone-18-pro-max-256gb-burgundy",
"https://jabko.ua/product/apple-iphone-18-pro-max-256gb-glacier-blue",
"https://jabko.ua/product/apple-iphone-18-pro-max-256gb-black",
"https://jabko.ua/product/apple-iphone-18-pro-max-256gb-silver",
 
"https://jabko.ua/product/apple-iphone-18-pro-max-512gb-burgundy",
"https://jabko.ua/product/apple-iphone-18-pro-max-512gb-glacier-blue",
"https://jabko.ua/product/apple-iphone-18-pro-max-512gb-black",
"https://jabko.ua/product/apple-iphone-18-pro-max-512gb-silver",
 
"https://jabko.ua/product/apple-iphone-18-pro-max-1tb-burgundy",
"https://jabko.ua/product/apple-iphone-18-pro-max-1tb-glacier-blue",
"https://jabko.ua/product/apple-iphone-18-pro-max-1tb-black",
"https://jabko.ua/product/apple-iphone-18-pro-max-1tb-silver",
 
"https://jabko.ua/product/apple-iphone-18-pro-max-2tb-burgundy",
"https://jabko.ua/product/apple-iphone-18-pro-max-2tb-glacier-blue",
"https://jabko.ua/product/apple-iphone-18-pro-max-2tb-black",
"https://jabko.ua/product/apple-iphone-18-pro-max-2tb-silver",



 
"https://jabko.ua/product/apple-iphone-18-pro-max-256gb-burgundy-e-sim",
"https://jabko.ua/product/apple-iphone-18-pro-max-256gb-glacier-blue-e-sim",
"https://jabko.ua/product/apple-iphone-18-pro-max-256gb-black-e-sim",
"https://jabko.ua/product/apple-iphone-18-pro-max-256gb-silver-e-sim",
 
"https://jabko.ua/product/apple-iphone-18-pro-max-512gb-burgundy-e-sim",
"https://jabko.ua/product/apple-iphone-18-pro-max-512gb-glacier-blue-e-sim",
"https://jabko.ua/product/apple-iphone-18-pro-max-512gb-black-e-sim",
"https://jabko.ua/product/apple-iphone-18-pro-max-512gb-silver-e-sim",
 
"https://jabko.ua/product/apple-iphone-18-pro-max-1tb-burgundy-e-sim",
"https://jabko.ua/product/apple-iphone-18-pro-max-1tb-glacier-blue-e-sim",
"https://jabko.ua/product/apple-iphone-18-pro-max-1tb-black-e-sim",
"https://jabko.ua/product/apple-iphone-18-pro-max-1tb-silver-e-sim",
 
"https://jabko.ua/product/apple-iphone-18-pro-max-2tb-burgundy-e-sim",
"https://jabko.ua/product/apple-iphone-18-pro-max-2tb-glacier-blue-e-sim",
"https://jabko.ua/product/apple-iphone-18-pro-max-2tb-black-e-sim",
"https://jabko.ua/product/apple-iphone-18-pro-max-2tb-silver-e-sim",

 
"https://jabko.ua/product/apple-iphone-duo-256gb-night-sky-e-sim",
"https://jabko.ua/product/apple-iphone-duo-256gb-star-white-e-sim",
"https://jabko.ua/product/apple-iphone-duo-512gb-night-sky-e-sim",
"https://jabko.ua/product/apple-iphone-duo-512gb-star-white-e-sim",
 
"https://jabko.ua/product/apple-iphone-duo-1tb-night-sky-e-sim",
"https://jabko.ua/product/apple-iphone-duo-1tb-star-white-e-sim",
"https://jabko.ua/product/apple-iphone-duo-2tb-night-sky-e-sim",
"https://jabko.ua/product/apple-iphone-duo-2tb-star-white-e-sim",
];



const arrLinkMobilePlanet18IPH = [
 "https://mobileplanet.ua/apple-iphone-18-pro-256gb-burgundy-mjrr4-397535",
"https://mobileplanet.ua/apple-iphone-18-pro-256gb-glacier-mjrt4-397540",
"https://mobileplanet.ua/apple-iphone-18-pro-256gb-black-mjrp4-397534",
"https://mobileplanet.ua/apple-iphone-18-pro-256gb-silver-mjrq4-397541",
 
"https://mobileplanet.ua/apple-iphone-18-pro-512gb-burgundy-mjrw4-397551",
"https://mobileplanet.ua/apple-iphone-18-pro-512gb-glacier-mjrx4-397556",
"https://mobileplanet.ua/apple-iphone-18-pro-512gb-black-mjru4-397550",
"https://mobileplanet.ua/apple-iphone-18-pro-512gb-silver-mjrv4-397557",
 
"https://mobileplanet.ua/apple-iphone-18-pro-1tb-burgundy-mjt14-397527",
"https://mobileplanet.ua/apple-iphone-18-pro-1tb-glacier-mjt24-397532",
"https://mobileplanet.ua/apple-iphone-18-pro-1tb-black-mjry4-397526",
"https://mobileplanet.ua/apple-iphone-18-pro-1tb-silver-mjt04-397533",
 
"https://mobileplanet.ua/apple-iphone-18-pro-2tb-burgundy-mjt54-397543",
"https://mobileplanet.ua/apple-iphone-18-pro-2tb-glacier-mjt64-397548",
"https://mobileplanet.ua/apple-iphone-18-pro-2tb-black-mjt34-397542",
"https://mobileplanet.ua/apple-iphone-18-pro-2tb-silver-mjt44-397549",



 
"https://mobileplanet.ua/apple-iphone-18-pro-256gb-esim-burgundy-397537",
"https://mobileplanet.ua/apple-iphone-18-pro-256gb-esim-glacier-m-397538",
"https://mobileplanet.ua/apple-iphone-18-pro-256gb-esim-black-mjq-397536",
"https://mobileplanet.ua/apple-iphone-18-pro-256gb-esim-silver-mj-397539",
 
"https://mobileplanet.ua/apple-iphone-18-pro-512gb-esim-burgundy-397553",
"https://mobileplanet.ua/apple-iphone-18-pro-512gb-esim-glacier-m-397554",
"https://mobileplanet.ua/apple-iphone-18-pro-512gb-esim-black-mjq-397552",
"https://mobileplanet.ua/apple-iphone-18-pro-512gb-esim-silver-mj-397555",
 
"https://mobileplanet.ua/apple-iphone-18-pro-1tb-esim-burgundy-mj-397529",
"https://mobileplanet.ua/apple-iphone-18-pro-1tb-esim-glacier-mjq-397530",
"https://mobileplanet.ua/apple-iphone-18-pro-1tb-esim-black-mjqc4-397528",
"https://mobileplanet.ua/apple-iphone-18-pro-1tb-esim-silver-mjqd-397531",
 
"https://mobileplanet.ua/apple-iphone-18-pro-2tb-esim-burgundy-mj-397545",
"https://mobileplanet.ua/apple-iphone-18-pro-2tb-esim-glacier-mjq-397546",
"https://mobileplanet.ua/apple-iphone-18-pro-2tb-esim-black-mjqg4-397544",
"https://mobileplanet.ua/apple-iphone-18-pro-2tb-esim-silver-mjqh-397547",

 
"https://mobileplanet.ua/apple-iphone-18-pro-max-256gb-burgundy-m-397567",
"https://mobileplanet.ua/apple-iphone-18-pro-max-256gb-glacier-mj-397572",
"https://mobileplanet.ua/apple-iphone-18-pro-max-256gb-black-mjxn-397566",
"https://mobileplanet.ua/apple-iphone-18-pro-max-256gb-silver-mjx-397573",
 
"https://mobileplanet.ua/apple-iphone-18-pro-max-512gb-burgundy-m-397583",
"https://mobileplanet.ua/apple-iphone-18-pro-max-512gb-glacier-mj-397588",
"https://mobileplanet.ua/apple-iphone-18-pro-max-512gb-black-mjxt-397582",
"https://mobileplanet.ua/apple-iphone-18-pro-max-512gb-silver-mjx-397589",
 
"https://mobileplanet.ua/apple-iphone-18-pro-max-1tb-burgundy-mjy-397559",
"https://mobileplanet.ua/apple-iphone-18-pro-max-1tb-glacier-mjy1-397564",
"https://mobileplanet.ua/apple-iphone-18-pro-max-1tb-black-mjxx4-397558",
"https://mobileplanet.ua/apple-iphone-18-pro-max-1tb-silver-mjxy4-397565",
 
"https://mobileplanet.ua/apple-iphone-18-pro-max-2tb-burgundy-mjy-397575",
"https://mobileplanet.ua/apple-iphone-18-pro-max-2tb-glacier-mjy5-397580",
"https://mobileplanet.ua/apple-iphone-18-pro-max-2tb-black-mjy24-397574",
"https://mobileplanet.ua/apple-iphone-18-pro-max-2tb-silver-mjy34-397581",



 
"https://mobileplanet.ua/apple-iphone-18-pro-max-256gb-esim-burgu-397569",
"https://mobileplanet.ua/apple-iphone-18-pro-max-256gb-esim-glaci-397570",
"https://mobileplanet.ua/apple-iphone-18-pro-max-256gb-esim-black-397568",
"https://mobileplanet.ua/apple-iphone-18-pro-max-256gb-esim-silve-397571",
 
"https://mobileplanet.ua/apple-iphone-18-pro-max-512gb-esim-burgu-397585",
"https://mobileplanet.ua/apple-iphone-18-pro-max-512gb-esim-glaci-397586",
"https://mobileplanet.ua/apple-iphone-18-pro-max-512gb-esim-black-397584",
"https://mobileplanet.ua/apple-iphone-18-pro-max-512gb-esim-silve-397587",
 
"https://mobileplanet.ua/apple-iphone-18-pro-max-1tb-esim-burgund-397561",
"https://mobileplanet.ua/apple-iphone-18-pro-max-1tb-esim-glacier-397562",
"https://mobileplanet.ua/apple-iphone-18-pro-max-1tb-esim-black-m-397560",
"https://mobileplanet.ua/apple-iphone-18-pro-max-1tb-esim-silver-397563",
 
"https://mobileplanet.ua/apple-iphone-18-pro-max-2tb-esim-burgund-397577",
"https://mobileplanet.ua/apple-iphone-18-pro-max-2tb-esim-glacier-397578",
"https://mobileplanet.ua/apple-iphone-18-pro-max-2tb-esim-black-m-397576",
"https://mobileplanet.ua/apple-iphone-18-pro-max-2tb-esim-silver-397579",

 
"https://mobileplanet.ua/apple-iphone-duo-256gb-night-sky-mk2n4-m-397594",
"https://mobileplanet.ua/apple-iphone-duo-256gb-star-white-mk2m4-397595",
"https://mobileplanet.ua/apple-iphone-duo-512gb-night-sky-mk2q4-m-397596",
"https://mobileplanet.ua/apple-iphone-duo-512gb-star-white-mk2p4-397597",
 
"https://mobileplanet.ua/apple-iphone-duo-1tb-night-sky-mk2u4-mk2-397593",
"https://mobileplanet.ua/apple-iphone-duo-1tb-star-white-mk2t4-mk-397590",
"https://mobileplanet.ua/apple-iphone-duo-2tb-night-sky-mk2w4-397591",
"https://mobileplanet.ua/apple-iphone-duo-2tb-star-white-mk2v4-397592",
];

const arrLinkGro18IPH = [
 "https://gro.ua/product/apple/iphone/iphone-18-pro/smartfon-apple-iphone-18-pro-256gb-burgundy/",
"https://gro.ua/product/apple/iphone/iphone-18-pro/smartfon-apple-iphone-18-pro-256gb-glacier/",
"https://gro.ua/product/apple/iphone/iphone-18-pro/smartfon-apple-iphone-18-pro-256gb-space-black/",
"https://gro.ua/product/apple/iphone/iphone-18-pro/smartfon-apple-iphone-18-pro-256gb-silver/",
 
"https://gro.ua/product/apple/iphone/iphone-18-pro/smartfon-apple-iphone-18-pro-512gb-burgundy/",
"https://gro.ua/product/apple/iphone/iphone-18-pro/smartfon-apple-iphone-18-pro-512gb-glacier/",
"https://gro.ua/product/apple/iphone/iphone-18-pro/smartfon-apple-iphone-18-pro-512gb-space-black/",
"https://gro.ua/product/apple/iphone/iphone-18-pro/smartfon-apple-iphone-18-pro-512gb-silver/",
 
"https://gro.ua/product/apple/iphone/iphone-18-pro/smartfon-apple-iphone-18-pro-1tb-burgundy/",
"https://gro.ua/product/apple/iphone/iphone-18-pro/smartfon-apple-iphone-18-pro-1tb-glacier/",
"https://gro.ua/product/apple/iphone/iphone-18-pro/smartfon-apple-iphone-18-pro-1tb-space-black/",
"https://gro.ua/product/apple/iphone/iphone-18-pro/smartfon-apple-iphone-18-pro-1tb-silver/",
 
"https://gro.ua/product/apple/iphone/iphone-18-pro/smartfon-apple-iphone-18-pro-2tb-burgundy/",
"https://gro.ua/product/apple/iphone/iphone-18-pro/smartfon-apple-iphone-18-pro-2tb-glacier/",
"https://gro.ua/product/apple/iphone/iphone-18-pro/smartfon-apple-iphone-18-pro-2tb-space-black/",
"https://gro.ua/product/apple/iphone/iphone-18-pro/smartfon-apple-iphone-18-pro-2tb-silver/",




 
"https://gro.ua/product/apple/iphone/iphone-18-pro/smartfon-apple-iphone-18-pro-256gb-esim-burgundy-mjq54/",
"https://gro.ua/product/apple/iphone/iphone-18-pro/smartfon-apple-iphone-18-pro-256gb-esim-glacier-mjq64/",
"https://gro.ua/product/apple/iphone/iphone-18-pro/smartfon-apple-iphone-18-pro-256gb-esim-black-mjq34/",
"https://gro.ua/product/apple/iphone/iphone-18-pro/smartfon-apple-iphone-18-pro-256gb-esim-silver-mjq44/",
 
"https://gro.ua/product/apple/iphone/iphone-18-pro/smartfon-apple-iphone-18-pro-512gb-esim-burgundy-mjq94/",
"https://gro.ua/product/apple/iphone/iphone-18-pro/smartfon-apple-iphone-18-pro-512gb-esim-glacier-mjqa4/",
"https://gro.ua/product/apple/iphone/iphone-18-pro/smartfon-apple-iphone-18-pro-512gb-esim-black-mjq74/",
"https://gro.ua/product/apple/iphone/iphone-18-pro/smartfon-apple-iphone-18-pro-512gb-esim-silver-mjq84/",
 
"https://gro.ua/product/apple/iphone/iphone-18-pro/smartfon-apple-iphone-18-pro-1tb-esim-burgundy-mjqe4/",
"https://gro.ua/product/apple/iphone/iphone-18-pro/smartfon-apple-iphone-18-pro-1tb-esim-glacier-mjqf4/",
"https://gro.ua/product/apple/iphone/iphone-18-pro/smartfon-apple-iphone-18-pro-1tb-esim-black-mjqc4/",
"https://gro.ua/product/apple/iphone/iphone-18-pro/smartfon-apple-iphone-18-pro-1tb-esim-silver-mjqd4/",
 
"https://gro.ua/product/apple/iphone/iphone-18-pro/smartfon-apple-iphone-18-pro-2tb-esim-burgundy-mjqj4/",
"https://gro.ua/product/apple/iphone/iphone-18-pro/smartfon-apple-iphone-18-pro-2tb-esim-glacier-mjqk4/",
"https://gro.ua/product/apple/iphone/iphone-18-pro/smartfon-apple-iphone-18-pro-2tb-esim-black-mjqg4/",
"https://gro.ua/product/apple/iphone/iphone-18-pro/smartfon-apple-iphone-18-pro-2tb-esim-silver-mjqh4/",

 
"https://gro.ua/product/apple/iphone/iphone-18-pro-max/smartfon-apple-iphone-18-pro-max-256gb-burgundy/",
"https://gro.ua/product/apple/iphone/iphone-18-pro-max/smartfon-apple-iphone-18-pro-max-256gb-glacier/",
"https://gro.ua/product/apple/iphone/iphone-18-pro-max/smartfon-apple-iphone-18-pro-max-256gb-space-black/",
"https://gro.ua/product/apple/iphone/iphone-18-pro-max/smartfon-apple-iphone-18-pro-max-256gb-silver/",
 
"https://gro.ua/product/apple/iphone/iphone-18-pro-max/smartfon-apple-iphone-18-pro-max-512gb-burgundy/",
"https://gro.ua/product/apple/iphone/iphone-18-pro-max/smartfon-apple-iphone-18-pro-max-512gb-glacier/",
"https://gro.ua/product/apple/iphone/iphone-18-pro-max/smartfon-apple-iphone-18-pro-max-512gb-space-black/",
"https://gro.ua/product/apple/iphone/iphone-18-pro-max/smartfon-apple-iphone-18-pro-max-512gb-silver/",
 
"https://gro.ua/product/apple/iphone/iphone-18-pro-max/smartfon-apple-iphone-18-pro-max-1tb-burgundy/",
"https://gro.ua/product/apple/iphone/iphone-18-pro-max/smartfon-apple-iphone-18-pro-max-1tb-glacier/",
"https://gro.ua/product/apple/iphone/iphone-18-pro-max/smartfon-apple-iphone-18-pro-max-1tb-space-black/",
"https://gro.ua/product/apple/iphone/iphone-18-pro-max/smartfon-apple-iphone-18-pro-max-1tb-silver/",
 
"https://gro.ua/product/apple/iphone/iphone-18-pro-max/smartfon-apple-iphone-18-pro-max-2tb-burgundy/",
"https://gro.ua/product/apple/iphone/iphone-18-pro-max/smartfon-apple-iphone-18-pro-max-2tb-glacier/",
"https://gro.ua/product/apple/iphone/iphone-18-pro-max/smartfon-apple-iphone-18-pro-max-2tb-space-black/",
"https://gro.ua/product/apple/iphone/iphone-18-pro-max/smartfon-apple-iphone-18-pro-max-2tb-silver/",



 
"https://gro.ua/product/apple/iphone/iphone-18-pro-max/smartfon-apple-iphone-18-pro-max-256gb-esim-burgundy-mjw64/",
"https://gro.ua/product/apple/iphone/iphone-18-pro-max/smartfon-apple-iphone-18-pro-max-256gb-esim-glacier-mjw74/",
"https://gro.ua/product/apple/iphone/iphone-18-pro-max/smartfon-apple-iphone-18-pro-max-256gb-esim-black-mjw44/",
"https://gro.ua/product/apple/iphone/iphone-18-pro-max/smartfon-apple-iphone-18-pro-max-256gb-esim-silver-mjw54/",
 
"https://gro.ua/product/apple/iphone/iphone-18-pro-max/smartfon-apple-iphone-18-pro-max-512gb-esim-burgundy-mjwa4/",
"https://gro.ua/product/apple/iphone/iphone-18-pro-max/smartfon-apple-iphone-18-pro-max-512gb-esim-glacier-mjwc4/",
"https://gro.ua/product/apple/iphone/iphone-18-pro-max/smartfon-apple-iphone-18-pro-max-512gb-esim-black-mjw84/",
"https://gro.ua/product/apple/iphone/iphone-18-pro-max/smartfon-apple-iphone-18-pro-max-512gb-esim-silver-mjw94/",
 
"https://gro.ua/product/apple/iphone/iphone-18-pro-max/smartfon-apple-iphone-18-pro-max-1tb-esim-burgundy-mjwf4/",
"https://gro.ua/product/apple/iphone/iphone-18-pro-max/smartfon-apple-iphone-18-pro-max-1tb-esim-glacier-mjwg4/",
"https://gro.ua/product/apple/iphone/iphone-18-pro-max/smartfon-apple-iphone-18-pro-max-1tb-esim-black-mjwd4/",
"https://gro.ua/product/apple/iphone/iphone-18-pro-max/smartfon-apple-iphone-18-pro-max-1tb-esim-silver-mjwe4/",
 
"https://gro.ua/product/apple/iphone/iphone-18-pro-max/smartfon-apple-iphone-18-pro-max-2tb-esim-burgundy-mjwk4/",
"https://gro.ua/product/apple/iphone/iphone-18-pro-max/smartfon-apple-iphone-18-pro-max-2tb-esim-glacier-mjwl4/",
"https://gro.ua/product/apple/iphone/iphone-18-pro-max/smartfon-apple-iphone-18-pro-max-2tb-esim-black-mjwh4/",
"https://gro.ua/product/apple/iphone/iphone-18-pro-max/smartfon-apple-iphone-18-pro-max-2tb-esim-silver-mjwj4/",

 
"https://gro.ua/product/apple/iphone/iphone-ultra/smartfon-apple-iphone-ultra-256gb-space-black/",
"https://gro.ua/product/apple/iphone/iphone-ultra/smartfon-apple-iphone-ultra-256gb-silver/",
"https://gro.ua/product/apple/iphone/iphone-ultra/smartfon-apple-iphone-ultra-512gb-space-black/",
"https://gro.ua/product/apple/iphone/iphone-ultra/smartfon-apple-iphone-ultra-512gb-silver/",
 
"https://gro.ua/product/apple/iphone/iphone-ultra/smartfon-apple-iphone-ultra-1tb-space-black/",
"https://gro.ua/product/apple/iphone/iphone-ultra/smartfon-apple-iphone-ultra-1tb-silver/",
"https://gro.ua/product/apple/iphone/iphone-ultra/smartfon-apple-iphone-ultra-2tb-space-black/",
"https://gro.ua/product/apple/iphone/iphone-ultra/smartfon-apple-iphone-ultra-2tb-silver/",
];




const arrLinkCts18IPH = [
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-256gb-burgundy-apple-804478.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-256gb-glacier-apple-804479.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-256gb-black-apple-804512.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-256gb-silver-apple-804481.html",
 
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-512gb-burgundy-apple-804492.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-512gb-glacier-apple-804485.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-512gb-black-apple-804515.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-512gb-silver-apple-804494.html",
 
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-1tb-burgundy-apple-804497.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-1tb-glacier-apple-804498.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-1tb-black-apple-804510.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-1tb-silver-apple-804499.html",
 
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-2tb-burgundy-apple-804522.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-2tb-glacier-apple-804523.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-2tb-black-apple-804521.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-2tb-silver-apple-804525.html",





 
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-max-256gb-burgundy-apple-804480.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-max-256gb-glacier-apple-804484.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-max-256gb-black-apple-804529.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-max-256gb-silver-apple-804477.html",
 
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-max-512gb-burgundy-apple-804486.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-max-512gb-glacier-apple-804487.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-max-512gb-black-apple-804531.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-max-512gb-silver-apple-804488.html",
 
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-max-1tb-burgundy-apple-804489.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-max-1tb-glacier-apple-804490.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-max-1tb-black-apple-804528.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-max-1tb-silver-apple-804491.html",
 
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-max-2tb-burgundy-apple-804493.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-max-2tb-glacier-apple-804495.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-max-2tb-black-apple-804530.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-max-2tb-silver-apple-804496.html",




 
"https://citrus.ua/smartfony/smartfon-iphone-duo-256gb-night-sky-apple-804511.html",
"https://citrus.ua/smartfony/smartfon-iphone-duo-256gb-star-white-apple-804508.html",
"https://citrus.ua/smartfony/smartfon-iphone-duo-512gb-night-sky-apple-804513.html",
"https://citrus.ua/smartfony/smartfon-iphone-duo-512gb-star-white-apple-804514.html",
 
"https://citrus.ua/smartfony/smartfon-iphone-duo-1tb-night-sky-apple-804517.html",
"https://citrus.ua/smartfony/smartfon-iphone-duo-1tb-star-white-apple-804516.html",
"https://citrus.ua/smartfony/smartfon-iphone-duo-2tb-night-sky-apple-804518.html",
"https://citrus.ua/smartfony/smartfon-iphone-duo-2tb-star-white-apple-804519.html",
];

const arrLinkCts18IPHiNfo = [
 "https://citrus.ua/smartfony/smartfon-iphone-18-pro-256gb-burgundy-apple-804478.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-256gb-glacier-apple-804479.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-256gb-black-apple-804512.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-256gb-silver-apple-804481.html",
 
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-512gb-burgundy-apple-804492.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-512gb-glacier-apple-804485.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-512gb-black-apple-804515.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-512gb-silver-apple-804494.html",
 
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-1tb-burgundy-apple-804497.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-1tb-glacier-apple-804498.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-1tb-black-apple-804510.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-1tb-silver-apple-804499.html",
 
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-2tb-burgundy-apple-804522.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-2tb-glacier-apple-804523.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-2tb-black-apple-804521.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-2tb-silver-apple-804525.html",





 
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-max-256gb-burgundy-apple-804480.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-max-256gb-glacier-apple-804484.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-max-256gb-black-apple-804529.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-max-256gb-silver-apple-804477.html",
 
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-max-512gb-burgundy-apple-804486.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-max-512gb-glacier-apple-804487.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-max-512gb-black-apple-804531.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-max-512gb-silver-apple-804488.html",
 
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-max-1tb-burgundy-apple-804489.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-max-1tb-glacier-apple-804490.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-max-1tb-black-apple-804528.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-max-1tb-silver-apple-804491.html",
 
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-max-2tb-burgundy-apple-804493.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-max-2tb-glacier-apple-804495.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-max-2tb-black-apple-804530.html",
"https://citrus.ua/smartfony/smartfon-iphone-18-pro-max-2tb-silver-apple-804496.html",




 
"https://citrus.ua/smartfony/smartfon-iphone-duo-256gb-night-sky-apple-804511.html",
"https://citrus.ua/smartfony/smartfon-iphone-duo-256gb-star-white-apple-804508.html",
"https://citrus.ua/smartfony/smartfon-iphone-duo-512gb-night-sky-apple-804513.html",
"https://citrus.ua/smartfony/smartfon-iphone-duo-512gb-star-white-apple-804514.html",
 
"https://citrus.ua/smartfony/smartfon-iphone-duo-1tb-night-sky-apple-804517.html",
"https://citrus.ua/smartfony/smartfon-iphone-duo-1tb-star-white-apple-804516.html",
"https://citrus.ua/smartfony/smartfon-iphone-duo-2tb-night-sky-apple-804518.html",
"https://citrus.ua/smartfony/smartfon-iphone-duo-2tb-star-white-apple-804519.html",
];







async function f() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
   const sleep = (ms) => new Promise(r => setTimeout(r, ms));

  for (let i = 0; i < arrLinkJabko18IPH.length; i += 1) {
  await page.goto(arrLinkJabko18IPH[i], { waitUntil: "domcontentloaded" });

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
   for (let i = 0; i < arrLinkGro18IPH.length; i += 1) {
  await page.goto(arrLinkGro18IPH[i]);
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

  await sleep(3000 + Math.random() * 4000);

  await page.setDefaultNavigationTimeout(0);
}
  for (let link of arrLinkMobilePlanet18IPH) {
  await page.goto(link, { timeout: 0 });

  let result = await page.evaluate(() => {
    const h1 = document.querySelector("h1");
    const price = document.querySelector(".price-value");

    if (!h1 && !price) return "❌ MP: страница без товара";

    return `${h1?.innerText || "Товар"} MP: ${price?.innerText || "нет цены"}`;
  });

  console.log(result);
}

  
  for (let i = 0; i < arrLinkCts18IPH.length; i++) {
  const link = arrLinkCts18IPH[i];

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
//   for (let i = 0; i < arrLinkCts18IPHiNfo.length; i++) {
//   const link = arrLinkCts18IPHiNfo[i];

//   try {
//     await page.goto(link, {
//       waitUntil: "domcontentloaded",
//       timeout: 15000,
//     });

//     const result = await page.evaluate(() => {
//       const clean = (t) =>
//         typeof t === "string"
//           ? t.replace(/\n+/g, " ").replace(/\s+/g, " ").trim()
//           : "";

//       const title = clean(document.querySelector("h1")?.innerText);
//       const price = clean(document.querySelector(".price")?.innerText);

//       // если это не товар (google, редирект, пустая страница)
//       if (!title || title.length < 3) {
//         return "❌ CRS: страница без товара";
//       }

//       return price ? `${title} CRS: ${price}` : `${title} CRS: нет цены`;
//     });

//     // печатаем ТОЛЬКО если строка нормальная
//     if (result && result.trim()) {
//       console.log(result);
//     }

//   } catch (err) {
//     console.log(`❌ CRS: не открылся ${link}`);
//   }
// }



await browser.close();

process.exit(0);

}
f();
