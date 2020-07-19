"use strict";
class Animal {
	voice: string;
	constructor() {
		this.voice = "";
	}
	bark() {
		console.log(this.voice);
	}
	fight(target: Animal) {
		console.log(target.voice);
		console.log(this.voice);
	}
}
let pochi: Animal = new Animal();
let tama: Animal = new Animal();
pochi.voice = "Bow";
tama.voice = "Maow";
tama.fight(pochi);


