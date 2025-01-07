console.log("Hello world");

const puppeteer = require("puppeteer");

const arrLinkSkayDyson = [
  "https://skay.ua/feny-i-stajlery/68208-fen-dyson-hd07-supersonic-hair-dryer-blacknickel-386816-01-eu.html?search_query=386816-01&results=2",
  "https://skay.ua/feny-i-stajlery/69721-fen-dyson-hd07-supersonic-hair-dryer-ceramic-pop-508245-01-eu.html",
  "https://skay.ua/feny-i-stajlery/67341-fen-dyson-hd07-supersonic-hair-dryer-special-gift-edition-blueblush-460555-01-eu.html?search_query=460555-01&results=1",
  "https://skay.ua/feny-i-stajlery/59002-fen-dyson-hd07-supersonic-hair-dryer-ironfuchsia-386732-01-eu.html",
  "https://skay.ua/feny-i-stajlery/60552-fen-dyson-hd07-supersonic-hair-dryer-nickelcopper-389922-01-eu.html",
  "https://skay.ua/feny-i-stajlery/67341-fen-dyson-hd07-supersonic-hair-dryer-special-gift-edition-blueblush-460555-01-eu.html",
  "https://skay.ua/feny-i-stajlery/67586-fen-dyson-hd07-supersonic-hair-dryer-special-gift-edition-ceramic-pop-508272-01-eu.html",
  "https://skay.ua/feny-i-stajlery/64499-fen-dyson-hd07-supersonic-hair-dryer-special-gift-edition-prussian-bluerich-copper-412525-01-eu.html?search_query=412525-01&results=1",
  "https://skay.ua/feny-i-stajlery/62616-fen-dyson-hd07-supersonic-hair-dryer-special-gift-edition-rednickel-397704-01-eu.html",
  "https://skay.ua/uk/feny-i-stajlery/60442-fen-dyson-hd07-supersonic-hair-dryer-special-gift-edition-vinca-bluerose-426081-01-eu.html",
  "https://skay.ua/feny-i-stajlery/67074-fen-dyson-hd07-supersonic-origin-hair-dryer-blacknickel-475202-01-eu.html",
  "https://skay.ua/feny-i-stajlery/65325-professionalnyj-fen-dyson-hd11-professional-supersonic-hair-dryer-nickelnickel-392966-01-eu.html"
];
const arrLinkJabkoDyson = [
  "https://jabko.ua/gadzheti-i-drugoe/dyson/feni-dyson/fen-dlja-volos-dyson-supersonic-hd07--black-nickel---386816-01-",
  "https://jabko.ua/gadzheti-i-drugoe/dyson/feni-dyson/fen-dlja-volos-dyson-supersonic-blue-blush-gift-edition--460555-01-",
  "https://jabko.ua/gadzheti-i-drugoe/dyson/feni-dyson/fen-dlja-volos-dyson-supersonic-hd07-c-nasadkoj-dlja-viprjamlenija---fuksija---5-nasadok---386732-01-",
  "https://jabko.ua/gadzheti-i-drugoe/dyson/feni-dyson/fen-dlja-volos-dyson-supersonic-hd07-nickel-copper--389922-01-",
  "https://jabko.ua/gadzheti-i-drugoe/dyson/feni-dyson/fen-dlja-volos-dyson-supersonic-blue-blush-gift-edition--460555-01-",
  "https://jabko.ua/gadzheti-i-drugoe/dyson/feni-dyson/dyson-supersonic-hd15-ceramic-pop-508272-01",
  "https://jabko.ua/gadzheti-i-drugoe/dyson/feni-dyson/fen-dlja-volos-dyson-supersonic-hd07-special-gift-edition-prussian-blue-rich-copper",
  "https://jabko.ua/gadzheti-i-drugoe/dyson/feni-dyson/fen-dlja-volos-dyson-supersonic-hd07",
  "https://jabko.ua/gadzheti-i-drugoe/dyson/feni-dyson/fen-dlya-volossya-dyson-hd07-supersonic-origin-blacknickel-475202-01",
  "https://jabko.ua/gadzheti-i-drugoe/dyson/feni-dyson/fen-dyson-supersonic-hd11-professional-edition-nickel-nickel--392966-01-"
];
const arrLinkTouchDyson = [
  "https://touch.com.ua/ua/item/dyson-hd15-supersonic-ceramic-pop-508245-01-fen/",
  "https://touch.com.ua/ua/item/dyson-hd07-supersonic-blue-blush-gift-edition-2023-460555-01-fen/",
  "https://touch.com.ua/ua/item/dyson-hd07-supersonic-nikel-sooper-fen/",
  "https://touch.com.ua/ua/item/dyson-hd07-supersonic-blue-blush-gift-edition-2023-460555-01-fen/",
  "https://touch.com.ua/ua/item/dyson-hd15-supersonic-ceramic-pop-508272-01-fen/",
  "https://touch.com.ua/ua/item/fen-dyson-hd07-special-gift-edition-prussian-blue-rich-copper/",
  "https://touch.com.ua/ua/item/dyson-supersonic-hd07-limited-edition-violet-blue-rose-fen/",
  "https://touch.com.ua/ua/item/dyson-supersonic-hd11-professional-edition-nickel-nickel-392966-01-fen/"
];
const arrLinkStoreInUADyson = [
  "https://storeinua.com/ua/krasa-ta-zdorovya/dohliad-za-volossiam-ua/feni/fen-dyson-hd07-supersonic-black-nickel-386816-01.html",
  "https://storeinua.com/ua/krasa-ta-zdorovya/dohliad-za-volossiam-ua/feni/fen-dyson-hd07-supersonic-blue-blush-gift-edition-2023-460555-01.html",
  "https://storeinua.com/ua/krasa-ta-zdorovya/dohliad-za-volossiam-ua/feni/fen-dyson-supersonic-hd07-nikel-fuchsia-ua.html",
  "https://storeinua.com/ua/krasa-ta-zdorovya/dohliad-za-volossiam-ua/feni/fen-dyson-hd07-supersonic-nickel-copper-389922-01.html",
  "https://storeinua.com/ua/krasa-ta-zdorovya/dohliad-za-volossiam-ua/feni/fen-dyson-hd07-supersonic-blue-blush-gift-edition-2023-460555-01.html",
  "https://storeinua.com/ua/krasa-ta-zdorovya/dohliad-za-volossiam-ua/feni/fen-dyson-supersonic-ceramic-pop-508272-01.html",
  "https://storeinua.com/ua/krasa-ta-zdorovya/dohliad-za-volossiam-ua/feni/fen-fen-dyson-hd07-supersonic-prussian-blue-rich-copper-412525-01.html",
  "https://storeinua.com/ua/krasa-ta-zdorovya/dohliad-za-volossiam-ua/feni/fen-dyson-hd07-supersonic-limited-edition-vinca-blue-rose-426081-01-ua.html",
  "https://storeinua.com/ua/krasa-ta-zdorovya/dohliad-za-volossiam-ua/feni/fen-dyson-hd07-supersonic-origin-black-nickel-475202-01.html"
];
const arrLinkEstoreDyson = [
  "https://estore.ua/ua/fen-dyson-hd07-supersonic-black-nickel-garantija-3-mes/?q=386816-01",
  "https://estore.ua/ua/fen-dyson-supersonic-ceramic-pop-508245-01-garantija-3-mes/?q=508245-01",
  "https://estore.ua/ua/fen-dyson-hd07-supersonic-blueblush-gift-edition-2023-460555-01-garantiya-3-mes/?q=460555-01",
  "https://estore.ua/ua/fen-dyson-hd07-supersonic-hair-dryer-iron-fuchsia-garantija-3-mes/?q=386732-01",
  "https://estore.ua/ua/fen-dyson-hd07-supersonic-nickel-copper-389922-01-garantija-3-mes/?q=389922-01",
  "https://estore.ua/ua/fen-dyson-hd07-supersonic-blueblush-gift-edition-2023-460555-01-garantiya-3-mes/?q=460555-01",
  "https://estore.ua/ua/fen-dyson-supersonic-ceramic-pop-508245-01-garantija-3-mes/?q=508272-01",
  "https://estore.ua/ua/fen-dyson-hd07-supersonic-prussian-blue-rich-copper-412525-01-garantija-3-mes/?q=412525-01",
  "https://estore.ua/ua/fen-dyson-hd07-supersonic-limited-edition-vinca-blue-rose-426081-01-garantija-3-mes/?q=426081-01",
  "https://estore.ua/ua/fen-dyson-hd07-supersonic-origin-blacknickel-475202-01-garantiya-3-mes/?q=475202-01",
  "https://estore.ua/ua/fen-dyson-supersonic-hd11-professional-edition-nickelnickel-392966-01-garantiya-3-mes/?q=392966-01"
];
const arrLinkTIDyson = [
  "https://ti.ua/ua/apple-iphone-15-pro-128-gb-black-titanium-kupit.html",
  "https://ti.ua/ua/fen-dyson-hd07-supersonic-nickel-copper.html",
  "https://ti.ua/ua/multistayler-dyson-airwrap-multi-styler-complete-limited-edition-vinca-blue-rose.html",
];
const arrLinkIpeopleDyson = [
  "https://www.ipeople.in.ua/products/dyson-hd07-supersonic-blacknickel-386816-01",
  "https://www.ipeople.in.ua/products/dyson-hd07-supersonic-blueblush-gift-edition-2023-460555-01",
  "https://www.ipeople.in.ua/products/dyson-supersonic-hd-07-ironfuchsia",
  "https://www.ipeople.in.ua/products/dyson-hd07-supersonic-nickelcopper-389922-01",
  "https://www.ipeople.in.ua/products/dyson-hd07-supersonic-blueblush-gift-edition-2023-460555-01",
  "https://www.ipeople.in.ua/products/dyson-supersonic-hd07-ceramic-pop-508272-01",
  "https://www.ipeople.in.ua/products/dyson-hd07-supersonic-limited-edition-vinca-bluerose-426081-01",
  "https://www.ipeople.in.ua/products/dyson-hd07-supersonic-origin-blacknickel-475202-01",
  "https://www.ipeople.in.ua/products/dyson-supersonic-hd11-pro-nickelnickel-392966-01"
];
const arrLinkSotaDyson = [
  "https://sota.kh.ua/ua/fen-dyson-hd07-supersonic-nickel-copper-389922-01-118532.html",
  "https://sota.kh.ua/ua/stajler-dyson-airwrap-complete-long-limited-edition-vinca-blue-rose-426132-01-118752.html",
];
const arrLinkPCShopDyson = [
  "https://pcshop.ua/ua/bitovaya-tehnika/tehnika-dlya-personalnogo-uhoda/feni/fen-dyson-supersonic-hd07-black-nickel",
  "https://pcshop.ua/ua/bitovaya-tehnika/tehnika-dlya-personalnogo-uhoda/feni/fen-dyson-supersonic-hd07-limited-gift-edition-blue-rose-460555-01",
  "https://pcshop.ua/ua/bitovaya-tehnika/tehnika-dlya-personalnogo-uhoda/feni/fen-dyson-supersonic-hd07-fuchsia-386732-01",
  "https://pcshop.ua/ua/bitovaya-tehnika/tehnika-dlya-personalnogo-uhoda/feni/fen-dyson-supersonic-hd07-nickel-copper-389922-01",
  "https://pcshop.ua/ua/bitovaya-tehnika/tehnika-dlya-personalnogo-uhoda/feni/fen-dyson-supersonic-hd07-limited-gift-edition-blue-rose-460555-01",
  "https://pcshop.ua/ua/bitovaya-tehnika/tehnika-dlya-personalnogo-uhoda/feni/fen-dyson-supersonic-hd15-special-edition-ceramic-pop-508272-01",
  "https://pcshop.ua/ua/bitovaya-tehnika/tehnika-dlya-personalnogo-uhoda/feni/fen-dyson-supersonic-hd07-prussian-blue-rich-copper",
  "https://pcshop.ua/ua/bitovaya-tehnika/tehnika-dlya-personalnogo-uhoda/feni/fen-dyson-supersonic-supersonic-hd07-limited-edition-vinca-blue-rose-426081-01",
  "https://pcshop.ua/ua/bitovaya-tehnika/tehnika-dlya-personalnogo-uhoda/feni/fen-dyson-supersonic-hd07-origin-black-nickel-475202-01"
];
const arrLinkIpodRomDyson = [
  "https://ipodrom.ua/fen-dyson-hd07-supersonic-black-nickel-386816-01/",
  "https://ipodrom.ua/fen-dyson-supersonic-hd07-gift-edition-blue-blush-eu-460555-01/",
  "https://ipodrom.ua/dyson-supersonic-hd07-iron-fuchsia-386732-01/",
  "https://ipodrom.ua/fen-dyson-hd07-supersonic-nickel-copper-389922-01/",
  "https://ipodrom.ua/fen-dyson-supersonic-hd07-gift-edition-blue-blush-eu-460555-01/",
  "https://ipodrom.ua/gadzhety/dyson/feny-dyson/4054/",
  "https://ipodrom.ua/fen-dyson-hd07-supersonic-limited-edition-vinca-blue-rose-426081-01/"
];

async function f() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  // for (let i = 0; i < arrLinkSkayDyson.length; i += 1) {
  //   await page.goto(arrLinkSkayDyson[i]);
  //   const n = await page.$("#txt");

  //   let arr1 = await page.evaluate(() => {
  //     let text2 = document.querySelector("h1").innerText;
  //     if (document.querySelector("#our_price_display") != null) {
  //       return (
  //         text2 + "S: " + document.querySelector("#our_price_display").innerText
  //       );
  //     } else {
  //       return text2;
  //     }
  //   });

  //   console.log(arr1);
  //   await page.setDefaultNavigationTimeout(0);
  // }
  // for (let i = 0; i < arrLinkJabkoDyson.length; i += 1) {
  //   await page.goto(arrLinkJabkoDyson[i]);
  //   const n = await page.$("#txt");

  //   let arr2 = await page.evaluate(() => {
  //     let text2 = document.querySelector("h1").innerText;
  //     if (document.querySelector(".price-new__uah") != null) {
  //       return (
  //         text2 + "J: " + document.querySelector(".price-new__uah").innerText
  //       );
  //     } else {
  //       return text2;
  //     }
  //   });

  //   console.log(arr2);
  //   await page.setDefaultNavigationTimeout(0);
  // }
  // for (let i = 0; i < arrLinkTouchDyson.length; i += 1) {
  //   await page.goto(arrLinkTouchDyson[i]);
  //   const n = await page.$("#txt");

  //   let arr2 = await page.evaluate(() => {
  //     let text2 = document.querySelector("h1").innerText;
  //     if (document.querySelector(".price") != null) {
  //       return text2 + "Touch: " + document.querySelector(".price").innerText;
  //     } else {
  //       return text2;
  //     }
  //   });

  //   console.log(arr2);
  //   await page.setDefaultNavigationTimeout(0);
  // }
  // for (let i = 0; i < arrLinkStoreInUADyson.length; i += 1) {
  //   await page.goto(arrLinkStoreInUADyson[i]);
  //   const n = await page.$("#txt");

  //   let arr2 = await page.evaluate(() => {
  //     let text2 = document.querySelector("h1").innerText;
  //     if (document.querySelector(".product-prices__row div") != null) {
  //       return (
  //         text2 +
  //         "StoreInUA: " +
  //         document.querySelector(".product-prices__row div").innerText
  //       );
  //     } else {
  //       return text2;
  //     }
  //   });

  //   console.log(arr2);
  //   await page.setDefaultNavigationTimeout(0);
  // }
  // for (let i = 0; i < arrLinkEstoreDyson.length; i += 1) {
  //   await page.goto(arrLinkEstoreDyson[i]);
  //   const n = await page.$("#txt");

  //   let arr2 = await page.evaluate(() => {
  //     let text2 = document.querySelector("h1").innerText;
  //     if (document.querySelector("p .price") != null) {
  //       return (
  //         text2 + "Estore: " + document.querySelector("p .price").innerText
  //       );
  //     } else {
  //       return text2;
  //     }
  //   });

  //   console.log(arr2);
  //   await page.setDefaultNavigationTimeout(0);
  // }
  // for (let i = 0; i < arrLinkIpodRomDyson.length; i += 1) {
  //   await page.goto(arrLinkIpodRomDyson[i]);
  //   const n = await page.$("#txt");

  //   let arr2 = await page.evaluate(() => {
  //     let text2 = document.querySelector("h1").innerText;
  //     if (document.querySelector(".product-price__item") != null) {
  //       return (
  //         text2 +
  //         "IpodRom: " +
  //         document.querySelector(".product-price__item").innerText
  //       );
  //     } else {
  //       return text2;
  //     }
  //   });

  //   console.log(arr2);
  //   await page.setDefaultNavigationTimeout(0);
  // }
  // for (let i = 0; i < arrLinkPCShopDyson.length; i += 1) {
  //   await page.goto(arrLinkPCShopDyson[i]);
  //   const n = await page.$("#txt");

  //   let arr2 = await page.evaluate(() => {
  //     let text2 = document.querySelector("h1").innerText;
  //     if (document.querySelector(".product-info__price") != null) {
  //       return (
  //         text2 +
  //         "PCShop: " +
  //         document.querySelector(".product-info__price").innerText
  //       );
  //     } else {
  //       return text2;
  //     }
  //   });

  //   console.log(arr2);
  //   await page.setDefaultNavigationTimeout(0);
  // }
  // for (let i = 0; i < arrLinkIpeopleDyson.length; i += 1) {
  //   await page.goto(arrLinkIpeopleDyson[i]);
  //   const n = await page.$("#txt");

  //   let arr2 = await page.evaluate(() => {
  //     let text2 = document.querySelector(".header h3").innerText;
  //     if (document.querySelector(".uah") != null) {
  //       return text2 + "Ipeople: " + document.querySelector(".uah").innerText;
  //     } else {
  //       return text2;
  //     }
  //   });

  //   console.log(arr2);
  //   await page.setDefaultNavigationTimeout(0);
  // }

  //////Good

  // for (let i = 0; i < arrLinkSotaDyson.length; i += 1) {
  //   await page.goto(arrLinkSotaDyson[i]);
  //   const n = await page.$("#txt");

  //   let arr12 = await page.evaluate(() => {
  //     let text2 = document.querySelector("h1").innerText;
  //     if(document.getElementById("status") != null){
  //       let idPost=document.getElementById("status").innerHTML;
  //   }
  //     if (document.querySelector(".price-new") != null) {
  //       return text2 + "Sota: " + document.querySelector(".price-new").innerText;
  //     } else {
  //       return;
  //     }
  //   });

  //   console.log(arr12);
  // }
  for (let i = 0; i < arrLinkTIDyson.length; i += 1) {
    await page.goto(arrLinkTIDyson[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-uah") != null) {
        return text2 + "TI: " + document.querySelector(".price-uah").innerText;
      } else {
        return text2;
      }
    });

    console.log(arr2);
  }
}
f();
