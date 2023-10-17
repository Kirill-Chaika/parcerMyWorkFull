console.log("Hello world");
const puppeteer = require("puppeteer");
const arrLinkGro = [
  'https://grokholsky.com/product/apple/iphone/iphone-15-pro/iphone-15-pro-128gb-blue-titanium-mtv03/',
  'https://grokholsky.com/product/apple/iphone/iphone-15-pro/iphone-15-pro-128gb-black-titanium-mtuv3/',
  'https://grokholsky.com/product/apple/iphone/iphone-15-pro/iphone-15-pro-128gb-natural-titanium-mtux3/',
  'https://grokholsky.com/product/apple/iphone/iphone-15-pro/iphone-15-pro-128gb-white-titanium-mtuw3/',

  'https://grokholsky.com/product/apple/iphone/iphone-15-pro-max/iphone-15-pro-max-256gb-blue-titanium-mu7a3/',
  'https://grokholsky.com/product/apple/iphone/iphone-15-pro-max/iphone-15-pro-max-256gb-black-titanium-mu773/',
  'https://grokholsky.com/product/apple/iphone/iphone-15-pro-max/iphone-15-pro-max-256gb-natural-titanium-mu793/',
  'https://grokholsky.com/product/apple/iphone/iphone-15-pro-max/iphone-15-pro-max-256gb-white-titanium-mu783/'
];







async function f() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  for (let i = 0; i < arrLinkGro.length; i += 1) {
    await page.goto(arrLinkGro[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-value") != null) {
        return (
          text2 + "MP1: " + document.querySelector(".price-value").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr3);
    await page.setDefaultNavigationTimeout(0);
  }

  cycleParcePosition(arrLinkMobilePlanet,"h1",".price-value","MP2: ")
}
f();
