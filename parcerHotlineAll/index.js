console.log("Hello world");

const puppeteer = require("puppeteer");

const HotlineTest = [
    "https://hotline.ua/ua/mobile-mobilnye-telefony-i-smartfony/apple-iphone-15-pro-128gb-blue-titanium-mtv03/",
    "https://hotline.ua/ua/mobile-mobilnye-telefony-i-smartfony/apple-iphone-15-pro-128gb-black-titanium-mtuv3/",
    "https://hotline.ua/ua/mobile-mobilnye-telefony-i-smartfony/apple-iphone-15-pro-128gb-natural-titanium-mtux3/",
    "https://hotline.ua/ua/mobile-mobilnye-telefony-i-smartfony/apple-iphone-15-pro-128gb-white-titanium-mtuw3/"
]

async function f() {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
  
  
    for (let i = 0; i < HotlineTest.length; i += 1) {
      await page.goto(HotlineTest[i]);
      const n = await page.$("#txt");
  
      let arr8 = await page.evaluate(() => {
        let text2 = document.querySelector("h1").innerText;
        if (document.querySelector(".price__value") != null) {
          return (
            text2 + "Hotline: " + document.querySelector(".price__value").innerText
          );
        } else {
          return text2;
        }
      });
  
      console.log(arr8);
      await page.setDefaultNavigationTimeout(0);
    }
  }
  f();
