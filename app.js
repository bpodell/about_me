'use strict';

var score = 0;
//
// console.log('Initialized properly');
// alert('Welcome to my guessing game');
//
// var user = prompt('What is your name?');
// alert('Hi ' + user + ', this guessing game will teach you more about me, Bill, the programmer of this code! XD');
// console.log('users name ' + user);
//
// while(!user) {
//   user = prompt('name is required');
// }
// // Question 1
// var colorBlue = prompt('Is my favorite color blue?').toLowerCase();
// console.log('favorite color guess ' + colorBlue);
// if(colorBlue === 'yes' || colorBlue === 'y') {
//   score++;
//   alert('Congrats, you have ' + score + ' points');
// } else {
//   alert('Sorry :(, better luck on the next one!');
// }
// // Question 2
// var hairColor = prompt('Is my hair brown?').toLowerCase();
// console.log('hair color guess ' + hairColor);
// if(hairColor === 'yes' || hairColor === 'y') {
//   score++;
//   alert('Congrats, you have ' + score + ' points');
// } else {
//   alert('Sorry :(, better luck on the next one!');
// }
// // Question 3
// var hoodie = prompt('Are hoodies my favorite clothing?').toLowerCase();
// console.log('hoodie guess ' + hoodie);
// if(hoodie === 'yes' || hoodie === 'y') {
//   score++;
//   alert('Congrats, you have ' + score + ' points');
// } else {
//   alert('Sorry :(, better luck on the next one!');
// }
// // Question 4
// var videogame = prompt('Do I like videogames?').toLowerCase();
// console.log('videogame guess ' + videogame);
// if(videogame === 'yes' || videogame === 'y') {
//   score++;
//   alert('Congrats, you have ' + score + ' points');
// } else {
//   alert('Sorry :(, better luck on the next one!');
// }
// // Question 5
// var dogs = prompt('Do I have dogs?').toLowerCase();
// console.log('dogs guess ' + dogs);
// if(dogs === 'yes' || dogs === 'y') {
//   score++;
//   alert('Congrats, you have ' + score + ' points');
// } else {
//   alert('Sorry :(, better luck on the next one!');
// }
// Question 6
// var randInt = Math.random() * 10;
// var roundInt = Math.round(randInt);
// console.log(roundInt);
// var ageGuess = prompt('Can you guess the number between 0 and 10?');
// for (var remainingGuess = 4; remainingGuess > 0; remainingGuess--) {
//   var parse = parseInt(ageGuess);
//   if(parse < roundInt) {
//     var ageGuess = prompt('Oops, too low... Try again, you have ' + remainingGuess + ' guesses remaining');
//     console.log('Number guessed was ' + ageGuess);
//   } else if (parse > roundInt){
//     var ageGuess =  prompt('Try a little lower... ' + remainingGuess + ' guesses remaining');
//     console.log('Number guessed was ' + ageGuess);
//   } else if (parse === roundInt){
//     alert('Correct!');
//     score++;
//     remainingGuess = 1;
//   }
// }
// if( parse !== roundInt && remainingGuess === 0) {
//   alert('Sorry, out of guesses');
// }
// console.log('has this many remaining guesses for question 6 ' + remainingGuess);

//Question 7
var pixar = ['up','ratatouille','inside out'];
var remainingGuess2 = 6;
var userIsCorrect = false;

while (remainingGuess2 > 0) {
  var pixarGuess = prompt('Can you guess one of my favorite Pixar movies?').toLowerCase();
  remainingGuess2--;
  for (var i = 0; i < pixar.length; i++){
    if (pixarGuess === pixar[i]){
      userIsCorrect = true;
      score++;
    }
  }
  if (userIsCorrect){
    alert('You got it! My favorite pixar movies are Up, Ratatouille, and Inside Out');
    break;
  }else{
    alert('sorry, try again!');
  }
}

alert('Thank you so much for playing my game! You got ' + score + ' points out of a total 7. Great Job!');


git checkout - b gh-pages
git status
git push origin gh-pages
