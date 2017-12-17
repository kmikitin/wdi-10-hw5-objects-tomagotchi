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


// Write a knockOutTamagotchi method in the player object that will put the tamagotchi to sleep and increase its restedness by 1.

// Invoke the player.knockOutTamagotchi(your_tamagotchis_name) method to see if it works


let player = {
	name: 'Jon',
	sayName() {
		console.log('Hi my name is: ' + this.name)
	},
	feedTamagotchi () {
		tamagotchi.foodInTummy = tamagotchi.foodInTummy + 1;
		tamagotchi2.foodInTummy = tamagotchi2.foodInTummy + 1;
	}, 
	medicateTamagotchi(chooseTam) {
		chooseTam.health = chooseTam.health +1;
	},
	knockOutTamagotchi(chooseTam){
		chooseTam.restedness = chooseTam.restedness +1;
	}
}

player.feedTamagotchi()







