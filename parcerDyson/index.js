console.log("Hello world");

const puppeteer = require("puppeteer");

const arrLinkSkayDyson = [
  'https://skay.ua/uk/feny-i-stajlery/60442-fen-dyson-hd07-supersonic-hair-dryer-special-gift-edition-vinca-bluerose-426081-01-eu.html'
];
const arrLinkJabkoDyson = [
  "https://jabko.ua/rus/gadzheti-i-drugoe/dyson/feni-dyson/fen-dlja-volos-dyson-supersonic-hd07-c-nasadkoj-dlja-viprjamlenija---fuksija---5-nasadok---386732-01-",
  "https://jabko.ua/rus/gadzheti-i-drugoe/dyson/feni-dyson/fen-dlja-volos-dyson-supersonic-hd07",
  "https://jabko.ua/rus/gadzheti-i-drugoe/dyson/stajleri-dyson/stajler-dlja-dlinnih-volos-dyson-airwrap-multi-styler-complete-long--prussian-blue-rich-copper-",
];
const arrLinkTouchDyson = [
  "https://touch.com.ua/item/fen-dyson-hd07-supersonic-iron-fuchsia/",
  "https://touch.com.ua/item/dyson-supersonic-hd11-professional-edition-nickel-nickel-392966-01-fen/",
  "https://touch.com.ua/item/dyson-airwrap-styler-complete-nikel-cooper-fen-stayler/",
];
const arrLinkStoreInUADyson = [
  "https://storeinua.com/ua/krasa-ta-zdorovya/feni/fen-dyson-hd07-supersonic-nickel-copper-389922-01.html",
  "https://storeinua.com/ua/krasa-ta-zdorovya/feni/fen-hd07-supersonic-hair-dryer-iron-fuchsia.html",
];
const arrLinkEstoreDyson = [
  "https://estore.ua/ua/fen-dyson-hd07-supersonic-nickel-copper-389922-01-garantija-3-mes/",
  "https://estore.ua/ua/fen-stajler-dyson-airwrap-complete-long-nickel-copper-400718-01-garantija-3-mes/",
];
const arrLinkTIDyson = [
  "https://ti.ua/ua/fen-dyson-hd07-supersonic-nickel-copper.html",
  "https://ti.ua/ua/multistayler-dyson-airwrap-multi-styler-complete-limited-edition-vinca-blue-rose.html",
];
const arrLinkIpeopleDyson = [
  "https://www.ipeople.in.ua/products/dyson-hd07-supersonic-nickelcopper-389922-01",
  "https://www.ipeople.in.ua/products/stajler-dyson-airwrap-complete-long-prussian-bluerich-copper-395899-01",
];
const arrLinkSotaDyson = [
  "https://sota.kh.ua/ua/fen-dyson-hd07-supersonic-nickel-copper-389922-01-118532.html",
  "https://sota.kh.ua/ua/stajler-dyson-airwrap-complete-long-limited-edition-vinca-blue-rose-426132-01-118752.html",
];
const arrLinkPCShopDyson = [
  "https://pcshop.ua/ua/bitovaya-tehnika/tehnika-dlya-personalnogo-uhoda/feni/fen-dyson-supersonic-hd07-nickel-copper-389922-01",
  "https://pcshop.ua/ua/bitovaya-tehnika/tehnika-dlya-personalnogo-uhoda/feni/fen-stajler-dyson-airwrap-multi-styler-complete-long-nickel-copper-400718-01",
];
const arrLinkIpodRomDyson = [
  "https://ipodrom.ua/ru/fen-dyson-hd07-supersonic-nickel-copper-389922-01/",
  "https://ipodrom.ua/ru/fen-dyson-hd07-supersonic-limited-edition-vinca-blue-rose-426081-01/",
];

async function f() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  for (let i = 0; i < arrLinkSkayDyson.length; i += 1) {
    await page.goto(arrLinkSkayDyson[i]);
    const n = await page.$("#txt");

    let arr1 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector("#our_price_display") != null) {
        return (
          text2 + "S: " + document.querySelector("#our_price_display").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr1);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkJabkoDyson.length; i += 1) {
    await page.goto(arrLinkJabkoDyson[i]);
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
  for (let i = 0; i < arrLinkTouchDyson.length; i += 1) {
    await page.goto(arrLinkTouchDyson[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price") != null) {
        return text2 + "Touch: " + document.querySelector(".price").innerText;
      } else {
        return text2;
      }
    });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkStoreInUADyson.length; i += 1) {
    await page.goto(arrLinkStoreInUADyson[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".product-prices__row div") != null) {
        return (
          text2 +
          "StoreInUA: " +
          document.querySelector(".product-prices__row div").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkEstoreDyson.length; i += 1) {
    await page.goto(arrLinkEstoreDyson[i]);
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
  for (let i = 0; i < arrLinkIpodRomDyson.length; i += 1) {
    await page.goto(arrLinkIpodRomDyson[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".product-price__item") != null) {
        return (
          text2 +
          "IpodRom: " +
          document.querySelector(".product-price__item").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkPCShopDyson.length; i += 1) {
    await page.goto(arrLinkPCShopDyson[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".product-info__price") != null) {
        return (
          text2 +
          "PCShop: " +
          document.querySelector(".product-info__price").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkIpeopleDyson.length; i += 1) {
    await page.goto(arrLinkIpeopleDyson[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector(".header h3").innerText;
      if (document.querySelector(".uah") != null) {
        return text2 + "Ipeople: " + document.querySelector(".uah").innerText;
      } else {
        return text2;
      }
    });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }

  // for (let i = 0; i < arrLinkSotaDyson.length; i += 1) {
  //   await page.goto(arrLinkSotaDyson[i]);
  //   const n = await page.$("#txt");

  //   let arr12 = await page.evaluate(() => {
  //     let text2 = document.querySelector("h1").innerText;
  //     if (document.querySelector(".cash") != null) {
  //       return text2 + "Sota: " + document.querySelector(".cash").innerText;
  //     } else {
  //       return;
  //     }
  //   });

  //   console.log(arr12);
  // }
  // for (let i = 0; i < arrLinkTIDyson.length; i += 1) {
  //   await page.goto(arrLinkTIDyson[i]);
  //   const n = await page.$("#txt");

  //   let arr2 = await page.evaluate(() => {
  //     let text2 = document.querySelector("h1").innerText;
  //     if (document.querySelector(".price-uah") != null) {
  //       return text2 + "TI: " + document.querySelector(".price-uah").innerText;
  //     } else {
  //       return text2;
  //     }
  //   });

  //   console.log(arr2);
  // }
  
}
f();
