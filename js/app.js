console.log('I aim to misbehave.');

// Clicker
// Make an object called clicker, which has a clickCount property, and a click method.
// Have the click method increment the clickCount by 1 each time it is called.
let clicker = {
	clickCount: 0,
	click() {
		this.clickCount++;
	}
}


// It's All About Me
// Create an object called myInformation.
// Assign to it your name, your current age, and a fact about you.
// Inside myInformation, create a method called statement that returns a statement about you including your name, this fact, and how old you will be in 10 years.
// Inside myInformation, create another function that can be used to increment the value of your age by 1 each time that you call it.
// It's your birthday! Call this new method that you made that will increase your age.
// Create another function that can be used to change the value of your name.
// You're feeling funky and decide that your new name is Rumpelstiltskin. Call the method that will update your name and assign this new name. Log your object to confirm the changes.
let myInformation = {
	name: 'Kait',
	age: 27,
	hobby: 'running',
	statement() {
		return 'My name is ' + this.name + '. I love ' + this.hobby + ' and I will be ' + (this.age + 10) + ' in 10 years.';
	},
	aging() {
		this.age++;
	},
	newName(newName) {
		this.name = newName;
	}
}

myInformation.aging();
myInformation.newName('Rumpelstiltskin');


// Greeter
// Create an object called greeter.
// Inside the greeter object, create a method called hello that takes a name as a parameter and returns a greeting message followed by the name parameter.
// Create another method inside greeter called goodbye that takes a name as a parameter and returns a farewell greeting followed by the name parameter.
// Create a final method inside greeter called whoAreYou that takes a name as a parameter and returns "Oh right! ", followed by the name parameter, followed by " how could I forget...!"
// Play around executing your functions by accessing them through the object.
let greeter = {
	hello(otherPerson) {
		return 'Hi there, ' + otherPerson + '!'
	},
	goodbye(otherPerson) {
		return 'Au revoir, ' + otherPerson + ', until we meet again.'
	},
	whoAreYou(otherPerson) {
		return 'Oh right! ' + otherPerson + ' - how could I forget...!'
	}

}

greeter.whoAreYou('Jon'), greeter.hello('Jon');
greeter.goodbye('Jon');

// Collecting Strings
// Make an object called stringCollector, which has:
// a collection property - an array to hold strings
// a collect method which takes a string as a parameter
// the string collector prefers the strings to be totally reversed in their collection, however, so make sure to reverse it before adding it to the collection
// add an admireCollection method which prints out each string in the collection to the console, one line at a time
let stringCollector = {
	collection: [],
	collect(str) {
		let reverseStr = str.split('').reverse().join('');
		this.collection.push(reverseStr);
	},
	admireCollection() {
		for(let i = 0; i <= this.collection.length; i++) {
			console.log(this.collection[i]);
		}
	}
}

stringCollector.collect('whimsical')
stringCollector.collect('polenta')
stringCollector.collect('exacerbate')


// ATM
// Make an object called atm which has two properties:
// totalCash, the total amount of cash in the atm
// dispenseTwenties, a method with takes a number of twenties and, if there is enough cash, returns the total number of cash it is giving out.
// If there is not enough cash, return null instead.
let atm = {
	totalCash: 200,
	dispenseTwenties(num) {
		if (this.totalCash / 20 > 0) {
			this.totalCash = this.totalCash - (num * 20);
			return num * 20;
		} return null;
	}

}


// Hungry Turtles
// Create an object called Leonardo.
// Leonardo should have a name attribute of "Leonardo", a color attribute of "Blue", and a weapon attribute of "Katana".
// Leonardo should also have a boolean property called pizzaEaten that is initially set to false.
// Add a method to Leonardo called eatPizza() which does the following:
// If pizzaEaten is true, print out "Leonardo has already eaten pizza" and set pizzaEaten to false.
// If pizzaEaten is false, print out "Leonardo is eating pizza" and set pizzaEaten to true.

let leonardo = {
	name: 'Leonardo',
	color: 'blue',
	weapon: 'Katana',
	pizzaEaten: false,
	eatPizza() {
		if (this.pizzaEaten === false) {
			console.log('Leonardo is eating pizza.');
			this.pizzaEaten = true;
		} else if (this.pizzaEaten === true) {
		console.log('Leonardo has already eaten pizza.');
		}
	}
}

leonardo.eatPizza()
















