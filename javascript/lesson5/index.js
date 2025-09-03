
let num_three = 3;

if (num_three > 0) {
    console.log('Положительное');
} else {
    console.log('Отрицательное');
}

(num_three > 0) ? console.log('Положительное') : console.log('Отрицательное');

let color = 'redd';

/*switch(color) {
    case 'blue':
        console.log('Синий');
    break;

    case 'black':
        console.log('Черный');
    break;

    case 'red':
        console.log('Красный');
    break;

    default:
        console.log('Неопределнно');
}*/

if (color == 'blue') {
    console.log('Синий');
} else if (color == 'red') {
    console.log('Красный');
} else {
    console.log('Неопределенно');
}


function gravity(m1, m2, r) {
    const G = 6.6743e-11;
    let result = G * ( (m1 * m2) / (r ** 2) );
    return result;
}

let g = gravity(80, 90, 1);
console.log(g);

let user = {
    name: 'Developer',
    age: 17,
    say_hi: function() {
        console.log(`Hello, my name is ${this.name}`);
    },
    say_age(){
        console.log(`I am ${this.age} years old`);
    }
}

user.say_hi();
user["say_hi"]();
user.say_age();

function Car(name, year) {
    this.name = name;
    this.year = year;
}

let mersedes = new Car ("Mersedes", 1995);
let mazda = new Car ("Mazda", 1999);

console.log(mersedes);
console.log(mazda);