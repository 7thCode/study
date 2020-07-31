"use strict";

const isPrime = (x: number): boolean => {
	let max: number = Math.floor(Math.sqrt(x));
	let result: boolean = true;
	for (let y = 2; y <= max; y++) {
		if ((x % y) === 0) {
			result = false;
			break;
		}
	}
	return result;
}

for (let X = 3; X < 1000; X+=2) {
	if (isPrime(X)) {
		console.info(X);
	}
}


