console.log("Hello world");

const puppeteer = require("puppeteer");


const arrLinkXiaomiPad = [
  " https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-pad-7-8-128gb-gray-vhu5476eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-pad-7-8-128gb-gray-vhu5476eu.html",
" https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-pad-7-8-128gb-blue-vhu5367eu.html",
" https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-pad-7-8-128gb-green-vhu5364eu.html",
" https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-pad-7-8-256gb-gray-vhu5498eu.html",
" https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-pad-7-8-256gb-gray-vhu5498eu.html",
" https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-pad-7-8-256gb-blue-vhu5363eu.html",
" https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-pad-7-8-256gb-green-vhu5368eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-pad-7-8-256gb-green-vhu5368eu.html",


" https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-pad-7-pro-8-256gb-gray-vhu5412eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-pad-7-pro-8-256gb-blue-vhu5438eu.html",
" https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-pad-7-pro-8-256gb-green-vhu5443eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-pad-7-pro-12-512gb-gray-vhu5422eu.html",
" https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-pad-7-pro-12-512gb-blue-vhu5445eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-pad-7-pro-12-512gb-green-vhu5439eu.html",


" https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-2-wifi-4-128gb-graphite-gray-vhu5659eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-2-4g-4-128gb-graphite-gray-vhu5660eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-2-wifi-4-128gb-lavender-purple-vhu5936eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-2-wifi-4-128gb-mint-green-vhu5875eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-2-wifi-8-256gb-graphite-gray-vhu5631eu.html",
" https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-2-wifi-8-256gb-lavender-purple-vhu5920eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-2-wifi-8-256gb-mint-green-vhu5897eu.html",

"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-pro-6-128gb-graphite-gray-vhu4737eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-pro-6-128gb-ocean-blue-vhu4733eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-pro-6-128gb-mint-green-vhu4725eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-pro-8-256gb-graphite-gray-vhu4750eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-pro-8-256gb-ocean-blue-vhu4719eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-pro-8-256gb-mint-green-vhu4729eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-pro-5g-8-256gb-graphite-gray-vhu4826eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-pro-5g-8-256gb-mint-green-vhu4819eu.html",


"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-se-8-7-4-64gb-graphite-gray-vhu5098eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-se-8-7-4-64gb-sky-blue-vhu5054eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-se-8-7-4-128gb-graphite-gray-vhu5072eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-se-8-7-4-64gb-sky-blue-vhu5070eu.html",
];



async function f() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  for (let i = 0; i < arrLinkXiaomiPad.length; i += 1) {
    await page.goto(arrLinkSkayGooglePixel[i]);
    const n = await page.$("#txt");

    let arr1 = await page.evaluate(() => {

      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".products-item-cost") != null) {
        return text2 + 'SKAY: ' + document.querySelector(".products-item-cost").innerText
      } else { return }

    });

    console.log(arr1)
    await page.setDefaultNavigationTimeout(0);
  }
  
}
f()