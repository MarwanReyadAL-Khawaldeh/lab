'use strict';



let userName = prompt('Please enter your name?');
//console.log(userName);
alert('Welcome' + ' ' + userName);


let counter = 0;


let userAge = prompt('Enter your age please?');
//console.log(userAge);
alert('your age is :' + ' ' + userAge);





let goodFrined = prompt('Do you think I am a good friend? :YES/NO');
if (goodFrined.toLocaleLowerCase() === 'yes') {
  alert('Thank you Bro');
  counter = counter + 1;

  //console.log(goodFrined);
} else if (goodFrined.toLocaleLowerCase() === 'no') {
  alert('I am sorry that I am not a good friend');
  //console.log(goodFrined);
}

let loveCoffe = prompt('Do i love coffe? :YES/NO');

if (loveCoffe.toLowerCase() === 'yes') {
  alert('you are good');
  counter = counter + 1;

  //console.log(loveCoffe);
} else if (loveCoffe.toLowerCase() === 'no') {
  alert('you are wrong I love coffee very much');
  //console.log(loveCoffe);
}

let ownBusiness = prompt('Do you think I can start my own business in the future? :YES/NO');

if (ownBusiness.toLowerCase() === 'yes') {
  alert('Thank you for holding that I can do it');
  counter = counter + 1;

  //console.log(ownBusiness);
}
else if (ownBusiness.toLowerCase() === 'no') {
  alert('So what should I do');
  //console.log(ownBusiness);
}

let toSwim = prompt('Am I good at swimming? :YES/NO');

if (toSwim.toLocaleLowerCase() === 'yes') {
  alert('That right ');
  counter = counter + 1;

  //console.log(toSwim)
} else if (toSwim.toLocaleLowerCase() === 'no') {
  alert('you are wrong');
  //console.log(toSwim);
}

let asksHelp = prompt('If a stranger suddenly came to me and asks for help, would I help him?? :YES/NO');
if (asksHelp.toLocaleLowerCase() === 'yes') {
  alert('Thats right we must help other if we can');
  counter = counter + 1;

  //console.log(asksHelp);
} else if (asksHelp.toLocaleLowerCase() === 'no') {
  alert('you are wrong man ');
  //console.log(asksHelp);
}


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

alert('your result is : ' + ' ' + counter);













