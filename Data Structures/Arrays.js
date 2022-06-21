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



[1, 2, 3].push(4); // [1, 2, 3, 4]
[1, 2, 3].pop(); // [1, 2]
[1, 2, 3].shift(); // [2, 3]
[1, 2, 3].unshift(0); // [0, 1, 2, 3]
['a', 'b'].concat('c'); // ['a', 'b', 'c']
['a', 'b', 'c'].join('-'); // a-b-c
['a', 'b', 'c'].slice(1); // ['b', 'c']
['a', 'b', 'c'].indexOf('b'); // 1
['a', 'b', 'c'].includes('c'); // true
[3, 5, 6, 8].find((n) => n % 2 === 0); // 6
[2, 4, 3, 5].findIndex((n) => n % 2 !== 0); // 2
[3, 4, 8, 6].map((n) => n * 2); // [6, 8, 16, 12]
[1, 4, 7, 8].filter((n) => n % 2 === 0); // [4, 8]
[2, 4, 3, 7].reduce((acc, cur) => acc + cur); // 16
[2, 3, 4, 5].every((x) => x < 6); // true
[3, 5, 6, 8].some((n) => n > 6); // true
[1, 2, 3, 4].reverse(); // [4, 3, 2, 1]
[3, 5, 7, 8].at(-2); // 7
