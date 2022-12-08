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
        screenPrice = prompt('Сколько будет стоить данная работа?');
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
        sum += +prompt('Сколько это будет стоить?');

    }
    return sum;
    // return servicePrice1 + servicePrice2;

};

function getFullPrice() {
    return screenPrice + allServicePrices;
}

const getTitle = function () {
    title = title.trim();
    return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
};

const getServicePercentPrices = function (price, rolback) {
    servicePercentPrice = price - (price * (rolback / 100));
    return Math.ceil(servicePercentPrice);
};


asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log('allServicePrices', allServicePrices);

let sreensLower = screens.toLowerCase();
console.log(sreensLower.split(", "));

console.log(getRollbackMessage(fullPrice));

console.log(getServicePercentPrices(fullPrice, rollback));