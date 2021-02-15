'use strict';

 

let userName = prompt('Please enter your name?');
console.log(userName);

// userName = userName.toLowerCase();

if (userName == '') {
  alert('Welcome'+' '+userName);
  console.log(userName);
} 

let userAge = prompt('Entter your age please?');
console.log(userAge);
alert('your age is :'+' '+userAge);




let goodFrined=prompt('Do you think I am a good friend? :YES/NO');
if(goodFrined.toLocaleLowerCase() =='yes'){
  alert('Thank you Bro')
  console.log(goodFrined);
} else{
  alert('I am sorry that I am not a good friend');
  console.log(goodFrined);
}

let loveCoffe = prompt ("Do i love coffe? :YES/NO");

if(loveCoffe.toLowerCase() == 'yes'){
alert("you are good");
console.log(loveCoffe);
}else{
    alert("you are wrong I love coffee very much");
    console.log(loveCoffe);
}

let ownBusiness=prompt('Do you think I can start my own business in the future? :YES/NO')

if(ownBusiness.toLowerCase() =='yes'){
  alert('Thank you for holding that I can do it')
  console.log(ownBusiness);}
  else{ 
      alert('So what should I do');
    console.log(ownBusiness);
}

let toSwim=prompt('Am I good at swimming? :YES/NO')

if(toSwim.toLocaleLowerCase() == 'yes'){
  alert('That right ')
  console.log(toSwim)
}else{
  alert('you are wrong');
  console.log(toSwim);
}

let asksHelp = prompt('If a stranger suddenly came to me and asks for help, would I help him?? :YES/NO')
if(asksHelp.toLocaleLowerCase() == 'yes'){
  alert('Thats right we must help other if you can');
  console.log(asksHelp);
}else{
  alert('you are wrong man ');
  console.log(asksHelp);
}
  










