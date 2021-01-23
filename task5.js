"use strict";

let array = [45, 78, 10, 3];
let my = (a, b) => b - a;
let SumOfDigits = array.sort(my).map(item => {
	let sum = 0;

	for(let i = 0; i < item.toString().length; i++) {
	sum+=Number(item.toString()[i]);
	}
	
	return sum;
});

console.log(array);
console.log(SumOfDigits);