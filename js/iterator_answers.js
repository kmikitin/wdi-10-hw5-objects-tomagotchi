console.log('WHY IS THE CARPET ALL WET TODD?!?!?');



//forEach 
// .forEach is a basic iterator; all it does is step through each item in an array.
// Using the array words, log each word in words in upper case using .forEach.
const words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"];

words.forEach((i) => {
	console.log(i.toUpperCase())
});




// Map
// .map is like .forEach but it returns a new array with the selections and / or transformations applied in the iterator. .map saves to a new array and does not alter the original array.
// Map to a new array that stores only the first letter from each word in more_words.
// const more_words = ["Joe", "Overeats", "Eggs"];
// Expected result: ["J", "O", "E"]

const more_words = ['Kait', 'Always', 'Ignores', 'Time'];
const firstLetter = more_words.map((str) => {
	return str.charAt(0);
})
console.log(firstLetter);




// reduce
// .reduce iterates over the elements in an array and smooshes them together into a single variable according to the instructions in the iterator. Like .map, it returns a new value and does not alter the original array.

// // Return the product of the numbers in arr.
// const arr = [8, 8, 8, 8, 8, 8, 8, 8];
// const product = arr.reduce((a, b) => {
// 	return a * b;
// })
// console.log(product);




// Chaining
// Using iterators to find the total sheepCount of sheep shorn by sheep shearers at the 1623 Sheep Shearing Feast:
const sheepShearers = [
    {
        name: "Tim",
        age: 20,
        sheepCount: 18
    },
    {
        name: "C3PO",
        age: 200,
        sheepCount: 320
    },
    {
        name: "Cousin It",
        age: Infinity,
        sheepCount: 2900
    }
];
// Expected Output: => 3238


let getSheepCount = Object.keys(sheepShearers).map((i) => {
	// get just the counts from the object array
	return sheepShearers[i].sheepCount;
}).reduce((a, b) => {
	// add the numbers from the array together
	return a + b;
})





// forEach
const gizmo = {start: 10, end: 6, location: "remote", type: "wdi"};

// Use the gizmo object to console log each value in the object.
// use object.keys to get the key from the object
// use forEach to iterate over each property and grab the value for the key
Object.keys(gizmo).forEach((key) => {
    // a variable to hold the value of the given key 
    let value = gizmo[key];
    // print the value to the console
    console.log(value);
})
// Using the gizmo object, console log both the key and value.
// same as above BUT logging both
Object.keys(gizmo).forEach((key) => {
    let value = gizmo[key];
    // print the key forEach is grabbing as well as its value
    console.log(key + ": " + value);
})





// reduce
// Return a single array.
const arr = [[8, 8], ["eight", "eight"], ["ate"]];

// use .reduce to flatten the array
const singleArr = arr.reduce((a, b) => {
    // use .concat to chain the elements in the array back together
    return a.concat(b);
}, [])

console.log(singleArr);





// chaining
// we did this one in class!
const stocks = [
    { symbol: "XFX", price: 240.22, volume: 23432 },
    { symbol: "TNZ", price: 332.19, volume: 234 },
    { symbol: "JXJ", price: 120.22, volume: 5323 }
];
// Use the stocks array of objects for the following:

let filteredStockSymbols = stocks.filter((stock) => {
    // remove any stocks that are less than 150
    if (stock.price >= 150) return true;
}).map((highStock) => {
    // of the right priced stocks, get JUST the symbol property
    return highStock.symbol;
}).forEach((symbols) => {
    // log each of the correct stocks
    console.log(symbols);
})














