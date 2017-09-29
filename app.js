'use strict';

var userPoints = 0;

console.log('hello :)');
alert('welcome to my guessing game');

var user = prompt('what is your name');
alert('hi ' + user + ', I am so glad you want to play my game');

var answer = prompt('Is my favorite color blue?').toLowerCase();
console.log('favorite color guess' + answer);

function question(val){
  if(val === 'yes' || val === 'y') {
    userPoints++;
  } else {
    alert('wrong');
  }
}

console.log('this is the question function', question(answer));

alert('you have' + userPoints + 'points');

var colorBlue = prompt('Is my hair brown?').toLowerCase();
console.log('hair color guess' + colorBlue);

question(colorBlue);


alert('you have' + userPoints + 'points');

var hoodie = prompt('Are hoodies my favorite clothing?').toLowerCase();
console.log('hoodie guess' + hoodie);

question(hoodie);


alert('you have' + userPoints + 'points');

var videogame = prompt('Do I like videogames?').toLowerCase();
console.log('videogame guess' + videogame);

question(videogame);


alert('you have' + userPoints + 'points');

var dogs = prompt('Do I have dogs?').toLowerCase();
console.log(dogs);

question(dogs);


alert('you have' + userPoints + 'points');
