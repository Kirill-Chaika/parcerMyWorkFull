console.log("Hello world");

const puppeteer = require("puppeteer");




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
    'https://jabko.ua/iphone/apple-iphone-15-/apple-iphone-15-256gb-yellow'
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
    'https://mobileplanet.ua/apple-iphone-15-256gb-yellow-mtp83-285362'
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
    'https://www.istore.ua/catalog/item/apple-iphone-15-256-gb-yellow/'
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

async function f() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();



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
  for (let i = 0; i < arrLinkEstore15ProAndProMax.length; i += 1) {
    await page.goto(arrLinkEstore15ProAndProMax[i]);
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
  for (let i = 0; i < arrLinkEstore15.length; i += 1) {
    await page.goto(arrLinkEstore15[i]);
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

}
f();
