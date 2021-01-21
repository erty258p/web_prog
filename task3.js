"use strict";
let in_a = prompt('insert the number');
let getDigisSum = (a) =>
{
	let sum = 0;
	
	for (let i = 0; i < in_a.length ; i++)
	{
		sum = sum + a % 10;
		a = Math.floor(a/10);
	}
	
	return(sum);
}

alert( getDigisSum(in_a));