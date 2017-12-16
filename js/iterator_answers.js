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
console.log(firstLetter)
