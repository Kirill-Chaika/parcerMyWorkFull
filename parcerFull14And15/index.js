console.log("Hello world");

const puppeteer = require("puppeteer");
const arrLinkMobilePlanet = [
  "https://mobileplanet.ua/apple-iphone-14-128gb-starlight-mpur3-254637",
  "https://mobileplanet.ua/apple-iphone-14-128gb-product-red-mpva3-254640",
  "https://mobileplanet.ua/apple-iphone-14-128gb-purple-mpv03-254646",
  "https://mobileplanet.ua/apple-iphone-14-128gb-blue-mpvn3-254643",
  "https://mobileplanet.ua/apple-iphone-14-128gb-midnight-mpuf3-254634",
  "https://mobileplanet.ua/apple-iphone-14-128gb-yellow-mr3x3-269128",

  "https://mobileplanet.ua/apple-iphone-14-256gb-starlight-mpw43-254638",
  "https://mobileplanet.ua/apple-iphone-14-256gb-product-red-mpwh3-254641",
  "https://mobileplanet.ua/apple-iphone-14-256gb-purple-mpwa3-254647",
  "https://mobileplanet.ua/apple-iphone-14-256gb-blue-mpwp3-254644",
  "https://mobileplanet.ua/apple-iphone-14-256gb-midnight-mpvx3-254635",
  "https://mobileplanet.ua/apple-iphone-14-256gb-yellow-mr3y3-268925",

  "https://mobileplanet.ua/apple-iphone-14-512gb-starlight-mpx33-254639",
  "https://mobileplanet.ua/apple-iphone-14-512gb-product-red-mpxg3-254642",
  "https://mobileplanet.ua/apple-iphone-14-512gb-purple-mpx93-254648",
  "https://mobileplanet.ua/apple-iphone-14-512gb-blue-mpxn3-254645",
  "https://mobileplanet.ua/apple-iphone-14-512gb-midnight-mpww3-254636",
  "https://mobileplanet.ua/apple-iphone-14-512gb-yellow-mr513-272475"
];
const arrLinkSkay14 = [
  "https://skay.ua/uk/iphone-14/58756-apple-iphone-14-128gb-starlight.html",
  "https://skay.ua/uk/iphone-14/58757-apple-iphone-14-128gb-product-red.html",
  "https://skay.ua/uk/iphone-14/58754-apple-iphone-14-128gb-purple.html",
  "https://skay.ua/uk/iphone-14/58753-apple-iphone-14-128gb-blue.html",
  "https://skay.ua/uk/iphone-14/58755-apple-iphone-14-128gb-midnight.html",
  "https://skay.ua/uk/iphone-14/61506-apple-iphone-14-128gb-yellow.html",

  "https://skay.ua/uk/iphone-14/58761-apple-iphone-14-256gb-starlight.html",
  "https://skay.ua/uk/iphone-14/58762-apple-iphone-14-256gb-product-red.html",
  "https://skay.ua/uk/iphone-14/58759-apple-iphone-14-256gb-purple.html",
  "https://skay.ua/uk/iphone-14/58758-apple-iphone-14-256gb-blue.html",
  "https://skay.ua/uk/iphone-14/58760-apple-iphone-14-256gb-midnight.html",
  "https://skay.ua/uk/iphone-14/61509-apple-iphone-14-256gb-yellow.html",

  "https://skay.ua/uk/iphone-14/58766-apple-iphone-14-512gb-starlight.html",
  "https://skay.ua/uk/iphone-14/58767-apple-iphone-14-512gb-product-red.html",
  "https://skay.ua/uk/iphone-14/58764-apple-iphone-14-512gb-purple.html",
  "https://skay.ua/uk/iphone-14/58763-apple-iphone-14-512gb-blue.html",
  "https://skay.ua/uk/iphone-14/58765-apple-iphone-14-512gb-midnight.html",
  "https://skay.ua/uk/iphone-14/61510-apple-iphone-14-512gb-yellow.html"
];
const arrLinkIstore14 = [
  "https://www.istore.ua/catalog/item/apple-iphone-14-128-gb-starlight/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-128-gb-red/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-128-gb-purple/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-128-gb-blue/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-128-gb-midnight/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-128-gb-yellow/",

  "https://www.istore.ua/catalog/item/apple-iphone-14-256-gb-starlight/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-256-gb-red/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-256-gb-purple/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-256-gb-blue/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-256-gb-midnight/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-256-gb-yellow/",

  "https://www.istore.ua/catalog/item/apple-iphone-14-512-gb-starlight/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-512-gb-red/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-512-gb-purple/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-512-gb-blue/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-512-gb-midnight/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-512-gb-yellow/"
];
const arrLinkJabko14 = [
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-128gb--starlight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-128gb--midnight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-128gb--pink-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-128gb--blue-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-128gb-midnight",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-128gb--yellow-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-256gb--starlight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-256gb--red-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-256gb--pink-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-256gb--blue-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-256gb--midnight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-256gb--yellow-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-512gb--starlight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-512gb--red-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-512gb--pink-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-512gb--blue-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-512gb--midnight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14/apple-iphone-14-512gb--yellow-"
];

const arrLinkMobilePlanet14Plus = [
  "https://mobileplanet.ua/apple-iphone-14-plus-128gb-starlight-mq4y3-254622",
  "https://mobileplanet.ua/apple-iphone-14-plus-128gb-product-red-mq513-254625",
  "https://mobileplanet.ua/apple-iphone-14-plus-128gb-purple-mq503-254631",
  "https://mobileplanet.ua/apple-iphone-14-plus-128gb-blue-mq523-254628",
  "https://mobileplanet.ua/apple-iphone-14-plus-128gb-midnight-mq4x3-254619",
  "https://mobileplanet.ua/apple-iphone-14-plus-128gb-yellow-mr693-269368",

  "https://mobileplanet.ua/apple-iphone-14-plus-256gb-starlight-mq553-254623",
  "https://mobileplanet.ua/apple-iphone-14-plus-256gb-product-red-mq573-254626",
  "https://mobileplanet.ua/apple-iphone-14-plus-256gb-purple-mq563-254632",
  "https://mobileplanet.ua/apple-iphone-14-plus-256gb-blue-mq583-254629",
  "https://mobileplanet.ua/apple-iphone-14-plus-256gb-midnight-mq533-254620",
  "https://mobileplanet.ua/apple-iphone-14-plus-256gb-yellow-mr6d3-270614",

  "https://mobileplanet.ua/apple-iphone-14-plus-512gb-starlight-mq5d3-254624",
  "https://mobileplanet.ua/apple-iphone-14-plus-512gb-product-red-mq5f3-254627",
  "https://mobileplanet.ua/apple-iphone-14-plus-512gb-purple-mq5e3-254633",
  "https://mobileplanet.ua/apple-iphone-14-plus-512gb-blue-mq5g3-254630",
  "https://mobileplanet.ua/apple-iphone-14-plus-512gb-midnight-mq593-254621"
];
const arrLinkSkay14Plus = [
  "https://skay.ua/uk/iphone-14-plus/58772-apple-iphone-14-plus-128gb-starlight.html",
  "https://skay.ua/uk/iphone-14-plus/58773-apple-iphone-14-plus-128gb-product-red.html",
  "https://skay.ua/uk/iphone-14-plus/58770-apple-iphone-14-plus-128gb-purple.html",
  "https://skay.ua/uk/iphone-14-plus/58768-apple-iphone-14-plus-128gb-blue.html",
  "https://skay.ua/uk/iphone-14-plus/58771-apple-iphone-14-plus-128gb-midnight.html",
  "https://skay.ua/uk/iphone-14-plus/61507-apple-iphone-14-plus-128gb-yellow.html",

  "https://skay.ua/uk/iphone-14-plus/58777-apple-iphone-14-plus-256gb-starlight.html",
  "https://skay.ua/uk/iphone-14-plus/58778-apple-iphone-14-plus-256gb-product-red.html",
  "https://skay.ua/uk/iphone-14-plus/58775-apple-iphone-14-plus-256gb-purple.html",
  "https://skay.ua/uk/iphone-14-plus/58774-apple-iphone-14-plus-256gb-blue.html",
  "https://skay.ua/uk/iphone-14-plus/58776-apple-iphone-14-plus-256gb-midnight.html",
  "https://skay.ua/uk/iphone-14-plus/61511-apple-iphone-14-plus-256gb-yellow.html",

  "https://skay.ua/uk/iphone-14-plus/58781-apple-iphone-14-plus-512gb-starlight.html",
  "https://skay.ua/uk/iphone-14-plus/58782-apple-iphone-14-plus-512gb-product-red.html",
  "https://skay.ua/uk/iphone-14-plus/58816-apple-iphone-14-plus-512gb-purple.html",
  "https://skay.ua/uk/iphone-14-plus/58779-apple-iphone-14-plus-512gb-blue.html",
  "https://skay.ua/uk/iphone-14-plus/58780-apple-iphone-14-plus-512gb-midnight.html",
  "https://skay.ua/uk/iphone-14-plus/61512-apple-iphone-14-plus-512gb-yellow.html"
];
const arrLinkIstore14Plus = [
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-128-gb-starlight/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-128-gb-red/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-128-gb-purple/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-128-gb-blue/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-128-gb-midnight/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-128-gb-yellow/",

  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-256-gb-starlight/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-256-gb-red/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-256-gb-purple/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-256-gb-blue/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-256-gb-midnight/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-256-gb-yellow/",

  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-512-gb-starlight/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-512-gb-red/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-512-gb-purple/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-512-gb-blue/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-512-gb-midnight/",
  "https://www.istore.ua/catalog/item/apple-iphone-14-plus-512-gb-yellow/"
];
const arrLinkJabko14Plus = [
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-128gb--starlight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-128gb--red-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-128gb--pink-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-128gb--blue-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-128gb--midnight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-plus-128gb--yellow-",

  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-256gb--starlight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-256gb--red-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-256gb--pink-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-256gb--blue-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-256gb--midnight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-plus-256gb--yellow-",

  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-512gb--starlight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-512gb--red-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-512gb--pink-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-512gb--blue-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-mini-512gb--midnight-",
  "https://jabko.ua/rus/iphone/apple-iphone-14-plus/apple-iphone-14-plus-512gb--yellow-"
];



const arrLinkMobilePlanet14Pro = [
    'https://mobileplanet.ua/apple-iphone-14-pro-128gb-deep-purple-mq0g3-254615',
    'https://mobileplanet.ua/apple-iphone-14-pro-128gb-space-black-mpxv3-254603',
    'https://mobileplanet.ua/apple-iphone-14-pro-128gb-silver-mq023-254607',
    'https://mobileplanet.ua/apple-iphone-14-pro-128gb-gold-mq083-254611',
  
    'https://mobileplanet.ua/apple-iphone-14-pro-256gb-deep-purple-mq1f3-254616',
    'https://mobileplanet.ua/apple-iphone-14-pro-256gb-space-black-mq0t3-254604',
    'https://mobileplanet.ua/apple-iphone-14-pro-256gb-silver-mq103-254608',
    'https://mobileplanet.ua/apple-iphone-14-pro-256gb-gold-mq183-254612',
  
    'https://mobileplanet.ua/apple-iphone-14-pro-512gb-space-black-mq1m3-254605',
    'https://mobileplanet.ua/apple-iphone-14-pro-512gb-deep-purple-mq293-254617',
    'https://mobileplanet.ua/apple-iphone-14-pro-512gb-silver-mq1w3-254609',
    'https://mobileplanet.ua/apple-iphone-14-pro-512gb-gold-mq233-254613',
  
    'https://mobileplanet.ua/apple-iphone-14-pro-1tb-deep-purple-mq323-254618',
    'https://mobileplanet.ua/apple-iphone-14-pro-1tb-space-black-mq2g3-254606',
    'https://mobileplanet.ua/apple-iphone-14-pro-1tb-silver-mq2n3-254610',
    'https://mobileplanet.ua/apple-iphone-14-pro-1tb-gold-mq2v3-254614'
  ];
  const arrLinkSkay14Pro = [
    'https://skay.ua/uk/iphone-14-pro/58783-apple-iphone-14-pro-128gb-deep-purple.html',
    'https://skay.ua/uk/iphone-14-pro/58786-apple-iphone-14-pro-128gb-space-black.html',
    'https://skay.ua/uk/iphone-14-pro/58785-apple-iphone-14-pro-128gb-silver.html',
    'https://skay.ua/uk/iphone-14-pro/58784-apple-iphone-14-pro-128gb-gold.html',
  
    'https://skay.ua/uk/iphone-14-pro/58788-apple-iphone-14-pro-256gb-deep-purple.html',
    'https://skay.ua/uk/iphone-14-pro/58791-apple-iphone-14-pro-256gb-space-black.html',
    'https://skay.ua/uk/iphone-14-pro/58790-apple-iphone-14-pro-256gb-silver.html',
    'https://skay.ua/uk/iphone-14-pro/58789-apple-iphone-14-pro-256gb-gold.html',
  
    'https://skay.ua/uk/iphone-14-pro/58792-apple-iphone-14-pro-512gb-deep-purple.html',
    'https://skay.ua/uk/iphone-14-pro/58795-apple-iphone-14-pro-512gb-space-black.html',
    'https://skay.ua/uk/iphone-14-pro/58794-apple-iphone-14-pro-512gb-silver.html',
    'https://skay.ua/uk/iphone-14-pro/58793-apple-iphone-14-pro-512gb-gold.html',
  
    'https://skay.ua/uk/iphone-14-pro/58796-apple-iphone-14-pro-1tb-deep-purple.html',
    'https://skay.ua/uk/iphone-14-pro/58799-apple-iphone-14-pro-1tb-space-black.html',
    'https://skay.ua/uk/iphone-14-pro/58798-apple-iphone-14-pro-1tb-silver.html',
    'https://skay.ua/uk/iphone-14-pro/58797-apple-iphone-14-pro-1tb-gold.html'
  ];
  const arrLinkIstore14Pro = [
    'https://www.istore.ua/catalog/item/apple-iphone-14-pro-128-gb-deep-purple/',
    'https://www.istore.ua/catalog/item/apple-iphone-14-pro-128-gb-graphite/',
    'https://www.istore.ua/catalog/item/apple-iphone-14-pro-128-gb-silver/',
    'https://www.istore.ua/catalog/item/apple-iphone-14-pro-128-gb-gold/',
  
    'https://www.istore.ua/catalog/item/apple-iphone-14-pro-256-gb-deep-purple/',
    'https://www.istore.ua/catalog/item/apple-iphone-14-pro-256-gb-space-black/',
    'https://www.istore.ua/catalog/item/apple-iphone-14-pro-256-gb-silver/',
    'https://www.istore.ua/catalog/item/apple-iphone-14-pro-256-gb-gold/',
  
    'https://www.istore.ua/catalog/item/apple-iphone-14-pro-512-gb-deep-purple/',
    'https://www.istore.ua/catalog/item/apple-iphone-14-pro-512-gb-space-black/',
    'https://www.istore.ua/catalog/item/apple-iphone-14-pro-512-gb-silver/',
    'https://www.istore.ua/catalog/item/apple-iphone-14-pro-512-gb-gold/',
  
    'https://www.istore.ua/catalog/item/apple-iphone-14-pro-1-tb-deep-purple/',
    'https://www.istore.ua/catalog/item/apple-iphone-14-pro-1-tb-space-black/',
    'https://www.istore.ua/catalog/item/apple-iphone-14-pro-1-tb-silver/',
    'https://www.istore.ua/catalog/item/apple-iphone-14-pro-1-tb-gold/'
  ];
  const arrLinkJabko14Pro = [
    'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-128gb--blue-',
    'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-128gb--graphite-',
    'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-128gb--silver-',
    'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-128gb--gold-',
  
    'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-256gb--blue-',
    'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-256gb--graphite-',
    'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-256gb--silver-',
    'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-256gb--gold-',
  
    'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-512gb--blue-',
    'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-512gb--graphite-',
    'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-512gb--silver-',
    'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-512gb--gold-',
  
    'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-1tb--blue-',
    'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-1tb--graphite-',
    'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-1tb--silver-',
    'https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-1tb--gold-'
  ];
  
  
  const arrLinkMobilePlanet14ProMax = [
    'https://mobileplanet.ua/apple-iphone-14-pro-max-128gb-deep-purple-mq9t3-254599',
    'https://mobileplanet.ua/apple-iphone-14-pro-max-128gb-space-black-mq9p3-254587',
    'https://mobileplanet.ua/apple-iphone-14-pro-max-128gb-silver-mq9q3-254591',
    'https://mobileplanet.ua/apple-iphone-14-pro-max-128gb-gold-mq9r3-254595',
  
    'https://mobileplanet.ua/apple-iphone-14-pro-max-256gb-deep-purple-mq9x3-254600',
    'https://mobileplanet.ua/apple-iphone-14-pro-max-256gb-space-black-mq9u3-254588',
    'https://mobileplanet.ua/apple-iphone-14-pro-max-256gb-silver-mq9v3-254592',
    'https://mobileplanet.ua/apple-iphone-14-pro-max-256gb-gold-mq9w3-254596',
  
    'https://mobileplanet.ua/apple-iphone-14-pro-max-512gb-deep-purple-mqam3-254601',
    'https://mobileplanet.ua/apple-iphone-14-pro-max-512gb-space-black-mqaf3-254589',
    'https://mobileplanet.ua/apple-iphone-14-pro-max-512gb-silver-mqah3-254593',
    'https://mobileplanet.ua/apple-iphone-14-pro-max-512gb-gold-mqaj3-254597',
  
    'https://mobileplanet.ua/apple-iphone-14-pro-max-1tb-deep-purple-mqc53-254602',
    'https://mobileplanet.ua/apple-iphone-14-pro-max-1tb-space-black-mqc23-254590',
    'https://mobileplanet.ua/apple-iphone-14-pro-max-1tb-silver-mqc33-254594',
    'https://mobileplanet.ua/apple-iphone-14-pro-max-1tb-gold-mqc43-254598'
  ];
  const arrLinkSkay14ProMax = [
    'https://skay.ua/uk/iphone-14-pro-max/58800-apple-iphone-14-pro-max-128gb-deep-purple.html',
    'https://skay.ua/uk/iphone-14-pro-max/58803-apple-iphone-14-pro-max-128gb-space-black.html',
    'https://skay.ua/uk/iphone-14-pro-max/58802-apple-iphone-14-pro-max-128gb-silver.html',
    'https://skay.ua/uk/iphone-14-pro-max/58801-apple-iphone-14-pro-max-128gb-gold.html',
  
    'https://skay.ua/uk/iphone-14-pro-max/58804-apple-iphone-14-pro-max-256gb-deep-purple.html',
    'https://skay.ua/uk/iphone-14-pro-max/58807-apple-iphone-14-pro-max-256gb-space-black.html',
    'https://skay.ua/uk/iphone-14-pro-max/58806-apple-iphone-14-pro-max-256gb-silver.html',
    'https://skay.ua/uk/iphone-14-pro-max/58805-apple-iphone-14-pro-max-256gb-gold.html',
  
    'https://skay.ua/uk/iphone-14-pro-max/58808-apple-iphone-14-pro-max-512gb-deep-purple.html',
    'https://skay.ua/uk/iphone-14-pro-max/58811-apple-iphone-14-pro-max-512gb-space-black.html',
    'https://skay.ua/uk/iphone-14-pro-max/58810-apple-iphone-14-pro-max-512gb-silver.html',
    'https://skay.ua/uk/iphone-14-pro-max/58809-apple-iphone-14-pro-max-512gb-gold.html',
  
    'https://skay.ua/uk/iphone-14-pro-max/58812-apple-iphone-14-pro-max-1tb-deep-purple.html',
    'https://skay.ua/uk/iphone-14-pro-max/58815-apple-iphone-14-pro-max-1tb-space-black.html',
    'https://skay.ua/uk/iphone-14-pro-max/58814-apple-iphone-14-pro-max-1tb-silver.html',
    'https://skay.ua/uk/iphone-14-pro-max/58813-apple-iphone-14-pro-max-1tb-gold.html'
  ];
  const arrLinkIstore14ProMax = [
    'https://www.istore.ua/catalog/item/apple-iphone-14-pro-max-128-gb-deep-purple/',
    'https://www.istore.ua/catalog/item/apple-iphone-14-pro-max-128-gb-space-black/',
    'https://www.istore.ua/catalog/item/apple-iphone-14-pro-max-128-gb-silver/',
    'https://www.istore.ua/catalog/item/apple-iphone-14-pro-max-128-gb-gold/',
  
    'https://www.istore.ua/catalog/item/apple-iphone-14-pro-max-256-gb-deep-purple/',
    'https://www.istore.ua/catalog/item/apple-iphone-14-pro-max-256-gb-space-black/',
    'https://www.istore.ua/catalog/item/apple-iphone-14-pro-max-256-gb-silver/',
    'https://www.istore.ua/catalog/item/apple-iphone-14-pro-max-256-gb-gold/',
  
    'https://www.istore.ua/catalog/item/apple-iphone-14-pro-max-512-gb-deep-purple/',
    'https://www.istore.ua/catalog/item/apple-iphone-14-pro-max-512-gb-space-black/',
    'https://www.istore.ua/catalog/item/apple-iphone-14-pro-max-512-gb-silver/',
    'https://www.istore.ua/catalog/item/apple-iphone-14-pro-max-512-gb-gold/',
  
    'https://www.istore.ua/catalog/item/apple-iphone-14-pro-max-1-tb-deep-purple/',
    'https://www.istore.ua/catalog/item/apple-iphone-14-pro-max-1-tb-space-black/',
    'https://www.istore.ua/catalog/item/apple-iphone-14-pro-max-1-tb-silver/',
    'https://www.istore.ua/catalog/item/apple-iphone-14-pro-max-1-tb-gold/'
  ];
  const arrLinkJabko14ProMax = [
    'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-128gb--blue-',
    'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-128gb--graphite-',
    'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-128gb--silver-',
    'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-128gb--gold-',
  
    'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-256gb--blue-',
    'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-256gb--graphite-',
    'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-256gb--silver-',
    'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-256gb--gold-',
  
    'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-512gb--blue-',
    'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-512gb--midnight-',
    'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-512gb--silver-',
    'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-512gb--gold-',
  
    'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-1tb--blue-',
    'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-1tb--graphite-',
    'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-1tb--silver-',
    'https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-1tb--gold-'
  ];






  const arrLinkMobilePlanet14ProESIM = [
    "https://mobileplanet.ua/apple-iphone-14-pro-128gb-esim-deep-purple-mq0e3-254677",
    "https://mobileplanet.ua/apple-iphone-14-pro-128gb-esim-space-black-mpxt3-254665",
    "https://mobileplanet.ua/apple-iphone-14-pro-128gb-esim-silver-mq003-254669",
    "https://mobileplanet.ua/apple-iphone-14-pro-128gb-esim-gold-mq063-254673",
  
    "https://mobileplanet.ua/apple-iphone-14-pro-256gb-esim-deep-purple-mq1d3-254678",
    "https://mobileplanet.ua/apple-iphone-14-pro-256gb-esim-space-black-mq0n3-254666",
    "https://mobileplanet.ua/apple-iphone-14-pro-256gb-esim-silver-mq0x3-254670",
    "https://mobileplanet.ua/apple-iphone-14-pro-256gb-esim-gold-mq163-254674",
  
    "https://mobileplanet.ua/apple-iphone-14-pro-512gb-esim-deep-purple-mq273-254679",
    "https://mobileplanet.ua/apple-iphone-14-pro-512gb-esim-space-black-mq1k3-254667",
    "https://mobileplanet.ua/apple-iphone-14-pro-512gb-esim-silver-mq1u3-254671",
    "https://mobileplanet.ua/apple-iphone-14-pro-512gb-esim-gold-mq213-254675",
  
    "https://mobileplanet.ua/apple-iphone-14-pro-1tb-esim-deep-purple-mq303-254680",
    "https://mobileplanet.ua/apple-iphone-14-pro-1tb-esim-space-black-mq2e3-254668",
    "https://mobileplanet.ua/apple-iphone-14-pro-1tb-esim-silver-mq2l3-254672",
    "https://mobileplanet.ua/apple-iphone-14-pro-1tb-esim-gold-mq2t3-254676"
  ];
  const arrLinkSkay14ProESIM = [
    "https://skay.ua/uk/iphone-14-pro/59589-apple-iphone-14-pro-128gb-esim-deep-purple.html",
    "https://skay.ua/uk/iphone-14-pro/59591-apple-iphone-14-pro-128gb-esim-space-black.html",
    "https://skay.ua/uk/iphone-14-pro/59625-apple-iphone-14-pro-128gb-esim-silver.html",
    "https://skay.ua/uk/iphone-14-pro/59242-apple-iphone-14-pro-128gb-esim-gold.html",
  
    "https://skay.ua/uk/iphone-14-pro/59450-apple-iphone-14-pro-256gb-esim-deep-purple.html",
    "https://skay.ua/uk/iphone-14-pro/59448-apple-iphone-14-pro-256gb-esim-space-black.html",
    "https://skay.ua/uk/iphone-14-pro/59449-apple-iphone-14-pro-256gb-esim-silver.html",
    "https://skay.ua/uk/iphone-14-pro/59243-apple-iphone-14-pro-256gb-esim-gold.html",
  
    "https://skay.ua/uk/iphone-14-pro/59475-apple-iphone-14-pro-512gb-esim-deep-purple.html",
    "https://skay.ua/uk/iphone-14-pro/59447-apple-iphone-14-pro-512gb-esim-space-black.html",
    "https://skay.ua/uk/iphone-14-pro/59703-apple-iphone-14-pro-512gb-esim-silver.html",
    "https://skay.ua/uk/iphone-14-pro/59446-apple-iphone-14-pro-512gb-esim-gold.html",
  
    "https://skay.ua/uk/iphone-14-pro/59590-apple-iphone-14-pro-1tb-esim-deep-purple.html",
    "https://skay.ua/uk/iphone-14-pro/59592-apple-iphone-14-pro-1tb-esim-space-black.html",
    "https://skay.ua/uk/iphone-14-pro/59813-apple-iphone-14-pro-1tb-esim-silver.html",
    "https://skay.ua/uk/iphone-14-pro/59812-apple-iphone-14-pro-1tb-esim-gold.html"
  ];
  const arrLinkIstore14ProESIM = [
    "https://www.istore.ua/ua/item/apple-iphone-14-pro-128-gb-esim-deep-purple/",
    "https://www.istore.ua/ua/item/apple-iphone-14-pro-128-gb-esim-space-black/",
    "https://www.istore.ua/ua/item/apple-iphone-14-pro-128-gb-esim-silver/",
    "https://www.istore.ua/ua/item/apple-iphone-14-pro-128-gb-esim-gold/",
  
    "https://www.istore.ua/ua/item/apple-iphone-14-pro-256-gb-esim-deep-purple/",
    "https://www.istore.ua/ua/item/apple-iphone-14-pro-256-gb-esim-space-black/",
    "https://www.istore.ua/ua/item/apple-iphone-14-pro-256-gb-esim-silver/",
    "https://www.istore.ua/ua/item/apple-iphone-14-pro-256-gb-esim-gold/",
  
    "https://www.istore.ua/ua/item/apple-iphone-14-pro-512-gb-esim-deep-purple/",
    "https://www.istore.ua/ua/item/apple-iphone-14-pro-512-gb-esim-space-black/",
    "https://www.istore.ua/ua/item/apple-iphone-14-pro-512-gb-esim-silver/",
    "https://www.istore.ua/ua/item/apple-iphone-14-pro-512-gb-esim-gold/",
  
    "https://www.istore.ua/ua/item/apple-iphone-14-pro-1-tb-esim-deep-purple/",
    "https://www.istore.ua/ua/item/apple-iphone-14-pro-1-tb-esim-space-black/",
    "https://www.istore.ua/ua/item/apple-iphone-14-pro-1-tb-esim-silver/",
    "https://www.istore.ua/ua/item/apple-iphone-14-pro-1-tb-esim-gold/"
  ];
  const arrLinkJabko14ProESIM = [
    "https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-128gb--deep-purple---e-sim-",
    "https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-128gb--space-black---e-sim-",
    "https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-128gb--silver---e-sim-",
    "https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-128gb--gold---e-sim-",
  
    "https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-256gb--deep-purple---e-sim-",
    "https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-256gb--space-black---e-sim-",
    "https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-256gb--silver---e-sim-",
    "https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-256gb--gold---e-sim-",
  
    "https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-512gb--deep-purple---e-sim-",
    "https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-512gb--space-black---e-sim-",
    "https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-512gb--silver---e-sim-",
    "https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-512gb--gold---e-sim-",
  
    "https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-1tb--deep-purple---e-sim-",
    "https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-1tb--space-black---e-sim-",
    "https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-1tb--silver---e-sim-",
    "https://jabko.ua/rus/iphone/apple-iphone-14-pro/apple-iphone-14-pro-1tb--gold---e-sim-"
  ];
  
  const arrLinkMobilePlanet14ProMaxESIM = [
    "https://mobileplanet.ua/apple-iphone-14-pro-max-128gb-esim-deep-purple-mq8-254661",
    "https://mobileplanet.ua/apple-iphone-14-pro-max-128gb-esim-space-black-mq8-254649",
    "https://mobileplanet.ua/apple-iphone-14-pro-max-128gb-esim-silver-mq8p3-254653",
    "https://mobileplanet.ua/apple-iphone-14-pro-max-128gb-esim-gold-mq8q3-254657",
  
    "https://mobileplanet.ua/apple-iphone-14-pro-max-256gb-esim-deep-purple-mq8-254662",
    "https://mobileplanet.ua/apple-iphone-14-pro-max-256gb-esim-space-black-mq8-254650",
    "https://mobileplanet.ua/apple-iphone-14-pro-max-256gb-esim-silver-mq8u3-254654",
    "https://mobileplanet.ua/apple-iphone-14-pro-max-256gb-esim-gold-mq8v3-254658",
  
    "https://mobileplanet.ua/apple-iphone-14-pro-max-512gb-esim-deep-purple-mq9-254663",
    "https://mobileplanet.ua/apple-iphone-14-pro-max-512gb-esim-space-black-mq8-254651",
    "https://mobileplanet.ua/apple-iphone-14-pro-max-512gb-esim-silver-mq8y3-254655",
    "https://mobileplanet.ua/apple-iphone-14-pro-max-512gb-esim-gold-mq903-254659",
  
    "https://mobileplanet.ua/apple-iphone-14-pro-max-1tb-esim-deep-purple-mq953-254664",
    "https://mobileplanet.ua/apple-iphone-14-pro-max-1tb-esim-space-black-mq923-254652",
    "https://mobileplanet.ua/apple-iphone-14-pro-max-1tb-esim-silver-mq933-254656",
    "https://mobileplanet.ua/apple-iphone-14-pro-max-1tb-esim-gold-mq943-254660"
  ];
  const arrLinkSkay14ProMaxESIM = [
    "https://skay.ua/uk/iphone-14-pro-max/59399-apple-iphone-14-pro-max-128gb-esim-deep-purple.html",
    "https://skay.ua/uk/iphone-14-pro-max/59442-apple-iphone-14-pro-max-128gb-esim-space-black.html",
    "https://skay.ua/uk/iphone-14-pro-max/59445-apple-iphone-14-pro-max-128gb-esim-silver.html",
    "https://skay.ua/uk/iphone-14-pro-max/59441-apple-iphone-14-pro-max-128gb-esim-gold.html",
  
    "https://skay.ua/uk/iphone-14-pro-max/59139-apple-iphone-14-pro-max-256gb-esim-deep-purple.html",
    "https://skay.ua/uk/iphone-14-pro-max/59443-apple-iphone-14-pro-max-256gb-esim-space-black.html",
    "https://skay.ua/uk/iphone-14-pro-max/59444-apple-iphone-14-pro-max-256gb-esim-silver.html",
    "https://skay.ua/uk/iphone-14-pro-max/59244-apple-iphone-14-pro-max-256gb-esim-gold.html",
  
    "https://skay.ua/uk/iphone-14-pro-max/59140-apple-iphone-14-pro-max-512gb-esim-deep-purple.html",
    "https://skay.ua/uk/iphone-14-pro-max/59119-apple-iphone-14-pro-max-512gb-esim-space-black.html",
    "https://skay.ua/uk/iphone-14-pro-max/59603-apple-iphone-14-pro-max-512gb-esim-silver.html",
    "https://skay.ua/uk/iphone-14-pro-max/59440-apple-iphone-14-pro-max-512gb-esim-gold.html",
  
    "https://skay.ua/uk/iphone-14-pro-max/59476-apple-iphone-14-pro-max-1tb-esim-deep-purple.html",
    "https://skay.ua/uk/iphone-14-pro-max/59605-apple-iphone-14-pro-max-1tb-esim-space-black.html",
    "https://skay.ua/uk/iphone-14-pro-max/59602-apple-iphone-14-pro-max-1tb-esim-silver.html",
    "https://skay.ua/uk/iphone-14-pro-max/59604-apple-iphone-14-pro-max-1tb-esim-gold.html"
  ];
  const arrLinkIstore14ProMaxESIM = [
    "https://www.istore.ua/ua/item/apple-iphone-14-pro-max-128-gb-esim-deep-purple/",
    "https://www.istore.ua/ua/item/apple-iphone-14-pro-max-128-gb-esim-space-black/",
    "https://www.istore.ua/ua/item/apple-iphone-14-pro-max-128-gb-esim-silver/",
    "https://www.istore.ua/ua/item/apple-iphone-14-pro-max-128-gb-esim-gold/",
  
    "https://www.istore.ua/ua/item/apple-iphone-14-pro-max-256-gb-esim-deep-purple/",
    "https://www.istore.ua/ua/item/apple-iphone-14-pro-max-256-gb-esim-space-black/",
    "https://www.istore.ua/ua/item/apple-iphone-14-pro-max-256-gb-esim-silver/",
    "https://www.istore.ua/ua/item/apple-iphone-14-pro-max-256-gb-esim-gold/",
  
    "https://www.istore.ua/ua/item/apple-iphone-14-pro-max-512-gb-esim-deep-purple/",
    "https://www.istore.ua/ua/item/apple-iphone-14-pro-max-512-gb-esim-space-black/",
    "https://www.istore.ua/ua/item/apple-iphone-14-pro-max-512gb-esim-silver/",
    "https://www.istore.ua/ua/item/apple-iphone-14-pro-max-512gb-esim-gold/",
  
    "https://www.istore.ua/ua/item/apple-iphone-14-pro-max-1-tb-esim-deep-purple/",
    "https://www.istore.ua/ua/item/apple-iphone-14-pro-max-1-tb-esim-space-black/",
    "https://www.istore.ua/ua/item/apple-iphone-14-pro-max-1-tb-esim-silver/",
    "https://www.istore.ua/ua/item/apple-iphone-14-pro-max-1-tb-esim-gold/"
  ];
  const arrLinkJabko14ProMaxESIM = [
    "https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-128gb--deep-purple---e-sim-",
    "https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-128gb--space-black---e-sim-",
    "https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-128gb--silver---e-sim-",
    "https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-128gb--gold---e-sim-",
  
    "https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-256gb--deep-purple---e-sim-",
    "https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-256gb--space-black---e-sim-",
    "https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-256gb--silver---e-sim-",
    "https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-256gb--gold---e-sim-",
  
    "https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-512gb--deep-purple---e-sim-",
    "https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-512gb--space-black---e-sim-",
    "https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-512gb--silver---e-sim-",
    "https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-512gb--gold---e-sim-",
  
    "https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-1tb--deep-purple---e-sim-",
    "https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-1tb--space-black---e-sim-",
    "https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-1tb--silver---e-sim-",
    "https://jabko.ua/rus/iphone/apple-iphone-14-pro-max/apple-iphone-14-pro-max-1tb--gold---e-sim-"
  ];
  
  const arrLinkMobilePlanet13and12 = [
    "https://mobileplanet.ua/apple-iphone-13-128gb-black-228320",
    "https://mobileplanet.ua/apple-iphone-13-128gb-srarlight-228326",
    "https://mobileplanet.ua/apple-iphone-13-128gb-pink-228332",
    "https://mobileplanet.ua/apple-iphone-13-128gb-blue-228329",
    "https://mobileplanet.ua/apple-iphone-13-128gb-green-mngd3-250774",
    "https://mobileplanet.ua/apple-iphone-13-128gb-product-red-228323",
  
    "https://mobileplanet.ua/apple-iphone-13-256gb-black-228321",
    "https://mobileplanet.ua/apple-iphone-13-256gb-srarlight-228327",
    "https://mobileplanet.ua/apple-iphone-13-256gb-pink-228333",
    "https://mobileplanet.ua/apple-iphone-13-256gb-blue-228330",
    "https://mobileplanet.ua/apple-iphone-13-256gb-green-mnge3-250775",
    "https://mobileplanet.ua/apple-iphone-13-256gb-product-red-228324",
  
    "https://mobileplanet.ua/apple-iphone-11-64gb-white-mwl82-slim-bo-203339",
    "https://mobileplanet.ua/apple-iphone-11-64gb-black-mhda3-slim-bo-197828",
    "https://mobileplanet.ua/apple-iphone-11-128gb-white-mhdj3-slim-b-197635",
    "https://mobileplanet.ua/apple-iphone-11-128gb-black-mhdh3-slim-b-196053",
  ];
  const arrLinkSkay13and12 = [
    "https://skay.ua/uk/iphone-13/53786-apple-iphone-13-128gb-midnight.html",
    "https://skay.ua/uk/iphone-13/53787-apple-iphone-13-128gb-starlight.html",
    "https://skay.ua/uk/iphone-13/53784-apple-iphone-13-128gb-pink.html",
    "https://skay.ua/uk/iphone-13/53785-apple-iphone-13-128gb-blue.html",
    "https://skay.ua/uk/iphone-13/57615-apple-iphone-13-128gb-green.html",
  
    "https://skay.ua/uk/iphone-13/53791-apple-iphone-13-256gb-midnight.html",
    "https://skay.ua/uk/iphone-13/53789-apple-iphone-13-256gb-pink.html",
    "https://skay.ua/uk/iphone-13/53790-apple-iphone-13-256gb-blue.html",
    "https://skay.ua/uk/iphone-13/57616-apple-iphone-13-256gb-green.html",
  
    "https://skay.ua/uk/iphone-11/32841-apple-iphone-11-128gb-white.html",
    "https://skay.ua/uk/iphone-11/32840-apple-iphone-11-128gb-black.html",
  ];
  const arrLinkIstore13and12 = [
    "https://www.istore.ua/catalog/item/apple-iphone-13-128-gb-midnight/",
    "https://www.istore.ua/catalog/item/apple-iphone-13-128-gb-starlight/",
    "https://www.istore.ua/catalog/item/apple-iphone-13-128-gb-pink/",
    "https://www.istore.ua/catalog/item/apple-iphone-13-128-gb-blue/",
    "https://www.istore.ua/catalog/item/apple-iphone-13-128-gb-green/",
    "https://www.istore.ua/catalog/item/apple-iphone-13-128-gb-red/",
  
    "https://www.istore.ua/catalog/item/apple-iphone-13-256-gb-midnight/",
    "https://www.istore.ua/catalog/item/apple-iphone-13-256-gb-starlight/",
    "https://www.istore.ua/catalog/item/apple-iphone-13-256-gb-pink/",
    "https://www.istore.ua/catalog/item/apple-iphone-13-256-gb-blue/",
    "https://www.istore.ua/catalog/item/apple-iphone-13-256-gb-green/",
    "https://www.istore.ua/catalog/item/apple-iphone-13-256-gb-red/",
  
    "https://www.istore.ua/catalog/item/apple-iphone-11-mwl82/",
    "https://www.istore.ua/catalog/item/apple-iphone-11-mwlt2/",
    "https://www.istore.ua/catalog/item/apple-iphone-11-mwlf2/",
    "https://www.istore.ua/catalog/item/apple-iphone-11-mwle2/",
  ];
  const arrLinkJabko13and12 = [
    "https://jabko.ua/rus/iphone/apple-iphone-13/apple-iphone-13-128gb-midnight",
    "https://jabko.ua/rus/iphone/apple-iphone-13/apple-iphone-13-128gb--starlight-",
    "https://jabko.ua/rus/iphone/apple-iphone-13/apple-iphone-13-128gb--pink-",
    "https://jabko.ua/rus/iphone/apple-iphone-13/apple-iphone-13-128gb--blue-",
    "https://jabko.ua/rus/iphone/apple-iphone-13/apple-iphone-13-128gb--green-",
    "https://jabko.ua/rus/iphone/apple-iphone-13/apple-iphone-13-128gb--product-red-",
  
    "https://jabko.ua/rus/iphone/apple-iphone-13/apple-iphone-13-256gb--black-",
    "https://jabko.ua/rus/iphone/apple-iphone-13/apple-iphone-13-256gb--starlight-",
    "https://jabko.ua/rus/iphone/apple-iphone-13/apple-iphone-13-256gb--pink-",
    "https://jabko.ua/rus/iphone/apple-iphone-13/apple-iphone-13-256gb--blue-",
    "https://jabko.ua/rus/iphone/apple-iphone-13/apple-iphone-13-256gb--green-",
    "https://jabko.ua/rus/iphone/apple-iphone-13/apple-iphone-13-256gb--product-red",
  
    "https://jabko.ua/rus/iphone/iphone-11/iphone-11-64gb--white---slim-box-",
    "https://jabko.ua/rus/iphone/iphone-11/iphone-11-64gb--black---slim-box-",
    "https://jabko.ua/rus/iphone/iphone-11/iphone-11-128gb--white---slim-box-",
    "https://jabko.ua/rus/iphone/iphone-11/iphone-11-128gb--black---slim-box-",
  ];


  const arrLinkJabko15ProAndProMax = [
    'https://jabko.ua/iphone/apple-iphone-15-pro/apple-iphone-15-pro-128gb-blue-titanium',
    'https://jabko.ua/iphone/apple-iphone-15-pro/apple-iphone-15-pro-128gb-black-titanium',
    'https://jabko.ua/iphone/apple-iphone-15-pro/apple-iphone-15-pro-128gb-natural-titanium',
    'https://jabko.ua/iphone/apple-iphone-15-pro/apple-iphone-15-pro-128gb-white-titanium',
    
    'https://jabko.ua/iphone/apple-iphone-15-pro/apple-iphone-15-pro-256gb-blue-titanium',
    'https://jabko.ua/iphone/apple-iphone-15-pro/apple-iphone-15-pro-256gb-black-titanium',
    'https://jabko.ua/iphone/apple-iphone-15-pro/apple-iphone-15-pro-256gb-natural-titanium',
    'https://jabko.ua/iphone/apple-iphone-15-pro/apple-iphone-15-pro-256gb-white-titanium',
    
    'https://jabko.ua/iphone/apple-iphone-15-pro/apple-iphone-15-pro-512gb-dark-blue-',
    'https://jabko.ua/iphone/apple-iphone-15-pro/apple-iphone-15-pro-512gb--midnight-',
    'https://jabko.ua/iphone/apple-iphone-15-pro/apple-iphone-15-pro-512gb--silver-',
    'https://jabko.ua/iphone/apple-iphone-15-pro/apple-iphone-15-pro-512gb-titan-gray',
    
    'https://jabko.ua/iphone/apple-iphone-15-pro/apple-iphone-15-pro-1tb-dark-blue-',
    'https://jabko.ua/iphone/apple-iphone-15-pro/apple-iphone-15-pro-1tb--midnight-',
    'https://jabko.ua/iphone/apple-iphone-15-pro/apple-iphone-15-pro-1tb--silver-',
    'https://jabko.ua/iphone/apple-iphone-15-pro/apple-iphone-15-pro-1tb-titan-gray-',
    
    
    'https://jabko.ua/iphone/apple-iphone-15-pro-max/apple-iphone-15-pro-max-256gb-blue-titanium',
    'https://jabko.ua/iphone/apple-iphone-15-pro-max/apple-iphone-15-pro-max-256gb-black-titanium',
    'https://jabko.ua/iphone/apple-iphone-15-pro-max/apple-iphone-15-pro-max-256gb-natural-titanium',
    'https://jabko.ua/iphone/apple-iphone-15-pro-max/apple-iphone-15-pro-max-256gb-white-titanium',
    
    'https://jabko.ua/iphone/apple-iphone-15-pro-max/apple-iphone-15-pro-max-512gb-blue-titanium',
    'https://jabko.ua/iphone/apple-iphone-15-pro-max/apple-iphone-15-pro-max-512gb-black-titanium',
    'https://jabko.ua/iphone/apple-iphone-15-pro-max/apple-iphone-15-pro-max-512gb-natural-titanium',
    'https://jabko.ua/iphone/apple-iphone-15-pro-max/apple-iphone-15-pro-max-512gb-white-titanium',
    
    'https://jabko.ua/iphone/apple-iphone-15-pro-max/apple-iphone-15-pro-max-1tb-blue-titanium',
    'https://jabko.ua/iphone/apple-iphone-15-pro-max/apple-iphone-15-pro-max-1tb-black-titanium',
    'https://jabko.ua/iphone/apple-iphone-15-pro-max/apple-iphone-15-pro-max-1tb-natural-titanium',
    'https://jabko.ua/iphone/apple-iphone-15-pro-max/apple-iphone-15-pro-max-1tb-white-titanium'
    ]
    const arrLinkJabko15 = [
    'https://jabko.ua/iphone/apple-iphone-15-/apple-iphone-15-128gb--black-',
    'https://jabko.ua/iphone/apple-iphone-15-/apple-iphone-15-128gb--blue-',
    'https://jabko.ua/iphone/apple-iphone-15-/apple-iphone-15-128gb--green-',
    'https://jabko.ua/iphone/apple-iphone-15-/apple-iphone-15-128gb--pink-',
    'https://jabko.ua/iphone/apple-iphone-15-/apple-iphone-15-128gb--yellow-',
    
    'https://jabko.ua/iphone/apple-iphone-15-/apple-iphone-15-256gb-black',
    'https://jabko.ua/iphone/apple-iphone-15-/apple-iphone-15-256gb--blue-',
    'https://jabko.ua/iphone/apple-iphone-15-/apple-iphone-15-256gb-green',
    'https://jabko.ua/iphone/apple-iphone-15-/apple-iphone-15-256gb--pink-',
    'https://jabko.ua/iphone/apple-iphone-15-/apple-iphone-15-256gb-yellow'
    ]
    const arrLinkMobilePlanet15ProAndProMax = [
    'https://mobileplanet.ua/apple-iphone-15-pro-128gb-blue-titanium-mtv03-285400',
    'https://mobileplanet.ua/apple-iphone-15-pro-128gb-black-titanium-mtuv3-285399',
    'https://mobileplanet.ua/apple-iphone-15-pro-128gb-natural-titanium-mtux3-285401',
    'https://mobileplanet.ua/apple-iphone-15-pro-128gb-white-titanium-mtuw3-285402',
    
    'https://mobileplanet.ua/apple-iphone-15-pro-256gb-blue-titanium-mtv63-285408',
    'https://mobileplanet.ua/apple-iphone-15-pro-256gb-black-titanium-mtv13-285407',
    'https://mobileplanet.ua/apple-iphone-15-pro-256gb-natural-titanium-mtv53-285409',
    'https://mobileplanet.ua/apple-iphone-15-pro-256gb-white-titanium-mtv43-285410',
    
    'https://mobileplanet.ua/apple-iphone-15-pro-512gb-blue-titanium-mtva3-285412',
    'https://mobileplanet.ua/apple-iphone-15-pro-512gb-black-titanium-mtv73-285411',
    'https://mobileplanet.ua/apple-iphone-15-pro-512gb-natural-titanium-mtv93-285413',
    'https://mobileplanet.ua/apple-iphone-15-pro-512gb-white-titanium-mtv83-285414',
    
    'https://mobileplanet.ua/apple-iphone-15-pro-1tb-blue-titanium-mtvg3-285404',
    'https://mobileplanet.ua/apple-iphone-15-pro-1tb-black-titanium-mtvc3-285403',
    'https://mobileplanet.ua/apple-iphone-15-pro-1tb-natural-titanium-mtvf3-285405',
    'https://mobileplanet.ua/apple-iphone-15-pro-1tb-white-titanium-mtvd3-285406',
    
    
    
    'https://mobileplanet.ua/apple-iphone-15-pro-max-256gb-blue-titanium-mu7a3-285393',
    'https://mobileplanet.ua/apple-iphone-15-pro-max-256gb-black-titanium-mu773-285394',
    'https://mobileplanet.ua/apple-iphone-15-pro-max-256gb-natural-titanium-mu7-285392',
    'https://mobileplanet.ua/apple-iphone-15-pro-max-256gb-white-titanium-mu783-285391',
    
    'https://mobileplanet.ua/apple-iphone-15-pro-max-512gb-blue-titanium-mu7f3-285389',
    'https://mobileplanet.ua/apple-iphone-15-pro-max-512gb-black-titanium-mu7c3-285390',
    'https://mobileplanet.ua/apple-iphone-15-pro-max-512gb-natural-titanium-mu7-285388',
    'https://mobileplanet.ua/apple-iphone-15-pro-max-512gb-white-titanium-mu7d3-285387',
    
    'https://mobileplanet.ua/apple-iphone-15-pro-max-1tb-blue-titanium-mu7k3-285397',
    'https://mobileplanet.ua/apple-iphone-15-pro-max-1tb-black-titanium-mu7g3-285398',
    'https://mobileplanet.ua/apple-iphone-15-pro-max-1tb-natural-titanium-mu7j3-285396',
    'https://mobileplanet.ua/apple-iphone-15-pro-max-1tb-white-titanium-mu7h3-285395'
    ]
    const arrLinkMobilePlanet15 = [
    'https://mobileplanet.ua/apple-iphone-15-128gb-black-mtp03-285371',
    'https://mobileplanet.ua/apple-iphone-15-128gb-blue-mtp43-285370',
    'https://mobileplanet.ua/apple-iphone-15-128gb-green-mtp53-285369',
    'https://mobileplanet.ua/apple-iphone-15-128gb-pink-mtp13-285368',
    'https://mobileplanet.ua/apple-iphone-15-128gb-yellow-mtp23-285367',
    
    'https://mobileplanet.ua/apple-iphone-15-256gb-black-mtp63-285366',
    'https://mobileplanet.ua/apple-iphone-15-256gb-blue-mtp93-285365',
    'https://mobileplanet.ua/apple-iphone-15-256gb-green-mtpa3-285364',
    'https://mobileplanet.ua/apple-iphone-15-256gb-pink-mtp73-285363',
    'https://mobileplanet.ua/apple-iphone-15-256gb-yellow-mtp83-285362'
    ]
    const arrLinkIstore15ProAndProMax = [
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-128-gb-blue-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-128-gb-space-black/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-128-gb-natural-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-128-gb-white-titanium/',
    
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-256-gb-blue-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-256-gb-black-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-256-gb-natural-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-256-gb-white-titanium/',
    
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-512-gb-blue-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-512-gb-black-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-512-gb-natural-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-512-gb-white-titanium/',
    
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-1-tb-blue-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-1-tb-black-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-1-tb-natural-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-1-tb-white-titanium/',
    
    
    
    
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-max-256-gb-blue-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-max-256-gb-black-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-max-256-gb-natural-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-max-256-gb-white-titanium/',
    
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-max-512-gb-blue-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-max-512-gb-black-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-max-512-gb-natural-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-max-512-gb-white-titanium/',
    
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-max-1-tb-blue-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-max-1-tb-black-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-max-1-tb-natural-titanium/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-pro-max-1-tb-white-titanium/'
    ]
    const arrLinkIstore15 = [
    'https://www.istore.ua/catalog/item/apple-iphone-15-128-gb-black/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-128-gb-blue/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-128-gb-green/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-128-gb-pink/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-128-gb-yellow/',
    
    'https://www.istore.ua/catalog/item/apple-iphone-15-256-gb-black/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-256-gb-blue/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-256-gb-green/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-256-gb-pink/',
    'https://www.istore.ua/catalog/item/apple-iphone-15-256-gb-yellow/'
    ]
    const arrLinkEstore15ProAndProMax = [
    'https://estore.ua/ua/iphone-15-pro-128gb-blue-titanium/',
    'https://estore.ua/ua/iphone-15-pro-128gb-black-titanium/',
    'https://estore.ua/ua/iphone-15-pro-128gb-natural-titanium/',
    'https://estore.ua/ua/iphone-15-pro-128gb-white-titanium/',
    
    'https://estore.ua/ua/iphone-15-pro-256gb-blue-titanium/',
    'https://estore.ua/ua/iphone-15-pro-256gb-black-titanium/',
    'https://estore.ua/ua/iphone-15-pro-256gb-natural-titanium/',
    'https://estore.ua/ua/iphone-15-pro-256gb-white-titanium/',
    
    'https://estore.ua/ua/iphone-15-pro-512gb-blue-titanium/',
    'https://estore.ua/ua/iphone-15-pro-512gb-black-titanium/',
    'https://estore.ua/ua/iphone-15-pro-512gb-natural-titanium/',
    'https://estore.ua/ua/iphone-15-pro-512gb-white-titanium/',
    
    'https://estore.ua/ua/iphone-15-pro-1tb-blue-titanium/',
    'https://estore.ua/ua/iphone-15-pro-1tb-space-black/',
    'https://estore.ua/ua/iphone-15-pro-1tb-natural-titanium/',
    'https://estore.ua/ua/iphone-15-pro-1tb-white-titanium/',
    
    
    
    
    
    'https://estore.ua/ua/iphone-15-pro-max-256gb-blue-titanium/',
    'https://estore.ua/ua/iphone-15-pro-max-256gb-black-titanium/',
    'https://estore.ua/ua/iphone-15-pro-max-256gb-natural-titanium/',
    'https://estore.ua/ua/iphone-15-pro-max-256gb-white-titanium/',
    
    'https://estore.ua/ua/iphone-15-pro-max-512gb-blue-titanium/',
    'https://estore.ua/ua/iphone-15-pro-max-512gb-black-titanium/',
    'https://estore.ua/ua/iphone-15-pro-max-512gb-natural-titanium/',
    'https://estore.ua/ua/iphone-15-pro-max-512gb-white-titanium/',
    
    'https://estore.ua/ua/iphone-15-pro-max-1tb-blue-titanium/',
    'https://estore.ua/ua/iphone-15-pro-max-1tb-black-titanium/',
    'https://estore.ua/ua/iphone-15-pro-max-1tb-natural-titanium/',
    'https://estore.ua/ua/iphone-15-pro-max-1tb-white-titanium/'
    ]
    const arrLinkEstore15 = [
    'https://estore.ua/ua/iphone-15-128gb-midnight/',
    'https://estore.ua/ua/iphone-15-128gb-blue/',
    'https://estore.ua/ua/iphone-15-128gb-green/',
    'https://estore.ua/ua/iphone-15-128gb-pink/',
    'https://estore.ua/ua/iphone-15-128gb-yellow/',
    
    'https://estore.ua/ua/iphone-15-256gb-midnight/',
    'https://estore.ua/ua/iphone-15-256gb-blue/',
    'https://estore.ua/ua/iphone-15-256gb-green/',
    'https://estore.ua/ua/iphone-15-256gb-pink/',
    'https://estore.ua/ua/iphone-15-256gb-yellow/'
    ]



    const arrLinkGro14andPlus = [
      'https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-128gb-starlight-mpur3/',
      'https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-128gb-product-red-mpva3/',
      'https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-128gb-purple-mpv03/',
      'https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-128gb-blue-mpvn3/',
      'https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-128gb-midnight-mpuf3/',
      'https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-128gb-yellow-mr3x3/',
      
      'https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-256gb-starlight-mpw43/',
      'https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-256gb-product-red-mpwh3/',
      'https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-256gb-purple-mpwa3/',
      'https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-256gb-blue-mpwp3/',
      'https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-256gb-midnight-mpvx3/',
      'https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-256gb-yellow-mr3y3/',
      
      'https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-512gb-starlight-mpx33/',
      'https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-512gb-product-red-mpxg3/',
      'https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-512gb-purple-mpx93/',
      'https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-512gb-blue-mpxn3/',
      'https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-512gb-midnight-mpww3/',
      'https://grokholsky.com/product/apple/iphone/iphone-14/iphone-14-512gb-yellow-mr513/',
      
      
      'https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-128gb-starlight-mq4y3/',
      'https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-128gb-product-red-mq513/',
      'https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-128gb-purple-mq503/',
      'https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-128gb-blue-mq523/',
      'https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-128gb-midnight-mq4x3/',
      'https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-128gb-yellow-mr693/',
      
      'https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-256gb-starlight-mq553/',
      'https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-256gb-product-red-mq573/',
      'https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-256gb-purple-mq563/',
      'https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-256gb-blue-mq583/',
      'https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-256gb-midnight-mq533/',
      'https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-256gb-yellow-mr6d3/',
      
      'https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-512gb-starlight-mq5d3/',
      'https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-512gb-product-red-mq5f3/',
      'https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-512gb-purple-mq5e3/',
      'https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-512gb-blue-mq5g3/',
      'https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-512gb-midnight-mq593/',
      'https://grokholsky.com/product/apple/iphone/iphone-14-plus/iphone-14-plus-512gb-yellow-mr6g3/'
      ];
      const arrLinkGro14ProAndMax = [
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
      'https://grokholsky.com/product/apple/iphone/iphone-14-pro/iphone-14-pro-1tb-gold-mq2v3/',
      
      
      
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
      const arrLinkGro14ProAndMaxEsim = [
        'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro/iphone-14-pro-128gb-esim-deep-purple-mq0e3/',
        'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro/iphone-14-pro-128gb-esim-space-black-mpxt3/',
        'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro/iphone-14-pro-128gb-esim-silver-mq003/',
        'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro/iphone-14-pro-128gb-esim-gold-mq063/',
        
        'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro/iphone-14-pro-256gb-esim-deep-purple-mq1d3/',
        'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro/iphone-14-pro-256gb-esim-space-black-mq0n3/',
        'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro/iphone-14-pro-256gb-esim-silver-mq0x3/',
        'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro/iphone-14-pro-256gb-esim-gold-mq163/',
        
        'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro/iphone-14-pro-512gb-esim-deep-purple-mq273/',
        'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro/iphone-14-pro-512gb-esim-space-black-mq1k3/',
        'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro/iphone-14-pro-512gb-esim-silver-mq1u3/',
        'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro/iphone-14-pro-512gb-esim-gold-mq213/',
        
        'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro/iphone-14-pro-1tb-esim-deep-purple-mq303/',
        'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro/iphone-14-pro-1tb-esim-space-black-mq2e3/',
        'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro/iphone-14-pro-1tb-esim-silver-mq2l3/',
        'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro/iphone-14-pro-1tb-esim-gold-mq2t3/',
      
      
      
        'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-128gb-esim-deep-purple-mq8r3/',
        'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-128gb-esim-space-black-mq8n3/',
        'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-128gb-esim-silver-mq8p3/',
        'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-128gb-esim-gold-mq8q3/',
        
        'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-256gb-esim-deep-purple-mq8w3/',
        'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-256gb-esim-space-black-mq8t3/',
        'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-256gb-esim-silver-mq8u3/',
        'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-256gb-esim-gold-mq8v3/',
        
        'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-512gb-esim-deep-purple-mq913/',
        'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-512gb-esim-space-black-mq8x3/',
        'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-512gb-esim-silver-mq8y3/',
        'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-512gb-esim-gold-mq903/',
        
        'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-1tb-esim-deep-purple-mq953/',
        'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-1tb-esim-space-black-mq923/',
        'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-1tb-esim-silver-mq933/',
        'https://grokholsky.com/ua/product/apple/iphone/iphone-14-pro-max/iphone-14-pro-max-1tb-esim-gold-mq943/'
      ];
      const arrLinkGro15ProAndMax = [
      'https://grokholsky.com/product/apple/iphone/iphone-15-pro/iphone-15-pro-128gb-blue-titanium-mtv03/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-pro/iphone-15-pro-128gb-black-titanium-mtuv3/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-pro/iphone-15-pro-128gb-natural-titanium-mtux3/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-pro/iphone-15-pro-128gb-white-titanium-mtuw3/',
      
      'https://grokholsky.com/product/apple/iphone/iphone-15-pro/iphone-15-pro-256gb-blue-titanium-mtv63/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-pro/iphone-15-pro-256gb-black-titanium-mtv13/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-pro/iphone-15-pro-256gb-natural-titanium-mtv53/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-pro/iphone-15-pro-256gb-white-titanium-mtv43/',
      
      'https://grokholsky.com/product/apple/iphone/iphone-15-pro/iphone-15-pro-512gb-blue-titanium-mtva3/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-pro/iphone-15-pro-512gb-black-titanium-mtv73/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-pro/iphone-15-pro-512gb-natural-titanium-mtv93/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-pro/iphone-15-pro-512gb-white-titanium-mtv83/',
      
      'https://grokholsky.com/product/apple/iphone/iphone-15-pro/iphone-15-pro-1tb-blue-titanium-mtvg3/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-pro/iphone-15-pro-1tb-black-titanium-mtvc3/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-pro/iphone-15-pro-1tb-natural-titanium-mtvf3/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-pro/iphone-15-pro-1tb-white-titanium-mtvd3/',
      
      
      
      'https://grokholsky.com/product/apple/iphone/iphone-15-pro-max/iphone-15-pro-max-256gb-blue-titanium-mu7a3/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-pro-max/iphone-15-pro-max-256gb-black-titanium-mu773/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-pro-max/iphone-15-pro-max-256gb-natural-titanium-mu793/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-pro-max/iphone-15-pro-max-256gb-white-titanium-mu783/',
      
      'https://grokholsky.com/product/apple/iphone/iphone-15-pro-max/iphone-15-pro-max-512gb-blue-titanium-mu7f3/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-pro-max/iphone-15-pro-max-512gb-black-titanium-mu7c3/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-pro-max/iphone-15-pro-max-512gb-natural-titanium-mu7e3/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-pro-max/iphone-15-pro-max-512gb-white-titanium-mu7d3/',
      
      'https://grokholsky.com/product/apple/iphone/iphone-15-pro-max/iphone-15-pro-max-1tb-blue-titanium-mu7k3/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-pro-max/iphone-15-pro-max-1tb-black-titanium-mu7g3/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-pro-max/iphone-15-pro-max-1tb-natural-titanium-mu7j3/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-pro-max/iphone-15-pro-max-1tb-white-titanium-mu7h3/'
      
      ];
      const arrLinkGro15 = [
      'https://grokholsky.com/product/apple/iphone/iphone-15/iphone-15-128gb-black-mtp03/',
      'https://grokholsky.com/product/apple/iphone/iphone-15/iphone-15-128gb-blue-mtp43/',
      'https://grokholsky.com/product/apple/iphone/iphone-15/iphone-15-128gb-green-mtp53/',
      'https://grokholsky.com/product/apple/iphone/iphone-15/iphone-15-128gb-pink-mtp13/',
      'https://grokholsky.com/product/apple/iphone/iphone-15/iphone-15-128gb-yellow-mtp23/',
      
      'https://grokholsky.com/product/apple/iphone/iphone-15/iphone-15-256gb-black-mtp63/',
      'https://grokholsky.com/product/apple/iphone/iphone-15/iphone-15-256gb-blue-mtp93/',
      'https://grokholsky.com/product/apple/iphone/iphone-15/iphone-15-256gb-green-mtpa3/',
      'https://grokholsky.com/product/apple/iphone/iphone-15/iphone-15-256gb-pink-mtp73/',
      'https://grokholsky.com/product/apple/iphone/iphone-15/iphone-15-256gb-yellow-mtp83/',
      
      
      'https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-128gb-black-mu0y3/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-128gb-blue-mu163/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-128gb-green-mu173/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-128gb-pink-mu103/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-128gb-yellow-mu123/',
      
      'https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-256gb-black-mu183/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-256gb-blue-mu1f3/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-256gb-green-mu1g3/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-256gb-pink-mu193/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-256gb-yellow-mu1d3/'
      ];

async function f() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  for (let i = 0; i < arrLinkMobilePlanet.length; i += 1) {
    await page.goto(arrLinkMobilePlanet[i]);
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

  for (let i = 0; i < arrLinkSkay14.length; i += 1) {
    await page.goto(arrLinkSkay14[i]);
    const n = await page.$("#txt");

    let arr1 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector("#our_price_display") != null) {
        return (
          text2 + "S: " + document.querySelector("#our_price_display").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr1);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkIstore14.length; i += 1) {
    await page.goto(arrLinkIstore14[i]);
    const n = await page.$("#txt");

    let arr4 = await page.evaluate(() => {
      let text3 = document.querySelector("h1").innerText;
      if (document.querySelector(".product_price ") != null) {
        return (
          text3 + "I: " + document.querySelector(".product_price ").innerText
        );
      } else {
        return text3;
      }
    });

    console.log(arr4);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkJabko14.length; i += 1) {
    await page.goto(arrLinkJabko14[i]);
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

  for (let i = 0; i < arrLinkMobilePlanet14Plus.length; i += 1) {
    await page.goto(arrLinkMobilePlanet14Plus[i]);
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
  for (let i = 0; i < arrLinkSkay14Plus.length; i += 1) {
    await page.goto(arrLinkSkay14Plus[i]);
    const n = await page.$("#txt");

    let arr6 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector("#our_price_display") != null) {
        return (
          text2 + "S: " + document.querySelector("#our_price_display").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr6);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkIstore14Plus.length; i += 1) {
    await page.goto(arrLinkIstore14Plus[i]);
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
  for (let i = 0; i < arrLinkJabko14Plus.length; i += 1) {
    await page.goto(arrLinkJabko14Plus[i]);
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



  for (let i = 0; i < arrLinkMobilePlanet14Pro.length; i += 1) {
    await page.goto(arrLinkMobilePlanet14Pro[i]);
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
  for (let i = 0; i < arrLinkSkay14Pro.length; i += 1) {
    await page.goto(arrLinkSkay14Pro[i]);
    const n = await page.$("#txt");

  let arr1 = await page.evaluate(() => {
    
    let text2 = document.querySelector("h1").innerText;
    if(document.querySelector("#our_price_display") != null){
      return text2 + 'S: ' + document.querySelector("#our_price_display").innerText
    } else {return}
    
  });
  
  console.log(arr1)
  await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkIstore14Pro.length; i += 1) {
    await page.goto(arrLinkIstore14Pro[i]);
    const n = await page.$("#txt");

  let arr4 = await page.evaluate(() => {
    
    let text2 = document.querySelector("h1").innerText;
    if(document.querySelector(".product_price ") != null){
      return text2 + 'I: ' + document.querySelector(".product_price ").innerText
    } else {return}
    
  });
  
  console.log(arr4)
  await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkJabko14Pro.length; i += 1) {
    await page.goto(arrLinkJabko14Pro[i]);
    const n = await page.$("#txt");

  let arr2 = await page.evaluate(() => {
    
    let text2 = document.querySelector("h1").innerText;
    if(document.querySelector(".price-new__uah") != null){
      return text2 + 'J: ' + document.querySelector(".price-new__uah").innerText
    } else {return text2}
    
  });
  
  console.log(arr2)
  await page.setDefaultNavigationTimeout(0);
  }

  for (let i = 0; i < arrLinkMobilePlanet14ProMax.length; i += 1) {
    await page.goto(arrLinkMobilePlanet14ProMax[i]);
    const n = await page.$("#txt");

  let arr5 = await page.evaluate(() => {
    
    let text2 = document.querySelector("h1").innerText;
    if(document.querySelector(".price-value") != null){
      return text2 + 'MP: ' + document.querySelector(".price-value").innerText
    } else {return text2}
    
  });
  
  console.log(arr5)
  }
  for (let i = 0; i < arrLinkSkay14ProMax.length; i += 1) {
    await page.goto(arrLinkSkay14ProMax[i]);
    const n = await page.$("#txt");

  let arr6 = await page.evaluate(() => {
    
    let text2 = document.querySelector("h1").innerText;
    if(document.querySelector("#our_price_display") != null){
      return text2 + 'S: ' + document.querySelector("#our_price_display").innerText
    } else {return}
    
  });
  
  console.log(arr6)
  await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkIstore14ProMax.length; i += 1) {
    await page.goto(arrLinkIstore14ProMax[i]);
    const n = await page.$("#txt");

  let arr7 = await page.evaluate(() => {
    
    let text2 = document.querySelector("h1").innerText;
    if(document.querySelector(".product_price ") != null){
      return text2 + 'I: ' + document.querySelector(".product_price ").innerText
    } else {return}
    
  });
  
  console.log(arr7)
  await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkJabko14ProMax.length; i += 1) {
    await page.goto(arrLinkJabko14ProMax[i]);
    const n = await page.$("#txt");

  let arr8 = await page.evaluate(() => {
    
    let text2 = document.querySelector("h1").innerText;
    if(document.querySelector(".price-new__uah") != null){
      return text2 + 'J: ' + document.querySelector(".price-new__uah").innerText
    } else {return text2}
    
  });
  
  console.log(arr8)
  await page.setDefaultNavigationTimeout(0);
  }





  for (let i = 0; i < arrLinkMobilePlanet14ProESIM.length; i += 1) {
    await page.goto(arrLinkMobilePlanet14ProESIM[i]);
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
  for (let i = 0; i < arrLinkSkay14ProESIM.length; i += 1) {
    await page.goto(arrLinkSkay14ProESIM[i]);
    const n = await page.$("#txt");

    let arr1 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector("#our_price_display") != null) {
        return (
          text2 + "S: " + document.querySelector("#our_price_display").innerText
        );
      } else {
        return;
      }
    });

    console.log(arr1);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkIstore14ProESIM.length; i += 1) {
    await page.goto(arrLinkIstore14ProESIM[i]);
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
  for (let i = 0; i < arrLinkJabko14ProESIM.length; i += 1) {
    await page.goto(arrLinkJabko14ProESIM[i]);
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

  for (let i = 0; i < arrLinkMobilePlanet14ProMaxESIM.length; i += 1) {
    await page.goto(arrLinkMobilePlanet14ProMaxESIM[i]);
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
  for (let i = 0; i < arrLinkSkay14ProMaxESIM.length; i += 1) {
    await page.goto(arrLinkSkay14ProMaxESIM[i]);
    const n = await page.$("#txt");

    let arr6 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector("#our_price_display") != null) {
        return (
          text2 + "S: " + document.querySelector("#our_price_display").innerText
        );
      } else {
        return;
      }
    });

    console.log(arr6);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkIstore14ProMaxESIM.length; i += 1) {
    await page.goto(arrLinkIstore14ProMaxESIM[i]);
    const n = await page.$("#txt");

    let arr7 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".product_price ") != null) {
        return (
          text2 + "I: " + document.querySelector(".product_price ").innerText
        );
      } else {
        return;
      }
    });

    console.log(arr7);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkJabko14ProMaxESIM.length; i += 1) {
    await page.goto(arrLinkJabko14ProMaxESIM[i]);
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

  for (let i = 0; i < arrLinkMobilePlanet13and12.length; i += 1) {
    await page.goto(arrLinkMobilePlanet13and12[i]);
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
  for (let i = 0; i < arrLinkSkay13and12.length; i += 1) {
    await page.goto(arrLinkSkay13and12[i]);
    const n = await page.$("#txt");

    let arr6 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector("#our_price_display") != null) {
        return (
          text2 + "S: " + document.querySelector("#our_price_display").innerText
        );
      } else {
        return;
      }
    });

    console.log(arr6);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkIstore13and12.length; i += 1) {
    await page.goto(arrLinkIstore13and12[i]);
    const n = await page.$("#txt");

    let arr7 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".product_price ") != null) {
        return (
          text2 + "I: " + document.querySelector(".product_price ").innerText
        );
      } else {
        return;
      }
    });

    console.log(arr7);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkJabko13and12.length; i += 1) {
    await page.goto(arrLinkJabko13and12[i]);
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




  for (let i = 0; i < arrLinkJabko15ProAndProMax.length; i += 1) {
    await page.goto(arrLinkJabko15ProAndProMax[i]);
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
  for (let i = 0; i < arrLinkJabko15.length; i += 1) {
    await page.goto(arrLinkJabko15[i]);
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
  for (let i = 0; i < arrLinkMobilePlanet15ProAndProMax.length; i += 1) {
    await page.goto(arrLinkMobilePlanet15ProAndProMax[i]);
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
  for (let i = 0; i < arrLinkMobilePlanet15.length; i += 1) {
    await page.goto(arrLinkMobilePlanet15[i]);
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
  for (let i = 0; i < arrLinkIstore15ProAndProMax.length; i += 1) {
    await page.goto(arrLinkIstore15ProAndProMax[i]);
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
  for (let i = 0; i < arrLinkIstore15.length; i += 1) {
    await page.goto(arrLinkIstore15[i]);
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
  for (let i = 0; i < arrLinkEstore15ProAndProMax.length; i += 1) {
    await page.goto(arrLinkEstore15ProAndProMax[i]);
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
  for (let i = 0; i < arrLinkEstore15.length; i += 1) {
    await page.goto(arrLinkEstore15[i]);
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




  for (let i = 0; i < arrLinkGro14andPlus.length; i += 1) {
    await page.goto(arrLinkGro14andPlus[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector("p ins") != null) {
        return (
          text2 + "Gro: " + document.querySelector("p ins").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr3);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkGro14ProAndMax.length; i += 1) {
    await page.goto(arrLinkGro14ProAndMax[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector("p ins") != null) {
        return (
          text2 + "Gro: " + document.querySelector("p ins").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr3);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkGro14ProAndMaxEsim.length; i += 1) {
    await page.goto(arrLinkGro14ProAndMaxEsim[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector("p ins") != null) {
        return (
          text2 + "Gro: " + document.querySelector("p ins").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr3);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkGro15ProAndMax.length; i += 1) {
    await page.goto(arrLinkGro15ProAndMax[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector("p ins") != null) {
        return (
          text2 + "Gro: " + document.querySelector("p ins").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr3);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkGro15.length; i += 1) {
    await page.goto(arrLinkGro15[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector("p ins") != null) {
        return (
          text2 + "Gro: " + document.querySelector("p ins").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr3);
    await page.setDefaultNavigationTimeout(0);
  }

}
f();
