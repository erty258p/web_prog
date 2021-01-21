"use strict";
let check = (a, b) =>
{
	let flag_win =false;
	
	if (a > b) alert("more than the gen");		
	else if (a < b) alert("less than the gen");		
	else 
	{
		alert("You win!");
		flag_win = true;
	}
	
	return(flag_win);
}

let gen_a = Math.floor(Math.random() * 9);
let in_a;
let flag=false;
for (let i = 0;((!flag) && (i < 5)); i++)
{
	in_a = prompt("insert the numbe")
	flag = check(in_a, gen_a);
}
if (!flag) alert('you lost');