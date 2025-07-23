/*let n = +prompt('Введите число');
while (n<2) {
    n = +prompt('Введите число больше 2');
}

let m = +prompt('Введите стпень числа');
console.log(`Результат равен ${n**m}`);


let a = 5;
while (a > 0) {
    console.log('#');
    a--;
}


let a = 5;
while (a >= 0) {
    console.log(a);
    a--;
}


let n = 2;
let m = 3;
let result = 1;
let i = 1;
while (i <= m) {
    result = result * n;
    console.log(`Промежуточный - ${result}`);
    i++;   
}
console.log(`Результат - ${result}`);



let n = 5;
let result = 1;
let i = 1;
while (i <= n) {
    result = result * i;
    i++;
    console.log(result);
}



let num = 45;
let result = 1;
do {
    result = +prompt('Угадай число');
}
while (result != num);


for (let j = 1; j <= 10; j+=2) {
    console.log(j);
}



let a = 1000;
let b = 2;
let result = 1;

do {
    a = a/b;
}
while (a >= 50)
console.log(a)



function num (a, b) {
    if (a < b) {
        return a;
    }
    else {
        return b;
    }
}
console.log(num(7, 4));*/


function num(a, b) {
    let result = a**b;
}
console.log(num(2, 3));