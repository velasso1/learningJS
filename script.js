'use strict';

const title = prompt('Как называется ваш проект?');
const screens = prompt('Какие типы экранов нужно разработать?');
const screenPrice = prompt('Сколько будет стоить данная работа?');
const rollback = 58;
const adaptive = alert('Нужен ли адаптив на сайте?');

// console.log(typeof title);
// console.log(typeof fullPrice);
// console.log(typeof adaptive);

// console.log(screens.length);

// console.log(`Стоимость верстки экранов ${screenPrice} рублей/долларов/гривен/юаней`);
// console.log(`Стоимость разработки сайта ${fullPrice} рублей/долларов/гривен/юаней`);

// console.log(screens.toLowerCase(), screens.split(", "));

// console.log(fullPrice * (rollback / 100));


// Ex. 7;
const service1 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice1 = prompt('Сколько это будет стоить?');
const service2 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice2 = prompt('Сколько это будет стоить?');

// Ex. 8;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;

// Ex. 9;
let servicePercentPrice = Math.ceil(fullPrice - (rollback / 100));
console.log(servicePercentPrice);

// Ex. 10;
if (fullPrice >= 30000) {
    console.log('Даём скидку в 10%');
} else if (fullPrice >= 15000) {
    console.log('Даём скидку в 5%');
} else {
    console.log('Скидка не предусмотрена');
}


