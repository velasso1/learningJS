'use strict';

const title = document.getElementsByTagName('h1')[0];
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

const inputRange = document.querySelector('div.rollback input[type=range]');
const inputRangeValue = document.querySelector('div.rollback span.range-value');

const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const inputTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen');

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    fullPrice: 0,
    servicePercentPrice: 0,
    allServicePrices: 0,
    services: {},
    rollback: 0.9,
    asking: function () {

        do {
            appData.title = prompt('Как называется ваш проект?', 'Калькулятор');
        } while (!appData.isString(appData.title));


        for (let i = 0; i < 2; i++) {
            let name;

            do {
                name = prompt('Какие типы экранов нужно разработать?');
            } while (!appData.isString(name));

            let price = 0;

            do {
                price = prompt('Сколько будет стоить данная работа?');
            } while (!appData.isNumber(price));

            appData.screens.push({ id: i, name: name, price: price });
        }

        for (let i = 0; i < 2; i++) {
            let name;

            do {
                name = prompt('Какой дополнительный тип услуги нужен?');
            } while (!appData.isString(name));

            let price = 0;

            price = prompt('Сколько это будет стоить?');

            while (!appData.isNumber(price)) {
                price = prompt('Сколько это будет стоить?');
            }

            appData.services[name] = +price;
        }

        appData.adaptive = confirm('Нужен ли адаптив на сайте?');

    },

    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }

        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }
    },

    isString: function (str) {
        return typeof str === 'string' && str !== null;
    },

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num) && num !== null;
    },

    getRollbackMessage: function (price) {
        if (price >= 30000) {
            return 'Даём скидку в 10%';
        } else if (price >= 15000) {
            return 'Даём скидку в 5%';
        } else {
            return 'Скидка не предусмотрена';
        }
    },

    getFullPrice: function () {
        appData.fullPrice = parseInt(appData.screenPrice) + appData.allServicePrices;
    },

    getTitle: function () {
        appData.title = appData.title.trim().charAt(0).toUpperCase() + appData.title.slice(1).toLowerCase();
    },

    getServicePercentPrices: function () {
        appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
    },

    start: function () {
        appData.asking();
        appData.addPrices();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.getTitle();

        appData.logger();
    },

    logger: function () {
        for (let key in appData) {
            console.log(key);
        }
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
    }
};


appData.start();



