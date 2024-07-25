console.log("Hello world");

const puppeteer = require("puppeteer");


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
    'https://jabko.ua/iphone/apple-iphone-15-/apple-iphone-15-256gb-yellow',

    "https://jabko.ua/iphone/apple-iphone-15-/apple-iphone-15-512gb-black",
    "https://jabko.ua/iphone/apple-iphone-15-/apple-iphone-15-512gb--blue-",
    "https://jabko.ua/iphone/apple-iphone-15-/apple-iphone-15-512gb-green",
    "https://jabko.ua/iphone/apple-iphone-15-/apple-iphone-15-512gb--pink-",
    "https://jabko.ua/iphone/apple-iphone-15-/apple-iphone-15-512gb-yellow"
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
    'https://mobileplanet.ua/apple-iphone-15-256gb-yellow-mtp83-285362',

    "https://mobileplanet.ua/ua/apple-iphone-15-512gb-black-mtpc3-285361",
    "https://mobileplanet.ua/ua/apple-iphone-15-512gb-blue-mtpg3-285360",
    "https://mobileplanet.ua/ua/apple-iphone-15-512gb-green-mtph3-285359",
    "https://mobileplanet.ua/ua/apple-iphone-15-512gb-pink-mtpd3-285358",
    "https://mobileplanet.ua/ua/apple-iphone-15-512gb-yellow-mtpf3-285357"
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
    'https://www.istore.ua/catalog/item/apple-iphone-15-256-gb-yellow/',

    "https://www.istore.ua/ua/item/apple-iphone-15-512-gb-black/",
    "https://www.istore.ua/ua/item/apple-iphone-15-512-gb-blue/",
    "https://www.istore.ua/ua/item/apple-iphone-15-512-gb-green/",
    "https://www.istore.ua/ua/item/apple-iphone-15-512-gb-pink/",
    "https://www.istore.ua/ua/item/apple-iphone-15-512-gb-yellow/"
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

      "https://grokholsky.com/product/apple/iphone/iphone-15/iphone-15-512gb-black-mtpc3/",
      "https://grokholsky.com/product/apple/iphone/iphone-15/iphone-15-512gb-blue-mtpg3/",
      "https://grokholsky.com/product/apple/iphone/iphone-15/iphone-15-512gb-green-mtph3/",
      "https://grokholsky.com/product/apple/iphone/iphone-15/iphone-15-512gb-pink-mtpd3/",
      "https://grokholsky.com/product/apple/iphone/iphone-15/iphone-15-512gb-yellow-mtpf3/",
      
      
      'https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-128gb-black-mu0y3/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-128gb-blue-mu163/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-128gb-green-mu173/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-128gb-pink-mu103/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-128gb-yellow-mu123/',
      
      'https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-256gb-black-mu183/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-256gb-blue-mu1f3/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-256gb-green-mu1g3/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-256gb-pink-mu193/',
      'https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-256gb-yellow-mu1d3/',

      "https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-512gb-black-mu1h3/",
      "https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-512gb-blue-mu1p3/",
      "https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-512gb-green-mu1q3/",
      "https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-512gb-pink-mu1j3/",
      "https://grokholsky.com/product/apple/iphone/iphone-15-plus/iphone-15-plus-512gb-yellow-mu1m3/"
      ];

    const arrLinkYabko15Plus = [
      'https://jabko.ua/iphone/apple-iphone-15-plus/apple-iphone-15-plus-128gb-black',
  'https://jabko.ua/iphone/apple-iphone-15-plus/apple-iphone-15-plus-128gb-blue',
  'https://jabko.ua/iphone/apple-iphone-15-plus/apple-iphone-15-plus-128gb--green-',
  'https://jabko.ua/iphone/apple-iphone-15-plus/apple-iphone-15-plus-128gb-pink',
  'https://jabko.ua/iphone/apple-iphone-15-plus/apple-iphone-15-plus-128gb-yellow',

  'https://jabko.ua/iphone/apple-iphone-15-plus/apple-iphone-15-plus-256gb-black',
  'https://jabko.ua/iphone/apple-iphone-15-plus/apple-iphone-15-plus-256gb--blue-',
  'https://jabko.ua/iphone/apple-iphone-15-plus/apple-iphone-15-plus-256gb--green-',
  'https://jabko.ua/iphone/apple-iphone-15-plus/apple-iphone-15-plus-256gb-pink',
  'https://jabko.ua/iphone/apple-iphone-15-plus/apple-iphone-15-plus-256gb-yellow',

  "https://jabko.ua/iphone/apple-iphone-15-plus/apple-iphone-15-plus-512gb-black",
  "https://jabko.ua/iphone/apple-iphone-15-plus/apple-iphone-15-plus-512gb--blue-",
  "https://jabko.ua/iphone/apple-iphone-15-plus/apple-iphone-15-plus-512gb--green-",
  "https://jabko.ua/iphone/apple-iphone-15-plus/apple-iphone-15-plus-512gb-pink",
  "https://jabko.ua/iphone/apple-iphone-15-plus/apple-iphone-15-plus-512gb-yellow"
    ];
    const arrLinkMP15Plus = [
      'https://mobileplanet.ua/apple-iphone-15-plus-128gb-black-mu0y3-285372',
  'https://mobileplanet.ua/apple-iphone-15-plus-128gb-blue-mu163-285373',
  'https://mobileplanet.ua/apple-iphone-15-plus-128gb-green-mu173-285374',
  'https://mobileplanet.ua/apple-iphone-15-plus-128gb-pink-mu103-285375',
  'https://mobileplanet.ua/apple-iphone-15-plus-128gb-yellow-mu123-285376',

  'https://mobileplanet.ua/apple-iphone-15-plus-256gb-black-mu183-285377',
  'https://mobileplanet.ua/apple-iphone-15-plus-256gb-blue-mu1f3-285378',
  'https://mobileplanet.ua/apple-iphone-15-plus-256gb-green-mu1g3-285379',
  'https://mobileplanet.ua/apple-iphone-15-plus-256gb-pink-mu193-285380',
  'https://mobileplanet.ua/apple-iphone-15-plus-256gb-yellow-mu1d3-285381',
  
  
  "https://mobileplanet.ua/ua/apple-iphone-15-plus-512gb-black-mu1h3-285382",
  "https://mobileplanet.ua/ua/apple-iphone-15-plus-512gb-blue-mu1p3-285383",
  "https://mobileplanet.ua/ua/apple-iphone-15-plus-512gb-green-mu1q3-285384",
  "https://mobileplanet.ua/ua/apple-iphone-15-plus-512gb-pink-mu1j3-285385",
  "https://mobileplanet.ua/ua/apple-iphone-15-plus-512gb-yellow-mu1m3-285386"
    ];
    const arrLinkIstore15Plus = [
      'https://www.istore.ua/ua/item/apple-iphone-15-plus-128-gb-black/',
  'https://www.istore.ua/ua/item/apple-iphone-15-plus-128-gb-blue/',
  'https://www.istore.ua/ua/item/apple-iphone-15-plus-128-gb-green/',
  'https://www.istore.ua/ua/item/apple-iphone-15-plus-128-gb-pink/',
  'https://www.istore.ua/ua/item/apple-iphone-15-plus-128-gb-yellow/',

  'https://www.istore.ua/ua/item/apple-iphone-15-plus-256-gb-black/',
  'https://www.istore.ua/ua/item/apple-iphone-15-plus-256-gb-blue/',
  'https://www.istore.ua/ua/item/apple-iphone-15-plus-256-gb-green/',
  'https://www.istore.ua/ua/item/apple-iphone-15-plus-256-gb-pink/',
  'https://www.istore.ua/ua/item/apple-iphone-15-plus-256-gb-yellow/',


  "https://www.istore.ua/ua/item/apple-iphone-15-plus-512-gb-black/",
  "https://www.istore.ua/ua/item/apple-iphone-15-plus-512-gb-blue/",
  "https://www.istore.ua/ua/item/apple-iphone-15-plus-512-gb-green/",
  "https://www.istore.ua/ua/item/apple-iphone-15-plus-512-gb-pink/",
  "https://www.istore.ua/ua/item/apple-iphone-15-plus-512-gb-yellow/"
    ];
    const arrLinkEstore15Plus = [
      'https://estore.ua/ua/iphone-15-plus-128gb-black/',
  'https://estore.ua/ua/iphone-15-plus-128gb-blue/',
  'https://estore.ua/ua/iphone-15-plus-128gb-green/',
  'https://estore.ua/ua/iphone-15-plus-128gb-pink/',
  'https://estore.ua/ua/iphone-15-plus-128gb-yellow/',

  'https://estore.ua/ua/iphone-15-plus-256gb-black/',
  'https://estore.ua/ua/iphone-15-plus-256gb-blue/',
  'https://estore.ua/ua/iphone-15-plus-256gb-green/',
  'https://estore.ua/ua/iphone-15-plus-256gb-pink/',
  'https://estore.ua/ua/iphone-15-plus-256gb-yellow/'
    ];  

async function f() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();


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
  // for (let i = 0; i < arrLinkEstore15ProAndProMax.length; i += 1) {
  //   await page.goto(arrLinkEstore15ProAndProMax[i]);
  //   const n = await page.$("#txt");

  //   let arr2 = await page.evaluate(() => {
  //     let text2 = document.querySelector("h1").innerText;
  //     if (document.querySelector("p .price") != null) {
  //       return (
  //         text2 + "Estore: " + document.querySelector("p .price").innerText
  //       );
  //     } else {
  //       return text2;
  //     }
  //   });

  //   console.log(arr2);
  //   await page.setDefaultNavigationTimeout(0);
  // }
  // for (let i = 0; i < arrLinkEstore15.length; i += 1) {
  //   await page.goto(arrLinkEstore15[i]);
  //   const n = await page.$("#txt");

  //   let arr2 = await page.evaluate(() => {
  //     let text2 = document.querySelector("h1").innerText;
  //     if (document.querySelector("p .price") != null) {
  //       return (
  //         text2 + "Estore: " + document.querySelector("p .price").innerText
  //       );
  //     } else {
  //       return text2;
  //     }
  //   });

  //   console.log(arr2);
  //   await page.setDefaultNavigationTimeout(0);
  // }




  // for (let i = 0; i < arrLinkGro14andPlus.length; i += 1) {
  //   await page.goto(arrLinkGro14andPlus[i]);
  //   const n = await page.$("#txt");

  //   let arr3 = await page.evaluate(() => {
  //     let text2 = document.querySelector(".sku").innerText;
  //     if (document.querySelector(".product-price-value") != null) {
  //       return (
  //         text2 + "Gro: " + document.querySelector(".product-price-value").innerText
  //       );
  //     } else {
  //       return text2;
  //     }
  //   });

  //   console.log(arr3);
  //   await page.setDefaultNavigationTimeout(0);
  // }
  // for (let i = 0; i < arrLinkGro14ProAndMax.length; i += 1) {
  //   await page.goto(arrLinkGro14ProAndMax[i]);
  //   const n = await page.$("#txt");

  //   let arr3 = await page.evaluate(() => {
  //     let text2 = document.querySelector(".sku").innerText;
  //     if (document.querySelector(".product-price-value") != null) {
  //       return (
  //         text2 + "Gro: " + document.querySelector(".product-price-value").innerText
  //       );
  //     } else {
  //       return text2;
  //     }
  //   });

  //   console.log(arr3);
  //   await page.setDefaultNavigationTimeout(0);
  // }
  // for (let i = 0; i < arrLinkGro14ProAndMaxEsim.length; i += 1) {
  //   await page.goto(arrLinkGro14ProAndMaxEsim[i]);
  //   const n = await page.$("#txt");

  //   let arr3 = await page.evaluate(() => {
  //     let text2 = document.querySelector(".sku").innerText;
  //     if (document.querySelector(".product-price-value") != null) {
  //       return (
  //         text2 + "Gro: " + document.querySelector(".product-price-value").innerText
  //       );
  //     } else {
  //       return text2;
  //     }
  //   });

  //   console.log(arr3);
  //   await page.setDefaultNavigationTimeout(0);
  // }
  for (let i = 0; i < arrLinkGro15ProAndMax.length; i += 1) {
    await page.goto(arrLinkGro15ProAndMax[i]);
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
  for (let i = 0; i < arrLinkGro15.length; i += 1) {
    await page.goto(arrLinkGro15[i]);
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



  for (let i = 0; i < arrLinkYabko15Plus.length; i += 1) {
    await page.goto(arrLinkYabko15Plus[i]);
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
  for (let i = 0; i < arrLinkMP15Plus.length; i += 1) {
    await page.goto(arrLinkMP15Plus[i]);
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
  for (let i = 0; i < arrLinkIstore15Plus.length; i += 1) {
    await page.goto(arrLinkIstore15Plus[i]);
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
  // for (let i = 0; i < arrLinkEstore15Plus.length; i += 1) {
  //   await page.goto(arrLinkEstore15Plus[i]);
  //   const n = await page.$("#txt");

  //   let arr2 = await page.evaluate(() => {
  //     let text2 = document.querySelector("h1").innerText;
  //     if (document.querySelector("p .price") != null) {
  //       return (
  //         text2 + "Estore: " + document.querySelector("p .price").innerText
  //       );
  //     } else {
  //       return text2;
  //     }
  //   });

  //   console.log(arr2);
  //   await page.setDefaultNavigationTimeout(0);
  // }
}
f();
