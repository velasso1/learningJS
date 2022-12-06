'use strict';

const title = prompt('Как называется ваш проект?');
const screens = prompt('Какие типы экранов нужно разработать?');
const screenPrice = prompt('Сколько будет стоить данная работа?');

const adaptive = alert('Нужен ли адаптив на сайте?');

const service1 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice1 = prompt('Сколько это будет стоить?');
const service2 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice2 = prompt('Сколько это будет стоить?');

const rollback = 58;

let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.ceil(fullPrice - (rollback / 100));

let allServicePrices;





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
    return str.charAt(0).toUpperCase();
};


showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));

console.log(screens.length);

console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей`);

console.log(screens.toLowerCase(), screens.split(", "));

console.log(fullPrice * (rollback / 100));

console.log(servicePercentPrice);



const getTiftle = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

console.log(getTiftle('hello'));
