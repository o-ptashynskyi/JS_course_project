"use strict";

// предупреждающее сообщение
// alert('Hello');


// эта строка выводит сообщение на которое можно ответить да или нет
// const result = confirm('Are you here?');

// получение ввода от пользователя, тип данных строка
// const answer = prompt("Are you 18?", "18");

// дополнительный плюс в промте превращает ответе пеользователя в интеджер
// const intAnswer = +prompt("What is your age?");

const answers = [];
answers[0] = prompt('what is your name?', "");
answers[1] = prompt('what is your last name?', "");
answers[2] = prompt('what is your age?', "");

document.write(answers);
console.log(typeof(answers));