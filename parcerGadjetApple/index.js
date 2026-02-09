console.log("Hello world");

const puppeteer = require("puppeteer");

const arrLinkGroGadjetApple = [
    "https://grokholsky.com/ua/product/apple/accessories/airtag/apple-airtag-mx532/",
"https://grokholsky.com/ua/product/apple/accessories/airtag/apple-airtag-4-pack-mx542/",
 "https://grokholsky.com/ua/product/apple/accessories/pencil/nakonechniki-dlya-stilusa-apple-pencil-tips-mlun2/",
"https://grokholsky.com/ua/product/apple/accessories/pencil/pencil-pro-mx2d3/",
"https://grokholsky.com/ua/product/apple/accessories/pencil/pencil-usb-c-muwa3/",
"https://grokholsky.com/ua/product/apple/accessories/pencil/pencil-mqly3/",
"https://grokholsky.com/ua/product/apple/accessories/pencil/pencil-2-for-ipad-pro/",
"https://grokholsky.com/ua/product/apple/accessories/myshka/magic-mouse-2021-mk2e3/",
"https://grokholsky.com/ua/product/apple/accessories/myshka/magic-mouse-black-mmmq3/",
"https://grokholsky.com/ua/product/apple/accessories/myshka/misha-apple-magic-mouse-usb-c-white-multi-touch-surface-mxk53/",
"https://grokholsky.com/ua/product/apple/accessories/myshka/misha-apple-magic-mouse-usb-c-black-multi-touch-surface-mxk63/",
"https://grokholsky.com/ua/product/apple/accessories/myshka/tachpad-apple-magic-trackpad-usb-c-white-multi-touch-surface-mxk93/",
"https://grokholsky.com/ua/product/apple/accessories/myshka/tachpad-apple-magic-trackpad-usb-c-black-multi-touch-surface-mxka3/",
"https://grokholsky.com/ua/product/apple/accessories/myshka/magic-trackpad-2021-mk2d3/",
"https://grokholsky.com/ua/product/apple/accessories/myshka/magic-keyboard-2021-mk2a3/",
"https://grokholsky.com/ua/product/apple/accessories/myshka/klaviatura-apple-magic-keyboard-usb-c-white-mxcl3/",
"https://grokholsky.com/ua/product/apple/accessories/myshka/klaviatura-apple-magic-keyboard-with-touch-id-for-mac-models-with-apple-silicon-usb-c-mxck3/",
"https://grokholsky.com/ua/product/apple/accessories/myshka/magic-keyboard-with-touch-id-for-mac-models-with-apple-silicon-mk293/",
"https://grokholsky.com/ua/product/apple/accessories/myshka/magic-keyboard-with-touch-id-and-numeric-keypad-for-mac-models-with-apple-silicon-mmmr3/",
"https://grokholsky.com/ua/product/apple/accessories/myshka/klaviatura-apple-magic-keyboard-with-touch-id-and-numeric-keypad-for-mac-with-apple-silicon-usb-c-black-keys-mxk83/", 
"https://grokholsky.com/ua/product/apple/accessories/klaviatura/magic-keyboard-folio-for-ipad-10th-gen-mqdp3/",
"https://grokholsky.com/ua/product/apple/accessories/klaviatura/chohol-klaviatura-dlya-plansheta-apple-magic-keyboard-for-ipad-air-11-inch-m3-mdfv4/",
"https://grokholsky.com/ua/product/apple/accessories/klaviatura/chohol-klaviatura-dlya-plansheta-apple-magic-keyboard-for-ipad-air-13-inch-m3-mdfw4/",
"https://grokholsky.com/ua/product/apple/accessories/klaviatura/chehol-magic-keyboard-for-ipad-pro-11-m4-white-mwr03/",
"https://grokholsky.com/ua/product/apple/accessories/klaviatura/chehol-magic-keyboard-for-ipad-pro-11-m4-black-mwr23/",
"https://grokholsky.com/ua/product/apple/accessories/klaviatura/chehol-magic-keyboard-for-ipad-pro-13-m4-white-mwr43/",
"https://grokholsky.com/ua/product/apple/accessories/klaviatura/chehol-magic-keyboard-for-ipad-pro-13-m4-black-mwr53/",
"https://grokholsky.com/ua/product/apple/accessories/apple-tv/tv-4k-2022-wi-fi-ethernet-128-gb-mn893/",
"https://grokholsky.com/ua/product/apple/accessories/apple-tv/tv-4k-2022-wi-fi-64-gb-mn873/", 
"https://grokholsky.com/ua/product/apple/accessories/homepod/homepod-mini-white-my5h2/",
"https://grokholsky.com/ua/product/apple/accessories/homepod/smart-kolonka-apple-homepod-mini-midnight-mtjt3/",
"https://grokholsky.com/ua/product/apple/accessories/homepod/homepod-mini-blue-mj2c3/",
"https://grokholsky.com/ua/product/apple/accessories/homepod/homepod-mini-yellow-mj2e3/",
"https://grokholsky.com/ua/product/apple/accessories/homepod/homepod-mini-orange-mj2d3/",
"https://grokholsky.com/ua/product/apple/accessories/homepod/homepod-mini-space-gray-my5g2/",
"https://www.google.com",
"https://grokholsky.com/ua/product/apple/accessories/homepod/homepod-2-white-mqj83-mqja3/",
"https://grokholsky.com/ua/product/apple/accessories/homepod/homepod-2-midnight-mqj73-mqj93/",
]

const arrLinkJabkoGadjetApple = [
     "https://jabko.ua/gadzheti-i-drugoe/apple-airtag212/apple-airtag",
"https://jabko.ua/gadzheti-i-drugoe/apple-airtag212/apple-airtag-4-pack--mx542-",
"https://jabko.ua/aksessuari/aksessuari-dlja-ipad/apple-pencil/apple-pencil-tips--4-sht-",
 "https://jabko.ua/aksessuari/aksessuari-dlja-ipad/apple-pencil/apple-pencil-2024",
"https://jabko.ua/aksessuari/aksessuari-dlja-ipad/apple-pencil/apple-pencil-usb-c-2023",
"https://jabko.ua/aksessuari/aksessuari-dlja-ipad/apple-pencil/apple-pencil-for-ipad--mqly3-",
"https://jabko.ua/aksessuari/aksessuari-dlja-ipad/apple-pencil/apple-pencil-2--mu8f2-",
"https://jabko.ua/aksessuari/aksessuari-dlja-mac/pereferija/mish-apple-magic-mouse-3-silver--mk2e3-",
"https://jabko.ua/aksessuari/aksessuari-dlja-mac/pereferija/apple-magic-mouse--black---2022---mmmq3-",
"https://jabko.ua/aksessuari/aksessuari-dlja-mac/pereferija/mysha-apple-magic-mouse-usb%E2%80%91c-white-2024-mxk53",
"https://jabko.ua/aksessuari/aksessuari-dlja-mac/pereferija/mysha-apple-magic-mouse-usb%E2%80%91c-black-2024-mxk63am",
"https://jabko.ua/aksessuari/aksessuari-dlja-mac/pereferija/apple-magic-trackpad-usb%E2%80%91c-white-2024-mxk93",
"https://jabko.ua/aksessuari/aksessuari-dlja-mac/pereferija/apple-magic-trackpad-usb%E2%80%91c-black-2024-mxka3",
"https://jabko.ua/aksessuari/aksessuari-dlja-mac/pereferija/apple-magic-trackpad-2021-silver--",
"https://jabko.ua/aksessuari/aksessuari-dlja-mac/pereferija/klaviatura-apple-magic-keyboard-3",
"https://jabko.ua/aksessuari/aksessuari-dlja-mac/pereferija/klaviatura-apple-magic-keyboard-usb-c-white-2024-mxcl3",
"https://jabko.ua/aksessuari/aksessuari-dlja-mac/pereferija/klaviatura-apple-magic-keyboard-with-touch-id-for-mac-models-with-apple-silicon-usb-c-white-2024-mxck3",
"https://jabko.ua/aksessuari/aksessuari-dlja-mac/pereferija/klaviatura-magic-keyboard-with-touch-id--mk293-",
"https://jabko.ua/aksessuari/aksessuari-dlja-mac/pereferija/polnorazmernaja-klaviatura-apple-magic-keyboard-with-touch-id-and-numeric-keypad-for-mac-with-apple-silicon--m1---mmmr3-",
"https://jabko.ua/aksessuari/aksessuari-dlja-mac/pereferija/povnorozmirna-klaviatura-apple-magic-keyboard-with-touch-id-usb-c-black-2024-mxk83", 
"https://jabko.ua/aksessuari/aksessuari-dlja-ipad/klaviaturi-i-apple-pencil/klaviatura-magic-keyboard-folio-dlja-ipad-10-9--white-",
"https://jabko.ua/aksessuari/aksessuari-dlja-ipad/klaviaturi-i-apple-pencil/klaviatura-magic-keyboard-dlya-ipad-air-11-m3-white-mdfv4",
"https://jabko.ua/aksessuari/aksessuari-dlja-ipad/klaviaturi-i-apple-pencil/klaviatura-magic-keyboard-dlya-ipad-air-13-m3-white-mdfw4",
"https://jabko.ua/aksessuari/aksessuari-dlja-ipad/klaviaturi-i-apple-pencil/klaviatura-magic-keyboard-dlya-ipad-pro-11-white-2024",
"https://jabko.ua/aksessuari/aksessuari-dlja-ipad/klaviaturi-i-apple-pencil/klaviatura-magic-keyboard-dlya-ipad-pro-11-black-2024",
"https://jabko.ua/aksessuari/aksessuari-dlja-ipad/klaviaturi-i-apple-pencil/klaviatura-magic-keyboard-dlya-ipad-pro-13-white-2024",
"https://jabko.ua/aksessuari/aksessuari-dlja-ipad/klaviaturi-i-apple-pencil/klaviatura-magic-keyboard-dlya-ipad-pro-13-black-2024",
"https://jabko.ua/gadzheti-i-drugoe/gadzheti-apple/apple-tv/apple-tv-4k-128gb--wi-fi---ethernet---2022-",
"https://jabko.ua/gadzheti-i-drugoe/gadzheti-apple/apple-tv/apple-tv-4k-64gb--wi-fi-2022-", 
"https://jabko.ua/gadzheti-i-drugoe/gadzheti-apple/apple-homepod/apple-homepod-mini--white-",
"https://jabko.ua/gadzheti-i-drugoe/gadzheti-apple/apple-homepod/apple-homepod-mini-midnight-mtjt3",
"https://jabko.ua/gadzheti-i-drugoe/gadzheti-apple/apple-homepod/apple-homepod-mini--blue-",
"https://jabko.ua/gadzheti-i-drugoe/gadzheti-apple/apple-homepod/apple-homepod-mini--yellow-",
"https://jabko.ua/gadzheti-i-drugoe/gadzheti-apple/apple-homepod/apple-homepod-mini--orange-",
"https://jabko.ua/gadzheti-i-drugoe/gadzheti-apple/apple-homepod/apple-homepod-mini",
"https://www.google.com",
"https://jabko.ua/gadzheti-i-drugoe/gadzheti-apple/apple-homepod/apple-homepod-2--white---mqj83-",
"https://jabko.ua/gadzheti-i-drugoe/gadzheti-apple/apple-homepod/apple-homepod-2--midnight---mqj73-",
]

const arrLinkYuaGadjetApple = [
]

const arrLinkTouchGadjetApple = [
]

async function f() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.setDefaultTimeout(0);

  
  for (let i = 0; i < arrLinkGroGadjetApple.length; i += 1) {
    await page.goto(arrLinkGroGadjetApple[i]);
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
  
  for (let i = 0; i < arrLinkJabkoGadjetApple.length; i += 1) {
  try {
    await page.goto(arrLinkJabkoGadjetApple[i], { waitUntil: "domcontentloaded", timeout: 30000 });

    const result = await page.evaluate(() => {
      const clean = (t) => t?.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();

      const title = clean(document.querySelector("h1")?.innerText) || "⚠️ Нет H1";
      const price = clean(document.querySelector(".price-new__uah")?.innerText);

      return price ? `${title} J: ${price}` : `${title} — нет цены`;
    });

    console.log(result);
  } catch (err) {
    console.log("❌ Ошибка страницы:", arrLinkJabkoGadjetApple[i]);
    console.log(err.message);
  }
  }
 
  for (let i = 0; i < arrLinkYuaGadjetApple.length; i += 1) {
    await page.goto(arrLinkYuaGadjetApple[i]);
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

  for (let i = 0; i < arrLinkTouchGadjetApple.length; i += 1) {
    await page.goto(arrLinkTouchGadjetApple[i]);
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



}
f();
