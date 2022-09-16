'use strict';

// || - логический оператор ИЛИ
// && - логический оператор И
// ! - возвращает обратное булево значение

const hamburger = 0,
      fries = 0,
      cola = 0;

// console.log(hamburger || cola || fries);

if (hamburger || cola || fries) {
    console.log('Im fine!');
} else {
    console.log('go out!');
}


let john_report, alex_report, sam_report, maria_report = 'done';

console.log(john_report || alex_report|| sam_report || maria_report); 