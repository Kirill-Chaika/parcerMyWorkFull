console.log("Hello world");

const puppeteer = require("puppeteer");

const linkRosetka = [
    
"https://rozetka.com.ua/mamako_4670017090217/p68827719/",
"https://rozetka.com.ua/mamako_4670017090231/p68831655/",
"https://rozetka.com.ua/mamako_4670017090453/p68831691/",
"https://rozetka.com.ua/mamako_4670017090477_8437022039091/p68832045/",
"https://rozetka.com.ua/mamako_4670017090514_8437022039152/p68832603/",
"https://rozetka.com.ua/mamako_4607088795994/p62652385/",
"https://rozetka.com.ua/mamako_4607088796434/p62652462/",
"https://rozetka.com.ua/mamako_8437022039459/p62651895/",
"https://rozetka.com.ua/mamako_4607088795826_8437022039473/p62651636/",
"https://rozetka.com.ua/mamako_4607088795840/p62652091/",
"https://rozetka.com.ua/mamako_4607088795864/p62652315/",
"https://rozetka.com.ua/mamako_4670017090033/p62652693/",
"https://rozetka.com.ua/mamako_4670017090293/p62652770/",
"https://rozetka.com.ua/mamako_4670017090279/p74329041/",
"https://rozetka.com.ua/8437022039350/p74331435/",
"https://rozetka.com.ua/mamako-8437022039312/p348071259/",
];
const linkAshan = [
"https://auchan.ua/ua/z-g-m-mamako-1-premium-0-6-m-800g-1253538/",
"https://auchan.ua/ua/z-g-m-mamako-2-premium-6-12m-800g-1253545/",
"https://auchan.ua/ua/z-g-m-mamako-3-premium-12-m-800g-1253552/",
"https://auchan.ua/ua/kasha-grech-jabl-mork-na-koz-mol-200g-1253398/",
"https://auchan.ua/ua/kasha-kuk-huzov-abr-na-koz-mol-200g-1253405/",
"https://auchan.ua/ua/kasha-pshen-gr-banan-na-k-mol-200g-1253440/",
"https://auchan.ua/ua/kasha-ovd-chernosl-na-koz-mol-200g-1253447/",
"https://auchan.ua/ua/krem-sup-iz-harb-na-koz-mol-150g-1253454/",
"https://auchan.ua/ua/krem-sup-iz-shpinata-na-koz-mol-150g-1253461/",
"https://auchan.ua/ua/kasha-bmol-5-zlakov-organik-200g-1253391/"
];
const linkMaoDao = [
    "https://maudau.com.ua/product/sukha-molochna-sumish-mamako-premium-1-400-h",
    "https://maudau.com.ua/product/sukha-molochna-sumish-mamako-premium-1-800-h",
    "https://maudau.com.ua/product/sukha-molochna-sumish-mamako-premium-2-400-h"
    ];

async function f() {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
  
    // for (let i = 0; i < linkRosetka.length; i += 1) {
    //   await page.goto(linkRosetka[i]);
    //   const n = await page.$("#txt");
  
    //   let arr3 = await page.evaluate(() => {
    //     let text2 = document.querySelector("h1").innerText;
    //     if (document.querySelector(".product-price__big") != null) {
    //       return (
    //         text2 + "Розетка: " + document.querySelector(".product-price__big").innerText
    //       );
    //     } else {
    //       return;
    //     }
    //   });
    //   console.log(arr3);
    //   await page.setDefaultNavigationTimeout(0);
    // }

    // for (let i = 0; i < linkAshan.length; i += 1) {
    //   await page.goto(linkAshan[i]);
    //   const n = await page.$("#txt");
  
    //   let arr3 = await page.evaluate(() => {
    //     let text2 = document.querySelector("h1").innerText;
    //     if (document.querySelector(".product_product__price__3NmA_") != null) {
    //       return (
    //         text2 + "Ашан: " + document.querySelector(".product_product__price__3NmA_").innerText
    //       );
    //     } else {
    //       return;
    //     }
    //   });
    //   console.log(arr3);
    //   await page.setDefaultNavigationTimeout(0);
    // }
    
    for (let i = 0; i < linkMaoDao.length; i += 1) {
        await page.goto(linkMaoDao[i]);
        const n = await page.$("#txt");
    
        let arr3 = await page.evaluate(() => {
          let text2 = document.querySelector("h1").innerText;
          if (document.querySelector(".chakra-stack finalPrice") != null) {
            return (
              text2 + "Ашан: " + document.querySelector(".chakra-stack finalPrice").innerText
            );
          } else {
            return;
          }
        });
        console.log(arr3);
        await page.setDefaultNavigationTimeout(0);
      }
    
  }
  f();