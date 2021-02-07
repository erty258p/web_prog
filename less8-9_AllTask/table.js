"use strict";

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
 } , {
	name: 'someName2',
	description: 'someDescription2', 
	cost: 'someCost2', 
	currency: 'someCurrency2', 
	size: 'someSize2', 
	weight: 'someWeight2', 
	manufacture: 'someManufacture2', 
	date: 'someDate2'
 } , {
	name: 'someName4',
	description: 'someDescription4', 
	cost: 'someCost4', 
	currency: 'someCurrenc4', 
	size: 'someSize4', 
	weight: 'someWeight4', 
	manufacture: 'someManufacture4', 
	date: 'someDate4'
 } ];
let table = document.querySelector('#table');
//для task3
let info = (object) => {
	let tr_info = document.createElement('tr');

	document.body.querySelector('#info').innerText = 'Информация о товаре';
	for ( let key in object) {
		let td_info = document.createElement('td');

		td_info.innerText = object[key]
		tr_info.appendChild(td_info);
	}
	
	return(tr_info);
}
//
for (let elem of orderList) {
	let tr = document.createElement('tr');
	let a = document.createElement('a');
	let td_a = document.createElement('td'); 
		
	tr.id = "row" + elem.name;
	a.innerText = elem.name;
	a.addEventListener('click', (el) => {
		document.body.querySelector('#info').appendChild(info(orderList.find(obj => obj.name == a.innerText)));
	});
	td_a.appendChild(a);
	tr.appendChild(td_a);
	for (let key in elem) {
		if (key !== 'name'){
			let td = document.createElement('td');
			
			td.innerHTML = elem[key];
			tr.appendChild(td);
		}
	}
	 //кнопка удалить
	let td_button = document.createElement('td'); 
	let button = document.createElement('button');

	button.innerText = 'удалить';
	td_button.appendChild(button);
	tr.appendChild(td_button);
	button.addEventListener ('click', (evt) => {
		evt.target.closest('tr').remove();
	});
	//
	table.appendChild(tr);
}

