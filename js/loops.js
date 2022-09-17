'use strict';

let num = 50;

// while (num <= 55) {
    // console.log(num);
    // num++;
// }

// do {
    // console.log(num);
    // num++;
// }
// while (num < 55);

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        continue;
    }
    console.log(i);
}

for (let i = 2; i < 11; i += 2) {
    console.log(i);
 }

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let i = 2;
while (i <= 16) {
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
        i++;
    }
}

function fifthTask() {
    const arrayOfNumbers = [];
    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i-5] = i;
    }
}

function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
    const y = arr.lenght();
    for (let i = 0; i < y; i++) {
        result[i] = arr[i];
    }
    

    // Пишем решение вот тут
    
    
    // Не трогаем
    return result;
}

function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for (var i in data) {
        if (typeof(data[i]) == Number) {
            data[i] *= 2;
        }
        if (typeof(data[i]) == String) {
            data[i] += " - done";
        }
    }
    
    // Не трогаем
    return data;
}

secondTask();

function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    const dataRevers = data.reverse;
    for (let i = 0; i < dataRevers.length; i++) {
        result[i] = dataRevers[i];
    }
    
    // Не трогаем
    return result;
}