console.log("Hello world");

const puppeteer = require("puppeteer");

const arrLinkJabkoACS = [
    "https://jabko.ua/apple-airpods/naushniki-apple-airpods/naushniki-apple-airpods--mv7n2-",
    "https://jabko.ua/apple-airpods/naushniki-apple-airpods/naushniki-apple-airpods-3-with-lightning-charging-case--mpny3-",
    "https://jabko.ua/apple-airpods/naushniki-apple-airpods/naushniki-apple-airpods-3-mme73",

    "https://jabko.ua/apple-airpods/apple-airpods-pro-max/naushniki-apple-airpods-max--sky-blue-",
    "https://jabko.ua/apple-airpods/apple-airpods-pro-max/naushniki-apple-airpods-max--green-",
    "https://jabko.ua/apple-airpods/apple-airpods-pro-max/naushniki-apple-airpods-max--pink-",
    "https://jabko.ua/apple-airpods/apple-airpods-pro-max/apple-airpods-max--silver-",
    "https://jabko.ua/apple-airpods/apple-airpods-pro-max/naushniki-apple-airpods-max--space-grey-",

    "https://jabko.ua/apple-airpods/apple-airpods-pro/naushniki-apple-airpods-pro-2-with-magsafe-charging-case-2022",
    "https://jabko.ua/apple-airpods/apple-airpods-pro/apple-airpods-pro-2-usb-c-charging-case-2023",
    "https://jabko.ua/apple-airpods/apple-airpods-pro/naushniki-apple-airpods-pro-with-magsafe-charging-case--mlwk3-",

    "https://jabko.ua/gadzheti-i-drugoe/gadzheti-apple/apple-tv/apple-tv-4k-64gb--2021-",
    "https://jabko.ua/gadzheti-i-drugoe/gadzheti-apple/apple-tv/apple-tv-4k-128gb--wi-fi---ethernet---2022-",
    "https://jabko.ua/gadzheti-i-drugoe/gadzheti-apple/apple-tv/apple-tv-4k-64gb--wi-fi-2022-",

    "https://jabko.ua/aksessuari/aksessuari-dlja-ipad/apple-pencil/apple-pencil-2024",
    "https://jabko.ua/aksessuari/aksessuari-dlja-ipad/apple-pencil/apple-pencil-usb-c-2023",
    "https://jabko.ua/aksessuari/aksessuari-dlja-ipad/apple-pencil/apple-pencil-2--mu8f2-",

    "https://jabko.ua/aksessuari/aksessuari-dlja-ipad/klaviaturi-i-apple-pencil/klaviatura-magic-keyboard-dlya-ipad-pro-11-black-2024",
    "https://jabko.ua/aksessuari/aksessuari-dlja-ipad/klaviaturi-i-apple-pencil/klaviatura-magic-keyboard-dlya-ipad-pro-11-white-2024",
    "https://jabko.ua/aksessuari/aksessuari-dlja-ipad/klaviaturi-i-apple-pencil/klaviatura-magic-keyboard-dlya-ipad-pro-13-black-2024",
    "https://jabko.ua/aksessuari/aksessuari-dlja-ipad/klaviaturi-i-apple-pencil/klaviatura-magic-keyboard-dlya-ipad-pro-13-white-2024",
    "https://jabko.ua/aksessuari/aksessuari-dlja-ipad/klaviaturi-i-apple-pencil/klaviatura-magic-keyboard-dlja-ipad-pro-11--mxqu2-",
    "https://jabko.ua/aksessuari/aksessuari-dlja-ipad/klaviaturi-i-apple-pencil/klaviatura-ipad-pro-11--2021-magic-keyboard-white--mjqj3--",
];

const arrLinkTouchACS = [
    "https://touch.com.ua/item/naushniki-apple-airpods-2-with-chargingcase-mv7n2/",
    "https://touch.com.ua/ua/item/apple-airpods-3-with-lightning-charging-case-mpny3/",
    "https://touch.com.ua/ua/item/naushniki-apple-airpods-with-wireless-charging-case-2021-3-e-pokolenie/",

    "https://touch.com.ua/ua/item/naushniki-apple-airpods-max-sky-blue-mgyl3ru/",
    "https://touch.com.ua/ua/item/naushniki-apple-airpods-max-green-mgyn3ru/",
    "https://touch.com.ua/ua/item/naushniki-apple-airpods-max-pink-mgym3ru/",
    "https://touch.com.ua/ua/item/naushniki-apple-airpods-max-silver-mgyj3ru/",
    "https://touch.com.ua/ua/item/naushniki-apple-airpods-max-space-gray-mgyh3ru/",

    "https://touch.com.ua/ua/item/naushniki-apple-airpods-pro-2/",
    "https://touch.com.ua/ua/item/apple-airpods-pro-2nd-gen-usb-c/",


    "https://touch.com.ua/ua/item/statsionarnyy-mediapleer-apple-apple-tv-4k-a12-bionic-64gb/",
    "https://touch.com.ua/ua/item/apple-tv-4k-2022-128gb-mn893-tv-pristavka/",
    "https://touch.com.ua/ua/item/apple-tv-4k-2022-64gb-mn873-tv-pristavka/",

    "https://touch.com.ua/ua/item/apple-pencil-pro-mx2d3/",
    "https://touch.com.ua/ua/item/apple-pencil-usb-c-muwa3/",
    "https://touch.com.ua/ua/item/stilus-apple-pencil-2nd-generation-dlya-ipad-pro-2018-mu8f2/",
    "https://touch.com.ua/ua/item/stilus-apple-pencil-for-ipad-pro-mk0c2am-a/",

    "https://touch.com.ua/ua/item/apple-magic-keyboard-for-ipad-pro-11-2024-m4-black-mwr23ll-a-chekhol-klaviatura/",
    "https://touch.com.ua/ua/item/apple-magic-keyboard-for-ipad-pro-11-2024-m4-white-mwr03ll-a-chekhol-klaviatura/",
    "https://touch.com.ua/ua/item/apple-magic-keyboard-for-ipad-pro-13-2024-m4-black-mwr53ll-a-chekhol-klaviatura/",
    "https://touch.com.ua/ua/item/apple-magic-keyboard-for-ipad-pro-13-2024-m4-white-mwr43ll-a-chekhol-klaviatura/",
    "https://touch.com.ua/ua/item/chekhol-klaviatura-apple-magic-keyboard-dlya-ipad-pro-11-2nd-gen-mxqt2/",
    "https://touch.com.ua/ua/item/chekhol-klaviatura-magic-keyboard-apple-dlya-ipad-pro-11-3gen-i-air-4gen-white-mjqj3/",
];

const arrLinkEstoreACS = [
    "https://estore.ua/ua/naushniki-apple-airpods-mv7n2/?q=mv7n2",
    "https://estore.ua/ua/apple-airpods-3-with-lightning-charging-case-mpny3/?q=mpny3",
    "https://estore.ua/ua/apple-airpods-3-mme73/?q=mme73",

    "https://estore.ua/ua/airpods-max-sky-blue/?q=mgyl3",
    "https://estore.ua/ua/airpods-max-green/?q=mgyn3",
    "https://estore.ua/ua/airpods-max-pink/?q=mgym3",
    "https://estore.ua/ua/airpods-max-silver/?q=mgyj3",
    "https://estore.ua/ua/airpods-max-space-gray/?q=mgyh3",

    "https://estore.ua/ua/apple-airpods-pro-2-mqd83/?q=mqd83",
    "https://estore.ua/ua/apple-airpods-pro-2-magsafe-with-charging-case-usb-c-mtjv3/?q=mtjv3",
    "https://estore.ua/ua/apple-airpods-pro-with-magsafe-charging-case-mlwk3/?q=mlwk3",

    "https://estore.ua/ua/mediapleer-apple-tv-4k-64gb-2021/?q=mxh02",
    "https://estore.ua/ua/apple-tv-4k-wi-fi-ethernet-128gb-2022/?q=mn893",
    "https://estore.ua/ua/apple-tv-4k-wi-fi-64gb-2022/?q=mn873",


    "https://estore.ua/ua/stilus-apple-pencil-2-usb-c-muwa3/?q=muwa3",
    "https://estore.ua/ua/apple-pencil-2-mu8f2/?q=mu8f2",
    "https://estore.ua/ua/stilus-apple-pencil-for-ipad-pro-mk0c2-2/?q=mk0c2",

    "https://estore.ua/ua/chehol-klaviatura-apple-magic-keyboard-for-ipad-pro-11-m4-2024-black-mwr23/?q=mwr23",
    "https://estore.ua/ua/chehol-klaviatura-apple-magic-keyboard-for-ipad-pro-11-m4-2024-white-mwr03/?q=mwr03",
    "https://estore.ua/ua/chehol-klaviatura-apple-magic-keyboard-for-ipad-pro-13-m4-2024-black-mwr53/?q=mwr53",
    "https://estore.ua/ua/chehol-klaviatura-apple-magic-keyboard-for-ipad-pro-13-m4-2024-white-mwr43/?q=mwr43",
    "https://estore.ua/ua/chehol-klaviatura-apple-magic-keyboard-for-ipad-pro-11-2020-mxqt2/?q=mxqt2",
    "https://estore.ua/ua/chehol-klaviatura-apple-magic-keyboard-for-ipad-pro-11-20202018air-4-2020-white-mjqj3/?q=mjqj3",
];

const arrLinkIstoreACS = [
    "https://www.istore.ua/ua/item/apple-airpods-2-mv7n2/",
    "https://www.istore.ua/ua/item/apple-airpods-3-with-lightning-charging-case/",
    "https://www.istore.ua/ua/item/apple-airpods-3/",

    "https://www.istore.ua/ua/item/apple-airpods-max-goluboe-nebo/",
    "https://www.istore.ua/ua/item/apple-airpods-max-zelenyy/",
    "https://www.istore.ua/ua/item/apple-airpods-max-rozovyy/",
    "https://www.istore.ua/ua/item/apple-airpods-max-serebristyy/",
    "https://www.istore.ua/ua/item/apple-airpods-max-seryy-kosmos/",

    "https://www.istore.ua/ua/item/apple-airpods-pro-2nd-generation-magsafe-belye/",
    "https://www.istore.ua/ua/item/apple-airpods-pro-2-magsafe-with-charging-case-usb-c/",

    "https://www.istore.ua/ua/item/apple-tv-4k-64-gb-2021/",
    "https://www.istore.ua/ua/item/apple-tv-4k-128gb-wi-fi-ethernet/",
    "https://www.istore.ua/ua/item/apple-tv-4k-64gb-wi-fi-2022/",

    "https://www.istore.ua/ua/item/apple-pencil-pro/",
    "https://www.istore.ua/ua/item/apple-pencil-3-usb-c/",
    "https://www.istore.ua/ua/item/apple-pencil-2-mu8f2/",
    "https://www.istore.ua/ua/item/apple-pencil-mk0c2/",

    "https://www.istore.ua/ua/item/apple-magic-keyboard-for-ipad-pro-11-m4-black/",
    "https://www.istore.ua/ua/item/apple-magic-keyboard-for-ipad-pro-11-m4-white/",
    "https://www.istore.ua/ua/item/apple-magic-keyboard-for-ipad-pro-13-m4-black/",
    "https://www.istore.ua/ua/item/apple-magic-keyboard-for-ipad-pro-13-m4-white/",
    "https://www.istore.ua/ua/item/klaviatura-apple-magic-keyboard-dlya-ipad-pro-11-dyuymov-2-go-pokoleniya/",
    "https://www.istore.ua/ua/item/apple-magic-keyboard-for-ipad-pro-11-2020-2018-air-4-2020-white/",
];

const arrLinkMobilePlanetACS = [
    "https://mobileplanet.ua/ua/apple-airpods-2nd-gen-with-charging-case-104395",
    "https://mobileplanet.ua/ua/apple-airpods-3rd-generation-with-lightn-260923",
    "https://mobileplanet.ua/ua/apple-airpods-3rd-generation-mme73-237395",

    "https://mobileplanet.ua/ua/airpods-max-sky-blue-190206",
    "https://mobileplanet.ua/ua/airpods-max-green-190208",
    "https://mobileplanet.ua/ua/airpods-max-pink-190207",
    "https://mobileplanet.ua/ua/airpods-max-silver-190204",
    "https://mobileplanet.ua/ua/airpods-max-space-gray-190205",

    "https://mobileplanet.ua/ua/apple-airpods-pro-2nd-generation-mqd83-255641",
    "https://mobileplanet.ua/ua/apple-airpods-pro-2nd-generation-with-ma-287824",


    "https://mobileplanet.ua/ua/apple-tv-4k-2022-wi-fi-plus-ethernet-128-261555",
    "https://mobileplanet.ua/ua/apple-tv-4k-2022-vi-fi-64-gb-mn873-262515",

    "https://mobileplanet.ua/ua/apple-pencil-pro-mx2d3-315166",
    "https://mobileplanet.ua/ua/apple-pencil-2023-usb-c-muwa3-297389",
    "https://mobileplanet.ua/ua/apple-pencil-for-ipad-pro-2018-mu8f2-2nd-93120",
    "https://mobileplanet.ua/ua/apple-pencil-for-ipad-pro-mk0c2-23909",

    "https://mobileplanet.ua/ua/apple-magic-keyboard-for-ipad-pro-11-m4-320091",
    "https://mobileplanet.ua/ua/apple-magic-keyboard-for-ipad-pro-11-m4-322947",
    "https://mobileplanet.ua/ua/apple-magic-keyboard-dlya-ipad-pro-13-m4-320090",
    "https://mobileplanet.ua/ua/apple-magic-keyboard-dlya-ipad-pro-13-m4-319888",
    "https://mobileplanet.ua/ua/apple-smart-keyboard-magic-mxqt2-for-ipa-164089",
    "https://mobileplanet.ua/ua/apple-magic-keyboard-for-ipad-pro-11-3rd-219893",
];

const arrLinkGroACS = [
    "https://grokholsky.com/ua/product/apple/accessories/airpods/airpods-with-charging-case-mv7n2/",
    "https://grokholsky.com/ua/product/apple/accessories/airpods/airpods-3rd-generation-with-lightning-charging-case-mpny3/",
    "https://grokholsky.com/ua/product/apple/accessories/airpods/airpods-3rd-generation-mme73/",

    "https://grokholsky.com/ua/product/apple/accessories/airpods-max/airpods-max-sky-blue-mgyl3/",
    "https://grokholsky.com/ua/product/apple/accessories/airpods-max/airpods-max-green-mgyn3/",
    "https://grokholsky.com/ua/product/apple/accessories/airpods-max/airpods-max-pink-mgym3/",
    "https://grokholsky.com/ua/product/apple/accessories/airpods-max/airpods-max-silver-mgyj3/",
    "https://grokholsky.com/ua/product/apple/accessories/airpods-max/airpods-max-space-gray-mgyh3/",

    "https://grokholsky.com/ua/product/apple/accessories/airpods/airpods-pro-2nd-generation-mqd83/",
    "https://grokholsky.com/ua/product/apple/accessories/airpods/airpods-pro-2nd-generation-with-magsafe-charging-case-usb-c-mtjv3/",
    "https://grokholsky.com/ua/product/apple/accessories/airpods/airpods-pro-with-magsafe-charging-case-mlwk3/",

    "https://grokholsky.com/ua/product/apple/accessories/apple-tv/apple-tv-4k-2021-64gb-mxh02/",
    "https://grokholsky.com/ua/product/apple/accessories/apple-tv/tv-4k-2022-wi-fi-ethernet-128-gb-mn893/",
    "https://grokholsky.com/ua/product/apple/accessories/apple-tv/tv-4k-2022-wi-fi-64-gb-mn873/",

    "https://grokholsky.com/ua/product/apple/accessories/pencil/pencil-pro-mx2d3/",
    "https://grokholsky.com/ua/product/apple/accessories/pencil/pencil-usb-c-muwa3/",
    "https://grokholsky.com/ua/product/apple/accessories/pencil/pencil-2-for-ipad-pro/",
    "https://grokholsky.com/ua/product/apple/accessories/pencil/apple-pencil-for-ipad-pro/",

    "https://grokholsky.com/ua/product/apple/accessories/klaviatura/chehol-magic-keyboard-for-ipad-pro-11-m4-black-mwr23/",
    "https://grokholsky.com/ua/product/apple/accessories/klaviatura/chehol-magic-keyboard-for-ipad-pro-11-m4-white-mwr03/",
    "https://grokholsky.com/ua/product/apple/accessories/klaviatura/chehol-magic-keyboard-for-ipad-pro-13-m4-black-mwr53/",
    "https://grokholsky.com/ua/product/apple/accessories/klaviatura/chehol-magic-keyboard-for-ipad-pro-13-m4-white-mwr43/",
    "https://grokholsky.com/ua/product/apple/accessories/klaviatura/magic-keyboard-for-ipad-pro-11-3rd-gen-and-ipad-air-4th-gen-us-english-black-mxqt2/",
    "https://grokholsky.com/ua/product/apple/accessories/klaviatura/magic-keyboard-for-ipad-pro-11-3rd-gen-and-ipad-air-4th-gen-us-english-white-mjqj3/",
];

const arrLinkPcShopACS = [
    "https://pcshop.ua/ua/apple-store-ua/AirPods-HomePod/naushniki-besprovodnie-apple-airpods-2-with-charging-case-mv7n2",
    "https://pcshop.ua/ua/apple-store-ua/AirPods-HomePod/naushniki-besprovodnie-apple-airpods-3-2021-mpny3",
    "https://pcshop.ua/ua/apple-store-ua/AirPods-HomePod/naushniki-besprovodnie-apple-airpods-3-with-magsafe-2021-mme73",

    "https://pcshop.ua/ua/apple-store-ua/AirPods-HomePod/naushniki-besprovodnie-apple-airpods-max-sky-blue-mgyl3",
    "https://pcshop.ua/ua/apple-store-ua/AirPods-HomePod/naushniki-besprovodnie-apple-airpods-max-green-mgyn3",
    "https://pcshop.ua/ua/apple-store-ua/AirPods-HomePod/naushniki-besprovodnie-apple-airpods-max-pink-mgym3",
    "https://pcshop.ua/ua/apple-store-ua/AirPods-HomePod/naushniki-besprovodnie-apple-airpods-max-silver-mgyj3",
    "https://pcshop.ua/ua/apple-store-ua/AirPods-HomePod/naushniki-besprovodnie-apple-airpods-max-space-gray-mgyh3",

    "https://pcshop.ua/ua/apple-store-ua/AirPods-HomePod/naushniki-besprovodnie-apple-airpods-pro-2nd-generation-mqd83",
    "https://pcshop.ua/ua/apple-store-ua/AirPods-HomePod/naushniki-besprovodnie-apple-airpods-pro-2nd-generation-usb-c-mtjv3",


    "https://pcshop.ua/ua/tv-i-audio-tehnika/SmartTV/mediapleer-apple-tv-4k-2021-64gb-mxh02",
    "https://pcshop.ua/ua/tv-i-audio-tehnika/SmartTV/mediapleer-apple-tv-4k-2022-wi-fi-ethernet-128-gb-mn893",
    "https://pcshop.ua/ua/tv-i-audio-tehnika/SmartTV/mediapleer-apple-tv-4k-2022-wi-fi-64-gb-mn873",

    "https://pcshop.ua/ua/apple-store-ua/Accessories-apple/stilus-apple-pencil-pro-mx2d3",
    "https://pcshop.ua/ua/apple-store-ua/Accessories-apple/stilus-apple-pencil-usb-c-muwa3-2023",
    "https://pcshop.ua/ua/apple-store-ua/Accessories-apple/stilus-apple-pencil-2nd-generation-mu8f2",
    "https://pcshop.ua/ua/apple-store-ua/Accessories-apple/stilus-apple-pencil-1-mk0c2",

    "https://pcshop.ua/ua/apple-store-ua/Accessories-apple/chehol-klaviatura-apple-magic-keyboard-dlya-ipad-pro-11-2024-mezhdunarodnaya-anglijskaya-raskladka-black-mwr23ll-a",
    "https://pcshop.ua/ua/apple-store-ua/Accessories-apple/chehol-klaviatura-apple-magic-keyboard-dlya-ipad-pro-11-2024-us-english-white-mwr03ll-a",
    "https://pcshop.ua/ua/apple-store-ua/Accessories-apple/chehol-klaviatura-apple-magic-keyboard-dlya-ipad-pro-13-2024-us-english-black-mwr53ll-a",
    "https://pcshop.ua/ua/apple-store-ua/Accessories-apple/chehol-klaviatura-apple-magic-keyboard-dlya-ipad-pro-13-2024-us-english-white-mwr43ll-a",
    "https://pcshop.ua/ua/apple-store-ua/Accessories-apple/chehol-klaviatura-apple-magic-keyboard-dlya-ipad-pro-11-2020-mezhdunarodnaya-anglijskaya-raskladka-mxqt2ll-a",
    "https://pcshop.ua/ua/apple-store-ua/Accessories-apple/chehol-klaviatura-apple-magic-keyboard-dlya-ipad-pro-11-2021-ipad-air-10-9-2020-mezhdunarodnaya-anglijskaya-raskladka-white-mjqj3",
];

const arrLinkMtaACS = [
    "https://mta.ua/stilycu/900304-stilys-apple-pencil-pro-mx2d3",
    "https://mta.ua/stilycu/854560-stilys-apple-pencil-usb-c-2023-white-muwa3",
    "https://mta.ua/stilycu/125902-stylus-jemnisnyy-apple-pencil-2nd-generation-model-a2051-white",
    "https://mta.ua/stilycu/78831-stylus-jemnisnyy-apple-pencil-1st-generation-mk0c2zm-a",
];

async function f() {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();


    for (let i = 0; i < arrLinkJabkoACS.length; i += 1) {
        await page.goto(arrLinkJabkoACS[i]);
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
    for (let i = 0; i < arrLinkTouchACS.length; i += 1) {
        await page.goto(arrLinkTouchACS[i]);
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
    for (let i = 0; i < arrLinkEstoreACS.length; i += 1) {
        await page.goto(arrLinkEstoreACS[i]);
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
    for (let i = 0; i < arrLinkIstoreACS.length; i += 1) {
        await page.goto(arrLinkIstoreACS[i]);
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
    for (let i = 0; i < arrLinkMobilePlanetACS.length; i += 1) {
        await page.goto(arrLinkMobilePlanetACS[i]);
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
    for (let i = 0; i < arrLinkGroACS.length; i += 1) {
        await page.goto(arrLinkGroACS[i]);
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



    for (let i = 0; i < arrLinkPcShopACS.length; i += 1) {
        await page.goto(arrLinkPcShopACS[i]);
        const n = await page.$("#txt");

        let arr3 = await page.evaluate(() => {
            let text2 = document.querySelector("h1").innerText;
            if (document.querySelector(".product-info__price") != null) {
                return (
                    text2 + "PcShop: " + document.querySelector(".product-info__price").innerText
                );
            } else {
                return text2;
            }
        });

        console.log(arr3);
        await page.setDefaultNavigationTimeout(0);
    }
    for (let i = 0; i < arrLinkMtaACS.length; i += 1) {
        await page.goto(arrLinkMtaACS[i]);
        const n = await page.$("#txt");

        let arr3 = await page.evaluate(() => {
            let text2 = document.querySelector("h1").innerText;
            if (document.querySelector(".product__prices_big") != null) {
                return (
                    text2 + "Mta: " + document.querySelector(".product__prices_big").innerText
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
