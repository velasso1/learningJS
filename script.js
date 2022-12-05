'use strict';

// Ex. 3-6;
const title = prompt('Как называется ваш проект?');
const screens = prompt('Какие типы экранов нужно разработать?');
const screenPrice = prompt('Сколько будет стоить данная работа?');
const adaptive = alert('Нужен ли адаптив на сайте?');

// Ex. 7;
const service1 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice1 = prompt('Сколько это будет стоить?');
const service2 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice2 = prompt('Сколько это будет стоить?');

// Ex. 8;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;

// Ex. 9;
const rollback = 2500;
let servicePercentPrice = fullPrice - rollback;
console.log(Math.ceil(servicePercentPrice));

// Ex. 10;
if (fullPrice > 30000) {
    console.log('Даём скидку в 10%');
} else if (fullPrice >= 15000 && fullPrice <= 30000) {
    console.log('Даём скидку в 5%');
} else if (fullPrice >= 0 && fullPrice < 15000) {
    console.log('Скидка не предусмотрена');
} else {
    console.log('Что-то пошло не так');
}