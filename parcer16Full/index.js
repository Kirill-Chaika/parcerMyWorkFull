console.log("Hello world");

const puppeteer = require("puppeteer");

const arrLinkJabko16IPH = [
    "https://jabko.ua/iphone/apple-iphone-16/apple-iphone-16-128gb-black",
    "https://jabko.ua/iphone/apple-iphone-16/apple-iphone-16-128gb-ultramarine",
    "https://jabko.ua/iphone/apple-iphone-16/apple-iphone-16-128gb-white",
    "https://jabko.ua/iphone/apple-iphone-16/apple-iphone-16-128gb-pink",
    "https://jabko.ua/iphone/apple-iphone-16/apple-iphone-16-128gb-teal",

    "https://jabko.ua/iphone/apple-iphone-16/apple-iphone-16-256gb-black",
    "https://jabko.ua/iphone/apple-iphone-16/apple-iphone-16-256gb-ultramarine",
    "https://jabko.ua/iphone/apple-iphone-16/apple-iphone-16-256gb-white",
    "https://jabko.ua/iphone/apple-iphone-16/apple-iphone-16-256gb-pink",
    "https://jabko.ua/iphone/apple-iphone-16/apple-iphone-16-256gb-teal",

    "https://jabko.ua/iphone/apple-iphone-16/apple-iphone-16-512gb-black",
    "https://jabko.ua/iphone/apple-iphone-16/apple-iphone-16-512gb-ultramarine",
    "https://jabko.ua/iphone/apple-iphone-16/apple-iphone-16-512gb-white",
    "https://jabko.ua/iphone/apple-iphone-16/apple-iphone-16-512gb-pink",
    "https://jabko.ua/iphone/apple-iphone-16/apple-iphone-16-512gb-teal",


    "https://jabko.ua/iphone/apple-iphone-16-plus/apple-iphone-16-plus-128gb-black",
    "https://jabko.ua/iphone/apple-iphone-16-plus/apple-iphone-16-plus-128gb-ultramarine",
    "https://jabko.ua/iphone/apple-iphone-16-plus/apple-iphone-16-plus-128gb-white",
    "https://jabko.ua/iphone/apple-iphone-16-plus/apple-iphone-16-plus-128gb-pink",
    "https://jabko.ua/iphone/apple-iphone-16-plus/apple-iphone-16-plus-128gb-teal",

    "https://jabko.ua/iphone/apple-iphone-16-plus/apple-iphone-16-plus-256gb-black",
    "https://jabko.ua/iphone/apple-iphone-16-plus/apple-iphone-16-plus-256gb-ultramarine",
    "https://jabko.ua/iphone/apple-iphone-16-plus/apple-iphone-16-plus-256gb-white",
    "https://jabko.ua/iphone/apple-iphone-16-plus/apple-iphone-16-plus-256gb-pink",
    "https://jabko.ua/iphone/apple-iphone-16-plus/apple-iphone-16-plus-256gb-teal",

    "https://jabko.ua/iphone/apple-iphone-16-plus/apple-iphone-16-plus-512gb-black",
    "https://jabko.ua/iphone/apple-iphone-16-plus/apple-iphone-16-plus-512gb-ultramarine",
    "https://jabko.ua/iphone/apple-iphone-16-plus/apple-iphone-16-plus-512gb-white",
    "https://jabko.ua/iphone/apple-iphone-16-plus/apple-iphone-16-plus-512gb-pink",
    "https://jabko.ua/iphone/apple-iphone-16-plus/apple-iphone-16-plus-512gb-teal",




    "https://jabko.ua/iphone/apple-iphone-16-pro/apple-iphone-16-pro-128gb-natural-titanium",
    "https://jabko.ua/iphone/apple-iphone-16-pro/apple-iphone-16-pro-128gb-black-titanium",
    "https://jabko.ua/iphone/apple-iphone-16-pro/apple-iphone-16-pro-128gb-white-titanium",
    "https://jabko.ua/iphone/apple-iphone-16-pro/apple-iphone-16-pro-128gb-desert-titanium",

    "https://jabko.ua/iphone/apple-iphone-16-pro/apple-iphone-16-pro-256gb-natural-titanium",
    "https://jabko.ua/iphone/apple-iphone-16-pro/apple-iphone-16-pro-256gb-black-titanium",
    "https://jabko.ua/iphone/apple-iphone-16-pro/apple-iphone-16-pro-256gb-white-titanium",
    "https://jabko.ua/iphone/apple-iphone-16-pro/apple-iphone-16-pro-256gb-desert-titanium",

    "https://jabko.ua/iphone/apple-iphone-16-pro/apple-iphone-16-pro-512gb-natural-titanium",
    "https://jabko.ua/iphone/apple-iphone-16-pro/apple-iphone-16-pro-512gb-black-titanium",
    "https://jabko.ua/iphone/apple-iphone-16-pro/apple-iphone-16-pro-512gb-white-titanium",
    "https://jabko.ua/iphone/apple-iphone-16-pro/apple-iphone-16-pro-512gb-desert-titanium",

    "https://jabko.ua/iphone/apple-iphone-16-pro/apple-iphone-16-pro-1tb-natural-titanium",
    "https://jabko.ua/iphone/apple-iphone-16-pro/apple-iphone-16-pro-1tb-black-titanium",
    "https://jabko.ua/iphone/apple-iphone-16-pro/apple-iphone-16-pro-1tb-white-titanium",
    "https://jabko.ua/iphone/apple-iphone-16-pro/apple-iphone-16-pro-1tb-desert-titanium",



    "https://jabko.ua/iphone/apple-iphone-16-pro-max/apple-iphone-16-pro-max-256gb-natural-titanium",
    "https://jabko.ua/iphone/apple-iphone-16-pro-max/apple-iphone-16-pro-max-256gb-black-titanium",
    "https://jabko.ua/iphone/apple-iphone-16-pro-max/apple-iphone-16-pro-max-256gb-white-titanium",
    "https://jabko.ua/iphone/apple-iphone-16-pro-max/apple-iphone-16-pro-max-256gb-desert-titanium",

    "https://jabko.ua/iphone/apple-iphone-16-pro-max/apple-iphone-16-pro-max-512gb-natural-titanium",
    "https://jabko.ua/iphone/apple-iphone-16-pro-max/apple-iphone-16-pro-max-512gb-black-titanium",
    "https://jabko.ua/iphone/apple-iphone-16-pro-max/apple-iphone-16-pro-max-512gb-white-titanium",
    "https://jabko.ua/iphone/apple-iphone-16-pro-max/apple-iphone-16-pro-max-512gb-desert-titanium",

    "https://jabko.ua/iphone/apple-iphone-16-pro-max/apple-iphone-16-pro-max-1tb-natural-titanium",
    "https://jabko.ua/iphone/apple-iphone-16-pro-max/apple-iphone-16-pro-max-1tb-black-titanium",
    "https://jabko.ua/iphone/apple-iphone-16-pro-max/apple-iphone-16-pro-max-1tb-white-titanium",
    "https://jabko.ua/iphone/apple-iphone-16-pro-max/apple-iphone-16-pro-max-1tb-desert-titanium",
];

const arrLinkIstore16IPH = [
    "https://www.istore.ua/ua/item/iphone-16-128-black/",
    "https://www.istore.ua/ua/item/iphone-16-128gb-ultramarine/",
    "https://www.istore.ua/ua/item/iphone-16-128gb-white/",
    "https://www.istore.ua/ua/item/iphone-16-128gb-pink/",
    "https://www.istore.ua/ua/item/iphone-16-128gb-teal/",

    "https://www.istore.ua/ua/item/iphone-16-256gb-black/",
    "https://www.istore.ua/ua/item/iphone-16-256gb-ultramarine/",
    "https://www.istore.ua/ua/item/iphone-16-256gb-white/",
    "https://www.istore.ua/ua/item/iphone-16-256gb-pink/",
    "https://www.istore.ua/ua/item/iphone-16-256gb-teal/",

    "https://www.istore.ua/ua/item/iphone-16-512gb-black/",
    "https://www.istore.ua/ua/item/iphone-16-512gb-ultramarine/",
    "https://www.istore.ua/ua/item/iphone-16-512gb-white/",
    "https://www.istore.ua/ua/item/iphone-16-512gb-pink/",
    "https://www.istore.ua/ua/item/iphone-16-512gb-teal/",

    "https://www.istore.ua/ua/item/iphone-16-plus-128gb-black/",
    "https://www.istore.ua/ua/item/iphone-16-plus-128gb-ultramarine/",
    "https://www.istore.ua/ua/item/iphone-16-plus-128gb-white/",
    "https://www.istore.ua/ua/item/iphone-16-plus-128gb-pink/",
    "https://www.istore.ua/ua/item/iphone-16-plus-128gb-teal/",

    "https://www.istore.ua/ua/item/iphone-16-plus-256gb-black/",
    "https://www.istore.ua/ua/item/iphone-16-plus-256gb-ultramarine/",
    "https://www.istore.ua/ua/item/iphone-16-plus-256gb-white/",
    "https://www.istore.ua/ua/item/iphone-16-plus-256gb-pink/",
    "https://www.istore.ua/ua/item/iphone-16-plus-256gb-teal/",

    "https://www.istore.ua/ua/item/iphone-16-plus-512gb-black/",
    "https://www.istore.ua/ua/item/iphone-16-plus-512gb-ultramarine/",
    "https://www.istore.ua/ua/item/iphone-16-plus-512gb-white/",
    "https://www.istore.ua/ua/item/iphone-16-plus-512gb-pink/",
    "https://www.istore.ua/ua/item/iphone-16-plus-512gb-teal/",



    "https://www.istore.ua/ua/item/iphone-16-pro-128gb-natural-titanium/",
    "https://www.istore.ua/ua/item/iphone-16-pro-128gb-black-titanium/",
    "https://www.istore.ua/ua/item/iphone-16-pro-128gb-white-titanium/",
    "https://www.istore.ua/ua/item/iphone-16-pro-128gb-desert-titanium/",

    "https://www.istore.ua/ua/item/iphone-16-pro-256gb-natural-titanium/",
    "https://www.istore.ua/ua/item/iphone-16-pro-256gb-black-titanium/",
    "https://www.istore.ua/ua/item/iphone-16-pro-256gb-white-titanium/",
    "https://www.istore.ua/ua/item/iphone-16-pro-256gb-desert-titanium/",

    "https://www.istore.ua/ua/item/iphone-16-pro-512gb-natural-titanium/",
    "https://www.istore.ua/ua/item/iphone-16-pro-512gb-black-titanium/",
    "https://www.istore.ua/ua/item/iphone-16-pro-512gb-white-titanium/",
    "https://www.istore.ua/ua/item/iphone-16-pro-512gb-desert-titanium/",

    "https://www.istore.ua/ua/item/iphone-16-pro-1tb-natural-titanium/",
    "https://www.istore.ua/ua/item/iphone-16-pro-1tb-black-titanium/",
    "https://www.istore.ua/ua/item/iphone-16-pro-1tb-white-titanium/",
    "https://www.istore.ua/ua/item/iphone-16-pro-1tb-desert-titanium/",



    "https://www.istore.ua/ua/item/iphone-16-pro-max-256gb-natural-titanium/",
    "https://www.istore.ua/ua/item/iphone-16-pro-max-256gb-black-titanium/",
    "https://www.istore.ua/ua/item/iphone-16-pro-max-256gb-white-titanium/",
    "https://www.istore.ua/ua/item/iphone-16-pro-max-256gb-desert-titanium/",

    "https://www.istore.ua/ua/item/iphone-16-pro-max-512gb-natural-titanium/",
    "https://www.istore.ua/ua/item/iphone-16-pro-max-512gb-black-titanium/",
    "https://www.istore.ua/ua/item/iphone-16-pro-max-512gb-white-titanium/",
    "https://www.istore.ua/ua/item/iphone-16-pro-max-512gb-desert-titanium/",

    "https://www.istore.ua/ua/item/iphone-16-pro-max-1tb-natural-titanium/",
    "https://www.istore.ua/ua/item/iphone-16-pro-max-1tb-black-titanium/",
    "https://www.istore.ua/ua/item/iphone-16-pro-max-1tb-white-titanium/",
    "https://www.istore.ua/ua/item/iphone-16-pro-max-1tb-desert-titanium/",
];

const arrLinkMobilePlanet16IPH = [
    "https://mobileplanet.ua/ua/apple-iphone-16-128gb-black-mye73-322275",
    "https://mobileplanet.ua/ua/apple-iphone-16-128gb-ultramarine-myec3-322283",
    "https://mobileplanet.ua/ua/apple-iphone-16-128gb-white-mye93-322284",
    "https://mobileplanet.ua/ua/apple-iphone-16-128gb-pink-myea3-322281",
    "https://mobileplanet.ua/ua/apple-iphone-16-128gb-teal-myed3-322282",

    "https://mobileplanet.ua/ua/apple-iphone-16-256gb-black-myee3-322285",
    "https://mobileplanet.ua/ua/apple-iphone-16-256gb-ultramarine-myeh3-322293",
    "https://mobileplanet.ua/ua/apple-iphone-16-256gb-white-myef3-322294",
    "https://mobileplanet.ua/ua/apple-iphone-16-256gb-pink-myeg3-322291",
    "https://mobileplanet.ua/ua/apple-iphone-16-256gb-teal-myej3-322292",

    "https://mobileplanet.ua/ua/apple-iphone-16-512gb-black-myek3-322295",
    "https://mobileplanet.ua/ua/apple-iphone-16-512gb-ultramarine-myer3-322303",
    "https://mobileplanet.ua/ua/apple-iphone-16-512gb-white-myep3-322304",
    "https://mobileplanet.ua/ua/apple-iphone-16-512gb-pink-myeq3-322301",
    "https://mobileplanet.ua/ua/apple-iphone-16-512gb-teal-myeu3-322302",


    "https://mobileplanet.ua/ua/apple-iphone-16-plus-128gb-black-mxvu3-322305",
    "https://mobileplanet.ua/ua/apple-iphone-16-plus-128gb-ultramarine-m-322313",
    "https://mobileplanet.ua/ua/apple-iphone-16-plus-128gb-white-mxvv3-322314",
    "https://mobileplanet.ua/ua/apple-iphone-16-plus-128gb-pink-mxvw3-322311",
    "https://mobileplanet.ua/ua/apple-iphone-16-plus-128gb-teal-mxvy3-322312",

    "https://mobileplanet.ua/ua/apple-iphone-16-plus-256gb-black-mxwn3-322315",
    "https://mobileplanet.ua/ua/apple-iphone-16-plus-256gb-ultramarine-m-322323",
    "https://mobileplanet.ua/ua/apple-iphone-16-plus-256gb-white-mxwv3-322324",
    "https://mobileplanet.ua/ua/apple-iphone-16-plus-256gb-pink-mxy13-322321",
    "https://mobileplanet.ua/ua/apple-iphone-16-plus-256gb-teal-mxy53-322322",

    "https://mobileplanet.ua/ua/apple-iphone-16-plus-512gb-black-my1p3-322325",
    "https://mobileplanet.ua/ua/apple-iphone-16-plus-512gb-ultramarine-m-322333",
    "https://mobileplanet.ua/ua/apple-iphone-16-plus-512gb-white-my1x3-322334",
    "https://mobileplanet.ua/ua/apple-iphone-16-plus-512gb-pink-my253-322331",
    "https://mobileplanet.ua/ua/apple-iphone-16-plus-512gb-teal-my2j3-322332",



    "https://mobileplanet.ua/ua/apple-iphone-16-pro-128gb-natural-titani-322341",
    "https://mobileplanet.ua/ua/apple-iphone-16-pro-128gb-black-titanium-322335",
    "https://mobileplanet.ua/ua/apple-iphone-16-pro-128gb-white-titanium-322342",
    "https://mobileplanet.ua/ua/apple-iphone-16-pro-128gb-desert-titaniu-322336",


    "https://mobileplanet.ua/ua/apple-iphone-16-pro-256gb-natural-titani-322357",
    "https://mobileplanet.ua/ua/apple-iphone-16-pro-256gb-black-titanium-322351",
    "https://mobileplanet.ua/ua/apple-iphone-16-pro-256gb-white-titanium-322358",
    "https://mobileplanet.ua/ua/apple-iphone-16-pro-256gb-desert-titaniu-322352",


    "https://mobileplanet.ua/ua/apple-iphone-16-pro-512gb-natural-titani-322365",
    "https://mobileplanet.ua/ua/apple-iphone-16-pro-512gb-black-titanium-322359",
    "https://mobileplanet.ua/ua/apple-iphone-16-pro-512gb-white-titanium-322366",
    "https://mobileplanet.ua/ua/apple-iphone-16-pro-512gb-desert-titaniu-322360",

    "https://mobileplanet.ua/ua/apple-iphone-16-pro-1tb-natural-titanium-322349",
    "https://mobileplanet.ua/ua/apple-iphone-16-pro-1tb-black-titanium-m-322343",
    "https://mobileplanet.ua/ua/apple-iphone-16-pro-1tb-white-titanium-m-322350",
    "https://mobileplanet.ua/ua/apple-iphone-16-pro-1tb-desert-titanium-322344",



    "https://mobileplanet.ua/ua/apple-iphone-16-pro-max-256gb-natural-ti-322381",
    "https://mobileplanet.ua/ua/apple-iphone-16-pro-max-256gb-black-tita-322375",
    "https://mobileplanet.ua/ua/apple-iphone-16-pro-max-256gb-white-tita-322382",
    "https://mobileplanet.ua/ua/apple-iphone-16-pro-max-256gb-desert-tit-322376",

    "https://mobileplanet.ua/ua/apple-iphone-16-pro-max-512gb-natural-ti-322389",
    "https://mobileplanet.ua/ua/apple-iphone-16-pro-max-512gb-black-tita-322383",
    "https://mobileplanet.ua/ua/apple-iphone-16-pro-max-512gb-white-tita-322390",
    "https://mobileplanet.ua/ua/apple-iphone-16-pro-max-512gb-desert-tit-322384",

    "https://mobileplanet.ua/ua/apple-iphone-16-pro-max-1tb-natural-tita-322373",
    "https://mobileplanet.ua/ua/apple-iphone-16-pro-max-1tb-black-titani-322367",
    "https://mobileplanet.ua/ua/apple-iphone-16-pro-max-1tb-white-titani-322374",
    "https://mobileplanet.ua/ua/apple-iphone-16-pro-max-1tb-desert-titan-322368",
];

const arrLinkGro16IPH = [
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16/smartfon-apple-iphone-16-128gb-black-mye73/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16/smartfon-apple-iphone-16-128gb-ultramarine-myec3/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16/smartfon-apple-iphone-16-128gb-white-mye93/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16/smartfon-apple-iphone-16-128gb-pink-myea3/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16/smartfon-apple-iphone-16-128gb-teal-myed3/",

    "https://grokholsky.com/ua/product/apple/iphone/iphone-16/smartfon-apple-iphone-16-256gb-black-myee3/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16/smartfon-apple-iphone-16-256gb-ultramarine-myeh3/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16/smartfon-apple-iphone-16-256gb-white-myef3/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16/smartfon-apple-iphone-16-256gb-pink-myeg3/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16/smartfon-apple-iphone-16-256gb-teal-myej3/",

    "https://grokholsky.com/ua/product/apple/iphone/iphone-16/smartfon-apple-iphone-16-512gb-black-myek3/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16/smartfon-apple-iphone-16-512gb-ultramarine-myer3/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16/smartfon-apple-iphone-16-512gb-white-myep3/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16/smartfon-apple-iphone-16-512gb-pink-myeq3/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16/smartfon-apple-iphone-16-512gb-teal-myeu3/",

    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-plus/smartfon-apple-iphone-16-plus-128gb-black-mxvu3/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-plus/smartfon-apple-iphone-16-plus-128gb-ultramarine-mxvx3/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-plus/smartfon-apple-iphone-16-plus-128gb-white-mxvv3/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-plus/smartfon-apple-iphone-16-plus-128gb-pink-mxvw3/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-plus/smartfon-apple-iphone-16-plus-128gb-teal-mxvy3/",

    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-plus/smartfon-apple-iphone-16-plus-256gb-black-mxwn3/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-plus/smartfon-apple-iphone-16-plus-256gb-ultramarine-mxy23/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-plus/smartfon-apple-iphone-16-plus-256gb-white-mxwv3/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-plus/smartfon-apple-iphone-16-plus-256gb-pink-mxy13/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-plus/smartfon-apple-iphone-16-plus-256gb-teal-mxy53/",

    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-plus/smartfon-apple-iphone-16-plus-512gb-black-my1p3/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-plus/smartfon-apple-iphone-16-plus-512gb-ultramarine-my2d3/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-plus/smartfon-apple-iphone-16-plus-512gb-white-my1x3/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-plus/smartfon-apple-iphone-16-plus-512gb-pink-my253/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-plus/smartfon-apple-iphone-16-plus-512gb-teal-my2j3/",



    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro/smartfon-apple-iphone-16-pro-128gb-natural-titanium-myng3/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro/smartfon-apple-iphone-16-pro-128gb-black-titanium-mynd3/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro/smartfon-apple-iphone-16-pro-128gb-white-titanium-myne3/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro/smartfon-apple-iphone-16-pro-128gb-desert-titanium-mynf3/",

    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro/smartfon-apple-iphone-16-pro-256gb-natural-titanium-mynl3/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro/smartfon-apple-iphone-16-pro-256gb-black-titanium-mynh3/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro/smartfon-apple-iphone-16-pro-256gb-white-titanium-mynj3/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro/smartfon-apple-iphone-16-pro-256gb-desert-titanium-mynk3/",

    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro/smartfon-apple-iphone-16-pro-512gb-natural-titanium-mynq3/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro/smartfon-apple-iphone-16-pro-512gb-black-titanium-mynm3/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro/smartfon-apple-iphone-16-pro-512gb-white-titanium-mynn3/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro/smartfon-apple-iphone-16-pro-512gb-desert-titanium-mynp3/",

    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro/smartfon-apple-iphone-16-pro-1tb-natural-titanium-mynx3/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro/smartfon-apple-iphone-16-pro-1tb-black-titanium-mynr3/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro/smartfon-apple-iphone-16-pro-1tb-white-titanium-mynt3/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro/smartfon-apple-iphone-16-pro-1tb-desert-titanium-mynw3/",



    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro-max/smartfon-apple-iphone-16-pro-max-256gb-natural-titanium-mywy3/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro-max/smartfon-apple-iphone-16-pro-max-256gb-black-titanium-mywv3/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro-max/smartfon-apple-iphone-16-pro-max-256gb-white-titanium-myww3/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro-max/smartfon-apple-iphone-16-pro-max-256gb-desert-titanium-mywx3/",

    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro-max/smartfon-apple-iphone-16-pro-max-512gb-natural-titanium-myx33/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro-max/smartfon-apple-iphone-16-pro-max-512gb-black-titanium-myx03/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro-max/smartfon-apple-iphone-16-pro-max-512gb-white-titanium-myx13/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro-max/smartfon-apple-iphone-16-pro-max-512gb-desert-titanium-myx23/",

    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro-max/smartfon-apple-iphone-16-pro-max-1tb-natural-titanium-myx73/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro-max/smartfon-apple-iphone-16-pro-max-1tb-black-titanium-myx43/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro-max/smartfon-apple-iphone-16-pro-max-1tb-white-titanium-myx53/",
    "https://grokholsky.com/ua/product/apple/iphone/iphone-16-pro-max/smartfon-apple-iphone-16-pro-max-1tb-desert-titanium-myx63/",
];

const arrLinkEstore16IPH = [
    "https://estore.ua/ua/iphone-16-128gb-black/?q=mye73",
    "https://estore.ua/ua/iphone-16-128gb-soft-peach/?q=myec3",
    "https://estore.ua/ua/iphone-16-128gb-purple/?q=mye93",
    "https://estore.ua/ua/iphone-16-128gb-pink/?q=myea3",
    "https://estore.ua/ua/iphone-16-128gb-ocean-blue/?q=myed3",

    "https://estore.ua/ua/iphone-16-256gb-black/?q=myee3",
    "https://estore.ua/ua/iphone-16-256gb-soft-peach/?q=myeh3",
    "https://estore.ua/ua/iphone-16-256gb-purple/?q=myef3",
    "https://estore.ua/ua/iphone-16-256gb-pink/?q=myeg3",
    "https://estore.ua/ua/iphone-16-256gb-ocean-blue/?q=myej3",

    "https://estore.ua/ua/iphone-16-512gb-black/?q=myek3",
    "https://estore.ua/ua/iphone-16-512gb-soft-peach/?q=myer3",
    "https://estore.ua/ua/iphone-16-512gb-purple/?q=myep3",
    "https://estore.ua/ua/iphone-16-512gb-pink/?q=myeq3",
    "https://estore.ua/ua/iphone-16-512gb-ocean-blue/?q=myeu3",

    "https://estore.ua/ua/iphone-16-plus-128gb-black/",
    "https://estore.ua/ua/iphone-16-plus-128gb-soft-peach/?q=mxvx3",
    "https://estore.ua/ua/iphone-16-plus-128gb-purple/",
    "https://estore.ua/ua/iphone-16-plus-128gb-pink/",
    "https://estore.ua/ua/iphone-16-plus-128gb-ocean-blue/",

    "https://estore.ua/ua/iphone-16-plus-256gb-black/?q=mxwn3",
    "https://estore.ua/ua/iphone-16-plus-256gb-soft-peach/",
    "https://estore.ua/ua/iphone-16-plus-256gb-purple/",
    "https://estore.ua/ua/iphone-16-plus-256gb-pink/",
    "https://estore.ua/ua/iphone-16-plus-256gb-ocean-blue/",

    "https://estore.ua/ua/iphone-16-plus-512gb-black/?q=my1p3",
    "https://estore.ua/ua/iphone-16-plus-512gb-soft-peach/",
    "https://estore.ua/ua/iphone-16-plus-512gb-purple/",
    "https://estore.ua/ua/iphone-16-plus-512gb-pink/?q=my253",
    "https://estore.ua/ua/iphone-16-plus-512gb-ocean-blue/?q=my2j3",



    "https://estore.ua/ua/iphone-16-pro-128gb-natural-titanium/?q=myng3",
    "https://estore.ua/ua/iphone-16-pro-128gb-black-titanium/?q=mynd3",
    "https://estore.ua/ua/iphone-16-pro-128gb-white-titanium/?q=myne3",
    "https://estore.ua/ua/iphone-16-pro-128gb-desert-titanium/?q=mynf3",

    "https://estore.ua/ua/iphone-16-pro-256gb-titanium-gray/?q=mynl3",
    "https://estore.ua/ua/iphone-16-pro-256gb-black-titanium/?q=mynh3",
    "https://estore.ua/ua/iphone-16-pro-256gb-white-titanium/?q=mynj3",
    "https://estore.ua/ua/iphone-16-pro-256gb-desert-titanium/?q=mynk3",

    "https://estore.ua/ua/iphone-16-pro-512gb-titanium-gray/?q=mynq3",
    "https://estore.ua/ua/iphone-16-pro-512gb-black-titanium/?q=mynm3",
    "https://estore.ua/ua/iphone-16-pro-512gb-white-titanium/?q=mynn3",
    "https://estore.ua/ua/iphone-16-pro-512gb-desert-titanium/?q=mynp3",

    "https://estore.ua/ua/iphone-16-pro-1tb-titanium-gray/?q=mynx3",
    "https://estore.ua/ua/iphone-16-pro-1tb-black-titanium/?q=mynr3",
    "https://estore.ua/ua/iphone-16-pro-1tb-white-titanium/",
    "https://estore.ua/ua/iphone-16-pro-1tb-desert-titanium/",


    "https://estore.ua/ua/iphone-16-pro-max-256gb-titanium-gray/?q=mywy3",
    "https://estore.ua/ua/iphone-16-pro-max-256gb-black-titanium/?q=mywv3",
    "https://estore.ua/ua/iphone-16-pro-max-256gb-white-titanium/?q=myww3",
    "https://estore.ua/ua/iphone-16-pro-max-256gb-desert-titanium/?q=mywx3",

    "https://estore.ua/ua/iphone-16-pro-max-512gb-titanium-gray/?q=myx33",
    "https://estore.ua/ua/iphone-16-pro-max-512gb-black-titanium/?q=myx03",
    "https://estore.ua/ua/iphone-16-pro-max-512gb-white-titanium/?q=myx13",
    "https://estore.ua/ua/iphone-16-pro-max-512gb-desert-titanium/?q=myx23",

    "https://estore.ua/ua/iphone-16-pro-max-1tb-titanium-gray/?q=myx73",
    "https://estore.ua/ua/iphone-16-pro-max-1tb-black-titanium/?q=myx43",
    "https://estore.ua/ua/iphone-16-pro-max-1tb-white-titanium/?q=myx53",
    "https://estore.ua/ua/iphone-16-pro-max-1tb-desert-titanium/",
];


const arrLinkCts16IPH = [
    "https://www.ctrs.com.ua/smartfony/iphone-16-128gb-black-apple-752183.html",
    "https://www.ctrs.com.ua/smartfony/iphone-16-256gb-black-apple-752186.html",
    "https://www.ctrs.com.ua/smartfony/iphone-16-512gb-black-apple-752192.html",

    "https://www.ctrs.com.ua/smartfony/iphone-16-plus-128gb-black-apple-752201.html",
    "https://www.ctrs.com.ua/smartfony/iphone-16-plus-256gb-black-apple-752206.html",
    "https://www.ctrs.com.ua/smartfony/iphone-16-plus-512gb-black-apple-752211.html",

    "https://www.ctrs.com.ua/smartfony/iphone-16-pro-128gb-black-titanium-apple-752249.html",
    "https://www.ctrs.com.ua/smartfony/iphone-16-pro-256gb-black-titanium-apple-752218.html",
    "https://www.ctrs.com.ua/smartfony/iphone-16-pro-512gb-black-titanium-apple-752224.html",
    "https://www.ctrs.com.ua/smartfony/iphone-16-pro-1tb-black-titanium-apple-752228.html",

    "https://www.ctrs.com.ua/smartfony/iphone-16-pro-max-256gb-black-titanium-apple-752236.html",
    "https://www.ctrs.com.ua/smartfony/iphone-16-pro-max-512gb-black-titanium-apple-752240.html",
    "https://www.ctrs.com.ua/smartfony/iphone-16-pro-max-1tb-black-titanium-apple-752244.html",
];


async function f() {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();


      for (let i = 0; i < arrLinkJabko16IPH.length; i += 1) {
        await page.goto(arrLinkJabko16IPH[i]);
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
      for (let i = 0; i < arrLinkIstore16IPH.length; i += 1) {
        await page.goto(arrLinkIstore16IPH[i]);
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
      for (let i = 0; i < arrLinkMobilePlanet16IPH.length; i += 1) {
        await page.goto(arrLinkMobilePlanet16IPH[i]);
        const n = await page.$("#txt");

        let arr3 = await page.evaluate(() => {
          let text2 = document.querySelector("h1").innerText;
          if (document.querySelector(".price-value") != null) {
            return (
              text2 + "MP: " + document.querySelector(".price-value").innerText
            );
          } else {
            return text2;
          }
        });

        console.log(arr3);
        await page.setDefaultNavigationTimeout(0);
      }
      for (let i = 0; i < arrLinkGro16IPH.length; i += 1) {
        await page.goto(arrLinkGro16IPH[i]);
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
      for (let i = 0; i < arrLinkEstore16IPH.length; i += 1) {
        await page.goto(arrLinkEstore16IPH[i]);
        const n = await page.$("#txt");

        let arr2 = await page.evaluate(() => {
          let text2 = document.querySelector("h1").innerText;
          if (document.querySelector(".regular-price") != null) {
            return (
              text2 + "Estore: " + document.querySelector(".regular-price").innerText
            );
          } else {
            return text2;
          }
        });

        console.log(arr2);
        await page.setDefaultNavigationTimeout(0);
      }
    for (let i = 0; i < arrLinkCts16IPH.length; i += 1) {
        await page.goto(arrLinkCts16IPH[i]);
        const n = await page.$("#txt");

        let arr2 = await page.evaluate(() => {
            let text2 = document.querySelector("h1").innerText;
            if (document.querySelector(".price") != null) {
                return (
                    text2 + "CRS: " + document.querySelector(".price").innerText
                );
            } else {
                return text2;
            }
        });

        console.log(arr2);
        await page.setDefaultNavigationTimeout(0);
    }
}
f();
