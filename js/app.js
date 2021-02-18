'use strict';



let userName = prompt('Please enter your name?');
console.log(userName);
alert('Welcome' + ' ' + userName);


let counter = 0;


let userAge = prompt('Enter your age please?');
console.log(userAge);
alert('your age is :' + ' ' + userAge);




const niceFriend = function () {
  let goodFrined = prompt('Do you think I am a good friend? :YES/NO');
  while (goodFrined.toLocaleLowerCase() === 'no' || goodFrined.toLocaleLowerCase() === 'n' || goodFrined.toLocaleLowerCase() === 'yes' || goodFrined.toLocaleLowerCase() === 'y') {

    if (goodFrined.toLocaleLowerCase() === 'yes' || goodFrined.toLocaleLowerCase() === 'y') {

      alert('Thank you Bro');
      counter = counter + 1;
      break;

    } else if(goodFrined.toLocaleLowerCase() === 'no' || goodFrined.toLocaleLowerCase() === 'n'){
      alert('I am sorry that I am not a good friend');
      break;
    }
  }
};

niceFriend();

const coffeeLover = function () {
  let loveCoffe = prompt('Do i love coffe? :YES/NO');
  while (loveCoffe.toLocaleLowerCase() === 'no' || loveCoffe.toLocaleLowerCase() === 'n' || loveCoffe.toLocaleLowerCase() === 'yes' || loveCoffe.toLocaleLowerCase() === 'y') {

    if (loveCoffe.toLowerCase() === 'yes' || loveCoffe.toLocaleLowerCase() === 'y') {
      alert('you are good');
      counter = counter + 1;
      break;


    } else if(loveCoffe.toLowerCase() === 'no' || loveCoffe.toLocaleLowerCase() === 'n') {
      alert('you are wrong I love coffee very much');
      break;


    }
  }
};
coffeeLover();

const career = function () {
  let ownBusiness = prompt('Do you think I can start my own business in the future? :YES/NO');
  while (ownBusiness.toLocaleLowerCase() !== 'no' || ownBusiness.toLocaleLowerCase() !== 'n' || ownBusiness.toLocaleLowerCase() === 'yes' || ownBusiness.toLocaleLowerCase() === 'y') {

    if (ownBusiness.toLowerCase() === 'yes' || ownBusiness.toLocaleLowerCase() === 'y') {
      alert('Thank you for holding that I can do it');
      counter = counter + 1;
      break;


    }
    else if (ownBusiness.toLowerCase() === 'no' || ownBusiness.toLocaleLowerCase() === 'n') {
      alert('So what should I do');
      break;


    }
  }
};
career();
const swimming = function () {
  let toSwim = prompt('Am I good at swimming? :YES/NO');
  while (toSwim.toLocaleLowerCase() === 'no' || toSwim.toLocaleLowerCase() === 'n' || toSwim.toLocaleLowerCase() === 'yes' || toSwim.toLocaleLowerCase() === 'y') {

    if (toSwim.toLocaleLowerCase() === 'yes' || toSwim.toLocaleLowerCase() === 'y') {
      alert('That right ');
      counter = counter + 1;
      break;

    } else if (toSwim.toLocaleLowerCase() === 'no' || toSwim.toLocaleLowerCase() === 'n') {
      alert('you are wrong');
      break;


    }
  }
};
swimming();

const helpOthers = function () {
  let asksHelp = prompt('If a stranger suddenly came to me and asks for help, would I help him?? :YES/NO');
  while (asksHelp.toLocaleLowerCase() === 'no' || asksHelp.toLocaleLowerCase() === 'n' || asksHelp.toLocaleLowerCase() === 'yes' || asksHelp.toLocaleLowerCase() === 'y') {

    if (asksHelp.toLocaleLowerCase() === 'yes' || asksHelp.toLocaleLowerCase() === 'y') {
      alert('Thats right we must help other if we can');
      counter = counter + 1;
      break;

    } else if (asksHelp.toLocaleLowerCase() === 'no' || asksHelp.toLocaleLowerCase() === 'n') {
      alert('you are wrong man ');
      break;


    }

  }
};
helpOthers();
const guessNumbers = function () {
  let num = 0;
  let gussNumber;
  while (num < 4) {
    gussNumber = prompt('Guess a Number');

    if (gussNumber < 7) {
      alert('Too Low');
      console.log(gussNumber);


    }
    else if (gussNumber > 7) {
      alert('Too High');
      console.log(gussNumber);


    }
    else if (gussNumber === '7') {
      alert('It is true');
      console.log(gussNumber);
      counter = counter + 1;

      break;

    }


    ++num;
  }

  if (gussNumber !== '7') {
    alert('You have exhausted all your attempts,The correct answer is 7');
  }
};

guessNumbers();

const mySport = function () {
  let arr = ['football', 'swimming', 'basketball', 'tennis', 'golf', 'boxing', 'bowling', 'horse racing', 'judo'];

  let gussSport;
  let guss = 0;
  while (guss < 6) {
    gussSport = prompt('Guess What is my favorite sport?');
    if (gussSport === arr[0]) {
      alert('Correct the Football is my favorite sport');
      counter = counter + 1;
      break;

    }

    if (gussSport === arr[1]) {
      alert('Correct the Swimming is my favorite sport');
      counter = counter + 1;
      break;


    }
    if (gussSport === arr[2]) {
      alert('Error the Basketball is not my favorite sport');

    }
    if (gussSport === arr[3]) {
      alert('Error the Tennis is not my favorite sport');

    }
    if (gussSport === arr[4]) {
      alert('Error the Golf is not my favorite sport');

    }
    if (gussSport === arr[5]) {
      alert('Error the Boxing is not my favorite sport');

    }
    if (gussSport === arr[6]) {
      alert('Error the Bowling is not my favorite sport');

    }
    if (gussSport === arr[7]) {
      alert('Correct the Horse Racing is my favorite sport');
      counter = counter + 1;
      break;


    }
    if (gussSport === arr[8]) {
      alert('Error the Judo is not my favorite sport');


    }
    ++guss;
  }

  if (gussSport !== arr[0] && gussSport !== arr[1] && gussSport !== arr[7]) {
    alert('You have exhausted all your attempts');

  }
};
mySport();

alert('your result is : ' + ' ' + counter);













