"use strict";

let in_str = prompt("string");
let capitalise = (str) =>
{
	let a;
	
	a = str[0].toUpperCase() + str.slice(1);
	
	console.warn(a);
}

capitalise(in_str);