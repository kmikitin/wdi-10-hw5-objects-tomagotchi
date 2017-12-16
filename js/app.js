console.log('I aim to misbehave.');

// Clicker
// Make an object called clicker, which has a clickCount property, and a click method.
let clicker = {
	clickCount: 0,
	click () {
		this.clickCount++;
	}
}
// Have the click method increment the clickCount by 1 each time it is called.