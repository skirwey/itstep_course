/*let numbers = [3, 4, 6, 8, 10, -5, 123];
let arr = [3, {name: "John"}, "Daryl", function(){console.log('Hi!!!')}];

console.log(`Значение массива ${numbers[3]}`);
arr[3]();

for(let i = 0; i < numbers.length; i++) {
    console.log(`${numbers[i]} в квадрате будет ${numbers[i]**2}`);
}*/







class Product{
    constructor(productName, productCount, productIsBought, productPrice){
        this.name = productName;
        this.count = productCount;
        this.isBought = productIsBought;
        this.price = productPrice;
    }
}


let producs_list = [
    new Product("Хлеб", 1, true, 10),
    new Product("Молоко", 3, false, 4),
    new Product("Яблоко", 8, true, 5),
    new Product("Творог", 4, false, 3.50),
    new Product("Кофе", 2, false, 7.90),
    new Product("Огурец", 5, true, 6.20),
];

function showBill (massivTovarov) {
    for(tovar of massivTovarov) {
        console.log(`Товар ${tovar.name}, количество - ${tovar.count}, цена - ${tovar.count * tovar.price}`);
    }
}




function totalPrice (massivTovarov) {
    let result = 0;
    for (tovar of massivTovarov) {
        let price = tovar.count * tovar.price;
        result += price;
    }
    console.log(`Общая цена ${result.toFixed(2)}`);
}


function maxPriceProduct(massivTovarov) {
    let resultProduct = null;
    let totalProductPrice = 0;

    massivTovarov.forEach(function(product){
        let price = product.count * product.price;
        if(price > totalProductPrice) {
            resultProduct = product;
            totalProductPrice = price;
        }
    });
    console.log(`Самая дорогая покупка в чеке это ${resultProduct.name}`);
}


function srednee (massivTovarov) {
    let resultPrice = 0;
    let resultCount = 0;
    for (tovar of massivTovarov){
        resultPrice += tovar.price * tovar.count;
        resultCount += tovar.count
    }
    let result = resultPrice / resultCount;
    console.log(`Средняя стоимость одного товара в чеке ${result.toFixed(2)}`);
}


function showProductsList(products) {
    console.log(`Некупленные продукты`);
    for(let i = 0; i < products.length; i++) {
        if(products[i].isBought === false) {
            console.log(`${products[i].name}, количество ${products[i].count}`);
        }
    }
    console.log(`Купленные продукты`);
    for(let i = 0; i < products.length; i++) {
        if(products[i].isBought === true) {
            console.log(`${products[i].name}, количество ${products[i].count}`);
        }
    }
}

function addProduct(newProduct) {
    let isProductsExists = false;

    producs_list.forEach(function(product, index){
        if(product.name == newProduct.name){
            isProductsExists = true;
            producs_list[index].count += newProduct.count;
        }
    });

    if(!isProductsExists){
        producs_list.push(newProduct);
    }
    producs_list.push(newProduct);
}

function bay(productName) {
    producs_list.forEach(function(product, index){
        if(product.name == productName){
            producs_list[index].isBought = true;
        }
    });
}

showBill(producs_list);
totalPrice(producs_list);
maxPriceProduct(producs_list);
srednee(producs_list);

/*bay("Молоко");
showProductsList(producs_list)*/
