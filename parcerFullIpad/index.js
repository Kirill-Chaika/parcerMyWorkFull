console.log("Hello world");

const puppeteer = require("puppeteer");
const arrLinkMobilePlanetIPAD = [
  "https://mobileplanet.ua/apple-ipad-9-10-2-2021-wi-fi-64gb-silver-228408",
  "https://mobileplanet.ua/apple-ipad-9-10-2-2021-wi-fi-64gb-space-228409",
  "https://mobileplanet.ua/apple-ipad-9-10-2-2021-wi-fi-lte-64gb-si-228412",
  "https://mobileplanet.ua/apple-ipad-9-10-2-2021-wi-fi-lte-64gb-sp-228413",
  "https://mobileplanet.ua/apple-ipad-9-10-2-2021-wi-fi-256gb-silve-228410",
  "https://mobileplanet.ua/apple-ipad-9-10-2-2021-wi-fi-256gb-space-228411",
  "https://mobileplanet.ua/apple-ipad-9-10-2-2021-wi-fi-lte-256gb-s-228414",
  "https://mobileplanet.ua/apple-ipad-9-10-2-2021-wi-fi-lte-256gb-s-228415",

  "https://mobileplanet.ua/apple-ipad-10-9-wi-fi-64gb-blue-mpq13-2022-256497",
  "https://mobileplanet.ua/apple-ipad-10-9-wi-fi-64gb-pink-mpq33-2022-256505",
  "https://mobileplanet.ua/apple-ipad-10-9-wi-fi-64gb-silver-mpq03-2022-256493",
  "https://mobileplanet.ua/apple-ipad-10-9-wi-fi-64gb-yellow-mpq23-2022-256501",
  "https://mobileplanet.ua/apple-ipad-10-9-wi-fi-cellular-64gb-blue-mq6k3-202-256499",
  "https://mobileplanet.ua/apple-ipad-10-9-wi-fi-cellular-64gb-pink-mq6m3-202-256507",
  "https://mobileplanet.ua/apple-ipad-10-9-wi-fi-cellular-64gb-silver-mq6j3-2-256495",
  "https://mobileplanet.ua/apple-ipad-10-9-wi-fi-cellular-64gb-yellow-mq6l3-2-256503",
  "https://mobileplanet.ua/apple-ipad-10-9-wi-fi-256gb-blue-mpq93-2022-256498",
  "https://mobileplanet.ua/apple-ipad-10-9-wi-fi-256gb-pink-mpqc3-2022-256506",
  "https://mobileplanet.ua/apple-ipad-10-9-wi-fi-256gb-silver-mpq83-2022-256494",
  "https://mobileplanet.ua/apple-ipad-10-9-wi-fi-256gb-yellow-mpqa3-2022-256502",
  "https://mobileplanet.ua/apple-ipad-10-9-wi-fi-cellular-256gb-blue-mq6u3-20-256500",
  "https://mobileplanet.ua/apple-ipad-10-9-wi-fi-cellular-256gb-pink-mq6w3-20-256508",
  "https://mobileplanet.ua/apple-ipad-10-9-wi-fi-cellular-256gb-silver-mq6t3-256496",
  "https://mobileplanet.ua/apple-ipad-10-9-wi-fi-cellular-256gb-yellow-mq6v3-256504",

  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-64gb-space-g-251166",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-64gb-blue-mm-251163",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-64gb-purple-251165",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-64gb-pink-mm-251164",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-64gb-starlig-251162",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-5g-64gb-spac-251171",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-5g-64gb-blue-251170",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-5g-64gb-purp-251167",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-5g-64gb-pink-251168",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-5g-64gb-star-251169",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-256gb-space-251174",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-256gb-blue-m-251173",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-256gb-purple-251176",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-256gb-pink-m-251175",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-256gb-starli-251177",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-5g-256gb-spa-251182",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-5g-256gb-blu-251180",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-5g-256gb-pur-251178",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-5g-256gb-pin-251181",
  "https://mobileplanet.ua/apple-ipad-air-5-10-9-wi-fi-5g-256gb-sta-251179",

  "https://mobileplanet.ua/apple-ipad-pro-3-11-2021-wi-fi-128gb-sil-213766",
  "https://mobileplanet.ua/apple-ipad-pro-3-11-2021-wi-fi-128gb-spa-213765",
  "https://mobileplanet.ua/apple-ipad-pro-3-11-2021-wi-fi-256gb-sil-213768",
  "https://mobileplanet.ua/apple-ipad-pro-3-11-2021-wi-fi-256gb-spa-213767",
  "https://mobileplanet.ua/apple-ipad-pro-3-11-2021-wi-fi-512gb-sil-213770",
  "https://mobileplanet.ua/apple-ipad-pro-3-11-2021-wi-fi-512gb-spa-213769",
  "https://mobileplanet.ua/apple-ipad-pro-3-11-2021-wi-fi-lte-512gb-213779",
  "https://mobileplanet.ua/apple-ipad-pro-3-11-2021-wi-fi-1tb-silve-213772",
  "https://mobileplanet.ua/apple-ipad-pro-3-11-2021-wi-fi-2tb-silve-213774",
  "https://mobileplanet.ua/apple-ipad-pro-3-11-2021-wi-fi-2tb-space-213773",

  "https://mobileplanet.ua/apple-ipad-pro-11-wi-fi-128gb-silver-mnxe3-2022-256483",
  "https://mobileplanet.ua/apple-ipad-pro-11-wi-fi-128gb-space-gray-mnxd3-202-256473",
  "https://mobileplanet.ua/apple-ipad-pro-11-wi-fi-cellular-128gb-silver-mp56-256488",
  "https://mobileplanet.ua/apple-ipad-pro-11-wi-fi-cellular-128gb-space-gray-256478",
  "https://mobileplanet.ua/apple-ipad-pro-11-wi-fi-256gb-silver-mnxg3-2022-256484",
  "https://mobileplanet.ua/apple-ipad-pro-11-wi-fi-256gb-space-gray-mnxf3-202-256474",
  "https://mobileplanet.ua/apple-ipad-pro-11-wi-fi-cellular-256gb-silver-mp58-256489",
  "https://mobileplanet.ua/apple-ipad-pro-11-wi-fi-cellular-256gb-space-gray-256479",
  "https://mobileplanet.ua/apple-ipad-pro-11-wi-fi-512gb-silver-mnxj3-2022-256485",
  "https://mobileplanet.ua/apple-ipad-pro-11-wi-fi-512gb-space-gray-mnxh3-202-256475",
  "https://mobileplanet.ua/apple-ipad-pro-11-wi-fi-cellular-512gb-silver-mp5d-256490",

  "https://mobileplanet.ua/apple-ipad-pro-5-12-9-2021-wi-fi-128gb-s-213786",
  "https://mobileplanet.ua/apple-ipad-pro-5-12-9-2021-wi-fi-128gb-s-213785",
  "https://mobileplanet.ua/apple-ipad-pro-5-12-9-2021-wi-fi-lte-128-213796",
  "https://mobileplanet.ua/apple-ipad-pro-5-12-9-2021-wi-fi-lte-128-213795",
  "https://mobileplanet.ua/apple-ipad-pro-5-12-9-2021-wi-fi-256gb-s-213788",
  "https://mobileplanet.ua/apple-ipad-pro-5-12-9-2021-wi-fi-256gb-s-213787",
  "https://mobileplanet.ua/apple-ipad-pro-5-12-9-2021-wi-fi-512gb-s-213790",
  "https://mobileplanet.ua/apple-ipad-pro-5-12-9-2021-wi-fi-512gb-s-213789",
  "https://mobileplanet.ua/apple-ipad-pro-5-12-9-2021-wi-fi-1tb-sil-213792",
  "https://mobileplanet.ua/apple-ipad-pro-5-12-9-2021-wi-fi-1tb-spa-213791",
  "https://mobileplanet.ua/apple-ipad-pro-5-12-9-2021-wi-fi-lte-1tb-213801",
  "https://mobileplanet.ua/apple-ipad-pro-5-12-9-2021-wi-fi-2tb-sil-213794",
  "https://mobileplanet.ua/apple-ipad-pro-5-12-9-2021-wi-fi-2tb-spa-213793",
  "https://mobileplanet.ua/apple-ipad-pro-5-12-9-2021-wi-fi-lte-2tb-213803",

  "https://mobileplanet.ua/apple-ipad-pro-12-9-wi-fi-128gb-silver-mnxq3-2022-256463",
  "https://mobileplanet.ua/apple-ipad-pro-12-9-wi-fi-128gb-space-gray-mnxp3-2-256453",
  "https://mobileplanet.ua/apple-ipad-pro-12-9-wi-fi-cellular-128gb-silver-mp-256468",
  "https://mobileplanet.ua/apple-ipad-pro-12-9-wi-fi-cellular-128gb-space-gra-256458",
  "https://mobileplanet.ua/apple-ipad-pro-12-9-wi-fi-256gb-silver-mnxt3-2022-256464",
  "https://mobileplanet.ua/apple-ipad-pro-12-9-wi-fi-256gb-space-gray-mnxr3-2-256454",
  "https://mobileplanet.ua/apple-ipad-pro-12-9-wi-fi-cellular-256gb-silver-mp-256469",
  "https://mobileplanet.ua/apple-ipad-pro-12-9-wi-fi-cellular-256gb-space-gra-256459",
  "https://mobileplanet.ua/apple-ipad-pro-12-9-wi-fi-512gb-silver-mnxv3-2022-256465",
  "https://mobileplanet.ua/apple-ipad-pro-12-9-wi-fi-512gb-space-gray-mnxu3-2-256455",
  "https://mobileplanet.ua/apple-ipad-pro-12-9-wi-fi-cellular-512gb-silver-mp-256470",
  "https://mobileplanet.ua/apple-ipad-pro-12-9-wi-fi-cellular-512gb-space-gra-256460",

  "https://mobileplanet.ua/apple-ipad-mini-6-8-3-2021-wi-fi-64gb-sp-228418",
  "https://mobileplanet.ua/apple-ipad-mini-6-8-3-2021-wi-fi-64gb-pu-228417",
  "https://mobileplanet.ua/apple-ipad-mini-6-8-3-2021-wi-fi-64gb-pi-228416",
  "https://mobileplanet.ua/apple-ipad-mini-6-8-3-2021-wi-fi-64gb-st-228419",
  "https://mobileplanet.ua/apple-ipad-mini-6-8-3-2021-wi-fi-lte-64g-228426",
  "https://mobileplanet.ua/apple-ipad-mini-6-8-3-2021-wi-fi-lte-64g-228425",
  "https://mobileplanet.ua/apple-ipad-mini-6-8-3-2021-wi-fi-lte-64g-228424",
  "https://mobileplanet.ua/apple-ipad-mini-6-8-3-2021-wi-fi-lte-64g-228427",
  "https://mobileplanet.ua/apple-ipad-mini-6-8-3-2021-wi-fi-256gb-s-228422",
  "https://mobileplanet.ua/apple-ipad-mini-6-8-3-2021-wi-fi-256gb-p-228421",
  "https://mobileplanet.ua/apple-ipad-mini-6-8-3-2021-wi-fi-256gb-p-228420",
  "https://mobileplanet.ua/apple-ipad-mini-6-8-3-2021-wi-fi-256gb-s-228423",
  "https://mobileplanet.ua/apple-ipad-mini-6-8-3-2021-wi-fi-lte-256-228430",
  "https://mobileplanet.ua/apple-ipad-mini-6-8-3-2021-wi-fi-lte-256-228429",
  "https://mobileplanet.ua/apple-ipad-mini-6-8-3-2021-wi-fi-lte-256-228428",
  "https://mobileplanet.ua/apple-ipad-mini-6-8-3-2021-wi-fi-lte-256-228431"
];
const arrLinkSkayIPAD = [
  "https://skay.ua/uk/ipad-9-2021/53840-apple-ipad-102-9-gen-64gb-wi-fi-2021-silver-mk2l3.html",
  "https://skay.ua/uk/ipad-9-2021/53839-apple-ipad-102-9-gen-64gb-wi-fi-2021-space-gray-mk2k3.html",
  "https://skay.ua/uk/ipad-9-2021/53844-apple-ipad-102-9-gen-64gb-wi-fi4g-2021-silver-mk673.html",
  "https://skay.ua/uk/ipad-9-2021/53843-apple-ipad-102-9-gen-64gb-wi-fi4g-2021-space-gray-mk663.html",

  "https://skay.ua/uk/ipad-9-2021/53842-apple-ipad-102-9-gen-256gb-wi-fi-2021-silver-mk2p3.html",
  "https://skay.ua/uk/ipad-9-2021/53841-apple-ipad-102-9-gen-256gb-wi-fi-2021-space-gray-mk2n3.html",
  "https://skay.ua/uk/ipad-9-2021/53846-apple-ipad-102-9-gen-256gb-wi-fi4g-2021-silver-mk6a3mk4h3.html",
  "https://skay.ua/uk/ipad-9-2021/53845-apple-ipad-102-9-gen-256gb-wi-fi4g-2021-space-gray-mk693.html",

  "https://skay.ua/uk/ipad-10-2022/59413-apple-ipad-109-10-gen-64gb-wi-fi-2022-blue-mpq13.html",
  "https://skay.ua/uk/ipad-10-2022/59479-apple-ipad-109-10-gen-64gb-wi-fi-2022-pink-mpq33.html",
  "https://skay.ua/uk/ipad-10-2022/59480-apple-ipad-109-10-gen-64gb-wi-fi-2022-silver-mpq03.html",
  "https://skay.ua/uk/ipad-10-2022/59481-apple-ipad-109-10-gen-64gb-wi-fi-2022-yellow-mpq23.html",

  "https://skay.ua/uk/ipad-10-2022/59486-apple-ipad-109-10-gen-64gb-wi-fi4g-2022-blue-mq6k3.html",
  "https://skay.ua/uk/ipad-10-2022/59487-apple-ipad-109-10-gen-64gb-wi-fi4g-2022-pink-mq6m3.html",
  "https://skay.ua/uk/ipad-10-2022/59488-apple-ipad-109-10-gen-64gb-wi-fi4g-2022-silver-mq6j3.html",
  "https://skay.ua/uk/ipad-10-2022/59489-apple-ipad-109-10-gen-64gb-wi-fi4g-2022-yellow-mq6l3.html",

  "https://skay.ua/uk/ipad-10-2022/59482-apple-ipad-109-10-gen-256gb-wi-fi-2022-blue-mpq93.html",
  "https://skay.ua/uk/ipad-10-2022/59483-apple-ipad-109-10-gen-256gb-wi-fi-2022-pink-mpqc3.html",
  "https://skay.ua/uk/ipad-10-2022/59484-apple-ipad-109-10-gen-256gb-wi-fi-2022-silver-mpq83.html",
  "https://skay.ua/uk/ipad-10-2022/59485-apple-ipad-109-10-gen-256gb-wi-fi-2022-yellow-mpqa3.html",

  "https://skay.ua/uk/ipad-10-2022/59490-apple-ipad-109-10-gen-256gb-wi-fi4g-2022-blue-mq6u3.html",
  "https://skay.ua/uk/ipad-10-2022/59491-apple-ipad-109-10-gen-256gb-wi-fi4g-2022-pink-mq6w3.html",
  "https://skay.ua/uk/ipad-10-2022/59492-apple-ipad-109-10-gen-256gb-wi-fi4g-2022-silver-mq6t3.html",
  "https://skay.ua/uk/ipad-10-2022/59493-apple-ipad-109-10-gen-256gb-wi-fi4g-2022-yellow-mq6v3.html",

  "https://skay.ua/uk/ipad-air-5-2022/57645-apple-ipad-air-m1-2022-109-64gb-wi-fi-space-gray-mm9c3.html",
  "https://skay.ua/uk/ipad-air-5-2022/57649-apple-ipad-air-m1-2022-109-64gb-wi-fi-blue-mm9e3.html",
  "https://skay.ua/uk/ipad-air-5-2022/57648-apple-ipad-air-m1-2022-109-64gb-wi-fi-purple-mme23.html",
  "https://skay.ua/uk/ipad-air-5-2022/57647-apple-ipad-air-m1-2022-109-64gb-wi-fi-pink-mm9d3.html",
  "https://skay.ua/uk/ipad-air-5-2022/57650-apple-ipad-air-m1-2022-109-64gb-wi-fi-starlight-mm9f3.html",

  "https://skay.ua/uk/ipad-air-5-2022/57646-apple-ipad-air-m1-2022-109-64gb-wi-fi4g-space-gray-mm6r3mm753.html",
  "https://skay.ua/uk/ipad-air-5-2022/57659-apple-ipad-air-m1-2022-109-64gb-wi-fi4g-blue-mm6u3mm773.html",
  "https://skay.ua/uk/ipad-air-5-2022/57658-apple-ipad-air-m1-2022-109-64gb-wi-fi4g-purple-mme93.html",
  "https://skay.ua/uk/ipad-air-5-2022/57657-apple-ipad-air-m1-2022-109-64gb-wi-fi4g-pink-mm6t3.html",
  "https://skay.ua/uk/ipad-air-5-2022/57660-apple-ipad-air-m1-2022-109-64gb-wi-fi4g-starlight-mm6v3.html",

  "https://skay.ua/uk/ipad-air-5-2022/57651-apple-ipad-air-m1-2022-109-256gb-wi-fi-space-gray-mm9l3.html",
  "https://skay.ua/uk/ipad-air-5-2022/57654-apple-ipad-air-m1-2022-109-256gb-wi-fi-blue-mm9n3.html",
  "https://skay.ua/uk/ipad-air-5-2022/57653-apple-ipad-air-m1-2022-109-256gb-wi-fi-purple-mme63.html",
  "https://skay.ua/uk/ipad-air-5-2022/57652-apple-ipad-air-m1-2022-109-256gb-wi-fi-pink-mm9m3.html",
  "https://skay.ua/uk/ipad-air-5-2022/57655-apple-ipad-air-m1-2022-109-256gb-wi-fi-starlight-mm9p3.html",

  "https://skay.ua/uk/ipad-air-5-2022/57661-apple-ipad-air-m1-2022-109-256gb-wi-fi4g-space-gray-mm713mm7e3.html",
  "https://skay.ua/uk/ipad-air-5-2022/57664-apple-ipad-air-m1-2022-109-256gb-wi-fi4g-blue-mm733mm7g3.html",
  "https://skay.ua/uk/ipad-air-5-2022/57663-apple-ipad-air-m1-2022-109-256gb-wi-fi4g-purple-mmed3.html",
  "https://skay.ua/uk/ipad-air-5-2022/57662-apple-ipad-air-m1-2022-109-256gb-wi-fi4g-pink-mm723mm7f3.html",
  "https://skay.ua/uk/ipad-air-5-2022/57665-apple-ipad-air-m1-2022-109-256gb-wi-fi4g-starlight-mm743mm7h3.html",

  "https://skay.ua/uk/ipad-pro/50825-apple-ipad-pro-m1-2021-11-128gb-wi-fi-silver-mhw63.html",
  "https://skay.ua/uk/ipad-pro/50820-apple-ipad-pro-m1-2021-11-128gb-wi-fi-space-grey-mhqr3.html",
  "https://skay.ua/uk/ipad-pro/50835-apple-ipad-pro-m1-2021-11-128gb-wi-fi4g-silver-mhw63.html",
  "https://skay.ua/uk/ipad-pro/50830-apple-ipad-pro-m1-2021-11-128gb-wi-fi4g-space-grey-mhw53.html",

  "https://skay.ua/uk/ipad-pro/50826-apple-ipad-pro-m1-2021-11-256gb-wi-fi-silver-mhqv3.html",
  "https://skay.ua/uk/ipad-pro/50821-apple-ipad-pro-m1-2021-11-256gb-wi-fi-space-grey-mhqu3.html",
  "https://skay.ua/uk/ipad-pro/50836-apple-ipad-pro-m1-2021-11-256gb-wi-fi4g-silver-mhw83.html",
  "https://skay.ua/uk/ipad-pro/50831-apple-ipad-pro-m1-2021-11-256gb-wi-fi4g-space-grey-mhw73.html",

  "https://skay.ua/uk/ipad-pro/50827-apple-ipad-pro-m1-2021-11-512gb-wi-fi-silver-mhqx3.html",
  "https://skay.ua/uk/ipad-pro/50822-apple-ipad-pro-m1-2021-11-512gb-wi-fi-space-grey-mhqw3.html",
  "https://skay.ua/uk/ipad-pro/50837-apple-ipad-pro-m1-2021-11-512gb-wi-fi4g-silver-mhwa3.html",
  "https://skay.ua/uk/ipad-pro/50832-apple-ipad-pro-m1-2021-11-512gb-wi-fi4g-space-grey-mhw93mhmx3.html",

  "https://skay.ua/uk/ipad-pro/50828-apple-ipad-pro-m1-2021-11-1tb-wi-fi-silver-mhr03.html",
  "https://skay.ua/uk/ipad-pro/50823-apple-ipad-pro-m1-2021-11-1tb-wi-fi-space-grey-mhqy3.html",
  "https://skay.ua/uk/ipad-pro/50838-apple-ipad-pro-m1-2021-11-1tb-wi-fi4g-silver-mhwd3.html",
  "https://skay.ua/uk/ipad-pro/50833-apple-ipad-pro-m1-2021-11-1tb-wi-fi4g-space-grey-mhwc3.html",

  "https://skay.ua/uk/ipad-pro/50829-apple-ipad-pro-m1-2021-11-2tb-wi-fi-silver-mhr33.html",
  "https://skay.ua/uk/ipad-pro/50824-apple-ipad-pro-m1-2021-11-2tb-wi-fi-space-grey-mhr23.html",
  "https://skay.ua/uk/ipad-pro/50839-apple-ipad-pro-m1-2021-11-2tb-wi-fi4g-silver-mhwf3.html",
  "https://skay.ua/uk/ipad-pro/50834-apple-ipad-pro-m1-2021-11-2tb-wi-fi4g-space-grey-mhwe3.html",

  "https://skay.ua/uk/ipad-pro/59643-apple-ipad-pro-m2-2022-11-128gb-wi-fi-silver-mnxe3.html",
  "https://skay.ua/uk/ipad-pro/59607-apple-ipad-pro-m2-2022-11-128gb-wi-fi-space-gray-mnxd3.html",
  "https://skay.ua/uk/ipad-pro/59658-apple-ipad-pro-m2-2022-11-128gb-wi-fi4g-silver-mnyd3mp563.html",
  "https://skay.ua/uk/ipad-pro/59657-apple-ipad-pro-m2-2022-11-128gb-wi-fi4g-space-gray-mp553mnyc3.html",

  "https://skay.ua/uk/ipad-pro/59645-apple-ipad-pro-m2-2022-11-256gb-wi-fi-silver-mnxg3.html",
  "https://skay.ua/uk/ipad-pro/59644-apple-ipad-pro-m2-2022-11-256gb-wi-fi-space-gray-mnxf3.html",
  "https://skay.ua/uk/ipad-pro/59660-apple-ipad-pro-m2-2022-11-256gb-wi-fi4g-silver-mp583mnyf3.html",
  "https://skay.ua/uk/ipad-pro/59659-apple-ipad-pro-m2-2022-11-256gb-wi-fi4g-space-gray-mp573mnye3.html",

  "https://skay.ua/uk/ipad-pro/59652-apple-ipad-pro-m2-2022-11-512gb-wi-fi-silver-mnxj3.html",
  "https://skay.ua/uk/ipad-pro/59647-apple-ipad-pro-m2-2022-11-512gb-wi-fi-space-gray-mnxh3.html",

  "https://skay.ua/uk/ipad-pro/59661-apple-ipad-pro-m2-2022-11-512gb-wi-fi4g-space-gray-mnyg3.html",

  "https://skay.ua/uk/ipad-pro/50845-apple-ipad-pro-m1-2021-129-128gb-wi-fi-silver-mhng3.html",
  "https://skay.ua/uk/ipad-pro/50840-apple-ipad-pro-m1-2021-129-128gb-wi-fi-space-grey-mhnf3.html",
  "https://skay.ua/uk/ipad-pro/50861-apple-ipad-pro-m1-2021-129-128gb-wi-fi-4g-silver-mhnt3mhr53.html",
  "https://skay.ua/uk/ipad-pro/50856-apple-ipad-pro-m1-2021-129-128gb-wi-fi-4g-space-grey-mhr43mhnr3.html",

  "https://skay.ua/uk/ipad-pro/50846-apple-ipad-pro-m1-2021-129-256gb-wi-fi-silver-mhnj3.html",
  "https://skay.ua/uk/ipad-pro/50841-apple-ipad-pro-m1-2021-129-256gb-wi-fi-space-grey-mhnh3.html",
  "https://skay.ua/uk/ipad-pro/50862-apple-ipad-pro-m1-2021-129-256gb-wi-fi-4g-silver-mhr73.html",
  "https://skay.ua/uk/ipad-pro/50857-apple-ipad-pro-m1-2021-129-256gb-wi-fi-4g-space-grey-mhr63.html",

  "https://skay.ua/uk/ipad-pro/50847-apple-ipad-pro-m1-2021-129-512gb-wi-fi-silver-mhnl3.html",
  "https://skay.ua/uk/ipad-pro/50842-apple-ipad-pro-m1-2021-129-512gb-wi-fi-space-grey-mhnk3.html",
  "https://skay.ua/uk/ipad-pro/50863-apple-ipad-pro-m1-2021-129-512gb-wi-fi-4g-silver-mhr93.html",
  "https://skay.ua/uk/ipad-pro/50858-apple-ipad-pro-m1-2021-129-512gb-wi-fi-4g-space-grey-mhr83.html",

  "https://skay.ua/uk/ipad-pro/50848-apple-ipad-pro-m1-2021-129-1tb-wi-fi-silver-mhnn3.html",
  "https://skay.ua/uk/ipad-pro/50843-apple-ipad-pro-m1-2021-129-1tb-wi-fi-space-grey-mhnm3.html",
  "https://skay.ua/uk/ipad-pro/50864-apple-ipad-pro-m1-2021-129-1tb-wi-fi-4g-silver-mhrc3.html",
  "https://skay.ua/uk/ipad-pro/50859-apple-ipad-pro-m1-2021-129-1tb-wi-fi-4g-space-grey-mhp13mhra3.html",

  "https://skay.ua/uk/ipad-pro/50849-apple-ipad-pro-m1-2021-129-2tb-wi-fi-silver-mhnq3.html",
  "https://skay.ua/uk/ipad-pro/50844-apple-ipad-pro-m1-2021-129-2tb-wi-fi-space-grey-mhnp3.html",
  "https://skay.ua/uk/ipad-pro/50865-apple-ipad-pro-m1-2021-129-2tb-wi-fi-4g-silver-mhre3.html",
  "https://skay.ua/uk/ipad-pro/50860-apple-ipad-pro-m1-2021-129-2tb-wi-fi-4g-space-grey-mhrd3.html",

  "https://skay.ua/uk/ipad-pro/59678-apple-ipad-pro-m2-2022-129-128gb-wi-fi-silver-mnxq3.html",
  "https://skay.ua/uk/ipad-pro/59677-apple-ipad-pro-m2-2022-129-128gb-wi-fi-space-gray-mnxp3.html",
  "https://skay.ua/uk/ipad-pro/59668-apple-ipad-pro-m2-2022-129-128gb-wi-fi4g-silver-mp5y3mp1y3.html",
  "https://skay.ua/uk/ipad-pro/59667-apple-ipad-pro-m2-2022-129-128gb-wi-fi4g-space-gray-mp5x3mp1x3.html",

  "https://skay.ua/uk/ipad-pro/59680-apple-ipad-pro-m2-2022-129-256gb-wi-fi-silver-mnxt3.html",
  "https://skay.ua/uk/ipad-pro/59679-apple-ipad-pro-m2-2022-129-256gb-wi-fi-space-gray-mnxr3.html",
  "https://skay.ua/uk/ipad-pro/59670-apple-ipad-pro-m2-2022-129-256gb-wi-fi4g-silver-mp213.html",
  "https://skay.ua/uk/ipad-pro/59669-apple-ipad-pro-m2-2022-129-256gb-wi-fi4g-space-gray-mp203.html",

  "https://skay.ua/uk/ipad-pro/59682-apple-ipad-pro-m2-2022-129-512gb-wi-fi-silver-mnxv3.html",
  "https://skay.ua/uk/ipad-pro/59681-apple-ipad-pro-m2-2022-129-512gb-wi-fi-space-gray-mnxu3.html",
  "https://skay.ua/uk/ipad-pro/59672-apple-ipad-pro-m2-2022-129-512gb-wi-fi4g-silver-mp233mp633.html",
  "https://skay.ua/uk/ipad-pro/59671-apple-ipad-pro-m2-2022-129-512gb-wi-fi4g-space-gray-mp623mp223.html",

  "https://skay.ua/uk/ipad-mini-6-2021/53851-apple-ipad-mini-83-6-gen-64gb-wi-fi-2021-space-gray-mk7m3.html",
  "https://skay.ua/uk/ipad-mini-6-2021/53850-apple-ipad-mini-83-6-gen-64gb-wi-fi-2021-purple-mk7r3.html",
  "https://skay.ua/uk/ipad-mini-6-2021/53849-apple-ipad-mini-83-6-gen-64gb-wi-fi-2021-pink-mlwl3.html",
  "https://skay.ua/uk/ipad-mini-6-2021/53847-apple-ipad-mini-83-6-gen-64gb-wi-fi-2021-starlight-mk7p3.html",

  "https://skay.ua/uk/ipad-mini-6-2021/53859-apple-ipad-mini-83-6-gen-64gb-wi-fi4g-2021-space-gray-mk893.html",
  "https://skay.ua/uk/ipad-mini-6-2021/53858-apple-ipad-mini-83-6-gen-64gb-wi-fi4g-2021-purple-mk8e3.html",
  "https://skay.ua/uk/ipad-mini-6-2021/53857-apple-ipad-mini-83-6-gen-64gb-wi-fi4g-2021-pink-mlx43.html",
  "https://skay.ua/uk/ipad-mini-6-2021/53856-apple-ipad-mini-83-6-gen-64gb-wi-fi4g-2021-starlight-mk8c3.html",

  "https://skay.ua/uk/ipad-mini-6-2021/53855-apple-ipad-mini-83-6-gen-256gb-wi-fi-2021-space-gray-mk7t3.html",
  "https://skay.ua/uk/ipad-mini-6-2021/53854-apple-ipad-mini-83-6-gen-256gb-wi-fi-2021-purple-mk7x3.html",
  "https://skay.ua/uk/ipad-mini-6-2021/53853-apple-ipad-mini-83-6-gen-256gb-wi-fi-2021-pink-mlwr3.html",
  "https://skay.ua/uk/ipad-mini-6-2021/53852-apple-ipad-mini-83-6-gen-256gb-wi-fi-2021-starlight-mk7v3.html",

  "https://skay.ua/uk/ipad-mini-6-2021/53863-apple-ipad-mini-83-6-gen-256gb-wi-fi4g-2021-space-gray-mk8f3.html",
  "https://skay.ua/uk/ipad-mini-6-2021/53862-apple-ipad-mini-83-6-gen-256gb-wi-fi4g-2021-purple-mk8k3.html",
  "https://skay.ua/uk/ipad-mini-6-2021/53861-apple-ipad-mini-83-6-gen-256gb-wi-fi4g-2021-pink-mlx93.html",
  "https://skay.ua/uk/ipad-mini-6-2021/53860-apple-ipad-mini-83-6-gen-256gb-wi-fi4g-2021-starlight-mk8h3.html"
];
const arrLinkIstoreIPAD = [
  "https://www.istore.ua/catalog/item/apple-ipad-2021-wi-fi-64-gb-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-2021-wi-fi-64-gb-space-gray",
  "https://www.istore.ua/catalog/item/apple-ipad-2021-wi-fi-lte-64-gb-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-2021-wi-fi-lte-64-gb-space-gray",

  "https://www.istore.ua/catalog/item/apple-ipad-2021-wi-fi-256-gb-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-2021-wi-fi-128-gb-space-gray",
  "https://www.istore.ua/catalog/item/apple-ipad-2021-wi-fi-lte-256-gb-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-2021-wi-fi-lte-256-gb-space-gray",

  "https://www.istore.ua/catalog/item/apple-ipad-2022-wi-fi-64gb-blue",
  "https://www.istore.ua/catalog/item/apple-ipad-2022-wi-fi-64gb-pink",
  "https://www.istore.ua/catalog/item/apple-ipad-2022-wi-fi-64gb-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-2022-wi-fi-64gb-yellow",

  "https://www.istore.ua/catalog/item/apple-ipad-2022-wi-fi-cellular-64gb-blue",
  "https://www.istore.ua/catalog/item/apple-ipad-2022-wi-fi-cellular-64gb-pink",
  "https://www.istore.ua/catalog/item/apple-ipad-2022-wi-fi-cellular-64gb-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-2022-wi-fi-cellular-64gb-yellow",

  "https://www.istore.ua/catalog/item/apple-ipad-2022-wi-fi-256gb-blue",
  "https://www.istore.ua/catalog/item/apple-ipad-2022-wi-fi-256gb-pink",
  "https://www.istore.ua/catalog/item/apple-ipad-2022-wi-fi-256gb-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-2022-wi-fi-256gb-yellow",

  "https://www.istore.ua/catalog/item/apple-ipad-2022-wi-fi-cellular-256gb-blue",
  "https://www.istore.ua/catalog/item/apple-ipad-2022-wi-fi-cellular-256gb-pink",
  "https://www.istore.ua/catalog/item/apple-ipad-2022-wi-fi-cellular-256gb-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-2022-wi-fi-cellular-256gb-yellow",

  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-64-gb-wi-fi-space-grey",
  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-64-gb-wi-fi-blue",
  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-64-gb-wi-fi-purple",

  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-64-gb-wi-fi-pink",
  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-64-gb-wi-fi-starlight",

  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-64-gb-wi-fi-lte-space-grey",
  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-64-gb-wi-fi-lte-blue",
  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-64-gb-wi-fi-lte-purple",
  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-64-gb-wi-fi-lte-pink",
  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-64-gb-wi-fi-lte-starlight",

  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-256-gb-wi-fi-space-grey",
  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-256-gb-wi-fi-blue",
  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-256-gb-wi-fi-purple",
  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-256-gb-wi-fi-pink",
  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-256-gb-wi-fi-starlight",

  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-256-gb-wi-fi-lte-space-grey",
  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-256-gb-wi-fi-lte-blue",
  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-256-gb-wi-fi-lte-purple",
  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-256-gb-wi-fi-lte-pink",
  "https://www.istore.ua/catalog/item/apple-ipad-air-2022-256-gb-wi-fi-lte-starlight",

  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-128-gb-wi-fi-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-128-gb-wi-fi-seryy-kosmos",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-128-gb-wi-fi-lte-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-128-gb-wi-fi-lte-seryy-kosmos",

  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-256-gb-wi-fi-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-256-gb-wi-fi-seryy-kosmos",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-256-gb-wi-fi-lte-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-256-gb-wi-fi-lte-seryy-kosmos",

  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-512-gb-wi-fi-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-512-gb-wi-fi-seryy-kosmos",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-512-gb-wi-fi-lte-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-512-gb-wi-fi-lte-seryy-kosmos",

  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-1-tb-wi-fi-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-1-tb-wi-fi-seryy-kosmos",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-1-tb-wi-fi-lte-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-1-tb-wi-fi-lte-seryy-kosmos",

  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-2-tb-wi-fi-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-2-tb-wi-fi-seryy-kosmos",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-2-tb-wi-fi-lte-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-11-m1-2-tb-wi-fi-lte-seryy-kosmos",

  "https://www.istore.ua/catalog/item/apple-ipad-pro-11-2022-wi-fi-128gb-m2-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-11-2022-wi-fi-128gb-m2-space-gray",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-11-2022-wi-fi-cellular-128gb-m2-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-11-2022-wi-fi-cellular-128gb-m2-space-gray",

  "https://www.istore.ua/catalog/item/apple-ipad-pro-11-2022-wi-fi-256gb-m2-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-11-2022-wi-fi-256gb-m2-space-gray",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-11-2022-wi-fi-cellular-256gb-m2-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-11-2022-wi-fi-cellular-256gb-m2-space-gray",

  "https://www.istore.ua/catalog/item/apple-ipad-pro-11-2022-wi-fi-512-gb-m2-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-11-2022-wi-fi-512gb-m2-space-gray",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-11-2022-wi-fi-cellular-512gb-m2-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-11-2022-wi-fi-cellular-512gb-m2-space-gray",

  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-128-gb-wi-fi-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-128-gb-wi-fi-seryy-kosmos",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-128-gb-wi-fi-lte-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-128-gb-wi-fi-lte-seryy-kosmos",

  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-256-gb-wi-fi-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-256-gb-wi-fi-seryy-kosmos",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-256-gb-wi-fi-lte-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-256-gb-wi-fi-lte-seryy-kosmos",

  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-512-gb-wi-fi-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-512-gb-wi-fi-seryy-kosmos",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-512-gb-wi-fi-lte-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-512-gb-wi-fi-lte-seryy-kosmos",

  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-1-tb-wi-fi-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-1-tb-wi-fi-seryy-kosmos",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-1-tb-wi-fi-lte-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-1-tb-wi-fi-lte-seryy-kosmos",

  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-2-tb-wi-fi-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-2-tb-wi-fi-seryy-kosmos",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-2-tb-wi-fi-lte-serebristyy",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-2021-g-12-9-m1-2-tb-wi-fi-lte-seryy-kosmos",

  "https://www.istore.ua/catalog/item/apple-ipad-pro-12-9-2022-wi-fi-128gb-m2-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-12-9-2022-wi-fi-128gb-m2-space-gray",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-12-9-2022-wi-fi-cellular-128gb-m2-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-12-9-2022-wi-fi-cellular-128gb-m2-space-gray",

  "https://www.istore.ua/catalog/item/apple-ipad-pro-12-9-2022-wi-fi-256gb-m2-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-12-9-2022-wi-fi-256gb-m2-space-gray",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-12-9-2022-wi-fi-cellular-256gb-m2-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-12-9-2022-wi-fi-cellular-256gb-m2-space-gray",

  "https://www.istore.ua/catalog/item/apple-ipad-pro-12-9-2022-wi-fi-512gb-m2-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-12-9-2022-wi-fi-512gb-m2-space-gray",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-12-9-2022-wi-fi-cellular-512gb-m2-silver",
  "https://www.istore.ua/catalog/item/apple-ipad-pro-12-9-2022-wi-fi-cellular-512gb-m2-space-gray",

  "https://www.istore.ua/catalog/item/ipad-mini-6-64-gb-wi-fi-space-gray",
  "https://www.istore.ua/catalog/item/ipad-mini-6-2021-64-gb-wi-fi-purple",
  "https://www.istore.ua/catalog/item/ipad-mini-6-2021-64-gb-wi-fi-pink",
  "https://www.istore.ua/catalog/item/ipad-mini-6-2021-64-gb-wi-fi-starlight",

  "https://www.istore.ua/catalog/item/ipad-mini-6-2021-64-gb-wi-fi-lte-space-gray",
  "https://www.istore.ua/catalog/item/apple-ipad-mini-6-8-3-2021-wi-fi-lte-64gb-purple",
  "https://www.istore.ua/catalog/item/apple-ipad-mini-6-8-3-2021-wi-fi-lte-64gb-pink",
  "https://www.istore.ua/catalog/item/apple-ipad-mini-6-8-3-2021-wi-fi-lte-64gb-starlight",

  "https://www.istore.ua/catalog/item/ipad-mini-6-2021-256-gb-wi-fi-space-gray",
  "https://www.istore.ua/catalog/item/ipad-mini-6-2021-256-gb-wi-fi-purple",
  "https://www.istore.ua/catalog/item/ipad-mini-6-2021-256-gb-wi-fi-pink",
  "https://www.istore.ua/catalog/item/ipad-mini-6-2021-256-gb-wi-fi-starlight",

  "https://www.istore.ua/catalog/item/ipad-mini-6-2021-256-gb-wi-fi-lte-space-gray",
  "https://www.istore.ua/catalog/item/apple-ipad-mini-6-8-3-2021-wi-fi-lte-256gb-purple",
  "https://www.istore.ua/catalog/item/apple-ipad-mini-6-8-3-2021-wi-fi-lte-256gb-pink",
  "https://www.istore.ua/catalog/item/apple-ipad-mini-6-8-3-2021-wi-fi-lte-256gb-starlight"
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
  const browser = await puppeteer.launch({ headless: "true" });
  const page = await browser.newPage();

  for (let i = 0; i < arrLinkMobilePlanetIPAD.length; i += 1) {
    await page.goto(arrLinkMobilePlanetIPAD[i]);
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
  for (let i = 0; i < arrLinkIstoreIPAD.length; i += 1) {
    await page.goto(arrLinkIstoreIPAD[i]);
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

  // for (let i = 0; i < arrLinkSkayIPAD.length; i += 1) {
  //   await page.goto(arrLinkSkayIPAD[i]);
  //   const n = await page.$("#txt");

  //   let arr1 = await page.evaluate(() => {
  //     let text2 = document.querySelector("h1").innerText;
  //     if (document.querySelector(".product-prices .products-item-cost") != null) {
  //       return (
  //         text2 + "S: " + document.querySelector(".product-prices .products-item-cost").innerText
  //       );
  //     } else {
  //       return;
  //     }
  //   });

  //   console.log(arr1);
  //   await page.setDefaultNavigationTimeout(0);
  // }
  


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

  // for (let i = 0; i < arrLinkiDIDIStarlink.length; i += 1) {
  //   await page.goto(arrLinkiDIDIStarlink[i]);
  //   const n = await page.$("#txt");

  //   let arr3 = await page.evaluate(() => {
  //     let text2 = document.querySelector(".h1").innerText;
  //     if (document.querySelector(".product-price") != null) {
  //       return (
  //         text2 + "DIDI: " + document.querySelector(".product-price").innerText
  //       );
  //     } else {
  //       return ;
  //     }
  //   });

  //   console.log(arr3);
  //   await page.setDefaultNavigationTimeout(0);
  // }
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
f();
