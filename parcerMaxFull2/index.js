
console.log("Hello world");

const puppeteer = require("puppeteer");

const arrLinkJabkoIPAD = [
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-2--2021-/planshet-apple-ipad-10-2-64gb--wi-fi--silver--2021",
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-2--2021-/planshet-apple-ipad-10-2-64gb--space-gray--2021",
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-2--2021-/planshet-apple-ipad-10-2-64gb--wi-fi---lte--silver--2021",
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-2--2021-/planshet-apple-ipad-10-2-64gb--wi-fi---lte--space-gray--2021",

  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-2--2021-/planshet-apple-ipad-10-2-256gb--wi-fi--silver--2021",
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-2--2021-/planshet-apple-ipad-10-2-256gb--wi-fi--space-gray--2021",
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-2--2021-/planshet-apple-ipad-10-2-256gb--wi-fi---lte--silver--2021",
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-2--2021-/planshet-apple-ipad-10-2-256gb--wi-fi---lte--space-gray--2021",

  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-9--2022-/planshet-apple-ipad-10-9-64gb--wi-fi--blue--2022",
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-9--2022-/planshet-apple-ipad-10-9-64gb--wi-fi--pink--2022",
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-9--2022-/planshet-apple-ipad-10-9-64gb--wi-fi--silver--2022",
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-9--2022-/planshet-apple-ipad-10-9-64gb--wi-fi--yellow--2022",

  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-9--2022-/planshet-apple-ipad-10-9-64gb--wi-fi---lte--blue--2022",
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-9--2022-/planshet-apple-ipad-10-9-64gb--wi-fi---lte--pink--2022",
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-9--2022-/planshet-apple-ipad-10-9-64gb--wi-fi---lte--silver--2022",
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-9--2022-/planshet-apple-ipad-10-9-64gb--wi-fi---lte--yellow--2022",

  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-9--2022-/planshet-apple-ipad-10-9-256gb--wi-fi--blue--2022",
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-9--2022-/planshet-apple-ipad-10-9-256gb--wi-fi--pink--2022",
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-9--2022-/planshet-apple-ipad-10-9-256gb--wi-fi--silver--2022",
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-9--2022-/planshet-apple-ipad-10-9-256gb--wi-fi--yellow--2022",

  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-9--2022-/planshet-apple-ipad-10-9-256gb--wi-fi---lte--blue--2022",
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-9--2022-/planshet-apple-ipad-10-9-256gb--wi-fi---lte--pink--2022",
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-9--2022-/planshet-apple-ipad-10-9-256gb--wi-fi---lte--silver--2022",
  "https://jabko.ua/rus/ipad/apple-ipad/apple-ipad-10-9--2022-/planshet-apple-ipad-10-9-256gb--wi-fi---lte--yellow--2022",

  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--64gb--wi-fi--space-gray--2022-",
  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--64gb--wi-fi--blue--2022-",
  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--64gb--wi-fi--purple--2022-",
  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--64gb--wi-fi--pink--2022-",
  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--64gb--wi-fi--starlight--2022-",

  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--64gb--wi-fi---lte--space-gray--2022-",
  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--64gb--wi-fi---lte--blue--2022-",
  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--64gb--wi-fi---lte--purple--2022-",
  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--64gb--wi-fi---lte--pink--2022-",
  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--64gb--wi-fi---lte--starlight--2022-",

  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--256gb--wi-fi--space-gray--2022-",
  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--256gb--wi-fi--blue--2022-",
  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--256gb--wi-fi--purple--2022-",
  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--256gb--wi-fi--pink--2022-",
  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--256gb--wi-fi--starlight--2022-",

  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--256gb--wi-fi---lte--space-gray--2022-",
  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--256gb--wi-fi---lte--blue--2022-",
  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--256gb--wi-fi---lte--purple--2022-",
  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--256gb--wi-fi---lte--pink--2022-",
  "https://jabko.ua/rus/ipad/ipad-air-10-5/apple-ipad-air--2022-/apple-ipad-air--256gb--wi-fi---lte--starlight--2022-",

  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-11--2022-/planshet-apple-ipad-pro-11-2022--128gb--silver--wi-fi--m2-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-11--2022-/planshet-apple-ipad-pro-11-2022--128gb--space-gray--wi-fi-m2",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-11--2022-/planshet-apple-ipad-pro-11-2022--128gb--silver--wi-fi---lte--m2-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-11--2022-/planshet-apple-ipad-pro-11-2022--128gb--space-gray--wi-fi---lte--m2-",

  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-11--2022-/planshet-apple-ipad-pro-11-2022--256gb--silver--wi-fi--m2-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-11--2022-/planshet-apple-ipad-pro-11-2022--256gb--space-gray--wi-fi--m2-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-11--2022-/planshet-apple-ipad-pro-11-2022--256gb--silver--wi-fi---lte--m2-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-11--2022-/planshet-apple-ipad-pro-11-2022--256gb--space-gray--wi-fi---lte--m2-",

  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-11--2022-/planshet-apple-ipad-pro-11-2022--512gb--silver--wi-fi--m2-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-11--2022-/planshet-apple-ipad-pro-11-2022--512gb--space-gray--wi-fi--m2-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-11--2022-/planshet-apple-ipad-pro-11-2022--512gb--silver--wi-fi---lte--m2-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-11--2022-/planshet-apple-ipad-pro-11-2022--512gb--space-gray--wi-fi---lte--m2-",

  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--128gb--silver--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--128gb--space-gray--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--128gb--silver--wi-fi---lte",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--128gb--space-gray--wi-fi---lte",

  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--256gb--silver--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--256gb--space-gray--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--256gb--silver--wi-fi---lte",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--256gb--space-gray--wi-fi---lte",

  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--512gb--silver--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--512gb--space-gray--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--512gb--silver--wi-fi---lte",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--512gb--space-gray--wi-fi---lte",

  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--1tb--silver--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--1tb--space-gray--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--1tb--silver--wi-fi---lte",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--1tb--space-gray--wi-fi---lte",

  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--2tb--silver--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--2tb--space-gray--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--2tb--silver--wi-fi---lte",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2021-/planshet-apple-ipad-pro-12-2021--2tb--space-gray--wi-fi---lte",

  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2022-/planshet-apple-ipad-pro-12-9-2022--128gb--silver--wi-fi--m2-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2022-/planshet-apple-ipad-pro-12-9-2022--128gb--space-gray--wi-fi--m2-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2022-/planshet-apple-ipad-pro-12-9-2022--128gb--silver--wi-fi---lte--m2-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2022-/planshet-apple-ipad-pro-12-9-2022--128gb--space-gray--wi-fi---lte--m2-",

  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2022-/planshet-apple-ipad-pro-12-9-2022--256gb--silver--wi-fi--m2-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2022-/planshet-apple-ipad-pro-12-9-2022--gb--space-gray--wi-fi--m2-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2022-/planshet-apple-ipad-pro-12-9-2022--256gb--silver--wi-fi---lte--m2",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2022-/planshet-apple-ipad-pro-12-9-2022--256gb--space-gray--wi-fi---lte--m2-",

  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2022-/planshet-apple-ipad-pro-12-9-2022--512gb--silver--wi-fi--m2-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2022-/planshet-apple-ipad-pro-12-9-2022--512gb--space-gray--wi-fi--m2-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2022-/planshet-apple-ipad-pro-12-9-2022--256gb--silver--wi-fi---lte--m2-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/apple-ipad-pro-12-9--2022-/planshet-apple-ipad-pro-12-9-2022--512gb--space-gray--wi-fi---lte--m2-",

  "https://jabko.ua/rus/ipad/apple-ipad-mini/ipad-mini-6/apple-ipad-mini-6-",
  "https://jabko.ua/rus/ipad/apple-ipad-mini/ipad-mini-6/apple-ipad-mini-6-64gb--wi-fi--purple-",
  "https://jabko.ua/rus/ipad/apple-ipad-mini/ipad-mini-6/apple-ipad-mini-6-64gb--wi-fi--pink-",
  "https://jabko.ua/rus/ipad/apple-ipad-mini/ipad-mini-6/apple-ipad-mini-6-64gb--wi-fi--starlight-",

  "https://jabko.ua/rus/ipad/apple-ipad-mini/ipad-mini-6/apple-ipad-mini-6-64gb--wi-fi---lte--space-gray-",
  "https://jabko.ua/rus/ipad/apple-ipad-mini/ipad-mini-6/apple-ipad-mini-6-64gb--wi-fi---lte--purple-",
  "https://jabko.ua/rus/ipad/apple-ipad-mini/ipad-mini-6/apple-ipad-mini-6-64gb--wi-fi---lte--pink-",
  "https://jabko.ua/rus/ipad/apple-ipad-mini/ipad-mini-6/apple-ipad-mini-6-64gb--wi-fi---lte--starlight-",

  "https://jabko.ua/rus/ipad/apple-ipad-mini/ipad-mini-6/apple-ipad-mini-6-256gb--wi-fi--space-gray-",
  "https://jabko.ua/rus/ipad/apple-ipad-mini/ipad-mini-6/apple-ipad-mini-6-256gb--wi-fi--purple-",
  "https://jabko.ua/rus/ipad/apple-ipad-mini/ipad-mini-6/apple-ipad-mini-6-256gb--wi-fi--pink-",
  "https://jabko.ua/rus/ipad/apple-ipad-mini/ipad-mini-6/apple-ipad-mini-6-256gb--wi-fi--starlight-",

  "https://jabko.ua/rus/ipad/apple-ipad-mini/ipad-mini-6/apple-ipad-mini-6-256gb--wi-fi---lte--space-gray-",
  "https://jabko.ua/rus/ipad/apple-ipad-mini/ipad-mini-6/apple-ipad-mini-6-256gb--wi-fi---lte--purple-",
  "https://jabko.ua/rus/ipad/apple-ipad-mini/ipad-mini-6/apple-ipad-mini-6-256gb--wi-fi---lte--pink-",
  "https://jabko.ua/rus/ipad/apple-ipad-mini/ipad-mini-6/apple-ipad-mini-6-256gb--wi-fi---lte--starlight-"
];
const arrLinkGroIPAD = [
  "https://grokholsky.com/ua/product/apple/ipad/ipad-2021/ipad-10-2-2021-wi-fi-64gb-silver-mk2l3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-2021/ipad-10-2-2021-wi-fi-64gb-space-gray-mk2k3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-2021/ipad-10-2-2021-wi-fi-cellular-64gb-silver-mk673-mk493/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-2021/ipad-10-2-2021-wi-fi-cellular-64gb-space-gray-mk663-mk473/",

  "https://grokholsky.com/ua/product/apple/ipad/ipad-2021/ipad-10-2-2021-wi-fi-256gb-silver-mk2p3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-2021/ipad-10-2-2021-wi-fi-256gb-space-gray-mk2n3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-2021/ipad-10-2-2021-wi-fi-cellular-256gb-silver-mk6a3-mk4h3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-2021/ipad-10-2-2021-wi-fi-cellular-256gb-space-gray-mk693-mk4e3/",

  "https://grokholsky.com/ua/product/apple/ipad/ipad-2022/ipad-10-9-2022-wi-fi-64gb-blue-mpq13/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-2022/ipad-10-9-2022-wi-fi-64gb-pink-mpq33/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-2022/ipad-10-9-2022-wi-fi-64gb-silver-mpq03/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-2022/ipad-10-9-2022-wi-fi-64gb-yellow-mpq23/",

  "https://grokholsky.com/ua/product/apple/ipad/ipad-2022/ipad-10-9-2022-wi-fi-cellular-64gb-blue-mq6k3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-2022/ipad-10-9-2022-wi-fi-cellular-64gb-pink-mq6m3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-2022/ipad-10-9-2022-wi-fi-cellular-64gb-silver-mq6j3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-2022/ipad-10-9-2022-wi-fi-cellular-64gb-yellow-mq6l3/",

  "https://grokholsky.com/ua/product/apple/ipad/ipad-2022/ipad-10-9-2022-wi-fi-256gb-blue-mpq93/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-2022/ipad-10-9-2022-wi-fi-256gb-pink-mpqc3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-2022/ipad-10-9-2022-wi-fi-256gb-silver-mpq83/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-2022/ipad-10-9-2022-wi-fi-256gb-yellow-mpqa3/",

  "https://grokholsky.com/ua/product/apple/ipad/ipad-2022/ipad-10-9-2022-wi-fi-cellular-256gb-blue-mq6u3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-2022/ipad-10-9-2022-wi-fi-cellular-256gb-pink-mq6w3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-2022/ipad-10-9-2022-wi-fi-cellular-256gb-silver-mq6t3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-2022/ipad-10-9-2022-wi-fi-cellular-256gb-yellow-mq6v3/",

  "https://grokholsky.com/ua/product/apple/ipad/ipad-air-2022/ipad-air-2022-wi-fi-64gb-space-gray-mm9c3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-air-2022/ipad-air-2022-wi-fi-64gb-blue-mm9e3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-air-2022/ipad-air-2022-wi-fi-64gb-purple-mme23/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-air-2022/ipad-air-2022-wi-fi-64gb-pink-mm9d3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-air-2022/ipad-air-2022-wi-fi-64gb-starlight-mm9f3/",

  "https://grokholsky.com/ua/product/apple/ipad/ipad-air-2022/ipad-air-2022-wi-fi-5g-64gb-space-gray-mm6r3-mm753/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-air-2022/ipad-air-2022-wi-fi-5g-64gb-blue-mm6u3-mm773/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-air-2022/ipad-air-2022-wi-fi-5g-64gb-purple-mme93/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-air-2022/ipad-air-2022-wi-fi-5g-64gb-pink-mm6t3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-air-2022/ipad-air-2022-wi-fi-5g-64gb-starlight-mm6v3/",

  "https://grokholsky.com/ua/product/apple/ipad/ipad-air-2022/ipad-air-2022-wi-fi-256gb-space-gray-mm9l3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-air-2022/ipad-air-2022-wi-fi-256gb-blue-mm9n3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-air-2022/ipad-air-2022-wi-fi-256gb-purple-mme63/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-air-2022/ipad-air-2022-wi-fi-256gb-pink-mm9m3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-air-2022/ipad-air-2022-wi-fi-256gb-starlight-mm9p3/",

  "https://grokholsky.com/ua/product/apple/ipad/ipad-air-2022/ipad-air-2022-wi-fi-5g-256gb-space-gray-mm713-mm7e3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-air-2022/ipad-air-2022-wi-fi-5g-256gb-blue-mm733-mm7g3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-air-2022/ipad-air-2022-wi-fi-5g-256gb-purple-mmed3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-air-2022/ipad-air-2022-wi-fi-5g-256gb-pink-mm723-mm7f3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-air-2022/ipad-air-2022-wi-fi-5g-256gb-starlight-mm743-mm7h3/",

  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-11-2021/ipad-pro-11-2021-wi-fi-128gb-silver-mhqt3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-11-2021/ipad-pro-11-2021-wi-fi-128gb-space-gray-mhqr3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-11-2021/ipad-pro-11-2021-wi-fi-cellular-128gb-silver-mhmu3-mhw63/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-11-2021/ipad-pro-11-2021-wi-fi-cellular-128gb-space-gray-mhmt3-mhw53/",

  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-11-2021/ipad-pro-11-2021-wi-fi-256gb-silver-mhqv3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-11-2021/ipad-pro-11-2021-wi-fi-256gb-space-gray-mhqu3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-11-2021/ipad-pro-11-2021-wi-fi-cellular-256gb-silver-mhmw3-mhw83/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-11-2021/ipad-pro-11-2021-wi-fi-cellular-256gb-space-gray-mhmv3-mhw73/",

  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-11-2021/ipad-pro-11-2021-wi-fi-512gb-silver-mhqx3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-11-2021/ipad-pro-11-2021-wi-fi-512gb-space-gray-mhqw3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-11-2021/ipad-pro-11-2021-wi-fi-cellular-512gb-silver-mhmy3-mhwa3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-11-2021/ipad-pro-11-2021-wi-fi-cellular-512gb-space-gray-mhmx3-mhw93/",

  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-11-2021/ipad-pro-11-2021-wi-fi-1tb-silver-mhr03/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-11-2021/ipad-pro-11-2021-wi-fi-1tb-space-gray-mhqy3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-11-2021/ipad-pro-11-2021-wi-fi-cellular-1tb-silver-mhn13-mhwd/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-11-2021/ipad-pro-11-2021-wi-fi-cellular-1tb-space-gray-mhn03-mhwc3/",

  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-11-2021/ipad-pro-11-2021-wi-fi-2tb-silver-mhr33/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-11-2021/ipad-pro-11-2021-wi-fi-2tb-space-gray-mhr23/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-11-2021/ipad-pro-11-2021-wi-fi-cellular-2tb-silver-mhn33-mhwf3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-11-2021/ipad-pro-11-2021-wi-fi-cellular-2tb-space-gray-mhn23-mhwe3/",

  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-129-2021/ipad-pro-12-9-2021-wi-fi-128gb-silver-mhng3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-129-2021/ipad-pro-12-9-2021-wi-fi-128gb-space-gray-mhnf3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-129-2021/ipad-pro-12-9-2021-wi-fi-cellular-128gb-silver-mhnt3-mhr53/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-129-2021/ipad-pro-12-9-2021-wi-fi-cellular-128gb-space-gray-mhnr3-mhr43/",

  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-129-2021/ipad-pro-12-9-2021-wi-fi-256gb-silver-mhnj3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-129-2021/ipad-pro-12-9-2021-wi-fi-256gb-space-gray-mhnh3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-129-2021/ipad-pro-12-9-2021-wi-fi-cellular-256gb-silver-mhnx3-mhr73/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-129-2021/ipad-pro-12-9-2021-wi-fi-cellular-256gb-space-gray-mhnw3-mhr63/",

  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-129-2021/ipad-pro-12-9-2021-wi-fi-512gb-silver-mhnl3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-129-2021/ipad-pro-12-9-2021-wi-fi-512gb-space-gray-mhnk3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-129-2021/ipad-pro-12-9-2021-wi-fi-cellular-512gb-silver-mhp03-mhr93/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-129-2021/ipad-pro-12-9-2021-wi-fi-cellular-512gb-space-gray-mhny3-mhr83/",

  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-129-2021/ipad-pro-12-9-2021-wi-fi-1tb-silver-mhnn3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-129-2021/ipad-pro-12-9-2021-wi-fi-1tb-space-gray-mhnm3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-129-2021/ipad-pro-12-9-2021-wi-fi-cellular-1tb-silver-mhp23-mhrc3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-129-2021/ipad-pro-12-9-2021-wi-fi-cellular-1tb-space-gray-mhp13-mhra3/",

  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-129-2021/ipad-pro-12-9-2021-wi-fi-2tb-silver-mhnq3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-129-2021/ipad-pro-12-9-2021-wi-fi-2tb-space-gray-mhnp3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-129-2021/ipad-pro-12-9-2021-wi-fi-cellular-2tb-silver-mhp53-mhre3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-129-2021/ipad-pro-12-9-2021-wi-fi-cellular-2tb-space-gray-mhp43-mhrd3/",

  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-11-2022/ipad-pro-11-2022-wi-fi-128gb-silver-mnxe3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-11-2022/ipad-pro-11-2022-wi-fi-128gb-space-gray-mnxd3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-11-2022/ipad-pro-11-2022-wi-fi-cellular-128gb-silver-mp563-mnyd3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-11-2022/ipad-pro-11-2022-wi-fi-cellular-128gb-space-gray-mp553-mnyc3/",

  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-11-2022/ipad-pro-11-2022-wi-fi-256gb-silver-mnxg3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-11-2022/ipad-pro-11-2022-wi-fi-256gb-space-gray-mnxf3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-11-2022/ipad-pro-11-2022-wi-fi-cellular-256gb-silver-mp583-mnyf3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-11-2022/ipad-pro-11-2022-wi-fi-cellular-256gb-space-gray-mp573-mnye3/",

  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-11-2022/ipad-pro-11-2022-wi-fi-512gb-silver-mnxj3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-11-2022/ipad-pro-11-2022-wi-fi-512gb-space-gray-mnxh3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-11-2022/ipad-pro-11-2022-wi-fi-cellular-512gb-silver-mp5d3-mnyh3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-11-2022/ipad-pro-11-2022-wi-fi-cellular-512gb-space-gray-mp593-mnyg3/",

  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-129-2022/ipad-pro-12-9-2022-wi-fi-128gb-silver-mnxq3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-129-2022/ipad-pro-12-9-2022-wi-fi-128gb-space-gray-mnxp3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-129-2022/ipad-pro-12-9-2022-wi-fi-cellular-128gb-silver-mp5y3-mp1y3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-129-2022/ipad-pro-12-9-2022-wi-fi-cellular-128gb-space-gray-mp5x3-mp1x3/",

  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-129-2022/ipad-pro-12-9-2022-wi-fi-256gb-silver-mnxt3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-129-2022/ipad-pro-12-9-2022-wi-fi-256gb-space-gray-mnxr3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-129-2022/ipad-pro-12-9-2022-wi-fi-cellular-256gb-silver-mp613-mp213/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-129-2022/ipad-pro-12-9-2022-wi-fi-cellular-256gb-space-gray-mp603-mp203/",

  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-129-2022/ipad-pro-12-9-2022-wi-fi-512gb-silver-mnxv3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-129-2022/ipad-pro-12-9-2022-wi-fi-512gb-space-gray-mnxu3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-129-2022/ipad-pro-12-9-2022-wi-fi-cellular-512gb-silver-mp633-mp233/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-pro-129-2022/ipad-pro-12-9-2022-wi-fi-cellular-512gb-space-gray-mp623-mp223/",

  "https://grokholsky.com/ua/product/apple/ipad/ipad-mini-6/ipad-mini-6-wi-fi-64gb-space-gray-mk7m3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-mini-6/ipad-mini-6-wi-fi-64gb-purple-mk7r3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-mini-6/ipad-mini-6-wi-fi-64gb-pink-mlwl3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-mini-6/ipad-mini-6-wi-fi-64gb-starlight-mk7p3/",

  "https://grokholsky.com/ua/product/apple/ipad/ipad-mini-6/ipad-mini-6-wi-fi-cellular-64gb-space-gray-mk893/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-mini-6/ipad-mini-6-wi-fi-cellular-64gb-purple-mk8e3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-mini-6/ipad-mini-6-wi-fi-cellular-64gb-pink-mlx43/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-mini-6/ipad-mini-6-wi-fi-cellular-64gb-starlight-mk8c3/",

  "https://grokholsky.com/ua/product/apple/ipad/ipad-mini-6/ipad-mini-6-wi-fi-256gb-space-gray-mk7t3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-mini-6/ipad-mini-6-wi-fi-256gb-purple-mk7x3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-mini-6/ipad-mini-6-wi-fi-256gb-pink-mlwr3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-mini-6/ipad-mini-6-wi-fi-256gb-starlight-mk7v3/",

  "https://grokholsky.com/ua/product/apple/ipad/ipad-mini-6/ipad-mini-6-wi-fi-cellular-256gb-space-gray-mk8f3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-mini-6/ipad-mini-6-wi-fi-cellular-256gb-purple-mk8k3/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-mini-6/ipad-mini-6-wi-fi-cellular-256gb-pink-mlx93/",
  "https://grokholsky.com/ua/product/apple/ipad/ipad-mini-6/ipad-mini-6-wi-fi-cellular-256gb-starlight-mk8h3/"
];

const arrLinkIpadMrFix = [
  "https://www.mrfix.ua/ua/apple-ipad-pro-129-2022-wi-fi-cellular-128gb-space-gray-mp5x3-mp1x3/?utm_medium=cpc&utm_source=hotline&utm_campaign=Планшеты&utm_term=Apple+iPad+Pro+12.9+2022+Wi-Fi+%2B+Cellular+128GB+Space+Gray+%28MP5X3%2C+MP1X3%29&utm_id=hotline_386&utm_content=051713",
  "https://www.mrfix.ua/ua/apple-ipad-pro-129-2022-wi-fi-cellular-128gb-silver-mp5y3-mp1y3/",
  "https://www.mrfix.ua/ua/apple-ipad-109-2022-wi-fi-64gb-silver-mpq03/"
];
const arrLinkIpadBuyUA = [
  "http://www.buy.ua/shop/1400216/1400748/1729323.html",
  "http://www.buy.ua/shop/1400216/1400748/1729325.html",
  "http://www.buy.ua/shop/1400216/1400750/1729365.html"
];
const arrLinkJabkoIpadNew = [
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2024/apple-ipad-air-11-128gb-wi-fi-blue-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2024/apple-ipad-air-11-128gb-wi-fi-purple-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2024/apple-ipad-air-11-128gb-wi-fi-starlight-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2024/apple-ipad-air-11-128gb-wi-fi-space-gray-2024",

  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2024/apple-ipad-air-11-128gb-wi-fi--lte-blue-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2024/apple-ipad-air-11-128gb-wi-fi--lte-purple-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2024/apple-ipad-air-11-128gb-wi-fi--lte-starlight-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2024/apple-ipad-air-11-128gb-wi-fi--lte-space-gray-2024",

  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2024/apple-ipad-air-11-256gb-wi-fi-blue-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2024/apple-ipad-air-11-256gb-wi-fi-purple-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2024/apple-ipad-air-11-256gb-wi-fi-starlight-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2024/apple-ipad-air-11-256gb-wi-fi-space-gray-2024",

  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2024/apple-ipad-air-11-256gb-wi-fi--lte-blue-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2024/apple-ipad-air-11-256gb-wi-fi--lte-purple-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2024/apple-ipad-air-11-256gb-wi-fi--lte-starlight-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2024/apple-ipad-air-11-256gb-wi-fi--lte-space-gray-2024",

  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2024/apple-ipad-air-11-512gb-wi-fi-blue-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2024/apple-ipad-air-11-512gb-wi-fi-purple-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2024/apple-ipad-air-11-512gb-wi-fi-starlight-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2024/apple-ipad-air-11-512gb-wi-fi-space-gray-2024",

  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2024/apple-ipad-air-11-512gb-wi-fi--lte-blue-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2024/apple-ipad-air-11-512gb-wi-fi--lte-purple-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2024/apple-ipad-air-11-512gb-wi-fi--lte-starlight-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2024/apple-ipad-air-11-512gb-wi-fi--lte-space-gray-2024",


  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2024/apple-ipad-air-13-128gb-wi-fi-blue-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2024/apple-ipad-air-13-128gb-wi-fi-purple-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2024/apple-ipad-air-13-128gb-wi-fi-starlight-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2024/apple-ipad-air-13-128gb-wi-fi-space-gray-2024",

  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2024/apple-ipad-air-13-128gb-wi-fi--lte-blue-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2024/apple-ipad-air-13-128gb-wi-fi--lte-purple-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2024/apple-ipad-air-13-128gb-wi-fi--lte-starlight-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2024/apple-ipad-air-13-128gb-wi-fi--lte-space-gray-2024",

  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2024/apple-ipad-air-13-256gb-wi-fi-blue-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2024/apple-ipad-air-13-256gb-wi-fi-purple-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2024/apple-ipad-air-13-256gb-wi-fi-starlight-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2024/apple-ipad-air-13-256gb-wi-fi-space-gray-2024",

  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2024/apple-ipad-air-13-256gb-wi-fi--lte-blue-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2024/apple-ipad-air-13-256gb-wi-fi--lte-purple-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2024/apple-ipad-air-13-256gb-wi-fi--lte-starlight-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2024/apple-ipad-air-13-256gb-wi-fi--lte-space-gray-2024",

  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2024/apple-ipad-air-13-512gb-wi-fi-blue-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2024/apple-ipad-air-13-512gb-wi-fi-purple-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2024/apple-ipad-air-13-512gb-wi-fi-starlight-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2024/apple-ipad-air-13-512gb-wi-fi-space-gray-2024",

  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2024/apple-ipad-air-13-512gb-wi-fi--lte-blue-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2024/apple-ipad-air-13-512gb-wi-fi--lte-purple-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2024/apple-ipad-air-13-512gb-wi-fi--lte-starlight-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2024/apple-ipad-air-13-512gb-wi-fi--lte-space-gray-2024",

  "https://jabko.ua/ipad/apple-ipad-pro/apple-ipad-pro-11-2024/planshet-apple-ipad-pro-11-2024-256gb-space-black-wi-fi-m4",
  "https://jabko.ua/ipad/apple-ipad-pro/apple-ipad-pro-11-2024/planshet-apple-ipad-pro-11-2024-256gb-silver-wi-fi-m4",
  "https://jabko.ua/ipad/apple-ipad-pro/apple-ipad-pro-11-2024/planshet-apple-ipad-pro-11-2024-256gb-space-black-wi-fi--lte-m4",
  "https://jabko.ua/ipad/apple-ipad-pro/apple-ipad-pro-11-2024/planshet-apple-ipad-pro-11-2024-256gb-silver-wi-fi--lte-m4",

  "https://jabko.ua/ipad/apple-ipad-pro/apple-ipad-pro-11-2024/planshet-apple-ipad-pro-11-2024-512gb-space-black-wi-fi-m4",
  "https://jabko.ua/ipad/apple-ipad-pro/apple-ipad-pro-11-2024/planshet-apple-ipad-pro-11-2024-512gb-silver-wi-fi-m4",
  "https://jabko.ua/ipad/apple-ipad-pro/apple-ipad-pro-11-2024/planshet-apple-ipad-pro-11-2024-512gb-space-black-wi-fi--lte-m4",
  "https://jabko.ua/ipad/apple-ipad-pro/apple-ipad-pro-11-2024/planshet-apple-ipad-pro-11-2024-512gb-silver-wi-fi--lte-m4",

  "https://jabko.ua/ipad/apple-ipad-pro/apple-ipad-pro-11-2024/planshet-apple-ipad-pro-11-2024-1tb-space-black-wi-fi-m4",
  "https://jabko.ua/ipad/apple-ipad-pro/apple-ipad-pro-11-2024/planshet-apple-ipad-pro-11-2024-1tb-silver-wi-fi-m4",
  "https://jabko.ua/ipad/apple-ipad-pro/apple-ipad-pro-11-2024/planshet-apple-ipad-pro-11-2024-1tb-space-black-wi-fi--lte-m4",
  "https://jabko.ua/ipad/apple-ipad-pro/apple-ipad-pro-11-2024/planshet-apple-ipad-pro-11-2024-1tb-silver-wi-fi--lte-m4",



  "https://jabko.ua/ipad/apple-ipad-pro/apple-ipad-pro-13-2024/planshet-apple-ipad-pro-13-2024-256gb-space-black-wi-fi-m4",
  "https://jabko.ua/ipad/apple-ipad-pro/apple-ipad-pro-13-2024/planshet-apple-ipad-pro-13-2024-256gb-silver-wi-fi-m4",
  "https://jabko.ua/ipad/apple-ipad-pro/apple-ipad-pro-13-2024/planshet-apple-ipad-pro-13-2024-256gb-space-black-wi-fi--lte-m4",
  "https://jabko.ua/ipad/apple-ipad-pro/apple-ipad-pro-13-2024/planshet-apple-ipad-pro-13-2024-256gb-silver-wi-fi--lte-m4",

  "https://jabko.ua/ipad/apple-ipad-pro/apple-ipad-pro-13-2024/planshet-apple-ipad-pro-13-2024-512gb-space-black-wi-fi-m4",
  "https://jabko.ua/ipad/apple-ipad-pro/apple-ipad-pro-13-2024/planshet-apple-ipad-pro-13-2024-512gb-silver-wi-fi-m4",
  "https://jabko.ua/ipad/apple-ipad-pro/apple-ipad-pro-13-2024/planshet-apple-ipad-pro-13-2024-512gb-space-black-wi-fi--lte-m4",
  "https://jabko.ua/ipad/apple-ipad-pro/apple-ipad-pro-13-2024/planshet-apple-ipad-pro-13-2024-512gb-silver-wi-fi--lte-m4",

  "https://jabko.ua/ipad/apple-ipad-pro/apple-ipad-pro-13-2024/planshet-apple-ipad-pro-13-2024-1tb-space-black-wi-fi-m4",
  "https://jabko.ua/ipad/apple-ipad-pro/apple-ipad-pro-13-2024/planshet-apple-ipad-pro-13-2024-1tb-silver-wi-fi-m4",
  "https://jabko.ua/ipad/apple-ipad-pro/apple-ipad-pro-13-2024/planshet-apple-ipad-pro-13-2024-1tb-space-black-wi-fi--lte-m4",
  "https://jabko.ua/ipad/apple-ipad-pro/apple-ipad-pro-13-2024/planshet-apple-ipad-pro-13-2024-1tb-silver-wi-fi--lte-m4",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2024/apple-ipad-air-11-1tb-wi-fi-blue-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2024/apple-ipad-air-11-1tb-wi-fi-purple-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2024/apple-ipad-air-11-1tb-wi-fi-starlight-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2024/apple-ipad-air-11-1tb-wi-fi-space-gray-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2024/apple-ipad-air-11-1tb-wi-fi--lte-blue-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2024/apple-ipad-air-11-1tb-wi-fi--lte-purple-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2024/apple-ipad-air-11-1tb-wi-fi--lte-starlight-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2024/apple-ipad-air-11-1tb-wi-fi--lte-space-gray-2024",

  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2024/apple-ipad-air-13-1tb-wi-fi-blue-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2024/apple-ipad-air-13-1tb-wi-fi-purple-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2024/apple-ipad-air-13-1tb-wi-fi-starlight-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2024/apple-ipad-air-13-1tb-wi-fi-space-gray-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2024/apple-ipad-air-13-1tb-wi-fi--lte-blue-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2024/apple-ipad-air-13-1tb-wi-fi--lte-purple-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2024/apple-ipad-air-13-1tb-wi-fi--lte-starlight-2024",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2024/apple-ipad-air-13-1tb-wi-fi--lte-space-gray-2024",

  "https://jabko.ua/ipad/apple-ipad-pro/apple-ipad-pro-11-2024/planshet-apple-ipad-pro-11-2024-2tb-space-black-wi-fi-m4",
  "https://jabko.ua/ipad/apple-ipad-pro/apple-ipad-pro-11-2024/planshet-apple-ipad-pro-11-2024-2tb-silver-wi-fi-m4",
  "https://jabko.ua/ipad/apple-ipad-pro/apple-ipad-pro-11-2024/planshet-apple-ipad-pro-11-2024-2tb-space-black-wi-fi--lte-m4",
  "https://jabko.ua/ipad/apple-ipad-pro/apple-ipad-pro-11-2024/planshet-apple-ipad-pro-11-2024-2tb-silver-wi-fi--lte-m4",
  "https://jabko.ua/ipad/apple-ipad-pro/apple-ipad-pro-13-2024/planshet-apple-ipad-pro-13-2024-2tb-space-black-wi-fi-m4",
  "https://jabko.ua/ipad/apple-ipad-pro/apple-ipad-pro-13-2024/planshet-apple-ipad-pro-13-2024-2tb-silver-wi-fi-m4",
  "https://jabko.ua/ipad/apple-ipad-pro/apple-ipad-pro-13-2024/planshet-apple-ipad-pro-13-2024-2tb-space-black-wi-fi--lte-m4",
  "https://jabko.ua/ipad/apple-ipad-pro/apple-ipad-pro-13-2024/planshet-apple-ipad-pro-13-2024-2tb-silver-wi-fi--lte-m4",
];

const arrLinkIstoreIpadNew = [

  "https://www.istore.ua/ua/item/apple-ipad-air-11-2024-wi-fi-128-gb-m2-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2024-wi-fi-128-gb-m2-purple/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2024-wi-fi-128gb-m2-starlight/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2024-wi-fi-128-gb-m2-space-gray-muwc3/",

  "https://www.istore.ua/ua/item/apple-ipad-air-11-2024-wi-fi-cellular-128-gb-m2-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2024-wi-fi-cellular-128-gb-m2-purple/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2024-wi-fi-cellular-128gb-m2-starlight/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2024-wi-fi-cellular-128-gb-m2-space-gray/",

  "https://www.istore.ua/ua/item/apple-ipad-air-11-2024-wi-fi-256-gb-m2-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2024-wi-fi-256-gb-m2-purple/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2024-wi-fi-256gb-m2-starlight/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2024-wi-fi-256-gb-m2-space-gray-muwc3/",

  "https://www.istore.ua/ua/item/apple-ipad-air-11-2024-wi-fi-cellular-256-gb-m2-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2024-wi-fi-cellular-256-gb-m2-purple/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2024-wi-fi-cellular-256-gb-m2-starlight/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2024-wi-fi-cellular-256-gb-m2-space-gray/",

  "https://www.istore.ua/ua/item/apple-ipad-air-11-2024-wi-fi-512-gb-m2-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2024-wi-fi-512-gb-m2-purple/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2024-wi-fi-512-gb-m2-starlight/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2024-wi-fi-512-gb-m2-space-gray-muwc3/",

  "https://www.istore.ua/ua/item/apple-ipad-air-11-2024-wi-fi-cellular-512-gb-m2-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2024-wi-fi-cellular-512-gb-m2-purple/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2024-wi-fi-cellular-512-gb-m2-starlight/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2024-wi-fi-cellular-512-gb-m2-space-gray/",


  "https://www.istore.ua/ua/item/apple-ipad-air-13-2024-wi-fi-128-gb-m2-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2024-wi-fi-128-gb-m2-purple/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2024-wi-fi-128-gb-m2-starlight/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2024-wi-fi-128-gb-m2-space-gray/",

  "https://www.istore.ua/ua/item/apple-ipad-air-13-2024-wi-fi-cellular-128-gb-m2-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2024-wi-fi-cellular-128-gb-m2-purple/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2024-wi-fi-cellular-128-gb-m2-starlight/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2024-wi-fi-cellular-128-gb-m2-space-gray/",

  "https://www.istore.ua/ua/item/apple-ipad-air-13-2024-wi-fi-256-gb-m2-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2024-wi-fi-256-gb-m2-purple/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2024-wi-fi-256-gb-m2-starlight/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2024-wi-fi-256-gb-m2-space-gray/",

  "https://www.istore.ua/ua/item/apple-ipad-air-13-2024-wi-fi-cellular-256-gb-m2-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2024-wi-fi-cellular-256-gb-m2-purple/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2024-wi-fi-cellular-256-gb-m2-starlight/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2024-wi-fi-cellular-256-gb-m2-space-gray/",

  "https://www.istore.ua/ua/item/apple-ipad-air-13-2024-wi-fi-512-gb-m2-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2024-wi-fi-512-gb-m2-purple/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2024-wi-fi-512-gb-m2-starlight/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2024-wi-fi-512-gb-m2-space-gray/",

  "https://www.istore.ua/ua/item/apple-ipad-air-13-2024-wi-fi-cellular-512-gb-m2-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2024-wi-fi-cellular-512-gb-m2-purple/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2024-wi-fi-cellular-512-gb-m2-starlight/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2024-wi-fi-cellular-512-gb-m2-space-gray/",

  "https://www.istore.ua/ua/item/apple-ipad-pro-11-2024-wi-fi-256gb-m4-space-black/",
  "https://www.istore.ua/ua/item/apple-ipad-pro-11-2024-wi-fi-256gb-m4-silver/",
  "https://www.istore.ua/ua/item/apple-ipad-pro-11-2024-wi-fi-cellular-256-gb-m4-space-black/",
  "https://www.istore.ua/ua/item/apple-ipad-pro-11-2024-wi-fi-cellular-256-gb-m4-silver/",

  "https://www.istore.ua/ua/item/apple-ipad-pro-11-2024-wi-fi-512-gb-m4-space-black/",
  "https://www.istore.ua/ua/item/apple-ipad-pro-11-2024-wi-fi-512gb-m4-silver/",
  "https://www.istore.ua/ua/item/apple-ipad-pro-11-2024-wi-fi-cellular-2-tb-m4-space-black/",
  "https://www.istore.ua/ua/item/apple-ipad-pro-11-2024-wi-fi-cellular-512-gb-m4-silver/",

  "https://www.istore.ua/ua/item/apple-ipad-pro-11-2024-wi-fi-1-tb-m4-space-black/",
  "https://www.istore.ua/ua/item/apple-ipad-pro-11-2024-wi-fi-1tb-m4-silver/",
  "https://www.istore.ua/ua/item/apple-ipad-pro-11-2024-wi-fi-cellular-1-tb-m4-space-black/",
  "https://www.istore.ua/ua/item/apple-ipad-pro-11-2024-wi-fi-cellular-1-tb-m4-silver/",



  "https://www.istore.ua/ua/item/apple-ipad-pad-pro-13-m4-256-gb-wi-fi-space-black/",
  "https://www.istore.ua/ua/item/apple-ipad-pad-pro-13-m4-256-gb-wi-fi-silver/",
  "https://www.istore.ua/ua/item/apple-ipad-pad-pro-13-m4-256-gb-wi-fi-cellular-space-black/",
  "https://www.istore.ua/ua/item/apple-ipad-pad-pro-13-m4-256-gb-wi-fi-cellular-silver/",

  "https://www.istore.ua/ua/item/apple-ipad-pad-pro-13-m4-512-gb-wi-fi-space-black/",
  "https://www.istore.ua/ua/item/apple-ipad-pad-pro-13-m4-512-gb-wi-fi-silver/",
  "https://www.istore.ua/ua/item/apple-ipad-pad-pro-13-m4-512-gb-wi-fi-cellular-space-black/",
  "https://www.istore.ua/ua/item/apple-ipad-pad-pro-13-m4-512-gb-wi-fi-cellular-silver/",

  "https://www.istore.ua/ua/item/apple-ipad-pad-pro-13-m4-1-tb-wi-fi-space-black/",
  "https://www.istore.ua/ua/item/apple-ipad-pad-pro-13-m4-1-tb-wi-fi-silver/",
  "https://www.istore.ua/ua/item/apple-ipad-pad-pro-13-m4-1-tb-wi-fi-cellular-space-black/",
  "https://www.istore.ua/ua/item/apple-ipad-pad-pro-13-m4-1-tb-wi-fi-cellular-silver/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2024-wi-fi-1-tb-m2-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2024-wi-fi-1-tb-m2-purple/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2024-wi-fi-1-tb-m2-starlight/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2024-wi-fi-1-tb-m2-space-gray/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2024-wi-fi-cellular-1-tb-m2-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2024-wi-fi-cellular-1-tb-m2-purple/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2024-wi-fi-cellular-1-tb-m2-starlight/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2024-wi-fi-cellular-1-tb-m2-space-gray/",

  "https://www.istore.ua/ua/item/apple-ipad-air-13-2024-wi-fi-1-tb-m2-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2024-wi-fi-1-tb-m2-purple/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2024-wi-fi-1-tb-m2-starlight/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2024-wi-fi-1-tb-m2-space-gray/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2024-wi-fi-cellular-1-tb-m2-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2024-wi-fi-cellular-1-tb-m2-purple/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2024-wi-fi-cellular-1-tb-m2-starlight/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2024-wi-fi-cellular-1-tb-m2-space-gray/",

  "https://www.istore.ua/ua/item/apple-ipad-pro-11-2024-wi-fi-2-tb-m4-space-black/",
  "https://www.istore.ua/ua/item/apple-ipad-pro-11-2024-wi-fi-cellular-2-tb-m4-silver/",
  "https://www.istore.ua/ua/item/apple-ipad-pad-pro-13-m4-2-tb-wi-fi-space-black/",
  "https://www.istore.ua/ua/item/apple-ipad-pad-pro-13-m4-2-tb-wi-fi-silver/",
  "https://www.istore.ua/ua/item/apple-ipad-pad-pro-13-m4-2-tb-wi-fi-cellular-space-black/",
  "https://www.istore.ua/ua/item/apple-ipad-pad-pro-13-m4-2-tb-wi-fi-cellular-silver/",
];

const arrLinkGroIpadNew = [
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2024/ipad-air-11-2024-wi-fi-128gb-blue-muwd3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2024/ipad-air-11-2024-wi-fi-128gb-purple-muwf3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2024/ipad-air-11-2024-wi-fi-128gb-starlight-muwe3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2024/ipad-air-11-2024-wi-fi-128gb-space-gray-muwc3/",

  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2024/ipad-air-11-2024-wi-fi-cellular-128gb-blue-muxe3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2024/ipad-air-11-2024-wi-fi-cellular-128gb-purple-muxg3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2024/ipad-air-11-2024-wi-fi-cellular-128gb-starlight-muxf3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2024/ipad-air-11-2024-wi-fi-cellular-128gb-space-gray-muxd3/",

  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2024/ipad-air-11-2024-wi-fi-256gb-blue-muwh3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2024/ipad-air-11-2024-wi-fi-256gb-purple-muwk3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2024/ipad-air-11-2024-wi-fi-256gb-starlight-muwj3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2024/ipad-air-11-2024-wi-fi-256gb-space-gray-muwg3/",

  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2024/ipad-air-11-2024-wi-fi-cellular-256gb-blue-muxj3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2024/ipad-air-11-2024-wi-fi-cellular-256gb-purple-muxl3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2024/ipad-air-11-2024-wi-fi-cellular-256gb-starlight-muxk3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2024/ipad-air-11-2024-wi-fi-cellular-256gb-space-gray-muxh3/",

  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2024/ipad-air-11-2024-wi-fi-512gb-blue-muwm3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2024/ipad-air-11-2024-wi-fi-512gb-purple-muwp3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2024/ipad-air-11-2024-wi-fi-512gb-starlight-muwn3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2024/ipad-air-11-2024-wi-fi-512gb-space-gray-muwl3/",

  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2024/ipad-air-11-2024-wi-fi-cellular-512gb-blue-muxn3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2024/ipad-air-11-2024-wi-fi-cellular-512gb-purple-muxq3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2024/ipad-air-11-2024-wi-fi-cellular-512gb-starlight-muxp3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2024/ipad-air-11-2024-wi-fi-cellular-512gb-space-gray-muxm3/",


  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2024/ipad-air-13-2024-wi-fi-128gb-blue-mv283/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2024/ipad-air-13-2024-wi-fi-128gb-purple-mv2c3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2024/ipad-air-13-2024-wi-fi-128gb-starlight-mv293/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2024/ipad-air-13-2024-wi-fi-128gb-space-gray-mv273/",

  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2024/ipad-air-13-2024-wi-fi-cellular-128gb-blue-mv6r3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2024/ipad-air-13-2024-wi-fi-cellular-128gb-purple-mv6u3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2024/ipad-air-13-2024-wi-fi-cellular-128gb-starlight-mv6t3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2024/ipad-air-13-2024-wi-fi-cellular-128gb-space-gray-mv6q3/",

  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2024/ipad-air-13-2024-wi-fi-256gb-blue-mv2f3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2024/ipad-air-13-2024-wi-fi-256gb-purple-mv2h3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2024/ipad-air-13-2024-wi-fi-256gb-starlight-mv2g3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2024/ipad-air-13-2024-wi-fi-256gb-space-gray-mv2d3/",

  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2024/ipad-air-13-2024-wi-fi-cellular-256gb-blue-mv6w3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2024/ipad-air-13-2024-wi-fi-cellular-256gb-purple-mv6y3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2024/ipad-air-13-2024-wi-fi-cellular-256gb-starlight-mv6x3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2024/ipad-air-13-2024-wi-fi-cellular-256gb-space-gray-mv6v3/",

  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2024/ipad-air-13-2024-wi-fi-512gb-blue-mv2k3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2024/ipad-air-13-2024-wi-fi-512gb-purple-mv2n3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2024/ipad-air-13-2024-wi-fi-512gb-starlight-mv2l3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2024/ipad-air-13-2024-wi-fi-512gb-space-gray-mv2j3/",

  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2024/ipad-air-13-2024-wi-fi-cellular-512gb-blue-mv713/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2024/ipad-air-13-2024-wi-fi-cellular-512gb-purple-mv733/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2024/ipad-air-13-2024-wi-fi-cellular-512gb-starlight-mv723/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2024/ipad-air-13-2024-wi-fi-cellular-512gb-space-gray-mv703/",

  "https://grokholsky.com/product/apple/ipad/ipad-pro-11-2024/ipad-pro-11-2024-wi-fi-256gb-space-black-mvv83/",
  "https://grokholsky.com/product/apple/ipad/ipad-pro-11-2024/ipad-pro-11-2024-wi-fi-256gb-silver-mvv93/",
  "https://grokholsky.com/product/apple/ipad/ipad-pro-11-2024/ipad-pro-11-2024-wi-fi-cellular-256gb-space-black-mvw13/",
  "https://grokholsky.com/product/apple/ipad/ipad-pro-11-2024/ipad-pro-11-2024-wi-fi-cellular-256gb-silver-mvw23/",

  "https://grokholsky.com/product/apple/ipad/ipad-pro-11-2024/ipad-pro-11-2024-wi-fi-512gb-space-black-mvvc3/",
  "https://grokholsky.com/product/apple/ipad/ipad-pro-11-2024/ipad-pro-11-2024-wi-fi-512gb-silver-mvvd3/",
  "https://grokholsky.com/product/apple/ipad/ipad-pro-11-2024/ipad-pro-11-2024-wi-fi-cellular-512gb-space-black-mvw33/",
  "https://grokholsky.com/product/apple/ipad/ipad-pro-11-2024/ipad-pro-11-2024-wi-fi-cellular-512gb-silver-mvw43/",

  "https://grokholsky.com/product/apple/ipad/ipad-pro-11-2024/ipad-pro-11-2024-wi-fi-1tb-space-black-mvve3/",
  "https://grokholsky.com/product/apple/ipad/ipad-pro-11-2024/ipad-pro-11-2024-wi-fi-1tb-silver-mvvf3/",
  "https://grokholsky.com/product/apple/ipad/ipad-pro-11-2024/ipad-pro-11-2024-wi-fi-cellular-1tb-space-black-mvw53/",
  "https://grokholsky.com/product/apple/ipad/ipad-pro-11-2024/ipad-pro-11-2024-wi-fi-cellular-1tb-silver-mvw63/",



  "https://grokholsky.com/product/apple/ipad/ipad-pro-13-2024/ipad-pro-13-2024-wi-fi-256gb-space-black-mvx23/",
  "https://grokholsky.com/product/apple/ipad/ipad-pro-13-2024/ipad-pro-13-2024-wi-fi-256gb-silver-mvx33/",
  "https://grokholsky.com/product/apple/ipad/ipad-pro-13-2024/ipad-pro-13-2024-wi-fi-cellular-256gb-space-black-mvxr3/",
  "https://grokholsky.com/product/apple/ipad/ipad-pro-13-2024/ipad-pro-13-2024-wi-fi-cellular-256gb-silver-mvxt3/",

  "https://grokholsky.com/product/apple/ipad/ipad-pro-13-2024/ipad-pro-13-2024-wi-fi-512gb-space-black-mvx43/",
  "https://grokholsky.com/product/apple/ipad/ipad-pro-13-2024/ipad-pro-13-2024-wi-fi-512gb-silver-mvx53/",
  "https://grokholsky.com/product/apple/ipad/ipad-pro-13-2024/ipad-pro-13-2024-wi-fi-cellular-512gb-space-black-mvxu3/",
  "https://grokholsky.com/product/apple/ipad/ipad-pro-13-2024/ipad-pro-13-2024-wi-fi-cellular-512gb-silver-mvxv3/",

  "https://grokholsky.com/product/apple/ipad/ipad-pro-13-2024/ipad-pro-13-2024-wi-fi-1tb-space-black-mvx63/",
  "https://grokholsky.com/product/apple/ipad/ipad-pro-13-2024/ipad-pro-13-2024-wi-fi-1tb-silver-mvx73/",
  "https://grokholsky.com/product/apple/ipad/ipad-pro-13-2024/ipad-pro-13-2024-wi-fi-cellular-1tb-space-black-mvxw3/",
  "https://grokholsky.com/product/apple/ipad/ipad-pro-13-2024/ipad-pro-13-2024-wi-fi-cellular-1tb-silver-mvxx3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2024/ipad-air-11-2024-wi-fi-1tb-blue-muwr3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2024/ipad-air-11-2024-wi-fi-1tb-purple-muwu3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2024/ipad-air-11-2024-wi-fi-1tb-starlight-muwt3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2024/ipad-air-11-2024-wi-fi-1tb-space-gray-muwq3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2024/ipad-air-11-2024-wi-fi-cellular-1tb-blue-muxt3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2024/ipad-air-11-2024-wi-fi-cellular-1tb-purple-muxv3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2024/ipad-air-11-2024-wi-fi-cellular-1tb-starlight-muxu3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2024/ipad-air-11-2024-wi-fi-cellular-1tb-space-gray-muxr3/",

  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2024/ipad-air-13-2024-wi-fi-1tb-blue-mv2q3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2024/ipad-air-13-2024-wi-fi-1tb-purple-mv2t3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2024/ipad-air-13-2024-wi-fi-1tb-starlight-mv2r3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2024/ipad-air-13-2024-wi-fi-1tb-space-gray-mv2p3/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2024/ipad-air-13-2024-wi-fi-cellular-1tb-blue-mv753/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2024/ipad-air-13-2024-wi-fi-cellular-1tb-purple-mv773/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2024/ipad-air-13-2024-wi-fi-cellular-1tb-starlight-mv763/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2024/ipad-air-13-2024-wi-fi-cellular-1tb-space-gray-mv743/",

  "https://grokholsky.com/product/apple/ipad/ipad-pro-11-2024/ipad-pro-11-2024-wi-fi-2tb-space-black-mvvg3/",
  "https://grokholsky.com/product/apple/ipad/ipad-pro-11-2024/ipad-pro-11-2024-wi-fi-2tb-silver-mvvh3/",
  "https://grokholsky.com/product/apple/ipad/ipad-pro-11-2024/ipad-pro-11-2024-wi-fi-cellular-2tb-space-black-mvw73/",
  "https://grokholsky.com/product/apple/ipad/ipad-pro-11-2024/ipad-pro-11-2024-wi-fi-cellular-2tb-silver-mvw83/",
  "https://grokholsky.com/product/apple/ipad/ipad-pro-13-2024/ipad-pro-13-2024-wi-fi-2tb-space-black-mvx83/",
  "https://grokholsky.com/product/apple/ipad/ipad-pro-13-2024/ipad-pro-13-2024-wi-fi-2tb-silver-mvx93/",
  "https://grokholsky.com/product/apple/ipad/ipad-pro-13-2024/ipad-pro-13-2024-wi-fi-cellular-2tb-space-black-mvxy3/",
  "https://grokholsky.com/product/apple/ipad/ipad-pro-13-2024/ipad-pro-13-2024-wi-fi-cellular-2tb-silver-mvy03/",
];

const arrLinkMPIpadNew = [
  "https://mobileplanet.ua/apple-ipad-air-11-2024-wi-fi-128gb-blue-muwd3-2024-314278",
  "https://mobileplanet.ua/apple-ipad-air-11-2024-wi-fi-128gb-purple-muwf3-20-314279",
  "https://mobileplanet.ua/apple-ipad-air-11-2024-wi-fi-128gb-starlight-muwe3-314281",
  "https://mobileplanet.ua/apple-ipad-air-11-2024-wi-fi-128gb-space-gray-muwc-314280",

  "https://mobileplanet.ua/apple-ipad-air-11-2024-wi-fi-cellular-128gb-blue-m-314294",
  "https://mobileplanet.ua/apple-ipad-air-11-2024-wi-fi-cellular-128gb-purple-314295",
  "https://mobileplanet.ua/apple-ipad-air-11-2024-wi-fi-cellular-128gb-starli-314297",
  "https://mobileplanet.ua/apple-ipad-air-11-2024-wi-fi-cellular-128gb-space-314296",

  "https://mobileplanet.ua/apple-ipad-air-11-2024-wi-fi-256gb-blue-muwh3-2024-314286",
  "https://mobileplanet.ua/apple-ipad-air-11-2024-wi-fi-256gb-purple-muwk3-20-314287",
  "https://mobileplanet.ua/apple-ipad-air-11-2024-wi-fi-256gb-starlight-muwj3-314289",
  "https://mobileplanet.ua/apple-ipad-air-11-2024-wi-fi-256gb-space-gray-muwg-314288",

  "https://mobileplanet.ua/apple-ipad-air-11-2024-wi-fi-cellular-256gb-blue-m-314302",
  "https://mobileplanet.ua/apple-ipad-air-11-2024-wi-fi-cellular-256gb-purple-314303",
  "https://mobileplanet.ua/apple-ipad-air-11-2024-wi-fi-cellular-256gb-starli-314305",
  "https://mobileplanet.ua/apple-ipad-air-11-2024-wi-fi-cellular-256gb-space-314304",

  "https://mobileplanet.ua/apple-ipad-air-11-2024-wi-fi-512gb-blue-muwm3-2024-314290",
  "https://mobileplanet.ua/apple-ipad-air-11-2024-wi-fi-512gb-purple-muwp3-20-314291",
  "https://mobileplanet.ua/apple-ipad-air-11-2024-wi-fi-512gb-starlight-muwn3-314293",
  "https://mobileplanet.ua/apple-ipad-air-11-2024-wi-fi-512gb-space-gray-muwl-314292",

  "https://mobileplanet.ua/apple-ipad-air-11-2024-wi-fi-cellular-512gb-blue-m-314306",
  "https://mobileplanet.ua/apple-ipad-air-11-2024-wi-fi-cellular-512gb-purple-314307",
  "https://mobileplanet.ua/apple-ipad-air-11-2024-wi-fi-cellular-512gb-starli-314309",
  "https://mobileplanet.ua/apple-ipad-air-11-2024-wi-fi-cellular-512gb-space-314308",


  "https://mobileplanet.ua/apple-ipad-air-13-2024-wi-fi-128gb-blue-mv283-2024-314310",
  "https://mobileplanet.ua/apple-ipad-air-13-2024-wi-fi-128gb-purple-mv2c3-20-314311",
  "https://mobileplanet.ua/apple-ipad-air-13-2024-wi-fi-128gb-starlight-mv293-314313",
  "https://mobileplanet.ua/apple-ipad-air-13-2024-wi-fi-128gb-space-gray-mv27-314312",

  "https://mobileplanet.ua/apple-ipad-air-13-2024-wi-fi-cellular-128gb-blue-m-314326",
  "https://mobileplanet.ua/apple-ipad-air-13-2024-wi-fi-cellular-128gb-purple-314327",
  "https://mobileplanet.ua/apple-ipad-air-13-2024-wi-fi-cellular-128gb-starli-314329",
  "https://mobileplanet.ua/apple-ipad-air-13-2024-wi-fi-cellular-128gb-space-314328",

  "https://mobileplanet.ua/apple-ipad-air-13-2024-wi-fi-256gb-blue-mv2f3-2024-314318",
  "https://mobileplanet.ua/apple-ipad-air-13-2024-wi-fi-256gb-purple-mv2h3-20-314319",
  "https://mobileplanet.ua/apple-ipad-air-13-2024-wi-fi-256gb-starlight-mv2g3-314321",
  "https://mobileplanet.ua/apple-ipad-air-13-2024-wi-fi-256gb-space-gray-mv2d-314320",

  "https://mobileplanet.ua/apple-ipad-air-13-2024-wi-fi-cellular-256gb-blue-m-314334",
  "https://mobileplanet.ua/apple-ipad-air-13-2024-wi-fi-cellular-256gb-purple-314335",
  "https://mobileplanet.ua/apple-ipad-air-13-2024-wi-fi-cellular-256gb-starli-314337",
  "https://mobileplanet.ua/apple-ipad-air-13-2024-wi-fi-cellular-256gb-space-314336",

  "https://mobileplanet.ua/apple-ipad-air-13-2024-wi-fi-512gb-blue-mv2k3-2024-314322",
  "https://mobileplanet.ua/apple-ipad-air-13-2024-wi-fi-512gb-purple-mv2n3-20-314323",
  "https://mobileplanet.ua/apple-ipad-air-13-2024-wi-fi-512gb-starlight-mv2l3-314325",
  "https://mobileplanet.ua/apple-ipad-air-13-2024-wi-fi-512gb-space-gray-mv2j-314324",

  "https://mobileplanet.ua/apple-ipad-air-13-2024-wi-fi-cellular-512gb-blue-m-314338",
  "https://mobileplanet.ua/apple-ipad-air-13-2024-wi-fi-cellular-512gb-purple-314339",
  "https://mobileplanet.ua/apple-ipad-air-13-2024-wi-fi-cellular-512gb-starli-314341",
  "https://mobileplanet.ua/apple-ipad-air-13-2024-wi-fi-cellular-512gb-space-314340",

  "https://mobileplanet.ua/apple-ipad-pro-11-2024-wi-fi-256gb-space-black-mvv-314347",
  "https://mobileplanet.ua/apple-ipad-pro-11-2024-wi-fi-256gb-silver-mvv93-20-314346",
  "https://mobileplanet.ua/apple-ipad-pro-11-2024-wi-fi-cellular-256gb-space-314359",
  "https://mobileplanet.ua/apple-ipad-pro-11-2024-wi-fi-cellular-256gb-silver-314358",

  "https://mobileplanet.ua/apple-ipad-pro-11-2024-wi-fi-512gb-space-black-mvv-314353",
  "https://mobileplanet.ua/apple-ipad-pro-11-2024-wi-fi-512gb-silver-mvvd3-20-314352",
  "https://mobileplanet.ua/apple-ipad-pro-11-2024-wi-fi-cellular-512gb-space-314365",
  "https://mobileplanet.ua/apple-ipad-pro-11-2024-wi-fi-cellular-512gb-silver-314364",

  "https://mobileplanet.ua/apple-ipad-pro-11-2024-wi-fi-1tb-space-black-mvve3-314344",
  "https://mobileplanet.ua/apple-ipad-pro-11-2024-wi-fi-1tb-silver-mvvf3-2024-314342",
  "https://mobileplanet.ua/apple-ipad-pro-11-2024-wi-fi-cellular-1tb-space-bl-314356",
  "https://mobileplanet.ua/apple-ipad-pro-11-2024-wi-fi-cellular-1tb-silver-m-314354",


  "https://mobileplanet.ua/apple-ipad-pro-13-2024-wi-fi-256gb-space-black-mvx-314371",
  "https://mobileplanet.ua/apple-ipad-pro-13-2024-wi-fi-256gb-silver-mvx33-20-314370",
  "https://mobileplanet.ua/apple-ipad-pro-13-2024-wi-fi-cellular-256gb-space-314383",
  "https://mobileplanet.ua/apple-ipad-pro-13-2024-wi-fi-cellular-256gb-silver-314382",

  "https://mobileplanet.ua/apple-ipad-pro-13-2024-wi-fi-512gb-space-black-mvx-314377",
  "https://mobileplanet.ua/apple-ipad-pro-13-2024-wi-fi-512gb-silver-mvx53-20-314376",
  "https://mobileplanet.ua/apple-ipad-pro-13-2024-wi-fi-cellular-512gb-space-314389",
  "https://mobileplanet.ua/apple-ipad-pro-13-2024-wi-fi-cellular-512gb-silver-314388",

  "https://mobileplanet.ua/apple-ipad-pro-13-2024-wi-fi-1tb-space-black-mvx63-314368",
  "https://mobileplanet.ua/apple-ipad-pro-13-2024-wi-fi-1tb-silver-mvx73-2024-314366",
  "https://mobileplanet.ua/apple-ipad-pro-13-2024-wi-fi-cellular-1tb-space-bl-314380",
  "https://mobileplanet.ua/apple-ipad-pro-13-2024-wi-fi-cellular-1tb-silver-m-314378",
  "https://mobileplanet.ua/apple-ipad-air-11-2024-wi-fi-1tb-purple-muwu3-2024-314283",
  "https://mobileplanet.ua/apple-ipad-air-13-2024-wi-fi-1tb-blue-mv2q3-2024-314314",
  "https://mobileplanet.ua/apple-ipad-air-13-2024-wi-fi-1tb-starlight-mv2r3-2-314317",
  "https://mobileplanet.ua/apple-ipad-air-13-2024-wi-fi-1tb-space-gray-mv2p3-314316",
  "https://mobileplanet.ua/apple-ipad-pro-11-2024-wi-fi-2tb-space-black-mvvg3-314350",
  "https://mobileplanet.ua/apple-ipad-pro-11-2024-wi-fi-2tb-silver-mvvh3-2024-314348",
  "https://mobileplanet.ua/apple-ipad-pro-13-2024-wi-fi-2tb-space-black-mvx83-314374",
  "https://mobileplanet.ua/apple-ipad-pro-13-2024-wi-fi-2tb-silver-mvx93-2024-314372",
  "https://mobileplanet.ua/apple-ipad-pro-13-2024-wi-fi-cellular-2tb-space-bl-314386",
];

const arrLinkEstoreIpadNew = [
  "https://estore.ua/ua/ipad-air-m2-11-wi-fi-128gb-blue-2024/?q=muwd3",
  "https://estore.ua/ua/ipad-air-m2-11-wi-fi-128gb-purple-2024/?q=muwf3",
  "https://estore.ua/ua/ipad-air-m2-11-wi-fi-128gb-starlight-2024/?q=muwe3",
  "https://estore.ua/ua/apple-ipad-air-m3-wi-fi-64gb-space-grey-2024/?q=muwc3",

  "https://estore.ua/ua/ipad-air-m2-11-wi-fi-cellular-128gb-blue-2024/?q=muxe3",
  "https://estore.ua/ua/ipad-air-m2-11-wi-fi-cellular-128gb-purple-2024/?q=muxg3",
  "https://estore.ua/ua/ipad-air-m2-11-wi-fi-cellular-128gb-starlight-2024/?q=muxf3",
  "https://estore.ua/ua/ipad-air-m2-11-wi-fi-cellular-128gb-space-grey-2024/?q=muxd3",

  "https://estore.ua/ua/ipad-air-m2-11-wi-fi-256gb-blue-2024/?q=muwh3",
  "https://estore.ua/ua/ipad-air-m2-11-wi-fi-256gb-purple-2024/?q=muwk3",
  "https://estore.ua/ua/apple-ipad-air-m3-wi-fi-256gb-starlight-2024/?q=muwj3",
  "https://estore.ua/ua/apple-ipad-air-m3-wi-fi-256gb-space-grey-2024/?q=muwg3",

  "https://estore.ua/ua/ipad-air-m2-11-wi-fi-cellular-256gb-blue-2024/?q=muxj3",
  "https://estore.ua/ua/ipad-air-m2-11-wi-fi-cellular-256gb-purple-2024/?q=muxl3",
  "https://estore.ua/ua/ipad-air-m2-11-wi-fi-cellular-256gb-starlight-2024/?q=muxk3",
  "https://estore.ua/ua/ipad-air-m2-11-wi-fi-cellular-256gb-space-grey-2024/?q=muxh3",

  "https://estore.ua/ua/ipad-air-m2-11-wi-fi-512gb-blue-2024/?q=muwm3",
  "https://estore.ua/ua/ipad-air-m2-11-wi-fi-512gb-purple-2024/?q=muwp3",
  "https://estore.ua/ua/ipad-air-m2-11-wi-fi-512gb-starlight-2024/?q=muwn3",
  "https://estore.ua/ua/ipad-air-m2-11-wi-fi-512gb-space-grey-2024/?q=muwl3",

  "https://estore.ua/ua/ipad-air-m2-11-wi-fi-cellular-512gb-blue-2024/?q=muxn3",
  "https://estore.ua/ua/ipad-air-m2-11-wi-fi-cellular-512gb-purple-2024/?q=muxq3",
  "https://estore.ua/ua/ipad-air-m2-11-wi-fi-cellular-512gb-starlight-2024/?q=muxp3",
  "https://estore.ua/ua/ipad-air-m2-11-wi-fi-cellular-512gb-space-grey-2024/?q=muxm3",


  "https://estore.ua/ua/ipad-air-m2-13-wi-fi-128gb-blue-2024/?q=mv283",
  "https://estore.ua/ua/ipad-air-m2-13-wi-fi-128gb-purple-2024/?q=mv2c3",
  "https://estore.ua/ua/ipad-air-m2-13-wi-fi-128gb-starlight-2024/?q=mv293",
  "https://estore.ua/ua/ipad-air-m2-13-wi-fi-128gb-space-grey-2024/?q=mv273",

  "https://estore.ua/ua/ipad-air-m2-13-wi-fi-cellular-128gb-blue-2024/?q=mv6r3",
  "https://estore.ua/ua/ipad-air-m2-13-wi-fi-cellular-128gb-purple-2024/?q=mv6u3",
  "https://estore.ua/ua/ipad-air-m2-13-wi-fi-cellular-128gb-starlight-2024/?q=mv6t3",
  "https://estore.ua/ua/ipad-air-m2-13-wi-fi-cellular-128gb-space-grey-2024/?q=mv6q3",

  "https://estore.ua/ua/ipad-air-m2-13-wi-fi-256gb-blue-2024/?q=mv2f3",
  "https://estore.ua/ua/ipad-air-m2-13-wi-fi-256gb-purple-2024/?q=mv2h3",
  "https://estore.ua/ua/ipad-air-m2-13-wi-fi-256gb-starlight-2024/?q=mv2g3",
  "https://estore.ua/ua/ipad-air-m2-13-wi-fi-256gb-space-grey-2024/?q=mv2d3",

  "https://estore.ua/ua/ipad-air-m2-13-wi-fi-cellular-256gb-blue-2024/?q=mv6w3",
  "https://estore.ua/ua/ipad-air-m2-13-wi-fi-cellular-256gb-purple-2024/?q=mv6y3",
  "https://estore.ua/ua/ipad-air-m2-13-wi-fi-cellular-256gb-starlight-2024/?q=mv6x3",
  "https://estore.ua/ua/ipad-air-m2-13-wi-fi-cellular-256gb-space-grey-2024/?q=mv6v3",

  "https://estore.ua/ua/ipad-air-m2-13-wi-fi-512gb-blue-2024/?q=mv2k3",
  "https://estore.ua/ua/ipad-air-m2-13-wi-fi-512gb-purple-2024/?q=mv2n3",
  "https://estore.ua/ua/ipad-air-m2-13-wi-fi-512gb-starlight-2024/?q=mv2l3",
  "https://estore.ua/ua/ipad-air-m2-13-wi-fi-512gb-space-grey-2024/?q=mv2j3",

  "https://estore.ua/ua/ipad-air-m2-13-wi-fi-cellular-512gb-blue-2024/?q=mv713",
  "https://estore.ua/ua/ipad-air-m2-13-wi-fi-cellular-512gb-purple-2024/?q=mv733",
  "https://estore.ua/ua/ipad-air-m2-13-wi-fi-cellular-512gb-starlight-2024/?q=mv723",
  "https://estore.ua/ua/ipad-air-m2-13-wi-fi-cellular-512gb-space-grey-2024/?q=mv703",

  "https://estore.ua/ua/apple-ipad-pro-m3-wi-fi-256gb-space-gray-2024/?q=mvv83",
  "https://estore.ua/ua/apple-ipad-pro-m3-wi-fi-256gb-silver-2024/?q=mvv93",
  "https://estore.ua/ua/ipad-pro-m4-11-wi-fi-cellular-256gb-space-gray-2024/?q=mvw13",
  "https://estore.ua/ua/ipad-pro-m4-11-wi-fi-cellular-256gb-silver-2024/?q=mvw23",

  "https://estore.ua/ua/ipad-pro-m4-11-wi-fi-512gb-space-gray-2024/?q=mvvc3",
  "https://estore.ua/ua/apple-ipad-pro-m3-wi-fi-512gb-silver-2024/?q=mvvd3",
  "https://estore.ua/ua/ipad-pro-m4-11-wi-fi-cellular-512gb-space-gray-2024/?q=mvw33",
  "https://estore.ua/ua/ipad-pro-m4-11-wi-fi-cellular-512gb-silver-2024/?q=mvw43",

  "https://estore.ua/ua/apple-ipad-pro-m3-wi-fi-1tb-space-gray-2024/?q=mvve3",
  "https://estore.ua/ua/apple-ipad-pro-m3-wi-fi-1tb-silver-2024/?q=mvvf3",
  "https://estore.ua/ua/ipad-pro-m4-11-wi-fi-cellular-1tb-space-gray-2024/?q=mvw53",
  "https://estore.ua/ua/ipad-pro-m4-11-wi-fi-cellular-1tb-silver-2024/?q=mvw63",



  "https://estore.ua/ua/ipad-pro-m4-13-wi-fi-256gb-space-gray-2024/?q=mvx23",
  "https://estore.ua/ua/ipad-pro-m4-13-wi-fi-256gb-silver-2024/?q=mvx33",
  "https://estore.ua/ua/ipad-pro-m4-13-wi-fi-cellular-256gb-space-gray-2024/?q=mvxr3",
  "https://estore.ua/ua/ipad-pro-m4-13-wi-fi-cellular-256gb-silver-2024/?q=mvxt3",

  "https://estore.ua/ua/ipad-pro-m4-13-wi-fi-512gb-space-gray-2024/?q=mvx43",
  "https://estore.ua/ua/ipad-pro-m4-13-wi-fi-512gb-silver-2024/?q=mvx53",
  "https://estore.ua/ua/ipad-pro-m4-13-wi-fi-cellular-512gb-space-gray-2024/?q=mvxu3",
  "https://estore.ua/ua/ipad-pro-m4-13-wi-fi-cellular-512gb-silver-2024/?q=mvxv3",

  "https://estore.ua/ua/ipad-pro-m4-13-wi-fi-1tb-space-gray-2024/?q=mvx63",
  "https://estore.ua/ua/ipad-pro-m4-13-wi-fi-1tb-silver-2024/?q=mvx73",
  "https://estore.ua/ua/ipad-pro-m4-13-wi-fi-cellular-1tb-space-gray-2024/?q=mvxw3",
  "https://estore.ua/ua/ipad-pro-m4-13-wi-fi-cellular-1tb-silver-2024/?q=mvxx3",
  "https://estore.ua/ua/ipad-air-m2-11-wi-fi-1tb-blue-2024/?q=muwr3",
  "https://estore.ua/ua/ipad-air-m2-11-wi-fi-1tb-purple-2024/?q=muwu3",
  "https://estore.ua/ua/ipad-air-m2-11-wi-fi-1tb-starlight-2024/?q=muwt3",
  "https://estore.ua/ua/ipad-air-m2-11-wi-fi-1tb-space-grey-2024/?q=muwq3",
  "https://estore.ua/ua/ipad-air-m2-11-wi-fi-cellular-1tb-blue-2024/?q=muxt3",
  "https://estore.ua/ua/ipad-air-m2-11-wi-fi-cellular-1tb-purple-2024/?q=muxv3",
  "https://estore.ua/ua/ipad-air-m2-11-wi-fi-cellular-1tb-starlight-2024/?q=muxu3",
  "https://estore.ua/ua/ipad-air-m2-11-wi-fi-cellular-1tb-space-grey-2024/?q=muxr3",

  "https://estore.ua/ua/ipad-air-m2-13-wi-fi-1tb-blue-2024/?q=mv2q3",
  "https://estore.ua/ua/ipad-air-m2-13-wi-fi-1tb-purple-2024/?q=mv2t3",
  "https://estore.ua/ua/ipad-air-m2-13-wi-fi-1tb-starlight-2024/?q=mv2r3",
  "https://estore.ua/ua/ipad-air-m2-13-wi-fi-1tb-space-grey-2024/?q=mv2p3",
  "https://estore.ua/ua/ipad-air-m2-13-wi-fi-cellular-1tb-blue-2024/?q=mv753",
  "https://estore.ua/ua/ipad-air-m2-13-wi-fi-cellular-1tb-purple-2024/?q=mv773",
  "https://estore.ua/ua/ipad-air-m2-13-wi-fi-cellular-1tb-starlight-2024/?q=mv763",
  "https://estore.ua/ua/ipad-air-m2-13-wi-fi-cellular-1tb-space-grey-2024/?q=mv743",

  "https://estore.ua/ua/apple-ipad-pro-m3-wi-fi-2tb-space-gray-2024/?q=mvvg3",
  "https://estore.ua/ua/apple-ipad-pro-m3-wi-fi-2tb-silver-2024/?q=mvvh3",
  "https://estore.ua/ua/ipad-pro-m4-11-wi-fi-cellular-2tb-space-gray-2024/?q=mvw73",
  "https://estore.ua/ua/ipad-pro-m4-11-wi-fi-cellular-2tb-silver-2024/?q=mvw83",
  "https://estore.ua/ua/ipad-pro-m4-13-wi-fi-2tb-space-gray-2024/?q=mvx83",
  "https://estore.ua/ua/ipad-pro-m4-13-wi-fi-2tb-silver-2024/?q=mvx93",
  "https://estore.ua/ua/ipad-pro-m4-13-wi-fi-cellular-2tb-space-gray-2024/?q=mvxy3",
  "https://estore.ua/ua/ipad-pro-m4-13-wi-fi-cellular-2tb-silver-2024/?q=mvy03",
];
const arrLinkJabkoIPAD2 = [
    "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2025/apple-ipad-air-11-128gb-wi-fi-blue-m3-2025-mc9x4",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2025/apple-ipad-air-11-128gb-wi-fi-space-gray-m3-2025-mc9w4",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2025/apple-ipad-air-11-128gb-wi-fi-starlight-m3-2025-mc9y4",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2025/apple-ipad-air-11-128gb-wi-fi-purple-m3-2025-mca04",
  
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2025/apple-ipad-air-11-128gb-wi-fi--lte-blue-m3-2025-mcfw4",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2025/apple-ipad-air-11-128gb-wi-fi--lte-space-gray-m3-2025-mcfv4",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2025/apple-ipad-air-11-128gb-wi-fi--lte-starlight-m3-2025-mcfx4",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2025/apple-ipad-air-11-128gb-wi-fi--lte-purple-m3-2025-mcfy4",
  
  
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2025/apple-ipad-air-11-256gb-wi-fi-blue-m3-2025-mca34",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2025/apple-ipad-air-11-256gb-wi-fi-space-gray-m3-2025-mca14",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2025/apple-ipad-air-11-256gb-wi-fi-starlight-m3-2025-mca44",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2025/apple-ipad-air-11-256gb-wi-fi-purple-m3-2025-mca64",
  
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2025/apple-ipad-air-11-256gb-wi-fi--lte-blue-m3-2025-mcg14",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2025/apple-ipad-air-11-256gb-wi-fi--lte-space-gray-m3-2025-mcg04",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2025/apple-ipad-air-11-256gb-wi-fi--lte-starlight-m3-2025-mcg24",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2025/apple-ipad-air-11-256gb-wi-fi--lte-purple-m3-2025-mcg34",
  
  
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2025/apple-ipad-air-11-512gb-wi-fi-blue-m3-2025-mca94",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2025/apple-ipad-air-11-512gb-wi-fi-space-gray-m3-2025-mca74",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2025/apple-ipad-air-11-512gb-wi-fi-starlight-m3-2025-mcaa4",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2025/apple-ipad-air-11-512gb-wi-fi-purple-m3-2025-mcae4",
  
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2025/apple-ipad-air-11-512gb-wi-fi--lte-blue-m3-2025-mcg54",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2025/apple-ipad-air-11-512gb-wi-fi--lte-space-gray-m3-2025-mcg44",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2025/apple-ipad-air-11-512gb-wi-fi--lte-starlight-m3-2025-mcg64",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2025/apple-ipad-air-11-512gb-wi-fi--lte-purple-m3-2025-mcg74",
  
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2025/apple-ipad-air-11-1tb-wi-fi-blue-m3-2025-mcaj4",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2025/apple-ipad-air-11-1tb-wi-fi-space-gray-m3-2025-mcah4",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2025/apple-ipad-air-11-1tb-wi-fi-starlight-m3-2025-mcaq4",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2025/apple-ipad-air-11-1tb-wi-fi-purple-m3-2025-mcau4",
  
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2025/apple-ipad-air-11-1tb-wi-fi--lte-blue-m3-2025-mcg94",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2025/apple-ipad-air-11-1tb-wi-fi--lte-space-gray-m3-2025-mcg84",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2025/apple-ipad-air-11-1tb-wi-fi--lte-starlight-m3-2025-mcga4",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-11-2025/apple-ipad-air-11-1tb-wi-fi--lte-purple-m3-2025-mcgc4",
  
  
  
  
  
  
  
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2025/apple-ipad-air-13-128gb-wi-fi-blue-m3-2025-mcnj4",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2025/apple-ipad-air-13-128gb-wi-fi-space-gray-2025-mcnh4",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2025/apple-ipad-air-13-128gb-wi-fi-starlight-m3-2025-mcnk4",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2025/apple-ipad-air-13-128gb-wi-fi-purple-m3-2025-mcnl4",
  
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2025/apple-ipad-air-13-128gb-wi-fi--lte-blue-m3-2025-mcj24",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2025/apple-ipad-air-13-128gb-wi-fi--lte-space-gray-2025-mcj14",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2025/apple-ipad-air-13-128gb-wi-fi--lte-starlight-m3-2025-mcj34",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2025/apple-ipad-air-13-128gb-wi-fi--lte-purple-m3-2025-mcj44",
  
  
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2025/apple-ipad-air-13-256gb-wi-fi-blue-m3-2025-mcnp4",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2025/apple-ipad-air-13-256gb-wi-fi-space-gray-2025-mcnn4",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2025/apple-ipad-air-13-256gb-wi-fi-starlight-m3-2025-mcnq4",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2025/apple-ipad-air-13-256gb-wi-fi-purple-m3-2025-mcnr4",
  
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2025/apple-ipad-air-13-256gb-wi-fi--lte-blue-m3-2025-mcj64",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2025/apple-ipad-air-13-256gb-wi-fi--lte-space-gray-2025-mcj54",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2025/apple-ipad-air-13-256gb-wi-fi--lte-starlight-m3-2025-mcj74",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2025/apple-ipad-air-13-256gb-wi-fi--lte-purple-m3-2025-mcj84",
  
  
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2025/apple-ipad-air-13-512gb-wi-fi-blue-m3-2025-mcnw4",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2025/apple-ipad-air-13-512gb-wi-fi-space-gray-2025-mcnt4",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2025/apple-ipad-air-13-512gb-wi-fi-starlight-m3-2025-mcnx4",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2025/apple-ipad-air-13-512gb-wi-fi-purple-m3-2025-mcny4",
  
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2025/apple-ipad-air-13-512gb-wi-fi--lte-blue-m3-2025-mcja4",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2025/apple-ipad-air-13-512gb-wi-fi--lte-space-gray-2025-mcj94",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2025/apple-ipad-air-13-512gb-wi-fi--lte-starlight-m3-2025-mcjc4",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2025/apple-ipad-air-13-512gb-wi-fi--lte-purple-m3-2025-mcjd4",
  
  
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2025/apple-ipad-air-13-1tb-wi-fi-blue-m3-2025-mcq14",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2025/apple-ipad-air-13-1tb-wi-fi-space-gray-2025-mcq04",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2025/apple-ipad-air-13-1tb-wi-fi-starlight-m3-2025-mcq24",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2025/apple-ipad-air-13-1tb-wi-fi-purple-m3-2025-mcq34",
  
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2025/apple-ipad-air-13-1tb-wi-fi--lte-blue-m3-2025-mcjf4",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2025/apple-ipad-air-13-1tb-wi-fi--lte-space-gray-2025-mcje4",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2025/apple-ipad-air-13-1tb-wi-fi--lte-starlight-m3-2025-mcjg4",
  "https://jabko.ua/ipad/ipad-air-10-5/apple-ipad-air-13-2025/apple-ipad-air-13-1tb-wi-fi--lte-purple-m3-2025-mcjh4",
  
  
  
  
  "https://jabko.ua/ipad/apple-ipad/apple-ipad-11-2025/apple-ipad-11-128gb-wi-fi-blue-2025-md4a4",
  "https://jabko.ua/ipad/apple-ipad/apple-ipad-11-2025/apple-ipad-11-128gb-wi-fi-silver-2025-md3y4",
  "https://jabko.ua/ipad/apple-ipad/apple-ipad-11-2025/apple-ipad-11-128gb-wi-fi-pink-2025-md4e4",
  "https://jabko.ua/ipad/apple-ipad/apple-ipad-11-2025/apple-ipad-11-128gb-wi-fi-yellow-2025-md4d4",
  
  "https://jabko.ua/ipad/apple-ipad/apple-ipad-11-2025/apple-ipad-11-128gb-wi-fi--lte-blue-2025-md7g4",
  "https://jabko.ua/ipad/apple-ipad/apple-ipad-11-2025/apple-ipad-11-128gb-wi-fi--lte-silver-2025-md7f4",
  "https://jabko.ua/ipad/apple-ipad/apple-ipad-11-2025/apple-ipad-11-128gb-wi-fi--lte-pink-2025-md7j4",
  "https://jabko.ua/ipad/apple-ipad/apple-ipad-11-2025/apple-ipad-11-128gb-wi-fi--lte-yellow-2025-md7h4",
  
  
  "https://jabko.ua/ipad/apple-ipad/apple-ipad-11-2025/apple-ipad-11-256gb-wi-fi-blue-2025-md4h4",
  "https://jabko.ua/ipad/apple-ipad/apple-ipad-11-2025/apple-ipad-11-256gb-wi-fi-silver-2025-md4g4",
  "https://jabko.ua/ipad/apple-ipad/apple-ipad-11-2025/apple-ipad-11-256gb-wi-fi-pink-2025-md4p4",
  "https://jabko.ua/ipad/apple-ipad/apple-ipad-11-2025/apple-ipad-11-256gb-wi-fi-yellow-2025-md4j4",
  
  "https://jabko.ua/ipad/apple-ipad/apple-ipad-11-2025/apple-ipad-11-256gb-wi-fi--lte-blue-2025-md7l4",
  "https://jabko.ua/ipad/apple-ipad/apple-ipad-11-2025/apple-ipad-11-256gb-wi-fi--lte-silver-2025-md7k4",
  "https://jabko.ua/ipad/apple-ipad/apple-ipad-11-2025/apple-ipad-11-256gb-wi-fi--lte-pink-2025-md7n4",
  "https://jabko.ua/ipad/apple-ipad/apple-ipad-11-2025/apple-ipad-11-256gb-wi-fi--lte-yellow-2025-md7m4",
  
  
  
  "https://jabko.ua/ipad/apple-ipad/apple-ipad-11-2025/apple-ipad-11-512gb-wi-fi-blue-2025-md4y4",
  "https://jabko.ua/ipad/apple-ipad/apple-ipad-11-2025/apple-ipad-11-512gb-wi-fi-silver-2025-md4q4",
  "https://jabko.ua/ipad/apple-ipad/apple-ipad-11-2025/apple-ipad-11-512gb-wi-fi-pink-2025-md5c4",
  "https://jabko.ua/ipad/apple-ipad/apple-ipad-11-2025/apple-ipad-11-512gb-wi-fi-yellow-2025-md5a4",
  
  "https://jabko.ua/ipad/apple-ipad/apple-ipad-11-2025/apple-ipad-11-512gb-wi-fi--lte-blue-2025-md7q4",
  "https://jabko.ua/ipad/apple-ipad/apple-ipad-11-2025/apple-ipad-11-512gb-wi-fi--lte-silver-2025-md7p4",
  "https://jabko.ua/ipad/apple-ipad/apple-ipad-11-2025/apple-ipad-11-512gb-wi-fi--lte-pink-2025-md7t4",
  "https://jabko.ua/ipad/apple-ipad/apple-ipad-11-2025/apple-ipad-11-512gb-wi-fi--lte-yellow-2025-md7r4",
  ];
  const arrLinkGroIPAD2 = [
   "https://grokholsky.com/product/apple/ipad/ipad-air-11-2025/planshet-apple-ipad-air-11-2025-wi-fi-128gb-blue-mc9x4/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2025/planshet-apple-ipad-air-11-2025-wi-fi-128gb-space-gray-mc9w4/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2025/planshet-apple-ipad-air-11-2025-wi-fi-128gb-starlight-mc9y4/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2025/planshet-apple-ipad-air-11-2025-wi-fi-128gb-purple-mca04/",
  
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2025/planshet-apple-ipad-air-11-2025-wi-fi-cellular-128gb-blue-mcfw4/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2025/planshet-apple-ipad-air-11-2025-wi-fi-cellular-128gb-space-gray-mcfv4/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2025/planshet-apple-ipad-air-11-2025-wi-fi-cellular-128gb-starlight-mcfx4/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2025/planshet-apple-ipad-air-11-2025-wi-fi-cellular-128gb-purple-mcfy4/",
  
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2025/planshet-apple-ipad-air-11-2025-wi-fi-256gb-blue-mca34/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2025/planshet-apple-ipad-air-11-2025-wi-fi-256gb-space-gray-mca14/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2025/planshet-apple-ipad-air-11-2025-wi-fi-256gb-starlight-mca44/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2025/planshet-apple-ipad-air-11-2025-wi-fi-256gb-purple-mca64/",
  
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2025/planshet-apple-ipad-air-11-2025-wi-fi-cellular-256gb-blue-mcg14/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2025/planshet-apple-ipad-air-11-2025-wi-fi-cellular-256gb-space-gray-mcg04/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2025/planshet-apple-ipad-air-11-2025-wi-fi-cellular-256gb-starlight-mcg24/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2025/planshet-apple-ipad-air-11-2025-wi-fi-cellular-256gb-purple-mcg34/",
  
  
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2025/planshet-apple-ipad-air-11-2025-wi-fi-512gb-blue-mca94/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2025/planshet-apple-ipad-air-11-2025-wi-fi-512gb-space-gray-mca74/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2025/planshet-apple-ipad-air-11-2025-wi-fi-512gb-starlight-mcaa4/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2025/planshet-apple-ipad-air-11-2025-wi-fi-512gb-purple-mcae4/",
  
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2025/planshet-apple-ipad-air-11-2025-wi-fi-cellular-512gb-blue-mcg54/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2025/planshet-apple-ipad-air-11-2025-wi-fi-cellular-512gb-space-gray-mcg44/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2025/planshet-apple-ipad-air-11-2025-wi-fi-cellular-512gb-starlight-mcg64/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2025/planshet-apple-ipad-air-11-2025-wi-fi-cellular-512gb-purple-mcg74/",
  
  
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2025/planshet-apple-ipad-air-11-2025-wi-fi-1tb-blue-mcaj4/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2025/planshet-apple-ipad-air-11-2025-wi-fi-1tb-space-gray-mcah4/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2025/planshet-apple-ipad-air-11-2025-wi-fi-1tb-starlight-mcaq4/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2025/planshet-apple-ipad-air-11-2025-wi-fi-1tb-purple-mcau4/",
  
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2025/planshet-apple-ipad-air-11-2025-wi-fi-cellular-1tb-blue-mcg94/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2025/planshet-apple-ipad-air-11-2025-wi-fi-cellular-1tb-space-gray-mcg84/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2025/planshet-apple-ipad-air-11-2025-wi-fi-cellular-1tb-starlight-mcga4/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-11-2025/planshet-apple-ipad-air-11-2025-wi-fi-cellular-1tb-purple-mcgc4/",
  
  
  
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2025/planshet-apple-ipad-air-13-2025-wi-fi-128gb-blue-mcnj4/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2025/planshet-apple-ipad-air-13-2025-wi-fi-128gb-space-gray-mcnh4/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2025/planshet-apple-ipad-air-13-2025-wi-fi-128gb-starlight-mcnk4/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2025/planshet-apple-ipad-air-13-2025-wi-fi-128gb-purple-mcnl4/",
  
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2025/planshet-apple-ipad-air-13-2025-wi-fi-cellular-128gb-blue-mcj24/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2025/planshet-apple-ipad-air-13-2025-wi-fi-cellular-128gb-space-gray-mcj14/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2025/planshet-apple-ipad-air-13-2025-wi-fi-cellular-128gb-starlight-mcj34/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2025/planshet-apple-ipad-air-13-2025-wi-fi-cellular-128gb-purple-mcj44/",
  
  
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2025/planshet-apple-ipad-air-13-2025-wi-fi-256gb-blue-mcnp4/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2025/planshet-apple-ipad-air-13-2025-wi-fi-256gb-space-gray-mcnn4/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2025/planshet-apple-ipad-air-13-2025-wi-fi-256gb-starlight-mcnq4/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2025/planshet-apple-ipad-air-13-2025-wi-fi-256gb-purple-mcnr4/",
  
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2025/planshet-apple-ipad-air-13-2025-wi-fi-cellular-256gb-blue-mcj64/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2025/planshet-apple-ipad-air-13-2025-wi-fi-cellular-256gb-space-gray-mcj54/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2025/planshet-apple-ipad-air-13-2025-wi-fi-cellular-256gb-starlight-mcj74/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2025/planshet-apple-ipad-air-13-2025-wi-fi-cellular-256gb-purple-mcj84/",
  
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2025/planshet-apple-ipad-air-13-2025-wi-fi-512gb-blue-mcnw4/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2025/planshet-apple-ipad-air-13-2025-wi-fi-512gb-space-gray-mcnt4/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2025/planshet-apple-ipad-air-13-2025-wi-fi-512gb-starlight-mcnx4/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2025/planshet-apple-ipad-air-13-2025-wi-fi-512gb-purple-mcny4/",
  
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2025/planshet-apple-ipad-air-13-2025-wi-fi-cellular-512gb-blue-mcja4/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2025/planshet-apple-ipad-air-13-2025-wi-fi-cellular-512gb-space-gray-mcj94/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2025/planshet-apple-ipad-air-13-2025-wi-fi-cellular-512gb-starlight-mcjc4/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2025/planshet-apple-ipad-air-13-2025-wi-fi-cellular-512gb-purple-mcjd4/",
  
  
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2025/planshet-apple-ipad-air-13-2025-wi-fi-1tb-blue-mcq14/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2025/planshet-apple-ipad-air-13-2025-wi-fi-1tb-space-gray-mcq04/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2025/planshet-apple-ipad-air-13-2025-wi-fi-1tb-starlight-mcq24/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2025/planshet-apple-ipad-air-13-2025-wi-fi-1tb-purple-mcq34/",
  
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2025/planshet-apple-ipad-air-13-2025-wi-fi-cellular-1tb-blue-mcjf4/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2025/planshet-apple-ipad-air-13-2025-wi-fi-cellular-1tb-space-gray-mcje4/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2025/planshet-apple-ipad-air-13-2025-wi-fi-cellular-1tb-starlight-mcjg4/",
  "https://grokholsky.com/product/apple/ipad/ipad-air-13-2025/planshet-apple-ipad-air-13-2025-wi-fi-cellular-1tb-purple-mcjh4/",
  
  
  "https://grokholsky.com/product/apple/ipad/ipad-2025/planshet-apple-ipad-2025-wi-fi-128gb-blue-md4a4/",
  "https://grokholsky.com/product/apple/ipad/ipad-2025/planshet-apple-ipad-2025-wi-fi-128gb-silver-md3y4/",
  "https://grokholsky.com/product/apple/ipad/ipad-2025/planshet-apple-ipad-2025-wi-fi-128gb-pink-md4e4/",
  "https://grokholsky.com/product/apple/ipad/ipad-2025/planshet-apple-ipad-2025-wi-fi-128gb-yellow-md4d4/",
  
  "https://grokholsky.com/product/apple/ipad/ipad-2025/planshet-apple-ipad-2025-wi-fi-cellular-128gb-blue-md7g4/",
  "https://grokholsky.com/product/apple/ipad/ipad-2025/planshet-apple-ipad-2025-wi-fi-cellular-128gb-silver-md7f4/",
  "https://grokholsky.com/product/apple/ipad/ipad-2025/planshet-apple-ipad-2025-wi-fi-cellular-128gb-pink-md7j4/",
  "https://grokholsky.com/product/apple/ipad/ipad-2025/planshet-apple-ipad-2025-wi-fi-cellular-128gb-yellow-md7h4/",
  
  
  "https://grokholsky.com/product/apple/ipad/ipad-2025/planshet-apple-ipad-2025-wi-fi-256gb-blue-md4h4/",
  "https://grokholsky.com/product/apple/ipad/ipad-2025/planshet-apple-ipad-2025-wi-fi-256gb-silver-md4g4/",
  "https://grokholsky.com/product/apple/ipad/ipad-2025/planshet-apple-ipad-2025-wi-fi-256gb-pink-md4p4/",
  "https://grokholsky.com/product/apple/ipad/ipad-2025/planshet-apple-ipad-2025-wi-fi-256gb-yellow-md4j4/",
  
  "https://grokholsky.com/product/apple/ipad/ipad-2025/planshet-apple-ipad-2025-wi-fi-cellular-256gb-blue-md7l4/",
  "https://grokholsky.com/product/apple/ipad/ipad-2025/planshet-apple-ipad-2025-wi-fi-cellular-256gb-silver-md7k4/",
  "https://grokholsky.com/product/apple/ipad/ipad-2025/planshet-apple-ipad-2025-wi-fi-cellular-256gb-pink-md7n4/",
  "https://grokholsky.com/product/apple/ipad/ipad-2025/planshet-apple-ipad-2025-wi-fi-cellular-256gb-yellow-md7m4/",
  
  
  "https://grokholsky.com/product/apple/ipad/ipad-2025/planshet-apple-ipad-2025-wi-fi-512gb-blue-md4y4/",
  "https://grokholsky.com/product/apple/ipad/ipad-2025/planshet-apple-ipad-2025-wi-fi-512gb-silver-md4q4/",
  "https://grokholsky.com/product/apple/ipad/ipad-2025/planshet-apple-ipad-2025-wi-fi-512gb-pink-md5c4/",
  "https://grokholsky.com/product/apple/ipad/ipad-2025/planshet-apple-ipad-2025-wi-fi-512gb-yellow-md5a4/",
  
  "https://grokholsky.com/product/apple/ipad/ipad-2025/planshet-apple-ipad-2025-wi-fi-cellular-512gb-blue-md7q4/",
  "https://grokholsky.com/product/apple/ipad/ipad-2025/planshet-apple-ipad-2025-wi-fi-cellular-512gb-silver-md7p4/",
  "https://grokholsky.com/product/apple/ipad/ipad-2025/planshet-apple-ipad-2025-wi-fi-cellular-512gb-pink-md7t4/",
  "https://grokholsky.com/product/apple/ipad/ipad-2025/planshet-apple-ipad-2025-wi-fi-cellular-512gb-yellow-md7r4/",
  ];
  
  const arrLinkIstoreIpadNew2 = [
      "https://www.istore.ua/ua/item/apple-ipad-air-11-m3-2025-wi-fi-128-gb-m2-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2025-wi-fi-128-gb-m3-space-gray/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2025-wi-fi-128-gb-m3-starlight/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2025-wi-fi-128-gb-m3-purple/",
  
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2025-wi-fi-cellular-128-gb-m3-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2025-wi-fi-cellular-128-gb-m3-space-gray/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2025-wi-fi-cellular-128-gb-m3-starlight/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2025-wi-fi-cellular-128-gb-m3-purple/",
  
  
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2025-wi-fi-256-gb-m3-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2025-wi-fi-256-gb-m3-space-gray/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2025-wi-fi-256-gb-m3-starlight/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2025-wi-fi-256-gb-m3-purple/",
  
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2025-wi-fi-cellular-256-gb-m3-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2025-wi-fi-cellular-256-gb-m3-space-gray/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2025-wi-fi-cellular-256-gb-m3-starlight/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2025-wi-fi-cellular-256-gb-m3-purple/",
  
  
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2025-wi-fi-512-gb-m3-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2025-wi-fi-512-gb-m3-space-gray/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2025-wi-fi-512-gb-m3-starlight/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2025-wi-fi-512-gb-m3-purple/",
  
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2025-wi-fi-cellular-512-gb-m3-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2025-wi-fi-cellular-512-gb-m3-space-gray/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2025-wi-fi-cellular-512-gb-m3-starlight/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2025-wi-fi-cellular-512-gb-m3-purple/",
  
  
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2025-wi-fi-1-tb-m3-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2025-wi-fi-1-tb-m3-space-gray/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2025-wi-fi-1-tb-m3-starlight/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2025-wi-fi-1-tb-m3-purple/",
  
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2025-wi-fi-cellular-1-tb-m3-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2025-wi-fi-cellular-1-tb-m3-space-gray/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2025-wi-fi-cellular-1-tb-m3-starlight/",
  "https://www.istore.ua/ua/item/apple-ipad-air-11-2025-wi-fi-cellular-1-tb-m3-purple/",
  
  
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2025-wi-fi-128-gb-m3-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2025-wi-fi-128-gb-m3-space-gray/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2025-wi-fi-128-gb-m3-starlight/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2025-wi-fi-128-gb-m3-purple/",
  
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2025-wi-fi-cellular-128-gb-m3-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2025-wi-fi-cellular-128-gb-m3-space-gray/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2025-wi-fi-cellular-128-gb-m3-starlight/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2025-wi-fi-cellular-128-gb-m3-purple/",
  
  
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2025-wi-fi-256-gb-m3-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2025-wi-fi-256-gb-m3-space-gray/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2025-wi-fi-256-gb-m3-starlight/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2025-wi-fi-256-gb-m3-purple/",
  
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2025-wi-fi-256-gb-m3-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2025-wi-fi-256-gb-m3-space-gray/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2025-wi-fi-256-gb-m3-starlight/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2025-wi-fi-cellular-256-gb-m3-purple/",
  
  
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2025-wi-fi-512-gb-m3-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2025-wi-fi-512-gb-m3-space-gray/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2025-wi-fi-512-gb-m3-starlight/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2025-wi-fi-512-gb-m3-purple/",
  
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2025-wi-fi-cellular-512-gb-m3-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2025-wi-fi-cellular-512-gb-m3-space-gray/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2025-wi-fi-cellular-512-gb-m3-starlight/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2025-wi-fi-cellular-512-gb-m3-purple/",
  
  
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2025-wi-fi-1-tb-m3-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2025-wi-fi-1-tb-m3-space-gray/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2025-wi-fi-1-tb-m3-starlight/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2025-wi-fi-1-tb-m3-purple/",
  
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2025-wi-fi-cellular-1-tb-m3-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2025-wi-fi-cellular-1-tb-m3-space-gray/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2025-wi-fi-cellular-1-tb-m3-starlight/",
  "https://www.istore.ua/ua/item/apple-ipad-air-13-2025-wi-fi-cellular-1-tb-m3-purple/",
  
  
  "https://www.istore.ua/ua/item/apple-ipad-11-2025-wi-fi-128-gb-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-11-2025-wi-fi-128-gb-silver/",
  "https://www.istore.ua/ua/item/apple-ipad-11-2025-wi-fi-128-gb-pink/",
  "https://www.istore.ua/ua/item/apple-ipad-11-2025-wi-fi-128-gb-yellow/",
  
  "https://www.istore.ua/ua/item/apple-ipad-11-2025-wi-fi-cellular-128-gb-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-11-2025-wi-fi-cellular-128-gb-silver/",
  "https://www.istore.ua/ua/item/apple-ipad-11-2025-wi-fi-cellular-128-gb-pink/",
  "https://www.istore.ua/ua/item/apple-ipad-11-2025-wi-fi-cellular-128-gb-yellow/",
  
  
  "https://www.istore.ua/ua/item/apple-ipad-11-2025-wi-fi-256-gb-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-11-2025-wi-fi-256-gb-silver/",
  "https://www.istore.ua/ua/item/apple-ipad-11-2025-wi-fi-256-gb-pink/",
  "https://www.istore.ua/ua/item/apple-ipad-11-2025-wi-fi-256-gb-yellow/",
  
  "https://www.istore.ua/ua/item/apple-ipad-11-2025-wi-fi-cellular-256-gb-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-11-2025-wi-fi-cellular-256-gb-silver/",
  "https://www.istore.ua/ua/item/apple-ipad-11-2025-wi-fi-cellular-256-gb-pink/",
  "https://www.istore.ua/ua/item/apple-ipad-11-2025-wi-fi-cellular-256-gb-yellow/",
  
  
  
  "https://www.istore.ua/ua/item/apple-ipad-11-2025-wi-fi-512-gb-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-11-2025-wi-fi-512-gb-silver/",
  "https://www.istore.ua/ua/item/apple-ipad-11-2025-wi-fi-512-gb-pink/",
  "https://www.istore.ua/ua/item/apple-ipad-11-2025-wi-fi-512-gb-yellow/",
  
  "https://www.istore.ua/ua/item/apple-ipad-11-2025-wi-fi-cellular-512-gb-blue/",
  "https://www.istore.ua/ua/item/apple-ipad-11-2025-wi-fi-cellular-512-gb-silver/",
  "https://www.istore.ua/ua/item/apple-ipad-11-2025-wi-fi-cellular-512-gb-pink/",
  "https://www.istore.ua/ua/item/apple-ipad-11-2025-wi-fi-cellular-512-gb-yellow/",
    
  ];
  
  const arrLinkMPIpadNew2 = [
    "https://mobileplanet.ua/apple-ipad-air-11-2025-wi-fi-128gb-blue-mc9x4-338758",
  "https://mobileplanet.ua/apple-ipad-air-11-2025-wi-fi-128gb-space-gray-mc9w-338760",
  "https://mobileplanet.ua/apple-ipad-air-11-2025-wi-fi-128gb-starlight-mc9y4-338761",
  "https://mobileplanet.ua/apple-ipad-air-11-2025-wi-fi-128gb-purple-mca04-338759",
  
  "https://mobileplanet.ua/apple-ipad-air-11-2025-wi-fi-cellular-128gb-blue-m-338774",
  "https://mobileplanet.ua/apple-ipad-air-11-2025-wi-fi-cellular-128gb-space-338776",
  "https://mobileplanet.ua/apple-ipad-air-11-2025-wi-fi-cellular-128gb-starli-338777",
  "https://mobileplanet.ua/apple-ipad-air-11-2025-wi-fi-cellular-128gb-purple-338775",
  
  "https://mobileplanet.ua/apple-ipad-air-11-2025-wi-fi-256gb-blue-mca34-338766",
  "https://mobileplanet.ua/apple-ipad-air-11-2025-wi-fi-256gb-space-gray-mca1-338768",
  "https://mobileplanet.ua/apple-ipad-air-11-2025-wi-fi-256gb-starlight-mca44-338769",
  "https://mobileplanet.ua/apple-ipad-air-11-2025-wi-fi-256gb-purple-mca64-338767",
  
  "https://mobileplanet.ua/apple-ipad-air-11-2025-wi-fi-cellular-256gb-blue-m-338782",
  "https://mobileplanet.ua/apple-ipad-air-11-2025-wi-fi-cellular-256gb-space-338784",
  "https://mobileplanet.ua/apple-ipad-air-11-2025-wi-fi-cellular-256gb-starli-338785",
  "https://mobileplanet.ua/apple-ipad-air-11-2025-wi-fi-cellular-256gb-purple-338783",
  
  "https://mobileplanet.ua/apple-ipad-air-11-2025-wi-fi-512gb-blue-mca94-338770",
  "https://mobileplanet.ua/apple-ipad-air-11-2025-wi-fi-512gb-space-gray-mca7-338772",
  "https://mobileplanet.ua/apple-ipad-air-11-2025-wi-fi-512gb-starlight-mcaa4-338773",
  "https://mobileplanet.ua/apple-ipad-air-11-2025-wi-fi-512gb-purple-mcae4-338771",
  
  "https://mobileplanet.ua/apple-ipad-air-11-2025-wi-fi-cellular-512gb-blue-m-338786",
  "https://mobileplanet.ua/apple-ipad-air-11-2025-wi-fi-cellular-512gb-space-338788",
  "https://mobileplanet.ua/apple-ipad-air-11-2025-wi-fi-cellular-512gb-starli-338789",
  "https://mobileplanet.ua/apple-ipad-air-11-2025-wi-fi-cellular-512gb-purple-338787",
  
  
  "https://mobileplanet.ua/apple-ipad-air-11-2025-wi-fi-1tb-blue-mcaj4-338762",
  "https://mobileplanet.ua/apple-ipad-air-11-2025-wi-fi-1tb-space-gray-mcah4-338764",
  "https://mobileplanet.ua/apple-ipad-air-11-2025-wi-fi-1tb-starlight-mcaq4-338765",
  "https://mobileplanet.ua/apple-ipad-air-11-2025-wi-fi-1tb-purple-mcau4-338763",
  
  "https://mobileplanet.ua/apple-ipad-air-11-2025-wi-fi-cellular-1tb-blue-mcg-338778",
  "https://mobileplanet.ua/apple-ipad-air-11-2025-wi-fi-cellular-1tb-space-gr-338780",
  "https://mobileplanet.ua/apple-ipad-air-11-2025-wi-fi-cellular-1tb-starligh-338781",
  "https://mobileplanet.ua/apple-ipad-air-11-2025-wi-fi-cellular-1tb-purple-m-338779",
  
  
  
  "https://mobileplanet.ua/apple-ipad-air-13-2025-wi-fi-128gb-blue-mcnj4-338790",
  "https://mobileplanet.ua/apple-ipad-air-13-2025-wi-fi-128gb-space-gray-mcnh-338792",
  "https://mobileplanet.ua/apple-ipad-air-13-2025-wi-fi-128gb-starlight-mcnk4-338793",
  "https://mobileplanet.ua/apple-ipad-air-13-2025-wi-fi-128gb-purple-mcnl4-338791",
  
  "https://mobileplanet.ua/apple-ipad-air-13-2025-wi-fi-cellular-128gb-blue-m-338806",
  "https://mobileplanet.ua/apple-ipad-air-13-2025-wi-fi-cellular-128gb-space-338808",
  "https://mobileplanet.ua/apple-ipad-air-13-2025-wi-fi-cellular-128gb-starli-338809",
  "https://mobileplanet.ua/apple-ipad-air-13-2025-wi-fi-cellular-128gb-purple-338807",
  
  "https://mobileplanet.ua/apple-ipad-air-13-2025-wi-fi-256gb-blue-mcnp4-338798",
  "https://mobileplanet.ua/apple-ipad-air-13-2025-wi-fi-256gb-space-gray-mcnn-338800",
  "https://mobileplanet.ua/apple-ipad-air-13-2025-wi-fi-256gb-starlight-mcnq4-338801",
  "https://mobileplanet.ua/apple-ipad-air-13-2025-wi-fi-256gb-purple-mcnr4-338799",
  
  "https://mobileplanet.ua/apple-ipad-air-13-2025-wi-fi-cellular-256gb-blue-m-338814",
  "https://mobileplanet.ua/apple-ipad-air-13-2025-wi-fi-cellular-256gb-space-338816",
  "https://mobileplanet.ua/apple-ipad-air-13-2025-wi-fi-cellular-256gb-starli-338817",
  "https://mobileplanet.ua/apple-ipad-air-13-2025-wi-fi-cellular-256gb-purple-338815",
  
  "https://mobileplanet.ua/apple-ipad-air-13-2025-wi-fi-512gb-blue-mcnw4-338802",
  "https://mobileplanet.ua/apple-ipad-air-13-2025-wi-fi-512gb-space-gray-mcnt-338804",
  "https://mobileplanet.ua/apple-ipad-air-13-2025-wi-fi-512gb-starlight-mcnx4-338805",
  "https://mobileplanet.ua/apple-ipad-air-13-2025-wi-fi-512gb-purple-mcny4-338803",
  
  "https://mobileplanet.ua/apple-ipad-air-13-2025-wi-fi-cellular-512gb-blue-m-338818",
  "https://mobileplanet.ua/apple-ipad-air-13-2025-wi-fi-cellular-512gb-space-338820",
  "https://mobileplanet.ua/apple-ipad-air-13-2025-wi-fi-cellular-512gb-starli-338821",
  "https://mobileplanet.ua/apple-ipad-air-13-2025-wi-fi-cellular-512gb-purple-338819",
  
  "https://mobileplanet.ua/apple-ipad-air-13-2025-wi-fi-1tb-blue-mcq14-338794",
  "https://mobileplanet.ua/apple-ipad-air-13-2025-wi-fi-1tb-space-gray-mcq04-338796",
  "https://mobileplanet.ua/apple-ipad-air-13-2025-wi-fi-1tb-starlight-mcq24-338797",
  "https://mobileplanet.ua/apple-ipad-air-13-2025-wi-fi-1tb-purple-mcq34-338795",
  
  "https://mobileplanet.ua/apple-ipad-air-13-2025-wi-fi-cellular-1tb-blue-mcj-338810",
  "https://mobileplanet.ua/apple-ipad-air-13-2025-wi-fi-cellular-1tb-space-gr-338812",
  "https://mobileplanet.ua/apple-ipad-air-13-2025-wi-fi-cellular-1tb-starligh-338813",
  "https://mobileplanet.ua/apple-ipad-air-13-2025-wi-fi-cellular-1tb-purple-m-338811",
  
  
  
  "https://mobileplanet.ua/apple-ipad-2025-wi-fi-128gb-blue-md4a4-338734",
  "https://mobileplanet.ua/apple-ipad-2025-wi-fi-128gb-silver-md3y4-338736",
  "https://mobileplanet.ua/apple-ipad-2025-wi-fi-128gb-pink-md4e4-338735",
  "https://mobileplanet.ua/apple-ipad-2025-wi-fi-128gb-yellow-md4d4-338737",
  
  "https://mobileplanet.ua/apple-ipad-2025-wi-fi-cellular-128gb-blue-md7g4-338746",
  "https://mobileplanet.ua/apple-ipad-2025-wi-fi-cellular-128gb-silver-md7f4-338748",
  "https://mobileplanet.ua/apple-ipad-2025-wi-fi-cellular-128gb-pink-md7j4-338747",
  "https://mobileplanet.ua/apple-ipad-2025-wi-fi-cellular-128gb-yellow-md7h4-338749",
  
  
  "https://mobileplanet.ua/apple-ipad-2025-wi-fi-256gb-blue-md4h4-338738",
  "https://mobileplanet.ua/apple-ipad-2025-wi-fi-256gb-silver-md4g4-338740",
  "https://mobileplanet.ua/apple-ipad-2025-wi-fi-256gb-pink-md4p4-338739",
  "https://mobileplanet.ua/apple-ipad-2025-wi-fi-256gb-yellow-md4j4-338741",
  
  "https://mobileplanet.ua/apple-ipad-2025-wi-fi-cellular-256gb-blue-md7l4-338750",
  "https://mobileplanet.ua/apple-ipad-2025-wi-fi-cellular-256gb-silver-md7k4-338752",
  "https://mobileplanet.ua/apple-ipad-2025-wi-fi-cellular-256gb-pink-md7n4-338751",
  "https://mobileplanet.ua/apple-ipad-2025-wi-fi-cellular-256gb-yellow-md7m4-338753",
  
  "https://mobileplanet.ua/apple-ipad-2025-wi-fi-512gb-blue-md4y4-338742",
  "https://mobileplanet.ua/apple-ipad-2025-wi-fi-512gb-silver-md4q4-338744",
  "https://mobileplanet.ua/apple-ipad-2025-wi-fi-512gb-pink-md5c4-338743",
  "https://mobileplanet.ua/apple-ipad-2025-wi-fi-512gb-yellow-md5a4-338745",
  
  "https://mobileplanet.ua/apple-ipad-2025-wi-fi-cellular-512gb-blue-md7q4-338754",
  "https://mobileplanet.ua/apple-ipad-2025-wi-fi-cellular-512gb-silver-md7p4-338756",
  "https://mobileplanet.ua/apple-ipad-2025-wi-fi-cellular-512gb-pink-md7t4-338755",
  "https://mobileplanet.ua/apple-ipad-2025-wi-fi-cellular-512gb-yellow-md7r4-338757",
  ];
  
  const arrLinkEstoreIpadNew2 = [
    "https://estore.ua/ua/ipad-air-m3-11-wi-fi-128gb-blue/?q=mc9x4",
  "https://estore.ua/ua/ipad-air-m3-11-wi-fi-128gb-space-grey/?q=mc9w4",
  "https://estore.ua/ua/ipad-air-m3-11-wi-fi-128gb-starlight/?q=mc9y4",
  "https://estore.ua/ua/ipad-air-m3-11-wi-fi-128gb-purple/?q=mca04",
  
  "https://estore.ua/ua/ipad-air-m3-11-wi-fi-cellular-128gb-blue-mcfw4/?q=mcfw4",
  "https://estore.ua/ua/ipad-air-m3-11-wi-fi-cellular-128gb-space-gray-mcfv4/?q=mcfv4",
  "https://estore.ua/ua/ipad-air-m3-11-wi-fi-cellular-128gb-starlight-mcfx4/?q=mcfx4",
  "https://estore.ua/ua/ipad-air-m3-11-wi-fi-cellular-128gb-purple-mcfy4/?q=mcfy4",
  
  "https://estore.ua/ua/ipad-air-m3-11-wi-fi-256gb-blue/?q=mca34",
  "https://estore.ua/ua/ipad-air-m3-11-wi-fi-256gb-space-grey/?q=mca14",
  "https://estore.ua/ua/ipad-air-m3-11-wi-fi-256gb-starlight/?q=mca44",
  "https://estore.ua/ua/ipad-air-m3-11-wi-fi-256gb-purple/?q=mca64",
  
  "https://estore.ua/ua/ipad-air-m3-11-wi-fi-cellular-256gb-blue-mcg14/?q=mcg14",
  "https://estore.ua/ua/ipad-air-m3-11-wi-fi-cellular-256gb-space-gray-mcg04/?q=mcg04",
  "https://estore.ua/ua/ipad-air-m3-11-wi-fi-cellular-256gb-starlight-mcg24/?q=mcg24",
  "https://estore.ua/ua/ipad-air-m3-11-wi-fi-cellular-256gb-purple-mcg34/?q=mcg34",
  
  "https://estore.ua/ua/ipad-air-m3-11-wi-fi-512gb-blue/?q=mca94",
  "https://estore.ua/ua/ipad-air-m3-11-wi-fi-512gb-space-grey/?q=mca74",
  "https://estore.ua/ua/ipad-air-m3-11-wi-fi-512gb-starlight/?q=mcaa4",
  "https://estore.ua/ua/ipad-air-m3-11-wi-fi-512gb-purple/?q=mcae4",
  
  "https://estore.ua/ua/ipad-air-m3-11-wi-fi-cellular-512gb-blue-mcg54/?q=mcg54",
  "https://estore.ua/ua/ipad-air-m3-11-wi-fi-cellular-512gb-space-gray-mcg44/?q=mcg44",
  "https://estore.ua/ua/ipad-air-m3-11-wi-fi-cellular-512gb-starlight-mcg64/?q=mcg64",
  "https://estore.ua/ua/ipad-air-m3-11-wi-fi-cellular-512gb-purple-mcg74/?q=mcg74",
  
  "https://estore.ua/ua/ipad-air-m3-11-wi-fi-1tb-blue/?q=mcaj4",
  "https://estore.ua/ua/ipad-air-m3-11-wi-fi-1tb-space-grey/?q=mcah4",
  "https://estore.ua/ua/ipad-air-m3-11-wi-fi-1tb-starlight/?q=mcaq4",
  "https://estore.ua/ua/ipad-air-m3-11-wi-fi-1tb-purple/?q=mcau4",
  
  "https://estore.ua/ua/ipad-air-m3-11-wi-fi-cellular-1tb-blue-mcg94/?q=mcg94",
  "https://estore.ua/ua/ipad-air-m3-11-wi-fi-cellular-1tb-space-gray-mcg84/?q=mcg84",
  "https://estore.ua/ua/ipad-air-m3-11-wi-fi-cellular-1tb-starlight-mcga4/?q=mcga4",
  "https://estore.ua/ua/ipad-air-m3-11-wi-fi-cellular-1tb-purple-mcgc4/?q=mcgc4",
  
  
  "https://estore.ua/ua/ipad-air-m3-13-wi-fi-128gb-blue/?q=mcnj4",
  "https://estore.ua/ua/ipad-air-m3-13-wi-fi-128gb-space-grey/?q=mcnh4",
  "https://estore.ua/ua/ipad-air-m3-13-wi-fi-128gb-starlight/?q=mcnk4",
  "https://estore.ua/ua/ipad-air-m3-13-wi-fi-128gb-purple/?q=mcnl4",
  
  "https://estore.ua/ua/ipad-air-m3-13-wi-fi-cellular-128gb-blue-mcj24/?q=mcj24",
  "https://estore.ua/ua/ipad-air-m3-13-wi-fi-cellular-128gb-space-gray-mcj14/?q=mcj14",
  "https://estore.ua/ua/ipad-air-m3-13-wi-fi-cellular-128gb-starlight-mcj34/?q=mcj34",
  "https://estore.ua/ua/ipad-air-m3-13-wi-fi-cellular-128gb-purple-mcj44/?q=mcj44",
  
  "https://estore.ua/ua/ipad-air-m3-13-wi-fi-256gb-blue/?q=mcnp4",
  "https://estore.ua/ua/ipad-air-m3-13-wi-fi-256gb-space-grey/?q=mcnn4",
  "https://estore.ua/ua/ipad-air-m3-13-wi-fi-256gb-starlight/?q=mcnq4",
  "https://estore.ua/ua/ipad-air-m3-13-wi-fi-256gb-purple/?q=mcnr4",
  
  "https://estore.ua/ua/ipad-air-m3-13-wi-fi-cellular-256gb-blue-mcj64/?q=mcj64",
  "https://estore.ua/ua/ipad-air-m3-13-wi-fi-cellular-256gb-space-gray-mcj54/?q=mcj54",
  "https://estore.ua/ua/ipad-air-m3-13-wi-fi-cellular-256gb-starlight-mcj74/?q=mcj74",
  "https://estore.ua/ua/ipad-air-m3-13-wi-fi-cellular-256gb-purple-mcj84/?q=mcj84",
  
  
  "https://estore.ua/ua/ipad-air-m3-13-wi-fi-512gb-blue/?q=mcnw4",
  "https://estore.ua/ua/ipad-air-m3-13-wi-fi-512gb-space-grey/?q=mcnt4",
  "https://estore.ua/ua/ipad-air-m3-13-wi-fi-512gb-starlight/?q=mcnx4",
  "https://estore.ua/ua/ipad-air-m3-13-wi-fi-512gb-purple/?q=mcny4",
  
  "https://estore.ua/ua/ipad-air-m3-13-wi-fi-cellular-512gb-blue-mcja4/?q=mcja4",
  "https://estore.ua/ua/ipad-air-m3-13-wi-fi-cellular-512gb-space-gray-mcj94/?q=mcj94",
  "https://estore.ua/ua/ipad-air-m3-13-wi-fi-cellular-512gb-starlight-mcjc4/?q=mcjc4",
  "https://estore.ua/ua/ipad-air-m3-13-wi-fi-cellular-512gb-purple-mcjd4/?q=mcjd4",
  
  
  "https://estore.ua/ua/ipad-air-m3-13-wi-fi-1tb-blue/?q=mcq14",
  "https://estore.ua/ua/ipad-air-m3-13-wi-fi-1tb-space-grey/?q=mcq04",
  "https://estore.ua/ua/ipad-air-m3-13-wi-fi-1tb-starlight/?q=mcq24",
  "https://estore.ua/ua/ipad-air-m3-13-wi-fi-1tb-purple/?q=mcq34",
  
  "https://estore.ua/ua/ipad-air-m3-13-wi-fi-cellular-1tb-blue-mcjf4/?q=mcjf4",
  "https://estore.ua/ua/ipad-air-m3-13-wi-fi-cellular-1tb-space-gray-mcje4/?q=mcje4",
  "https://estore.ua/ua/ipad-air-m3-13-wi-fi-cellular-1tb-starlight-mcjg4/?q=mcjg4",
  "https://estore.ua/ua/ipad-air-m3-13-wi-fi-cellular-1tb-purple-mcjh4/?q=mcjh4",
  
  
  
  "https://estore.ua/ua/ipad-wi-fi-128gb-blue-2025/?q=md4a4",
  "https://estore.ua/ua/ipad-wi-fi-128gb-silver-2025/?q=md3y4",
  "https://estore.ua/ua/ipad-wi-fi-128gb-pink-2025/?q=md4e4",
  "https://estore.ua/ua/ipad-wi-fi-128gb-yellow-2025/?q=md4d4",
  
  "https://estore.ua/ua/ipad-wi-fi-256gb-blue-2025/?q=md4h4",
  "https://estore.ua/ua/ipad-wi-fi-cellular-128gb-silver-md7f4-2025/?q=md7f4",
  "https://estore.ua/ua/ipad-wi-fi-cellular-128gb-pink-md7j4-2025/?q=md7j4",
  "https://estore.ua/ua/ipad-wi-fi-cellular-128gb-yellow-md7h4-2025/?q=md7h4",
  
  
  "https://estore.ua/ua/ipad-wi-fi-256gb-blue-2025/?q=md4h4",
  "https://estore.ua/ua/ipad-wi-fi-256gb-silver-2025/?q=md4g4",
  "https://estore.ua/ua/ipad-wi-fi-256gb-pink-2025/?q=md4p4",
  "https://estore.ua/ua/ipad-wi-fi-256gb-yellow-2025/?q=md4j4",
  
  "https://estore.ua/ua/ipad-wi-fi-cellular-256gb-blue-md7l4-2025/?q=md7l4",
  "https://estore.ua/ua/ipad-wi-fi-cellular-256gb-silver-md7k4-2025/?q=md7k4",
  "https://estore.ua/ua/ipad-wi-fi-cellular-256gb-pink-md7n4-2025/?q=md7n4",
  "https://estore.ua/ua/ipad-wi-fi-cellular-256gb-yellow-md7m4-2025/?q=md7m4",
  
  
  "https://estore.ua/ua/ipad-wi-fi-512gb-blue-2025/?q=md4y4",
  "https://estore.ua/ua/ipad-wi-fi-512gb-silver-2025/?q=md4q4",
  "https://estore.ua/ua/ipad-wi-fi-512gb-pink-2025/?q=md5c4",
  "https://estore.ua/ua/ipad-wi-fi-512gb-yellow-2025/?q=md5a4",
  
  "https://estore.ua/ua/ipad-wi-fi-cellular-512gb-blue-md7q4-2025/?q=md7q4",
  "https://estore.ua/ua/ipad-wi-fi-cellular-512gb-silver-md7p4-2025/?q=md7p4",
  "https://estore.ua/ua/ipad-wi-fi-cellular-512gb-pink-md7t4-2025/?q=md7t4",
  "https://estore.ua/ua/ipad-wi-fi-cellular-512gb-yellow-md7r4-2025/?q=md7r4",
  ];


  const arrLinkMobilePlanetMac = [
    'https://mobileplanet.ua/apple-macbook-air-13-space-gray-mgn63-20-193343',
    'https://mobileplanet.ua/apple-macbook-air-13-space-gray-mgn73-20-193345',
    'https://mobileplanet.ua/apple-macbook-air-13-silver-mgn93-2020-193342',
    'https://mobileplanet.ua/apple-macbook-air-13-silver-mgna3-2020-193344',
    'https://mobileplanet.ua/apple-macbook-air-13-gold-mgnd3-2020-193341',
    
    'https://mobileplanet.ua/apple-macbook-air-13-6-m2-space-gray-mlx-253143',
    'https://mobileplanet.ua/apple-macbook-air-13-6-m2-space-gray-mlx-253327',
    'https://mobileplanet.ua/apple-macbook-air-13-6-m2-silver-mlxy3-2-253326',
    'https://mobileplanet.ua/apple-macbook-air-13-6-m2-silver-mly03-2-253142',
    'https://mobileplanet.ua/apple-macbook-air-13-6-m2-starlight-mly1-253144',
    'https://mobileplanet.ua/apple-macbook-air-13-6-m2-starlight-mly2-253328',
    'https://mobileplanet.ua/apple-macbook-air-13-6-m2-midnight-mly33-253140',
    'https://mobileplanet.ua/apple-macbook-air-13-6-m2-midnight-mly43-253141',
  
    'https://mobileplanet.ua/apple-macbook-pro-14-space-gray-2021-mkgp3-237453',
    'https://mobileplanet.ua/apple-macbook-pro-14-space-gray-2021-mkgq3-237454',
    'https://mobileplanet.ua/apple-macbook-pro-14-silver-mkgr3-2021-238146',
    'https://mobileplanet.ua/apple-macbook-pro-14-silver-mkgt3-2021-238139',
  
    'https://mobileplanet.ua/Apple-MacBook-Pro-16-Space-Gray-MVVJ2-20-142026',
  
    'https://mobileplanet.ua/apple-macbook-pro-16-space-gray-2021-mk183-237455',
    'https://mobileplanet.ua/apple-macbook-pro-16-space-gray-mk193-2021-238000',
    'https://mobileplanet.ua/apple-macbook-pro-16-space-gray-mk1a3-2021-238001',
    'https://mobileplanet.ua/apple-macbook-pro-16-silver-mk1e3-2021-237970',
    'https://mobileplanet.ua/apple-macbook-pro-16-silver-mk1f3-2021-237971',
    'https://mobileplanet.ua/apple-macbook-pro-16-silver-mk1h3-2021-237972',
  
    'https://mobileplanet.ua/apple-macbook-pro-13-space-gray-myd82-20-190626',
    'https://mobileplanet.ua/apple-macbook-pro-13-m1-space-gray-myd92-190757',
    'https://mobileplanet.ua/apple-macbook-pro-13-silver-myda2-2020-190627',
    'https://mobileplanet.ua/apple-macbook-pro-13-m1-silver-mydc2-202-190758',
  
    'https://mobileplanet.ua/apple-macbook-pro-13-m2-space-gray-mneh3-252071',
    'https://mobileplanet.ua/apple-macbook-pro-13-m2-space-gray-mnej3-252073',
    'https://mobileplanet.ua/apple-macbook-pro-13-m2-silver-mnep3-252072',
    'https://mobileplanet.ua/apple-macbook-pro-13-m2-silver-mneq3-252074',
    'https://mobileplanet.ua/apple-macbook-pro-14-space-gray-2023-mphe3-265267',
    'https://mobileplanet.ua/apple-macbook-pro-14-space-gray-2023-mphf3-265268',
    'https://mobileplanet.ua/apple-macbook-pro-14-space-gray-2023-mphg3-265269',
    'https://mobileplanet.ua/apple-macbook-pro-14-silver-2023-mphh3-265264',
    'https://mobileplanet.ua/apple-macbook-pro-14-silver-2023-mphk3-265266',
  
    'https://mobileplanet.ua/apple-macbook-pro-16-space-gray-2023-mnw83-265273',
    'https://mobileplanet.ua/apple-macbook-pro-16-space-gray-2023-mnw93-265274',
    'https://mobileplanet.ua/apple-macbook-pro-16-space-gray-2023-mnwa3-265275',
    'https://mobileplanet.ua/apple-macbook-pro-16-silver-2023-mnwe3-265272',
    'https://mobileplanet.ua/apple-macbook-pro-16-silver-2023-mnwc3-265270',
  
    'https://mobileplanet.ua/apple-macbook-air-15-m2-space-gray-2023-mqkp3-273143',
    'https://mobileplanet.ua/apple-macbook-air-15-m2-silver-2023-mqkr3-273141',
    'https://mobileplanet.ua/apple-macbook-air-15-m2-midnight-2023-mqkw3-273139',
    'https://mobileplanet.ua/apple-macbook-air-15-m2-starlight-2023-mqku3-273145',
    'https://mobileplanet.ua/apple-macbook-air-15-m2-space-gray-2023-mqkq3-273144',
    'https://mobileplanet.ua/apple-macbook-air-15-m2-silver-2023-mqkt3-273142',
    'https://mobileplanet.ua/apple-macbook-air-15-m2-midnight-2023-mqkx3-273140',
    'https://mobileplanet.ua/apple-macbook-air-15-m2-starlight-2023-mqkv3-273146'
  ];
  
  
  const arrLinkIstoreMac = [
    "https://www.istore.ua/catalog/item/apple-macbook-air-2020-g-256-gb-m1-seryy-kosmos/",
    "https://www.istore.ua/catalog/item/apple-macbook-air-2020-g-512-gb-m1-seryy-kosmos/",
    "https://www.istore.ua/catalog/item/apple-macbook-air-2020-g-256-gb-m1-serebristyy/",
    "https://www.istore.ua/catalog/item/apple-macbook-air-2020-g-512-gb-m1-serebristyy/",
    "https://www.istore.ua/catalog/item/apple-macbook-air-2020-g-256-gb-m1-zolotoy/",
    "https://www.istore.ua/catalog/item/apple-macbook-air-2020-g-512-gb-m1-zolotoy/",
  
    "https://www.istore.ua/catalog/item/apple-macbook-air-2022-g-256-gb-m2-space-gray/",
    "https://www.istore.ua/catalog/item/apple-macbook-air-2022-g-512-gb-m2-space-gray/",
    "https://www.istore.ua/catalog/item/apple-macbook-air-2022-g-256-gb-m2-silver/",
    "https://www.istore.ua/catalog/item/apple-macbook-air-2022-g-512-gb-m2-silver/",
    "https://www.istore.ua/catalog/item/apple-macbook-air-2022-g-256-gb-m2-gold/",
    "https://www.istore.ua/catalog/item/apple-macbook-air-2022-g-512-gb-m2-starlight/",
    "https://www.istore.ua/catalog/item/apple-macbook-air-2022-g-256-gb-m2-midnight/",
    "https://www.istore.ua/catalog/item/apple-macbook-air-2022-g-512-gb-m2-midnight/",
  
    "https://www.istore.ua/catalog/item/apple-macbook-pro-14-2-touch-bar-m1-pro-512-gb-ssd-space-gray-2021/",
    "https://www.istore.ua/catalog/item/apple-macbook-pro-14-2-touch-bar-m1-pro-1-tb-ssd-space-gray-2021/",
    "https://www.istore.ua/catalog/item/apple-macbook-pro-14-2-touch-bar-m1-pro-512-gb-ssd-silver-2021/",
    "https://www.istore.ua/catalog/item/apple-macbook-pro-14-2-touch-bar-m1-pro-1-tb-ssd-silver-2021/",
  
    "https://www.istore.ua/catalog/item/apple-macbook-pro-16-2-touch-bar-m1-pro-512-gb-ssd-space-gray-2021/",
    "https://www.istore.ua/catalog/item/apple-macbook-pro-16-2-touch-bar-m1-pro-1-tb-ssd-space-gray-2021/",
    "https://www.istore.ua/catalog/item/apple-macbook-pro-16-2-touch-bar-m1-pro-max-1-tb-ssd-space-gray-2021/",
    "https://www.istore.ua/catalog/item/apple-macbook-pro-16-2-touch-bar-m1-pro-512-gb-ssd-silver-2021/",
    "https://www.istore.ua/catalog/item/apple-macbook-pro-16-2-touch-bar-m1-pro-1-tb-ssd-silver-2021/",
    "https://www.istore.ua/catalog/item/apple-macbook-pro-16-2-touch-bar-m1-pro-max-1-tb-ssd-silver-2021/",
  
    "https://www.istore.ua/catalog/item/apple-macbook-pro-13-touch-bar-m1-256-gb-ssd-seryy-kosmos-2020/",
    "https://www.istore.ua/catalog/item/apple-macbook-pro-13-touch-bar-m1-512-gb-ssd-seryy-kosmos-2020/",
    "https://www.istore.ua/catalog/item/apple-macbook-pro-13-touch-bar-m1-256-gb-ssd-serebristyy-2020/",
    "https://www.istore.ua/catalog/item/apple-macbook-pro-13-touch-bar-m1-512-gb-ssd-serebristyy-2020/",
    "https://www.istore.ua/catalog/item/apple-macbook-pro-13-touch-bar-m2-256-gb-ssd-space-gray/",
    "https://www.istore.ua/catalog/item/apple-macbook-pro-13-touch-bar-m2-512-gb-ssd-space-gray/",
    "https://www.istore.ua/catalog/item/apple-macbook-pro-13-touch-bar-m2-256-gb-ssd-silver/",
    "https://www.istore.ua/catalog/item/apple-macbook-pro-13-touch-bar-m2-512-gb-ssd-silver/",
  
    "https://www.istore.ua/catalog/item/apple-macbook-pro-14-m2-pro-512gb-space-gray-2023/",
    "https://www.istore.ua/catalog/item/apple-macbook-pro-14-m2-pro-1-tb-space-gray-2023/",
    "https://www.istore.ua/catalog/item/apple-macbook-pro-14-m2-max-1-tb-space-gray-2023/",
    "https://www.istore.ua/catalog/item/apple-macbook-pro-14-m2-pro-512gb-silver-2023/",
    "https://www.istore.ua/catalog/item/apple-macbook-pro-14-m2-max-1-tb-silver-2023/",
  
    "https://www.istore.ua/catalog/item/apple-macbook-pro-16-m2-pro-512-tb-space-gray-2023/",
    "https://www.istore.ua/catalog/item/apple-macbook-pro-16-m2-pro-1-tb-space-gray-2023/",
    "https://www.istore.ua/catalog/item/apple-macbook-pro-16-m2-max-1-tb-space-gray-2023/",
    "https://www.istore.ua/catalog/item/apple-macbook-pro-16-m2-max-1-tb-silver-2023/",
    "https://www.istore.ua/catalog/item/apple-macbook-pro-16-m2-pro-512-tb-silver-2023/",
  
    "https://www.istore.ua/catalog/item/apple-macbook-air-15-2023-g-256-gb-m2-space-gray/",
    "https://www.istore.ua/catalog/item/apple-macbook-air-15-2023-g-256-gb-m2-silver/",
    "https://www.istore.ua/catalog/item/apple-macbook-air-15-2023-g-256-gb-m2-midnight/",
    "https://www.istore.ua/catalog/item/apple-macbook-air-15-2023-g-256-gb-m2-starlight/",
    "https://www.istore.ua/catalog/item/apple-macbook-air-15-2023-g-512-gb-m2-space-gray/",
    "https://www.istore.ua/catalog/item/apple-macbook-air-15-2023-g-512-gb-m2-silver/",
    "https://www.istore.ua/catalog/item/apple-macbook-air-15-2023-g-512-gb-m2-midnight/",
    "https://www.istore.ua/catalog/item/apple-macbook-air-15-2023-g-512-gb-m2-starlight/",
    "https://www.istore.ua/ua/item/apple-macbook-air-13-16gb-512gb-m3-midnight/",
    "https://www.istore.ua/ua/item/apple-macbook-air-13-m3-16gb-512gb-space-gray/",
    "https://www.istore.ua/ua/item/apple-macbook-air-13-m3-16gb-512gb-starlight/",
    "https://www.istore.ua/ua/item/apple-macbook-air-13-m3-16gb-512gb-silver/",
  
    "https://www.istore.ua/ua/item/apple-macbook-air-15-m3-16gb-512gb-midnight/",
    "https://www.istore.ua/ua/item/apple-macbook-air-15-m3-16gb-512gb-space-gray/",
    "https://www.istore.ua/ua/item/apple-macbook-air-15-m3-16gb-512gb-starlight/",
    "https://www.istore.ua/ua/item/apple-macbook-air-15-m3-16gb-512gb-silver/",
  
  ];
  const arrLinkJabkoMac = [
    "https://jabko.ua/rus/mac/macbook-air/macbook-air--2020--with-apple-m1/macbook-air-13-retina--space-gray--256gb--mgn63--2020--apple-m1-",
    "https://jabko.ua/rus/mac/macbook-air/macbook-air--2020--with-apple-m1/macbook-air-13-retina--space-gray--512gb--mgn73--2020--apple-m1-",
    "https://jabko.ua/rus/mac/macbook-air/macbook-air--2020--with-apple-m1/macbook-air-13-retina--silver--256gb--mgn93--2020--apple-m1-",
    "https://jabko.ua/rus/mac/macbook-air/macbook-air--2020--with-apple-m1/macbook-air-13-retina--silver--512gb--mgna3--2020--apple-m1-",
    "https://jabko.ua/rus/mac/macbook-air/macbook-air--2020--with-apple-m1/macbook-air-13-retina--gold--256gb--mgnd3--2020--apple-m1-",
    "https://jabko.ua/rus/mac/macbook-air/macbook-air--2020--with-apple-m1/macbook-air-13-retina--gold--512gb--mgne3--2020--apple-m1-",
  
    "https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-m2-2022/macbook-air-13-retina--space-gray--256gb-with-apple-m2",
    "https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-m2-2022/macbook-air-13-retina--space-gray--512gb-with-apple-m2",
    "https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-m2-2022/macbook-air-13-retina--silver--256gb-with-apple-m2",
    "https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-m2-2022/macbook-air-13-retina--silver--512gb-with-apple-m2",
    "https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-m2-2022/macbook-air-13-retina--starlight--256gb-with-apple-m2",
    "https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-m2-2022/macbook-air-13-retina--starlight--512gb-with-apple-m2",
    "https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-m2-2022/macbook-air-13-retina--midnight--256gb-with-apple-m2",
    "https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-m2-2022/macbook-air-13-retina--midnight--512gb-with-apple-m2",
  
    "https://jabko.ua/rus/mac/macbook-pro/apple-macbook-pro-14-inch/apple-macbook-pro-14--512gb--space-gray-with-apple-m1--2021-",
    "https://jabko.ua/rus/mac/macbook-pro/apple-macbook-pro-14-inch/apple-macbook-pro-14--1tb--space-gray-with-apple-m1-pro--2021-",
    "https://jabko.ua/rus/mac/macbook-pro/apple-macbook-pro-14-inch/apple-macbook-pro-14-512gb-silver-apple-m1-pro-mkgr3-2021",
    "https://jabko.ua/rus/mac/macbook-pro/apple-macbook-pro-14-inch/apple-macbook-pro-14--1tb--silver-with-apple-m1-pro--2021-",
  
    "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-16--2019-/apple-macbook-pro-16-retina--space-gray-mvvj2-2019",
    "https://jabko.ua/rus/mac/macbook-pro/apple-macbook-pro-16--2021-/apple-macbook-pro-16-with-apple-m1-pro--10-cpu--16-gpu--16gb-ram--512gb-ssd--space-gray-",
    "https://jabko.ua/rus/mac/macbook-pro/apple-macbook-pro-16--2021-/apple-macbook-pro-16-with-apple-m1-pro--10-cpu--16-gpu--16gb-ram--1tb-ssd--space-gray-",
    "https://jabko.ua/rus/mac/macbook-pro/apple-macbook-pro-16--2021-/apple-macbook-pro-16-with-apple-m1-max--10-cpu--16-gpu--16gb-ram--1tb-ssd--space-gray-",
    "https://jabko.ua/rus/mac/macbook-pro/apple-macbook-pro-16--2021-/apple-macbook-pro-16-with-apple-m1-pro--10-cpu--16-gpu--16gb-ram--512gb-ssd--silver-",
    "https://jabko.ua/rus/mac/macbook-pro/apple-macbook-pro-16--2021-/apple-macbook-pro-16-with-apple-m1-pro--10-cpu--16-gpu--16gb-ram--1tb-ssd--silver-",
    "https://jabko.ua/rus/mac/macbook-pro/apple-macbook-pro-16--2021-/apple-macbook-pro-16-with-apple-m1-max--10-cpu--32-gpu--32gb-ram--1tb-ssd--silver-",
  
    "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-13-with-apple-m1/apple-macbook-pro-13-256gb-space-gray-with-apple-m1-myd82-2020",
    "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-13-with-apple-m1/apple-macbook-pro-13-512gb-space-gray-with-apple-m1-myd92-2020",
    "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-13-with-apple-m1/macbook-pro-13--256gb--",
    "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-13-with-apple-m1/macbook-pro-13-3--2020-",
  
    "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-13-apple-m2/apple-macbook-pro-13--256gb--space-gray-with-apple-m2--2022-",
    "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-13-apple-m2/apple-macbook-pro-13--512gb--space-gray-with-apple-m1--2022-",
    "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-13-apple-m2/apple-macbook-pro-13--256gb--silver-with-apple-m2---2022-",
    "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-13-apple-m2/apple-macbook-pro-13--512gb--silver-with-apple-m1--2022-",
  
    "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-14-apple-m2/apple-macbook-pro-14-512gb-space-gray-with-apple-m2-2023",
    "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-14-apple-m2/apple-macbook-pro-14--1tb--space-gray-with-apple-m2-pro--2023-",
    "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-14-apple-m2/apple-macbook-pro-14--1tb--space-gray-with-apple-m2-max--2023-",
    "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-14-apple-m2/apple-macbook-pro-14--512gb--silver-with-apple-m2-2023",
    "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-14-apple-m2/apple-macbook-pro-14--1tb--silver-with-apple-m2-max--2023-",
  
    "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-16-apple-m2/apple-macbook-pro-16--512gb--space-gray-with-apple-m2-2023",
    "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-16-apple-m2/apple-macbook-pro-16-with-apple-m2-pro--12-cpu---19-gpu--16gb-ram--1tb-ssd--space-gray---2023-",
    "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-16-apple-m2/apple-macbook-pro-16-with-apple-m2-max--12-cpu---38-gpu--32gb-ram--1tb-ssd--space-gray---2023-",
    "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-16-apple-m2/apple-macbook-pro-16-with-apple-m2-max--12-cpu---38-gpu--32gb-ram--1tb-ssd--silver---2023-",
    "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-16-apple-m2/apple-macbook-pro-16--512gb--silver-with-apple-m2-2023-",
  
    "https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-15-2023/macbook-air-15-retina--spacegray--256gb--2023-",
    "https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-15-2023/macbook-air-15-retina--silver--256gb--2023-",
    "https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-15-2023/macbook-air-15-retina--midnight--256gb--2023-",
    "https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-15-2023/macbook-air-15-retina-starlight--256gb-2023-",
    "https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-15-2023/macbook-air-15-retina--spacegray--512gb--2023-",
    "https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-15-2023/macbook-air-15-retina--silver--512gb--2023-",
    "https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-15-2023/macbook-air-15-retina--midnight--512gb--2023-",
    "https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-15-2023/macbook-air-15-retina--starlight--512gb--2023-",
  
  
  
  
  
  
    "https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-midnight-256gb-8-cpu-8-gpu-8gb-ram-apple-m3-mrxv3",
    "https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-space-gray-256gb-8-cpu-8-gpu-8gb-ram-apple-m3-mrxn3",
    "https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-starlight-256gb-8-cpu-8-gpu-8gb-ram-apple-m3-mrxt3",
    "https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-silver-256gb-8-cpu-8-gpu-8gb-ram-apple-m3-mrxq3",
  
    "https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-midnight-512gb-8-cpu-10-gpu-8gb-ram-apple-m3-mrxw3",
    "https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-space-gray-512gb-8-cpu-10-gpu-8gb-ram-apple-m3-mrxp3",
    "https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-starlight-512gb-8-cpu-10-gpu-8gb-ram-apple-m3-mrxu3",
    "https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-silver-512gb-8-cpu-10-gpu-8gb-ram-apple-m3-mrxr3",
  
    "https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-midnight-256gb-8-cpu--10-gpu-8gb-ram-with-apple-m3-mryu3",
    "https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-space-gray-256gb-8-cpu--10-gpu-8gb-ram-with-apple-m3-mrym3",
    "https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-starlight-256gb-8-cpu--10-gpu-8gb-ram-with-apple-m3-mryr3",
    "https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-silver-256gb-8-cpu--10-gpu-8gb-ram-with-apple-m3-mryp3",
  
    "https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-midnight-512gb-8-cpu--10-gpu-8gb-ram-with-apple-m3-mryv3",
    "https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-space-gray-512gb-8-cpu--10-gpu-8gb-ram-with-apple-m3-mryn3",
    "https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-starlight-512gb-8-cpu--10-gpu-8gb-ram-with-apple-m3-mryt3",
    "https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-silver-512gb-8-cpu--10-gpu-8gb-ram-with-apple-m3-mryq3",
  
  
    "https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m3/apple-macbook-pro-14-apple-m3-512gb-8-cpu-10-gpu-8gb-ram-space-gray-2023-mtl73",
    "https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m3/apple-macbook-pro-14-apple-m3-512gb-8-cpu-10-gpu-8gb-ram-silver-2023-mr7j3",
    "https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m3/apple-macbook-pro-14-apple-m3-1tb-8-cpu-10-gpu-8gb-ram-space-gray-2023-mtl83",
    "https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m3/apple-macbook-pro-14-apple-m3-1tb-8-cpu-10-gpu-8gb-ram-silver-2023-mr7k3",
  
    "https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m3/apple-macbook-pro-14-apple-m3-pro-512gb-11-cpu-14-gpu-18gb-ram-space-black-2023-mrx33",
    "https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m3/apple-macbook-pro-14-apple-m3-pro-512gb-11-cpu-14-gpu-18gb-ram-silver-2023-mrx63",
    "https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m3/apple-macbook-pro-14-apple-m3-pro-1tb-12-cpu-18-gpu-18gb-ram-space-black-2023-mrx43",
    "https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m3/apple-macbook-pro-14-apple-m3-pro-1tb-12-cpu-18-gpu-18gb-ram-silver-2023-mrx73",
  
    "https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m3/apple-macbook-pro-14-apple-m3-max-1tb-14-cpu-30-gpu-36gb-ram-space-black-2023-mrx53",
    "https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m3/apple-macbook-pro-14-apple-m3-max-1tb-14-cpu-30-gpu-36gb-ram-silver-2023-mrx83",
  
    "https://jabko.ua/mac/macbook-pro/macbook-pro-16-apple-m3/apple-macbook-pro-16-apple-m3-pro-512gb-12-cpu-18-gpu-18gb-ram-space-black-2023-mrw13",
    "https://jabko.ua/mac/macbook-pro/macbook-pro-16-apple-m3/apple-macbook-pro-16-apple-m3-pro-512gb-12-cpu-18-gpu-18gb-ram-silver-2023-mrw43",
    "https://jabko.ua/mac/macbook-pro/macbook-pro-16-apple-m3/apple-macbook-pro-16-apple-m3-pro-512gb-12-cpu-18-gpu-36gb-ram-space-black-2023-mrw23",
    "https://jabko.ua/mac/macbook-pro/macbook-pro-16-apple-m3/apple-macbook-pro-16-apple-m3-pro-512gb-12-cpu-18-gpu-36gb-ram-silver-2023-mrw63",
  
    "https://jabko.ua/mac/macbook-pro/macbook-pro-16-apple-m3/apple-macbook-pro-16-apple-m3-max-1tb-14-cpu-30-gpu-36gb-ram-space-black-2023-mrw33",
    "https://jabko.ua/mac/macbook-pro/macbook-pro-16-apple-m3/apple-macbook-pro-16-apple-m3-max-1tb-14-cpu-30-gpu-36gb-ram-silver-2023-mrw73",
    "https://jabko.ua/mac/macbook-pro/macbook-pro-16-apple-m3/apple-macbook-pro-16-apple-m3-max-1tb-16-cpu-40-gpu-48gb-ram-space-black-2023-muw63",
    "https://jabko.ua/mac/macbook-pro/macbook-pro-16-apple-m3/apple-macbook-pro-16-apple-m3-max-1tb-16-cpu-40-gpu-48gb-ram-silver-2023-muw73",
    "https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-midnight-512gb-8-cpu-10-gpu-16gb-ram-apple-m3-mxcv3",
    "https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-space-gray-512gb-8-cpu-10-gpu-16gb-ram-apple-m3-mxcr3",
    "https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-starlight-512gb-8-cpu-10-gpu-16gb-ram-apple-m3-mxcu3",
    "https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-silver-512gb-8-cpu-10-gpu-16gb-ram-apple-m3-mxct3",
  
    "https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-midnight-512gb-8-cpu--10-gpu-16gb-ram-with-apple-m3-mxd43",
    "https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-space-gray-512gb-8-cpu--10-gpu-16gb-ram-with-apple-m3-mxd13",
    "https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-starlight-512gb-8-cpu--10-gpu-16gb-ram-with-apple-m3-mxd33",
    "https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-silver-512gb-8-cpu--10-gpu-16gb-ram-with-apple-m3-mxd23",
  ];
  
  const arrLinkSkayMacM3 = [
    "https://skay.ua/uk/macbook-pro-2023/67562-apple-macbook-pro-14-m3-ship-8512gb-mtl73-2023-space-gray.html?search_query=MTL73&results=1",
    "https://skay.ua/uk/macbook-pro-2023/67563-apple-macbook-pro-14-m3-ship-8512gb-mr7j3-2023-silver.html?search_query=MR7J3&results=1",
    "https://skay.ua/uk/macbook-pro-2023/67564-apple-macbook-pro-14-m3-ship-81tb-mtl83-2023-space-gray.html",
    "https://skay.ua/uk/macbook-pro-2023/67565-apple-macbook-pro-14-m3-ship-81tb-mr7k3-2023-silver.html",
  
    "https://skay.ua/uk/macbook-pro-2023/67580-apple-macbook-pro-14-m3-pro-ship-18512gb-mrx33-2023-space-black.html",
    "https://skay.ua/uk/macbook-pro-2023/67581-apple-macbook-pro-14-m3-pro-ship-18512gb-mrx63-2023-silver.html",
    "https://skay.ua/uk/macbook-pro-2023/67698-apple-macbook-pro-14-m3-pro-ship-181tb-mrx43-2023-space-black.html",
    "https://skay.ua/uk/macbook-pro-2023/67699-apple-macbook-pro-14-m3-pro-ship-181tb-mrx73-2023-silver.html",
  
    "https://skay.ua/uk/macbook-pro-2023/67700-apple-macbook-pro-14-m3-max-ship-361tb-mrx53-2023-space-black.html",
    "https://skay.ua/uk/macbook-pro-2023/67701-apple-macbook-pro-14-m3-max-ship-361tb-mrx83-2023-silver.html",
  
    "https://skay.ua/uk/macbook-pro-2023/67702-apple-macbook-pro-16-m3-pro-ship-18512gb-mrw13-2023-space-black.html",
    "https://skay.ua/uk/macbook-pro-2023/67703-apple-macbook-pro-16-m3-pro-ship-18512gb-mrw43-2023-silver.html",
  
    "https://skay.ua/uk/macbook-pro-2023/67704-apple-macbook-pro-16-m3-pro-ship-36512gb-mrw23-2023-space-black.html",
    "https://skay.ua/uk/macbook-pro-2023/67705-apple-macbook-pro-16-m3-pro-ship-36512gb-mrw63-2023-silver.html",
  
    "https://skay.ua/uk/macbook-pro-2023/67746-apple-macbook-pro-16-m3-max-ship-361tb-mrw33-2023-space-black.html",
    "https://skay.ua/uk/macbook-pro-2023/67747-apple-macbook-pro-16-m3-max-ship-361tb-mrw73-2023-silver.html",
    "https://skay.ua/uk/macbook-pro-2023/67750-apple-macbook-pro-16-m3-max-ship-481tb-muw63-2023-space-black.html",
    "https://skay.ua/uk/macbook-pro-2023/67751-apple-macbook-pro-16-m3-max-ship-481tb-muw73-2023-silver.html",
  ];
  const arrLinkMobilePlanetMacM3 = [
    'https://mobileplanet.ua/apple-macbook-pro-14-space-gray-late-2023-mtl73-293850',
    'https://mobileplanet.ua/apple-macbook-pro-14-silver-late-2023-mr7j3-293842',
    'https://mobileplanet.ua/apple-macbook-pro-14-space-gray-late-2023-mtl83-293851',
    'https://mobileplanet.ua/apple-macbook-pro-14-silver-late-2023-mr7k3-293843',
  
    'https://mobileplanet.ua/apple-macbook-pro-14-space-black-late-2023-mrx33-293847',
    'https://mobileplanet.ua/apple-macbook-pro-14-silver-late-2023-mrx63-293844',
    'https://mobileplanet.ua/apple-macbook-pro-14-space-black-late-2023-mrx43-293848',
    'https://mobileplanet.ua/apple-macbook-pro-14-silver-late-2023-mrx73-293845',
  
    'https://mobileplanet.ua/apple-macbook-pro-14-space-black-late-2023-mrx53-293849',
    'https://mobileplanet.ua/apple-macbook-pro-14-silver-late-2023-mrx83-293846',
  
  
    'https://mobileplanet.ua/apple-macbook-pro-16-space-black-late-2023-mrw13-293856',
    'https://mobileplanet.ua/apple-macbook-pro-16-silver-late-2023-mrw43-293852',
  
    'https://mobileplanet.ua/apple-macbook-pro-16-space-black-late-2023-mrw23-293857',
    'https://mobileplanet.ua/apple-macbook-pro-16-silver-late-2023-mrw63-293853',
  
    'https://mobileplanet.ua/apple-macbook-pro-16-space-black-late-2023-mrw33-293858',
    'https://mobileplanet.ua/apple-macbook-pro-16-silver-late-2023-mrw73-293854',
    'https://mobileplanet.ua/apple-macbook-pro-16-space-black-late-2023-muw63-293859',
    'https://mobileplanet.ua/apple-macbook-pro-16-silver-late-2023-muw73-293855',
  
  
  
    "https://mobileplanet.ua/apple-macbook-air-13-6-m3-8-256gb-midnight-2024-mr-308332",
    "https://mobileplanet.ua/apple-macbook-air-13-6-m3-8-256gb-space-gray-2024-308355",
    "https://mobileplanet.ua/apple-macbook-air-13-6-m3-8-256gb-starlight-2024-m-308367",
    "https://mobileplanet.ua/apple-macbook-air-13-6-m3-8-256gb-silver-2024-mrxq-308343",
  
    "https://mobileplanet.ua/apple-macbook-air-13-6-m3-8-512gb-midnight-2024-mr-308333",
    "https://mobileplanet.ua/apple-macbook-air-13-6-m3-8-512gb-space-gray-2024-308356",
    "https://mobileplanet.ua/apple-macbook-air-13-6-m3-8-512gb-starlight-2024-m-308368",
    "https://mobileplanet.ua/apple-macbook-air-13-6-m3-8-512gb-silver-2024-mrxr-308344",
  
  
    "https://mobileplanet.ua/apple-macbook-air-15-m3-8-256gb-midnight-2024-mryu-308379",
    "https://mobileplanet.ua/apple-macbook-air-15-m3-8-256gb-space-gray-2024-mr-308403",
    "https://mobileplanet.ua/apple-macbook-air-15-m3-8-256gb-starlight-2024-mry-308415",
    "https://mobileplanet.ua/apple-macbook-air-15-m3-8-256gb-silver-2024-mryp3-308391",
  
    "https://mobileplanet.ua/apple-macbook-air-15-m3-8-512gb-midnight-2024-mryv-308380",
    "https://mobileplanet.ua/apple-macbook-air-15-m3-8-512gb-space-gray-2024-mr-308404",
    "https://mobileplanet.ua/apple-macbook-air-15-m3-8-512gb-starlight-2024-mry-308416",
    "https://mobileplanet.ua/apple-macbook-air-15-m3-8-512gb-silver-2024-mryq3-308392",
    "https://mobileplanet.ua/ua/apple-macbook-air-13-6-m3-16-512gb-midni-308334",
    "https://mobileplanet.ua/ua/apple-macbook-air-13-6-m3-16-512gb-space-308357",
    "https://mobileplanet.ua/ua/apple-macbook-air-13-6-m3-16-512gb-starl-308369",
    "https://mobileplanet.ua/ua/apple-macbook-air-13-6-m3-16-512gb-silve-308345",
  
    "https://mobileplanet.ua/ua/apple-macbook-air-15-m3-16-512gb-midnigh-308381",
    "https://mobileplanet.ua/ua/apple-macbook-air-15-m3-16-512gb-space-g-308405",
    "https://mobileplanet.ua/ua/apple-macbook-air-15-m3-16-512gb-starlig-308417",
    "https://mobileplanet.ua/ua/apple-macbook-air-15-m3-16-512gb-silver-308393",
  ];
  
  const arrLinkIstoreMacM3 = [
    'https://www.istore.ua/ua/item/macbook-pro-14-apple-m3-512-gb-space-gray-2023/',
    'https://www.istore.ua/ua/item/macbook-pro-14-apple-m3-512-gb-silver-2023/',
    'https://www.istore.ua/ua/item/macbook-pro-14-apple-m3-1tb-space-gray-2023/',
    'https://www.istore.ua/ua/item/macbook-pro-14-apple-m3-1tb-silver-2023/',
  
    'https://www.istore.ua/ua/item/macbook-pro-14-apple-m3-pro-512-gb-space-black-2023/',
    'https://www.istore.ua/ua/item/macbook-pro-14-apple-m3-pro-512-gb-silver-2023/',
    'https://www.istore.ua/ua/item/macbook-pro-14-apple-m3-pro-1-tb-space-black-2023/',
    'https://www.istore.ua/ua/item/macbook-pro-14-apple-m3-pro-1-tb-silver-2023/',
  
    'https://www.istore.ua/ua/item/macbook-pro-14-apple-m3-max-1-tb-space-black-2023/',
    'https://www.istore.ua/ua/item/macbook-pro-14-apple-m3-max-1-tb-silver-2023/',
  
  
    'https://www.istore.ua/ua/item/macbook-pro-16-apple-m3-pro-512-gb-space-black-2023/',
    'https://www.istore.ua/ua/item/macbook-pro-16-apple-m3-pro-18gb-512gb-silver-2023/',
  
    'https://www.istore.ua/ua/item/macbook-pro-16-apple-m3-pro-32gb-512-gb-space-black-2023/',
    'https://www.istore.ua/ua/item/macbook-pro-16-apple-m3-pro-32gb-512-gb-silver-2023/',
  
    'https://www.istore.ua/ua/item/macbook-pro-16-apple-m3-max-36gb-1tb-space-black-2023/',
    'https://www.istore.ua/ua/item/macbook-pro-16-apple-m3-max-36gb-1tb-silver-2023/',
    'https://www.istore.ua/ua/item/macbook-pro-16-apple-m3-max-48gb-1tb-space-black-2023/',
    'https://www.istore.ua/ua/item/macbook-pro-16-apple-m3-max-48gb-1tb-silver-2023/',
  
  
  
  
    "https://www.istore.ua/ua/item/apple-macbook-air-13-8gb-256gb-m3-midnight/",
    "https://www.istore.ua/ua/item/apple-macbook-air-13-m3-8gb-256gb-space-gray/",
    "https://www.istore.ua/ua/item/apple-macbook-air-13-m3-8gb-256gb-starlight/",
    "https://www.istore.ua/ua/item/apple-macbook-air-13-m3-8gb-256gb-silver/",
  
    "https://www.istore.ua/ua/item/apple-macbook-air-13-8gb-512gb-m3-midnight/",
    "https://www.istore.ua/ua/item/apple-macbook-air-13-m3-8gb-512gb-space-gray/",
    "https://www.istore.ua/ua/item/apple-macbook-air-13-m3-8gb-512gb-starlight/",
    "https://www.istore.ua/ua/item/apple-macbook-air-13-m3-8gb-512gb-silver/",
  
  
    "https://www.istore.ua/ua/item/apple-macbook-air-15-m3-8gb-256gb-midnight/",
    "https://www.istore.ua/ua/item/apple-macbook-air-15-m3-8gb-256gb-space-gray/",
    "https://www.istore.ua/ua/item/apple-macbook-air-15-m3-8gb-256gb-starlight/",
    "https://www.istore.ua/ua/item/apple-macbook-air-15-m3-8gb-256gb-silver/",
  
    "https://www.istore.ua/ua/item/apple-macbook-air-15-m3-8gb-512gb-midnight/",
    "https://www.istore.ua/ua/item/apple-macbook-air-15-m3-8gb-512gb-space-gray/",
    "https://www.istore.ua/ua/item/apple-macbook-air-15-m3-8gb-512gb-starlight/",
    "https://www.istore.ua/ua/item/apple-macbook-air-15-m3-8gb-512gb-silver/"
  ];
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
  
  const arrLinkJabkoMacM4 = [
    "https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m4/apple-macbook-pro-14-with-apple-m4-512gb-10cpu--10gpu-16gb-ram-space-black-2024",
  "https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m4/apple-macbook-pro-14-with-apple-m4-512gb-10cpu--10gpu-16gb-ram-silver-2024",
  
  "https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m4/apple-macbook-pro-14-with-apple-m4-1tb-10cpu--10gpu-16gb-ram-space-black-2024",
  "https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m4/apple-macbook-pro-14-with-apple-m4-1tb-10cpu--10gpu-16gb-ram-silver-2024",
  
  "https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m4/apple-macbook-pro-14-with-apple-m4-1tb-10cpu--10gpu-24gb-ram-space-black-2024",
  "https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m4/apple-macbook-pro-14-with-apple-m4-1tb-10cpu--10gpu-24gb-ram-silver-2024",
  
  
  
  "https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m4/apple-macbook-pro-14-with-apple-m4-pro-512gb-12cpu--16gpu-24gb-ram-space-black-2024",
  "https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m4/apple-macbook-pro-14-with-apple-m4-pro-512gb-12cpu--16gpu-24gb-ram-silver-2024",
  
  "https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m4/apple-macbook-pro-14-with-apple-m4-pro-1tb-14cpu--20gpu-24gb-ram-space-black-2024",
  "https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m4/apple-macbook-pro-14-with-apple-m4-pro-1tb-14cpu--20gpu-24gb-ram-silver-2024",
  
  "https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m4/apple-macbook-pro-14-with-apple-m4-max-1tb-14cpu--32gpu-36gb-ram-space-black-2024",
  "https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m4/apple-macbook-pro-14-with-apple-m4-max-1tb-14cpu--32gpu-36gb-ram-silver-2024", 
  
  
  
  "https://jabko.ua/mac/macbook-pro/macbook-pro-16-apple-m4/apple-macbook-pro-16-with-apple-m4-pro-512gb-14cpu--20gpu-24gb-ram-space-black-2024",
  "https://jabko.ua/mac/macbook-pro/macbook-pro-16-apple-m4/apple-macbook-pro-16-with-apple-m4-pro-512gb-14cpu--20gpu-24gb-ram-silver-2024",
  
  "https://jabko.ua/mac/macbook-pro/macbook-pro-16-apple-m4/apple-macbook-pro-16-with-apple-m4-pro-512gb-14cpu--20gpu-48gb-ram-space-black-2024",
  "https://jabko.ua/mac/macbook-pro/macbook-pro-16-apple-m4/apple-macbook-pro-16-with-apple-m4-pro-512gb-14cpu--20gpu-48gb-ram-silver-2024", 
  
  "https://jabko.ua/mac/macbook-pro/macbook-pro-16-apple-m4/apple-macbook-pro-16-with-apple-m4-max-1tb-14cpu--32gpu-36gb-ram-space-black-2024",
  "https://jabko.ua/mac/macbook-pro/macbook-pro-16-apple-m4/apple-macbook-pro-16-with-apple-m4-max-1tb-14cpu--32gpu-36gb-ram-silver-2024",
  
  "https://jabko.ua/mac/macbook-pro/macbook-pro-16-apple-m4/apple-macbook-pro-16-with-apple-m4-max-1tb-16cpu--40gpu-48gb-ram-space-black-2024",
  "https://jabko.ua/mac/macbook-pro/macbook-pro-16-apple-m4/apple-macbook-pro-16-with-apple-m4-max-1tb-16cpu--40gpu-48gb-ram-silver-2024", 
  ];
  const arrLinkIStoreMacM4 = [
    "https://www.istore.ua/ua/item/macbook-pro-m4-14-16-512gb-space-black-2024/",
  "https://www.istore.ua/ua/item/macbook-pro-m4-14-16-512gb-silver-2024/",
  
  "https://www.istore.ua/ua/item/macbook-pro-m4-14-16-1tb-space-black-2024/",
  "https://www.istore.ua/ua/item/macbook-pro-m4-14-16-1tb-silver-2024/",
  
  "https://www.istore.ua/ua/item/macbook-pro-m4-14-24-1tb-space-black-2024/",
  "https://www.istore.ua/ua/item/macbook-pro-m4-14-24-1tb-silver-2024/",
  
  
  
  "https://www.istore.ua/ua/item/macbook-pro-m4-pro-14-24-512gb-space-black-2024/",
  "https://www.istore.ua/ua/item/macbook-pro-m4-pro-14-24-512gb-silver-2024/",
  
  "https://www.istore.ua/ua/item/macbook-pro-m4-pro-14-24-1tb-space-black-2024/",
  "https://www.istore.ua/ua/item/macbook-pro-m4-pro-14-24-1tb-silver-2024/",
  
  "https://www.istore.ua/ua/item/macbook-pro-m4-max-14-36-1tb-space-black-2024/",
  "https://www.istore.ua/ua/item/macbook-pro-m4-max-14-36-1tb-silver-2024/", 
  
  
  
  "https://www.istore.ua/ua/item/macbook-pro-m4-pro-16-24-512gb-space-black-2024/",
  "https://www.istore.ua/ua/item/macbook-pro-m4-pro-16-24-512gb-silver-2024/",
  
  "https://www.istore.ua/ua/item/macbook-pro-m4-pro-16-48-512gb-space-black-2024/",
  "https://www.istore.ua/ua/item/macbook-pro-m4-pro-16-48-512gb-silver-2024/", 
  
  "https://www.istore.ua/ua/item/macbook-pro-m4-max-16-36-1tb-space-black-2024/",
  "https://www.istore.ua/ua/item/macbook-pro-m4-max-16-36-1tb-silver-2024/",
  
  "https://www.istore.ua/ua/item/macbook-pro-m4-max-16-48-1tb-space-black-2024/",
  "https://www.istore.ua/ua/item/macbook-pro-m4-max-16-48-1tb-silver-2024/", 
  ];
  const arrLinkMobilePlanetMacM4 = [
    "https://mobileplanet.ua/apple-macbook-pro-14-m4-16-512gb-space-black-late-328647",
  "https://mobileplanet.ua/apple-macbook-pro-14-m4-16-512gb-silver-late-2024-328641",
  
  "https://mobileplanet.ua/apple-macbook-pro-14-m4-16-1tb-space-black-late-20-328648",
  
  "https://mobileplanet.ua/apple-macbook-pro-14-m4-24-1tb-space-black-late-20-328646",
  "https://mobileplanet.ua/apple-macbook-pro-14-m4-24-1tb-silver-late-2024-mc-328640",
  
  
  
  "https://mobileplanet.ua/apple-macbook-pro-14-m4-24-512gb-space-black-late-328649",
  "https://mobileplanet.ua/apple-macbook-pro-14-m4-24-512gb-silver-late-2024-328643",
  
  "https://mobileplanet.ua/apple-macbook-pro-14-m4-24-1tb-space-black-late-20-328650",
  "https://mobileplanet.ua/apple-macbook-pro-14-m4-24-1tb-silver-late-2024-mx-328644",
  
  "https://mobileplanet.ua/apple-macbook-pro-14-m4-36-1tb-space-black-late-20-328651",
  "https://mobileplanet.ua/apple-macbook-pro-14-m4-36-1tb-silver-late-2024-mx-328645", 
  
  
  
  "https://mobileplanet.ua/apple-macbook-pro-16-m4-24-512gb-space-black-late-328656",
  "https://mobileplanet.ua/apple-macbook-pro-16-m4-24-512gb-silver-late-2024-328652",
  
  "https://mobileplanet.ua/apple-macbook-pro-16-m4-48-512gb-space-black-late-328657",
  "https://mobileplanet.ua/apple-macbook-pro-16-m4-48-512gb-silver-late-2024-328653", 
  
  "https://mobileplanet.ua/apple-macbook-pro-16-m4-36-1tb-space-black-late-20-328658",
  "https://mobileplanet.ua/apple-macbook-pro-16-m4-36-1tb-silver-late-2024-mx-328654",
  
  "https://mobileplanet.ua/apple-macbook-pro-16-m4-48-1tb-space-black-late-20-328659",
  "https://mobileplanet.ua/apple-macbook-pro-16-m4-48-1tb-silver-late-2024-mx-328655", 
  ];
  const arrLinkGroMacM4 = [
    "https://grokholsky.com/product/apple/mac/macbook/macbook-pro-14-m4-late-2024/noutbuk-apple-macbook-pro-14-late-2024-space-black-mw2u3/",
  "https://grokholsky.com/product/apple/mac/macbook/macbook-pro-14-m4-late-2024/noutbuk-apple-macbook-pro-14-late-2024-silver-mw2w3/",
  
  "https://grokholsky.com/product/apple/mac/macbook/macbook-pro-14-m4-late-2024/noutbuk-apple-macbook-pro-14-late-2024-space-black-mw2v3/",
  "https://grokholsky.com/product/apple/mac/macbook/macbook-pro-14-m4-late-2024/noutbuk-apple-macbook-pro-14-late-2024-silver-mw2x3/",
  
  "https://grokholsky.com/product/apple/mac/macbook/macbook-pro-14-m4-late-2024/noutbuk-apple-macbook-pro-14-late-2024-space-black-mcx04/",
  "https://grokholsky.com/product/apple/mac/macbook/macbook-pro-14-m4-late-2024/noutbuk-apple-macbook-pro-14-late-2024-silver-mcx14/",
  
  
  
  "https://grokholsky.com/ua/product/apple/mac/macbook/macbook-pro-14-m4-late-2024/noutbuk-apple-macbook-pro-14-late-2024-space-black-mx2h3/",
  "https://grokholsky.com/ua/product/apple/mac/macbook/macbook-pro-14-m4-late-2024/noutbuk-apple-macbook-pro-14-late-2024-silver-mx2e3/",
  
  "https://grokholsky.com/ua/product/apple/mac/macbook/macbook-pro-14-m4-late-2024/noutbuk-apple-macbook-pro-14-late-2024-space-black-mx2j3/",
  "https://grokholsky.com/ua/product/apple/mac/macbook/macbook-pro-14-m4-late-2024/noutbuk-apple-macbook-pro-14-late-2024-silver-mx2f3/",
  
  "https://grokholsky.com/ua/product/apple/mac/macbook/macbook-pro-14-m4-late-2024/noutbuk-apple-macbook-pro-14-late-2024-space-black-mx2k3/",
  "https://grokholsky.com/ua/product/apple/mac/macbook/macbook-pro-14-m4-late-2024/noutbuk-apple-macbook-pro-14-late-2024-silver-mx2g3/", 
  
  
  
  "https://grokholsky.com/ua/product/apple/mac/macbook/macbook-pro-16-m4-late-2024/noutbuk-apple-macbook-pro-16-late-2024-space-black-mx2x3/",
  "https://grokholsky.com/ua/product/apple/mac/macbook/macbook-pro-16-m4-late-2024/noutbuk-apple-macbook-pro-16-late-2024-silver-mx2t3/",
  
  "https://grokholsky.com/ua/product/apple/mac/macbook/macbook-pro-16-m4-late-2024/noutbuk-apple-macbook-pro-16-late-2024-space-black-mx2y3/",
  "https://grokholsky.com/ua/product/apple/mac/macbook/macbook-pro-16-m4-late-2024/noutbuk-apple-macbook-pro-16-late-2024-silver-mx2u3/", 
  
  "https://grokholsky.com/ua/product/apple/mac/macbook/macbook-pro-16-m4-late-2024/noutbuk-apple-macbook-pro-16-late-2024-space-black-mx303/",
  "https://grokholsky.com/ua/product/apple/mac/macbook/macbook-pro-16-m4-late-2024/noutbuk-apple-macbook-pro-16-late-2024-silver-mx2v3/",
  
  "https://grokholsky.com/ua/product/apple/mac/macbook/macbook-pro-16-m4-late-2024/noutbuk-apple-macbook-pro-16-late-2024-space-black-mx313/",
  "https://grokholsky.com/ua/product/apple/mac/macbook/macbook-pro-16-m4-late-2024/noutbuk-apple-macbook-pro-16-late-2024-silver-mx2w3/", 
  ];
  
  const arrLinkJabkoMac16Ram = [
    "https://jabko.ua/mac/macbook-air/apple-macbook-air-m2-2022/macbook-air-13-retina-midnight-256gb-8-cpu--8-gpu-16gb-ram-with-apple-m2-mc7x4-2024",
  "https://jabko.ua/mac/macbook-air/apple-macbook-air-m2-2022/macbook-air-13-retina-space-gray-256gb-8-cpu--8-gpu-16gb-ram-with-apple-m2-mc7u4-2024",
  "https://jabko.ua/mac/macbook-air/apple-macbook-air-m2-2022/macbook-air-13-retina-starlight-256gb-8-cpu--8-gpu-16gb-ram-with-apple-m2-mc7w4-2024",
  "https://jabko.ua/mac/macbook-air/apple-macbook-air-m2-2022/macbook-air-13-retina-silver-256gb-8-cpu--8-gpu-16gb-ram-with-apple-m2-mc7v4-2024",
  
  
  "https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-midnight-256gb-8-cpu--8-gpu-16gb-ram-with-apple-m3-mc8k4-2024",
  "https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-space-gray-256gb-8-cpu--8-gpu-16gb-ram-with-apple-m3-mc8g4-2024",
  "https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-starlight-256gb-8-cpu--8-gpu-16gb-ram-with-apple-m3-mc8j4-2024",
  "https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-silver-256gb-8-cpu--8-gpu-16gb-ram-with-apple-m3-mc8h4-2024",
  
      
  "https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-midnight-256gb-8-cpu--10-gpu-16gb-ram-with-apple-m3-mc9g4-2024",
  "https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-space-gray-256gb-8-cpu--10-gpu-16gb-ram-with-apple-m3-mc9d4-2024",
  "https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-starlight-256gb-8-cpu--10-gpu-16gb-ram-with-apple-m3-mc9f4-2024",
  "https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-silver-256gb-8-cpu--10-gpu-16gb-ram-with-apple-m3-mc9e4-2024",
  ];
  const arrLinkIStoreMac16Ram = [
    "https://www.istore.ua/ua/item/apple-macbook-air-2022-g-256ssd-m2-8cpu-16gb-midnight-custom-z160000az/",
  "https://www.istore.ua/ua/item/apple-macbook-air-2022-g-256ssd-m2-8cpu-16gb-space-grey-custom-z15s000d1/",
  "https://www.istore.ua/ua/item/apple-macbook-air-2022-g-256ssd-m2-8cpu-16gb-starlight-custom-z15y000b5/",
  "https://www.istore.ua/ua/item/apple-macbook-air-2022-g-256ssd-m2-8cpu-16gb-silver-custom-z15w000aw/",
  
  
  "https://www.istore.ua/ua/item/apple-macbook-air-13-m3-16gb-256gb-midnight-custom-z1bc0015s-mc8k4/",
  "https://www.istore.ua/ua/item/apple-macbook-air-13-m3-16gb-256tb-space-gray-custom-z1b60016j-mc8g4/",
  "https://www.istore.ua/ua/item/apple-macbook-air-13-m3-16gb-256gb-starlight-custom-z1ba0017j-mc8j4/",
  "https://www.istore.ua/ua/item/apple-macbook-air-13-m3-16gb-256gb-silver-custom-mc8h4/",
  
  
  "https://www.istore.ua/ua/item/apple-macbook-air-15-m3-16gb-256gb-midnight-custom-z1bv0006k-mc9g4/",
  "https://www.istore.ua/ua/item/apple-macbook-air-15-m3-16gb-2566gb-space-gray-custom-z1bp0006m-mc9d4/",
  "https://www.istore.ua/ua/item/apple-macbook-air-15-m3-16gb-256gb-starlight-custom-z1bt00067-mc9f4/",
  "https://www.istore.ua/ua/item/apple-macbook-air-15-m3-16gb-256gb-silver-custom-z1br00067-mc9e4/",
  ];
  const arrLinkMobilePlanetMac16Ram = [
    "https://mobileplanet.ua/apple-macbook-air-13-6-m2-16-256gb-midnight-late-2-328620",
  "https://mobileplanet.ua/apple-macbook-air-13-6-m2-16-256gb-space-gray-late-328626",
  "https://mobileplanet.ua/apple-macbook-air-13-6-m2-16-256gb-starlight-late-328629",
  "https://mobileplanet.ua/apple-macbook-air-13-6-m2-16-256gb-silver-late-202-328623",
  
  
  "https://mobileplanet.ua/apple-macbook-air-13-6-m3-16-256gb-midnight-late-2-328621",
  "https://mobileplanet.ua/apple-macbook-air-13-6-m3-16-space-gray-late-2024-328627",
  "https://mobileplanet.ua/apple-macbook-air-13-6-m3-16-256gb-starlight-late-328630",
  "https://mobileplanet.ua/apple-macbook-air-13-6-m3-16-256gb-silver-late-202-328624",
  
      
  "https://mobileplanet.ua/apple-macbook-air-15-m3-16-256gb-midnight-late-202-328632",
  "https://mobileplanet.ua/apple-macbook-air-15-m3-16-256gb-space-gray-late-2-328636",
  "https://mobileplanet.ua/apple-macbook-air-15-m3-16-256gb-starlight-late-20-328638",
  "https://mobileplanet.ua/apple-macbook-air-15-m3-16-256gb-silver-late-2024-328634",
  ];
  const arrLinkGroMac16Ram = [
    "https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-13-6-m3-late-2024/noutbuk-apple-macbook-air-13-6-late-2024-midnight-mc7x4/",
  "https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-13-6-m3-late-2024/noutbuk-apple-macbook-air-13-6-late-2024-space-gray-mc7u4/",
  "https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-13-6-m3-late-2024/noutbuk-apple-macbook-air-13-6-late-2024-starlight-mc7w4/",
  "https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-13-6-m3-late-2024/noutbuk-apple-macbook-air-13-6-late-2024-silver-mc7v4/",
  
  
  "https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-13-6-m3-late-2024/noutbuk-apple-macbook-air-13-6-late-2024-midnight-mc8k4/",
  "https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-13-6-m3-late-2024/noutbuk-apple-macbook-air-13-6-late-2024-space-gray-mc8g4/",
  "https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-13-6-m3-late-2024/noutbuk-apple-macbook-air-13-6-late-2024-starlight-mc8j4/",
  "https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-13-6-m3-late-2024/noutbuk-apple-macbook-air-13-6-late-2024-silver-mc8h4/",
  
      
  "https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-15-m3-late-2024/noutbuk-apple-macbook-air-15-late-2024-midnight-mc9g4/",
  "https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-15-m3-late-2024/noutbuk-apple-macbook-air-15-late-2024-space-gray-mc9d4/",
  "https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-15-m3-late-2024/noutbuk-apple-macbook-air-15-late-2024-starlight-mc9f4/",
  "https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-15-m3-late-2024/noutbuk-apple-macbook-air-15-late-2024-silver-mc9e4/",
  ];
  
  const arrLinkJabkoMacAirM4 = [
    "https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-midnight-512gb-8-cpu--10-gpu-24gb-ram-with-apple-m3-mc8q4-2024",
  "https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-space-gray-512gb-8-cpu--10-gpu-24gb-ram-with-apple-m3-mc8m4-2024",
  "https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-starlight-512gb-8-cpu--10-gpu-24gb-ram-with-apple-m3-mc8p4-2024",
  "https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-silver-512gb-8-cpu--10-gpu-24gb-ram-with-apple-m3-mc8n4-2024", 
  "https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-midnight-512gb-8-cpu--10-gpu-24gb-ram-with-apple-m3-mc9l4-2024",
  "https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-space-gray-512gb-8-cpu--10-gpu-24gb-ram-with-apple-m3-mc9h4-2024",
  "https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-starlight-512gb-8-cpu--10-gpu-24gb-ram-with-apple-m3-mc9k4-2024",
  "https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-silver-512gb-8-cpu--10-gpu-24gb-ram-with-apple-m3-mc9j4-2024", 
  
  
  "https://jabko.ua/mac/macbook-air/macbook-air-13-2025-apple-m4/macbook-air-13-retina-midnight-256gb-8-cpu--10-gpu-16gb-ram-with-apple-m4-2025-mw123",
  "https://jabko.ua/mac/macbook-air/macbook-air-13-2025-apple-m4/macbook-air-13-retina-sky-blue-256gb-8-cpu--10-gpu-16gb-ram-with-apple-m4-2025-mc6t4",
  "https://jabko.ua/mac/macbook-air/macbook-air-13-2025-apple-m4/macbook-air-13-retina-starlight-256gb-8-cpu--10-gpu-16gb-ram-with-apple-m4-2024-mw0y3",
  "https://jabko.ua/mac/macbook-air/macbook-air-13-2025-apple-m4/macbook-air-13-retina-silver-256gb-8-cpu--10-gpu-16gb-ram-with-apple-m4-2025-mw0w3", 
  
  "https://jabko.ua/mac/macbook-air/macbook-air-13-2025-apple-m4/macbook-air-13-retina-midnight-512gb-10-cpu--10-gpu-16gb-ram-with-apple-m4-2025-mw133",
  "https://jabko.ua/mac/macbook-air/macbook-air-13-2025-apple-m4/macbook-air-13-retina-sky-blue-512gb-10-cpu--10-gpu-16gb-ram-with-apple-m4-2025-mc6u4",
  "https://jabko.ua/mac/macbook-air/macbook-air-13-2025-apple-m4/macbook-air-13-retina-starlight-512gb-10-cpu--10-gpu-16gb-ram-with-apple-m4-2025-mw103",
  "https://jabko.ua/mac/macbook-air/macbook-air-13-2025-apple-m4/macbook-air-13-retina-silver-512gb-10-cpu--10-gpu-16gb-ram-with-apple-m4-2025-mw0x3", 
  
  "https://jabko.ua/mac/macbook-air/macbook-air-13-2025-apple-m4/macbook-air-13-retina-midnight-512gb-10-cpu--10-gpu-24gb-ram-with-apple-m4-2025-mc6c4",
  "https://jabko.ua/mac/macbook-air/macbook-air-13-2025-apple-m4/macbook-air-13-retina-sky-blue-512gb-10-cpu--10-gpu-24gb-ram-with-apple-m4-2025",
  "https://jabko.ua/mac/macbook-air/macbook-air-13-2025-apple-m4/macbook-air-13-retina-starlight-512gb-10-cpu--10-gpu-24gb-ram-with-apple-m4-2025-mc6a4",
  "https://jabko.ua/mac/macbook-air/macbook-air-13-2025-apple-m4/macbook-air-13-retina-silver-512gb-10-cpu--10-gpu-24gb-ram-with-apple-m4-2025-mc654", 
  
  
  "https://jabko.ua/mac/macbook-air/macbook-air-15-2025-apple-m4/macbook-air-15-retina-midnight-256gb-10-cpu--10-gpu-16gb-ram-with-apple-m4-2025-mw1l3",
  "https://jabko.ua/mac/macbook-air/macbook-air-15-2025-apple-m4/macbook-air-15-retina-sky-blue-256gb-10-cpu--10-gpu-16gb-ram-with-apple-m4-2025-mc7a4",
  "https://jabko.ua/mac/macbook-air/macbook-air-15-2025-apple-m4/macbook-air-15-retina-starlight-256gb-10-cpu--10-gpu-16gb-ram-with-apple-m4-2025-mw1j3",
  "https://jabko.ua/mac/macbook-air/macbook-air-15-2025-apple-m4/macbook-air-15-retina-silver-256gb-10-cpu--10-gpu-16gb-ram-with-apple-m4-2025-mw1g3", 
  
  "https://jabko.ua/mac/macbook-air/macbook-air-15-2025-apple-m4/macbook-air-15-retina-midnight-512gb-10-cpu--10-gpu-16gb-ram-with-apple-m4-2025-mw1m3",
  "https://jabko.ua/mac/macbook-air/macbook-air-15-2025-apple-m4/macbook-air-15-retina-sky-blue-512gb-10-cpu--10-gpu-16gb-ram-with-apple-m4-2025-mc7c4",
  "https://jabko.ua/mac/macbook-air/macbook-air-15-2025-apple-m4/macbook-air-15-retina-starlight-512gb-10-cpu--10-gpu-16gb-ram-with-apple-m4-2025-mw1k3",
  "https://jabko.ua/mac/macbook-air/macbook-air-15-2025-apple-m4/macbook-air-15-retina-silver-512gb-10-cpu--10-gpu-16gb-ram-with-apple-m4-2025-mw1h3", 
  
  "https://jabko.ua/mac/macbook-air/macbook-air-15-2025-apple-m4/macbook-air-15-retina-midnight-512gb-10-cpu--10-gpu-24gb-ram-with-apple-m4-2025-mc6l4",
  "https://jabko.ua/mac/macbook-air/macbook-air-15-2025-apple-m4/macbook-air-15-retina-sky-blue-512gb-10-cpu--10-gpu-24gb-ram-with-apple-m4-2025-mc7d4",
  "https://jabko.ua/mac/macbook-air/macbook-air-15-2025-apple-m4/macbook-air-15-retina-starlight-512gb-10-cpu--10-gpu-24gb-ram-with-apple-m4-2025-mc6k4",
  "https://jabko.ua/mac/macbook-air/macbook-air-15-2025-apple-m4/macbook-air-15-retina-silver-512gb-10-cpu--10-gpu-24gb-ram-with-apple-m4-2025-mc6j4",
  ];
  const arrLinkIStoreMacAirM4 = [
    "https://www.istore.ua/ua/item/apple-macbook-air-13-m3-24gb-512gb-midnight-custom-z1bc00147-mc8q4/",
  "https://www.istore.ua/ua/item/apple-macbook-air-13-m3-24gb-512gb-space-gray-custom/",
  "https://www.istore.ua/ua/item/apple-macbook-air-13-m3-24gb-512gb-starligh-custom-z1ba00160-mc8p4/",
  "https://www.istore.ua/ua/item/apple-macbook-air-13-m3-24gb-512gb-silver-custom-z1b80015n-mc8n4/", 
  
  "https://www.istore.ua/ua/item/apple-macbook-air-15-m3-24gb-512gb-midnight-custom-z1bv0006n-mc9l4/",
  "https://www.istore.ua/ua/item/apple-macbook-air-15-m3-24gb-512tb-space-gray-custom-z1bp000md-mc9h4/",
  "https://www.istore.ua/ua/item/apple-macbook-air-15-m3-24gb-512gb-starlight-custom-z1bt000l2-mc9k4-mc9k4-mc9k4/",
  "https://www.istore.ua/ua/item/apple-macbook-air-15-m3-24gb-512gb-silver-custom-z1br000kl-mc9j4/", 
  
  "https://www.istore.ua/ua/item/apple-macbook-air-13-m4-16-256gb-midnight/",
  "https://www.istore.ua/ua/item/apple-macbook-air-13-m4-16-256gb-sky-blue-mc6t4/",
  "https://www.istore.ua/ua/item/apple-macbook-air-13-m4-16-256gb-starlight/",
  "https://www.istore.ua/ua/item/apple-macbook-air-13-m4-16-256gb-silver/", 
  
  "https://www.istore.ua/ua/item/apple-macbook-air-13-m4-16-512gb-midnight/",
  "https://www.istore.ua/ua/item/apple-macbook-air-13-m4-16-512gb-sky-blue-mc6u4/",
  "https://www.istore.ua/ua/item/apple-macbook-air-13-m4-16-512gb-starlight/",
  "https://www.istore.ua/ua/item/apple-macbook-air-13-m4-16-512gb-silver/", 
  
  "https://www.istore.ua/ua/item/apple-macbook-air-13-m4-24-512gb-midnight/",
  "https://www.istore.ua/ua/item/apple-macbook-air-13-m4-24-512gb-sky-blue-mc6v4/",
  "https://www.istore.ua/ua/item/apple-macbook-air-13-m4-24-512gb-starlight/",
  // "https://www.istore.ua/ua/item/apple-macbook-air-13-m4-24-512gb-silver/", 
  
  
  "https://www.istore.ua/ua/item/apple-macbook-air-15-m4-16-256gb-midnight/",
  "https://www.istore.ua/ua/item/apple-macbook-air-15-m4-16-256gb-sky-blue-mc7a4/",
  "https://www.istore.ua/ua/item/apple-macbook-air-15-m4-16-256gb-starlight-mw1j3/",
  "https://www.istore.ua/ua/item/apple-macbook-air-15-m4-16-256gb-silver/", 
  
  "https://www.istore.ua/ua/item/apple-macbook-air-15-m4-16-512gb-midnight/",
  "https://www.istore.ua/ua/item/apple-macbook-air-15-m4-16-512gb-sky-blue-mc7c4/",
  "https://www.istore.ua/ua/item/apple-macbook-air-15-m4-16-512gb-starlight/",
  "https://www.istore.ua/ua/item/apple-macbook-air-15-m4-16-512gb-silver/", 
  
  "https://www.istore.ua/ua/item/apple-macbook-air-15-m4-24-512gb-midnight/",
  "https://www.istore.ua/ua/item/apple-macbook-air-15-m4-24-512gb-sky-blue-mc7d4/",
  // "https://www.istore.ua/ua/item/apple-macbook-air-15-m4-24-512gb-starlight/",
  // "https://www.istore.ua/ua/item/apple-macbook-air-15-m4-24-512gb-silver/", 
  ]
  const arrLinkMobilePlanetMacAirM4 = [
    "https://mobileplanet.ua/apple-macbook-air-13-6-m3-24-512gb-midnight-late-2-328622",
  "https://mobileplanet.ua/apple-macbook-air-13-6-m3-24-512gb-space-gray-late-328628",
  "https://mobileplanet.ua/apple-macbook-air-13-6-m3-24-512gb-starlight-late-328631",
  "https://mobileplanet.ua/apple-macbook-air-13-6-m3-24-512gb-silver-late-202-328625", 
  
  "https://mobileplanet.ua/apple-macbook-air-15-m3-24-512gb-midnight-2024-z1b-308386",
  "https://mobileplanet.ua/apple-macbook-air-15-m3-24-512gb-space-g-336505",
  "https://mobileplanet.ua/apple-macbook-air-15-m3-24-512gb-starlight-2024-z1-308425",
  "https://mobileplanet.ua/apple-macbook-air-15-m3-24-512gb-silver-336504", 
  
  "https://mobileplanet.ua/apple-macbook-air-13-6-m4-16-256gb-midnight-2025-m-338619",
  "https://mobileplanet.ua/apple-macbook-air-13-6-m4-16-256gb-sky-blue-2025-m-338624",
  "https://mobileplanet.ua/apple-macbook-air-13-6-m4-16-256gb-starlight-2025-338628",
  "https://mobileplanet.ua/apple-macbook-air-13-6-m4-16-256gb-silver-2025-mw0-338622", 
  
  "https://mobileplanet.ua/apple-macbook-air-13-6-m4-16-512gb-midnight-2025-m-338620",
  "https://mobileplanet.ua/apple-macbook-air-13-6-m4-16-512gb-sky-blue-2025-m-338625",
  "https://mobileplanet.ua/apple-macbook-air-13-6-m4-16-512gb-starlight-2025-338629",
  "https://mobileplanet.ua/apple-macbook-air-13-6-m4-16-512gb-silver-2025-mw0-338623", 
  
  "https://mobileplanet.ua/apple-macbook-air-13-6-m4-24-512gb-midnight-2025-m-338618",
  "https://mobileplanet.ua/apple-macbook-air-13-6-m4-24-512gb-sky-blue-2025-m-338626",
  "https://mobileplanet.ua/apple-macbook-air-13-6-m4-24-512gb-starlight-2025-338627",
  "https://mobileplanet.ua/apple-macbook-air-13-6-m4-24-512gb-silver-2025-mc6-338621", 
  
  
  "https://mobileplanet.ua/apple-macbook-air-15-m4-16-256gb-midnight-2025-mw1-338631",
  "https://mobileplanet.ua/apple-macbook-air-15-m4-16-256gb-sky-blue-2025-mc7-338636",
  "https://mobileplanet.ua/apple-macbook-air-15-m4-16-256gb-starlight-2025-mw-338640",
  "https://mobileplanet.ua/apple-macbook-air-15-m4-16-256gb-silver-2025-mw1g3-338634", 
  
  "https://mobileplanet.ua/apple-macbook-air-15-m4-16-512gb-midnight-2025-mw1-338632",
  "https://mobileplanet.ua/apple-macbook-air-15-m4-16-512gb-sky-blue-2025-mc7-338637",
  "https://mobileplanet.ua/apple-macbook-air-15-m4-16-512gb-starlight-2025-mw-338641",
  "https://mobileplanet.ua/apple-macbook-air-15-m4-16-512gb-silver-2025-mw1h3-338635", 
  
  "https://mobileplanet.ua/apple-macbook-air-15-m4-24-512gb-midnight-2025-mc6-338630",
  "https://mobileplanet.ua/apple-macbook-air-15-m4-24-512gb-sky-blue-2025-mc7-338638",
  "https://mobileplanet.ua/apple-macbook-air-15-m4-24-512gb-starlight-2025-mc-338639",
  "https://mobileplanet.ua/apple-macbook-air-15-m4-24-512gb-silver-2025-mc6j4-338633", 
  ]
  const arrLinkGroMacAirM4 = [
    "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-13-6-m3-late-2024/noutbuk-apple-macbook-air-13-6-late-2024-midnight-mc8q4/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-13-6-m3-late-2024/noutbuk-apple-macbook-air-13-6-late-2024-space-gray-mc8m4/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-13-6-m3-late-2024/noutbuk-apple-macbook-air-13-6-late-2024-starlight-mc8p4/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-13-6-m3-late-2024/noutbuk-apple-macbook-air-13-6-late-2024-silver-mc8n4/", 
  
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m3-late-2024/noutbuk-apple-macbook-air-15-late-2024-midnight-mc9l4/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m3-late-2024/noutbuk-apple-macbook-air-15-late-2024-space-gray-mc9h4/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m3-late-2024/noutbuk-apple-macbook-air-15-late-2024-starlight-mc9k4/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m3-late-2024/noutbuk-apple-macbook-air-15-late-2024-silver-mc9j4/", 
  
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-13-6-m4-2025/noutbuk-apple-macbook-air-13-6-2025-midnight-mw123/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-13-6-m4-2025/noutbuk-apple-macbook-air-13-6-2025-sky-blue-mc6t4/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-13-6-m4-2025/noutbuk-apple-macbook-air-13-6-2025-starlight-mw0y3/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-13-6-m4-2025/noutbuk-apple-macbook-air-13-6-2025-silver-mw0w3/", 
  
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-13-6-m4-2025/noutbuk-apple-macbook-air-13-6-2025-midnight-mw133/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-13-6-m4-2025/noutbuk-apple-macbook-air-13-6-2025-sky-blue-mc6u4/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-13-6-m4-2025/noutbuk-apple-macbook-air-13-6-2025-starlight-mw103/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-13-6-m4-2025/noutbuk-apple-macbook-air-13-6-2025-silver-mw0x3/", 
  
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-13-6-m4-2025/noutbuk-apple-macbook-air-13-6-2025-midnight-mc6c4/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-13-6-m4-2025/noutbuk-apple-macbook-air-13-6-2025-sky-blue-mc6v4/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-13-6-m4-2025/noutbuk-apple-macbook-air-13-6-2025-starlight-mc6a4/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-13-6-m4-2025/noutbuk-apple-macbook-air-13-6-2025-silver-mc654/", 
  
  
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m4-2025/noutbuk-apple-macbook-air-15-2025-midnight-mw1l3/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m4-2025/noutbuk-apple-macbook-air-15-2025-sky-blue-mc7a4/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m4-2025/noutbuk-apple-macbook-air-15-2025-starlight-mw1j3/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m4-2025/noutbuk-apple-macbook-air-15-2025-silver-mw1g3/", 
  
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m4-2025/noutbuk-apple-macbook-air-15-2025-midnight-mw1m3/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m4-2025/noutbuk-apple-macbook-air-15-2025-sky-blue-mc7c4/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m4-2025/noutbuk-apple-macbook-air-15-2025-starlight-mw1k3/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m4-2025/noutbuk-apple-macbook-air-15-2025-silver-mw1h3/", 
  
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m4-2025/noutbuk-apple-macbook-air-15-2025-midnight-mc6l4/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m4-2025/noutbuk-apple-macbook-air-15-2025-sky-blue-mc7d4/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m4-2025/noutbuk-apple-macbook-air-15-2025-starlight-mc6k4/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m4-2025/noutbuk-apple-macbook-air-15-2025-silver-mc6j4/", 
  ]
  
  const arrLinkJabkoMacMini = [
    "https://jabko.ua/mac/mac-mini/apple-mac-mini-",
  "https://jabko.ua/mac/mac-mini/apple-mac-mini--512gb--mgnr3--2020",
  
  "https://jabko.ua/mac/mac-mini/apple-mac-mini--256gb-with-apple-m2-2023",
  "https://jabko.ua/mac/mac-mini/apple-mac-mini--512gb-with-apple-m2-2023",
  "https://jabko.ua/mac/mac-mini/apple-mac-mini--512gb-with-apple-m2-pro-2023",
  
  "https://jabko.ua/mac/mac-mini/apple-mac-mini-with-apple-m4-256gb-10-cpu--10-gpu-16gb-unified-memory-silver-2024-mu9d3",
  "https://jabko.ua/mac/mac-mini/apple-mac-mini-with-apple-m4-512gb-10-cpu--10-gpu-16gb-unified-memory-silver-2024-mu9e3",
  "https://jabko.ua/mac/mac-mini/apple-mac-mini-with-apple-m4-512gb-10-cpu--10-gpu-24gb-unified-memory-silver-2024-mcyt4",
  "https://jabko.ua/mac/mac-mini/apple-mac-mini-with-apple-m4-pro-512gb-12-cpu--16-gpu-24gb-unified-memory-silver-2024-mcx44",
  
  "https://jabko.ua/mac/mac-studio/apple-mac-studio-12-core-cpu-30-core-gpu-16-core-neural-engine-32gb-ram-512gb-apple-m2-max-2023-",
  "https://jabko.ua/mac/mac-studio/apple-mac-studio-with-apple-m3-ultra-1tb-28-cpu--60-gpu--32-core-neural-engine-96gb-ram-2025-mu973",
  "https://jabko.ua/mac/mac-studio/apple-mac-studio-with-apple-m4-max-512gb-14-cpu--32-gpu--16-core-neural-engine-36gb-ram-2025-mu963",
  
  "https://jabko.ua/mac/mac-studio/monitor-apple-studio-display-with-tilt-adjustable-stand--standard-glass---mk0u3-",
  "https://jabko.ua/mac/mac-studio/monitor-apple-studio-display-with-tilt-height-adjustable-stand--standard-glass---mk0q3-",
  "https://jabko.ua/mac/mac-studio/monitor-apple-studio-display-with-tilt-adjustable-stand--nano-texture-glass---mmyw3-",
  "https://jabko.ua/mac/mac-studio/monitor-apple-studio-display-with-vesa-mount-adapter--nano-texture-glass---mmyx3-",
  "https://jabko.ua/mac/mac-studio/monitor-apple-studio-display-with-tilt-height-adjustable-stand--nano-texture-glass---mmyv3-",
  ];
  const arrLinkIStoreMacMini = [
    "https://www.istore.ua/ua/item/kompyuter-apple-mac-mini-m1-512gb-2020/",
  "https://www.istore.ua/ua/item/kompyuter-apple-mac-mini-m1-512gb-mgnt3-2020/",
  
  "https://www.istore.ua/ua/item/apple-mac-mini-m2-512gb-silver-2023/",
  "https://www.istore.ua/ua/item/apple-mac-mini-m2-512gb-mmfj3-silver-2023/",
  "https://www.istore.ua/ua/item/apple-mac-mini-m2-pro-512gb-silver-2023/",
  
  "https://www.istore.ua/ua/item/apple-mac-mini-m4-16-256gb-silver-2024/",
  "https://www.istore.ua/ua/item/apple-mac-mini-m4-16-512gb-silver-2024/",
  "https://www.istore.ua/ua/item/apple-mac-mini-m4-24-512gb-silver-2024/",
  "https://www.istore.ua/ua/item/apple-mac-mini-m4-pro-24-512gb-silver-2024/",
  
  "https://www.istore.ua/ua/item/apple-studio-display-27-standard-glass/",
  
  "https://www.istore.ua/ua/item/apple-studio-display-27-nano-texture-glass/",
  ];
  const arrLinkMobilePlanetMacMini = [
    "https://mobileplanet.ua/apple-mac-mini-2023-mnh73-265600",
  
  "https://mobileplanet.ua/apple-mac-mini-m4-mu9d3-328710",
  "https://mobileplanet.ua/apple-mac-mini-m4-mu9e3-328711",
  "https://mobileplanet.ua/apple-mac-mini-m4-mcyt4-328709",
  "https://mobileplanet.ua/apple-mac-mini-m4-pro-mcx44-328712",
  
  "https://mobileplanet.ua/apple-mac-studio-m2-max-2023-mqh73-275544",
  "https://mobileplanet.ua/apple-mac-studio-2025-m3-ultra-96-1tb-mu973-340426",
  "https://mobileplanet.ua/apple-mac-studio-2025-m4-max-36-512gb-mu963-340427",
  
  "https://mobileplanet.ua/apple-studio-display-with-tilt-adjustable-stand-st-252720",
  ];
  const arrLinkGroMacMini = [
    "https://grokholsky.com/product/apple/mac/mac-mini/mac-mini-2020-m1/mac-mini-2020-m1-mgnr3/",
  "https://grokholsky.com/product/apple/mac/mac-mini/mac-mini-2020-m1/mac-mini-2020-m1-mgnt3/",
  
  "https://grokholsky.com/product/apple/mac/mac-mini/mac-mini-m2-2023/mac-mini-2023-mmfj3/",
  "https://grokholsky.com/product/apple/mac/mac-mini/mac-mini-m2-2023/mac-mini-2023-mmfk3/",
  "https://grokholsky.com/product/apple/mac/mac-mini/mac-mini-m2-2023/mac-mini-2023-mnh73/",
  
  "https://grokholsky.com/product/apple/mac/mac-mini/mac-mini-m4-2024/nettop-apple-mac-mini-m4-mu9d3/",
  "https://grokholsky.com/product/apple/mac/mac-mini/mac-mini-m4-2024/nettop-apple-mac-mini-m4-mu9e3/",
  "https://grokholsky.com/product/apple/mac/mac-mini/mac-mini-m4-2024/nettop-apple-mac-mini-m4-mcyt4/",
  "https://grokholsky.com/product/apple/mac/mac-mini/mac-mini-m4-2024/nettop-apple-mac-mini-m4-pro-mcx44/",
  
  "https://grokholsky.com/product/apple/mac/mac-studio/mac-studio-m2-max-2023/mac-studio-m2-max-2023-mqh73/",
  "https://grokholsky.com/product/apple/mac/mac-studio/mac-studio-2025/nettop-apple-mac-studio-2025-m3-ultra-mu973/",
  "https://grokholsky.com/product/apple/mac/mac-studio/mac-studio-2025/nettop-apple-mac-studio-2025-m4-max-mu963/",
  
  "https://grokholsky.com/product/apple/mac/monitory/studio-display-with-tilt-adjustable-stand-standard-glass-mk0u3/",
  "https://grokholsky.com/product/apple/mac/monitory/studio-display-with-tilt-height-adjustable-stand-standard-glass-mk0q3/",
  "https://grokholsky.com/product/apple/mac/monitory/studio-display-with-tilt-adjustable-stand-nano-texture-glass-mmyw3/",
  "https://grokholsky.com/product/apple/mac/monitory/studio-display-with-vesa-mount-adapter-nano-texture-glass-mmyx3/",
  "https://grokholsky.com/product/apple/mac/monitory/studio-display-with-tilt-height-adjustable-stand-nano-texture-glass-mmyv3/",
  ];


  const arrLinkJabkoStarlink = [
    "https://jabko.ua/gadzheti-i-drugoe/tehnika-dlja-doma/starlink/suputnykovyi-modem-starlink-internet-satellite-v3",
  "https://jabko.ua/gadzheti-i-drugoe/tehnika-dlja-doma/starlink/suputnykovyi-modem-starlink-internet-satellite-mini",
  ];
  const arrLinkEstoreStarlink = [
    "https://estore.ua/ua/sputnikovyj-modem-starlink-internet-satellite-3gen-garantija-12-mes/?q=starlink",
  "https://estore.ua/ua/sputnikovyiy-modem-starlink-internet-satellite-mini-garantiya-3-mes/?q=starlink",
  ];
  const arrLinkiPeopleStarlink = [
    "https://www.ipeople.in.ua/products/suputnikovij-modem-starlink-internet-satellite-3gen-bez-akauntu-",
  "https://www.ipeople.in.ua/products/starlink-internet-satellite-mini-bez-akauntu",
  ];
  const arrLinkiDIDIStarlink = [
    "https://didi.ua/uk/starlink-internet-satellite-3gen/p187176/",
  "https://didi.ua/uk/starlink-internet-satellite-mini/p188041/",
  ];
  const arrLinkiAstoreStarlink = [
    "https://astore.org.ua/tovary-dlya-blehkauta/starlink/sputnikovyj-modem-spacex-starlink-gen3-rev4-standard-kit-bez-akaunta",
  "https://astore.org.ua/tovary-dlya-blehkauta/starlink/sputnikovyj-modem-spacex-starlink-mini-kit-bez-akkaunta",
  ];
  const arrLinkiPulsePadStarlink = [
    "https://pulsepad.com.ua/products/suputnikovij-modem-starlink-internet-satellite-3gen",
  ];
  const arrLinkiChinaGadjetStarlink = [
    "https://www.china-gadgets.com.ua/products/suputnikovij-modem-starlink-internet-satellite-3gen-",
  "https://www.china-gadgets.com.ua/products/suputnikovij-modem-starlink-internet-satellite-mini",
  ];




async function f() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  for (let i = 0; i < arrLinkJabkoIPAD.length; i += 1) {
    await page.goto(arrLinkJabkoIPAD[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-new__uah") != null) {
        return (
          text2 + "J: " + document.querySelector(".price-new__uah").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }

  for (let i = 0; i < arrLinkGroIPAD.length; i += 1) {
    await page.goto(arrLinkGroIPAD[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector(".sku").innerText;
      if (document.querySelector(".product-price-value") != null) {
        return text2 + "Gro: " + document.querySelector(".product-price-value").innerText;
      } else {
        return text2;
      }
    });

    console.log(arr3);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkJabkoIpadNew.length; i += 1) {
    await page.goto(arrLinkJabkoIpadNew[i]);

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-new__uah") != null) {
        return (
          text2 + "J: " + document.querySelector(".price-new__uah").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr2);
    page.setDefaultNavigationTimeout(0);
  }

  for (let i = 0; i < arrLinkIstoreIpadNew.length; i += 1) {
    await page.goto(arrLinkIstoreIpadNew[i]);
    const n = await page.$("#txt");

    let arr4 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".product_price ") != null) {
        return (
          text2 + "I: " + document.querySelector(".product_price ").innerText
        );
      } else {
        return;
      }
    });

    console.log(arr4);
    await page.setDefaultNavigationTimeout(0);
  }

  for (let i = 0; i < arrLinkGroIpadNew.length; i += 1) {
    await page.goto(arrLinkGroIpadNew[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector(".sku").innerText;
      if (document.querySelector(".product-price-value") != null) {
        return text2 + "Gro: " + document.querySelector(".product-price-value").innerText;
      } else {
        return text2;
      }
    });

    console.log(arr3);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkMPIpadNew.length; i += 1) {
    await page.goto(arrLinkMPIpadNew[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-value") != null) {
        return (
          text2 + "MP: " + document.querySelector(".price-value").innerText
        );
      } else {
        return;
      }
    });

    console.log(arr3);
    await page.setDefaultNavigationTimeout(0);
  }

  for (let i = 0; i < arrLinkEstoreIpadNew.length; i += 1) {
    await page.goto(arrLinkEstoreIpadNew[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector("p .price") != null) {
        return (
          text2 + "Estore: " + document.querySelector("p .price").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }
//   for (let i = 0; i < arrLinkIpadMrFix.length; i += 1) {
//     await page.goto(arrLinkIpadMrFix[i]);
//     const n = await page.$("#txt");

//     let arr3 = await page.evaluate(() => {
//       let text2 = document.querySelector("h1").innerText;
//       if (document.querySelector(".price") != null) {
//         return text2 + "Gro: " + document.querySelector(".price").innerText;
//       } else {
//         return text2;
//       }
//     });

//     console.log(arr3);
//     await page.setDefaultNavigationTimeout(0);
//   }
//   for (let i = 0; i < arrLinkIpadBuyUA.length; i += 1) {
//     await page.goto(arrLinkIpadBuyUA[i]);
//     const n = await page.$("#txt");

//     let arr3 = await page.evaluate(() => {
//       let text2 = document.querySelector("h2").innerText;
//       if (document.querySelector(".price-info strong") != null) {
//         return text2 + "Gro: " + document.querySelector(".price-info strong").innerText;
//       } else {
//         return text2;
//       }
//     });

//     console.log(arr3);
//     await page.setDefaultNavigationTimeout(0);
//   }

for (let i = 0; i < arrLinkJabkoIPAD2.length; i += 1) {
    await page.goto(arrLinkJabkoIPAD2[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-new__uah") != null) {
        return (
          text2 + "J: " + document.querySelector(".price-new__uah").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkIstoreIpadNew2.length; i += 1) {
    await page.goto(arrLinkIstoreIpadNew2[i]);
    const n = await page.$("#txt");

    let arr4 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".product_price ") != null) {
        return (
          text2 + "I: " + document.querySelector(".product_price ").innerText
        );
      } else {
        return;
      }
    });

    console.log(arr4);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkEstoreIpadNew2.length; i += 1) {
    await page.goto(arrLinkEstoreIpadNew2[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector("p .price") != null) {
        return (
          text2 + "Estore: " + document.querySelector("p .price").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkMPIpadNew2.length; i += 1) {
    await page.goto(arrLinkMPIpadNew2[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-value") != null) {
        return (
          text2 + "MP: " + document.querySelector(".price-value").innerText
        );
      } else {
        return;
      }
    });

    console.log(arr3);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkGroIPAD2.length; i += 1) {
    await page.goto(arrLinkGroIPAD2[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector(".sku").innerText;
      if (document.querySelector(".product-price-value") != null) {
        return text2 + "Gro: " + document.querySelector(".product-price-value").innerText;
      } else {
        return text2;
      }
    });

    console.log(arr3);
    await page.setDefaultNavigationTimeout(0);
  }



  for (let i = 0; i < arrLinkIstoreMac.length; i += 1) {
    await page.goto(arrLinkIstoreMac[i]);
    const n = await page.$("#txt");

    let arr4 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".product_price ") != null) {
        return (
          text2 + "I: " + document.querySelector(".product_price ").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr4);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkJabkoMac.length; i += 1) {
    await page.goto(arrLinkJabkoMac[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-new__uah") != null) {
        return (
          text2 + "J: " + document.querySelector(".price-new__uah").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkMobilePlanetMac.length; i += 1) {
    await page.goto(arrLinkMobilePlanetMac[i]);
    const n = await page.$("#txt");

  let arr3 = await page.evaluate(() => {
    
    let text2 = document.querySelector("h1").innerText;
    if(document.querySelector(".price-value") != null){
      return text2 + 'MP: ' + document.querySelector(".price-value").innerText
    } else {return text2}
    
  });
  
  console.log(arr3)
  await page.setDefaultNavigationTimeout(0);
  }


  for (let i = 0; i < arrLinkMobilePlanetMacM3.length; i += 1) {
    await page.goto(arrLinkMobilePlanetMacM3[i]);
    const n = await page.$("#txt");

    let arr5 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-value") != null) {
        return (
          text2 + "MP: " + document.querySelector(".price-value").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr5);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkIstoreMacM3.length; i += 1) {
    await page.goto(arrLinkIstoreMacM3[i]);
    const n = await page.$("#txt");

    let arr7 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".product_price ") != null) {
        return (
          text2 + "I: " + document.querySelector(".product_price ").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr7);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkGroMacM3.length; i += 1) {
    await page.goto(arrLinkGroMacM3[i]);
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


  for (let i = 0; i < arrLinkJabkoMacM4.length; i += 1) {
    await page.goto(arrLinkJabkoMacM4[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-new__uah") != null) {
        return (
          text2 + "J: " + document.querySelector(".price-new__uah").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkIStoreMacM4.length; i += 1) {
    await page.goto(arrLinkIStoreMacM4[i]);
    const n = await page.$("#txt");

    let arr4 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".product_price ") != null) {
        return (
          text2 + "I: " + document.querySelector(".product_price ").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr4);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkMobilePlanetMacM4.length; i += 1) {
    await page.goto(arrLinkMobilePlanetMacM4[i]);
    const n = await page.$("#txt");

    let arr5 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-value") != null) {
        return (
          text2 + "MP: " + document.querySelector(".price-value").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr5);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkGroMacM4.length; i += 1) {
    await page.goto(arrLinkGroMacM4[i]);
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

  for (let i = 0; i < arrLinkJabkoMac16Ram.length; i += 1) {
    await page.goto(arrLinkJabkoMac16Ram[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-new__uah") != null) {
        return (
          text2 + "J: " + document.querySelector(".price-new__uah").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkIStoreMac16Ram.length; i += 1) {
    await page.goto(arrLinkIStoreMac16Ram[i]);
    const n = await page.$("#txt");

    let arr4 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".product_price ") != null) {
        return (
          text2 + "I: " + document.querySelector(".product_price ").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr4);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkMobilePlanetMac16Ram.length; i += 1) {
    await page.goto(arrLinkMobilePlanetMac16Ram[i]);
    const n = await page.$("#txt");

    let arr5 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-value") != null) {
        return (
          text2 + "MP: " + document.querySelector(".price-value").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr5);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkGroMac16Ram.length; i += 1) {
    await page.goto(arrLinkGroMac16Ram[i]);
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

  for (let i = 0; i < arrLinkJabkoMacAirM4.length; i += 1) {
    await page.goto(arrLinkJabkoMacAirM4[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-new__uah") != null) {
        return (
          text2 + "J: " + document.querySelector(".price-new__uah").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkIStoreMacAirM4.length; i += 1) {
    await page.goto(arrLinkIStoreMacAirM4[i]);
    const n = await page.$("#txt");

    let arr4 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".product_price ") != null) {
        return (
          text2 + "I: " + document.querySelector(".product_price ").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr4);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkMobilePlanetMacAirM4.length; i += 1) {
    await page.goto(arrLinkMobilePlanetMacAirM4[i]);
    const n = await page.$("#txt");

    let arr5 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-value") != null) {
        return (
          text2 + "MP: " + document.querySelector(".price-value").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr5);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkGroMacAirM4.length; i += 1) {
    await page.goto(arrLinkGroMacAirM4[i]);
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

  for (let i = 0; i < arrLinkJabkoMacMini.length; i += 1) {
    await page.goto(arrLinkJabkoMacMini[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-new__uah") != null) {
        return (
          text2 + "J: " + document.querySelector(".price-new__uah").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkIStoreMacMini.length; i += 1) {
    await page.goto(arrLinkIStoreMacMini[i]);
    const n = await page.$("#txt");

    let arr4 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".product_price ") != null) {
        return (
          text2 + "I: " + document.querySelector(".product_price ").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr4);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkMobilePlanetMacMini.length; i += 1) {
    await page.goto(arrLinkMobilePlanetMacMini[i]);
    const n = await page.$("#txt");

    let arr5 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-value") != null) {
        return (
          text2 + "MP: " + document.querySelector(".price-value").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr5);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkGroMacMini.length; i += 1) {
    await page.goto(arrLinkGroMacMini[i]);
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



  for (let i = 0; i < arrLinkJabkoStarlink.length; i += 1) {
    await page.goto(arrLinkJabkoStarlink[i]);
    const n = await page.$("#txt");

    let arr8 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-new__uah") != null) {
        return (
          text2 + "J: " + document.querySelector(".price-new__uah").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr8);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkEstoreStarlink.length; i += 1) {
    await page.goto(arrLinkEstoreStarlink[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector("p .price") != null) {
        return (
          text2 + "Estore: " + document.querySelector("p .price").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkiPeopleStarlink.length; i += 1) {
    await page.goto(arrLinkiPeopleStarlink[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector(".usd").innerText;
      if (document.querySelector(".usd") != null) {
        return (
          text2 + "iPeople: " + document.querySelector(".usd").innerText
        );
      } else {
        return ;
      }
    });

    console.log(arr3);
    await page.setDefaultNavigationTimeout(0);
  }

  
  for (let i = 0; i < arrLinkiAstoreStarlink.length; i += 1) {
    await page.goto(arrLinkiAstoreStarlink[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".usd_price") != null) {
        return (
          text2 + "Astore: " + document.querySelector(".usd_price").innerText
        );
      } else {
        return ;
      }
    });

    console.log(arr3);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkiPulsePadStarlink.length; i += 1) {
    await page.goto(arrLinkiPulsePadStarlink[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector(".page-title").innerText;
      if (document.querySelector(".fn_price") != null) {
        return (
          text2 + "PulsePad: " + document.querySelector(".fn_price").innerText
        );
      } else {
        return ;
      }
    });

    console.log(arr3);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkiChinaGadjetStarlink.length; i += 1) {
    await page.goto(arrLinkiChinaGadjetStarlink[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector(".product-name").innerText;
      if (document.querySelector(".price") != null) {
        return (
          text2 + "ChinaGadjet: " + document.querySelector(".price").innerText
        );
      } else {
        return ;
      }
    });

    console.log(arr3);
    await page.setDefaultNavigationTimeout(0);
  }

}
f()
