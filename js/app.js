'use strict';
const collinFavFood = 'Lasagna';// Collin == Code Creator
function FavFood(userFavFood){
   alert('Really! ' + userFavFood + '?');
if (userFavFood == collinFavFood){
   alert ('We like the same food');}
else {
   alert ('We do not like the same food' + ' 😞');
   }
}
FavFood(prompt('Please enter your favorite food!'));