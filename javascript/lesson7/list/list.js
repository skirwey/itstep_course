/*let div = document.getElementById("root");
let ul = document.createElement("ul");

div.append(ul);

let text = '';
while(text = prompt('Введите значения для пукнта списка')) {
    let li = document.createElement("li");
    li.innerText = text;
    ul.append(li);
};*/








let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },
    "Деревья": {
        "Огромные": {
        "секвойя": {},
        "дуб": {}
    },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};

let div = document.getElementById("root");

function newCreateTree(container, data) {
    let ul = document.createElement("ul");

    for(let key in data) {
        let li = document.createElement("li");
        li.innerText = key;

        if(data[key]) {
            newCreateTree(li, data[key]);
        }

        ul.append(li);
    }

    container.append(ul);
}

newCreateTree(div, data);

function createTree(container, data) {
    let ul = document.createElement("ul");

    for(let key in data) {
        let li = document.createElement("li");
        li.innerText = key;

        if(data[key]) {
            let ulInner = document.createElement("ul");

            for(let key1 in data[key]) {
                let li1 = document.createElement("li");
                li1.innerText = key1;

                if(data[key][key1]) {
                    let ulSuperInner = document.createElement("ul");

                    for(let key2 in data[key][key1]){
                        let li2 = document.createElement("li");
                        li2.innerText = key2;

                        ulSuperInner.append(li2);
                    }

                    li1.append(ulSuperInner);
                }

                ulInner.append(li1);
            }

            li.append(ulInner);
        }

        ul.append(li);
    }
    container.append(ul);
}

createTree(div, data);







/*function showNotification(options) {
    let div = document.createElement("div");

    div.classList.add("notification");

    if(options.className) {
        div.classList.add(options.className);
    }

    div.style.top = options.top + "px";
    div.style.right = options.right + "px";

    div.innerText = options.html;

    document.body.prepend(div);

    setTimeout(function(){
        div.classList.add("hide");
        setTimeout(function(){div.remove()},1000);
    },1500);
}



function notify(){
    let top = randomInteger(0, 400);
    let right = randomInteger(0, 600);

    showNotification({
        top: top,
        right: right,
        html: "Ошибка! Вы ввели неверные данные",
        className: "error"
    });
}

function randomInteger(min, max) {
    let rand = min  + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

setInterval(notify, 1000);*/