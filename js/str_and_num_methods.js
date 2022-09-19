'use strict';

const str = 'avocado';
console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = 'Some Fruit';

console.log(fruit.indexOf('й'));

const logg = 'Hello world!';
// console.log(logg.slice(-5, -1));
// console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num));

// метод для получения целого числа из строки
const test = '12.2px';
console.log(parseInt(test));

// метод для получения дробного числа из строки
console.log(parseFloat(test));