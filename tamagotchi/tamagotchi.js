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

// Objects can work together! All we need to do is refer to a previously defined object. Let's give our player a feedTamagotchi method that feeds our tamagotchi. Start by choosing one Tamogatchi to feed and increase their foodInTummy by 1 each time this method is called.

// Check that the Tamogatchi is successfully being fed.

// Update your feedTamagotchi method to have your player feed both of the Tamogatchi.

// Run your method and check that both are being fed.


let player = {
	name: 'Jon',
	sayName() {
		console.log('Hi my name is: ' + this.name)
	},
	feedTamagotchi () {
		tamagotchi.foodInTummy = tamagotchi.foodInTummy + 1;
		tamagotchi2.foodInTummy = tamagotchi2.foodInTummy + 1;
	} 
}

player.feedTamagotchi()





