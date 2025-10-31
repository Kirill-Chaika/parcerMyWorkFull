console.log("Hello world");

const puppeteer = require("puppeteer");


const arrLinkMobilePlanetMac = [
  'https://mobileplanet.ua/apple-macbook-air-13-space-gray-mgn63-20-193343',
  'https://mobileplanet.ua/apple-macbook-air-13-space-gray-mgn73-20-193345',
  'https://mobileplanet.ua/apple-macbook-air-13-silver-mgn93-2020-193342',
  'https://mobileplanet.ua/apple-macbook-air-13-silver-mgna3-2020-193344',
  'https://mobileplanet.ua/apple-macbook-air-13-gold-mgnd3-2020-193341',
  
  'https://mobileplanet.ua/apple-macbook-air-13-6-m2-space-gray-mlx-253143',
  'https://mobileplanet.ua/apple-macbook-air-13-6-m2-space-gray-mlx-253327',
  'https://mobileplanet.ua/apple-macbook-air-13-6-m2-silver-mlxy3-2-253326',
  'https://mobileplanet.ua/apple-macbook-air-13-6-m2-silver-mly03-2-253142',
  'https://mobileplanet.ua/apple-macbook-air-13-6-m2-starlight-mly1-253144',
  'https://mobileplanet.ua/apple-macbook-air-13-6-m2-starlight-mly2-253328',
  'https://mobileplanet.ua/apple-macbook-air-13-6-m2-midnight-mly33-253140',
  'https://mobileplanet.ua/apple-macbook-air-13-6-m2-midnight-mly43-253141',

  'https://mobileplanet.ua/apple-macbook-pro-14-space-gray-2021-mkgp3-237453',
  'https://mobileplanet.ua/apple-macbook-pro-14-space-gray-2021-mkgq3-237454',
  'https://mobileplanet.ua/apple-macbook-pro-14-silver-mkgr3-2021-238146',
  'https://mobileplanet.ua/apple-macbook-pro-14-silver-mkgt3-2021-238139',

  'https://mobileplanet.ua/Apple-MacBook-Pro-16-Space-Gray-MVVJ2-20-142026',

  'https://mobileplanet.ua/apple-macbook-pro-16-space-gray-2021-mk183-237455',
  'https://mobileplanet.ua/apple-macbook-pro-16-space-gray-mk193-2021-238000',
  'https://mobileplanet.ua/apple-macbook-pro-16-space-gray-mk1a3-2021-238001',
  'https://mobileplanet.ua/apple-macbook-pro-16-silver-mk1e3-2021-237970',
  'https://mobileplanet.ua/apple-macbook-pro-16-silver-mk1f3-2021-237971',
  'https://mobileplanet.ua/apple-macbook-pro-16-silver-mk1h3-2021-237972',

  'https://mobileplanet.ua/apple-macbook-pro-13-space-gray-myd82-20-190626',
  'https://mobileplanet.ua/apple-macbook-pro-13-m1-space-gray-myd92-190757',
  'https://mobileplanet.ua/apple-macbook-pro-13-silver-myda2-2020-190627',
  'https://mobileplanet.ua/apple-macbook-pro-13-m1-silver-mydc2-202-190758',

  'https://mobileplanet.ua/apple-macbook-pro-13-m2-space-gray-mneh3-252071',
  'https://mobileplanet.ua/apple-macbook-pro-13-m2-space-gray-mnej3-252073',
  'https://mobileplanet.ua/apple-macbook-pro-13-m2-silver-mnep3-252072',
  'https://mobileplanet.ua/apple-macbook-pro-13-m2-silver-mneq3-252074',
  'https://mobileplanet.ua/apple-macbook-pro-14-space-gray-2023-mphe3-265267',
  'https://mobileplanet.ua/apple-macbook-pro-14-space-gray-2023-mphf3-265268',
  'https://mobileplanet.ua/apple-macbook-pro-14-space-gray-2023-mphg3-265269',
  'https://mobileplanet.ua/apple-macbook-pro-14-silver-2023-mphh3-265264',
  'https://mobileplanet.ua/apple-macbook-pro-14-silver-2023-mphk3-265266',

  'https://mobileplanet.ua/apple-macbook-pro-16-space-gray-2023-mnw83-265273',
  'https://mobileplanet.ua/apple-macbook-pro-16-space-gray-2023-mnw93-265274',
  'https://mobileplanet.ua/apple-macbook-pro-16-space-gray-2023-mnwa3-265275',
  'https://mobileplanet.ua/apple-macbook-pro-16-silver-2023-mnwe3-265272',
  'https://mobileplanet.ua/apple-macbook-pro-16-silver-2023-mnwc3-265270',

  'https://mobileplanet.ua/apple-macbook-air-15-m2-space-gray-2023-mqkp3-273143',
  'https://mobileplanet.ua/apple-macbook-air-15-m2-silver-2023-mqkr3-273141',
  'https://mobileplanet.ua/apple-macbook-air-15-m2-midnight-2023-mqkw3-273139',
  'https://mobileplanet.ua/apple-macbook-air-15-m2-starlight-2023-mqku3-273145',
  'https://mobileplanet.ua/apple-macbook-air-15-m2-space-gray-2023-mqkq3-273144',
  'https://mobileplanet.ua/apple-macbook-air-15-m2-silver-2023-mqkt3-273142',
  'https://mobileplanet.ua/apple-macbook-air-15-m2-midnight-2023-mqkx3-273140',
  'https://mobileplanet.ua/apple-macbook-air-15-m2-starlight-2023-mqkv3-273146'
];


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
  "https://www.istore.ua/catalog/item/apple-macbook-air-15-2023-g-512-gb-m2-starlight/",
  "https://www.istore.ua/ua/item/apple-macbook-air-13-16gb-512gb-m3-midnight/",
  "https://www.istore.ua/ua/item/apple-macbook-air-13-m3-16gb-512gb-space-gray/",
  "https://www.istore.ua/ua/item/apple-macbook-air-13-m3-16gb-512gb-starlight/",
  "https://www.istore.ua/ua/item/apple-macbook-air-13-m3-16gb-512gb-silver/",

  "https://www.istore.ua/ua/item/apple-macbook-air-15-m3-16gb-512gb-midnight/",
  "https://www.istore.ua/ua/item/apple-macbook-air-15-m3-16gb-512gb-space-gray/",
  "https://www.istore.ua/ua/item/apple-macbook-air-15-m3-16gb-512gb-starlight/",
  "https://www.istore.ua/ua/item/apple-macbook-air-15-m3-16gb-512gb-silver/",

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
  "https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-silver-512gb-8-cpu--10-gpu-8gb-ram-with-apple-m3-mryq3",


  "https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m3/apple-macbook-pro-14-apple-m3-512gb-8-cpu-10-gpu-8gb-ram-space-gray-2023-mtl73",
  "https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m3/apple-macbook-pro-14-apple-m3-512gb-8-cpu-10-gpu-8gb-ram-silver-2023-mr7j3",
  "https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m3/apple-macbook-pro-14-apple-m3-1tb-8-cpu-10-gpu-8gb-ram-space-gray-2023-mtl83",
  "https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m3/apple-macbook-pro-14-apple-m3-1tb-8-cpu-10-gpu-8gb-ram-silver-2023-mr7k3",

  "https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m3/apple-macbook-pro-14-apple-m3-pro-512gb-11-cpu-14-gpu-18gb-ram-space-black-2023-mrx33",
  "https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m3/apple-macbook-pro-14-apple-m3-pro-512gb-11-cpu-14-gpu-18gb-ram-silver-2023-mrx63",
  "https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m3/apple-macbook-pro-14-apple-m3-pro-1tb-12-cpu-18-gpu-18gb-ram-space-black-2023-mrx43",
  "https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m3/apple-macbook-pro-14-apple-m3-pro-1tb-12-cpu-18-gpu-18gb-ram-silver-2023-mrx73",

  "https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m3/apple-macbook-pro-14-apple-m3-max-1tb-14-cpu-30-gpu-36gb-ram-space-black-2023-mrx53",
  "https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m3/apple-macbook-pro-14-apple-m3-max-1tb-14-cpu-30-gpu-36gb-ram-silver-2023-mrx83",

  "https://jabko.ua/mac/macbook-pro/macbook-pro-16-apple-m3/apple-macbook-pro-16-apple-m3-pro-512gb-12-cpu-18-gpu-18gb-ram-space-black-2023-mrw13",
  "https://jabko.ua/mac/macbook-pro/macbook-pro-16-apple-m3/apple-macbook-pro-16-apple-m3-pro-512gb-12-cpu-18-gpu-18gb-ram-silver-2023-mrw43",
  "https://jabko.ua/mac/macbook-pro/macbook-pro-16-apple-m3/apple-macbook-pro-16-apple-m3-pro-512gb-12-cpu-18-gpu-36gb-ram-space-black-2023-mrw23",
  "https://jabko.ua/mac/macbook-pro/macbook-pro-16-apple-m3/apple-macbook-pro-16-apple-m3-pro-512gb-12-cpu-18-gpu-36gb-ram-silver-2023-mrw63",

  "https://jabko.ua/mac/macbook-pro/macbook-pro-16-apple-m3/apple-macbook-pro-16-apple-m3-max-1tb-14-cpu-30-gpu-36gb-ram-space-black-2023-mrw33",
  "https://jabko.ua/mac/macbook-pro/macbook-pro-16-apple-m3/apple-macbook-pro-16-apple-m3-max-1tb-14-cpu-30-gpu-36gb-ram-silver-2023-mrw73",
  "https://jabko.ua/mac/macbook-pro/macbook-pro-16-apple-m3/apple-macbook-pro-16-apple-m3-max-1tb-16-cpu-40-gpu-48gb-ram-space-black-2023-muw63",
  "https://jabko.ua/mac/macbook-pro/macbook-pro-16-apple-m3/apple-macbook-pro-16-apple-m3-max-1tb-16-cpu-40-gpu-48gb-ram-silver-2023-muw73",
  "https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-midnight-512gb-8-cpu-10-gpu-16gb-ram-apple-m3-mxcv3",
  "https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-space-gray-512gb-8-cpu-10-gpu-16gb-ram-apple-m3-mxcr3",
  "https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-starlight-512gb-8-cpu-10-gpu-16gb-ram-apple-m3-mxcu3",
  "https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-silver-512gb-8-cpu-10-gpu-16gb-ram-apple-m3-mxct3",

  "https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-midnight-512gb-8-cpu--10-gpu-16gb-ram-with-apple-m3-mxd43",
  "https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-space-gray-512gb-8-cpu--10-gpu-16gb-ram-with-apple-m3-mxd13",
  "https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-starlight-512gb-8-cpu--10-gpu-16gb-ram-with-apple-m3-mxd33",
  "https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-silver-512gb-8-cpu--10-gpu-16gb-ram-with-apple-m3-mxd23",
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
  "https://mobileplanet.ua/apple-macbook-air-15-m3-8-512gb-silver-2024-mryq3-308392",
  "https://mobileplanet.ua/ua/apple-macbook-air-13-6-m3-16-512gb-midni-308334",
  "https://mobileplanet.ua/ua/apple-macbook-air-13-6-m3-16-512gb-space-308357",
  "https://mobileplanet.ua/ua/apple-macbook-air-13-6-m3-16-512gb-starl-308369",
  "https://mobileplanet.ua/ua/apple-macbook-air-13-6-m3-16-512gb-silve-308345",

  "https://mobileplanet.ua/ua/apple-macbook-air-15-m3-16-512gb-midnigh-308381",
  "https://mobileplanet.ua/ua/apple-macbook-air-15-m3-16-512gb-space-g-308405",
  "https://mobileplanet.ua/ua/apple-macbook-air-15-m3-16-512gb-starlig-308417",
  "https://mobileplanet.ua/ua/apple-macbook-air-15-m3-16-512gb-silver-308393",
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
  "https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-15-m3-2024/macbook-air-15-m3-2024-silver-mryq3/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-136-m3-2024/macbook-air-136-m3-2024-midnight-mxcv3/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-136-m3-2024/macbook-air-136-m3-2024-space-gray-mxcr3/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-136-m3-2024/macbook-air-136-m3-2024-starlight-mxcu3/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-136-m3-2024/macbook-air-136-m3-2024-silver-mxct3/",

  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m3-2024/macbook-air-15-m3-2024-midnight-mxd43/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m3-2024/macbook-air-15-m3-2024-space-gray-mxd13/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m3-2024/macbook-air-15-m3-2024-starlight-mxd33/",
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m3-2024/macbook-air-15-m3-2024-silver-mxd23/",
];

const arrLinkJabkoMacM4 = [
  "https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m4/apple-macbook-pro-14-with-apple-m4-512gb-10cpu--10gpu-16gb-ram-space-black-2024",
"https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m4/apple-macbook-pro-14-with-apple-m4-512gb-10cpu--10gpu-16gb-ram-silver-2024",

"https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m4/apple-macbook-pro-14-with-apple-m4-1tb-10cpu--10gpu-16gb-ram-space-black-2024",
"https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m4/apple-macbook-pro-14-with-apple-m4-1tb-10cpu--10gpu-16gb-ram-silver-2024",

"https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m4/apple-macbook-pro-14-with-apple-m4-1tb-10cpu--10gpu-24gb-ram-space-black-2024",
"https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m4/apple-macbook-pro-14-with-apple-m4-1tb-10cpu--10gpu-24gb-ram-silver-2024",



"https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m4/apple-macbook-pro-14-with-apple-m4-pro-512gb-12cpu--16gpu-24gb-ram-space-black-2024",
"https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m4/apple-macbook-pro-14-with-apple-m4-pro-512gb-12cpu--16gpu-24gb-ram-silver-2024",

"https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m4/apple-macbook-pro-14-with-apple-m4-pro-1tb-14cpu--20gpu-24gb-ram-space-black-2024",
"https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m4/apple-macbook-pro-14-with-apple-m4-pro-1tb-14cpu--20gpu-24gb-ram-silver-2024",

"https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m4/apple-macbook-pro-14-with-apple-m4-max-1tb-14cpu--32gpu-36gb-ram-space-black-2024",
"https://jabko.ua/mac/macbook-pro/macbook-pro-14-apple-m4/apple-macbook-pro-14-with-apple-m4-max-1tb-14cpu--32gpu-36gb-ram-silver-2024", 



"https://jabko.ua/mac/macbook-pro/macbook-pro-16-apple-m4/apple-macbook-pro-16-with-apple-m4-pro-512gb-14cpu--20gpu-24gb-ram-space-black-2024",
"https://jabko.ua/mac/macbook-pro/macbook-pro-16-apple-m4/apple-macbook-pro-16-with-apple-m4-pro-512gb-14cpu--20gpu-24gb-ram-silver-2024",

"https://jabko.ua/mac/macbook-pro/macbook-pro-16-apple-m4/apple-macbook-pro-16-with-apple-m4-pro-512gb-14cpu--20gpu-48gb-ram-space-black-2024",
"https://jabko.ua/mac/macbook-pro/macbook-pro-16-apple-m4/apple-macbook-pro-16-with-apple-m4-pro-512gb-14cpu--20gpu-48gb-ram-silver-2024", 

"https://jabko.ua/mac/macbook-pro/macbook-pro-16-apple-m4/apple-macbook-pro-16-with-apple-m4-max-1tb-14cpu--32gpu-36gb-ram-space-black-2024",
"https://jabko.ua/mac/macbook-pro/macbook-pro-16-apple-m4/apple-macbook-pro-16-with-apple-m4-max-1tb-14cpu--32gpu-36gb-ram-silver-2024",

"https://jabko.ua/mac/macbook-pro/macbook-pro-16-apple-m4/apple-macbook-pro-16-with-apple-m4-max-1tb-16cpu--40gpu-48gb-ram-space-black-2024",
"https://jabko.ua/mac/macbook-pro/macbook-pro-16-apple-m4/apple-macbook-pro-16-with-apple-m4-max-1tb-16cpu--40gpu-48gb-ram-silver-2024", 
];
const arrLinkIStoreMacM4 = [
  "https://www.istore.ua/ua/item/macbook-pro-m4-14-16-512gb-space-black-2024/",
"https://www.istore.ua/ua/item/macbook-pro-m4-14-16-512gb-silver-2024/",

"https://www.istore.ua/ua/item/macbook-pro-m4-14-16-1tb-space-black-2024/",
"https://www.istore.ua/ua/item/macbook-pro-m4-14-16-1tb-silver-2024/",

"https://www.istore.ua/ua/item/macbook-pro-m4-14-24-1tb-space-black-2024/",
"https://www.istore.ua/ua/item/macbook-pro-m4-14-24-1tb-silver-2024/",



"https://www.istore.ua/ua/item/macbook-pro-m4-pro-14-24-512gb-space-black-2024/",
"https://www.istore.ua/ua/item/macbook-pro-m4-pro-14-24-512gb-silver-2024/",

"https://www.istore.ua/ua/item/macbook-pro-m4-pro-14-24-1tb-space-black-2024/",
"https://www.istore.ua/ua/item/macbook-pro-m4-pro-14-24-1tb-silver-2024/",

"https://www.istore.ua/ua/item/macbook-pro-m4-max-14-36-1tb-space-black-2024/",
"https://www.istore.ua/ua/item/macbook-pro-m4-max-14-36-1tb-silver-2024/", 



"https://www.istore.ua/ua/item/macbook-pro-m4-pro-16-24-512gb-space-black-2024/",
"https://www.istore.ua/ua/item/macbook-pro-m4-pro-16-24-512gb-silver-2024/",

"https://www.istore.ua/ua/item/macbook-pro-m4-pro-16-48-512gb-space-black-2024/",
"https://www.istore.ua/ua/item/macbook-pro-m4-pro-16-48-512gb-silver-2024/", 

"https://www.istore.ua/ua/item/macbook-pro-m4-max-16-36-1tb-space-black-2024/",
"https://www.istore.ua/ua/item/macbook-pro-m4-max-16-36-1tb-silver-2024/",

"https://www.istore.ua/ua/item/macbook-pro-m4-max-16-48-1tb-space-black-2024/",
"https://www.istore.ua/ua/item/macbook-pro-m4-max-16-48-1tb-silver-2024/", 
];
const arrLinkMobilePlanetMacM4 = [
  "https://mobileplanet.ua/apple-macbook-pro-14-m4-16-512gb-space-black-late-328647",
"https://mobileplanet.ua/apple-macbook-pro-14-m4-16-512gb-silver-late-2024-328641",

"https://mobileplanet.ua/apple-macbook-pro-14-m4-16-1tb-space-black-late-20-328648",

"https://mobileplanet.ua/apple-macbook-pro-14-m4-24-1tb-space-black-late-20-328646",
"https://mobileplanet.ua/apple-macbook-pro-14-m4-24-1tb-silver-late-2024-mc-328640",



"https://mobileplanet.ua/apple-macbook-pro-14-m4-24-512gb-space-black-late-328649",
"https://mobileplanet.ua/apple-macbook-pro-14-m4-24-512gb-silver-late-2024-328643",

"https://mobileplanet.ua/apple-macbook-pro-14-m4-24-1tb-space-black-late-20-328650",
"https://mobileplanet.ua/apple-macbook-pro-14-m4-24-1tb-silver-late-2024-mx-328644",

"https://mobileplanet.ua/apple-macbook-pro-14-m4-36-1tb-space-black-late-20-328651",
"https://mobileplanet.ua/apple-macbook-pro-14-m4-36-1tb-silver-late-2024-mx-328645", 



"https://mobileplanet.ua/apple-macbook-pro-16-m4-24-512gb-space-black-late-328656",
"https://mobileplanet.ua/apple-macbook-pro-16-m4-24-512gb-silver-late-2024-328652",

"https://mobileplanet.ua/apple-macbook-pro-16-m4-48-512gb-space-black-late-328657",
"https://mobileplanet.ua/apple-macbook-pro-16-m4-48-512gb-silver-late-2024-328653", 

"https://mobileplanet.ua/apple-macbook-pro-16-m4-36-1tb-space-black-late-20-328658",
"https://mobileplanet.ua/apple-macbook-pro-16-m4-36-1tb-silver-late-2024-mx-328654",

"https://mobileplanet.ua/apple-macbook-pro-16-m4-48-1tb-space-black-late-20-328659",
"https://mobileplanet.ua/apple-macbook-pro-16-m4-48-1tb-silver-late-2024-mx-328655", 
];
const arrLinkGroMacM4 = [
  "https://grokholsky.com/product/apple/mac/macbook/macbook-pro-14-m4-late-2024/noutbuk-apple-macbook-pro-14-late-2024-space-black-mw2u3/",
"https://grokholsky.com/product/apple/mac/macbook/macbook-pro-14-m4-late-2024/noutbuk-apple-macbook-pro-14-late-2024-silver-mw2w3/",

"https://grokholsky.com/product/apple/mac/macbook/macbook-pro-14-m4-late-2024/noutbuk-apple-macbook-pro-14-late-2024-space-black-mw2v3/",
"https://grokholsky.com/product/apple/mac/macbook/macbook-pro-14-m4-late-2024/noutbuk-apple-macbook-pro-14-late-2024-silver-mw2x3/",

"https://grokholsky.com/product/apple/mac/macbook/macbook-pro-14-m4-late-2024/noutbuk-apple-macbook-pro-14-late-2024-space-black-mcx04/",
"https://grokholsky.com/product/apple/mac/macbook/macbook-pro-14-m4-late-2024/noutbuk-apple-macbook-pro-14-late-2024-silver-mcx14/",



"https://grokholsky.com/ua/product/apple/mac/macbook/macbook-pro-14-m4-late-2024/noutbuk-apple-macbook-pro-14-late-2024-space-black-mx2h3/",
"https://grokholsky.com/ua/product/apple/mac/macbook/macbook-pro-14-m4-late-2024/noutbuk-apple-macbook-pro-14-late-2024-silver-mx2e3/",

"https://grokholsky.com/ua/product/apple/mac/macbook/macbook-pro-14-m4-late-2024/noutbuk-apple-macbook-pro-14-late-2024-space-black-mx2j3/",
"https://grokholsky.com/ua/product/apple/mac/macbook/macbook-pro-14-m4-late-2024/noutbuk-apple-macbook-pro-14-late-2024-silver-mx2f3/",

"https://grokholsky.com/ua/product/apple/mac/macbook/macbook-pro-14-m4-late-2024/noutbuk-apple-macbook-pro-14-late-2024-space-black-mx2k3/",
"https://grokholsky.com/ua/product/apple/mac/macbook/macbook-pro-14-m4-late-2024/noutbuk-apple-macbook-pro-14-late-2024-silver-mx2g3/", 



"https://grokholsky.com/ua/product/apple/mac/macbook/macbook-pro-16-m4-late-2024/noutbuk-apple-macbook-pro-16-late-2024-space-black-mx2x3/",
"https://grokholsky.com/ua/product/apple/mac/macbook/macbook-pro-16-m4-late-2024/noutbuk-apple-macbook-pro-16-late-2024-silver-mx2t3/",

"https://grokholsky.com/ua/product/apple/mac/macbook/macbook-pro-16-m4-late-2024/noutbuk-apple-macbook-pro-16-late-2024-space-black-mx2y3/",
"https://grokholsky.com/ua/product/apple/mac/macbook/macbook-pro-16-m4-late-2024/noutbuk-apple-macbook-pro-16-late-2024-silver-mx2u3/", 

"https://grokholsky.com/ua/product/apple/mac/macbook/macbook-pro-16-m4-late-2024/noutbuk-apple-macbook-pro-16-late-2024-space-black-mx303/",
"https://grokholsky.com/ua/product/apple/mac/macbook/macbook-pro-16-m4-late-2024/noutbuk-apple-macbook-pro-16-late-2024-silver-mx2v3/",

"https://grokholsky.com/ua/product/apple/mac/macbook/macbook-pro-16-m4-late-2024/noutbuk-apple-macbook-pro-16-late-2024-space-black-mx313/",
"https://grokholsky.com/ua/product/apple/mac/macbook/macbook-pro-16-m4-late-2024/noutbuk-apple-macbook-pro-16-late-2024-silver-mx2w3/", 
];

const arrLinkJabkoMac16Ram = [
  "https://jabko.ua/mac/macbook-air/apple-macbook-air-m2-2022/macbook-air-13-retina-midnight-256gb-8-cpu--8-gpu-16gb-ram-with-apple-m2-mc7x4-2024",
"https://jabko.ua/mac/macbook-air/apple-macbook-air-m2-2022/macbook-air-13-retina-space-gray-256gb-8-cpu--8-gpu-16gb-ram-with-apple-m2-mc7u4-2024",
"https://jabko.ua/mac/macbook-air/apple-macbook-air-m2-2022/macbook-air-13-retina-starlight-256gb-8-cpu--8-gpu-16gb-ram-with-apple-m2-mc7w4-2024",
"https://jabko.ua/mac/macbook-air/apple-macbook-air-m2-2022/macbook-air-13-retina-silver-256gb-8-cpu--8-gpu-16gb-ram-with-apple-m2-mc7v4-2024",


"https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-midnight-256gb-8-cpu--8-gpu-16gb-ram-with-apple-m3-mc8k4-2024",
"https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-space-gray-256gb-8-cpu--8-gpu-16gb-ram-with-apple-m3-mc8g4-2024",
"https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-starlight-256gb-8-cpu--8-gpu-16gb-ram-with-apple-m3-mc8j4-2024",
"https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-silver-256gb-8-cpu--8-gpu-16gb-ram-with-apple-m3-mc8h4-2024",

	
"https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-midnight-256gb-8-cpu--10-gpu-16gb-ram-with-apple-m3-mc9g4-2024",
"https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-space-gray-256gb-8-cpu--10-gpu-16gb-ram-with-apple-m3-mc9d4-2024",
"https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-starlight-256gb-8-cpu--10-gpu-16gb-ram-with-apple-m3-mc9f4-2024",
"https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-silver-256gb-8-cpu--10-gpu-16gb-ram-with-apple-m3-mc9e4-2024",
];
const arrLinkIStoreMac16Ram = [
  "https://www.istore.ua/ua/item/apple-macbook-air-2022-g-256ssd-m2-8cpu-16gb-midnight-custom-z160000az/",
"https://www.istore.ua/ua/item/apple-macbook-air-2022-g-256ssd-m2-8cpu-16gb-space-grey-custom-z15s000d1/",
"https://www.istore.ua/ua/item/apple-macbook-air-2022-g-256ssd-m2-8cpu-16gb-starlight-custom-z15y000b5/",
"https://www.istore.ua/ua/item/apple-macbook-air-2022-g-256ssd-m2-8cpu-16gb-silver-custom-z15w000aw/",


"https://www.istore.ua/ua/item/apple-macbook-air-13-m3-16gb-256gb-midnight-custom-z1bc0015s-mc8k4/",
"https://www.istore.ua/ua/item/apple-macbook-air-13-m3-16gb-256tb-space-gray-custom-z1b60016j-mc8g4/",
"https://www.istore.ua/ua/item/apple-macbook-air-13-m3-16gb-256gb-starlight-custom-z1ba0017j-mc8j4/",
"https://www.istore.ua/ua/item/apple-macbook-air-13-m3-16gb-256gb-silver-custom-mc8h4/",


"https://www.istore.ua/ua/item/apple-macbook-air-15-m3-16gb-256gb-midnight-custom-z1bv0006k-mc9g4/",
"https://www.istore.ua/ua/item/apple-macbook-air-15-m3-16gb-2566gb-space-gray-custom-z1bp0006m-mc9d4/",
"https://www.istore.ua/ua/item/apple-macbook-air-15-m3-16gb-256gb-starlight-custom-z1bt00067-mc9f4/",
"https://www.istore.ua/ua/item/apple-macbook-air-15-m3-16gb-256gb-silver-custom-z1br00067-mc9e4/",
];
const arrLinkMobilePlanetMac16Ram = [
  "https://mobileplanet.ua/apple-macbook-air-13-6-m2-16-256gb-midnight-late-2-328620",
"https://mobileplanet.ua/apple-macbook-air-13-6-m2-16-256gb-space-gray-late-328626",
"https://mobileplanet.ua/apple-macbook-air-13-6-m2-16-256gb-starlight-late-328629",
"https://mobileplanet.ua/apple-macbook-air-13-6-m2-16-256gb-silver-late-202-328623",


"https://mobileplanet.ua/apple-macbook-air-13-6-m3-16-256gb-midnight-late-2-328621",
"https://mobileplanet.ua/apple-macbook-air-13-6-m3-16-space-gray-late-2024-328627",
"https://mobileplanet.ua/apple-macbook-air-13-6-m3-16-256gb-starlight-late-328630",
"https://mobileplanet.ua/apple-macbook-air-13-6-m3-16-256gb-silver-late-202-328624",

	
"https://mobileplanet.ua/apple-macbook-air-15-m3-16-256gb-midnight-late-202-328632",
"https://mobileplanet.ua/apple-macbook-air-15-m3-16-256gb-space-gray-late-2-328636",
"https://mobileplanet.ua/apple-macbook-air-15-m3-16-256gb-starlight-late-20-328638",
"https://mobileplanet.ua/apple-macbook-air-15-m3-16-256gb-silver-late-2024-328634",
];
const arrLinkGroMac16Ram = [
  "https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-13-6-m3-late-2024/noutbuk-apple-macbook-air-13-6-late-2024-midnight-mc7x4/",
"https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-13-6-m3-late-2024/noutbuk-apple-macbook-air-13-6-late-2024-space-gray-mc7u4/",
"https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-13-6-m3-late-2024/noutbuk-apple-macbook-air-13-6-late-2024-starlight-mc7w4/",
"https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-13-6-m3-late-2024/noutbuk-apple-macbook-air-13-6-late-2024-silver-mc7v4/",


"https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-13-6-m3-late-2024/noutbuk-apple-macbook-air-13-6-late-2024-midnight-mc8k4/",
"https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-13-6-m3-late-2024/noutbuk-apple-macbook-air-13-6-late-2024-space-gray-mc8g4/",
"https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-13-6-m3-late-2024/noutbuk-apple-macbook-air-13-6-late-2024-starlight-mc8j4/",
"https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-13-6-m3-late-2024/noutbuk-apple-macbook-air-13-6-late-2024-silver-mc8h4/",

	
"https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-15-m3-late-2024/noutbuk-apple-macbook-air-15-late-2024-midnight-mc9g4/",
"https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-15-m3-late-2024/noutbuk-apple-macbook-air-15-late-2024-space-gray-mc9d4/",
"https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-15-m3-late-2024/noutbuk-apple-macbook-air-15-late-2024-starlight-mc9f4/",
"https://grokholsky.com/ua/product/apple/mac/apple-macbook-air/macbook-air-15-m3-late-2024/noutbuk-apple-macbook-air-15-late-2024-silver-mc9e4/",
];

const arrLinkJabkoMacAirM4 = [
  "https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-midnight-512gb-8-cpu--10-gpu-24gb-ram-with-apple-m3-mc8q4-2024",
"https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-space-gray-512gb-8-cpu--10-gpu-24gb-ram-with-apple-m3-mc8m4-2024",
"https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-starlight-512gb-8-cpu--10-gpu-24gb-ram-with-apple-m3-mc8p4-2024",
"https://jabko.ua/mac/macbook-air/macbook-air-2024-apple-m3/macbook-air-13-retina-silver-512gb-8-cpu--10-gpu-24gb-ram-with-apple-m3-mc8n4-2024", 
"https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-midnight-512gb-8-cpu--10-gpu-24gb-ram-with-apple-m3-mc9l4-2024",
"https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-space-gray-512gb-8-cpu--10-gpu-24gb-ram-with-apple-m3-mc9h4-2024",
"https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-starlight-512gb-8-cpu--10-gpu-24gb-ram-with-apple-m3-mc9k4-2024",
"https://jabko.ua/mac/macbook-air/macbook-air-15-2024-apple-m3/macbook-air-15-retina-silver-512gb-8-cpu--10-gpu-24gb-ram-with-apple-m3-mc9j4-2024", 


"https://jabko.ua/mac/macbook-air/macbook-air-13-2025-apple-m4/macbook-air-13-retina-midnight-256gb-8-cpu--10-gpu-16gb-ram-with-apple-m4-2025-mw123",
"https://jabko.ua/mac/macbook-air/macbook-air-13-2025-apple-m4/macbook-air-13-retina-sky-blue-256gb-8-cpu--10-gpu-16gb-ram-with-apple-m4-2025-mc6t4",
"https://jabko.ua/mac/macbook-air/macbook-air-13-2025-apple-m4/macbook-air-13-retina-starlight-256gb-8-cpu--10-gpu-16gb-ram-with-apple-m4-2024-mw0y3",
"https://jabko.ua/mac/macbook-air/macbook-air-13-2025-apple-m4/macbook-air-13-retina-silver-256gb-8-cpu--10-gpu-16gb-ram-with-apple-m4-2025-mw0w3", 

"https://jabko.ua/mac/macbook-air/macbook-air-13-2025-apple-m4/macbook-air-13-retina-midnight-512gb-10-cpu--10-gpu-16gb-ram-with-apple-m4-2025-mw133",
"https://jabko.ua/mac/macbook-air/macbook-air-13-2025-apple-m4/macbook-air-13-retina-sky-blue-512gb-10-cpu--10-gpu-16gb-ram-with-apple-m4-2025-mc6u4",
"https://jabko.ua/mac/macbook-air/macbook-air-13-2025-apple-m4/macbook-air-13-retina-starlight-512gb-10-cpu--10-gpu-16gb-ram-with-apple-m4-2025-mw103",
"https://jabko.ua/mac/macbook-air/macbook-air-13-2025-apple-m4/macbook-air-13-retina-silver-512gb-10-cpu--10-gpu-16gb-ram-with-apple-m4-2025-mw0x3", 

"https://jabko.ua/mac/macbook-air/macbook-air-13-2025-apple-m4/macbook-air-13-retina-midnight-512gb-10-cpu--10-gpu-24gb-ram-with-apple-m4-2025-mc6c4",
"https://jabko.ua/mac/macbook-air/macbook-air-13-2025-apple-m4/macbook-air-13-retina-sky-blue-512gb-10-cpu--10-gpu-24gb-ram-with-apple-m4-2025",
"https://jabko.ua/mac/macbook-air/macbook-air-13-2025-apple-m4/macbook-air-13-retina-starlight-512gb-10-cpu--10-gpu-24gb-ram-with-apple-m4-2025-mc6a4",
"https://jabko.ua/mac/macbook-air/macbook-air-13-2025-apple-m4/macbook-air-13-retina-silver-512gb-10-cpu--10-gpu-24gb-ram-with-apple-m4-2025-mc654", 


"https://jabko.ua/mac/macbook-air/macbook-air-15-2025-apple-m4/macbook-air-15-retina-midnight-256gb-10-cpu--10-gpu-16gb-ram-with-apple-m4-2025-mw1l3",
"https://jabko.ua/mac/macbook-air/macbook-air-15-2025-apple-m4/macbook-air-15-retina-sky-blue-256gb-10-cpu--10-gpu-16gb-ram-with-apple-m4-2025-mc7a4",
"https://jabko.ua/mac/macbook-air/macbook-air-15-2025-apple-m4/macbook-air-15-retina-starlight-256gb-10-cpu--10-gpu-16gb-ram-with-apple-m4-2025-mw1j3",
"https://jabko.ua/mac/macbook-air/macbook-air-15-2025-apple-m4/macbook-air-15-retina-silver-256gb-10-cpu--10-gpu-16gb-ram-with-apple-m4-2025-mw1g3", 

"https://jabko.ua/mac/macbook-air/macbook-air-15-2025-apple-m4/macbook-air-15-retina-midnight-512gb-10-cpu--10-gpu-16gb-ram-with-apple-m4-2025-mw1m3",
"https://jabko.ua/mac/macbook-air/macbook-air-15-2025-apple-m4/macbook-air-15-retina-sky-blue-512gb-10-cpu--10-gpu-16gb-ram-with-apple-m4-2025-mc7c4",
"https://jabko.ua/mac/macbook-air/macbook-air-15-2025-apple-m4/macbook-air-15-retina-starlight-512gb-10-cpu--10-gpu-16gb-ram-with-apple-m4-2025-mw1k3",
"https://jabko.ua/mac/macbook-air/macbook-air-15-2025-apple-m4/macbook-air-15-retina-silver-512gb-10-cpu--10-gpu-16gb-ram-with-apple-m4-2025-mw1h3", 

"https://jabko.ua/mac/macbook-air/macbook-air-15-2025-apple-m4/macbook-air-15-retina-midnight-512gb-10-cpu--10-gpu-24gb-ram-with-apple-m4-2025-mc6l4",
"https://jabko.ua/mac/macbook-air/macbook-air-15-2025-apple-m4/macbook-air-15-retina-sky-blue-512gb-10-cpu--10-gpu-24gb-ram-with-apple-m4-2025-mc7d4",
"https://jabko.ua/mac/macbook-air/macbook-air-15-2025-apple-m4/macbook-air-15-retina-starlight-512gb-10-cpu--10-gpu-24gb-ram-with-apple-m4-2025-mc6k4",
"https://jabko.ua/mac/macbook-air/macbook-air-15-2025-apple-m4/macbook-air-15-retina-silver-512gb-10-cpu--10-gpu-24gb-ram-with-apple-m4-2025-mc6j4",
];
const arrLinkIStoreMacAirM4 = [
  "https://www.istore.ua/ua/item/apple-macbook-air-13-m3-24gb-512gb-midnight-custom-z1bc00147-mc8q4/",
"https://www.istore.ua/ua/item/apple-macbook-air-13-m3-24gb-512gb-space-gray-custom/",
"https://www.istore.ua/ua/item/apple-macbook-air-13-m3-24gb-512gb-starligh-custom-z1ba00160-mc8p4/",
"https://www.istore.ua/ua/item/apple-macbook-air-13-m3-24gb-512gb-silver-custom-z1b80015n-mc8n4/", 

"https://www.istore.ua/ua/item/apple-macbook-air-15-m3-24gb-512gb-midnight-custom-z1bv0006n-mc9l4/",
"https://www.istore.ua/ua/item/apple-macbook-air-15-m3-24gb-512tb-space-gray-custom-z1bp000md-mc9h4/",
"https://www.istore.ua/ua/item/apple-macbook-air-15-m3-24gb-512gb-starlight-custom-z1bt000l2-mc9k4-mc9k4-mc9k4/",
"https://www.istore.ua/ua/item/apple-macbook-air-15-m3-24gb-512gb-silver-custom-z1br000kl-mc9j4/", 

"https://www.istore.ua/ua/item/apple-macbook-air-13-m4-16-256gb-midnight-mw123/",
"https://www.istore.ua/ua/item/apple-macbook-air-13-m4-16-256gb-sky-blue-mc6t4/",
"https://www.istore.ua/ua/item/apple-macbook-air-13-m4-16-256gb-starlight/",
"https://www.istore.ua/ua/item/apple-macbook-air-13-m4-16-256gb-silver-mw0w3/", 

"https://www.istore.ua/ua/item/apple-macbook-air-13-m4-16-512gb-midnight/",
"https://www.istore.ua/ua/item/apple-macbook-air-13-m4-16-512gb-sky-blue-mc6u4/",
"https://www.istore.ua/ua/item/apple-macbook-air-13-m4-16-512gb-starlight/",
"https://www.istore.ua/ua/item/apple-macbook-air-13-m4-16-512gb-silver/", 

"https://www.istore.ua/ua/item/apple-macbook-air-13-m4-24-512gb-midnight/",
"https://www.istore.ua/ua/item/apple-macbook-air-13-m4-24-512gb-sky-blue-mc6v4/",
"https://www.istore.ua/ua/item/apple-macbook-air-13-m4-24-512gb-starlight/",
"https://www.istore.ua/ua/item/apple-macbook-air-13-m4-24-512gb-silver/", 


"https://www.istore.ua/ua/item/apple-macbook-air-15-m4-16-256gb-midnight/",
"https://www.istore.ua/ua/item/apple-macbook-air-15-m4-16-256gb-sky-blue-mc7a4/",
"https://www.istore.ua/ua/item/apple-macbook-air-15-m4-16-256gb-starlight-mw1j3/",
"https://www.istore.ua/ua/item/apple-macbook-air-15-m4-16-256gb-silver/", 

"https://www.istore.ua/ua/item/apple-macbook-air-15-m4-16-512gb-midnight/",
"https://www.istore.ua/ua/item/apple-macbook-air-15-m4-16-512gb-sky-blue-mc7c4/",
"https://www.istore.ua/ua/item/apple-macbook-air-15-m4-16-512gb-starlight/",
"https://www.istore.ua/ua/item/apple-macbook-air-15-m4-16-512gb-silver/", 

"https://www.istore.ua/ua/item/apple-macbook-air-15-m4-24-512gb-midnight/",
"https://www.istore.ua/ua/item/apple-macbook-air-15-m4-24-512gb-sky-blue-mc7d4/",
"https://www.istore.ua/ua/item/apple-macbook-air-15-m4-24-512gb-starlight/",
"https://www.istore.ua/ua/item/apple-macbook-air-15-m4-24-512gb-silver/", 
]
const arrLinkMobilePlanetMacAirM4 = [
  "https://mobileplanet.ua/apple-macbook-air-13-6-m3-24-512gb-midnight-late-2-328622",
"https://mobileplanet.ua/apple-macbook-air-13-6-m3-24-512gb-space-gray-late-328628",
"https://mobileplanet.ua/apple-macbook-air-13-6-m3-24-512gb-starlight-late-328631",
"https://mobileplanet.ua/apple-macbook-air-13-6-m3-24-512gb-silver-late-202-328625", 

"https://mobileplanet.ua/apple-macbook-air-15-m3-24-512gb-midnight-2024-z1b-308386",
"https://mobileplanet.ua/apple-macbook-air-15-m3-24-512gb-space-g-336505",
"https://mobileplanet.ua/apple-macbook-air-15-m3-24-512gb-starlight-2024-z1-308425",
"https://mobileplanet.ua/apple-macbook-air-15-m3-24-512gb-silver-336504", 

"https://mobileplanet.ua/apple-macbook-air-13-6-m4-16-256gb-midnight-2025-m-338619",
"https://mobileplanet.ua/apple-macbook-air-13-6-m4-16-256gb-sky-blue-2025-m-338624",
"https://mobileplanet.ua/apple-macbook-air-13-6-m4-16-256gb-starlight-2025-338628",
"https://mobileplanet.ua/apple-macbook-air-13-6-m4-16-256gb-silver-2025-mw0-338622", 

"https://mobileplanet.ua/apple-macbook-air-13-6-m4-16-512gb-midnight-2025-m-338620",
"https://mobileplanet.ua/apple-macbook-air-13-6-m4-16-512gb-sky-blue-2025-m-338625",
"https://mobileplanet.ua/apple-macbook-air-13-6-m4-16-512gb-starlight-2025-338629",
"https://mobileplanet.ua/apple-macbook-air-13-6-m4-16-512gb-silver-2025-mw0-338623", 

"https://mobileplanet.ua/apple-macbook-air-13-6-m4-24-512gb-midnight-2025-m-338618",
"https://mobileplanet.ua/apple-macbook-air-13-6-m4-24-512gb-sky-blue-2025-m-338626",
"https://mobileplanet.ua/apple-macbook-air-13-6-m4-24-512gb-starlight-2025-338627",
"https://mobileplanet.ua/apple-macbook-air-13-6-m4-24-512gb-silver-2025-mc6-338621", 


"https://mobileplanet.ua/apple-macbook-air-15-m4-16-256gb-midnight-2025-mw1-338631",
"https://mobileplanet.ua/apple-macbook-air-15-m4-16-256gb-sky-blue-2025-mc7-338636",
"https://mobileplanet.ua/apple-macbook-air-15-m4-16-256gb-starlight-2025-mw-338640",
"https://mobileplanet.ua/apple-macbook-air-15-m4-16-256gb-silver-2025-mw1g3-338634", 

"https://mobileplanet.ua/apple-macbook-air-15-m4-16-512gb-midnight-2025-mw1-338632",
"https://mobileplanet.ua/apple-macbook-air-15-m4-16-512gb-sky-blue-2025-mc7-338637",
"https://mobileplanet.ua/apple-macbook-air-15-m4-16-512gb-starlight-2025-mw-338641",
"https://mobileplanet.ua/apple-macbook-air-15-m4-16-512gb-silver-2025-mw1h3-338635", 

"https://mobileplanet.ua/apple-macbook-air-15-m4-24-512gb-midnight-2025-mc6-338630",
"https://mobileplanet.ua/apple-macbook-air-15-m4-24-512gb-sky-blue-2025-mc7-338638",
"https://mobileplanet.ua/apple-macbook-air-15-m4-24-512gb-starlight-2025-mc-338639",
"https://mobileplanet.ua/apple-macbook-air-15-m4-24-512gb-silver-2025-mc6j4-338633", 
]
const arrLinkGroMacAirM4 = [
  "https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-13-6-m3-late-2024/noutbuk-apple-macbook-air-13-6-late-2024-midnight-mc8q4/",
"https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-13-6-m3-late-2024/noutbuk-apple-macbook-air-13-6-late-2024-space-gray-mc8m4/",
"https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-13-6-m3-late-2024/noutbuk-apple-macbook-air-13-6-late-2024-starlight-mc8p4/",
"https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-13-6-m3-late-2024/noutbuk-apple-macbook-air-13-6-late-2024-silver-mc8n4/", 

"https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m3-late-2024/noutbuk-apple-macbook-air-15-late-2024-midnight-mc9l4/",
"https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m3-late-2024/noutbuk-apple-macbook-air-15-late-2024-space-gray-mc9h4/",
"https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m3-late-2024/noutbuk-apple-macbook-air-15-late-2024-starlight-mc9k4/",
"https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m3-late-2024/noutbuk-apple-macbook-air-15-late-2024-silver-mc9j4/", 

"https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-13-6-m4-2025/noutbuk-apple-macbook-air-13-6-2025-midnight-mw123/",
"https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-13-6-m4-2025/noutbuk-apple-macbook-air-13-6-2025-sky-blue-mc6t4/",
"https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-13-6-m4-2025/noutbuk-apple-macbook-air-13-6-2025-starlight-mw0y3/",
"https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-13-6-m4-2025/noutbuk-apple-macbook-air-13-6-2025-silver-mw0w3/", 

"https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-13-6-m4-2025/noutbuk-apple-macbook-air-13-6-2025-midnight-mw133/",
"https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-13-6-m4-2025/noutbuk-apple-macbook-air-13-6-2025-sky-blue-mc6u4/",
"https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-13-6-m4-2025/noutbuk-apple-macbook-air-13-6-2025-starlight-mw103/",
"https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-13-6-m4-2025/noutbuk-apple-macbook-air-13-6-2025-silver-mw0x3/", 

"https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-13-6-m4-2025/noutbuk-apple-macbook-air-13-6-2025-midnight-mc6c4/",
"https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-13-6-m4-2025/noutbuk-apple-macbook-air-13-6-2025-sky-blue-mc6v4/",
"https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-13-6-m4-2025/noutbuk-apple-macbook-air-13-6-2025-starlight-mc6a4/",
"https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-13-6-m4-2025/noutbuk-apple-macbook-air-13-6-2025-silver-mc654/", 


"https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m4-2025/noutbuk-apple-macbook-air-15-2025-midnight-mw1l3/",
"https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m4-2025/noutbuk-apple-macbook-air-15-2025-sky-blue-mc7a4/",
"https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m4-2025/noutbuk-apple-macbook-air-15-2025-starlight-mw1j3/",
"https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m4-2025/noutbuk-apple-macbook-air-15-2025-silver-mw1g3/", 

"https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m4-2025/noutbuk-apple-macbook-air-15-2025-midnight-mw1m3/",
"https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m4-2025/noutbuk-apple-macbook-air-15-2025-sky-blue-mc7c4/",
"https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m4-2025/noutbuk-apple-macbook-air-15-2025-starlight-mw1k3/",
"https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m4-2025/noutbuk-apple-macbook-air-15-2025-silver-mw1h3/", 

"https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m4-2025/noutbuk-apple-macbook-air-15-2025-midnight-mc6l4/",
"https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m4-2025/noutbuk-apple-macbook-air-15-2025-sky-blue-mc7d4/",
"https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m4-2025/noutbuk-apple-macbook-air-15-2025-starlight-mc6k4/",
"https://grokholsky.com/product/apple/mac/apple-macbook-air/macbook-air-15-m4-2025/noutbuk-apple-macbook-air-15-2025-silver-mc6j4/", 
]

const arrLinkJabkoMacMini = [
  "https://jabko.ua/mac/mac-mini/apple-mac-mini-",
"https://jabko.ua/mac/mac-mini/apple-mac-mini--512gb--mgnr3--2020",

"https://jabko.ua/mac/mac-mini/apple-mac-mini--256gb-with-apple-m2-2023",
"https://jabko.ua/mac/mac-mini/apple-mac-mini--512gb-with-apple-m2-2023",
"https://jabko.ua/mac/mac-mini/apple-mac-mini--512gb-with-apple-m2-pro-2023",

"https://jabko.ua/mac/mac-mini/apple-mac-mini-with-apple-m4-256gb-10-cpu--10-gpu-16gb-unified-memory-silver-2024-mu9d3",
"https://jabko.ua/mac/mac-mini/apple-mac-mini-with-apple-m4-512gb-10-cpu--10-gpu-16gb-unified-memory-silver-2024-mu9e3",
"https://jabko.ua/mac/mac-mini/apple-mac-mini-with-apple-m4-512gb-10-cpu--10-gpu-24gb-unified-memory-silver-2024-mcyt4",
"https://jabko.ua/mac/mac-mini/apple-mac-mini-with-apple-m4-pro-512gb-12-cpu--16-gpu-24gb-unified-memory-silver-2024-mcx44",

"https://jabko.ua/mac/mac-studio/apple-mac-studio-12-core-cpu-30-core-gpu-16-core-neural-engine-32gb-ram-512gb-apple-m2-max-2023-",
"https://jabko.ua/mac/mac-studio/apple-mac-studio-with-apple-m3-ultra-1tb-28-cpu--60-gpu--32-core-neural-engine-96gb-ram-2025-mu973",
"https://jabko.ua/mac/mac-studio/apple-mac-studio-with-apple-m4-max-512gb-14-cpu--32-gpu--16-core-neural-engine-36gb-ram-2025-mu963",

"https://jabko.ua/mac/mac-studio/monitor-apple-studio-display-with-tilt-adjustable-stand--standard-glass---mk0u3-",
"https://jabko.ua/mac/mac-studio/monitor-apple-studio-display-with-tilt-height-adjustable-stand--standard-glass---mk0q3-",
"https://jabko.ua/mac/mac-studio/monitor-apple-studio-display-with-tilt-adjustable-stand--nano-texture-glass---mmyw3-",
"https://jabko.ua/mac/mac-studio/monitor-apple-studio-display-with-vesa-mount-adapter--nano-texture-glass---mmyx3-",
"https://jabko.ua/mac/mac-studio/monitor-apple-studio-display-with-tilt-height-adjustable-stand--nano-texture-glass---mmyv3-",
];
const arrLinkIStoreMacMini = [
  "https://www.istore.ua/ua/item/kompyuter-apple-mac-mini-m1-512gb-2020/",
"https://www.istore.ua/ua/item/kompyuter-apple-mac-mini-m1-512gb-mgnt3-2020/",

"https://www.istore.ua/ua/item/apple-mac-mini-m2-512gb-silver-2023/",
"https://www.istore.ua/ua/item/apple-mac-mini-m2-512gb-mmfj3-silver-2023/",
"https://www.istore.ua/ua/item/apple-mac-mini-m2-pro-512gb-silver-2023/",

"https://www.istore.ua/ua/item/apple-mac-mini-m4-16-256gb-silver-2024/",
"https://www.istore.ua/ua/item/apple-mac-mini-m4-16-512gb-silver-2024/",
"https://www.istore.ua/ua/item/apple-mac-mini-m4-24-512gb-silver-2024/",
"https://www.istore.ua/ua/item/apple-mac-mini-m4-pro-24-512gb-silver-2024/",

"https://www.istore.ua/ua/item/apple-studio-display-27-standard-glass/",

"https://www.istore.ua/ua/item/apple-studio-display-27-nano-texture-glass/",
];
const arrLinkMobilePlanetMacMini = [
  "https://mobileplanet.ua/apple-mac-mini-2023-mnh73-265600",

"https://mobileplanet.ua/apple-mac-mini-m4-mu9d3-328710",
"https://mobileplanet.ua/apple-mac-mini-m4-mu9e3-328711",
"https://mobileplanet.ua/apple-mac-mini-m4-mcyt4-328709",
"https://mobileplanet.ua/apple-mac-mini-m4-pro-mcx44-328712",

"https://mobileplanet.ua/apple-mac-studio-m2-max-2023-mqh73-275544",
"https://mobileplanet.ua/apple-mac-studio-2025-m3-ultra-96-1tb-mu973-340426",
"https://mobileplanet.ua/apple-mac-studio-2025-m4-max-36-512gb-mu963-340427",

"https://mobileplanet.ua/apple-studio-display-with-tilt-adjustable-stand-st-252720",
];
const arrLinkGroMacMini = [
  "https://grokholsky.com/product/apple/mac/mac-mini/mac-mini-2020-m1/mac-mini-2020-m1-mgnr3/",
"https://grokholsky.com/product/apple/mac/mac-mini/mac-mini-2020-m1/mac-mini-2020-m1-mgnt3/",

"https://grokholsky.com/product/apple/mac/mac-mini/mac-mini-m2-2023/mac-mini-2023-mmfj3/",
"https://grokholsky.com/product/apple/mac/mac-mini/mac-mini-m2-2023/mac-mini-2023-mmfk3/",
"https://grokholsky.com/product/apple/mac/mac-mini/mac-mini-m2-2023/mac-mini-2023-mnh73/",

"https://grokholsky.com/product/apple/mac/mac-mini/mac-mini-m4-2024/nettop-apple-mac-mini-m4-mu9d3/",
"https://grokholsky.com/product/apple/mac/mac-mini/mac-mini-m4-2024/nettop-apple-mac-mini-m4-mu9e3/",
"https://grokholsky.com/product/apple/mac/mac-mini/mac-mini-m4-2024/nettop-apple-mac-mini-m4-mcyt4/",
"https://grokholsky.com/product/apple/mac/mac-mini/mac-mini-m4-2024/nettop-apple-mac-mini-m4-pro-mcx44/",

"https://grokholsky.com/product/apple/mac/mac-studio/mac-studio-m2-max-2023/mac-studio-m2-max-2023-mqh73/",
"https://grokholsky.com/product/apple/mac/mac-studio/mac-studio-2025/nettop-apple-mac-studio-2025-m3-ultra-mu973/",
"https://grokholsky.com/product/apple/mac/mac-studio/mac-studio-2025/nettop-apple-mac-studio-2025-m4-max-mu963/",

"https://grokholsky.com/product/apple/mac/monitory/studio-display-with-tilt-adjustable-stand-standard-glass-mk0u3/",
"https://grokholsky.com/product/apple/mac/monitory/studio-display-with-tilt-height-adjustable-stand-standard-glass-mk0q3/",
"https://grokholsky.com/product/apple/mac/monitory/studio-display-with-tilt-adjustable-stand-nano-texture-glass-mmyw3/",
"https://grokholsky.com/product/apple/mac/monitory/studio-display-with-vesa-mount-adapter-nano-texture-glass-mmyx3/",
"https://grokholsky.com/product/apple/mac/monitory/studio-display-with-tilt-height-adjustable-stand-nano-texture-glass-mmyv3/",
];


async function f() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  for (let i = 0; i < arrLinkMobilePlanetMac.length; i += 1) {
    await page.goto(arrLinkMobilePlanetMac[i]);
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
        return "⚠️ Нет H1";
      }
    });

    console.log(arr2);
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


  for (let i = 0; i < arrLinkJabkoMacM4.length; i += 1) {
    await page.goto(arrLinkJabkoMacM4[i]);
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
  for (let i = 0; i < arrLinkIStoreMacM4.length; i += 1) {
    await page.goto(arrLinkIStoreMacM4[i]);
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
  for (let i = 0; i < arrLinkMobilePlanetMacM4.length; i += 1) {
    await page.goto(arrLinkMobilePlanetMacM4[i]);
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
  for (let i = 0; i < arrLinkGroMacM4.length; i += 1) {
    await page.goto(arrLinkGroMacM4[i]);
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

  for (let i = 0; i < arrLinkJabkoMac16Ram.length; i += 1) {
    await page.goto(arrLinkJabkoMac16Ram[i]);
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
  for (let i = 0; i < arrLinkIStoreMac16Ram.length; i += 1) {
    await page.goto(arrLinkIStoreMac16Ram[i]);
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
  for (let i = 0; i < arrLinkMobilePlanetMac16Ram.length; i += 1) {
    await page.goto(arrLinkMobilePlanetMac16Ram[i]);
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
  for (let i = 0; i < arrLinkGroMac16Ram.length; i += 1) {
    await page.goto(arrLinkGroMac16Ram[i]);
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

  for (let i = 0; i < arrLinkJabkoMacAirM4.length; i += 1) {
    await page.goto(arrLinkJabkoMacAirM4[i]);
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
  for (let i = 0; i < arrLinkIStoreMacAirM4.length; i += 1) {
    await page.goto(arrLinkIStoreMacAirM4[i]);
    const n = await page.$("#txt");

    let arr4 = await page.evaluate(() => {
  const h1 = document.querySelector("h1");
  const price = document.querySelector(".product_price");

  if (h1) {
    const text2 = h1.innerText.trim();
    if (price) {
      return `${text2} I: ${price.innerText.trim()}`;
    } else {
      return text2;
    }
  } else {
    return "⚠️ Нет H1";
  }
});

    console.log(arr4);
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkMobilePlanetMacAirM4.length; i += 1) {
    await page.goto(arrLinkMobilePlanetMacAirM4[i]);
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
  for (let i = 0; i < arrLinkGroMacAirM4.length; i += 1) {
    await page.goto(arrLinkGroMacAirM4[i]);
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

  for (let i = 0; i < arrLinkJabkoMacMini.length; i += 1) {
    await page.goto(arrLinkJabkoMacMini[i]);
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
  for (let i = 0; i < arrLinkIStoreMacMini.length; i += 1) {
    await page.goto(arrLinkIStoreMacMini[i]);
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
  for (let i = 0; i < arrLinkMobilePlanetMacMini.length; i += 1) {
    await page.goto(arrLinkMobilePlanetMacMini[i]);
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
  for (let i = 0; i < arrLinkGroMacMini.length; i += 1) {
    await page.goto(arrLinkGroMacMini[i]);
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

}
f();
