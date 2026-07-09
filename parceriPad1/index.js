console.log("Hello world");

const puppeteer = require("puppeteer");

const arrLinkGroMacM3 = [
  'https://grokholsky.com/product/apple/mac/macbook/noutbuk-apple-macbook-pro-14-space-gray-late-2023-mtl73/',
  'https://grokholsky.com/product/apple/mac/macbook/noutbuk-apple-macbook-pro-14-silver-late-2023-mr7j3/',
  'https://grokholsky.com/product/apple/mac/macbook/noutbuk-apple-macbook-pro-14-space-gray-late-2023-mtl83/',
  'https://grokholsky.com/product/apple/mac/macbook/noutbuk-apple-macbook-pro-14-silver-late-2023-mr7k3/',

  'https://grokholsky.com/product/apple/mac/macbook/noutbuk-apple-macbook-pro-14-space-black-late-2023-mrx33/',
  'https://grokholsky.com/product/apple/mac/macbook/noutbuk-apple-macbook-pro-14-silver-late-2023-mrx63/',
  'https://grokholsky.com/product/apple/mac/macbook/noutbuk-apple-macbook-pro-14-space-black-late-2023-mrx43/',
  'https://grokholsky.com/product/apple/mac/macbook/noutbuk-apple-macbook-pro-14-silver-late-2023-mrx73/',

  'https://grokholsky.com/product/apple/mac/macbook/noutbuk-apple-macbook-pro-14-space-black-late-2023-mrx53/',
  'https://grokholsky.com/product/apple/mac/macbook/noutbuk-apple-macbook-pro-14-silver-late-2023-mrx83/',


  'https://grokholsky.com/product/apple/mac/macbook/noutbuk-apple-macbook-pro-16-space-black-late-2023-mrw13/',
  'https://grokholsky.com/product/apple/mac/macbook/noutbuk-apple-macbook-pro-16-silver-late-2023-mrw43/',

  'https://grokholsky.com/product/apple/mac/macbook/noutbuk-apple-macbook-pro-16-space-black-late-2023-mrw23/',
  'https://grokholsky.com/product/apple/mac/macbook/noutbuk-apple-macbook-pro-16-silver-late-2023-mrw63/',

  'https://grokholsky.com/product/apple/mac/macbook/noutbuk-apple-macbook-pro-16-space-black-late-2023-mrw33/',
  'https://grokholsky.com/product/apple/mac/macbook/noutbuk-apple-macbook-pro-16-silver-late-2023-mrw73/',
  'https://grokholsky.com/product/apple/mac/macbook/noutbuk-apple-macbook-pro-16-space-black-late-2023-muw63/',
  'https://grokholsky.com/product/apple/mac/macbook/noutbuk-apple-macbook-pro-16-silver-late-2023-muw73/',


  "https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-136-m3-2024/macbook-air-136-m3-2024-midnight-mrxv3/",
  "https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-136-m3-2024/macbook-air-136-m3-2024-space-gray-mrxn3/",
  "https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-136-m3-2024/macbook-air-136-m3-2024-starlight-mrxt3/",
  "https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-136-m3-2024/macbook-air-136-m3-2024-silver-mrxq3/",

  "https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-136-m3-2024/macbook-air-136-m3-2024-midnight-mrxw3/",
  "https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-136-m3-2024/macbook-air-136-m3-2024-space-gray-mrxp3/",
  "https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-136-m3-2024/macbook-air-136-m3-2024-starlight-mrxu3/",
  "https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-136-m3-2024/macbook-air-136-m3-2024-silver-mrxr3/",


  "https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-15-m3-2024/macbook-air-15-m3-2024-midnight-mryu3/",
  "https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-15-m3-2024/macbook-air-15-m3-2024-space-gray-mrym3/",
  "https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-15-m3-2024/macbook-air-15-m3-2024-starlight-mryr3/",
  "https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-15-m3-2024/macbook-air-15-m3-2024-silver-mryp3/",

  "https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-15-m3-2024/macbook-air-15-m3-2024-midnight-mryv3/",
  "https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-15-m3-2024/macbook-air-15-m3-2024-space-gray-mryn3/",
  "https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-15-m3-2024/macbook-air-15-m3-2024-starlight-mryt3/",
  "https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-15-m3-2024/macbook-air-15-m3-2024-silver-mryq3/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-136-m3-2024/macbook-air-136-m3-2024-midnight-mxcv3/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-136-m3-2024/macbook-air-136-m3-2024-space-gray-mxcr3/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-136-m3-2024/macbook-air-136-m3-2024-starlight-mxcu3/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-136-m3-2024/macbook-air-136-m3-2024-silver-mxct3/",

  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m3-2024/macbook-air-15-m3-2024-midnight-mxd43/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m3-2024/macbook-air-15-m3-2024-space-gray-mxd13/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m3-2024/macbook-air-15-m3-2024-starlight-mxd33/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m3-2024/macbook-air-15-m3-2024-silver-mxd23/",
];

const arrLinkHotlineMacAirM5 = [
  "https://hotline.ua/ua/computer-noutbuki-netbuki/apple-macbook-air-136-2026-apple-m5-8-core-gpu-16gb-512gb-sky-blue/",
  "https://hotline.ua/ua/computer-noutbuki-netbuki/apple-macbook-air-136-2026-apple-m5-8-core-gpu-16gb-512gb-starlight/",
  "https://hotline.ua/ua/computer-noutbuki-netbuki/apple-macbook-air-136-2026-apple-m5-8-core-gpu-16gb-512gb-midnight/",
  "https://hotline.ua/ua/computer-noutbuki-netbuki/apple-macbook-air-136-2026-apple-m5-8-core-gpu-16gb-512gb-silver/",
];
async function f() {

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  const page = await browser.newPage();

  // ================= GRO =================

  for (let i = 0; i < arrLinkGroMacM3.length; i++) {

    try {

      await page.goto(arrLinkGroMacM3[i], {
        waitUntil: "domcontentloaded",
        timeout: 20000
      });

      const result = await page.evaluate(() => {

        const clean = (t) =>
          t ? t.replace(/\n+/g, " ").replace(/\s+/g, " ").trim() : "";

        const sku = clean(document.querySelector(".sku")?.innerText);
        const price = clean(document.querySelector(".product-price-value")?.innerText);

        return `${sku} Gro: ${price || "нет цены"}`;

      });

      console.log(result);

    } catch (err) {

      console.log(`❌ Gro: ${arrLinkGroMacM3[i]}`);
      console.log(err.message);

    }

  }

  // ================= HOTLINE =================

  for (const link of arrLinkHotlineMacAirM5) {

    await page.goto(link, {
      waitUntil: "networkidle2",
      timeout: 60000,
    });

    await page.waitForSelector("div._39wZYcj8NS7-tlSHz20x", {
      timeout: 30000,
    });

    await new Promise(resolve => setTimeout(resolve, 15000));

    const data = await page.evaluate(() => {

      const clean = t =>
        t ? t.replace(/\s+/g, " ").trim() : "";

      const title = clean(document.querySelector("h1")?.innerText);

      const offers = [...document.querySelectorAll("div._39wZYcj8NS7-tlSHz20x")];

      return {
        title,
        shops: offers.map(card => {

          const shop = clean(
            card.querySelector("._28nEtZBfCXlOZegmPmnR a")?.innerText
          );

          let price = "";

          const p1 = card.querySelector("._2nDtLJl1an-IwvrOwFrI");

          if (p1)
            price = clean(p1.innerText);

          if (!price) {

            const p2 = card.querySelector("._3kMcWsU9RPs0dvyS76CI");

            if (p2)
              price = clean(p2.innerText);

          }

          return {
            shop,
            price
          };

        })
      };

    });

    console.log("\n=================================");
    console.log(data.title);
    console.log("=================================");

    data.shops.forEach(item => {
      console.log(`${item.shop} ${item.price}`);
    });

  }

  await browser.close();

}

f();