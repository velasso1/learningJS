const title = 'Velasso Project';
let screens = 'Простые, сложные, интерактивные';
let screenPrice = 2500;
let rollback = 58;
let fullPrice = 999999;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log(`Стоимость верстки экранов ${screenPrice} рублей/долларов/гривен/юаней`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей/долларов/гривен/юаней`);

console.log(screens.toLowerCase(), screens.split(", "));

console.log((fullPrice * rollback) / 100);
