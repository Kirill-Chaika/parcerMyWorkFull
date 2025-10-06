console.log("Hello world");

const puppeteer = require("puppeteer");


const arrLinkXiaomiPad = [
  " https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-pad-7-8-128gb-gray-vhu5476eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-pad-7-8-128gb-gray-vhu5476eu.html",
" https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-pad-7-8-128gb-blue-vhu5367eu.html",
" https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-pad-7-8-128gb-green-vhu5364eu.html",
" https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-pad-7-8-256gb-gray-vhu5498eu.html",
" https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-pad-7-8-256gb-gray-vhu5498eu.html",
" https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-pad-7-8-256gb-blue-vhu5363eu.html",
" https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-pad-7-8-256gb-green-vhu5368eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-pad-7-8-256gb-green-vhu5368eu.html",


" https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-pad-7-pro-8-256gb-gray-vhu5412eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-pad-7-pro-8-256gb-blue-vhu5438eu.html",
" https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-pad-7-pro-8-256gb-green-vhu5443eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-pad-7-pro-12-512gb-gray-vhu5422eu.html",
" https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-pad-7-pro-12-512gb-blue-vhu5445eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-pad-7-pro-12-512gb-green-vhu5439eu.html",


" https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-2-wifi-4-128gb-graphite-gray-vhu5659eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-2-4g-4-128gb-graphite-gray-vhu5660eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-2-wifi-4-128gb-lavender-purple-vhu5936eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-2-wifi-4-128gb-mint-green-vhu5875eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-2-wifi-8-256gb-graphite-gray-vhu5631eu.html",
" https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-2-wifi-8-256gb-lavender-purple-vhu5920eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-2-wifi-8-256gb-mint-green-vhu5897eu.html",

"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-pro-6-128gb-graphite-gray-vhu4737eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-pro-6-128gb-ocean-blue-vhu4733eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-pro-6-128gb-mint-green-vhu4725eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-pro-8-256gb-graphite-gray-vhu4750eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-pro-8-256gb-ocean-blue-vhu4719eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-pro-8-256gb-mint-green-vhu4729eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-pro-5g-8-256gb-graphite-gray-vhu4826eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-pro-5g-8-256gb-mint-green-vhu4819eu.html",


"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-se-8-7-4-64gb-graphite-gray-vhu5098eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-se-8-7-4-64gb-sky-blue-vhu5054eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-se-8-7-4-128gb-graphite-gray-vhu5072eu.html",
"https://mi.ua/ru/products/internet-planshety/planshet-xiaomi-redmi-pad-se-8-7-4-64gb-sky-blue-vhu5070eu.html",
];

const arrLinkCtsLenovoPad = [ 
  "https://www.ctrs.com.ua/ru/planshety/lenovo-tab-m11-8128-wifi-luna-grey-plus-pen-756023.html?utm_source=google&utm_medium=cpc&utm_campaign=Other&utm_term=&utm_content=765802161545&gad_source=1&gad_campaignid=19073844909&gbraid=0AAAAADpT35W1bagFezQ4PjM3H1MAJ-OUM&gclid=CjwKCAjwz5nGBhBBEiwA-W6XRJbsO96D6X-jVYtfw4ic0tcWoCeI3VmhAVQAYm7WiHaMUzhNkFLWixoCKyMQAvD_BwE",
"https://www.ctrs.com.ua/ru/planshety/lenovo-tab-m11-4128-wifi-seafoam-green-plus-pen-736635.html",
"https://www.ctrs.com.ua/planshety/lenovo-tab-m11-4128-lte-luna-grey-plus-pen-736638.html",
"https://www.ctrs.com.ua/planshety/lenovo-tab-m11-4128-lte-seafoam-green-plus-pen-736639.html",
"https://www.ctrs.com.ua/planshety/lenovo-tab-m11-8128-wifi-luna-grey-plus-pen-756023.html",
"https://www.ctrs.com.ua/planshety/lenovo-tab-m11-8128-wifi-seafoam-green-plus-pen-756024.html",
"https://www.ctrs.com.ua/planshety/lenovo-tab-m11-8128-lte-luna-grey-plus-pen-756021.html",
"https://www.ctrs.com.ua/planshety/lenovo-tab-m11-8128-lte-seafoam-green-plus-pen-756022.html",


"https://www.ctrs.com.ua/planshety/lenovo-tab-plus-8128-wifi-luna-grey-747654.html",
"https://www.ctrs.com.ua/planshety/lenovo-tab-plus-8128-wifi-luna-grey-plus-case-759313.html",
"https://www.ctrs.com.ua/planshety/lenovo-tab-plus-8256-wifi-luna-grey-747655.html",
"https://www.ctrs.com.ua/planshety/lenovo-tab-plus-8256-wifi-luna-grey-plus-case-759316.html",


"https://www.ctrs.com.ua/planshety/lenovo-idea-tab-pro-8128-wifi-luna-grey-plus-pen-762746.html",
"https://www.ctrs.com.ua/planshety/lenovo-idea-tab-pro-8128-wifi-luna-grey-plus-penmoto-buds-762767.html",
"https://www.ctrs.com.ua/planshety/lenovo-idea-tab-pro-8256-wifi-luna-grey-plus-pen-762768.html",
"https://www.ctrs.com.ua/planshety/lenovo-idea-tab-pro-12256-wifi-luna-grey-plus-pen-762769.html",


"https://www.ctrs.com.ua/planshety/lenovo-tab-k11-plus-8256-wifi-luna-grey-760523.html",
"https://www.ctrs.com.ua/planshety/lenovo-tab-k11-plus-8256-lte-luna-grey-760524.html",


"https://www.ctrs.com.ua/planshety/lenovo-tab-one-4128-lte-luna-grey-plus-clear-case-774235.html",
"https://www.ctrs.com.ua/planshety/lenovo-tab-one-464gb-lte-luna-grey-plus-clear-case-774239.html",
"https://www.ctrs.com.ua/planshety/lenovo-tab-one-4128gb-wi-fi-luna-grey-plus-clear-case-773586.html",
"https://www.ctrs.com.ua/planshety/lenovo-tab-one-4128-lte-luna-grey-plus-clear-case-774235.html",


"https://www.ctrs.com.ua/planshety/lenovo-tab-m9-tb-310fu-464-wifi-arctic-grey-plus-casefilm-718437.html",
"https://www.ctrs.com.ua/planshety/lenovo-tab-m9-tb-310xu-464-lte-arctic-grey-plus-casefilm-718438.html",


"https://www.ctrs.com.ua/planshety/lenovo-tab-4128-wifi-luna-grey-plus-clear-case-761604.html",
"https://www.ctrs.com.ua/planshety/lenovo-tab-tb311xu-4128-lte-luna-grey-plus-clear-case-761606.html",
"https://www.ctrs.com.ua/planshety/lenovo-tab-tb311fu-4128-wifi-luna-grey-plus-kids-bumperpen-761605.html",
"https://www.ctrs.com.ua/planshety/lenovo-tab-tb311xu-4128-lte-luna-grey-plus-kids-bumperpen-761607.html",


"https://www.ctrs.com.ua/planshety/lenovo-idea-tab-pro-8128-wifi-luna-grey-plus-pen-762746.html",
"https://www.ctrs.com.ua/planshety/lenovo-idea-tab-pro-8128-wifi-luna-grey-plus-penmoto-buds-762767.html",
"https://www.ctrs.com.ua/planshety/lenovo-idea-tab-pro-8256-wifi-luna-grey-plus-pen-762768.html",
"https://www.ctrs.com.ua/planshety/lenovo-idea-tab-pro-12256-wifi-luna-grey-plus-pen-762769.html",


"https://www.ctrs.com.ua/planshety/lenovo-yoga-tab-plus-16256-wifi-tidal-teal-plus-pen-761505.html",
"https://www.ctrs.com.ua/planshety/lenovo-yoga-tab-plus-16256-wifi-tidal-teal-plus-keyboardpen-761506.html",
]

const arrLinkCtsSamsPad = [
  "https://www.ctrs.com.ua/ru/planshety/samsung-galaxy-tab-a9-wi-fi-464-grey-sm-x110nzaasek-736037.html?utm_source=google&utm_medium=cpc&utm_campaign=Other&utm_term=&utm_content=765802161545&gad_source=1&gad_campaignid=19073844909&gbraid=0AAAAADpT35W1bagFezQ4PjM3H1MAJ-OUM&gclid=CjwKCAjwz5nGBhBBEiwA-W6XRDJyjIZXJ5tzdnUmuuDceeXQxR9QanVgD_CX_UuVtwbJi3y2aeDHtxoCX-kQAvD_BwE",
"https://www.ctrs.com.ua/planshety/samsung-galaxy-tab-a9-4g-464-grey-sm-x115nzaasek-736035.html",
"https://www.ctrs.com.ua/planshety/samsung-galaxy-tab-a9-wi-fi-8128-grey-sm-x110nzaesek-736036.html",
"https://www.ctrs.com.ua/planshety/samsung-galaxy-tab-a9-4g-4128-grey-sm-x115nzaesek-736034.html",

 
"https://www.ctrs.com.ua/planshety/samsung-galaxy-tab-a9plus-wf-6128gb-2025-grey-sm-x210rzareuc-769964.html",
"https://www.ctrs.com.ua/planshety/samsung-galaxy-tab-a9plus-5g-6128gb-2025-grey-sm-x216rzareuc-769962.html",
"https://www.ctrs.com.ua/planshety/samsung-galaxy-tab-a9plus-5g-8256gb-2025-grey-sm-x216rzapeuc-769961.html",
"https://www.ctrs.com.ua/planshety/samsung-galaxy-tab-a9plus-wf-8256gb-2025-grey-sm-x210rzapeuc-769963.html",

 
"https://www.ctrs.com.ua/planshety/samsung-galaxy-tab-s10-fe-wi-fi-8128gb-gray-sm-x520nzareuc-765002.html",
"https://www.ctrs.com.ua/planshety/samsung-galaxy-tab-s10-fe-5g-8128gb-gray-sm-x526bzareuc-764998.html",
"https://www.ctrs.com.ua/planshety/samsung-galaxy-tab-s10-fe-wi-fi-8128gb-light-blue-sm-x520nlbreuc-765001.html",
"https://www.ctrs.com.ua/planshety/samsung-galaxy-tab-s10-fe-wi-fi-12256gb-gray-sm-x520nzapeuc-764999.html",

 
"https://www.ctrs.com.ua/planshety/samsung-galaxy-tab-s10-fe-wi-fi-8128gb-light-blue-sm-x520nlbreuc-765001.html",
"https://www.ctrs.com.ua/planshety/samsung-galaxy-tab-s10-fe-5g-12256gb-gray-sm-x526bzapeuc-764997.html",
"https://www.ctrs.com.ua/planshety/samsung-galaxy-tab-s10-fe-5g-12256gb-gray-sm-x526bzapeuc-764997.html",
"https://www.ctrs.com.ua/planshety/samsung-galaxy-tab-active-5-wi-fi-128gb-blackgreen-sm-x300nzgaeuc-743381.html",
"https://www.ctrs.com.ua/planshety/samsung-galaxy-tab-active-5-5g-128gb-blackgreen-sm-x306bzgaeuc-743380.html",

 
"https://www.ctrs.com.ua/planshety/samsung-galaxy-tab-s10-feplus-wi-fi-8128gb-gray-sm-x620nzareuc-766277.html",
"https://www.ctrs.com.ua/planshety/samsung-galaxy-tab-s10-feplus-5g-8128gb-gray-sm-x626bzareuc-765062.html",
"https://www.ctrs.com.ua/planshety/samsung-galaxy-tab-s10-feplus-wi-fi-8128gb-gray-sm-x620nzareuc-766277.html",
"https://www.ctrs.com.ua/planshety/samsung-galaxy-tab-s10-fe-wi-fi-8128gb-light-blue-sm-x520nlbreuc-765001.html",
"https://www.ctrs.com.ua/planshety/samsung-galaxy-tab-s10-feplus-wi-fi-12256gb-gray-sm-x620nzapeuc-765061.html",
"https://www.ctrs.com.ua/planshety/samsung-galaxy-tab-s10-feplus-wi-fi-12256gb-gray-sm-x620nzapeuc-765061.html",


 
"https://www.ctrs.com.ua/planshety/samsung-galaxy-tab-s10-fe-wi-fi-8128gb-gray-sm-x520nzareuc-765002.html",

 
"https://www.ctrs.com.ua/planshety/samsung-galaxy-tab-s10-fe-wi-fi-8128gb-gray-sm-x520nzareuc-765002.html",
"https://www.ctrs.com.ua/planshety/samsung-galaxy-tab-s10-fe-wi-fi-12256gb-gray-sm-x520nzapeuc-764999.html",
    
 
"https://www.ctrs.com.ua/planshety/samsung-galaxy-tab-active-5-wi-fi-128gb-blackgreen-sm-x300nzgaeuc-743381.html",
"https://www.ctrs.com.ua/planshety/samsung-galaxy-tab-active-5-5g-128gb-blackgreen-sm-x306bzgaeuc-743380.html",
 ]
const arrLinkSotaXiaomi = [
  "https://sota.store/ua/planshet-xiaomi-pad-7-wifi-8-128gb-gray-vhu5476eu-ua-205225.html",
"https://sota.store/ua/planshet-xiaomi-pad-7-wifi-8-128gb-blue-eu-208501.html",
"https://sota.store/ua/planshet-xiaomi-pad-7-wifi-8-128gb-green-vhu5364eu-no-adapter-eu-209255.html",
"https://sota.store/ua/planshet-xiaomi-pad-7-wifi-8-256gb-gray-vhu5498eu-vhu5241eu-no-adapter-eu-209495.html",
"https://sota.store/ua/planshet-xiaomi-pad-7-wifi-8-256gb-blue-vhu5363eu-vhu5280eu-no-adapter-eu-209456.html",
"https://sota.store/ua/planshet-xiaomi-pad-7-wifi-8-256gb-green-vhu5368eu-vhu5318eu-no-adapter-eu-209496.html",

 
"https://sota.store/ua/planshet-xiaomi-pad-7-pro-wifi-8-256gb-gray-vhu5412eu-no-adapter-eu-209782.html",
"https://sota.store/ua/planshet-xiaomi-pad-7-pro-wifi-8-256gb-blue-vhu5438eu-no-adapter-eu-210256.html",
"https://sota.store/ua/planshet-xiaomi-pad-7-pro-wifi-8-256gb-green-vhu5443eu-no-adapter-eu-210255.html",
"https://sota.store/ua/planshet-xiaomi-pad-7-pro-wifi-12-512gb-gray-vhu5422eu-ua-205241.html",
"https://sota.store/ua/planshet-xiaomi-pad-7-pro-wifi-8-256gb-green-vhu5443eu-no-adapter-eu-210255.html",
"https://sota.store/ua/planshet-xiaomi-pad-7-pro-wifi-8-256gb-blue-vhu5438eu-no-adapter-eu-210256.html",

 
"https://sota.store/ua/planshet-xiaomi-redmi-pad-2-wifi-4-128gb-graphite-gray-vhu5659eu-eu-215707.html",
 
"https://sota.store/ua/planshet-xiaomi-redmi-pad-2-wifi-4-128gb-mint-green-vhu5875eu-eu-215709.html",
"https://sota.store/ua/planshet-xiaomi-redmi-pad-2-wifi-8-256gb-graphite-gray-vhu5631eu-eu-215708.html",
 
"https://sota.store/ua/planshet-xiaomi-redmi-pad-2-wifi-8-256gb-mint-green-vhu5897eu-eu-215710.html",
 
"https://sota.store/ua/xiaomi-redmi-pad-pro-6-128gb-wifi-gray-no-adapter-eu-182129.html",
"https://sota.store/ua/xiaomi-redmi-pad-pro-6-128gb-wifi-green-no-adapter-eu-182128.html",
"https://sota.store/ua/xiaomi-redmi-pad-pro-8-256gb-wifi-green-no-adapter-eu-184949.html",
"https://sota.store/ua/xiaomi-redmi-pad-pro-5g-8-256gb-mint-green-vhu4819eu-ua-186859.html",

 

"https://sota.store/ua/planshet-xiaomi-redmi-pad-se-8-7-4-64gb-graphite-gray-eu-189431.html",
"https://sota.store/ua/planshet-xiaomi-redmi-pad-se-8-7-4-128gb-graphite-gray-eu-194132.html",
"https://sota.store/ua/planshet-xiaomi-redmi-pad-se-8-7-4-128gb-sky-blue-eu-194133.html",
"https://sota.store/ua/planshet-xiaomi-redmi-pad-se-8-7-6-128gb-graphite-gray-vhu4926eu-eu-188488.html",
"https://sota.store/ua/xiaomi-redmi-pad-se-8-7-6-128gb-sky-blue-eu-187097.html",
"https://sota.store/ua/planshet-xiaomi-redmi-pad-se-8-7-6-128gb-mint-green-eu-188564.html",
]
const arrLinkTouchXiaomi = [
  "https://touch.com.ua/ua/item/xiaomi-pad-7-8-128gb-gray-with-adapter-global-eu/",
"https://touch.com.ua/ua/item/xiaomi-pad-7-8-128gb-sky-blue-global-eu-129459-planshety-plansheti/",
"https://touch.com.ua/ua/item/xiaomi-pad-7-8-128gb-green-global-eu-129461-planshety-plansheti/",
"https://touch.com.ua/ua/item/xiaomi-pad-7-8-256gb-gray-global-eu-129463-planshety-plansheti/",
"https://touch.com.ua/ua/item/xiaomi-pad-7-8-256gb-sky-blue-with-adapter-global-eu/",
"https://touch.com.ua/ua/item/xiaomi-pad-7-8-256gb-green-with-adapter-global-eu/",

 
"https://touch.com.ua/ua/item/xiaomi-pad-7-pro-8-256gb-gray-global-eu-129468-planshety-plansheti/",
"https://touch.com.ua/ua/item/xiaomi-pad-7-pro-8-256gb-blue-global-eu-129471-planshety-plansheti/",
"https://touch.com.ua/ua/item/xiaomi-pad-7-pro-8-256gb-green-with-adapter-global-eu/",
"https://touch.com.ua/ua/item/xiaomi-pad-7-pro-12-512gb-gray-with-adapter-global-eu-137430-planshety-plansheti/",
"https://touch.com.ua/ua/item/xiaomi-pad-7-pro-12-512gb-blue-with-adapter-global-eu/",
"https://touch.com.ua/ua/item/xiaomi-pad-7-pro-12-512gb-green-with-adapter-global-eu/",

 
"https://touch.com.ua/ua/item/xiaomi-redmi-pad-2-4-128gb-wi-fi-graphite-gray-137977-planshety-plansheti/",
 
"https://touch.com.ua/ua/item/xiaomi-redmi-pad-2-4-128gb-wi-fi-mint-green-137979-planshety-plansheti/",
"https://touch.com.ua/ua/item/xiaomi-redmi-pad-2-8-256gb-wi-fi-graphite-gray-137980-planshety-plansheti/",
"https://touch.com.ua/ua/item/planshet-redmi-pad-2-8-256gb-wi-fi-lavender-purple-global-eu-vhu5920eu/",
"https://touch.com.ua/ua/item/xiaomi-redmi-pad-2-8-256gb-wi-fi-mint-green-137981-planshety-plansheti/",

 

"https://touch.com.ua/ua/item/xiaomi-redmi-pad-se-8-7-4-64gb-graphite-gray-global-eu-113914-planshety-plansheti/",
"https://touch.com.ua/ua/item/xiaomi-redmi-pad-se-8-7-4-128gb-graphite-gray-global-eu-113918-planshety-plansheti/",
"https://touch.com.ua/ua/item/xiaomi-redmi-pad-se-8-7-4-128gb-sky-blue-global-eu-113919-planshety-plansheti/",
"https://touch.com.ua/ua/item/xiaomi-redmi-pad-se-8-7-6-128gb-graphite-gray-global-eu-117817-smartfony-smartfoni/",
"https://touch.com.ua/ua/item/xiaomi-redmi-pad-se-8-7-6-128gb-sky-blue-global-eu-117818-smartfony-smartfoni/",
"https://touch.com.ua/ua/item/xiaomi-redmi-pad-se-8-7-6-128gb-mint-green-global-eu-117819-smartfony-smartfoni/",
]
const arrLinkIpodRomXiaomi = [
  "https://ipodrom.ua/planshet-xiaomi-pad-7-8-128gb-gray-vhu5476eu/?utm_medium=cpc&utm_source=hotline&utm_campaign=Планшеты&utm_term=Xiaomi+Pad+7+8%2F128GB+Gray+%28VHU5476EU%29&utm_id=hotline_386&utm_content=6559",
"https://ipodrom.ua/planshet-xiaomi-pad-7-8-128gb-sky-blue-vhu5367eu/",
"https://ipodrom.ua/planshet-xiaomi-pad-7-8-128gb-green-vhu5364eu/",
"https://ipodrom.ua/planshet-xiaomi-pad-7-8-256gb-gray-vhu5498eu/",
"https://ipodrom.ua/planshet-xiaomi-pad-7-8-256gb-sky-blue-vhu5363eu/",
"https://ipodrom.ua/planshet-xiaomi-pad-7-8-256gb-green-vhu5368eu/",

 
"https://ipodrom.ua/planshet-xiaomi-pad-7-pro-8-256gb-gray-vhu5412eu/",
"https://ipodrom.ua/planshet-xiaomi-pad-7-pro-8-256gb-blue-vhu5438eu/",
"https://ipodrom.ua/planshet-xiaomi-pad-7-pro-8-256gb-green-vhu5443eu/",
"https://ipodrom.ua/planshet-xiaomi-pad-7-pro-12-512gb-gray-vhu5422eu/",
"https://ipodrom.ua/planshet-xiaomi-pad-7-pro-12-512gb-blue-vhu5445eu/",
"https://ipodrom.ua/planshet-xiaomi-pad-7-pro-12-512gb-green-vhu5439eu/",

 
"https://ipodrom.ua/planshet-xiaomi-redmi-pad-pro-6-128gb-graphite-gray-vhu4737eu/",
"https://ipodrom.ua/planshet-xiaomi-redmi-pad-pro-6-128gb-mint-green-vhu4725eu/",
"https://ipodrom.ua/planshet-xiaomi-redmi-pad-pro-8-256gb-mint-green-vhu4729eu/",
]
const arrLinkMobilePlanetXiaomi = [
  "https://mobileplanet.ua/xiaomi-pad-7-8-128gb-gray-vhu5476eu-339481",
"https://mobileplanet.ua/xiaomi-pad-7-8-128gb-sky-blue-vhu5367eu-339483",
"https://mobileplanet.ua/xiaomi-pad-7-8-128gb-green-vhu5364eu-339482",
"https://mobileplanet.ua/xiaomi-pad-7-8-256gb-gray-vhu5498eu-339484",
"https://mobileplanet.ua/xiaomi-pad-7-8-256gb-sky-blue-vhu5363eu-339486",
"https://mobileplanet.ua/xiaomi-pad-7-8-256gb-green-vhu5368eu-339485",

 
"https://mobileplanet.ua/xiaomi-pad-7-pro-8-256gb-gray-vhu5412eu-339491",
"https://mobileplanet.ua/xiaomi-pad-7-pro-8-256gb-blue-vhu5438eu-339490",
"https://mobileplanet.ua/xiaomi-pad-7-pro-8-256gb-green-vhu5443eu-339492",
"https://mobileplanet.ua/xiaomi-pad-7-pro-12-512gb-gray-vhu5422eu-339488",
"https://mobileplanet.ua/xiaomi-pad-7-pro-12-512gb-blue-vhu5445eu-339487",
"https://mobileplanet.ua/xiaomi-pad-7-pro-12-512gb-green-vhu5439eu-339489",

 
"https://mobileplanet.ua/xiaomi-redmi-pad-2-4-128gb-wi-fi-graphit-346222",
 
"https://mobileplanet.ua/xiaomi-redmi-pad-2-4-128gb-wi-fi-mint-gr-356588",
"https://mobileplanet.ua/xiaomi-redmi-pad-2-8-256gb-wi-fi-graphit-346223",
"https://mobileplanet.ua/xiaomi-redmi-pad-2-8-256gb-wi-fi-lavende-352491",
"https://mobileplanet.ua/xiaomi-redmi-pad-2-8-256gb-wi-fi-mint-gr-352492",

 
"https://mobileplanet.ua/xiaomi-redmi-pad-pro-6-128gb-gray-europe-315958",
"https://mobileplanet.ua/xiaomi-redmi-pad-pro-6-128gb-green-europ-315959",
"https://mobileplanet.ua/xiaomi-redmi-pad-pro-8-256gb-green-europ-315962",
 
 

"https://mobileplanet.ua/xiaomi-redmi-pad-se-8-7-4-64gb-wi-fi-gra-328207",
"https://mobileplanet.ua/xiaomi-redmi-pad-se-8-7-4-128gb-wi-fi-gr-321662",
"https://mobileplanet.ua/xiaomi-redmi-pad-se-8-7-4-128gb-wi-fi-sk-321663",
"https://mobileplanet.ua/xiaomi-redmi-pad-se-8-7-6-128gb-wi-fi-gr-321670",
 
"https://mobileplanet.ua/xiaomi-redmi-pad-se-8-7-6-128gb-wi-fi-au-321665",
]

async function f() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  for (let i = 0; i < arrLinkXiaomiPad.length; i += 1) {
    await page.goto(arrLinkXiaomiPad[i]);
    const n = await page.$("#txt");

    let arr1 = await page.evaluate(() => {

      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".p-trade-price .p-trade-price__current") != null) {
        return text2 + 'Xiaomi: ' + document.querySelector(".p-trade-price .p-trade-price__current").innerText
      } else { return }

    });

    console.log(arr1)
    await page.setDefaultNavigationTimeout(0);
  }

  for (let i = 0; i < arrLinkCtsLenovoPad.length; i += 1) {
    await page.goto(arrLinkCtsLenovoPad[i]);
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
  
  for (let i = 0; i < arrLinkCtsSamsPad.length; i += 1) {
    await page.goto(arrLinkCtsSamsPad[i]);
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
  for (let i = 0; i < arrLinkSotaXiaomi.length; i += 1) {
    await page.goto(arrLinkSotaXiaomi[i]);
    const n = await page.$("#txt");

    let arr12 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if(document.getElementById("status") != null){
        let idPost=document.getElementById("status").innerHTML;
    }
      if (document.querySelector(".price-new") != null) {
        return text2 + "Sota: " + document.querySelector(".price-new").innerText;
      } else {
        return;
      }
    });

    console.log(arr12);
  }
  for (let i = 0; i < arrLinkTouchXiaomi.length; i += 1) {
    await page.goto(arrLinkTouchXiaomi[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price") != null) {
        return text2 + "Touch: " + document.querySelector(".price").innerText;
      } else {
        return text2;
      }
    });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkIpodRomXiaomi.length; i += 1) {
    await page.goto(arrLinkIpodRomXiaomi[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".product-price__item") != null) {
        return (
          text2 +
          "IpodRom: " +
          document.querySelector(".product-price__item").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkMobilePlanetXiaomi.length; i += 1) {
    await page.goto(arrLinkMobilePlanetXiaomi[i]);
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
}
f()