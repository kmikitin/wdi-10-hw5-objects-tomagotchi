console.log('We will rule over all this land, and we will call it... "This Land."');

// create a function to call the tamagotchi cry method at a set interval
function hungerTimer() { 
	// use set interval to creat a timer that calls cry every 6 seconds
	const hungerTimer = setInterval(() => {
	// call the method until there are 0 foods left AS LONG AS the other points haven't run out
		if (tamagotchi1.foodInTummy > 1 && tamagotchi1.restedness > 1 && tamagotchi1.health > 1) {
			tamagotchi1.cry();
			// here I was working on the problem where all three death messages show at once, I want to make it so you just see the one, but the other timers stop.
		// } else if (tamagotchi.restedness == 0 || tamagotchi.health == 0) {
		// 	clearInterval(hungerTime);
		} else {
			// once there are 0 foods left tamagotchi has starved!
			console.log(tamagotchi1.name + ' starved to death!');
			// stop the timer because you killed your tamagotchi with neglect :(
			clearInterval(hungerTimer);	
		}
	}, 6000)
}

// create a funciton to call the tamagotchi yawn method at a set interval
function yawnTimer() { 
	// use setInterval to call yawn every 10 seconds
	const yawnTimer = setInterval(() => {
	// call the method until 0 restedness points remain AS LONG AS the other points haven't run out
		if (tamagotchi1.restedness > 1 && tamagotchi1.foodInTummy > 1 && tamagotchi1.health > 1) {
			tamagotchi1.yawn();
			// same as above, working on getting just one death message to show.
		// } else if (tamagotchi.foodInTummy == 0 || tamagotchi.health == 0) {
		// 	clearInterval(yawnTimer);
		} else {
			// stop the timer and let the player know their tamagotchi died 
			console.log(tamagotchi1.name + ' died of exhaustion!');
			clearInterval(yawnTimer);
		}
	}, 10000)
}
	// create a method to call the tamagotchi yawn method at a set interval 
function sickTimer() {
		// use setInterval to call puke every 10 seconds
	const sickTimer = setInterval(() => {
		// call the puke method until 0 health points remain AS LONG AS the other points haven't run out
		if (tamagotchi1.health > 1 && tamagotchi1.foodInTummy > 1 && tamagotchi1.restedness > 1) {
			tamagotchi1.puke();
			// One day only one message will pop up!
		// } else if (tamagotchi1.foodInTummy == 0 || tamagotchi1.restedness == 0) {
		// 	clearInterval(sickTimer);
		} else {
			// STOP THE TIMER!!! The tamagotchi puked itself to death :/
			console.log(tamagotchi1.name + ' died from their illness!');
			clearInterval(sickTimer);
		}	
		}, 25000)
} 

// make an object called tamagotchi
let tamagotchi1 = {
	// give the tamagotchi properties
	name: 'Meg',
	creatureType: 'Unicorn',
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
	// create a stop method that will clear all interavals
	stop() {
		// I changed each property to equal zero because that is the even that stops the intervals from running
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
	creatureType: 'Sloth',
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
	// this code was updated so that you have to choose which tamagotchi you are feeding
	// Eventually the buttons would have more functionality and you could choose which tamagotchi to fee and what you would feed them
	// feedTamagotchi (chooseTam, food) {
	// 	// when they are fed increase their food in tummy by one
	// 	chooseTam.foodInTummy = chooseTam.foodInTummy + 1;
	// 	console.log(chooseTam.name + ' just ate a ' + food + '!');
	// }, 
	feedTamagotchi () {
		// when they are fed increase their food in tummy by one
		tamagotchi1.foodInTummy = tamagotchi1.foodInTummy + 1;
		console.log(tamagotchi1.name + ' just ate a rainbow!');
	}, 
	// create a method for the player to give medicine to the tamagotchis
	// this code is to run with two tamagotchis directly in the console (as above)
	// medicateTamagotchi(chooseTam, medicine) {
	// 	// when they sleep increase theri health points by 1
	// 	chooseTam.health = chooseTam.health +1;
	// 	console.log('You gave ' + chooseTam.name + ' ' + medicine + '.');
	// },
	medicateTamagotchi() {
		// when they sleep increase theri health points by 1
		tamagotchi1.health = tamagotchi1.health +1;
		console.log('You gave ' + tamagotchi1.name + ' TUMS.');
	},
	// create a method for the player to put the tamagotchis to sleep
	// once again, this was for the two tamagotchi option, pre-buttons
	// knockOutTamagotchi(chooseTam){
	// 	// when they sleep increase their restedness points by one
	// 	chooseTam.restedness = chooseTam.restedness +1;
	// 	console.log(chooseTam.name + ' is sleeping. Zzzzzzz.')
	// }
		knockOutTamagotchi(){
		// when they sleep increase their restedness points by one
		tamagotchi1.restedness = tamagotchi1.restedness +1;
		console.log(tamagotchi1.name + ' is sleeping. Zzzzzzz.')
	}
}

// test out player methods
// player.feedTamagotchi()




// add event listeners to each of the buttons

// get the start button
let startButton = document.getElementById('start');
// console.log(startButton);
// have it call the start function
startButton.addEventListener('click', tamagotchi1.start);


// get the feed button
let feedButton = document.getElementById('feed');
// have it call the player.feed...method
feedButton.addEventListener('click', player.feedTamagotchi);
// console.log(feedButton);

// get the medicate button
let medicateButton = document.getElementById('medicate');
// have it call the player.medicate...method
medicateButton.addEventListener('click', player.medicateTamagotchi);
// console.log(medicateButton);

// get the rest button
let knockoutButton = document.getElementById('rest');
// have it run the player.knockOut...method
knockoutButton.addEventListener('click', player.knockOutTamagotchi);
// console.log(knockoutButton);




