'use strict';
//object  dot operator   method/function     parameters
console.log('this is identifier for the number: ', 5);

var greeting;
//keyword var for creating variable.
//4 + x = 8  
//x is the variable 4
//prompt();
//document.write();
//remove();
//Date();
//write();
var userName = prompt('Please enter your first name.');
// console.log(userName);
var today = new Date();
// console.log(today);
var hourNow = prompt('What is the current time of day?, Military time 0-23');
if(hourNow > 18 && hourNow < 24){
   greeting = 'Good Evening.';
} else if (hourNow > 12 && hourNow < 18){
   greeting =  'Happy Afternoon.';
} else if (hourNow < 12 && hourNow > 0 ){
  greeting = 'Good Morning';
} else {
    greeting = "Something went wrong.. Sorry.";
}



document.write('<h1>' + greeting + '</h1>');