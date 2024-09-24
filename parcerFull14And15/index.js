console.log("Hello world");

const puppeteer = require("puppeteer");
const arrLinkMobilePlanet = [
  "https://mobileplanet.ua/apple-iphone-14-128gb-starlight-mpur3-254637",
  "https://mobileplanet.ua/apple-iphone-14-128gb-product-red-mpva3-254640",
  "https://mobileplanet.ua/apple-iphone-14-128gb-purple-mpv03-254646",
  "https://mobileplanet.ua/apple-iphone-14-128gb-blue-mpvn3-254643",
  "https://mobileplanet.ua/apple-iphone-14-128gb-midnight-mpuf3-254634",
  "https://mobileplanet.ua/apple-iphone-14-128gb-yellow-mr3x3-269128",

  "https://mobileplanet.ua/apple-iphone-14-256gb-starlight-mpw43-254638",
  "https://mobileplanet.ua/apple-iphone-14-256gb-product-red-mpwh3-254641",
  "https://mobileplanet.ua/apple-iphone-14-256gb-purple-mpwa3-254647",
  "https://mobileplanet.ua/apple-iphone-14-256gb-blue-mpwp3-254644",
  "https://mobileplanet.ua/apple-iphone-14-256gb-midnight-mpvx3-254635",
  "https://mobileplanet.ua/apple-iphone-14-256gb-yellow-mr3y3-268925",

  "https://mobileplanet.ua/apple-iphone-14-plus-128gb-starlight-mq4y3-254622",
  "https://mobileplanet.ua/apple-iphone-14-plus-128gb-product-red-mq513-254625",
  "https://mobileplanet.ua/apple-iphone-14-plus-128gb-purple-mq503-254631",
  "https://mobileplanet.ua/apple-iphone-14-plus-128gb-blue-mq523-254628",
  "https://mobileplanet.ua/apple-iphone-14-plus-128gb-midnight-mq4x3-254619",
  "https://mobileplanet.ua/apple-iphone-14-plus-128gb-yellow-mr693-269368",

  "https://mobileplanet.ua/apple-iphone-14-plus-256gb-starlight-mq553-254623",
  "https://mobileplanet.ua/apple-iphone-14-plus-256gb-product-red-mq573-254626",
  "https://mobileplanet.ua/apple-iphone-14-plus-256gb-purple-mq563-254632",
  "https://mobileplanet.ua/apple-iphone-14-plus-256gb-blue-mq583-254629",
  "https://mobileplanet.ua/apple-iphone-14-plus-256gb-midnight-mq533-254620",
  "https://mobileplanet.ua/apple-iphone-14-plus-256gb-yellow-mr6d3-270614",



  "https://mobileplanet.ua/apple-iphone-13-128gb-black-228320",
  "https://mobileplanet.ua/apple-iphone-13-128gb-srarlight-228326",
  "https://mobileplanet.ua/apple-iphone-13-128gb-pink-228332",
  "https://mobileplanet.ua/apple-iphone-13-128gb-blue-228329",
  "https://mobileplanet.ua/apple-iphone-13-128gb-green-mngd3-250774",
  "https://mobileplanet.ua/apple-iphone-13-128gb-product-red-228323",

  "https://mobileplanet.ua/apple-iphone-13-256gb-black-228321",
  "https://mobileplanet.ua/apple-iphone-13-256gb-srarlight-228327",
  "https://mobileplanet.ua/apple-iphone-13-256gb-pink-228333",
  "https://mobileplanet.ua/apple-iphone-13-256gb-blue-228330",
  "https://mobileplanet.ua/apple-iphone-13-256gb-green-mnge3-250775",
  "https://mobileplanet.ua/apple-iphone-13-256gb-product-red-228324",

  "https://mobileplanet.ua/apple-iphone-11-64gb-white-mwl82-slim-bo-203339",
  "https://mobileplanet.ua/apple-iphone-11-64gb-black-mhda3-slim-bo-197828",
  "https://mobileplanet.ua/apple-iphone-11-128gb-white-mhdj3-slim-b-197635",
  "https://mobileplanet.ua/apple-iphone-11-128gb-black-mhdh3-slim-b-196053"
];
const arrLinkSkay14 = [
  "https://skay.ua/uk/iphone-14/58756-apple-iphone-14-128gb-starlight.html",
  "https://skay.ua/uk/iphone-14/58757-apple-iphone-14-128gb-product-red.html",
  "https://skay.ua/uk/iphone-14/58754-apple-iphone-14-128gb-purple.html",
  "https://skay.ua/uk/iphone-14/58753-apple-iphone-14-128gb-blue.html",
  "https://skay.ua/uk/iphone-14/58755-apple-iphone-14-128gb-midnight.html",
  "https://skay.ua/uk/iphone-14/61506-apple-iphone-14-128gb-yellow.html",

  "https://skay.ua/uk/iphone-14/58761-apple-iphone-14-256gb-starlight.html",
  "https://skay.ua/uk/iphone-14/58762-apple-iphone-14-256gb-product-red.html",
  "https://skay.ua/uk/iphone-14/58759-apple-iphone-14-256gb-purple.html",
  "https://skay.ua/uk/iphone-14/58758-apple-iphone-14-256gb-blue.html",
  "https://skay.ua/uk/iphone-14/58760-apple-iphone-14-256gb-midnight.html",
  "https://skay.ua/uk/iphone-14/61509-apple-iphone-14-256gb-yellow.html",


  "https://skay.ua/uk/iphone-14-plus/58772-apple-iphone-14-plus-128gb-starlight.html",
  "https://skay.ua/uk/iphone-14-plus/58773-apple-iphone-14-plus-128gb-product-red.html",
  "https://skay.ua/uk/iphone-14-plus/58770-apple-iphone-14-plus-128gb-purple.html",
  "https://skay.ua/uk/iphone-14-plus/58768-apple-iphone-14-plus-128gb-blue.html",
  "https://skay.ua/uk/iphone-14-plus/58771-apple-iphone-14-plus-128gb-midnight.html",
  "https://skay.ua/uk/iphone-14-plus/61507-apple-iphone-14-plus-128gb-yellow.html",

  "https://skay.ua/uk/iphone-14-plus/58777-apple-iphone-14-plus-256gb-starlight.html",
  "https://skay.ua/uk/iphone-14-plus/58778-apple-iphone-14-plus-256gb-product-red.html",
  "https://skay.ua/uk/iphone-14-plus/58775-apple-iphone-14-plus-256gb-purple.html",
  "https://skay.ua/uk/iphone-14-plus/58774-apple-iphone-14-plus-256gb-blue.html",
  "https://skay.ua/uk/iphone-14-plus/58776-apple-iphone-14-plus-256gb-midnight.html",
  "https://skay.ua/uk/iphone-14-plus/61511-apple-iphone-14-plus-256gb-yellow.html",

  "https://skay.ua/uk/iphone-13/53786-apple-iphone-13-128gb-midnight.html",
  "https://skay.ua/uk/iphone-13/53787-apple-iphone-13-128gb-starlight.html",
  "https://skay.ua/uk/iphone-13/53784-apple-iphone-13-128gb-pink.html",
  "https://skay.ua/uk/iphone-13/53785-apple-iphone-13-128gb-blue.html",
  "https://skay.ua/uk/iphone-13/57615-apple-iphone-13-128gb-green.html",

  "https://skay.ua/uk/iphone-13/53791-apple-iphone-13-256gb-midnight.html",
  "https://skay.ua/uk/iphone-13/53789-apple-iphone-13-256gb-pink.html",
  "https://skay.ua/uk/iphone-13/53790-apple-iphone-13-256gb-blue.html",
  "https://skay.ua/uk/iphone-13/57616-apple-iphone-13-256gb-green.html",

  "https://skay.ua/uk/iphone-11/32841-apple-iphone-11-128gb-white.html",
  "https://skay.ua/uk/iphone-11/32840-apple-iphone-11-128gb-black.html"
];
const arrLinkIstore14 = [
  "https://www.istore.ua/catalog/item/apple-iphone-14-128-gb-starlight/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-128-gb-red/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-128-gb-purple/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-128-gb-blue/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-128-gb-midnight/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-128-gb-yellow/",

  "https://www.istore.ua/catalog/item/apple-iphone-14-256-gb-starlight/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-256-gb-red/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-256-gb-purple/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-256-gb-blue/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-256-gb-midnight/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-256-gb-yellow/",

  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-128-gb-starlight/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-128-gb-red/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-128-gb-purple/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-128-gb-blue/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-128-gb-midnight/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-128-gb-yellow/",

  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-256-gb-starlight/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-256-gb-red/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-256-gb-purple/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-256-gb-blue/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-256-gb-midnight/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-256-gb-yellow/",



  

  "https://www.istore.ua/catalog/item/apple-iphone-13-128-gb-midnight/",
  "https://www.istore.ua/catalog/item/apple-iphone-13-128-gb-starlight/",
  "https://www.istore.ua/catalog/item/apple-iphone-13-128-gb-pink/",
  "https://www.istore.ua/catalog/item/apple-iphone-13-128-gb-blue/",
  "https://www.istore.ua/catalog/item/apple-iphone-13-128-gb-green/",
  "https://www.istore.ua/catalog/item/apple-iphone-13-128-gb-red/",

  "https://www.istore.ua/catalog/item/apple-iphone-13-256-gb-midnight/",
  "https://www.istore.ua/catalog/item/apple-iphone-13-256-gb-starlight/",
  "https://www.istore.ua/catalog/item/apple-iphone-13-256-gb-pink/",
  "https://www.istore.ua/catalog/item/apple-iphone-13-256-gb-blue/",
  "https://www.istore.ua/catalog/item/apple-iphone-13-256-gb-green/",
  "https://www.istore.ua/catalog/item/apple-iphone-13-256-gb-red/",

  "https://www.istore.ua/catalog/item/apple-iphone-11-mwl82/",
  "https://www.istore.ua/catalog/item/apple-iphone-11-mwlt2/",
  "https://www.istore.ua/catalog/item/apple-iphone-11-mwlf2/",
  "https://www.istore.ua/catalog/item/apple-iphone-11-mwle2/"
];
const arrLinkJabko14 = [
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-128gb--starlight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-128gb--midnight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-128gb--pink-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-128gb--blue-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-128gb-midnight",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-128gb--yellow-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-256gb--starlight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-256gb--red-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-256gb--pink-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-256gb--blue-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-256gb--midnight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-256gb--yellow-",

  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-128gb--starlight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-128gb--red-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-128gb--pink-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-128gb--blue-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-128gb--midnight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-plus-128gb--yellow-",

  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-256gb--starlight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-256gb--red-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-256gb--pink-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-256gb--blue-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-256gb--midnight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-plus-256gb--yellow-",


  "https://jabko.ua/rus/iphone/apple-iphone-13/apple-iphone-13-128gb-midnight",
  "https://jabko.ua/rus/iphone/apple-iphone-13/apple-iphone-13-128gb--starlight-",
  "https://jabko.ua/rus/iphone/apple-iphone-13/apple-iphone-13-128gb--pink-",
  "https://jabko.ua/rus/iphone/apple-iphone-13/apple-iphone-13-128gb--blue-",
  "https://jabko.ua/rus/iphone/apple-iphone-13/apple-iphone-13-128gb--green-",
  "https://jabko.ua/rus/iphone/apple-iphone-13/apple-iphone-13-128gb--product-red-",

  "https://jabko.ua/rus/iphone/apple-iphone-13/apple-iphone-13-256gb--black-",
  "https://jabko.ua/rus/iphone/apple-iphone-13/apple-iphone-13-256gb--starlight-",
  "https://jabko.ua/rus/iphone/apple-iphone-13/apple-iphone-13-256gb--pink-",
  "https://jabko.ua/rus/iphone/apple-iphone-13/apple-iphone-13-256gb--blue-",
  "https://jabko.ua/rus/iphone/apple-iphone-13/apple-iphone-13-256gb--green-",
  "https://jabko.ua/rus/iphone/apple-iphone-13/apple-iphone-13-256gb--product-red",

  "https://jabko.ua/rus/iphone/iphone-11/iphone-11-64gb--white---slim-box-",
  "https://jabko.ua/rus/iphone/iphone-11/iphone-11-64gb--black---slim-box-",
  "https://jabko.ua/rus/iphone/iphone-11/iphone-11-128gb--white---slim-box-",
  "https://jabko.ua/rus/iphone/iphone-11/iphone-11-128gb--black---slim-box-"
];



async function f() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  for (let i = 0; i < arrLinkMobilePlanet.length; i += 1) {
    await page.goto(arrLinkMobilePlanet[i]);
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
  for (let i = 0; i < arrLinkSkay14.length; i += 1) {
    await page.goto(arrLinkSkay14[i]);
    const n = await page.$("#txt");

    let arr1 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".products-item-cost") != null) {
        return (
          text2 + "S: " + document.querySelector(".products-item-cost").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr1);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkIstore14.length; i += 1) {
    await page.goto(arrLinkIstore14[i]);
    const n = await page.$("#txt");

    let arr4 = await page.evaluate(() => {
      let text3 = document.querySelector("h1").innerText;
      if (document.querySelector(".product_price ") != null) {
        return (
          text3 + "I: " + document.querySelector(".product_price ").innerText
        );
      } else {
        return text3;
      }
    });

    console.log(arr4);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkJabko14.length; i += 1) {
    await page.goto(arrLinkJabko14[i]);
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

  
}
f();
