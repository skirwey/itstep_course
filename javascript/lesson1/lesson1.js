let message = 'Это сообщение';
alert(message);
const COLOR = '#ffffff';

let admin = 'Джон';
let name = admin;
alert(name);

let ourPlanetName = 'Земля';
let currentUserName = "Джон";

let age = 17;
let hugeNumber = 345252543453453453453n;
let namee = 'Yana';
namee = `My name is Yana, ${age} years old.`;
alert(namee);
let money = null;
let happyDay = undefined;
alert(typeof age);

let nameee = "Ilya";
// выражение - число 1
alert( `hello ${1}` ); // hello 1
// выражение - строка "name"
alert( `hello ${"name"}` ); // hello name
// выражение - переменная, вставим её в строку
alert( `hello ${nameee}` ); // hello Ilya

let agee = prompt('Введите свой возраст');
alert(`Ваш возраст ${agee} лет.`);
let ageee = confirm('Вам уже есть 18 лет?');
alert(ageee);