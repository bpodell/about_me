'use strict';

var score = 0;

console.log('Initialized properly');
alert('Welcome to my guessing game');

var user = prompt('What is your name?');
alert('Hi ' + user + ', this guessing game will teach you more about me, Bill, the programmer of this code! XD');
console.log('users name ' + user);

var colorBlue = prompt('Is my favorite color blue?').toLowerCase();
console.log('favorite color guess ' + colorBlue);
if(colorBlue === 'yes' || colorBlue === 'y') {
  score++;
  alert('Congrats, you have ' + score + ' points');
} else {
  alert('Sorry :(, better luck on the next one!');
}

var hairColor = prompt('Is my hair brown?').toLowerCase();
console.log('hair color guess ' + hairColor);
if(hairColor === 'yes' || hairColor === 'y') {
  score++;
  alert('Congrats, you have ' + score + ' points');
} else {
  alert('Sorry :(, better luck on the next one!');
}

var hoodie = prompt('Are hoodies my favorite clothing?').toLowerCase();
console.log('hoodie guess ' + hoodie);
if(hoodie === 'yes' || hoodie === 'y') {
  score++;
  alert('Congrats, you have ' + score + ' points');
} else {
  alert('Sorry :(, better luck on the next one!');
}

var videogame = prompt('Do I like videogames?').toLowerCase();
console.log('videogame guess ' + videogame);
if(videogame === 'yes' || videogame === 'y') {
  score++;
  alert('Congrats, you have ' + score + ' points');
} else {
  alert('Sorry :(, better luck on the next one!');
}

var dogs = prompt('Do I have dogs?').toLowerCase();
console.log('dogs guess ' + dogs);
if(dogs === 'yes' || dogs === 'y') {
  score++;
  alert('Congrats, you have ' + score + ' points');
} else {
  alert('Sorry :(, better luck on the next one!');
}
