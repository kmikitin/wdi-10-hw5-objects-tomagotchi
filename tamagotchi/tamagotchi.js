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

let tamagotchi = {
	name: 'Meg',
	creatureType: 'Sloth',
	foodInTummy: 5,
	restedness: 7,
	health: 10,
	cry() {
		console.log('Waaaaaa!!!');
	},
	puke() {
		console.log('Bleeeech :O~~~~');
	}
	yawn() {
		console.log('Yaaaaaaawwwwwn');
	}
}

tamagotchi.cry();
tamagotchi.puke();
tamagotchi.yawn();

