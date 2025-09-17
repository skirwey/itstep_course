/*function show1(num1, num2) {
    if(num1 < 0) {
        return;
    } else {
        console.log(`Числа ${num1} и ${num2}`);
    show1(num1 - 1, num2 - 1);
    }
}

show1 (2, 3);

function show2(num1, num2) {
    show1(num1, num2);
}

show2(2, 3);

function showNumbers(start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
    if (start > end) {
        return;
    } else {
        console.log(start);
        showNumbers(start + 1, end);
    }
}

showNumbers(0, 10);*/


function changeLinkText() {
    let a = document.querySelector("a");

    a.innerText = "Это ссылка на Google";
}

let button = document.querySelector("button");

/*button.onclick = changeLinkText;
button.onclick = function(){
    document.body.style.backgroundColor = 'red';
}*/

button.addEventListener('click', changeLinkText);
button.addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
});

button.onclick = function(event) {
    console.dir(event.target);
}

//button.removeEventListener('click', changeLinkText);

/*button.onclick = null;*/

console.dir(button);




function visible() {
    let div = document.getElementById("text");

    div.visible = 0;
}

button.onclick = visible;








