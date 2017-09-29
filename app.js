'use strict';

var userPoints = 0;

console.log('hello :)');
alert('welcome to my guessing game');

var user = prompt('what is your name');
alert('hi ' + user + ', I am so glad you want to play my game');

var answer = prompt('Is my favorite color blue?').toLowerCase();
console.log(answer);

if(answer === 'yes' || answer === 'y') {
  userPoints++;
} else {
  alert('wrong');
}

alert('you have' + userPoints + 'points');

var answer = prompt('Is my hair brown?').toLowerCase();
console.log(answer);

if(answer === 'yes' || answer === 'y') {
  userPoints++;
} else {
  alert('wrong');
}

alert('you have' + userPoints + 'points');

var answer1 = prompt('Are hoodies my favorite clothing?').toLowerCase();
console.log(answer1);

if(answer1 === 'yes' || answer1 === 'y') {
  userPoints++;
} else {
  alert('wrong');
}

alert('you have' + userPoints + 'points');

var answer2 = prompt('Do I like videogames?').toLowerCase();
console.log(answer2);

if(answer2 === 'yes' || answer2 === 'y') {
  userPoints++;
} else {
  alert('wrong');
}

alert('you have' + userPoints + 'points');

var answer3 = prompt('Do I have dogs?').toLowerCase();
console.log(answer3);

if(answer3 === 'yes' || answer3 === 'y') {
  userPoints++;
} else {
  alert('wrong');
}

alert('you have' + userPoints + 'points');

var answer4 = prompt('Is pizza my favorite food?').toLowerCase();
console.log(answer4);

if(answer4 === 'yes' || answer4 === 'y') {
  userPoints++;
} else {
  alert('wrong');
}

alert('you have' + userPoints + 'points');
