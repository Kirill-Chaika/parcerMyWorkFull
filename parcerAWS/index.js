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







async function f() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  for (let i = 0; i < arrLinkSkayAWS.length; i += 1) {
    await page.goto(arrLinkSkayAWS[i]);
    const n = await page.$("#txt");

    let arr1 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".product-prices .products-item-cost") != null) {
        return (
          text2 + "S: " + document.querySelector(".product-prices .products-item-cost").innerText
        );
      } else {
        return;
      }
    });

    console.log(arr1);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkJabkoAWS.length; i += 1) {
    await page.goto(arrLinkJabkoAWS[i]);
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
  for (let i = 0; i < arrLinkIstoreAWS.length; i += 1) {
    await page.goto(arrLinkIstoreAWS[i]);
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
  for (let i = 0; i < arrLinkMobilePlanetAWS.length; i += 1) {
    await page.goto(arrLinkMobilePlanetAWS[i]);
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

  for (let i = 0; i < arrLinkMobilePlanetAWS2Gen.length; i += 1) {
    await page.goto(arrLinkMobilePlanetAWS2Gen[i]);
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
  for (let i = 0; i < arrLinkIstoreAWS2Gen.length; i += 1) {
    await page.goto(arrLinkIstoreAWS2Gen[i]);
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
  for (let i = 0; i < arrLinkGroAWS2Gen.length; i += 1) {
    await page.goto(arrLinkGroAWS2Gen[i]);
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


  for (let i = 0; i < arrLinkJabkoAWSSE.length; i += 1) {
    await page.goto(arrLinkJabkoAWSSE[i]);
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
  for (let i = 0; i < arrLinkIstoreAWSSE.length; i += 1) {
    await page.goto(arrLinkIstoreAWSSE[i]);
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
  for (let i = 0; i < arrLinkMobilePlanetAWSSE.length; i += 1) {
    await page.goto(arrLinkMobilePlanetAWSSE[i]);
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
  for (let i = 0; i < arrLinkGroAWSSE.length; i += 1) {
    await page.goto(arrLinkGroAWSSE[i]);
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
  for (let i = 0; i < arrLinkEstoreAWSSE.length; i += 1) {
    await page.goto(arrLinkEstoreAWSSE[i]);
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
