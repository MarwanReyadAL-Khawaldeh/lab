'use strict';

 

let userName = prompt('Please enter your name?');
console.log(userName);

// userName = userName.toLowerCase();

if (userName.toLowerCase() == 'marwan') {
  alert('Welcome'+' '+userName);
} else {
  alert('Please write your name correctly');
}

let userAge = prompt('Entter your age please?');
console.log(userAge);
alert('your age is :'+' '+userAge);




let goodFrined=prompt('Do you think I am a good friend? :YES');
if(goodFrined.toLocaleLowerCase() =='yes'){
  alert('Thank you Bro')
  console.log(goodFrined);
} else{
  alert('I am sorry that I am not a good friend');
  console.log(goodFrined);
}

let loveCoffe = prompt ("Do i love coffe? :YES");

if(loveCoffe.toLowerCase() == 'yes'){
alert("you are good");
console.log(loveCoffe);
}else{
    alert("you are wrong I love coffee very much");
    console.log(loveCoffe);
}

let ownBusiness=prompt('Do you think I can start my own business in the future? :YES')

if(ownBusiness.toLowerCase() =='yes'){
  alert('Thank you for holding that I can do it')
  console.log(ownBusiness);}
  else{ 
      alert('So what should I do');
    console.log(ownBusiness);
}

let toSwim=prompt('Am I good at swimming? :YES')

if(toSwim.toLocaleLowerCase() == 'yes'){
  alert('That right ')
  console.log(toSwim)
}else{
  alert('you are wrong');
  console.log(toSwim);
}

let asksHelp = prompt('If a stranger suddenly came to me and asks for help, would I help him?? :YES')
if(asksHelp.toLocaleLowerCase() == 'yes'){
  alert('Thats right we must help other if you can');
  console.log(asksHelp);
}else{
  alert('you are wrong man ');
  console.log(asksHelp);
}
  










