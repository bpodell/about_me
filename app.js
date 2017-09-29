'use strict';

var score = 0;

function question(val){
  if(val === 'yes' || val === 'y') {
    score++;
    alert('Congrats, you have ' + score + ' points');
  } else {
    alert('Sorry :(, better luck on the next one!');
  }
}

console.log('Initialized properly');
alert('Welcome to my guessing game');

var user = prompt('What is your name?');
alert('Hi ' + user + ', this guessing game will teach you more about me, Bill, the programmer of this code! XD');
console.log('users name ' + user);

var colorBlue = prompt('Is my favorite color blue?').toLowerCase();
console.log('favorite color guess ' + colorBlue);

question (colorBlue);

var hairColor = prompt('Is my hair brown?').toLowerCase();
console.log('hair color guess ' + hairColor);

question(hairColor);

var hoodie = prompt('Are hoodies my favorite clothing?').toLowerCase();
console.log('hoodie guess ' + hoodie);

question(hoodie);

var videogame = prompt('Do I like videogames?').toLowerCase();
console.log('videogame guess ' + videogame);

question(videogame);

var dogs = prompt('Do I have dogs?').toLowerCase();
console.log('dogs guess ' + dogs);

question(dogs);
