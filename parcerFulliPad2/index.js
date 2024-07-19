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

  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--128gb--silver--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/apple-ipad-pro-11-2020--128gb--space-gray--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--128gb--silver--wi-fi---lte",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--128gb--space-gray--wi-fi---lte",

  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--256gb--silver--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--256gb--space-gray--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--256gb--silver--wi-fi---lte",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--256gb--space-gray--wi-fi---lte",

  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--512gb--silver--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--512gb--space-gray--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--512gb--silver--wi-fi---lte",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--512gb--space-gray--wi-fi---lte",

  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--1tb--silver--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--1tb--space-gray--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--1tb--silver--wi-fi---lte",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--1tb--space-gray--wi-fi---lte",

  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--2tb--silver--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--2tb--space-gray--wi-fi-",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--2tb--silver--wi-fi---lte",
  "https://jabko.ua/rus/ipad/apple-ipad-pro/ipad-pro-11-/planshet-apple-ipad-pro-11-2021--2tb--space-gray--wi-fi---lte",

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


async function f() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  for (let i = 0; i < arrLinkGroIPAD.length; i += 1) {
    await page.goto(arrLinkGroIPAD[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector("p ins") != null) {
        return text2 + "Gro: " + document.querySelector("p ins").innerText;
      } else {
        return text2;
      }
    });

    console.log(arr3);
    await page.setDefaultNavigationTimeout(0);
  }
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
  // for (let i = 0; i < arrLinkIpadMrFix.length; i += 1) {
  //   await page.goto(arrLinkIpadMrFix[i]);
  //   const n = await page.$("#txt");

  //   let arr3 = await page.evaluate(() => {
  //     let text2 = document.querySelector("h1").innerText;
  //     if (document.querySelector(".price") != null) {
  //       return text2 + "Gro: " + document.querySelector(".price").innerText;
  //     } else {
  //       return text2;
  //     }
  //   });

  //   console.log(arr3);
  //   await page.setDefaultNavigationTimeout(0);
  // }
  // for (let i = 0; i < arrLinkIpadBuyUA.length; i += 1) {
  //   await page.goto(arrLinkIpadBuyUA[i]);
  //   const n = await page.$("#txt");

  //   let arr3 = await page.evaluate(() => {
  //     let text2 = document.querySelector("h2").innerText;
  //     if (document.querySelector(".price-info strong") != null) {
  //       return text2 + "Gro: " + document.querySelector(".price-info strong").innerText;
  //     } else {
  //       return text2;
  //     }
  //   });

  //   console.log(arr3);
  //   await page.setDefaultNavigationTimeout(0);
  // }

  
}
f()
