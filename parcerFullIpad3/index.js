console.log("Hello world");

const puppeteer = require("puppeteer");

const arrLinkJabkoIPAD = [
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
const arrLinkGroIPAD = [
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

const arrLinkIstoreIpadNew = [
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

const arrLinkMPIpadNew = [
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

const arrLinkEstoreIpadNew = [
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

async function f() {
  const browser = await puppeteer.launch({ headless: "true" });
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


}
f()
