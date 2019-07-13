'use strict';

var counter = 0;
var firstName = 'Rani';
var secondName = 'Raja';
//list that holds pics of cats - all global variables
const cats = ['img/cat.jpg',
				'img/purr.jpg',
				'img/meow.jpg',
				'img/cuddles.jpg',
				'img/claws.jpg',
				'img/catte.jpg'];

document.addEventListener('DOMContentLoaded', (event) => {
	displaycatsList(cats);
});


function increment() {
	counter += 1;
	clickCount.innerHTML = counter;
};

function displaycatsList(array) {
	document.querySelector('.playerList').innerHTML ="";
	const createUlTag = document.createElement('ul');
	createUlTag.setAttribute('class', 'cats');

	array.forEach(function(element) {
		const createLiTag = document.createElement('li');
		const createImgTag = document.createElement('img');
		createImgTag.setAttribute('class','playerPic');
		createImgTag.setAttribute('src',element);
		createImgTag.setAttribute('alt',element.substr(4,4) +" picture");
		createLiTag.appendChild(createImgTag);
		createUlTag.appendChild(createLiTag);
		createImgTag.addEventListener('click', (function(ele) {
        return function() {
        	document.querySelector('#currentCat').innerHTML ='';
        	clickCount.innerHTML = 0;
        	counter =0;
        	const createFigCapTag = document.createElement('figcaption');
        	createFigCapTag.setAttribute('id',element.substr(4,4) +" name")
        	const imgTag = document.createElement('img');
			imgTag.setAttribute('src',element);
			imgTag.setAttribute('class','currentCatImage');
			imgTag.setAttribute('alt',element.substr(4,4) +" picture");
            document.querySelector('#currentCat').appendChild(createFigCapTag);
            document.querySelector('#currentCat').appendChild(imgTag);
            document.querySelector('#currentCat').addEventListener('click',increment);
        };
    	})(element));

	});
	document.querySelector('.playerList').appendChild(createUlTag);
};