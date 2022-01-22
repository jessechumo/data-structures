//Objects
let cat = { name:"fluffy",
            age:3,
            eyeColor:"blue",
            favoriteMeal:{
                Morning:"Fish",
                Lunch:"Chicken"
            }}

function chicken() {console.log(cat.favoriteMeal.Lunch)}
chicken()  //chicken is logged to the console




//Arrays
let myFavoriteNumbers = [21,68,12,17,7] //declaring an array
//an array can also contain objects.
//Adding an item to an array
myFavoriteNumbers.push(39)
console.log(myFavoriteNumbers)
//Removing an item from an array
myFavoriteNumbers.splice(3,1) //removing the fourth element of the array.(17)
console.log(myFavoriteNumbers)
//Accessing an eleent in an array, we use indices.
console.log(myFavoriteNumbers[2])//12 is logged to the console


