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



