'use strict';

let title;
let screens;
let screenPrice;
let adaptive;
let fullPrice;
let servicePercentPrice;
let allServicePrices;
let service1;
let service2;

const rollback = 58;





const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return 'Даём скидку в 10%';
    } else if (price >= 15000) {
        return 'Даём скидку в 5%';
    } else {
        return 'Скидка не предусмотрена';
    }
};

const asking = function () {
    title = prompt('Как называется ваш проект?', 'Калькулятор');
    screens = prompt('Какие типы экранов нужно разработать?', 'Большие, Сложные, Интерактивные');
    // screenPrice = prompt('Сколько будет стоить данная работа?');
    adaptive = confirm('Нужен ли адаптив на сайте?');

    do {
        screenPrice = +prompt('Сколько будет стоить данная работа?');
    } while (!isNumber(screenPrice));

};


const getAllServicePrices = function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?');
        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?');
        }
        // sum += +prompt('Сколько это будет стоить?');

        sum += +prompt('Сколько это будет стоить?');

        while (!isNumber(sum)) {
            alert('Неверное значение');
            sum = +prompt('Сколько это будет стоить?');
        }

        sum = sum.toString();
        sum.trim();
        sum = parseInt(sum);

        console.log('this is', typeof sum);
        console.log(sum);


    }
    return sum;
    // return servicePrice1 + servicePrice2;

};

function getFullPrice(screenPrice, allServicePrices) {
    return screenPrice + allServicePrices;
}

const getTitle = function (title) {
    title.trim();
    return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
};

const getServicePercentPrices = function (fullPrice, rollback) {
    return Math.ceil(fullPrice - (fullPrice * (rollback / 100)));
};


asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);
title = getTitle(title);

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log('allServicePrices', allServicePrices);

let sreensLower = screens.toLowerCase().split(", ");
console.log(sreensLower);

console.log(getRollbackMessage(fullPrice));

console.log(servicePercentPrice);