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
// .map() function is used when creating a new array based on another array.
const numbers =[4,9,16,25]
const newArr = numbers.map(Math.sqrt)
console.log(newArr)// A new array showing the square roots of elements of the array "numbers" is logged to the console.
