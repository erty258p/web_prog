"use script";
let fullinfo = (object) => {
	let  table = document.querySelector('#table1');
	let tr = document.createElement('tr');
	/*для вывода можно использовать дискритизацию, но мне не охота расписывать. прошу простить*/
	for ( let key in object) {
		let td = document.createElement('td');
		td.innerHTML =object[key];
		tr.appendChild(td);
	}
	table.appendChild(tr);
}
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

