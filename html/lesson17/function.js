let a = 5;
let b = 6;
let counter = 0;
//let c = (5 + 6) * 7;

function summ(a, b) {
    counter++;
    return a + b;
}

function mul(a,b) {
    return a * b;
}

let c = mul(summ(a, b), b);

function fff(a, b) {
    return (a + b) / Math.random();
}

/*for (let i = 0; i < 10; i++) {
    console.log(i);
}*/

let show = function (i) {
    console.log(i);
}

function cicle (counter, func) {
    if(counter < 0) {
        return;
    }
    func(counter);
    counter--;
    cicle(counter, func);
}

cicle(10, show);

let mass = [1, 2, 4, -1, 6, 9, -3];
let newMass = [];

/*for(let i = 0; i < mass.length; i++) {
    newMass.push(mass[i] * 2);
}

newMass = mass.map(function(item){
    return item * 2;
});

console.log(newMass);

for(let i = 0; i < mass.length; i++){
    if(mass[i] < 0){
    newMass.push(mass[i]);
    }
}
console.log(newMass);

let filtered = [];

 let negativeCondition = function(n) {
     return n < 0;
 }

 let oddCondition = function(n){
    return n % 2 === 0;
 }

 function filter (elements, condition) {
     let result = [];

     elements.forEach(function(element){
         if(condition(element)){
             result.push(element);
         }
     });

     return result;
 }

 console.log(filter(mass, negativeCondition));
 console.log(filter(mass, oddCondition));*/

 let cart = [
     {
        name: "Товар 1",
        count: 2,
        price: 120
     },
     {
        name: "Товар 2",
        count: 1,
        price: 10
     },
     {
        name: "Товар 3",
        count: 10,
        price: 1
     },
 ];

 let totalPrice = cart.reduce(function(item){
     return item.price * item.count;
 }, 0);
 
 let totalCount = 0;

 /*for(let item of cart){
     totalCount += item.count;
     totalPrice += item.count * item.price;
 }*/

 console.log(totalCount);
 console.log(totalPrice);

