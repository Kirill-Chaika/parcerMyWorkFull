console.log("Hello world");

const puppeteer = require("puppeteer");
const arrLinkGro = [
  "https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-128gb-starlight-mpur3/",
  "https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-128gb-product-red-mpva3/",
  "https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-128gb-purple-mpv03/",
  "https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-128gb-blue-mpvn3/",
  "https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-128gb-midnight-mpuf3/",
  "https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-128gb-yellow-mr3x3/",

  "https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-256gb-starlight-mpw43/",
  "https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-256gb-product-red-mpwh3/",
  "https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-256gb-purple-mpwa3/",
  "https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-256gb-blue-mpwp3/",
  "https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-256gb-midnight-mpvx3/",
  "https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-256gb-yellow-mr3y3/",

  "https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-512gb-starlight-mpx33/",
  "https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-512gb-product-red-mpxg3/",
  "https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-512gb-purple-mpx93/",
  "https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-512gb-blue-mpxn3/",
  "https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-512gb-midnight-mpww3/",
  "https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-512gb-yellow-mr513/",
];

const arrLinkGro14Plus = [
  "https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-128gb-starlight-mq4y3/",
  "https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-128gb-product-red-mq513/",
  "https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-128gb-purple-mq503/",
  "https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-128gb-blue-mq523/",
  "https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-128gb-midnight-mq4x3/",
  "https://grokholsky.com/product/apple/iphone/iphone-14-plus-128gb-yellow-mr693/",

  "https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-256gb-starlight-mq553/",
  "https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-256gb-product-red-mq573/",
  "https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-256gb-purple-mq563/",
  "https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-256gb-blue-mq583/",
  "https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-256gb-midnight-mq533/",
  "https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-256gb-yellow-mr6d3/",

  "https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-512gb-starlight-mq5d3/",
  "https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-512gb-product-red-mq5f3/",
  "https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-512gb-purple-mq5e3/",
  "https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-512gb-blue-mq5g3/",
  "https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-512gb-midnight-mq593/",
  "https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-512gb-yellow-mr6g3/",
];

const arrLinkGro14Pro = [
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-128gb-deep-purple-mq0g3/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-128gb-space-black-mpxv3/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-128gb-silver-mq023/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-128gb-gold-mq083/',

  'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-256gb-deep-purple-mq1f3/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-256gb-space-black-mq0t3/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-256gb-silver-mq103/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-256gb-gold-mq183/',

  'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-512gb-deep-purple-mq293/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-512gb-space-black-mq1m3/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-512gb-silver-mq1w3/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-512gb-gold-mq233/',

  'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-1tb-deep-purple-mq323/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-1tb-space-black-mq2g3/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-1tb-silver-mq2n3/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-1tb-gold-mq2v3/'
];

const arrLinkGro14ProMAx = [
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-128gb-deep-purple-mq9t3/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-128gb-space-black-mq9p3/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-128gb-silver-mq9q3/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-128gb-gold-mq9r3/',

  'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-256gb-deep-purple-mq9x3/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-256gb-space-black-mq9u3/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-256gb-silver-mq9v3/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-256gb-gold-mq9w3/',

  'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-512gb-deep-purple-mqam3/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-512gb-space-black-mqaf3/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-512gb-silver-mqah3/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-512gb-gold-mqaj3/',

  'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-1tb-deep-purple-mqc53/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-1tb-space-black-mqc23/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-1tb-silver-mqc33/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-1tb-gold-mqc43/'
];

const arrLinkGro14ProEsim = [
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-128gb-esim-deep-purple-mq0e3/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-128gb-esim-space-black-mpxt3/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-128gb-esim-silver-mq003/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-128gb-esim-gold-mq063/',
  
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-256gb-esim-deep-purple-mq1d3/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-256gb-esim-space-black-mq0n3/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-256gb-esim-silver-mq0x3/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-256gb-esim-gold-mq163/',

  'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-512gb-esim-deep-purple-mq273/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-512gb-esim-space-black-mq1k3/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-512gb-esim-silver-mq1u3/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-512gb-esim-gold-mq213/',

  'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-1tb-esim-deep-purple-mq303/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-1tb-esim-space-black-mq2e3/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-1tb-esim-silver-mq2l3/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-1tb-esim-gold-mq2t3/'
];

const arrLinkGro14ProMAxEsim = [
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-128gb-esim-deep-purple-mq8r3/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-128gb-esim-space-black-mq8n3/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-128gb-esim-silver-mq8p3/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-128gb-esim-gold-mq8q3/',
  
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-256gb-esim-deep-purple-mq8w3/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-256gb-esim-space-black-mq8t3/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-256gb-esim-silver-mq8u3/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-256gb-esim-gold-mq8v3/',

  'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-512gb-esim-deep-purple-mq913/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-512gb-esim-space-black-mq8x3/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-512gb-esim-silver-mq8y3/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-512gb-esim-gold-mq903/',

  'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-1tb-esim-deep-purple-mq953/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-1tb-esim-space-black-mq923/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-1tb-esim-silver-mq933/',
  'https://grokholsky.com/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-1tb-esim-gold-mq943/'
];


async function f() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  for (let i = 0; i < arrLinkGro.length; i += 1) {
    await page.goto(arrLinkGro[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector("bdi") != null) {
        return (
          text2 + "MP: " + document.querySelector("bdi").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr3);
  }

  for (let i = 0; i < arrLinkGro14Plus.length; i += 1) {
    await page.goto(arrLinkGro14Plus[i]);
    const n = await page.$("#txt");

    let arr5 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector("bdi") != null) {
        return (
          text2 + "MP: " + document.querySelector("bdi").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr5);
  }

  for (let i = 0; i < arrLinkGro14Pro.length; i += 1) {
    await page.goto(arrLinkGro14Pro[i]);
    const n = await page.$("#txt");

    let arr5 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector("bdi") != null) {
        return (
          text2 + "MP: " + document.querySelector("bdi").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr5);
  }

  for (let i = 0; i < arrLinkGro14ProMAx.length; i += 1) {
    await page.goto(arrLinkGro14ProMAx[i]);
    const n = await page.$("#txt");

    let arr5 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector("bdi") != null) {
        return (
          text2 + "MP: " + document.querySelector("bdi").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr5);
  }
  for (let i = 0; i < arrLinkGro14ProEsim.length; i += 1) {
    await page.goto(arrLinkGro14ProEsim[i]);
    const n = await page.$("#txt");

    let arr5 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector("bdi") != null) {
        return (
          text2 + "MP: " + document.querySelector("bdi").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr5);
  }

  for (let i = 0; i < arrLinkGro14ProMAxEsim.length; i += 1) {
    await page.goto(arrLinkGro14ProMAxEsim[i]);
    const n = await page.$("#txt");

    let arr5 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector("bdi") != null) {
        return (
          text2 + "MP: " + document.querySelector("bdi").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr5);
  }

}
f();
