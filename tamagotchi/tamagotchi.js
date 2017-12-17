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

// Write a medicateTamagotchi method that takes an argument (a Tamagotchi) that will give the specified tamagotchi medicine and increase its health by 1.

// Invoke the player.feedTamagotchi(your_tamagotchis_name) method to see if it works


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
	}
}

player.feedTamagotchi()





