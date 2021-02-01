"use script";
let orderList = [{
	name: 'someName', 
	description: 'someDescription', 
	cost: 'someCost', 
	currency: 'someCurrency',
	size: 'someSize', 
	weight: 'someWeight', 
	manufacture: 'someManufacture', 
	date: 'someDate'
} , {
	name: 'someName1',
	description: 'someDescription1', 
	cost: 'someCost1', 
	currency: 'someCurrency1', 
	size: 'someSize1', 
	weight: 'someWeight1', 
	manufacture: 'someManufacture1', 
	date: 'someDate1'
 },];
let table = document.querySelector('#table');
let	count = 0;

for (let elem of orderList) {
	let tr = document.createElement('tr');
	let a = document.createElement('a');
	console.log(count);
	if (count == 0) {
		a.href = "product.html";		
	} else if (count == 1) {
		a.href = "product2.html";
	}
	count++;
	a.innerText = elem.name;
	tr.appendChild(a);
	for (let key in elem) {
		if (key !== 'name'){
			let td = document.createElement('td');
			
			td.innerHTML = elem[key];
			tr.appendChild(td);
		}
	}
	
	table.appendChild(tr);
}