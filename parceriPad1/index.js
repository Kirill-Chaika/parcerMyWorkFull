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

  // <<< ВСТАВИТЬ СЮДА >>>

  page.on("response", async (response) => {

    const req = response.request();

    if (

        req.resourceType() !== "xhr" &&

        req.resourceType() !== "fetch"

    ) return;

    const url = response.url();

    if (

        url.includes("hotline.ua")

    ) {

        console.log("\n==========================");

        console.log(url);

        try {

            const text = await response.text();

            console.log(text.substring(0, 1200));

        } catch(e){}

    }

});

  // ================= GRO =================

  for (let i = 0; i < arrLinkGroMacM3.length; i++) {

      

  }

  // ================= HOTLINE =================

  for (const link of arrLinkHotlineMacAirM5) {

      await page.goto(link, {

          waitUntil: "networkidle2",

          timeout: 60000,

      });

      

  }

  await browser.close();

}

f();