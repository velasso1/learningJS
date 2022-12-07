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


let fullPrice = screenPrice + servicePrice1 + servicePrice2;



let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)));

if (fullPrice >= 30000) {
    console.log('Даём скидку в 10%');
} else if (fullPrice >= 15000) {
    console.log('Даём скидку в 5%');
} else {
    console.log('Скидка не предусмотрена');
}




console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей`);

let sreensLower = screens.toLowerCase();
console.log(sreensLower.split(", "));

console.log(servicePercentPrice);
