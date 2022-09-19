'use strict';

let num = 20;


function showFirstMessage(name) {
    console.log('Hello' + ' ' + name);
    let num = 10;
}

showFirstMessage('alex');
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 4));

function ret() {
    let num = 50;
    return num;
}

const another_num = ret();
console.log(another_num);

const logger = function() {
    console.log('hello');
};

logger();

const culc = (a, b) => {return a + b};
const caalc = (a, b) => a + b;


const usd = 28;
const euro = 32;

function convert (amount, curs) {
    return curs * amount;
}

convert(500, usd);
convert(500, euro);

const discount = 0.9;

function promotion(result) {
    console.log(result * discount);
}

promotion(convert(500, usd));

function tet() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log('done');
}

tet();

function do_nothing () {};
console.log(do_nothing() === undefined);

// задания по функциям

function sayHello(name) {
    return `Привет, ${name}!`;
}

function getMathResult(num, repeat) {
    const mass = [];
    if (typeof(num) != 'number' || num <= 0) {
        return num;
    }
    for (let i = 1; i <= repeat; i++) {
        mass[i-1] = num * i;
    }
    const result = mass.join('---');
    return result;
}
console.log(getMathResult(5, 3));