let ul = document.body.children[2];

console.dir(ul);

ul.firstElementChild.style.textTransform = 'uppercase';
ul.lastElementChild.style.color = 'red';

//ul.innerHTML = '<li>Это только одна строка</li>';

ul.previousElementSibling.style.fontSize = '20px';
ul.parentElement.id = 'page-body';

console.log(ul.getAttribute('id'))
//ul.setAttribute('class', 'superlist');

ul.classList.add('normalized');

if(ul.classList.contains('underlined')) {
    ul.classList.remove('underlined');
} else {
    ul.classList.add('underlined');
}

let block = document.getElementById ('flexbox');
block.innerText = "Hello from founded block!!!";
block.classList.add('bordered', 'd-flex');

let blocks = document.getElementsByClassName ('example');
block = blocks[0];
block.classList.add('padding-10');

blocks = document.getElementsByTagName('div');

block = document.querySelector('.example');
block.classList.remove('padding-10');
blocks = document.querySelectorAll('.example');
block = blocks[0];


let text = document.getElementById ('textAlign');
text.classList.add('t-align');

let a = document.querySelector('a');
a.innerHTML = '<img src="https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-free-desktop-wallpaper-beautiful-green-fields-image_2950823.jpg" alt="">'

ul = document.querySelector('#list');
ul.lastElementChild.style.textAlign = 'right';
ul.firstElementChild.style.textAlign = 'left';
ul.children[1].style.textAlign = 'center';
ul.children[2].style.textAlign = 'center';