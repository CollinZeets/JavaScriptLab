'use strict';
const collinFavFood = 'Lasagna';// Collin = Code Creator
function FavFoodCorrect(userFavFood){
   alert('Really! ' + userFavFood + '?');
   if (userFavFood == collinFavFood){
      alert ('We like the same food');
      return true; 
   } else {
      alert ('We do not like the same food' + ' 😞'+ ' My Favorite is '+ collinFavFood);
      return false; 
   }
}
while (!FavFoodCorrect(prompt('Please enter your favorite food!'))) {}
alert ('I love ' + collinFavFood + ' too!')
