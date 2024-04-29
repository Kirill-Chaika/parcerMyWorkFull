console.log("Hello world");

const puppeteer = require("puppeteer");

const arrLinkIstoreMac = [
  "https://www.istore.ua/catalog/item/apple-macbook-air-2020-g-256-gb-m1-seryy-kosmos/",
  "https://www.istore.ua/catalog/item/apple-macbook-air-2020-g-512-gb-m1-seryy-kosmos/",
  "https://www.istore.ua/catalog/item/apple-macbook-air-2020-g-256-gb-m1-serebristyy/",
  "https://www.istore.ua/catalog/item/apple-macbook-air-2020-g-512-gb-m1-serebristyy/",
  "https://www.istore.ua/catalog/item/apple-macbook-air-2020-g-256-gb-m1-zolotoy/",
  "https://www.istore.ua/catalog/item/apple-macbook-air-2020-g-512-gb-m1-zolotoy/",

  "https://www.istore.ua/catalog/item/apple-macbook-air-2022-g-256-gb-m2-space-gray/",
  "https://www.istore.ua/catalog/item/apple-macbook-air-2022-g-512-gb-m2-space-gray/",
  "https://www.istore.ua/catalog/item/apple-macbook-air-2022-g-256-gb-m2-silver/",
  "https://www.istore.ua/catalog/item/apple-macbook-air-2022-g-512-gb-m2-silver/",
  "https://www.istore.ua/catalog/item/apple-macbook-air-2022-g-256-gb-m2-gold/",
  "https://www.istore.ua/catalog/item/apple-macbook-air-2022-g-512-gb-m2-starlight/",
  "https://www.istore.ua/catalog/item/apple-macbook-air-2022-g-256-gb-m2-midnight/",
  "https://www.istore.ua/catalog/item/apple-macbook-air-2022-g-512-gb-m2-midnight/",

  "https://www.istore.ua/catalog/item/apple-macbook-pro-14-2-touch-bar-m1-pro-512-gb-ssd-space-gray-2021/",
  "https://www.istore.ua/catalog/item/apple-macbook-pro-14-2-touch-bar-m1-pro-1-tb-ssd-space-gray-2021/",
  "https://www.istore.ua/catalog/item/apple-macbook-pro-14-2-touch-bar-m1-pro-512-gb-ssd-silver-2021/",
  "https://www.istore.ua/catalog/item/apple-macbook-pro-14-2-touch-bar-m1-pro-1-tb-ssd-silver-2021/",

  "https://www.istore.ua/catalog/item/apple-macbook-pro-16-2-touch-bar-m1-pro-512-gb-ssd-space-gray-2021/",
  "https://www.istore.ua/catalog/item/apple-macbook-pro-16-2-touch-bar-m1-pro-1-tb-ssd-space-gray-2021/",
  "https://www.istore.ua/catalog/item/apple-macbook-pro-16-2-touch-bar-m1-pro-max-1-tb-ssd-space-gray-2021/",
  "https://www.istore.ua/catalog/item/apple-macbook-pro-16-2-touch-bar-m1-pro-512-gb-ssd-silver-2021/",
  "https://www.istore.ua/catalog/item/apple-macbook-pro-16-2-touch-bar-m1-pro-1-tb-ssd-silver-2021/",
  "https://www.istore.ua/catalog/item/apple-macbook-pro-16-2-touch-bar-m1-pro-max-1-tb-ssd-silver-2021/",

  "https://www.istore.ua/catalog/item/apple-macbook-pro-13-touch-bar-m1-256-gb-ssd-seryy-kosmos-2020/",
  "https://www.istore.ua/catalog/item/apple-macbook-pro-13-touch-bar-m1-512-gb-ssd-seryy-kosmos-2020/",
  "https://www.istore.ua/catalog/item/apple-macbook-pro-13-touch-bar-m1-256-gb-ssd-serebristyy-2020/",
  "https://www.istore.ua/catalog/item/apple-macbook-pro-13-touch-bar-m1-512-gb-ssd-serebristyy-2020/",
  "https://www.istore.ua/catalog/item/apple-macbook-pro-13-touch-bar-m2-256-gb-ssd-space-gray/",
  "https://www.istore.ua/catalog/item/apple-macbook-pro-13-touch-bar-m2-512-gb-ssd-space-gray/",
  "https://www.istore.ua/catalog/item/apple-macbook-pro-13-touch-bar-m2-256-gb-ssd-silver/",
  "https://www.istore.ua/catalog/item/apple-macbook-pro-13-touch-bar-m2-512-gb-ssd-silver/",

  "https://www.istore.ua/catalog/item/apple-macbook-pro-14-m2-pro-512gb-space-gray-2023/",
  "https://www.istore.ua/catalog/item/apple-macbook-pro-14-m2-pro-1-tb-space-gray-2023/",
  "https://www.istore.ua/catalog/item/apple-macbook-pro-14-m2-max-1-tb-space-gray-2023/",
  "https://www.istore.ua/catalog/item/apple-macbook-pro-14-m2-pro-512gb-silver-2023/",
  "https://www.istore.ua/catalog/item/apple-macbook-pro-14-m2-max-1-tb-silver-2023/",

  "https://www.istore.ua/catalog/item/apple-macbook-pro-16-m2-pro-512-tb-space-gray-2023/",
  "https://www.istore.ua/catalog/item/apple-macbook-pro-16-m2-pro-1-tb-space-gray-2023/",
  "https://www.istore.ua/catalog/item/apple-macbook-pro-16-m2-max-1-tb-space-gray-2023/",
  "https://www.istore.ua/catalog/item/apple-macbook-pro-16-m2-max-1-tb-silver-2023/",
  "https://www.istore.ua/catalog/item/apple-macbook-pro-16-m2-pro-512-tb-silver-2023/",

  "https://www.istore.ua/catalog/item/apple-macbook-air-15-2023-g-256-gb-m2-space-gray/",
  "https://www.istore.ua/catalog/item/apple-macbook-air-15-2023-g-256-gb-m2-silver/",
  "https://www.istore.ua/catalog/item/apple-macbook-air-15-2023-g-256-gb-m2-midnight/",
  "https://www.istore.ua/catalog/item/apple-macbook-air-15-2023-g-256-gb-m2-starlight/",
  "https://www.istore.ua/catalog/item/apple-macbook-air-15-2023-g-512-gb-m2-space-gray/",
  "https://www.istore.ua/catalog/item/apple-macbook-air-15-2023-g-512-gb-m2-silver/",
  "https://www.istore.ua/catalog/item/apple-macbook-air-15-2023-g-512-gb-m2-midnight/",
  "https://www.istore.ua/catalog/item/apple-macbook-air-15-2023-g-512-gb-m2-starlight/"
];
const arrLinkJabkoMac = [
  "https://jabko.ua/rus/mac/macbook-air/macbook-air--2020--with-apple-m1/macbook-air-13-retina--space-gray--256gb--mgn63--2020--apple-m1-",
  "https://jabko.ua/rus/mac/macbook-air/macbook-air--2020--with-apple-m1/macbook-air-13-retina--space-gray--512gb--mgn73--2020--apple-m1-",
  "https://jabko.ua/rus/mac/macbook-air/macbook-air--2020--with-apple-m1/macbook-air-13-retina--silver--256gb--mgn93--2020--apple-m1-",
  "https://jabko.ua/rus/mac/macbook-air/macbook-air--2020--with-apple-m1/macbook-air-13-retina--silver--512gb--mgna3--2020--apple-m1-",
  "https://jabko.ua/rus/mac/macbook-air/macbook-air--2020--with-apple-m1/macbook-air-13-retina--gold--256gb--mgnd3--2020--apple-m1-",
  "https://jabko.ua/rus/mac/macbook-air/macbook-air--2020--with-apple-m1/macbook-air-13-retina--gold--512gb--mgne3--2020--apple-m1-",

  "https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-m2-2022/macbook-air-13-retina--space-gray--256gb-with-apple-m2",
  "https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-m2-2022/macbook-air-13-retina--space-gray--512gb-with-apple-m2",
  "https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-m2-2022/macbook-air-13-retina--silver--256gb-with-apple-m2",
  "https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-m2-2022/macbook-air-13-retina--silver--512gb-with-apple-m2",
  "https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-m2-2022/macbook-air-13-retina--starlight--256gb-with-apple-m2",
  "https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-m2-2022/macbook-air-13-retina--starlight--512gb-with-apple-m2",
  "https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-m2-2022/macbook-air-13-retina--midnight--256gb-with-apple-m2",
  "https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-m2-2022/macbook-air-13-retina--midnight--512gb-with-apple-m2",

  "https://jabko.ua/rus/mac/macbook-pro/apple-macbook-pro-14-inch/apple-macbook-pro-14--512gb--space-gray-with-apple-m1--2021-",
  "https://jabko.ua/rus/mac/macbook-pro/apple-macbook-pro-14-inch/apple-macbook-pro-14--1tb--space-gray-with-apple-m1-pro--2021-",
  "https://jabko.ua/rus/mac/macbook-pro/apple-macbook-pro-14-inch/apple-macbook-pro-14-512gb-silver-apple-m1-pro-mkgr3-2021",
  "https://jabko.ua/rus/mac/macbook-pro/apple-macbook-pro-14-inch/apple-macbook-pro-14--1tb--silver-with-apple-m1-pro--2021-",

  "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-16--2019-/apple-macbook-pro-16-retina--space-gray-mvvj2-2019",
  "https://jabko.ua/rus/mac/macbook-pro/apple-macbook-pro-16--2021-/apple-macbook-pro-16-with-apple-m1-pro--10-cpu--16-gpu--16gb-ram--512gb-ssd--space-gray-",
  "https://jabko.ua/rus/mac/macbook-pro/apple-macbook-pro-16--2021-/apple-macbook-pro-16-with-apple-m1-pro--10-cpu--16-gpu--16gb-ram--1tb-ssd--space-gray-",
  "https://jabko.ua/rus/mac/macbook-pro/apple-macbook-pro-16--2021-/apple-macbook-pro-16-with-apple-m1-max--10-cpu--16-gpu--16gb-ram--1tb-ssd--space-gray-",
  "https://jabko.ua/rus/mac/macbook-pro/apple-macbook-pro-16--2021-/apple-macbook-pro-16-with-apple-m1-pro--10-cpu--16-gpu--16gb-ram--512gb-ssd--silver-",
  "https://jabko.ua/rus/mac/macbook-pro/apple-macbook-pro-16--2021-/apple-macbook-pro-16-with-apple-m1-pro--10-cpu--16-gpu--16gb-ram--1tb-ssd--silver-",
  "https://jabko.ua/rus/mac/macbook-pro/apple-macbook-pro-16--2021-/apple-macbook-pro-16-with-apple-m1-max--10-cpu--32-gpu--32gb-ram--1tb-ssd--silver-",

  "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-13-with-apple-m1/apple-macbook-pro-13-256gb-space-gray-with-apple-m1-myd82-2020",
  "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-13-with-apple-m1/apple-macbook-pro-13-512gb-space-gray-with-apple-m1-myd92-2020",
  "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-13-with-apple-m1/macbook-pro-13--256gb--",
  "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-13-with-apple-m1/macbook-pro-13-3--2020-",

  "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-13-apple-m2/apple-macbook-pro-13--256gb--space-gray-with-apple-m2--2022-",
  "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-13-apple-m2/apple-macbook-pro-13--512gb--space-gray-with-apple-m1--2022-",
  "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-13-apple-m2/apple-macbook-pro-13--256gb--silver-with-apple-m2---2022-",
  "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-13-apple-m2/apple-macbook-pro-13--512gb--silver-with-apple-m1--2022-",

  "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-14-apple-m2/apple-macbook-pro-14-512gb-space-gray-with-apple-m2-2023",
  "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-14-apple-m2/apple-macbook-pro-14--1tb--space-gray-with-apple-m2-pro--2023-",
  "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-14-apple-m2/apple-macbook-pro-14--1tb--space-gray-with-apple-m2-max--2023-",
  "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-14-apple-m2/apple-macbook-pro-14--512gb--silver-with-apple-m2-2023",
  "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-14-apple-m2/apple-macbook-pro-14--1tb--silver-with-apple-m2-max--2023-",

  "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-16-apple-m2/apple-macbook-pro-16--512gb--space-gray-with-apple-m2-2023",
  "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-16-apple-m2/apple-macbook-pro-16-with-apple-m2-pro--12-cpu---19-gpu--16gb-ram--1tb-ssd--space-gray---2023-",
  "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-16-apple-m2/apple-macbook-pro-16-with-apple-m2-max--12-cpu---38-gpu--32gb-ram--1tb-ssd--space-gray---2023-",
  "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-16-apple-m2/apple-macbook-pro-16-with-apple-m2-max--12-cpu---38-gpu--32gb-ram--1tb-ssd--silver---2023-",
  "https://jabko.ua/rus/mac/macbook-pro/macbook-pro-16-apple-m2/apple-macbook-pro-16--512gb--silver-with-apple-m2-2023-",

  "https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-15-2023/macbook-air-15-retina--spacegray--256gb--2023-",
  "https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-15-2023/macbook-air-15-retina--silver--256gb--2023-",
  "https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-15-2023/macbook-air-15-retina--midnight--256gb--2023-",
  "https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-15-2023/macbook-air-15-retina-starlight--256gb-2023-",
  "https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-15-2023/macbook-air-15-retina--spacegray--512gb--2023-",
  "https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-15-2023/macbook-air-15-retina--silver--512gb--2023-",
  "https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-15-2023/macbook-air-15-retina--midnight--512gb--2023-",
  "https://jabko.ua/rus/mac/macbook-air/apple-macbook-air-15-2023/macbook-air-15-retina--starlight--512gb--2023-",






  "https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-midnight-256gb-8-cpu-8-gpu-8gb-ram-apple-m3-mrxv3",
  "https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-space-gray-256gb-8-cpu-8-gpu-8gb-ram-apple-m3-mrxn3",
  "https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-starlight-256gb-8-cpu-8-gpu-8gb-ram-apple-m3-mrxt3",
  "https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-silver-256gb-8-cpu-8-gpu-8gb-ram-apple-m3-mrxq3",

  "https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-midnight-512gb-8-cpu-10-gpu-8gb-ram-apple-m3-mrxw3",
  "https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-space-gray-512gb-8-cpu-10-gpu-8gb-ram-apple-m3-mrxp3",
  "https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-starlight-512gb-8-cpu-10-gpu-8gb-ram-apple-m3-mrxu3",
  "https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-silver-512gb-8-cpu-10-gpu-8gb-ram-apple-m3-mrxr3",

  "https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-midnight-256gb-8-cpu--10-gpu-8gb-ram-with-apple-m3-mryu3",
  "https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-space-gray-256gb-8-cpu--10-gpu-8gb-ram-with-apple-m3-mrym3",
  "https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-starlight-256gb-8-cpu--10-gpu-8gb-ram-with-apple-m3-mryr3",
  "https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-silver-256gb-8-cpu--10-gpu-8gb-ram-with-apple-m3-mryp3",

  "https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-midnight-512gb-8-cpu--10-gpu-8gb-ram-with-apple-m3-mryv3",
  "https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-space-gray-512gb-8-cpu--10-gpu-8gb-ram-with-apple-m3-mryn3",
  "https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-starlight-512gb-8-cpu--10-gpu-8gb-ram-with-apple-m3-mryt3",
  "https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-silver-512gb-8-cpu--10-gpu-8gb-ram-with-apple-m3-mryq3"
];

const arrLinkSkayMacM3 = [
  "https://skay.ua/uk/macbook-pro-2023/67562-apple-macbook-pro-14-m3-ship-8512gb-mtl73-2023-space-gray.html?search_query=MTL73&results=1",
"https://skay.ua/uk/macbook-pro-2023/67563-apple-macbook-pro-14-m3-ship-8512gb-mr7j3-2023-silver.html?search_query=MR7J3&results=1",
"https://skay.ua/uk/macbook-pro-2023/67564-apple-macbook-pro-14-m3-ship-81tb-mtl83-2023-space-gray.html",
"https://skay.ua/uk/macbook-pro-2023/67565-apple-macbook-pro-14-m3-ship-81tb-mr7k3-2023-silver.html",

"https://skay.ua/uk/macbook-pro-2023/67580-apple-macbook-pro-14-m3-pro-ship-18512gb-mrx33-2023-space-black.html",
"https://skay.ua/uk/macbook-pro-2023/67581-apple-macbook-pro-14-m3-pro-ship-18512gb-mrx63-2023-silver.html",
"https://skay.ua/uk/macbook-pro-2023/67698-apple-macbook-pro-14-m3-pro-ship-181tb-mrx43-2023-space-black.html",
"https://skay.ua/uk/macbook-pro-2023/67699-apple-macbook-pro-14-m3-pro-ship-181tb-mrx73-2023-silver.html",

"https://skay.ua/uk/macbook-pro-2023/67700-apple-macbook-pro-14-m3-max-ship-361tb-mrx53-2023-space-black.html",
"https://skay.ua/uk/macbook-pro-2023/67701-apple-macbook-pro-14-m3-max-ship-361tb-mrx83-2023-silver.html",

"https://skay.ua/uk/macbook-pro-2023/67702-apple-macbook-pro-16-m3-pro-ship-18512gb-mrw13-2023-space-black.html",
"https://skay.ua/uk/macbook-pro-2023/67703-apple-macbook-pro-16-m3-pro-ship-18512gb-mrw43-2023-silver.html",

"https://skay.ua/uk/macbook-pro-2023/67704-apple-macbook-pro-16-m3-pro-ship-36512gb-mrw23-2023-space-black.html",
"https://skay.ua/uk/macbook-pro-2023/67705-apple-macbook-pro-16-m3-pro-ship-36512gb-mrw63-2023-silver.html",

"https://skay.ua/uk/macbook-pro-2023/67746-apple-macbook-pro-16-m3-max-ship-361tb-mrw33-2023-space-black.html",
"https://skay.ua/uk/macbook-pro-2023/67747-apple-macbook-pro-16-m3-max-ship-361tb-mrw73-2023-silver.html",
"https://skay.ua/uk/macbook-pro-2023/67750-apple-macbook-pro-16-m3-max-ship-481tb-muw63-2023-space-black.html",
"https://skay.ua/uk/macbook-pro-2023/67751-apple-macbook-pro-16-m3-max-ship-481tb-muw73-2023-silver.html",
];
const arrLinkMobilePlanetMacM3 = [
  'https://mobileplanet.ua/apple-macbook-pro-14-space-gray-late-2023-mtl73-293850',
'https://mobileplanet.ua/apple-macbook-pro-14-silver-late-2023-mr7j3-293842',
'https://mobileplanet.ua/apple-macbook-pro-14-space-gray-late-2023-mtl83-293851',
'https://mobileplanet.ua/apple-macbook-pro-14-silver-late-2023-mr7k3-293843',

'https://mobileplanet.ua/apple-macbook-pro-14-space-black-late-2023-mrx33-293847',
'https://mobileplanet.ua/apple-macbook-pro-14-silver-late-2023-mrx63-293844',
'https://mobileplanet.ua/apple-macbook-pro-14-space-black-late-2023-mrx43-293848',
'https://mobileplanet.ua/apple-macbook-pro-14-silver-late-2023-mrx73-293845',

'https://mobileplanet.ua/apple-macbook-pro-14-space-black-late-2023-mrx53-293849',
'https://mobileplanet.ua/apple-macbook-pro-14-silver-late-2023-mrx83-293846',


'https://mobileplanet.ua/apple-macbook-pro-16-space-black-late-2023-mrw13-293856',
'https://mobileplanet.ua/apple-macbook-pro-16-silver-late-2023-mrw43-293852',

'https://mobileplanet.ua/apple-macbook-pro-16-space-black-late-2023-mrw23-293857',
'https://mobileplanet.ua/apple-macbook-pro-16-silver-late-2023-mrw63-293853',

'https://mobileplanet.ua/apple-macbook-pro-16-space-black-late-2023-mrw33-293858',
'https://mobileplanet.ua/apple-macbook-pro-16-silver-late-2023-mrw73-293854',
'https://mobileplanet.ua/apple-macbook-pro-16-space-black-late-2023-muw63-293859',
'https://mobileplanet.ua/apple-macbook-pro-16-silver-late-2023-muw73-293855',



"https://mobileplanet.ua/apple-macbook-air-13-6-m3-8-256gb-midnight-2024-mr-308332",
"https://mobileplanet.ua/apple-macbook-air-13-6-m3-8-256gb-space-gray-2024-308355",
"https://mobileplanet.ua/apple-macbook-air-13-6-m3-8-256gb-starlight-2024-m-308367",
"https://mobileplanet.ua/apple-macbook-air-13-6-m3-8-256gb-silver-2024-mrxq-308343",

"https://mobileplanet.ua/apple-macbook-air-13-6-m3-8-512gb-midnight-2024-mr-308333",
"https://mobileplanet.ua/apple-macbook-air-13-6-m3-8-512gb-space-gray-2024-308356",
"https://mobileplanet.ua/apple-macbook-air-13-6-m3-8-512gb-starlight-2024-m-308368",
"https://mobileplanet.ua/apple-macbook-air-13-6-m3-8-512gb-silver-2024-mrxr-308344",


"https://mobileplanet.ua/apple-macbook-air-15-m3-8-256gb-midnight-2024-mryu-308379",
"https://mobileplanet.ua/apple-macbook-air-15-m3-8-256gb-space-gray-2024-mr-308403",
"https://mobileplanet.ua/apple-macbook-air-15-m3-8-256gb-starlight-2024-mry-308415",
"https://mobileplanet.ua/apple-macbook-air-15-m3-8-256gb-silver-2024-mryp3-308391",

"https://mobileplanet.ua/apple-macbook-air-15-m3-8-512gb-midnight-2024-mryv-308380",
"https://mobileplanet.ua/apple-macbook-air-15-m3-8-512gb-space-gray-2024-mr-308404",
"https://mobileplanet.ua/apple-macbook-air-15-m3-8-512gb-starlight-2024-mry-308416",
"https://mobileplanet.ua/apple-macbook-air-15-m3-8-512gb-silver-2024-mryq3-308392"
];

const arrLinkIstoreMacM3 = [
  'https://www.istore.ua/ua/item/macbook-pro-14-apple-m3-512-gb-space-gray-2023/',
'https://www.istore.ua/ua/item/macbook-pro-14-apple-m3-512-gb-silver-2023/',
'https://www.istore.ua/ua/item/macbook-pro-14-apple-m3-1tb-space-gray-2023/',
'https://www.istore.ua/ua/item/macbook-pro-14-apple-m3-1tb-silver-2023/',

'https://www.istore.ua/ua/item/macbook-pro-14-apple-m3-pro-512-gb-space-black-2023/',
'https://www.istore.ua/ua/item/macbook-pro-14-apple-m3-pro-512-gb-silver-2023/',
'https://www.istore.ua/ua/item/macbook-pro-14-apple-m3-pro-1-tb-space-black-2023/',
'https://www.istore.ua/ua/item/macbook-pro-14-apple-m3-pro-1-tb-silver-2023/',

'https://www.istore.ua/ua/item/macbook-pro-14-apple-m3-max-1-tb-space-black-2023/',
'https://www.istore.ua/ua/item/macbook-pro-14-apple-m3-max-1-tb-silver-2023/',


'https://www.istore.ua/ua/item/macbook-pro-16-apple-m3-pro-512-gb-space-black-2023/',
'https://www.istore.ua/ua/item/macbook-pro-16-apple-m3-pro-18gb-512gb-silver-2023/',

'https://www.istore.ua/ua/item/macbook-pro-16-apple-m3-pro-32gb-512-gb-space-black-2023/',
'https://www.istore.ua/ua/item/macbook-pro-16-apple-m3-pro-32gb-512-gb-silver-2023/',

'https://www.istore.ua/ua/item/macbook-pro-16-apple-m3-max-36gb-1tb-space-black-2023/',
'https://www.istore.ua/ua/item/macbook-pro-16-apple-m3-max-36gb-1tb-silver-2023/',
'https://www.istore.ua/ua/item/macbook-pro-16-apple-m3-max-48gb-1tb-space-black-2023/',
'https://www.istore.ua/ua/item/macbook-pro-16-apple-m3-max-48gb-1tb-silver-2023/',




"https://www.istore.ua/ua/item/apple-macbook-air-13-8gb-256gb-m3-midnight/",
"https://www.istore.ua/ua/item/apple-macbook-air-13-m3-8gb-256gb-space-gray/",
"https://www.istore.ua/ua/item/apple-macbook-air-13-m3-8gb-256gb-starlight/",
"https://www.istore.ua/ua/item/apple-macbook-air-13-m3-8gb-256gb-silver/",

"https://www.istore.ua/ua/item/apple-macbook-air-13-8gb-512gb-m3-midnight/",
"https://www.istore.ua/ua/item/apple-macbook-air-13-m3-8gb-512gb-space-gray/",
"https://www.istore.ua/ua/item/apple-macbook-air-13-m3-8gb-512gb-starlight/",
"https://www.istore.ua/ua/item/apple-macbook-air-13-m3-8gb-512gb-silver/",


"https://www.istore.ua/ua/item/apple-macbook-air-15-m3-8gb-256gb-midnight/",
"https://www.istore.ua/ua/item/apple-macbook-air-15-m3-8gb-256gb-space-gray/",
"https://www.istore.ua/ua/item/apple-macbook-air-15-m3-8gb-256gb-starlight/",
"https://www.istore.ua/ua/item/apple-macbook-air-15-m3-8gb-256gb-silver/",

"https://www.istore.ua/ua/item/apple-macbook-air-15-m3-8gb-512gb-midnight/",
"https://www.istore.ua/ua/item/apple-macbook-air-15-m3-8gb-512gb-space-gray/",
"https://www.istore.ua/ua/item/apple-macbook-air-15-m3-8gb-512gb-starlight/",
"https://www.istore.ua/ua/item/apple-macbook-air-15-m3-8gb-512gb-silver/"
];
const arrLinkGroMacM3 = [
  'https://grokholsky.com/product/apple/mac/macbook/noutbuk-apple-macbook-pro-14-space-gray-late-2023-mtl73/',
'https://grokholsky.com/product/apple/mac/macbook/noutbuk-apple-macbook-pro-14-silver-late-2023-mr7j3/',
'https://grokholsky.com/product/apple/mac/macbook/noutbuk-apple-macbook-pro-14-space-gray-late-2023-mtl83/',
'https://grokholsky.com/product/apple/mac/macbook/noutbuk-apple-macbook-pro-14-silver-late-2023-mr7k3/',

'https://grokholsky.com/product/apple/mac/macbook/noutbuk-apple-macbook-pro-14-space-black-late-2023-mrx33/',
'https://grokholsky.com/product/apple/mac/macbook/noutbuk-apple-macbook-pro-14-silver-late-2023-mrx63/',
'https://grokholsky.com/product/apple/mac/macbook/noutbuk-apple-macbook-pro-14-space-black-late-2023-mrx43/',
'https://grokholsky.com/product/apple/mac/macbook/noutbuk-apple-macbook-pro-14-silver-late-2023-mrx73/',

'https://grokholsky.com/product/apple/mac/macbook/noutbuk-apple-macbook-pro-14-space-black-late-2023-mrx53/',
'https://grokholsky.com/product/apple/mac/macbook/noutbuk-apple-macbook-pro-14-silver-late-2023-mrx83/',


'https://grokholsky.com/product/apple/mac/macbook/noutbuk-apple-macbook-pro-16-space-black-late-2023-mrw13/',
'https://grokholsky.com/product/apple/mac/macbook/noutbuk-apple-macbook-pro-16-silver-late-2023-mrw43/',

'https://grokholsky.com/product/apple/mac/macbook/noutbuk-apple-macbook-pro-16-space-black-late-2023-mrw23/',
'https://grokholsky.com/product/apple/mac/macbook/noutbuk-apple-macbook-pro-16-silver-late-2023-mrw63/',

'https://grokholsky.com/product/apple/mac/macbook/noutbuk-apple-macbook-pro-16-space-black-late-2023-mrw33/',
'https://grokholsky.com/product/apple/mac/macbook/noutbuk-apple-macbook-pro-16-silver-late-2023-mrw73/',
'https://grokholsky.com/product/apple/mac/macbook/noutbuk-apple-macbook-pro-16-space-black-late-2023-muw63/',
'https://grokholsky.com/product/apple/mac/macbook/noutbuk-apple-macbook-pro-16-silver-late-2023-muw73/',


"https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-136-m3-2024/macbook-air-136-m3-2024-midnight-mrxv3/",
"https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-136-m3-2024/macbook-air-136-m3-2024-space-gray-mrxn3/",
"https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-136-m3-2024/macbook-air-136-m3-2024-starlight-mrxt3/",
"https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-136-m3-2024/macbook-air-136-m3-2024-silver-mrxq3/",

"https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-136-m3-2024/macbook-air-136-m3-2024-midnight-mrxw3/",
"https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-136-m3-2024/macbook-air-136-m3-2024-space-gray-mrxp3/",
"https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-136-m3-2024/macbook-air-136-m3-2024-starlight-mrxu3/",
"https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-136-m3-2024/macbook-air-136-m3-2024-silver-mrxr3/",


"https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-15-m3-2024/macbook-air-15-m3-2024-midnight-mryu3/",
"https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-15-m3-2024/macbook-air-15-m3-2024-space-gray-mrym3/",
"https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-15-m3-2024/macbook-air-15-m3-2024-starlight-mryr3/",
"https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-15-m3-2024/macbook-air-15-m3-2024-silver-mryp3/",

"https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-15-m3-2024/macbook-air-15-m3-2024-midnight-mryv3/",
"https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-15-m3-2024/macbook-air-15-m3-2024-space-gray-mryn3/",
"https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-15-m3-2024/macbook-air-15-m3-2024-starlight-mryt3/",
"https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-15-m3-2024/macbook-air-15-m3-2024-silver-mryq3/"
];




async function f() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  for (let i = 0; i < arrLinkIstoreMac.length; i += 1) {
    await page.goto(arrLinkIstoreMac[i]);
    const n = await page.$("#txt");

    let arr4 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".product_price ") != null) {
        return (
          text2 + "I: " + document.querySelector(".product_price ").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr4);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkJabkoMac.length; i += 1) {
    await page.goto(arrLinkJabkoMac[i]);
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

  
  for (let i = 0; i < arrLinkSkayMacM3.length; i += 1) {
    await page.goto(arrLinkSkayMacM3[i]);
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
  for (let i = 0; i < arrLinkMobilePlanetMacM3.length; i += 1) {
    await page.goto(arrLinkMobilePlanetMacM3[i]);
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
  for (let i = 0; i < arrLinkIstoreMacM3.length; i += 1) {
    await page.goto(arrLinkIstoreMacM3[i]);
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
    for (let i = 0; i < arrLinkGroMacM3.length; i += 1) {
    await page.goto(arrLinkGroMacM3[i]);
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
