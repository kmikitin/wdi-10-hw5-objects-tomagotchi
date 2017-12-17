console.log('We will rule over all this land, and we will call it... "This Land."');



let tamagotchi = {
	name: 'Meg',
	creatureType: 'Sloth',
	foodInTummy: 10,
	restedness: 10,
	health: 10,
	cry() {
		console.log('Waaaaaa!!!');
		this.foodInTummy = this.foodInTummy - 1;
		console.log(this.name + ' has ' + this.foodInTummy + ' foods in their tummy.');
	},
	puke() {
		console.log(this.name + ': Bleeeech :O~~~~');
		this.health = this.health - 1;
		console.log(this.name + ' has ' + this.health + ' health left.');
	},
	yawn() {
		console.log(this.name + ': Yaaaaaaawwwwwn');
		this.restedness = this.restedness - 1;
		console.log(this.name + ' has ' + this.restedness + ' rest points.');
	}
}

tamagotchi.cry();
tamagotchi.puke();
tamagotchi.yawn();


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
		this.health = this.health - 1;
		console.log(this.name + ' has ' + this.health + ' health left.');
	},
	yawn() {
		console.log(this.name + ': Yaaaaaaawwwwwn');
		this.restedness = this.restedness - 1;
		console.log(this.name + ' has ' + this.restedness + ' rest points.'); 
	}

}

tamagotchi2.cry();
tamagotchi2.puke();
tamagotchi2.yawn();

// Let's Play
// Objects can communicate with each other, and we don't need this for objects to communicate with each other. All it takes is for an object to refer to a previously defined object.

// Let's make another object, a player. The player should have a key of name and you can provide the value.

// Let's give your player an action sayName that will log the sentence: "Hi my name is: " with your player's name at the end.


let player = {
	name: 'Jon',
	sayName() {
		console.log('Hi my name is: ' + this.name)
	} 
}






