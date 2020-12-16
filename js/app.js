'use strict';
//object  dot operator   method/function     parameters
var color = prompt('Please enter your favorite color.');
// console.log(userName);
var today = new Date();
// console.log(today);
var hourNow = prompt('What is the current time of day?');
if(hourNow > 18 && hourNow < 24){
   greeting = 'Good Evening.';
} else if (hourNow > 12 && hourNow < 18){
   greeting =  'Happy Afternoon.';
} else if (hourNow < 12 && hourNow > 0 ){
  greeting = 'Good Morning';
}



document.write('Your Favorite color is ' + color);
