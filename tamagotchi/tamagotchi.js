console.log('We will rule over all this land, and we will call it... "This Land."');

// OBJECT METHODS
// This weekend you are going to make a tamagotchi object and have it do something. We can store functions inside objects.
// Start by making a Tamagotchi, just a regular object with properties. Give it the following keys and you can assign whatever values you would like to make it your own: name, creatureType, foodInTummy, restedness, health.
// Our objects can contain primitive datatypes as values for the keys, and we have seen that they can contain arrays and other objects as values too. Objects can also contain functions as values. When a function is stored within an object, it's called a method.
// Let's add a method of cry to our Tamagotchi that will log "Waaaaaa!!!" anytime the cry method is called.
// Invoke the cry method to test that it works.
// Write a method puke into your Tamagotchi object that console.logs the Tamagotchi having a sick-up (example: Bleeeeh :O~~)
// Invoke the puke method to confirm that it works.
// Write a method yawn into your Tamagotchi object that console.logs the Tamagotchi yawning when it is tired (example: Yaaaawwwwn!).
// Invoke the yawn method.
// Remember that using when using the keyword this, we can have our object methods act upon other properties that are intrinsic to our object.
// Update the yawn and puke methods to output the Tamogatchi's name in the sentence with the yawn or puke action. Execute these methods to confirm the output.
// Update the cry method to decrease the amount of food in the Tamagotchi's tummy.
// In addition, the cry method should now also log a sentence that will tell us the amount of food in the Tamagotchi's tummy.
// Hint: We would refer to the foodInTummy property with this.foodInTummy. 
// Execute the cry method to see the output.

let tamagotchi = {
	name: 'Meg',
	creatureType: 'Sloth',
	foodInTummy: 10,
	restedness: 10,
	health: 10,
	cry() {
		console.log('Waaaaaa!!!');
		this.foodInTummy = this.foodInTummy - 1;
		console.log(this.name + ' has ' + this.foodInTummy + ' foods in their tummy.')
	},
	puke() {
		console.log(this.name + ': Bleeeech :O~~~~');
	},
	yawn() {
		console.log(this.name + ': Yaaaaaaawwwwwn');
	}
}

tamagotchi.cry();
tamagotchi.puke();
tamagotchi.yawn();

// Another Tamogatchi
// Create another Tamogatchi. This new Tamogatchi should have the same keys and methods as the first, but the values for: name, creatureType, foodInTummy, restedness, health
// Run the methods on this new Tamogatchi and notice that they should reference the name of this new Tamogatchi.
let tamagotchi2 = {
	name: 'Seth',
	creatureType: 'Rabbit',
	foodInTummy: 8,
	restedness: 8,
	health: 8,
	cry() {
		console.log('Waaaaaa!!!');
		this.foodInTummy = this.foodInTummy - 1;
		console.log(this.name + ' has ' + this.foodInTummy + ' foods in their tummy.')
	},
	puke() {
		console.log(this.name + ': Bleeeech :O~~~~');
	},
	yawn() {
		console.log(this.name + ': Yaaaaaaawwwwwn');
	}

}

tamagotchi2.cry();
tamagotchi2.puke();
tamagotchi2.yawn();











