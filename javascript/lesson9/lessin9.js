let button = document.querySelector("button");
let div = document.querySelector("div");

div.addEventListener('click', function(event) {
    this.style.borderColor = 'red';
    if(event.target.tagName.toLowerCase() == 'button') {
        event.target.classList.toggle("animated");
    }
});

/*button.addEventListener('click', function(event) {
    event.stopPropagation();
    this.parentElement.style.backgroundColor = 'pink';
});*/
