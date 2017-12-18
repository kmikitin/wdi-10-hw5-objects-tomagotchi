console.log('We will rule over all this land, and we will call it... "This Land."');

// create a function to call the tamagotchi cry method at a set interval
function hungerTimer(tamagotchi) { 
	// use set interval to creat a timer that calls cry every 6 seconds
	const hungerTimer = setInterval(() => {
	// call the method until there are 0 foods left AS LONG AS the other points haven't run out
		if (tamagotchi.foodInTummy > 1 && tamagotchi.restedness > 1 && tamagotchi.health > 1) {
			tamagotchi.cry();
		} else if (tamagotchi.restedness == 0 || tamagotchi.health == 0) {
			clearInterval(hungerTime);
		} else {
			// once there are 0 foods left tamagotchi has starved!
			console.log(tamagotchi.name + ' starved to death!');
			// stop the timer because you killed your tamagotchi with neglect :(
			clearInterval(hungerTimer);	
		}
	}, 6000)
}

// create a funciton to call the tamagotchi yawn method at a set interval
function yawnTimer(tamagotchi) { 
	// use setInterval to call yawn every 10 seconds
	const yawnTimer = setInterval(() => {
	// call the method until 0 restedness points remain AS LONG AS the other points haven't run out
		if (tamagotchi.restedness > 1 && tamagotchi.foodInTummy > 1 && tamagotchi.health > 1) {
			tamagotchi.yawn();
		} else if (tamagotchi.foodInTummy == 0 || tamagotchi.health == 0) {
			clearInterval(yawnTimer);
		} else {
			// stop the timer and let the player know their tamagotchi died 
			console.log(tamagotchi.name + ' died of exhaustion!');
			clearInterval(yawnTimer);
		}
	}, 10000)
}
	// create a method to call the tamagotchi yawn method at a set interval 
function sickTimer(tamagotchi) {
		// use setInterval to call puke every 10 seconds
	const sickTimer = setInterval(() => {
		// call the puke method until 0 health points remain AS LONG AS the other points haven't run out
		if (tamagotchi.health > 1 && tamagotchi.foodInTummy > 1 && tamagotchi.restedness > 1) {
			tamagotchi.puke();
		} else if (tamagotchi.foodInTummy == 0 || tamagotchi.restedness == 0) {
			clearInterval(sickTimer);
		} else {
			// STOP THE TIMER!!! The tamagotchi puked itself to death :/
			console.log(tamagotchi.name + ' died from their illness!');
			clearInterval(sickTimer);
		}	
		}, 25000)
} 



// make an object called tamagotchi
let tamagotchi = {
	// give the tamagotchi properties
	name: 'Meg',
	creatureType: 'Sloth',
	foodInTummy: 10,
	restedness: 7,
	health: 5,
	// create a method to make the tamagotchi cry
	cry() {
		// print waaaa!
		console.log(this.name + ': Waaaaaa!!! I\'m hungry!');
		// subtract one food in tummy whenever called
		this.foodInTummy = this.foodInTummy - 1;
		// print how many foods are in their tummy
		console.log(this.name + ' has ' + this.foodInTummy + ' foods in their tummy.');
	},
	// create a method to make tamagotchi puke
	puke() {
		// print puke sounds
		console.log(this.name + ': Bleeeech :O~~~~');
		// subtract one health whenever called
		this.health = this.health - 1;
		// print how much health remains
		console.log(this.name + ' has ' + this.health + ' health left.');
	},
	// create a method to make tamagotchi yawn
	yawn() {
		// print a yawn
		console.log(this.name + ': Yaaaaaaawwwwwn');
		// subtract on restedness whever called
		this.restedness = this.restedness - 1;
		// print how much restedness remains
		console.log(this.name + ' has ' + this.restedness + ' hours of sleep.');
	},
	// create a method that will start the intervals for all the other methods
	start() {
		// use this to give the functions the parameter of this tamagotchi
		hungerTimer(this);
		sickTimer(this);
		yawnTimer(this);
	},
	stop() {
		this.foodInTummy = 0;
		this.health = 0;
		this.restedness = 0;
	}
}

// call the methods to make sure they work
// tamagotchi.cry();
// tamagotchi.puke();
// tamagotchi.yawn();


// repeat same as above for a new tamagotchi
let tamagotchi2 = {
	name: 'Sid',
	creatureType: 'Unicorn',
	foodInTummy: 5,
	restedness: 5,
	health: 5,
	cry() {
		console.log(this.name + ': Waaaaaa!!! I\'m hungry!');
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
		console.log(this.name + ' has ' + this.restedness + ' hours of sleep.'); 
	},
	hungerTimer() {
		const theTimer = setInterval(() => {
			this.cry();
			clearInterval(theTimer);
		}, 6000)
	},
	start() {
		hungerTimer(this);
		yawnTimer(this);
		sickTimer(this);
	},
	stop() {
		this.foodInTummy = 0;
		this.health = 0;
		this.restedness = 0;
	}

}

// tamagotchi2.cry();
// tamagotchi2.puke();
// tamagotchi2.yawn();

// create a player object to interact with the tamagotchis
let player = {
	name: 'Jon',
	// create a method so the player will introduce themselves
	sayName() {
		console.log('Hi my name is: ' + this.name)
	},
	// create a method for the player to feed both the tamagotchis at once
	feedTamagotchi (chooseTam, food) {
		// when they are fed increase their food in tummy by one
		chooseTam.foodInTummy = chooseTam.foodInTummy + 1;
		console.log(chooseTam.name + ' just ate a ' + food + '!');
	}, 
	// create a method for the player to give medicine to the tamagotchis
	medicateTamagotchi(chooseTam, medicine) {
		// when they sleep increase theri health points by 1
		chooseTam.health = chooseTam.health +1;
		console.log('You gave ' + chooseTam.name + ' ' + medicine + '.');
	},
	// create a method for the player to put the tamagotchis to sleep
	knockOutTamagotchi(chooseTam){
		// when they sleep increase their restedness points by one
		chooseTam.restedness = chooseTam.restedness +1;
	}
}

// test out player methods
// player.feedTamagotchi()






