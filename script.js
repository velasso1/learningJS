'use strict';

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    fullPrice: 0,
    servicePercentPrice: 0,
    allServicePrices: 0,
    service1: '',
    service2: '',
    rollback: 58,
    asking: function () {
        appData.title = prompt('Как называется ваш проект?', 'Калькулятор');
        appData.screens = prompt('Какие типы экранов нужно разработать?', 'Большие, Сложные, Интерактивные');
        appData.adaptive = confirm('Нужен ли адаптив на сайте?');

        do {
            appData.screenPrice = prompt('Сколько будет стоить данная работа?');
        } while (!appData.isNumber(appData.screenPrice));

    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num) && num != null;
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

    getAllServicePrices: function () {
        let sum = 0;
        let answer = 0;

        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
            } else if (i === 1) {
                appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
            }

            answer = prompt('Сколько это будет стоить?');

            while (!appData.isNumber(answer)) {
                answer = prompt('Сколько это будет стоить?');
            }

            sum += parseInt(answer);
        }
        return sum;

    },

    getFullPrice: function (screenPrice, allServicePrices) {
        return parseInt(screenPrice) + allServicePrices;
    },

    getTitle: function (title) {
        title.trim();
        return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
    },

    getServicePercentPrices: function (fullPrice, rollback) {
        return Math.ceil(fullPrice - (fullPrice * (rollback / 100)));
    },

    start: function () {
        appData.asking();
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
        appData.servicePercentPrice = appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
        appData.title = appData.getTitle(appData.title);
        appData.screens.toLowerCase().split(", ");
        console.log(appData.logger());
    },

    logger: function () {
        for (let key in appData) {
            console.log(key);
        }
    }


};


appData.start();



