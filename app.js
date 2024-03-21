let title = document.querySelector('h1');
title.innerHTML = 'Hora do desafio';

function consoleButtom(){
    console.log('The buttom was clicked.');
}

function alertButtom(){
    alert('I love JS');
}

function promptCity(){
    let city = prompt('Enter a city in Brazil');
    alert(`I've been in ${city} and I remembered you!`);
}

function addButtom(){
    let numberOne = parseInt(prompt('Enter a number'));
    let numberTwo = parseInt(prompt('Enter another number'));
    let result = numberOne + numberTwo;
    alert(`The amount of ${numberOne} added to ${numberTwo} is ${result}`);
}