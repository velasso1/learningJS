'use strict';

const title = prompt('Как называется ваш проект?');
const screens = prompt('Какие типы экранов нужно разработать?', 'Большие, Сложные, Интерактивные');
const screenPrice = +prompt('Сколько будет стоить данная работа?');

const adaptive = confirm('Нужен ли адаптив на сайте?');

const service1 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice1 = +prompt('Сколько это будет стоить?');
const service2 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice2 = +prompt('Сколько это будет стоить?');

const rollback = 58;

let allServicePrices;




let fullPrice = screenPrice + servicePrice1 + servicePrice2;

let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)));

let sreensLower = screens.toLowerCase();

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


const getAllServicePrices = function (service1, service2) {
    allServicePrices = service1 + service2;
    return allServicePrices;
};

function getFullPrice(price1, price2) {
    fullPrice = price1 + price2;
    return fullPrice;
}

const getTitle = function (str) {
    str = str.trim();
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const getServicePercentPrices = function (price, rolback) {
    servicePercentPrice = price - (price * (rolback / 100));
    return Math.ceil(servicePercentPrice);
};




showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(sreensLower.split(", "));

console.log(getRollbackMessage(fullPrice));

console.log(getServicePercentPrices(fullPrice, rollback));