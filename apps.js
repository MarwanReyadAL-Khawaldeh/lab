'use strict';

// x = 15;
// let x = 15;
// console.log(x);

// let userName = 'waleed';
// console.log(userName);

// var testVar = 'no-var';

let userName = prompt('Please enter your name?');
console.log(userName);

// userName = userName.toLowerCase();

let userAge = prompt('Entter your age please?');
console.log(userAge);

// Number(userName) === 20

// if(userAge >= 20 && userName.toLowerCase() === 'waleed') {
//   alert('Your good to go!!!');
// } else {
//   alert('Your not allowed to be here');
// }

// console.log(typeof (false && 'true'));

// if((180 == 90*2) && (false && 'true')) {

// }

userAge = 19, 22, 24, 30;

switch (userAge) {
  case 19:
  case 30:
    console.log('Your age is', userAge);
    break;
  case 22:
    console.log('Your age is', userAge);
    break;
  case 24:
    console.log('Your age is', userAge);
    break;
  default:
    console.log('You are not allowed');
    break;
}