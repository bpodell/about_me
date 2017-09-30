'use strict';

var score = 0;

console.log('Initialized properly');
alert('Welcome to my guessing game');

var user = prompt('What is your name?');
alert('Hi ' + user + ', this guessing game will teach you more about me, Bill, the programmer of this code! XD');
console.log('users name ' + user);

while(!user) {
  user = prompt('name is required');
}
// Question 1
var colorBlue = prompt('Is my favorite color blue?').toLowerCase();
console.log('favorite color guess ' + colorBlue);
if(colorBlue === 'yes' || colorBlue === 'y') {
  score++;
  alert('Congrats, you have ' + score + ' points');
} else {
  alert('Sorry :(, better luck on the next one!');
}
// Question 2
var hairColor = prompt('Is my hair brown?').toLowerCase();
console.log('hair color guess ' + hairColor);
if(hairColor === 'yes' || hairColor === 'y') {
  score++;
  alert('Congrats, you have ' + score + ' points');
} else {
  alert('Sorry :(, better luck on the next one!');
}
// Question 3
var hoodie = prompt('Are hoodies my favorite clothing?').toLowerCase();
console.log('hoodie guess ' + hoodie);
if(hoodie === 'yes' || hoodie === 'y') {
  score++;
  alert('Congrats, you have ' + score + ' points');
} else {
  alert('Sorry :(, better luck on the next one!');
}
// Question 4
var videogame = prompt('Do I like videogames?').toLowerCase();
console.log('videogame guess ' + videogame);
if(videogame === 'yes' || videogame === 'y') {
  score++;
  alert('Congrats, you have ' + score + ' points');
} else {
  alert('Sorry :(, better luck on the next one!');
}
// Question 5
var dogs = prompt('Do I have dogs?').toLowerCase();
console.log('dogs guess ' + dogs);
if(dogs === 'yes' || dogs === 'y') {
  score++;
  alert('Congrats, you have ' + score + ' points');
} else {
  alert('Sorry :(, better luck on the next one!');
}
// Question 6
var randInt = Math.random() * 10;
var roundInt = Math.round(randInt);
console.log(roundInt);
var ageGuess = prompt('Can you guess the number between 0 and 10?');
for (var remainingGuess = 4; remainingGuess > 0; remainingGuess--) {
  var parse = parseInt(ageGuess);
  if(parse < roundInt) {
    var ageGuess = prompt('Oops, too low... Try again, you have ' + remainingGuess + ' guesses remaining');
    console.log('Number guessed was ' + ageGuess);
  } else if (parse > roundInt){
    var ageGuess =  prompt('Try a little lower... ' + remainingGuess + ' guesses remaining');
    console.log('Number guessed was ' + ageGuess);
  } else if (parse === roundInt){
    alert('Correct!');
    score++;
    remainingGuess = 1;
  }
}
console.log('has this many remaining guesses for question 6 ' + remainingGuess);

//Question 7
var pixar = ['up','ratatouille','inside out'];
var pixarGuess = prompt('Can you guess one of my favorite Pixar movies?').toLowerCase();
console.log('Guess for question 7 ' + pixarGuess);
for (var remainingGuess2 = 5; remainingGuess2 > 0; remainingGuess2--)
  if(pixarGuess !== pixar[0] && pixarGuess !== pixar[1] && pixarGuess !== pixar[2]) {
    var pixarGuess = prompt('I probably like that one, but its not one of my favorites, but you have ' + remainingGuess2 + ' guesses left to try again').toLowerCase();
    console.log('Guess for question 7 ' + pixarGuess);
  } else if(pixarGuess === pixar[0] || pixarGuess === pixar[1] || pixarGuess === pixar[2]){
    alert('You got it!');
    score++;
    remainingGuess2 = 1;
  }
console.log('This many remaining guesses ' + remainingGuess2);
if(remainingGuess2 === 0) {
  alert('My top three pixar movies are Up, Ratatouille, and Inside Out. :)');
}
alert('Thank you so much for playing my game! You got ' + score + ' points out of a total 7. Great Job!');
