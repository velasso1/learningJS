'use strict';

let title = prompt('Как называется ваш проект?', 'Калькулятор');
const screens = prompt('Какие типы экранов нужно разработать?', 'Большие, Сложные, Интерактивные');
const screenPrice = +prompt('Сколько будет стоить данная работа?', 20000);

const adaptive = confirm('Нужен ли адаптив на сайте?');

const service1 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice1 = +prompt('Сколько это будет стоить?');
const service2 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice2 = +prompt('Сколько это будет стоить?');


let fullPrice;
let servicePercentPrice;
let allServicePrices;

const rollback = 58;





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


const getAllServicePrices = function () {
    return servicePrice1 + servicePrice2;

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



allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log('allServicePrices', allServicePrices);

console.log(sreensLower.split(", "));

console.log(getRollbackMessage(fullPrice));

console.log(getServicePercentPrices(fullPrice, rollback));