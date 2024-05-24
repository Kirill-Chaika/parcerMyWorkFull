console.log("Hello world");

const puppeteer = require("puppeteer");

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
    "https://jabko.ua/ipad/apple-ipad-pro/apple-ipad-pro-13-2024/planshet-apple-ipad-pro-13-2024-1tb-silver-wi-fi--lte-m4"
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
    "https://www.istore.ua/ua/item/apple-ipad-pad-pro-13-m4-1-tb-wi-fi-cellular-silver/"
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
    "https://grokholsky.com/product/apple/ipad/ipad-pro-13-2024/ipad-pro-13-2024-wi-fi-cellular-1tb-silver-mvxx3/"
];



async function f() {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();


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
    
}
f()