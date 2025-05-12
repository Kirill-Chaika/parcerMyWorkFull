console.log("Hello world");

const puppeteer = require("puppeteer");
const arrLinkMobilePlanetAWS = [


  "https://mobileplanet.ua/apple-watch-series-8-gps-41mm-midnight-aluminum-ca-254733",
  "https://mobileplanet.ua/apple-watch-series-8-gps-41mm-midnight-a-259901",
  "https://mobileplanet.ua/apple-watch-series-8-gps-41mm-midnight-a-265206",
  "https://mobileplanet.ua/apple-watch-series-8-gps-41mm-starlight-aluminum-c-254736",
  "https://mobileplanet.ua/apple-watch-series-8-gps-41mm-starlight-260904",
  "https://mobileplanet.ua/apple-watch-series-8-41mm-gps-starlight-260762",
  "https://mobileplanet.ua/apple-watch-series-8-gps-41mm-silver-aluminum-case-254735",
  "https://mobileplanet.ua/apple-watch-series-8-41mm-silver-aluminu-259836",

  "https://mobileplanet.ua/apple-watch-series-8-gps-45mm-midnight-aluminum-ca-254737",
  "https://mobileplanet.ua/apple-watch-series-8-gps-45mm-midnight-a-260629",
  "https://mobileplanet.ua/apple-watch-series-8-gps-45mm-midnight-a-260766",
  "https://mobileplanet.ua/apple-watch-series-8-gps-45mm-midnight-aluminum-ca-254737",
  "https://mobileplanet.ua/apple-watch-series-8-gps-45mm-starlight-aluminum-c-254740",
  "https://mobileplanet.ua/apple-watch-series-8-gps-45mm-starlight-260908",
  "https://mobileplanet.ua/apple-watch-series-8-gps-45mm-starlight-265263",
  "https://mobileplanet.ua/apple-watch-series-8-gps-45mm-silver-aluminum-case-254739",

  "https://mobileplanet.ua/apple-watch-series-8-gps-45mm-silver-aluminum-case-254739",
  "https://mobileplanet.ua/apple-watch-series-8-gps-45mm-product-red-aluminum-254738",

  "https://mobileplanet.ua/apple-watch-series-8-gps-45mm-product-re-261461",
  "https://mobileplanet.ua/apple-watch-series-8-gps-cellular-45mm-midnight-al-254755",
  "https://mobileplanet.ua/apple-watch-series-8-gps-cellular-41mm-midnight-al-265111",
  "https://mobileplanet.ua/apple-watch-series-8-gps-cellular-45mm-midnight-al-265113",
  "https://mobileplanet.ua/apple-watch-series-8-gps-cellular-45mm-graphite-s-254754",


  "https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254776",
  "https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254777",
  "https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254775",
  "https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254770",
  "https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254771",
  "https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254773",
  "https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254774",
  "https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254772",
  "https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254778",
  "https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254767",
  "https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254768",
  "https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254769",
  "https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254761",
  "https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254762",
  "https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254763",
  "https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254764",
  "https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254765",
  "https://mobileplanet.ua/apple-watch-ultra-gps-cellular-49mm-titanium-case-254766",
];
const arrLinkSkayAWS = [

  "https://skay.ua/uk/series-8/58856-apple-watch-series-8-41mm-gps-midnight-aluminum-case-w-midnight-sport-band-regular-mnp53.html?search_query=MNP53&results=2",
  "https://skay.ua/uk/series-8/60071-apple-watch-series-8-41mm-gps-midnight-aluminum-case-w-midnight-sport-band-size-sm-mnu73.html?search_query=MNU73&results=1",
  "https://skay.ua/uk/series-8/60170-apple-watch-series-8-41mm-gps-midnight-aluminum-case-w-midnight-sport-band-size-ml-mnu83.html?search_query=MNU83&results=1",
  "https://skay.ua/uk/series-8/58858-apple-watch-series-8-41mm-gps-starlight-aluminum-case-w-starlight-sport-band-regular-mnp63.html?search_query=MNP63&results=2",
  "https://skay.ua/uk/series-8/59437-apple-watch-series-8-41mm-gps-starlight-aluminum-case-w-starlight-sport-band-size-sm-mnu93.html?search_query=MNU93&results=1",
  "https://skay.ua/uk/series-8/59651-apple-watch-series-8-41mm-gps-starlight-aluminum-case-w-starlight-sport-band-size-ml-mnuf3.html?search_query=MNUF3&results=1",
  "https://skay.ua/uk/series-8/61034-apple-watch-series-8-41mm-gps-silver-aluminum-case-with-white-sport-band-regular-mp6k3.html?search_query=MP6K3&results=2",
  "https://skay.ua/uk/series-8/59608-apple-watch-series-8-41mm-gps-silver-aluminum-case-w-white-sport-band-size-sm-mp6l3.html?search_query=MP6L3&results=1",

  "https://skay.ua/uk/series-8/58857-apple-watch-series-8-45mm-gps-midnight-aluminum-case-w-midnight-sport-band-regular-mnp13.html?search_query=MNP13&results=2",
  "https://skay.ua/uk/series-8/60105-apple-watch-series-8-45mm-gps-midnight-aluminum-case-w-midnight-sport-band-size-sm-mnuj3.html?search_query=MNUJ3&results=2",
  "https://skay.ua/uk/series-8/59815-apple-watch-series-8-45mm-gps-midnight-aluminum-case-w-midnight-sport-band-size-ml-mnp83.html?search_query=MNP83&results=1",
  "https://skay.ua/uk/series-8/59701-apple-watch-series-8-45mm-gps-midnight-aluminum-case-w-midnight-sport-band-size-ml-mnul3.html?search_query=MNUL3&results=1",
  "https://skay.ua/uk/series-8/58859-apple-watch-series-8-45mm-gps-starlight-aluminum-case-with-starlight-sport-band-regular-mnp23.html?search_query=MNP23&results=2",
  "https://skay.ua/uk/series-8/59845-apple-watch-series-8-45mm-gps-starlight-aluminum-case-w-starlight-sport-band-size-sm-mnup3.html?search_query=MNUP3&results=1",
  "https://skay.ua/uk/series-8/59438-apple-watch-series-8-45mm-gps-starlight-aluminum-case-w-starlight-sport-band-size-ml-mnuq3.html?search_query=MNUQ3&results=1",
  "https://skay.ua/uk/series-8/58861-apple-watch-series-8-45mm-gps-silver-aluminum-case-w-white-sport-band-regular-mp6n3.html?search_query=MP6N3&results=2",

  "https://skay.ua/uk/series-8/59439-apple-watch-series-8-45mm-gps-silver-aluminum-case-w-white-sport-band-size-ml-mp6q3.html?search_query=MP6Q3&results=1",
  "https://skay.ua/uk/series-8/58863-apple-watch-series-8-45mm-gps-productred-aluminum-case-with-productred-sport-band-regular-mnp43.html?search_query=MNP43&results=2",

  "https://skay.ua/uk/series-8/59814-apple-watch-series-8-45mm-gps-productred-aluminum-case-with-productred-sport-band-size-ml-mnuu3.html?search_query=MNUU3&results=1",
  "https://skay.ua/uk/series-8/60296-apple-watch-series-8-41mm-gpslte-midnight-aluminum-case-w-midnight-sport-band-size-ml-mnuw3.html?search_query=MNUW3&results=1",
  "https://skay.ua/uk/series-8/60367-apple-watch-series-8-45mm-gpslte-midnight-aluminum-case-w-midnight-sport-band-size-ml-mnvl3.html?search_query=MNVL3&results=1",


  "https://skay.ua/uk/apple-watch-ultra/58848-apple-watch-ultra-49mm-gpslte-titanium-case-with-white-ocean-band-mnh83mnhf3.html?search_query=MNH83&results=1",
  "https://skay.ua/uk/apple-watch-ultra/58849-apple-watch-ultra-49mm-gpslte-titanium-case-with-yellow-ocean-band-mnhg3.html?search_query=MNHG3&results=1",
  "https://skay.ua/uk/apple-watch-ultra/58847-apple-watch-ultra-49mm-gpslte-titanium-case-with-midnight-ocean-band-mqet3mqfk3.html?search_query=MQET3&results=1",
  "https://skay.ua/uk/apple-watch-ultra/58852-apple-watch-ultra-49mm-gpslte-titanium-case-with-bluegray-trail-loop-sm-mnhe3mnhl3.html?search_query=MNHE3&results=1",
  "https://skay.ua/uk/apple-watch-ultra/58853-apple-watch-ultra-49mm-gpslte-titanium-case-with-bluegray-trail-loop-ml-mqej3mqf33.html?search_query=MQEJ3&results=1",
  "https://skay.ua/uk/apple-watch-ultra/58850-apple-watch-ultra-49mm-gpslte-titanium-case-with-yellowbeige-trail-loop-sm-mnhk3mnhd3.html?search_query=MNHK3&results=1",
  "https://skay.ua/uk/apple-watch-ultra/58851-apple-watch-ultra-49mm-gpslte-titanium-case-with-yellowbeige-trail-loop-ml-mqfu3mqf23.html?search_query=MQFU3&results=1",
  "https://skay.ua/uk/apple-watch-ultra/58854-apple-watch-ultra-49mm-gpslte-titanium-case-with-blackgray-trail-loop-sm-mqfw3mqf43.html?search_query=MQFW3&results=1",
  "https://skay.ua/uk/apple-watch-ultra/58855-apple-watch-ultra-49mm-gpslte-titanium-case-with-blackgray-trail-loop-ml-mqfx3.html?search_query=MQF53&results=2",
  "https://skay.ua/uk/apple-watch-ultra/58846-apple-watch-ultra-49mm-gpslte-titanium-case-with-orange-alpine-loop-small-mnhh3mnha3.html?search_query=MNHH3&results=1",
  "https://skay.ua/uk/apple-watch-ultra/58845-apple-watch-ultra-49mm-gpslte-titanium-case-with-orange-alpine-loop-medium-mqeu3mqfl3.html?search_query=MQEU3&results=1",
  "https://skay.ua/uk/apple-watch-ultra/58844-apple-watch-ultra-49mm-gpslte-titanium-case-with-orange-alpine-loop-large-mqev3mqfm3.html?search_query=MQEV3&results=1",
  "https://skay.ua/uk/apple-watch-ultra/58840-apple-watch-ultra-49mm-gpslte-titanium-case-with-green-alpine-loop-small-mnhj3mnhc3.html?search_query=MNHJ3&results=1",
  "https://skay.ua/uk/apple-watch-ultra/58839-apple-watch-ultra-49mm-gpslte-titanium-case-with-green-alpine-loop-medium-mqfn3.html?search_query=MQFN3&results=1",
  "https://skay.ua/uk/apple-watch-ultra/58838-apple-watch-ultra-49mm-gpslte-titanium-case-with-green-alpine-loop-large-mqex3mqfp3.html?search_query=MQEX3&results=1",
  "https://skay.ua/uk/apple-watch-ultra/58843-apple-watch-ultra-49mm-gpslte-titanium-case-with-starlight-alpine-loop-small-mqey3mqfq3.html?search_query=MQEY3&results=1",
  "https://skay.ua/uk/apple-watch-ultra/58842-apple-watch-ultra-49mm-gpslte-titanium-case-with-starlight-alpine-loop-medium-mqfr3mqf03.html?search_query=MQFR3&results=1",
  "https://skay.ua/uk/apple-watch-ultra/58841-apple-watch-ultra-49mm-gpslte-titanium-case-with-starlight-alpine-loop-large-mqft3mqf13.html?search_query=MQFT3&results=1",
];
const arrLinkIstoreAWS = [

  "https://www.istore.ua/catalog/item/apple-watch-series-8-41mm-midnight-aluminum-case-with-midnight-sport-band-/",

  "https://www.istore.ua/catalog/item/apple-watch-series-8-gps-41mm-starlight-aluminium-case-with-starlight-sport-band-/",

  "https://www.istore.ua/catalog/item/apple-watch-series-8-gps-41mm-silver-aluminium-case-with-white-sport-band/",

  "https://www.istore.ua/catalog/item/apple-watch-series-8-gps-45mm-midnight-aluminium-case-with-midnight-sport-band/",

  "https://www.istore.ua/catalog/item/apple-watch-series-8-gps-45mm-starlight-aluminium-case-with-starlight-sport-band/",

  "https://www.istore.ua/catalog/item/apple-watch-series-8-gps-45mm-silver-aluminium-case-with-white-sport-band/",

  "https://www.istore.ua/catalog/item/apple-watch-series-8-gps-45mm-product-red-aluminium-case-with-product-red-sport-band/",



  "https://www.istore.ua/catalog/item/apple-watch-ultra-gps-cellular-49mm-titanium-case-with-white-ocean-band/",
  "https://www.istore.ua/catalog/item/apple-watch-ultra-gps-cellular-49mm-titanium-case-with-yellow-ocean-band/",
  "https://www.istore.ua/catalog/item/apple-watch-ultra-gps-cellular-49mm-titanium-case-with-midnight-ocean-band/",
  "https://www.istore.ua/catalog/item/apple-watch-ultra-gps-cellular-49mm-titanium-case-with-blue-gray-trail-loop-s-m/",
  "https://www.istore.ua/catalog/item/apple-watch-ultra-gps-cellular-49mm-titanium-case-with-yellow-beige-trail-loop-s-m/",
  "https://www.istore.ua/catalog/item/apple-watch-ultra-gps-cellular-49mm-titanium-case-with-yellow-beige-trail-loop-m-l/",
  "https://www.istore.ua/catalog/item/apple-watch-ultra-gps-cellular-49mm-titanium-case-with-black-gray-trail-loop-s-m/",
  "https://www.istore.ua/catalog/item/apple-watch-ultra-gps-cellular-49mm-titanium-case-with-black-gray-trail-loop-m-l/",
  "https://www.istore.ua/catalog/item/apple-watch-ultra-gps-cellular-49mm-titanium-case-with-orange-alpine-loop-small/",
  "https://www.istore.ua/catalog/item/apple-watch-ultra-gps-cellular-49mm-titanium-case-with-orange-alpine-loop-medium/",
  "https://www.istore.ua/catalog/item/apple-watch-ultra-gps-cellular-49mm-titanium-case-with-orange-alpine-loop-large/",
  "https://www.istore.ua/catalog/item/apple-watch-ultra-gps-cellular-49mm-titanium-case-with-green-alpine-loop-small/",
  "https://www.istore.ua/catalog/item/apple-watch-ultra-gps-cellular-49mm-titanium-case-with-green-alpine-loop-medium/",
  "https://www.istore.ua/catalog/item/apple-watch-ultra-gps-cellular-49mm-titanium-case-with-starlight-alpine-loop-small/",
  "https://www.istore.ua/catalog/item/apple-watch-ultra-gps-cellular-49mm-titanium-case-with-starlight-alpine-loop-medium/",
  "https://www.istore.ua/catalog/item/apple-watch-ultra-gps-cellular-49mm-titanium-case-with-starlight-alpine-loop-large/",
];
const arrLinkJabkoAWS = [

  "https://jabko.ua/rus/apple-watch/apple-watch-series-8/apple-watch-series-8-41mm-midnight-aluminum-case-with-midnight-sport-band",

  "https://jabko.ua/rus/apple-watch/apple-watch-series-8/apple-watch-series-8-41mm-midnight-aluminum-case-with-midnight-sport-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8/apple-watch-series-8-41mm-starlight-aluminum-case-with-starlight-sport-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8/apple-watch-series-8-41mm-starlight-aluminum-case-with-starlight-sport-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8/apple-watch-series-8-41mm-starlight-aluminum-case-with-starlight-sport-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8/apple-watch-series-8-41mm-blue-aluminum-case-with-blue-sport-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8/apple-watch-series-8-41mm-blue-aluminum-case-with-blue-sport-band",

  "https://jabko.ua/rus/apple-watch/apple-watch-series-8/apple-watch-series-8-45mm-midnight-aluminum-case-with-midnight-sport-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8/apple-watch-series-8-45mm-midnight-aluminum-case-with-midnight-sport-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8/apple-watch-series-8-45mm-midnight-aluminum-case-with-midnight-sport-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8/apple-watch-series-8-45mm-starlight-aluminum-case-with-starlight-sport-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8/apple-watch-series-8-45mm-starlight-aluminum-case-with-starlight-sport-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8/apple-watch-series-8-45mm-starlight-aluminum-case-with-starlight-sport-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8/apple-watch-series-8-45mm-blue-aluminum-case-with-blue-sport-band",

  "https://jabko.ua/rus/apple-watch/apple-watch-series-8/apple-watch-series-8-45mm-red-aluminum-case-with-red-sport-band",

  "https://jabko.ua/rus/apple-watch/apple-watch-series-8/apple-watch-series-8-45mm-gps---lte--midnight-aluminium-case-with-midnight-sport-band--mnk43-",

  "https://jabko.ua/rus/apple-watch/apple-watch-series-8/apple-watch-series-8-45mm-gps---cellular--graphite-stainless-steel-case-with-graphite-milanese-loop--mnkx3-",



  "https://jabko.ua/rus/apple-watch/apple-watch-series-8-pro/apple-watch-ultra-49mm-titanium-case-with-white-ocean-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8-pro/apple-watch-ultra-49mm-titanium-case-with-yellow-ocean-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8-pro/apple-watch-ultra-49mm-titanium-case-with-midnight-ocean-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8-pro/apple-watch-ultra-49mm-gps---lte-titanium-case-with-blue-gray-trail-loop-s-m--mnhl3-",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8-pro/apple-watch-ultra-49mm-titanium-case-with-blue-gray-trail-loop",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8-pro/apple-watch-ultra-49mm-gps---lte-titanium-case-with-yellow-beige-trail-loop-s-m--mnhk3-",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8-pro/apple-watch-ultra-49mm-titanium-case-with-yellow-beige-trail-loop",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8-pro/apple-watch-ultra-49mm-gps---lte-titanium-case-with-black-gray-trail-loop-s-m--mqfw3-",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8-pro/apple-watch-ultra-49mm-titanium-case-with-black-gray-trail-loop",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8-pro/apple-watch-series-8-pro-45mm-midnight-aluminum-case-with-midnight-sport-band",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8-pro/apple-watch-ultra-49mm-gps---lte-titanium-case-with-orange-alpine-loop-medium--mqfl3-",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8-pro/apple-watch-ultra-49mm-gps---lte-titanium-case-with-orange-alpine-loop-large--mqfm3-",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8-pro/apple-watch-ultra-49mm-gps---lte-titanium-case-with-green-alpine-loop-small--mnhj3-",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8-pro/apple-watch-ultra-49mm-gps---lte-titanium-case-with-green-alpine-loop-medium--mqfn3-",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8-pro/apple-watch-ultra-49mm-gps---lte-titanium-case-with-green-alpine-loop-large--mqfp3-",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8-pro/apple-watch-ultra-49mm-titanium-case-with-starlight-alpine-loop",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8-pro/apple-watch-ultra-49mm-gps---lte-titanium-case-with-starlight-alpine-loop-medium--mqfr3-",
  "https://jabko.ua/rus/apple-watch/apple-watch-series-8-pro/apple-watch-ultra-49mm-gps---lte-titanium-case-with-starlight-alpine-loop-large--mqft3-",
];

const arrLinkMobilePlanetAWS2Gen = [
  "https://mobileplanet.ua/apple-watch-series-9-gps-41mm-midnight-aluminum-ca-287051",
  "https://mobileplanet.ua/apple-watch-series-9-gps-41mm-midnight-aluminum-ca-287050",
  "https://mobileplanet.ua/apple-watch-series-9-gps-45mm-midnight-aluminum-ca-287066",
  "https://mobileplanet.ua/apple-watch-series-9-gps-45mm-midnight-aluminum-ca-287064",

  "https://mobileplanet.ua/apple-watch-series-9-gps-41mm-pink-aluminum-case-w-287053",
  "https://mobileplanet.ua/apple-watch-series-9-gps-41mm-pink-aluminum-case-w-287055",
  "https://mobileplanet.ua/apple-watch-series-9-gps-45mm-pink-aluminum-case-w-287067",
  "https://mobileplanet.ua/apple-watch-series-9-gps-45mm-pink-aluminum-case-w-287069",

  "https://mobileplanet.ua/apple-watch-series-9-gps-41mm-silver-aluminum-case-287059",
  "https://mobileplanet.ua/apple-watch-series-9-gps-41mm-silver-alu-case-w-st-287058",
  "https://mobileplanet.ua/apple-watch-series-9-gps-45mm-silver-aluminum-case-287073",
  "https://mobileplanet.ua/apple-watch-series-9-gps-45mm-silver-alu-case-w-st-287072",

  "https://mobileplanet.ua/apple-watch-series-9-gps-41mm-starlight-aluminum-c-287063",
  "https://mobileplanet.ua/apple-watch-series-9-gps-41mm-starlight-aluminum-c-287062",
  "https://mobileplanet.ua/apple-watch-series-9-gps-45mm-starlight-aluminum-c-287076",
  "https://mobileplanet.ua/apple-watch-series-9-gps-45mm-starlight-aluminum-c-287075",

  "https://mobileplanet.ua/apple-watch-series-9-gps-41mm-product-red-alu-case-287057",
  "https://mobileplanet.ua/apple-watch-series-9-gps-41mm-product-red-alu-case-287056",
  "https://mobileplanet.ua/apple-watch-series-9-gps-45mm-product-red-alu-case-287071",
  "https://mobileplanet.ua/apple-watch-series-9-gps-45mm-product-red-alu-case-287070",


  "https://mobileplanet.ua/apple-watch-series-9-gps-41mm-midnight-aluminum-ca-287052",
  "https://mobileplanet.ua/apple-watch-series-9-gps-45mm-midnight-aluminum-ca-287065",
  "https://mobileplanet.ua/apple-watch-series-9-gps-41mm-pink-aluminum-case-w-287054",
  "https://mobileplanet.ua/apple-watch-series-9-gps-45mm-pink-aluminum-case-w-287068",

  "https://mobileplanet.ua/apple-watch-series-9-gps-41mm-silver-aluminum-case-287060",
  "https://mobileplanet.ua/apple-watch-series-9-gps-45mm-silver-aluminum-case-287074",
  "https://mobileplanet.ua/apple-watch-series-9-gps-41mm-starlight-aluminum-c-287061",
  "https://mobileplanet.ua/apple-watch-series-9-gps-45mm-starlight-aluminum-c-287077",



  "https://mobileplanet.ua/apple-watch-ultra-2-gps-cellular-49mm-titanium-cas-287045",
  "https://mobileplanet.ua/apple-watch-ultra-2-gps-cellular-49mm-titanium-cas-287034",
  "https://mobileplanet.ua/apple-watch-ultra-2-gps-cellular-49mm-titanium-cas-287032",

  "https://mobileplanet.ua/apple-watch-ultra-2-gps-cellular-49mm-titanium-cas-287041",
  "https://mobileplanet.ua/apple-watch-ultra-2-gps-cellular-49mm-titanium-cas-287042",
  "https://mobileplanet.ua/apple-watch-ultra-2-gps-cellular-49mm-titanium-cas-287043",
  "https://mobileplanet.ua/apple-watch-ultra-2-gps-cellular-49mm-titanium-cas-287044",

  "https://mobileplanet.ua/apple-watch-ultra-2-gps-cellular-49mm-titanium-cas-287048",
  "https://mobileplanet.ua/apple-watch-ultra-2-gps-cellular-49mm-titanium-cas-287033",

  "https://mobileplanet.ua/apple-watch-ultra-2-gps-cellular-49mm-titanium-cas-287035",
  "https://mobileplanet.ua/apple-watch-ultra-2-gps-cellular-49mm-titanium-cas-287036",
  "https://mobileplanet.ua/apple-watch-ultra-2-gps-cellular-49mm-titanium-cas-287037",

  "https://mobileplanet.ua/apple-watch-ultra-2-gps-cellular-49mm-titanium-cas-287046",
  "https://mobileplanet.ua/apple-watch-ultra-2-gps-cellular-49mm-titanium-cas-287049",
  "https://mobileplanet.ua/apple-watch-ultra-2-gps-cellular-49mm-titanium-cas-287047",

  "https://mobileplanet.ua/apple-watch-ultra-2-gps-cellular-49mm-titanium-cas-287038",
  "https://mobileplanet.ua/apple-watch-ultra-2-gps-cellular-49mm-titanium-cas-287039",
  "https://mobileplanet.ua/apple-watch-ultra-2-gps-cellular-49mm-titanium-cas-287040",
];
const arrLinkIstoreAWS2Gen = [
  "https://www.istore.ua/ua/item/apple-watch-series-9-41mm-midnight-aluminum-case-with-midnight-sport-band-s-m/",
  "https://www.istore.ua/ua/item/apple-watch-series-9-41mm-midnight-aluminum-case-with-midnight-sport-band-m-l/",
  "https://www.istore.ua/ua/item/apple-watch-series-9-45mm-midnight-aluminum-case-with-midnight-sport-band-s-m/",
  "https://www.istore.ua/ua/item/apple-watch-series-9-45mm-midnight-aluminum-case-with-midnight-sport-band-m-l/",

  "https://www.istore.ua/ua/item/apple-watch-series-9-41mm-pink-aluminum-case-with-light-pink-sport-band-s-m/",
  "https://www.istore.ua/ua/item/apple-watch-series-9-41mm-pink-aluminum-case-with-light-pink-sport-band-m-l/",
  "https://www.istore.ua/ua/item/apple-watch-series-9-45mm-pink-aluminum-case-with-light-pink-sport-band-s-m/",
  "https://www.istore.ua/ua/item/apple-watch-series-9-45mm-pink-aluminum-case-with-light-pink-sport-band-m-l/",

  "https://www.istore.ua/ua/item/apple-watch-series-9-41mm-silver-aluminum-case-with-storm-blue-sport-band-sm/",
  "https://www.istore.ua/ua/item/apple-watch-series-9-41mm-silver-aluminum-case-with-storm-blue-sport-band-s-m/",
  "https://www.istore.ua/ua/item/apple-watch-series-9-45mm-silver-aluminum-case-with-storm-blue-sport-band-s-m/",
  "https://www.istore.ua/ua/item/apple-watch-series-9-45mm-silver-aluminum-case-with-storm-blue-sport-band-m-l/",

  "https://www.istore.ua/ua/item/apple-watch-series-9-41mm-starlight-aluminum-case-with-starlight-sport-band-s-m/",
  "https://www.istore.ua/ua/item/apple-watch-series-9-41mm-starlight-aluminum-case-with-starlight-sport-band-m-l/",
  "https://www.istore.ua/ua/item/apple-watch-series-9-45mm-starlight-aluminum-case-with-starlight-sport-band-s-m/",
  "https://www.istore.ua/ua/item/apple-watch-series-9-45mm-starlight-aluminum-case-with-starlight-sport-band-m-l/",

  "https://www.istore.ua/ua/item/apple-watch-series-9-41mm-product-red-aluminum-case-with-product-red-sport-band-s-m-/",
  "https://www.istore.ua/ua/item/apple-watch-series-9-41mm-product-red-aluminum-case-with-product-red-sport-band-m-l/",
  "https://www.istore.ua/ua/item/apple-watch-series-9-45mm-product-red-aluminum-case-with-product-red-sport-band-s-m/",
  "https://www.istore.ua/ua/item/apple-watch-series-9-45mm-product-red-aluminum-case-with-product-red-sport-band-m-l/",


  "https://www.istore.ua/ua/item/apple-watch-series-9-41mm-midnight-aluminum-case-with-midnight-sport-loop-/",
  "https://www.istore.ua/ua/item/apple-watch-series-9-45mm-midnight-aluminum-case-with-midnight-sport-loop-/",
  "https://www.istore.ua/ua/item/apple-watch-series-9-41mm-pink-aluminum-case-with-light-pink-sport-loop/",
  "https://www.istore.ua/ua/item/apple-watch-series-9-45mm-pink-aluminum-case-with-light-pink-sport-loop/",

  "https://www.istore.ua/ua/item/apple-watch-series-9-41mm-silver-aluminum-case-with-winter-blue-sport-loop/",
  "https://www.istore.ua/ua/item/apple-watch-series-9-45mm-silver-aluminum-case-with-winter-blue-sport-loop/",
  "https://www.istore.ua/ua/item/apple-watch-series-9-41mm-starlight-aluminum-case-with-starlight-sport-loop/",
  "https://www.istore.ua/ua/item/apple-watch-series-9-45mm-starlight-aluminum-case-with-starlight-sport-loop/",


  "https://www.istore.ua/ua/item/apple-watch-ultra-2-49mm-titanium-case-with-blue-ocean-band/",
  "https://www.istore.ua/ua/item/apple-watch-ultra-2-49mm-titanium-case-with-orange-ocean-band/",
  "https://www.istore.ua/ua/item/apple-watch-ultra-2-49mm-titanium-case-with-white-ocean-band/",


  "https://www.istore.ua/ua/item/apple-watch-ultra-2-49mm-titanium-case-with-green-gray-trail-loop-m-l/",
  "https://www.istore.ua/ua/item/apple-watch-ultra-2-49mm-titanium-case-with-blue-black-trail-loop-s-m/",
  "https://www.istore.ua/ua/item/apple-watch-ultra-2-49mm-titanium-case-with-blue-black-trail-loop-m-l/",

  "https://www.istore.ua/ua/item/apple-watch-ultra-2-49mm-titanium-case-with-orange-beige-trail-loop-s-m/",
  "https://www.istore.ua/ua/item/apple-watch-ultra-2-49mm-titanium-case-with-orange-beige-trail-loop-m-l/",

  "https://www.istore.ua/ua/item/apple-watch-ultra-2-49mm-titanium-case-with-olive-alpine-loop-small/",
  "https://www.istore.ua/ua/item/apple-watch-ultra-2-49mm-titanium-case-with-olive-loop-medium/",
  "https://www.istore.ua/ua/item/apple-watch-ultra-2-49mm-titanium-case-with-olive-loop-large/",

  "https://www.istore.ua/ua/item/apple-watch-ultra-2-49mm-titanium-case-with-blue-alpine-loop-small/",
  "https://www.istore.ua/ua/item/apple-watch-ultra-2-49mm-titanium-case-with-blue-alpine-loop-medium/",
  "https://www.istore.ua/ua/item/apple-watch-ultra-2-49mm-titanium-case-with-blue-alpine-loop-large/",

  "https://www.istore.ua/ua/item/apple-watch-ultra-2-49mm-titanium-case-with-indigo-alpine-loop-small/",
  "https://www.istore.ua/ua/item/apple-watch-ultra-2-49mm-titanium-case-with-indigo-alpine-loop-medium/",
  "https://www.istore.ua/ua/item/apple-watch-ultra-2-49mm-titanium-case-with-indigo-alpine-loop-large/",
];
const arrLinkGroAWS2Gen = [
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-41mm-midnight-aluminum-case-w-midnight-sport-band-s-m-mr8w3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-41mm-midnight-aluminum-case-w-midnight-sport-band-m-l-mr8x3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-45mm-midnight-aluminum-case-w-midnight-sport-band-s-m-mr993/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-45mm-midnight-aluminum-case-w-midnight-s-band-m-l-mr9a3/",

  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-41mm-pink-aluminum-case-w-light-pink-s-band-s-m-mr933/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-41mm-pink-aluminum-case-w-light-pink-sport-band-m-l-mr943/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-45mm-pink-aluminum-case-w-light-pink-s-band-s-m-mr9g3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-45mm-pink-aluminum-case-w-light-pink-sport-band-m-l-mr9h3/",

  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-41mm-silver-aluminum-case-w-storm-blue-s-band-s-m-mr903/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-41mm-silver-alu-case-w-storm-blue-s-band-m-l-mr913/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-45mm-silver-aluminum-case-w-storm-blue-sport-band-s-m-mr9d3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-45mm-silver-alu-case-w-storm-blue-s-band-m-l-mr9e3/",

  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-41mm-starlight-aluminum-case-w-starlight-sport-band-s-m-mr8t3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-41mm-starlight-aluminum-case-w-starlight-sport-band-m-l-mr8u3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-45mm-starlight-aluminum-case-w-starlight-sport-band-s-m-mr963/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-45mm-starlight-aluminum-case-w-starlight-sport-band-m-l-mr973/",

  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-41mm-product-red-alu-case-w-product-red-sport-band-s-m-mrxg3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-41mm-product-red-alu-case-w-product-red-s-band-m-l-mrxh3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-45mm-product-red-alu-case-w-product-red-sport-band-s-m-mrxj3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-45mm-product-red-alu-case-w-product-red-sport-band-m-l-mrxk3/",


  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-41mm-midnight-aluminum-case-w-midnight-sport-loop-mr8y3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-45mm-midnight-aluminum-case-w-midnight-s-loop-mr9c3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-41mm-pink-aluminum-case-w-light-pink-s-loop-mr953/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-45mm-pink-aluminum-case-w-light-pink-s-loop-mr9j3/",

  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-41mm-silver-aluminum-case-with-winter-blue-sport-loop-mr923/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-45mm-silver-aluminum-case-w-winter-blue-s-loop-mr9f3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-41mm-starlight-aluminum-case-w-starlight-s-loop-mr8v3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-45mm-starlight-aluminum-case-w-starlight-sport-loop-mr983/",


  "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/watch-ultra-2-gps-cellular-49mm-titanium-case-with-blue-ocean-band-mreg3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/watch-ultra-2-gps-cellular-49mm-titanium-case-with-orange-ocean-band-mreh3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/watch-ultra-2-gps-cellular-49mm-titanium-case-with-white-ocean-band-mrej3/",


  "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/watch-ultra-2-gps-cellular-49mm-titanium-case-with-green-gray-trail-loop-s-m-mrf03/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/watch-ultra-2-gps-cellular-49mm-titanium-case-with-green-gray-trail-loop-m-l-mrf43/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/watch-ultra-2-gps-cellular-49mm-titanium-case-with-blue-black-trail-loop-s-m-mrf53/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/watch-ultra-2-gps-cellular-49mm-titanium-case-with-blue-black-trail-loop-m-l-mrf63/",

  "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/watch-ultra-2-gps-cellular-49mm-titanium-case-with-orange-beige-trail-loop-s-m-mrf13/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/watch-ultra-2-gps-cellular-49mm-titanium-case-with-orange-beige-trail-loop-m-l-mrf23/",

  "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/watch-ultra-2-gps-cellular-49mm-titanium-case-with-olive-alpine-loop-small-mrex3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/watch-ultra-2-gps-cellular-49mm-titanium-case-with-olive-alpine-loop-medium-mrey3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/watch-ultra-2-gps-cellular-49mm-titanium-case-with-olive-alpine-loop-large-mrf03-mrfk3/",

  "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/watch-ultra-2-gps-cellular-49mm-titanium-case-with-blue-alpine-loop-small-mrek3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/watch-ultra-2-gps-cellular-49mm-titanium-case-with-blue-alpine-loop-medium-mrep3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/watch-ultra-2-gps-cellular-49mm-titanium-case-with-blue-alpine-loop-large-mreq3/",


  "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/watch-ultra-2-gps-cellular-49mm-titanium-case-with-indigo-alpine-loop-small-mrer3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/watch-ultra-2-gps-cellular-49mm-titanium-case-with-indigo-alpine-loop-medium-mret3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/watch-ultra-2-gps-cellular-49mm-titanium-case-with-indigo-alpine-loop-large-mrew3/",
];

const arrLinkJabkoAWSSE = [
  "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-40mm-midnight-aluminum-case-with-midnight-sport-band--s-m---mr9x3-",
  "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-40mm-midnight-aluminum-case-with-midnight-sport-band--m-l---mr9y3-",
  "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-40mm-starlight-aluminum-case-with-starlight-sport-band--s-m---mr9u3-",
  "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-40mm-starlight-aluminum-case-starlight-sport-band-ml-mr9v3",
  "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-40mm-silver-aluminum-case-with-storm-blue-sport-band--s-m---mre13-",
  "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-40mm-silver-aluminum-case-with-storm-blue-sport-band--m-l---mre23-",

  "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-44mm-midnight-aluminum-case-with-midnight-sport-band--s-m---mre73-",
  "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-44mm-midnight-aluminum-case-with-midnight-sport-band--m-l---mre93-",
  "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-44mm-starlight-aluminum-case-with-starlight-sport-band--s-m---mre43-",
  "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-44mm-starlight-aluminum-case-with-starlight-sport-band--m-l---mre53-",
  "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-44mm-silver-aluminum-case-with-storm-blue-sport-band--s-m---mrec3-",
  "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-44mm-silver-aluminum-case-with-storm-blue-sport-band--m-l---mree3-",

  "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-40mm-midnight-aluminum-case-with-midnight-sport-loop--mre03-",
  "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-44mm-midnight-aluminum-case-with-midnight-sport-loop--mrea3-",
  "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-40mm-starlight-aluminum-case-with-starlight-sport-loop--mr9w3-",
  "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-44mm-starlight-aluminum-case-with-starlight-sport-loop--mre63-",
  "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-40mm-silver-aluminum-case-with-winter-blue-sport-loop--mre33-",
  "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-44mm-silver-aluminum-case-with-winter-blue-sport-loop--mref3-",



  "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-40mm-gps---lte--midnight-aluminum-case-with-midnight-sport-band--mnpl3-",
  "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-44mm-gps---lte--midnight-aluminum-case-with-midnight-sport-band--mnpy3-",
];
const arrLinkIstoreAWSSE = [
  "https://www.istore.ua/ua/item/apple-watch-se-gps-40mm-midnight-aluminium-case-with-midnight-sport-band-s-m/",
  "https://www.istore.ua/ua/item/apple-watch-se-gps-40mm-midnight-aluminium-case-with-midnight-sport-band-m-l/",
  "https://www.istore.ua/ua/item/apple-watch-se-gps-40mm-starlight-aluminium-case-with-starlight-sport-band-s-m/",
  "https://www.istore.ua/ua/item/apple-watch-se-gps-40mm-starlight-aluminium-case-with-starlight-sport-band-m-l/",
  "https://www.istore.ua/ua/item/apple-watch-se-gps-40mm-silver-aluminium-case-with-storm-blue-sport-band-s-m/",
  "https://www.istore.ua/ua/item/apple-watch-se-gps-40mm-silver-aluminium-case-with-storm-blue-sport-band-m-l/",

  "https://www.istore.ua/ua/item/apple-watch-se-gps-44mm-midnight-aluminium-case-with-midnight-sport-band-s-m/",
  "https://www.istore.ua/ua/item/apple-watch-se-gps-44mm-midnight-aluminium-case-with-midnight-sport-band-m-l/",
  "https://www.istore.ua/ua/item/apple-watch-se-gps-44mm-starlight-aluminium-case-with-starlight-sport-band-s-m/",
  "https://www.istore.ua/ua/item/apple-watch-se-gps-44mm-starlight-aluminium-case-with-starlight-sport-band-m-l/",
  "https://www.istore.ua/ua/item/apple-watch-se-gps-44mm-silver-aluminium-case-with-storm-blue-sport-band-s-m/",
  "https://www.istore.ua/ua/item/apple-watch-se-gps-44mm-silver-aluminium-case-with-storm-blue-sport-band-m-l/",

  "https://www.istore.ua/ua/item/apple-watch-se-gps-40mm-midnight-aluminium-case-with-midnight-sport-loop/",
  "https://www.istore.ua/ua/item/apple-watch-se-gps-44mm-midnight-aluminium-case-with-midnight-sport-loop/",
  "https://www.istore.ua/ua/item/apple-watch-se-gps-40mm-starlight-aluminium-case-with-starlight-sport-loop/",
  "https://www.istore.ua/ua/item/apple-watch-se-gps-44mm-starlight-aluminium-case-with-starlight-sport-loop/",
  "https://www.istore.ua/ua/item/apple-watch-se-gps-40mm-silver-aluminium-case-with-winter-blue-sport-loop/",
  "https://www.istore.ua/ua/item/apple-watch-se-gps-44mm-silver-aluminium-case-with-winter-blue-sport-loop/",
];

const arrLinkMobilePlanetAWSSE = [
  "https://mobileplanet.ua/apple-watch-se-2-gps-40mm-midnight-aluminium-case-289855",
  "https://mobileplanet.ua/apple-watch-se-2-gps-40mm-midnight-aluminium-case-289904",
  "https://mobileplanet.ua/apple-watch-se-2-gps-40mm-starlight-aluminium-case-289857",
  "https://mobileplanet.ua/apple-watch-se-2-gps-40mm-starlight-aluminium-case-289902",
  "https://mobileplanet.ua/apple-watch-se-2-gps-40mm-silver-aluminium-case-wi-289856",
  "https://mobileplanet.ua/apple-watch-se-2-gps-40mm-silver-aluminium-case-wi-289906",

  "https://mobileplanet.ua/apple-watch-se-2-gps-44mm-midnight-aluminium-case-289858",
  "https://mobileplanet.ua/apple-watch-se-2-gps-44mm-starlight-aluminium-case-293840",
  "https://mobileplanet.ua/apple-watch-se-2-gps-44mm-starlight-aluminium-case-289860",
  "https://mobileplanet.ua/apple-watch-se-2-gps-44mm-silver-aluminium-case-wi-293837",
  "https://mobileplanet.ua/apple-watch-se-2-gps-44mm-silver-aluminium-case-wi-289859",

  "https://mobileplanet.ua/apple-watch-se-2-gps-40mm-midnight-aluminium-case-289905",
  "https://mobileplanet.ua/apple-watch-se-2-gps-44mm-midnight-aluminium-case-289910",
  "https://mobileplanet.ua/apple-watch-se-2-gps-40mm-starlight-aluminium-case-289903",
  "https://mobileplanet.ua/apple-watch-se-2-gps-44mm-starlight-aluminium-case-289908",
  "https://mobileplanet.ua/apple-watch-se-2-gps-40mm-silver-aluminium-case-wi-289907",
  "https://mobileplanet.ua/apple-watch-se-2-gps-44mm-silver-aluminium-case-wi-289911",



  "https://mobileplanet.ua/apple-watch-se-2-gps-cellular-44mm-midnight-alu-ca-293831",
  "https://mobileplanet.ua/apple-watch-se-2-gps-plus-cellular-44mm-295600",
];

const arrLinkGroAWSSE = [
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-se-2/watch-se-2-gps-40mm-midnight-aluminium-case-with-midnight-sport-band-s-m-mr9x3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-se-2/watch-se-2-gps-40mm-midnight-aluminium-case-with-midnight-sport-band-m-l-mr9y3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-se-2/watch-se-2-gps-40mm-starlight-aluminium-case-with-starlight-sport-band-s-m-mr9u3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-se-2/watch-se-2-gps-40mm-starlight-aluminium-case-with-starlight-sport-band-m-l-mr9v3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-se-2/watch-se-2-gps-40mm-silver-aluminium-case-with-storm-blue-sport-band-s-m-mre13/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-se-2/watch-se-2-gps-40mm-silver-aluminium-case-with-storm-blue-sport-band-m-l-mre23/",

  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-se-2/watch-se-2-gps-44mm-midnight-aluminium-case-with-midnight-sport-band-s-m-mre73/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-se-2/watch-se-2-gps-44mm-midnight-aluminium-case-with-midnight-sport-band-m-l-mre93/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-se-2/watch-se-2-gps-44mm-starlight-aluminium-case-with-starlight-sport-band-s-m-mre43/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-se-2/watch-se-2-gps-44mm-starlight-aluminium-case-with-starlight-sport-band-m-l-mre53/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-se-2/watch-se-2-gps-44mm-silver-aluminium-case-with-storm-blue-sport-band-s-m-mrec3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-se-2/watch-se-2-gps-44mm-silver-aluminium-case-with-storm-blue-sport-band-m-l-mree3/",

  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-se-2/watch-se-2-gps-40mm-midnight-aluminium-case-with-midnight-sport-loop-mre03/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-se-2/watch-se-2-gps-44mm-midnight-aluminium-case-with-midnight-sport-loop-mrea3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-se-2/watch-se-2-gps-40mm-starlight-aluminium-case-with-starlight-sport-loop-mr9w3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-se-2/watch-se-2-gps-44mm-starlight-aluminium-case-with-starlight-sport-loop-mre63/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-se-2/watch-se-2-gps-40mm-silver-aluminium-case-with-winter-blue-sport-loop-mre33/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-se-2/watch-se-2-gps-44mm-silver-aluminium-case-with-winter-blue-sport-loop-mref3/",


  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-se-2/watch-se-2-gps-cellular-40mm-midnight-aluminum-case-with-midnight-sport-band-mnpl3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-se-2/smart-chasy-apple-watch-se-2-2023-40mm-gps-lte-midnight-aluminum-case-with-midnight-sport-band-s-m-mrg63/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-se-2/smart-chasy-apple-watch-se-2-2023-40mm-gps-lte-midnight-aluminum-case-with-midnight-sport-band-m-l-mrg93/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-se-2/watch-se-2-gps-cellular-44mm-midnight-aluminum-case-with-midnight-sport-band-mnpy3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-se-2/smart-chasy-apple-watch-se-2-2023-44mm-gps-lte-midnight-aluminum-case-with-midnight-sport-band-s-m-mrh43/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-se-2/smart-chasy-apple-watch-se-2-2023-44mm-gps-lte-midnight-aluminum-case-with-midnight-sport-band-m-l-mrh73/",

  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-se-2/watch-se-2-gps-cellular-40mm-starlight-aluminum-case-with-starlight-sport-band-mnph3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-se-2/smart-chasy-apple-watch-se-2-2023-40mm-gps-lte-starlight-aluminum-case-with-starlight-sport-band-s-m-mrfw3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-se-2/smart-chasy-apple-watch-se-2-2023-40mm-gps-lte-starlight-aluminum-case-with-starlight-sport-band-m-l-mrg03/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-se-2/watch-se-2-gps-cellular-44mm-starlight-aluminum-case-with-starlight-sport-band-mnpt3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-se-2/smart-chasy-apple-watch-se-2-2023-44mm-gps-lte-starlight-aluminum-case-with-starlight-sport-band-m-l-mrgw3/",

  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-se-2/smart-chasy-apple-watch-se-2-2023-40mm-gps-lte-silver-aluminum-case-with-storm-blue-sport-band-s-m-mrgh3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-se-2/smart-chasy-apple-watch-se-2-2023-44mm-gps-lte-silver-aluminum-case-with-storm-blue-sport-band-s-m-mrhe3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-se-2/smart-chasy-apple-watch-se-2-2023-44mm-gps-lte-silver-aluminum-case-with-storm-blue-sport-band-m-l-mrhh3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-se-2/watch-se-2-gps-cellular-40mm-silver-aluminum-case-with-white-sport-band-mnpp3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-se-2/watch-se-2-gps-cellular-44mm-silver-aluminum-case-with-white-sport-band-mnq23/",
];

const arrLinkEstoreAWSSE = [
  "https://estore.ua/ua/apple-watch-series-se-3-40mm-midnight-aluminium-case-with-sport-band/?q=mr9x3",
  "https://estore.ua/ua/apple-watch-se-gps-40mm-midnight-aluminium-case-with-sport-band-ml-mr9y3/?q=mr9y3",
  "https://estore.ua/ua/apple-watch-series-se-3-40mm-starlight-aluminium-case-with-sport-band/?q=mr9u3",
  "https://estore.ua/ua/apple-watch-se-gps-40mm-starlight-aluminium-case-with-sport-band-ml-mr9v3/?q=mr9v3",
  "https://estore.ua/ua/apple-watch-se-gps-40mm-silver-aluminum-case-with-storm-blue-sport-band-sm-mre13/?q=mre13",
  "https://estore.ua/ua/apple-watch-se-gps-40mm-silver-aluminum-case-with-storm-blue-sport-band-ml-mre23/?q=mre23",

  "https://estore.ua/ua/apple-watch-series-se-3-44mm-midnight-aluminium-case-with-sport-band/?q=mre73",
  "https://estore.ua/ua/apple-watch-se-gps-44mm-midnight-aluminum-case-with-midnight-sport-band-ml-mre93/?q=mre93",
  "https://estore.ua/ua/apple-watch-series-se-3-44mm-starlight-aluminium-case-with-sport-band/?q=mre43",
  "https://estore.ua/ua/apple-watch-se-gps-44mm-starlight-aluminum-case-with-starlight-sport-band-ml-mre53/?q=mre53",
  "https://estore.ua/ua/apple-watch-se-gps-44mm-silver-aluminum-case-with-storm-blue-sport-band-sm-mrec3/?q=mrec3",
  "https://estore.ua/ua/apple-watch-se-gps-44mm-silver-aluminum-case-with-storm-blue-sport-band-ml-mree3/?q=mree3",

  "https://estore.ua/ua/apple-watch-se-gps-40mm-midnight-aluminum-case-with-midnight-sport-loop-mre03/?q=mre03",
  "https://estore.ua/ua/apple-watch-se-gps-44mm-midnight-aluminum-case-with-midnight-sport-loop-mrea3/?q=mrea3",
  "https://estore.ua/ua/apple-watch-se-gps-40mm-starlight-aluminum-case-with-starlight-sport-loop-mr9w3/?q=mr9w3",
  "https://estore.ua/ua/apple-watch-se-gps-44mm-starlight-aluminum-case-with-starlight-sport-loop-mre63/?q=mre63",
  "https://estore.ua/ua/apple-watch-se-gps-40mm-silver-aluminum-case-with-winter-blue-sport-loop-mre33/?q=mre33",
  "https://estore.ua/ua/apple-watch-se-gps-44mm-silver-aluminum-case-with-winter-blue-sport-loop-mref3/?q=mref3",



  "https://estore.ua/ua/apple-watch-series-se-2-40mm-lte-midnight-aluminium-case-with-sport-band/?q=mnpl3",
  "https://estore.ua/ua/apple-watch-se-gps-cellular-40mm-midnight-aluminium-case-with-sport-band-sm-mrg63/?q=mrg63",
  "https://estore.ua/ua/apple-watch-series-se-2-44mm-lte-midnight-aluminium-case-with-sport-band/?q=mnpy3",
  "https://estore.ua/ua/apple-watch-se-gps-cellular-44mm-midnight-aluminium-case-with-sport-band-sm-mrh43/?q=mrh43",
  "https://estore.ua/ua/apple-watch-se-gps-cellular-44mm-midnight-aluminium-case-with-sport-band-ml-mrh73/?q=mrh73",

  "https://estore.ua/ua/apple-watch-series-se-2-40mm-lte-starlight-aluminium-case-with-sport-band/?q=mnph3",
  "https://estore.ua/ua/apple-watch-se-gps-cellular-40mm-starlight-aluminium-case-with-sport-band-sm-mrfw3/?q=mrfw3",
  "https://estore.ua/ua/apple-watch-se-gps-cellular-40mm-starlight-aluminium-case-with-sport-band-ml-mrg03/?q=mrg03",
  "https://estore.ua/ua/apple-watch-series-se-2-44mm-lte-starlight-aluminium-case-with-sport-band/?q=mnpt3",
  "https://estore.ua/ua/apple-watch-se-gps-cellular-44mm-starlight-aluminium-case-with-sport-band-ml-mrgw3/?q=mrgw3",

  "https://estore.ua/ua/apple-watch-se-gps-cellular-40mm-silver-aluminum-case-with-storm-blue-sport-band-sm-mrgh3/?q=mrgh3",
  "https://estore.ua/ua/apple-watch-se-gps-cellular-44mm-silver-aluminum-case-with-storm-blue-sport-band-sm-mrhe3/?q=mrhe3",
  "https://estore.ua/ua/apple-watch-se-gps-cellular-44mm-silver-aluminum-case-with-storm-blue-sport-band-ml-mrhh3/?q=mrhh3",
  "https://estore.ua/ua/apple-watch-series-se-2-40mm-lte-silver-aluminium-case-with-sport-band/?q=mnpp3",
  "https://estore.ua/ua/apple-watch-series-se-2-44mm-lte-silver-aluminium-case-with-sport-band/?q=mnq23",

  "https://estore.ua/ua/apple-watch-se-gps-cellular-40mm-midnight-aluminum-case-with-midnight-sport-loop-mrgd3/?q=mrgd3",
  "https://estore.ua/ua/apple-watch-se-gps-cellular-44mm-midnight-aluminum-case-with-midnight-sport-loop-mrha3/?q=mrha3",
  "https://estore.ua/ua/apple-watch-se-gps-cellular-40mm-starlight-aluminum-case-with-starlight-sport-loop-mrg33/?q=mrg33",
  "https://estore.ua/ua/apple-watch-se-gps-cellular-44mm-starlight-aluminum-case-with-starlight-sport-loop-mrh13/?q=mrh13",
  "https://estore.ua/ua/apple-watch-se-gps-cellular-40mm-silver-aluminum-case-with-winter-blue-sport-loop-mrgp3/?q=mrgp3",
  "https://estore.ua/ua/apple-watch-se-gps-cellular-44mm-silver-aluminum-case-with-winter-blue-sport-loop-mrhl3/?q=mrhl3"
];


const arrLinkiPeopleAws9Lte = [
  "https://www.ipeople.in.ua/products/apple-watch-series-9-gps--cellular-41mm-midnight-alu-case-w-midnight-sport-band---sm-mrhr3",
  "https://www.ipeople.in.ua/products/apple-watch-series-9-gps--cellular-41mm-midnight-alu-case-w-midnight-s-band---ml-mrht3",
  "https://www.ipeople.in.ua/products/apple-watch-series-9-gps--cellular-45mm-midnight-aluminum-case-w-midnight-sport-band---sm-mrmc3",
  "https://www.ipeople.in.ua/products/apple-watch-series-9-gps--cellular-45mm-midnight-alu-case-w-midnight-s-band---ml-mrmd3",


  "https://www.ipeople.in.ua/products/apple-watch-series-9-gps--cellular-41mm-starlight-alu-case-w-starlight-sport-band---sm-mrhn3",
  "https://www.ipeople.in.ua/products/apple-watch-series-9-gps--cellular-45mm-starlight-alu-case-w-starlight-sport-band---sm-mrm83",
  "https://www.ipeople.in.ua/products/apple-watch-series-9-gps--cellular-45mm-starlight-alu-case-w-starlight-sport-band---ml-mrm93",


  "https://www.ipeople.in.ua/products/apple-watch-series-9-gps--cellular-41mm-pink-alu-case-w-light-pink-sport-band---sm-mrhy3",
  "https://www.ipeople.in.ua/products/apple-watch-series-9-gps--cellular-41mm-pink-alu-case-w-light-pink-sport-band---ml-mrj03",
  "https://www.ipeople.in.ua/products/apple-watch-series-9-gps--cellular-45mm-pink-alu-case-w-light-pink-sport-band---sm-mrmk3",
  "https://www.ipeople.in.ua/products/apple-watch-series-9-gps--cellular-45mm-pink-aluminum-case-w-light-pink-sport-band---ml-mrml3",

  "https://www.ipeople.in.ua/products/apple-watch-series-9-gps--cellular-41mm-silver-alu-case-w-storm-blue-sband---sm-mrhv3",
  "https://www.ipeople.in.ua/products/apple-watch-series-9-gps--cellular-41mm-silver-alu-case-w-storm-blue-sport-band---ml-mrhw3",
  "https://www.ipeople.in.ua/products/apple-watch-series-9-gps--cellular-45mm-silver-aluminum-case-w-storm-blue-sport-band---sm-mrmg3",
  "https://www.ipeople.in.ua/products/apple-watch-series-9-gps--cellular-45mm-silver-alu-case-w-storm-blue-s-band---ml-mrmh3",


  "https://www.ipeople.in.ua/products/apple-watch-series-9-gps--cellular-41mm-product-red-alu-case-w-product-red-sport-band---sm-mry63",
  "https://www.ipeople.in.ua/products/apple-watch-series-9-gps--cellular-41mm-product-red-alu-case-w-product-red-sport-band---ml-mry83",
  "https://www.ipeople.in.ua/products/apple-watch-series-9-gps--cellular-45mm-product-red-alu-case-w-product-red-s-band---sm-mrye3",
  "https://www.ipeople.in.ua/products/apple-watch-series-9-gps--cellular-45mm-product-red-alu-case-w-product-red-s-band---ml-mryg3",


  "https://www.ipeople.in.ua/products/apple-watch-series-9-gps--cellular-41mm-midnight-alu-case-w-midnight-sport-loop-mrhu3",
  "https://www.ipeople.in.ua/products/apple-watch-series-9-gps--cellular-45mm-midnight-alu-case-w-midnight-s-loop-mrmf3",
  "https://www.ipeople.in.ua/products/apple-watch-series-9-gps--cellular-41mm-starlight-alu-case-w-starlight-s-loop-mrhq3",
  "https://www.ipeople.in.ua/products/apple-watch-series-9-gps--cellular-45mm-starlight-alu-case-w-starlight-sport-loop-mrma3",

  "https://www.ipeople.in.ua/products/apple-watch-series-9-gps--cellular-41mm-pink-alu-case-w-light-pink-s-loop-mrj13",
  "https://www.ipeople.in.ua/products/apple-watch-series-9-gps--cellular-45mm-pink-alu-case-w-light-pink-sport-loop-mrmm3",
  "https://www.ipeople.in.ua/products/apple-watch-series-9-gps--cellular-41mm-silver-alu-case-w-winter-blue-sport-loop-mrhx3",
];

const arrLinkEstoreAws9Lte = [
  "https://estore.ua/ua/apple-watch-series-9-41mm-gps-cellular-midnight-aluminium-case-with-midnight-sport-band-sm-mrhr3/?q=mrhr3",
  "https://estore.ua/ua/apple-watch-series-9-41mm-gps-cellular-midnight-aluminium-case-with-midnight-sport-band-ml-mr9a3/?q=mrht3",
  "https://estore.ua/ua/apple-watch-series-9-45mm-gps-cellular-midnight-aluminium-case-with-midnight-sport-band-sm-mrmc3/?q=mrmc3",
  "https://estore.ua/ua/apple-watch-series-9-45mm-gps-cellular-midnight-aluminium-case-with-midnight-sport-band-ml-mrmd3/?q=mrmd3",

  "https://estore.ua/ua/apple-watch-series-9-41mm-gps-cellular-starlight-aluminium-case-with-starlight-sport-band-sm-mrhn3/?q=mrhn3",
  "https://estore.ua/ua/apple-watch-series-9-45mm-gps-cellular-starlight-aluminium-case-with-starlight-sport-band-sm-mrm83/?q=mrm83",
  "https://estore.ua/ua/apple-watch-series-9-45mm-gps-cellular-starlight-aluminium-case-with-starlight-sport-band-ml-mrm93/?q=mrm93",

  "https://estore.ua/ua/apple-watch-series-9-41mm-gps-cellular-pink-aluminium-case-with-light-pink-sport-band-sm-mrhy3/?q=mrhy3",
  "https://estore.ua/ua/apple-watch-series-9-41mm-gps-cellular-pink-aluminium-case-with-light-pink-sport-band-ml-mrj03/?q=mrj03",
  "https://estore.ua/ua/apple-watch-series-9-45mm-gps-cellular-pink-aluminium-case-with-light-pink-sport-band-sm-mrmk3/?q=mrmk3",

  "https://estore.ua/ua/apple-watch-series-9-41mm-gps-cellular-silver-aluminium-case-with-storm-blue-sport-band-sm-mrhv3/?q=mrhv3",
  "https://estore.ua/ua/apple-watch-series-9-41mm-gps-cellular-silver-aluminium-case-with-storm-blue-sport-band-ml-mrhw3/?q=mrhw3",
  "https://estore.ua/ua/apple-watch-series-9-45mm-gps-cellular-silver-aluminium-case-with-storm-blue-sport-band-ml-mrmh3/?q=mrmh3",


  "https://estore.ua/ua/apple-watch-series-9-41mm-gps-cellular-productred-aluminium-case-with-productred-sport-band-sm-mry63/?q=mry63",
  "https://estore.ua/ua/apple-watch-series-9-41mm-gps-cellular-productred-aluminium-case-with-productred-sport-band-ml-mry83/?q=mry83",
  "https://estore.ua/ua/apple-watch-series-9-45mm-gps-cellular-productred-aluminium-case-with-productred-sport-band-sm-mrye3/?q=mrye3",


  "https://estore.ua/ua/apple-watch-series-9-gps-cellular-41mm-midnight-aluminum-case-with-midnight-sport-loop-mrhu3/?q=mrhu3",
  "https://estore.ua/ua/apple-watch-series-9-gps-cellular-45mm-midnight-aluminum-case-with-midnight-sport-loop-mrmf3/?q=mrmf3",
  "https://estore.ua/ua/apple-watch-series-9-gps-cellular-45mm-starlight-aluminum-case-with-starlight-sport-loop-mrma3/?q=mrma3",

  "https://estore.ua/ua/apple-watch-series-9-gps-cellular-45mm-pink-aluminum-case-with-light-pink-sport-loop-mrmm3/?q=mrmm3",
  "https://estore.ua/ua/apple-watch-series-9-gps-cellular-41mm-silver-aluminum-case-with-winter-blue-sport-loop-mrhx3/?q=mrhx3",
];

const arrLinkMobilePlanetAws9Lte = [
  "https://mobileplanet.ua/apple-watch-series-9-gps-cellular-41mm-midnight-al-287085",
  "https://mobileplanet.ua/apple-watch-series-9-gps-cellular-45mm-midnight-al-287108",
  "https://mobileplanet.ua/apple-watch-series-9-gps-cellular-45mm-midnight-al-287106",

  "https://mobileplanet.ua/apple-watch-series-9-gps-cellular-41mm-starlight-a-287099",


  "https://mobileplanet.ua/apple-watch-series-9-gps-cellular-45mm-pink-alu-ca-287109",


  "https://mobileplanet.ua/apple-watch-series-9-gps-cellular-41mm-silver-alu-287092",

  "https://mobileplanet.ua/apple-watch-series-9-gps-cellular-41mm-starlight-a-287098",
];

const arrLinkGroAws9Lte = [
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-cellular-41mm-midnight-alu-case-w-midnight-sport-band-s-m-mrhr3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-cellular-41mm-midnight-alu-case-w-midnight-s-band-m-l-mrht3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-cellular-45mm-midnight-aluminum-case-w-midnight-sport-band-s-m-mrmc3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-cellular-45mm-midnight-alu-case-w-midnight-s-band-m-l-mrmd3/",

  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-cellular-41mm-starlight-alu-case-w-starlight-sport-band-s-m-mrhn3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-cellular-41mm-starlight-alu-case-w-starlight-sport-band-m-l-mrhp3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-cellular-45mm-starlight-alu-case-w-starlight-sport-band-s-m-mrm83/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-cellular-45mm-starlight-alu-case-w-starlight-sport-band-m-l-mrm93/",

  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-cellular-41mm-pink-alu-case-w-light-pink-sport-band-s-m-mrhy3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-cellular-41mm-pink-alu-case-w-light-pink-sport-band-m-l-mrj03/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-cellular-45mm-pink-alu-case-w-light-pink-sport-band-s-m-mrmk3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-cellular-45mm-pink-aluminum-case-w-light-pink-sport-band-m-l-mrml3/",

  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-cellular-41mm-silver-alu-case-w-storm-blue-s-band-s-m-mrhv3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-cellular-41mm-silver-alu-case-w-storm-blue-sport-band-m-l-mrhw3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-cellular-45mm-silver-aluminum-case-w-storm-blue-sport-band-s-m-mrmg3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-cellular-45mm-silver-alu-case-w-storm-blue-s-band-m-l-mrmh3/",


  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-cellular-41mm-product-red-alu-case-w-product-red-sport-band-s-m-mry63/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-cellular-41mm-product-red-alu-case-w-product-red-sport-band-m-l-mry83/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-cellular-45mm-product-red-alu-case-w-product-red-s-band-s-m-mrye3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-cellular-45mm-product-red-alu-case-w-product-red-s-band-m-l-mryg3/",


  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-cellular-41mm-midnight-alu-case-w-midnight-sport-loop-mrhu3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-cellular-45mm-midnight-alu-case-w-midnight-s-loop-mrmf3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-cellular-41mm-starlight-alu-case-w-starlight-s-loop-mrhq3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-cellular-45mm-starlight-alu-case-w-starlight-sport-loop-mrma3/",

  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-cellular-41mm-pink-alu-case-w-light-pink-s-loop-mrj13/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-cellular-45mm-pink-alu-case-w-light-pink-sport-loop-mrmm3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-9/watch-series-9-gps-cellular-41mm-silver-alu-case-w-winter-blue-sport-loop-mrhx3/",
];


const arrLinkIpeopleAws10 = [
  "https://www.ipeople.in.ua/products/apple-watch-series-10-gps-42mm-silver-alu-case-w-denim-sport-band---sm-mwwa3",
"https://www.ipeople.in.ua/products/apple-watch-series-10-gps-42mm-silver-alu-case-w-denim-sport-band---ml-mwwc3",
"https://www.ipeople.in.ua/products/apple-watch-series-10-gps-42mm-silver-aluminum-case-w-blue-cloud-sport-loop-mwwd3",
"https://www.ipeople.in.ua/products/apple-watch-series-10-gps-42mm-jet-black-alu-case-w-black-sport-band---sm-mwwe3",
"https://www.ipeople.in.ua/products/apple-watch-series-10-42mm-jet-black-aluminum-case-with-black-sport-band---ml-mxlk3",
"https://www.ipeople.in.ua/products/apple-watch-series-10-gps-42mm-jet-black-alu-case-w-ink-sport-loop-mwwg3",
"https://www.ipeople.in.ua/products/apple-watch-series-10-gps-42mm-rose-gold-alu-case-w-light-blush-sport-band---sm-mwwh3",
"https://www.ipeople.in.ua/products/apple-watch-series-10-gps-42mm-rose-gold-alu-case-w-light-blush-sport-band---ml-mwwj3",
"https://www.ipeople.in.ua/products/apple-watch-series-10-gps-46mm-silver-alu-case-w-denim-sport-band---sm-mwwl3",
"https://www.ipeople.in.ua/products/apple-watch-series-10-gps-46mm-silver-alu-case-w-denim-sport-band---ml-mwwm3",
"https://www.ipeople.in.ua/products/apple-watch-series-10-gps-46mm-silver-aluminum-case-w-blue-cloud-sport-loop-mwwn3",
"https://www.ipeople.in.ua/products/apple-watch-series-10-46mm-jet-black-aluminum-case-with-black-sport-band---sm-mwwp3",
"https://www.ipeople.in.ua/products/apple-watch-series-10-46mm-jet-black-aluminum-case-with-black-sport-band---ml-mwwq3",
"https://www.ipeople.in.ua/products/apple-watch-series-10-gps-46mm-jet-black-aluminum-case-w-ink-sport-loop-mwwr3",
"https://www.ipeople.in.ua/products/apple-watch-series-10-gps-46mm-rose-gold-alu-case-w-light-blush-sport-band---sm-mwwt3",
"https://www.ipeople.in.ua/products/apple-watch-series-10-gps-46mm-rose-gold-alu-case-w-light-blush-sport-band---ml-mwwu3",
"https://www.ipeople.in.ua/products/apple-watch-ultra-2-gps--cellular-49mm-black-titanium-case-with-black-ocean-band-mx4p3",
"https://www.ipeople.in.ua/products/apple-watch-ultra-2-gps--cellular-49mm-black-titanium-case-with-black-titanium-milanese-loop---sm-mx4w3",
"https://www.ipeople.in.ua/products/apple-watch-ultra-2-gps--cellular-49mm-black-titanium-case-with-black-titanium-milanese-loop---ml-mx5u3",
"https://www.ipeople.in.ua/products/apple-watch-ultra-2-gps--cellular-49mm-black-titanium-case-with-black-titanium-milanese-loop---xl-mx5v3",
"https://www.ipeople.in.ua/products/apple-watch-ultra-2-gps--cellular-49mm-black-titanium-case-with-dark-green-alpine-loop---m-mx4r3",
"https://www.ipeople.in.ua/products/apple-watch-ultra-2-gps--cellular-49mm-black-titanium-case-with-dark-green-alpine-loop---l-mx4t3",
"https://www.ipeople.in.ua/products/apple-watch-ultra-2-gps--cellular-49mm-black-titanium-case-with-black-trail-loop---sm-mx4u3",
"https://www.ipeople.in.ua/products/apple-watch-ultra-2-gps--cellular-49mm-black-titanium-case-with-black-trail-loop---ml-mx4v3",
"https://www.ipeople.in.ua/products/apple-watch-ultra-2-gps--cellular-49mm-natural-titanium-case-with-natural-titanium-milanese-loop---sm-mx4m3",
"https://www.ipeople.in.ua/products/apple-watch-ultra-2-gps--cellular-49mm-natural-titanium-case-with-natural-titanium-milanese-loop---ml-mx5r3",
"https://www.ipeople.in.ua/products/apple-watch-ultra-2-gps--cellular-49mm-natural-titanium-case-with-natural-titanium-milanese-loop---xl-mx5t3",
]

const arrLinkJabkoAWS10andUltra2024 = [
  "https://jabko.ua/apple-watch/apple-watch-series-10/apple-watch-series-10-gps-42mm-silver-aluminum-case-with-denim-sport-band-sm",
  "https://jabko.ua/apple-watch/apple-watch-series-10/apple-watch-series-10-gps-42mm-silver-aluminum-case-with-denim-sport-band-ml",
  "https://jabko.ua/apple-watch/apple-watch-series-10/apple-watch-series-10-gps-42mm-silver-aluminum-case-with-blue-cloud-sport-loop",

  "https://jabko.ua/apple-watch/apple-watch-series-10/apple-watch-series-10-42mm-jet-black-aluminum-case-with-black-sport-band-2024",
  "https://jabko.ua/apple-watch/apple-watch-series-10/apple-watch-series-10-42mm-jet-black-aluminum-case-with-black-sport-band-ml",
  "https://jabko.ua/apple-watch/apple-watch-series-10/apple-watch-series-10-gps-42mm-jet-black-aluminum-case-with-ink-sport-loop",

  "https://jabko.ua/apple-watch/apple-watch-series-10/apple-watch-series-10-gps-42mm-rose-gold-aluminum-case-with-light-blush-sport-band-sm",
  "https://jabko.ua/apple-watch/apple-watch-series-10/apple-watch-series-10-gps-42mm-rose-gold-aluminum-case-with-light-blush-sport-band-ml",
  "https://jabko.ua/apple-watch/apple-watch-series-10/apple-watch-series-10-gps-42mm-rose-gold-aluminum-case-with-plum-sport-loop",

  "https://jabko.ua/apple-watch/apple-watch-series-10/apple-watch-series-10-gps-46mm-silver-aluminum-case-with-denim-sport-band-sm",
  "https://jabko.ua/apple-watch/apple-watch-series-10/apple-watch-series-10-gps-46mm-silver-aluminum-case-with-denim-sport-band-ml",
  "https://jabko.ua/apple-watch/apple-watch-series-10/apple-watch-series-10-gps-46mm-silver-aluminum-case-with-blue-cloud-sport-loop",

  "https://jabko.ua/apple-watch/apple-watch-series-10/apple-watch-series-10-46mm-jet-black-aluminum-case-with-black-sport-band-2024",
  "https://jabko.ua/apple-watch/apple-watch-series-10/apple-watch-series-10-46mm-jet-black-aluminum-case-with-black-sport-band-ml",
  "https://jabko.ua/apple-watch/apple-watch-series-10/apple-watch-series-10-gps-46mm-jet-black-aluminum-case-with-ink-sport-loop",

  "https://jabko.ua/apple-watch/apple-watch-series-10/apple-watch-series-10-gps-46mm-rose-gold-aluminum-case-with-light-blush-sport-band-sm",
  "https://jabko.ua/apple-watch/apple-watch-series-10/apple-watch-series-10-gps-46mm-rose-gold-aluminum-case-with-light-blush-sport-band-ml",
  "https://jabko.ua/apple-watch/apple-watch-series-10/apple-watch-series-10-gps-46mm-rose-gold-aluminum-case-with-plum-sport-loop",

  "https://jabko.ua/apple-watch/apple-watch-ultra-2/apple-watch-ultra-2-49mm-gps--lte-satin-black-titanium-case-with-black-ocean-band",

  "https://jabko.ua/apple-watch/apple-watch-ultra-2/apple-watch-ultra-2-49mm-gps--lte-satin-black-titanium-case-with-black-titanium-milanese-loop-2024",
  "https://jabko.ua/apple-watch/apple-watch-ultra-2/apple-watch-ultra-2-49mm-gps--lte-satin-black-titanium-case-with-black-titanium-milanese-loop-medium-2024",
  "https://jabko.ua/apple-watch/apple-watch-ultra-2/apple-watch-ultra-2-49mm-gps--lte-satin-black-titanium-case-with-black-titanium-milanese-loop-large-2024",


  "https://jabko.ua/apple-watch/apple-watch-ultra-2/apple-watch-ultra-2-49mm-gps--lte-satin-black-titanium-case-with-dark-green-alpine-loop",
  "https://jabko.ua/apple-watch/apple-watch-ultra-2/apple-watch-ultra-2-49mm-gps--lte-satin-black-titanium-case-with-dark-green-alpine-loop-medium",
  "https://jabko.ua/apple-watch/apple-watch-ultra-2/apple-watch-ultra-2-49mm-gps--lte-satin-black-titanium-case-with-dark-green-alpine-loop-large",

  "https://jabko.ua/apple-watch/apple-watch-ultra-2/apple-watch-ultra-2-49mm-gps--lte-satin-black-titanium-case-with-black-trail-loop",
  "https://jabko.ua/apple-watch/apple-watch-ultra-2/apple-watch-ultra-2-49mm-gps--lte-satin-black-titanium-case-with-black-trail-loop-ml",

  "https://jabko.ua/apple-watch/apple-watch-ultra-2/apple-watch-ultra-2-49mm-gps--lte-titanium-case-with-navy-ocean-band",

  "https://jabko.ua/apple-watch/apple-watch-ultra-2/apple-watch-ultra-2-49mm-gps--lte-titanium-case-with-natural-titanium-milanese-loop-small",
  "https://jabko.ua/apple-watch/apple-watch-ultra-2/apple-watch-ultra-2-49mm-gps--lte-titanium-case-with-natural-titanium-milanese-loop-medium",
  "https://jabko.ua/apple-watch/apple-watch-ultra-2/apple-watch-ultra-2-49mm-gps--lte-titanium-case-with-natural-titanium-milanese-loop-large",

  "https://jabko.ua/apple-watch/apple-watch-ultra-2/apple-watch-ultra-2-49mm-gps--lte-titanium-case-with-tan-alpine-loop-small",
  "https://jabko.ua/apple-watch/apple-watch-ultra-2/apple-watch-ultra-2-49mm-gps--lte-titanium-case-with-tan-alpine-loop-medium",
  "https://jabko.ua/apple-watch/apple-watch-ultra-2/apple-watch-ultra-2-49mm-gps--lte-titanium-case-with-tan-alpine-loop-large",

  "https://jabko.ua/apple-watch/apple-watch-ultra-2/apple-watch-ultra-2-49mm-gps--lte-titanium-case-with-blue-trail-loop-sm",
  "https://jabko.ua/apple-watch/apple-watch-ultra-2/apple-watch-ultra-2-49mm-gps--lte-titanium-case-with-blue-trail-loop-ml",
];
const arrLinkiPeopleAWS10andUltra2024 = [
  "https://www.ipeople.in.ua/products/apple-watch-series-10-gps-42mm-silver-alu-case-w-denim-sport-band---sm-mwwa3",
  "https://www.ipeople.in.ua/products/apple-watch-series-10-gps-42mm-silver-alu-case-w-denim-sport-band---ml-mwwc3",
  // "https://www.ipeople.in.ua/products/apple-watch-series-10-gps-42mm-silver-aluminum-case-w-blue-cloud-sport-loop-mwwd3",

  "https://www.ipeople.in.ua/products/apple-watch-series-10-gps-42mm-jet-black-alu-case-w-black-sport-band---sm-mwwe3",
  "https://www.ipeople.in.ua/products/apple-watch-series-10-42mm-jet-black-aluminum-case-with-black-sport-band---ml-mxlk3",
  "https://www.ipeople.in.ua/products/apple-watch-series-10-gps-42mm-jet-black-alu-case-w-ink-sport-loop-mwwg3",

  "https://www.ipeople.in.ua/products/apple-watch-series-10-gps-42mm-rose-gold-alu-case-w-light-blush-sport-band---sm-mwwh3",
  "https://www.ipeople.in.ua/products/apple-watch-series-10-gps-42mm-rose-gold-alu-case-w-light-blush-sport-band---ml-mwwj3",

  // "https://www.ipeople.in.ua/products/apple-watch-series-10-gps-46mm-silver-alu-case-w-denim-sport-band---sm-mwwl3",
  "https://www.ipeople.in.ua/products/apple-watch-series-10-gps-46mm-silver-alu-case-w-denim-sport-band---ml-mwwm3",
  // "https://www.ipeople.in.ua/products/apple-watch-series-10-gps-46mm-silver-aluminum-case-w-blue-cloud-sport-loop-mwwn3",

  "https://www.ipeople.in.ua/products/apple-watch-series-10-46mm-jet-black-aluminum-case-with-black-sport-band---sm-mwwp3",
  "https://www.ipeople.in.ua/products/apple-watch-series-10-46mm-jet-black-aluminum-case-with-black-sport-band---ml-mwwq3",
  "https://www.ipeople.in.ua/products/apple-watch-series-10-gps-46mm-jet-black-aluminum-case-w-ink-sport-loop-mwwr3",

  "https://www.ipeople.in.ua/products/apple-watch-series-10-gps-46mm-rose-gold-alu-case-w-light-blush-sport-band---sm-mwwt3",
  "https://www.ipeople.in.ua/products/apple-watch-series-10-gps-46mm-rose-gold-alu-case-w-light-blush-sport-band---ml-mwwu3",

  "https://www.ipeople.in.ua/products/apple-watch-ultra-2-gps--cellular-49mm-black-titanium-case-with-black-ocean-band-mx4p3",

  "https://www.ipeople.in.ua/products/apple-watch-ultra-2-gps--cellular-49mm-black-titanium-case-with-black-titanium-milanese-loop---sm-mx4w3",
  // "https://www.ipeople.in.ua/products/apple-watch-ultra-2-gps--cellular-49mm-black-titanium-case-with-black-titanium-milanese-loop---ml-mx5u3",
  // "https://www.ipeople.in.ua/products/apple-watch-ultra-2-gps--cellular-49mm-black-titanium-case-with-black-titanium-milanese-loop---xl-mx5v3",


  "https://www.ipeople.in.ua/products/apple-watch-ultra-2-gps--cellular-49mm-black-titanium-case-with-dark-green-alpine-loop---m-mx4r3",
  "https://www.ipeople.in.ua/products/apple-watch-ultra-2-gps--cellular-49mm-black-titanium-case-with-dark-green-alpine-loop---l-mx4t3",

  // "https://www.ipeople.in.ua/products/apple-watch-ultra-2-gps--cellular-49mm-black-titanium-case-with-black-trail-loop---sm-mx4u3",
  "https://www.ipeople.in.ua/products/apple-watch-ultra-2-gps--cellular-49mm-black-titanium-case-with-black-trail-loop---ml-mx4v3",


  // "https://www.ipeople.in.ua/products/apple-watch-ultra-2-gps--cellular-49mm-natural-titanium-case-with-natural-titanium-milanese-loop---sm-mx4m3",
  // "https://www.ipeople.in.ua/products/apple-watch-ultra-2-gps--cellular-49mm-natural-titanium-case-with-natural-titanium-milanese-loop---ml-mx5r3",
  // "https://www.ipeople.in.ua/products/apple-watch-ultra-2-gps--cellular-49mm-natural-titanium-case-with-natural-titanium-milanese-loop---xl-mx5t3",
];
const arrLinkEstoreAWS10andUltra2024 = [
  "https://estore.ua/ua/apple-watch-series-10-silver-aluminium-case-with-sport-band/?q=mwwa3",
  "https://estore.ua/ua/apple-watch-series-10-42mm-silver-aluminium-case-with-denim-sport-band-ml-mwwc3/?q=mwwc3",
  "https://estore.ua/ua/apple-watch-series-10-42mm-silver-aluminium-case-with-blue-cloud-sport-loop-mwwd3/?q=mwwd3",

  "https://estore.ua/ua/apple-watch-series-10-midnight-aluminium-case-with-sport-band/?q=mwwe3",
  "https://estore.ua/ua/apple-watch-series-10-42mm-jet-black-aluminium-case-with-black-sport-band-ml-mwwf3/?q=mwwf3",
  "https://estore.ua/ua/apple-watch-series-10-42mm-jet-black-aluminium-case-with-ink-sport-loop-mwwg3/?q=mwwg3",

  "https://estore.ua/ua/apple-watch-series-10-42mm-rose-gold-aluminium-case-with-light-blush-sport-band-s-m-mwwh3/?q=mwwh3",
  "https://estore.ua/ua/apple-watch-series-10-42mm-rose-gold-aluminium-case-with-light-blush-sport-band-ml-mwwj3/?q=mwwj3",
  "https://estore.ua/ua/apple-watch-series-10-42mm-rose-gold-aluminium-case-with-plum-sport-loop-mwwk3/?q=mwwk3",

  "https://estore.ua/ua/apple-watch-series-10-46mm-silver-aluminium-case-with-sport-band/?q=mwwl3",
  "https://estore.ua/ua/apple-watch-series-10-46mm-silver-aluminium-case-with-denim-sport-band-ml-mwwm3/?q=mwwm3",
  "https://estore.ua/ua/apple-watch-series-10-46mm-silver-aluminium-case-with-blue-cloud-sport-loop-mwwn3/?q=mwwn3",

  "https://estore.ua/ua/apple-watch-series-10-46mm-jet-black-aluminium-case-with-sport-band/?q=mwwp3",
  "https://estore.ua/ua/apple-watch-series-10-46mm-jet-black-aluminium-case-with-black-sport-band-ml-mwwq3/?q=mwwq3",
  "https://estore.ua/ua/apple-watch-series-10-46mm-jet-black-aluminium-case-with-ink-sport-loop-mwwr3/?q=mwwr3",

  "https://estore.ua/ua/apple-watch-series-10-46mm-rose-gold-aluminium-case-with-sport-band/?q=mwwt3",
  "https://estore.ua/ua/apple-watch-series-10-46mm-rose-gold-aluminium-case-with-light-blush-sport-band-ml-mwwu3/?q=mwwu3",
  "https://estore.ua/ua/apple-watch-series-10-46mm-rose-gold-aluminium-case-with-plum-sport-loop-mwwv3/?q=mwwv3",

  
];

const arrLinkEstoreAWS10andUltra2024Two = [
"https://estore.ua/ua/apple-watch-ultra-2-black-titanium-case-with-black-ocean-band/?q=mx4p3",

  "https://estore.ua/ua/apple-watch-ultra-2-black-titanium-case-with-black-titanium-milanese-loop-small-mx4w3/?q=mx4w3",
  "https://estore.ua/ua/apple-watch-ultra-2-black-titanium-case-with-milanese-loop-medium-mx5u3/?q=mx5u3",
  "https://estore.ua/ua/apple-watch-ultra-2-black-titanium-case-with-black-titanium-milanese-loop-large-mx5v3/?q=mx5v3",


  "https://estore.ua/ua/apple-watch-ultra-2-black-titanium-case-with-dark-green-alpine-loop-small-mx4q3/?q=mx4q3",
  "https://estore.ua/ua/apple-watch-ultra-2-black-titanium-case-with-dark-green-alpine-loop-medium-mx4r3/?q=mx4r3",
  "https://estore.ua/ua/apple-watch-ultra-2-black-titanium-case-with-dark-green-alpine-loop-large-mx4t3/?q=mx4t3",

  "https://estore.ua/ua/apple-watch-ultra-2-black-titanium-case-with-black-trail-loop-sm-mx4u3/?q=mx4u3",
  "https://estore.ua/ua/apple-watch-ultra-2-black-titanium-case-with-black-trail-loop-ml-mx4v3/?q=mx4v3",

  "https://estore.ua/ua/apple-watch-ultra-2-natural-titanium-case-with-navy-ocean-band-mx4d3/?q=mx4d3",

  "https://estore.ua/ua/apple-watch-ultra-2-natural-titanium-case-with-natural-titanium-milanese-loop-medium-mx5r3/?q=mx5r3",
  "https://estore.ua/ua/apple-watch-ultra-2-natural-titanium-case-with-natural-titanium-milanese-loop-large-mx5t3/?q=mx5t3",

  "https://estore.ua/ua/apple-watch-ultra-2-natural-titanium-case-with-tan-alpine-loop-small-mx4e3/?q=mx4e3",
  "https://estore.ua/ua/apple-watch-ultra-2-natural-titanium-case-with-tan-alpine-loop-medium-mx4f3/?q=mx4f3",
  "https://estore.ua/ua/apple-watch-ultra-2-natural-titanium-case-with-tan-alpine-loop-large-mx4h3/?q=mx4h3",

  "https://estore.ua/ua/apple-watch-ultra-2-natural-titanium-case-with-blue-trail-loop-sm-mx4j3/?q=mx4j3",
  "https://estore.ua/ua/apple-watch-ultra-2-natural-titanium-case-with-blue-trail-loop-ml-mx4l3/?q=mx4l3",
];
const arrLinkGroAWS10andUltra2024 = [
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-10/smart-godinnik-apple-watch-series-10-gps-42mm-silver-alu-case-w-denim-sport-band-s-m-mwwa3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-10/smart-godinnik-apple-watch-series-10-gps-42mm-silver-alu-case-w-denim-sport-band-m-l-mwwc3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-10/smart-godinnik-apple-watch-series-10-gps-42mm-silver-aluminum-case-w-blue-cloud-sport-loop-mwwd3/",

  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-10/smart-godinnik-apple-watch-series-10-gps-42mm-jet-black-alu-case-w-black-sport-band-s-m-mwwe3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-10/smart-godinnik-apple-watch-series-10-gps-42mm-jet-black-alu-case-w-black-sport-band-m-l-mwwf3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-10/smart-godinnik-apple-watch-series-10-gps-42mm-jet-black-aluminum-case-w-ink-sport-loop-mwwg3/",

  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-10/smart-godinnik-apple-watch-series-10-gps-42mm-rose-gold-alu-case-w-light-blush-sport-band-s-m-mwwh3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-10/smart-godinnik-apple-watch-series-10-gps-42mm-rose-gold-alu-case-w-light-blush-sport-band-m-l-mwwj3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-10/smart-godinnik-apple-watch-series-10-gps-42mm-rose-gold-aluminum-case-w-plum-sport-loop-mwwk3/",

  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-10/smart-godinnik-apple-watch-series-10-gps-46mm-silver-alu-case-w-denim-sport-band-s-m-mwwl3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-10/smart-godinnik-apple-watch-series-10-gps-46mm-silver-alu-case-w-denim-sport-band-m-l-mwwm3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-10/smart-godinnik-apple-watch-series-10-gps-46mm-silver-aluminum-case-w-blue-cloud-sport-loop-mwwn3/",

  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-10/smart-godinnik-apple-watch-series-10-gps-46mm-jet-black-alu-case-w-black-sport-band-s-m-mwwp3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-10/smart-godinnik-apple-watch-series-10-gps-46mm-jet-black-alu-case-w-black-sport-band-m-l-mwwq3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-10/smart-godinnik-apple-watch-series-10-gps-46mm-jet-black-aluminum-case-w-ink-sport-loop-mwwr3/",

  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-10/smart-godinnik-apple-watch-series-10-gps-46mm-rose-gold-alu-case-w-light-blush-sport-band-s-m-mwwt3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-10/smart-godinnik-apple-watch-series-10-gps-46mm-rose-gold-alu-case-w-light-blush-sport-band-m-l-mwwu3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-series-10/smart-godinnik-apple-watch-series-10-gps-46mm-rose-gold-aluminum-case-w-plum-sport-loop-mwwv3/",

  "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/smart-godinnik-apple-watch-ultra-2-gps-cellular-49mm-black-titanium-case-w-black-ocean-band-mx4p3/",

  "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/smart-godinnik-apple-watch-ultra-2-gps-cellular-49mm-black-titanium-case-w-black-titanium-milanese-loop-s-mx4w3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/smart-godinnik-apple-watch-ultra-2-gps-cellular-49mm-black-titanium-case-w-black-titanium-milanese-loop-m-mx5u3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/smart-godinnik-apple-watch-ultra-2-gps-cellular-49mm-black-titanium-case-w-black-titanium-milanese-loop-l-mx5v3/",


  "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/smart-godinnik-apple-watch-ultra-2-gps-cellular-49mm-black-titan-case-w-dark-green-alpine-loop-small-mx4q3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/smart-godinnik-apple-watch-ultra-2-gps-cellular-49mm-black-titan-case-w-dark-green-alpine-loop-medium-mx4r3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/smart-godinnik-apple-watch-ultra-2-gps-cellular-49mm-black-titan-case-w-dark-green-alpine-loop-large-mx4t3/",

  "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/smart-godinnik-apple-watch-ultra-2-gps-cellular-49mm-black-titan-case-w-black-trail-loop-s-m-mx4u3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/smart-godinnik-apple-watch-ultra-2-gps-cellular-49mm-black-titan-case-w-black-trail-loop-m-l-mx4v3/",

  "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/smart-godinnik-apple-watch-ultra-2-gps-cellular-49mm-natural-titanium-case-w-navy-ocean-band-mx4d3/",

  "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/smart-godinnik-apple-watch-ultra-2-gps-cellular-49mm-natural-titanium-case-w-n-titanium-milanese-loop-s-mx4m3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/smart-godinnik-apple-watch-ultra-2-gps-cellular-49mm-natural-titanium-case-w-n-titanium-milanese-loop-m-mx5r3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/smart-godinnik-apple-watch-ultra-2-gps-cellular-49mm-natural-titanium-case-w-n-titanium-milanese-loop-l-mx5t3/",

  "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/smart-godinnik-apple-watch-ultra-2-gps-cellular-49mm-natural-titan-case-w-tan-alpine-loop-small-mx4e3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/smart-godinnik-apple-watch-ultra-2-gps-cellular-49mm-natural-titan-case-w-tan-alpine-loop-medium-mx4f3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/smart-godinnik-apple-watch-ultra-2-gps-cellular-49mm-natural-titan-case-w-tan-alpine-loop-large-mx4h3/",

  "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/smart-godinnik-apple-watch-ultra-2-gps-cellular-49mm-natural-titan-case-w-blue-trail-loop-s-m-mx4j3/",
  "https://grokholsky.com/product/apple/apple-watch/apple-watch-ultra-2/smart-godinnik-apple-watch-ultra-2-gps-cellular-49mm-natural-titan-case-w-blue-trail-loop-m-l-mx4l3/",
];


const arrLinkJabkoAWSSE2024 = [
  "https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-gps-40mm-silver-aluminium-case-with-denim-sport-band-sm-mxec3-2024",
"https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-gps-40mm-silver-aluminium-case-with-denim-sport-band-ml-mxed3-2024",
"https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-gps-40mm-silver-aluminium-case-with-blue-cloud-sport-loop-mxee3-2024",

"https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-gps-40mm-midnight-aluminium-case-with-midnight-sport-band-sm-mxe73-2024",
"https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-gps-40mm-midnight-aluminium-case-with-midnight-sport-band-ml-mxe93-2024",
"https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-gps-40mm-midnight-aluminium-case-with-ink-sport-loop-mxea3-2024",

"https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-gps-40mm-starlight-aluminium-case-with-starlight-sport-band-sm-mxef3-2024",
"https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-gps-40mm-starlight-aluminium-case-with-starlight-sport-band-ml-mxeg3-2024",

"https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-gps-44mm-starlight-aluminium-case-with-starlight-sport-band-sm-mxeu3-2024",
"https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-gps-44mm-starlight-aluminium-case-with-starlight-sport-band-ml-mxev3-2024",

"https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-gps-44mm-silver-aluminium-case-with-denim-sport-band-sm-mxeq3-2024",
"https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-gps-44mm-silver-aluminium-case-with-denim-sport-band-ml-mxer3-2024",
"https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-gps-44mm-silver-aluminium-case-with-blue-cloud-sport-loop-mxet3-2024",

"https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-gps-44mm-midnight-aluminium-case-with-midnight-sport-band-sm-mxej3-2024",
"https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-gps-44mm-midnight-aluminium-case-with-midnight-sport-band-ml-mxek3-2024",
"https://jabko.ua/apple-watch/apple-watch-se-2/apple-watch-se-2-gps-44mm-midnight-aluminium-case-with-ink-sport-loop-mxep3-2024",
];
const arrLinkMobilePlanetSE2024 = [
  "https://mobileplanet.ua/ua/apple-watch-se-2-gps-40mm-silver-alumini-328336",
"https://mobileplanet.ua/ua/apple-watch-se-2-gps-40mm-silver-alumini-328341",
"https://mobileplanet.ua/ua/apple-watch-se-2-gps-40mm-silver-alumini-328344",

"https://mobileplanet.ua/ua/apple-watch-series-se2-gps-40mm-midnight-327688",
"https://mobileplanet.ua/ua/apple-watch-se-2-gps-40mm-midnight-alumi-328339",
"https://mobileplanet.ua/ua/apple-watch-se-2-gps-40mm-midnight-alumi-328343",

"https://mobileplanet.ua/ua/apple-watch-series-se2-gps-40mm-starligh-327689",
"https://mobileplanet.ua/ua/apple-watch-se-2-gps-40mm-starlight-alum-328342",

"https://mobileplanet.ua/ua/apple-watch-se-2-gps-44mm-starlight-alu-328355",
"https://mobileplanet.ua/ua/apple-watch-se-2-gps-44mm-starlight-alum-327690",

"https://mobileplanet.ua/ua/apple-watch-se-2-gps-44mm-silver-alumini-328353",
"https://mobileplanet.ua/ua/apple-watch-se-2-gps-44mm-silver-alumini-328351",
"https://mobileplanet.ua/ua/apple-watch-se-2-gps-44mm-silver-alumini-328348",

"https://mobileplanet.ua/ua/apple-watch-se-2-gps-44mm-midnight-alumi-328349",
"https://mobileplanet.ua/ua/apple-watch-se-2-gps-44mm-midnight-alumi-328345",
];
const arrLinkGroAWSSE2024 = [
  "https://grokholsky.com/ua/product/apple/apple-watch/apple-watch-series-se-2/smart-godinnik-apple-watch-se-2-gps-40mm-silver-aluminium-case-w-denim-sport-band-s-m-mxec3/",
"https://grokholsky.com/ua/product/apple/apple-watch/apple-watch-series-se-2/smart-godinnik-apple-watch-se-2-gps-40mm-silver-aluminium-case-w-denim-sport-band-m-l-mxed3/",
"https://grokholsky.com/ua/product/apple/apple-watch/apple-watch-series-se-2/smart-godinnik-apple-watch-se-2-gps-40mm-silver-aluminium-case-w-blue-cloud-sport-loop-mxee3/",

"https://grokholsky.com/ua/product/apple/apple-watch/apple-watch-series-se-2/smart-godinnik-apple-watch-se-2-gps-40mm-midnight-alu-case-w-midnight-sport-band-s-m-mxe73/",
"https://grokholsky.com/ua/product/apple/apple-watch/apple-watch-series-se-2/smart-godinnik-apple-watch-se-2-gps-40mm-midnight-aluminium-case-w-midnight-sport-band-m-l-mxe93/",
"https://grokholsky.com/ua/product/apple/apple-watch/apple-watch-series-se-2/smart-godinnik-apple-watch-se-2-gps-40mm-midnight-aluminium-case-w-ink-sport-loop-mxea3/",

"https://grokholsky.com/ua/product/apple/apple-watch/apple-watch-series-se-2/smart-godinnik-apple-watch-se-2-gps-40mm-starlight-aluminium-case-w-starlight-sport-band-s-m-mxef3/",
"https://grokholsky.com/ua/product/apple/apple-watch/apple-watch-series-se-2/smart-godinnik-apple-watch-se-2-gps-40mm-starlight-aluminium-case-w-starlight-sport-band-m-l-mxeg3/",

"https://grokholsky.com/ua/product/apple/apple-watch/apple-watch-series-se-2/smart-godinnik-apple-watch-se-2-gps-44mm-starlight-alu-case-w-starlight-sport-band-s-m-mxeu3/",
"https://grokholsky.com/ua/product/apple/apple-watch/apple-watch-series-se-2/smart-godinnik-apple-watch-se-2-gps-44mm-starlight-aluminium-case-w-starlight-sport-band-m-l-mxev3/",

"https://grokholsky.com/ua/product/apple/apple-watch/apple-watch-series-se-2/smart-godinnik-apple-watch-se-2-gps-44mm-silver-aluminium-case-w-denim-sport-band-s-m-mxeq3/",
"https://grokholsky.com/ua/product/apple/apple-watch/apple-watch-series-se-2/smart-godinnik-apple-watch-se-2-gps-44mm-silver-aluminium-case-w-denim-sport-band-m-l-mxer3/",
"https://grokholsky.com/ua/product/apple/apple-watch/apple-watch-series-se-2/smart-godinnik-apple-watch-se-2-gps-44mm-silver-aluminium-case-w-blue-cloud-sport-loop-mxet3/",

"https://grokholsky.com/ua/product/apple/apple-watch/apple-watch-series-se-2/smart-godinnik-apple-watch-se-2-gps-44mm-midnight-aluminium-case-w-midnight-sport-band-s-m-mxej3/",
"https://grokholsky.com/ua/product/apple/apple-watch/apple-watch-series-se-2/smart-godinnik-apple-watch-se-2-gps-44mm-midnight-aluminium-case-w-midnight-sport-band-m-l-mxek3/",
"https://grokholsky.com/ua/product/apple/apple-watch/apple-watch-series-se-2/smart-godinnik-apple-watch-se-2-gps-44mm-midnight-aluminium-case-w-ink-sport-loop-mxep3/",
];
const arrLinkEstoreAWSSE2024 = [
  "https://estore.ua/ua/apple-watch-se-2-2024-gps-40mm-silver-aluminium-case-with-denim-sport-band-sm-mxec3/?q=mxec3",
"https://estore.ua/ua/apple-watch-se-2-2024-gps-40mm-silver-aluminium-case-with-denim-sport-band-ml-mxed3/?q=mxed3",
"https://estore.ua/ua/apple-watch-se-2-2024-gps-40mm-silver-aluminium-case-with-blue-cloud-sport-loop-mxee3/?q=mxee3",

"https://estore.ua/ua/apple-watch-se-2-2024-gps-40mm-midnight-aluminium-case-with-midnight-sport-band-sm-mxe73/?q=mxe73",
"https://estore.ua/ua/apple-watch-se-2-2024-gps-40mm-midnight-aluminium-case-with-midnight-sport-band-ml-mxe93/?q=mxe93",
"https://estore.ua/ua/apple-watch-se-2-2024-gps-40mm-midnight-aluminium-case-with-ink-sport-loop-mxea3/?q=mxea3",

"https://estore.ua/ua/apple-watch-se-2-2024-gps-40mm-starlight-aluminium-case-with-starlight-sport-band-sm-mxef3/?q=mxef3",
"https://estore.ua/ua/apple-watch-se-2-2024-gps-40mm-starlight-aluminium-case-with-starlight-sport-band-ml-mxeg3/?q=mxeg3",

"https://estore.ua/ua/apple-watch-se-2-2024-gps-44mm-starlight-aluminium-case-with-starlight-sport-band-sm-mxeu3/?q=mxeu3",
"https://estore.ua/ua/apple-watch-se-2-2024-gps-44mm-starlight-aluminium-case-with-starlight-sport-band-ml-mxev3/?q=mxev3",

"https://estore.ua/ua/apple-watch-se-2-2024-gps-44mm-silver-aluminium-case-with-denim-sport-band-sm-mxeq3/?q=mxeq3",
"https://estore.ua/ua/apple-watch-se-2-2024-gps-44mm-silver-aluminium-case-with-denim-sport-band-ml-mxer3/?q=mxer3",
"https://estore.ua/ua/apple-watch-se-2-2024-gps-44mm-silver-aluminium-case-with-blue-cloud-sport-loop-mxet3/?q=mxet3",

"https://estore.ua/ua/apple-watch-se-2-2024-gps-44mm-midnight-aluminium-case-with-midnight-sport-band-sm-mxej3/?q=mxej3",
"https://estore.ua/ua/apple-watch-se-2-2024-gps-44mm-midnight-aluminium-case-with-midnight-sport-band-ml-mxek3/?q=mxek3",
"https://estore.ua/ua/apple-watch-se-2-2024-gps-44mm-midnight-aluminium-case-with-ink-sport-loop-mxep3/?q=mxep3",
];

async function f() {
  const browser = await puppeteer.launch({ headless: "true" });
  const page = await browser.newPage();



  // for (let i = 0; i < arrLinkMobilePlanetAWS2Gen.length; i += 1) {
  //   await page.goto(arrLinkMobilePlanetAWS2Gen[i]);
  //   const n = await page.$("#txt");

  //   let arr3 = await page.evaluate(() => {
  //     let text2 = document.querySelector("h1").innerText;
  //     if (document.querySelector(".price-value") != null) {
  //       return (
  //         text2 + "MP: " + document.querySelector(".price-value").innerText
  //       );
  //     } else {
  //       return text2;
  //     }
  //   });

  //   console.log(arr3);
  //   await page.setDefaultNavigationTimeout(0);
  // }
  // for (let i = 0; i < arrLinkIstoreAWS2Gen.length; i += 1) {
  //   await page.goto(arrLinkIstoreAWS2Gen[i]);
  //   const n = await page.$("#txt");

  //   let arr4 = await page.evaluate(() => {
  //     let text3 = document.querySelector("h1").innerText;
  //     if (document.querySelector(".product_price ") != null) {
  //       return (
  //         text3 + "I: " + document.querySelector(".product_price ").innerText
  //       );
  //     } else {
  //       return text3;
  //     }
  //   });

  //   console.log(arr4);
  //   await page.setDefaultNavigationTimeout(0);
  // }
  // for (let i = 0; i < arrLinkGroAWS2Gen.length; i += 1) {
  //   await page.goto(arrLinkGroAWS2Gen[i]);
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


  // for (let i = 0; i < arrLinkJabkoAWSSE.length; i += 1) {
  //   await page.goto(arrLinkJabkoAWSSE[i]);
  //   const n = await page.$("#txt");

  //   let arr2 = await page.evaluate(() => {
  //     let text2 = document.querySelector("h1").innerText;
  //     if (document.querySelector(".price-new__uah") != null) {
  //       return (
  //         text2 + "J: " + document.querySelector(".price-new__uah").innerText
  //       );
  //     } else {
  //       return text2;
  //     }
  //   });

  //   console.log(arr2);
  //   await page.setDefaultNavigationTimeout(0);
  // }
  // for (let i = 0; i < arrLinkIstoreAWSSE.length; i += 1) {
  //   await page.goto(arrLinkIstoreAWSSE[i]);
  //   const n = await page.$("#txt");

  //   let arr4 = await page.evaluate(() => {
  //     let text3 = document.querySelector("h1").innerText;
  //     if (document.querySelector(".product_price ") != null) {
  //       return (
  //         text3 + "I: " + document.querySelector(".product_price ").innerText
  //       );
  //     } else {
  //       return text3;
  //     }
  //   });

  //   console.log(arr4);
  //   await page.setDefaultNavigationTimeout(0);
  // }
  // for (let i = 0; i < arrLinkMobilePlanetAWSSE.length; i += 1) {
  //   await page.goto(arrLinkMobilePlanetAWSSE[i]);
  //   const n = await page.$("#txt");

  //   let arr3 = await page.evaluate(() => {
  //     let text2 = document.querySelector("h1").innerText;
  //     if (document.querySelector(".price-value") != null) {
  //       return (
  //         text2 + "MP: " + document.querySelector(".price-value").innerText
  //       );
  //     } else {
  //       return text2;
  //     }
  //   });

  //   console.log(arr3);
  //   await page.setDefaultNavigationTimeout(0);
  // }
  // for (let i = 0; i < arrLinkGroAWSSE.length; i += 1) {
  //   await page.goto(arrLinkGroAWSSE[i]);
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
  // for (let i = 0; i < arrLinkEstoreAWSSE.length; i += 1) {
  //   await page.goto(arrLinkEstoreAWSSE[i]);
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

  // for (let i = 0; i < arrLinkiPeopleAws9Lte.length; i += 1) {
  //   await page.goto(arrLinkiPeopleAws9Lte[i]);
  //   const n = await page.$("#txt");

  //   let arr3 = await page.evaluate(() => {
  //     let text2 = document.querySelector(".usd").innerText;
  //     if (document.querySelector(".usd") != null) {
  //       return (
  //         text2 + "iPeople: " + document.querySelector(".usd").innerText
  //       );
  //     } else {
  //       return;
  //     }
  //   });

  //   console.log(arr3);
  //   await page.setDefaultNavigationTimeout(0);
  // }
  // for (let i = 0; i < arrLinkEstoreAws9Lte.length; i += 1) {
  //   await page.goto(arrLinkEstoreAws9Lte[i]);
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
  // for (let i = 0; i < arrLinkMobilePlanetAws9Lte.length; i += 1) {
  //   await page.goto(arrLinkMobilePlanetAws9Lte[i]);
  //   const n = await page.$("#txt");

  //   let arr3 = await page.evaluate(() => {
  //     let text2 = document.querySelector("h1").innerText;
  //     if (document.querySelector(".price-value") != null) {
  //       return (
  //         text2 + "MP: " + document.querySelector(".price-value").innerText
  //       );
  //     } else {
  //       return text2;
  //     }
  //   });

  //   console.log(arr3);
  //   await page.setDefaultNavigationTimeout(0);
  // }
  // for (let i = 0; i < arrLinkGroAws9Lte.length; i += 1) {
  //   await page.goto(arrLinkGroAws9Lte[i]);
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
  

  for (let i = 0; i < arrLinkJabkoAWS10andUltra2024.length; i += 1) {
    await page.goto(arrLinkJabkoAWS10andUltra2024[i]);
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
  for (let i = 0; i < arrLinkiPeopleAWS10andUltra2024.length; i += 1) {
    await page.goto(arrLinkiPeopleAWS10andUltra2024[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {
      let text2 = document.querySelector(".usd").innerText;
      if (document.querySelector(".usd") != null) {
        return (
          text2 + "iPeople: " + document.querySelector(".usd").innerText
        );
      } else {
        return;
      }
    });

    console.log(arr3);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkEstoreAWS10andUltra2024.length; i += 1) {
    await page.goto(arrLinkEstoreAWS10andUltra2024[i]);
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
  for (let i = 0; i < arrLinkEstoreAWS10andUltra2024Two.length; i += 1) {
    await page.goto(arrLinkEstoreAWS10andUltra2024Two[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price") != null) {
        return (
          text2 + "Estore: " + document.querySelector(".price").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkGroAWS10andUltra2024.length; i += 1) {
    await page.goto(arrLinkGroAWS10andUltra2024[i]);
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

  for (let i = 0; i < arrLinkJabkoAWSSE2024.length; i += 1) {
    await page.goto(arrLinkJabkoAWSSE2024[i]);
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
  for (let i = 0; i < arrLinkMobilePlanetSE2024.length; i += 1) {
    await page.goto(arrLinkMobilePlanetSE2024[i]);
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
  for (let i = 0; i < arrLinkGroAWSSE2024.length; i += 1) {
    await page.goto(arrLinkGroAWSSE2024[i]);
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
  for (let i = 0; i < arrLinkEstoreAWSSE2024.length; i += 1) {
    await page.goto(arrLinkEstoreAWSSE2024[i]);
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
f();
