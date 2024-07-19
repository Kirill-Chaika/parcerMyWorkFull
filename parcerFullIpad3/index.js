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
    "https://mobileplanet.ua/apple-ipad-pro-13-2024-wi-fi-cellular-1tb-silver-m-314378"
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
    "https://estore.ua/ua/ipad-pro-m4-13-wi-fi-cellular-1tb-silver-2024/?q=mvxx3"
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
}
f()