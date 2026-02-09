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
"https://example.com/",
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
"https://www.google.com/",
"https://jabko.ua/gadzheti-i-drugoe/gadzheti-apple/apple-homepod/apple-homepod-2--white---mqj83-",
"https://jabko.ua/gadzheti-i-drugoe/gadzheti-apple/apple-homepod/apple-homepod-2--midnight---mqj73-",
]

const arrLinkYuaGadjetApple = [
  "https://www.google.com",
"https://www.google.com",
"https://y.ua/apple-pencil-tips-mlun2-for-apple-ipad-pro/p245820/",

"https://y.ua/stilus-apple-pencil-pro-mx2d3-2024/p1294342/",
"https://y.ua/stilus-apple-pencil-usb-c-muwa3/p1199017/",
"https://www.google.com",
"https://y.ua/apple-pencil-2-mu8f2-for-ipad-pro-2018/p415688/",

"https://y.ua/apple-magic-mouse-mk2e3-2021/p833901/",
"https://y.ua/apple-magic-mouse-with-black-multi-touch-surface-mmmq3-2022/p913309/",
"https://y.ua/apple-magic-mouse-usbc-white-multi-touch-surface-mxk53-2024-1402070/p1402070/",
"https://www.google.com",

"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://y.ua/apple-magic-keyboard-for-ipad-pro-11inch-m4-white-mwr03/p1443318/",
"https://www.google.com",
"https://y.ua/apple-magic-keyboard-for-ipad-pro-13inch-m4-black-mwr53/p1442789/",
"https://y.ua/apple-magic-keyboard-for-ipad-pro-13inch-m4-ukrainian-white-mwr43uaa/p1357558/",
"https://y.ua/apple-tv-4k-wifi-plus-ethernet-128gb-mn893-2022/p999488/",
"https://y.ua/apple-tv-4k-wifi-64gb-mn873-2022/p999489/", 
"https://y.ua/apple-homepod-mini-white/p690500/",
"https://www.google.com",
"https://y.ua/apple-homepod-mini-blue-mj2c3/p846794/",
"https://y.ua/apple-homepod-mini-yellow-mj2e3/p846796/",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
]

const arrLinkTouchGadjetApple = [
  "https://touch.com.ua/ua/item/brelok-dlya-poiska-veshchey-apple-airtag-1sht-mx532/",
"https://touch.com.ua/ua/item/brelok-dlya-poiska-veshchey-apple-airtag-4sht-mx542/",
"https://touch.com.ua/ua/item/nakonechniki-dlya-stilusa-apple-pencil-tips-4-sht-mlun2/",
"https://touch.com.ua/ua/item/apple-pencil-pro-mx2d3/",
"https://touch.com.ua/ua/item/apple-pencil-usb-c-muwa3/",
"https://touch.com.ua/ua/item/apple-pencil-1st-gen-mqly3/",
"https://touch.com.ua/ua/item/stilus-apple-pencil-2nd-generation-dlya-ipad-pro-2018-mu8f2/",
"https://touch.com.ua/ua/item/mysh-apple-magic-mouse-2021-mk2e3/",
"https://www.google.com",
"https://touch.com.ua/ua/item/mysh-apple-magic-mouse-white-multi-touch-surface-mxk53/",
"https://touch.com.ua/ua/item/mysh-apple-magic-mouse-black-multi-touch-surface-mxk63/",
"https://touch.com.ua/ua/item/apple-magic-trackpad-white-multi-touch-surface-mxk93-trekpad-122933/",
"https://touch.com.ua/ua/item/tachpad-apple-magic-trackpad-black-mxka3-/",
"https://www.google.com",
"https://touch.com.ua/ua/item/klaviatura-apple-magic-keyboard-2021-mk2a3/",
"https://www.google.com",
"https://www.google.com",
"https://touch.com.ua/ua/item/klaviatura-apple-magic-keyboard-with-touch-id-bluetooth-mk293/",
"https://www.google.com",
"https://www.google.com",
"https://touch.com.ua/ua/item/apple-smart-keyboard-folio-for-ipad-10-9-2022-10gen-gen-white-mqdp3-chekhol-klaviatura/",
"https://touch.com.ua/ua/item/chekhol-klaviatura-apple-magic-keyboard-dlya-ipad-pro-11-1th-4th-ipad-air-4th-5th-ipad-air-11-m2-whi/",
"https://touch.com.ua/ua/item/chekhol-klaviatura-apple-magic-keyboard-dlya-ipad-air-13-2024-2025-m2-m3-white-mdfw4/",
"https://touch.com.ua/ua/item/apple-magic-keyboard-for-ipad-pro-11-2024-m4-white-mwr03ll-a-chekhol-klaviatura/",
"https://touch.com.ua/ua/item/apple-magic-keyboard-for-ipad-pro-11-2024-m4-black-mwr23ll-a-chekhol-klaviatura/",
"https://touch.com.ua/ua/item/apple-magic-keyboard-for-ipad-pro-13-2024-m4-white-mwr43ll-a-chekhol-klaviatura/",
"https://touch.com.ua/ua/item/apple-magic-keyboard-for-ipad-pro-13-2024-m4-black-mwr53ll-a-chekhol-klaviatura/",
"https://touch.com.ua/ua/item/apple-tv-4k-2022-128gb-mn893-tv-pristavka/",
"https://touch.com.ua/ua/item/apple-tv-4k-2022-64gb-mn873-tv-pristavka/", 
"https://touch.com.ua/ua/item/akusticheskaya-kolonka-apple-homepod-mini-white/",
"https://touch.com.ua/ua/item/apple-homepod-mini-midnight-mtjt3-118385-umnye-kolonki-rozumni-kolonki/",
"https://touch.com.ua/ua/item/akusticheskaya-kolonka-apple-homepod-mini-blue/",
"https://touch.com.ua/ua/item/akusticheskaya-kolonka-apple-homepod-mini-yellow/",
"https://touch.com.ua/ua/item/akusticheskaya-kolonka-apple-homepod-mini-orange/",
"https://touch.com.ua/ua/item/akusticheskaya-kolonka-apple-homepod-mini-space-gray/",
"https://www.google.com",
"https://touch.com.ua/ua/item/apple-homepod-2-white-mqj83/",
"https://touch.com.ua/ua/item/apple-homepod-2-midnight-mqj73/",
]

async function f() {
  const browser = await puppeteer.launch({
    headless: false,
    ignoreHTTPSErrors: true, // ✅ убирает ERR_CERT_COMMON_NAME_INVALID
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-web-security",
      "--disable-features=IsolateOrigins,site-per-process",
    ],
  });

  const page = await browser.newPage();

  // ❗ лучше ставить после newPage
  page.setDefaultNavigationTimeout(30000);
  page.setDefaultTimeout(30000);
  
  for (let i = 0; i < arrLinkGroGadjetApple.length; i++) {
  const link = arrLinkGroGadjetApple[i];

  try {
    const response = await page.goto(link, {
      waitUntil: "domcontentloaded",
      timeout: 20000,
    });

    // если сайт не открылся
    if (!response || !response.ok()) {
      console.log(`❌ Gro: не открылось — ${link}`);
      continue;
    }

    const result = await page.evaluate(() => {
      const clean = (t) =>
        t ? t.replace(/\n+/g, " ").replace(/\s+/g, " ").trim() : "";

      const sku = document.querySelector(".sku");
      if (!sku) return "⚠️ Gro: не товарная страница";

      const price = document.querySelector(".product-price-value");

      return price
        ? `${clean(sku.innerText)} Gro: ${clean(price.innerText)}`
        : `${clean(sku.innerText)} Gro: нет цены`;
    });

    console.log(result);

    // небольшая пауза (антибан + стабильность)
    await new Promise(r => setTimeout(r, 500));

  } catch (err) {
    console.log(`❌ Gro: ошибка или не открылось — ${link}`);
  }
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
 
  for (let i = 0; i < arrLinkYuaGadjetApple.length; i++) {
  try {
    await page.goto(arrLinkYuaGadjetApple[i], { waitUntil: 'domcontentloaded' });

    const arr2 = await page.evaluate(() => {
      const h1 = document.querySelector("h1");
      const priceEl = document.querySelector(".price .regular");
      const title = h1 ? h1.innerText.replace(/\s+/g, ' ').trim() : "No title";
      const price = priceEl ? priceEl.innerText.replace(/\s+/g, ' ').trim() : null;
      return price ? `${title} Yua: ${price}` : title;
    });

    console.log(arr2);
  } catch (err) {
    console.error(`Ошибка на странице ${arrLinkYuaGadjetApple[i]}:`, err);
  }
}

  for (let i = 0; i < arrLinkTouchGadjetApple.length; i++) {
  try {
    await page.goto(arrLinkTouchGadjetApple[i], { waitUntil: 'domcontentloaded' });

    const arr2 = await page.evaluate(() => {
      const h1 = document.querySelector("h1");
      const priceEl = document.querySelector(".price");
      const title = h1 ? h1.innerText : "No title";
      const price = priceEl ? priceEl.innerText : null;
      return price ? `${title} Touch: ${price}` : title;
    });

    console.log(arr2);
  } catch (err) {
    console.error(`Ошибка на странице ${arrLinkTouchGadjetApple[i]}:`, err);
  }
}



}
f();
