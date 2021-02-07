"use strict";

let addline = (obj) => {
    let tr = document.createElement('tr');
    let tr_new = document.getElementById ('AddLine');
    let tab = document.createElement('table');
    let button_remove = document.createElement('button');

    for (let key in obj) {
        let td = document.createElement('td');
        
        td.innerText = obj[key];
        tr.appendChild(td)
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
    document.getElementById ('AddLine').remove();
    table.appendChild(tr);
    table.appendChild( tr_new);
}

document.getElementById('button_addline').addEventListener('click', () => {
    let name = document.getElementById('name').value;
    let descriptione = document.getElementById('description').value;
    let cost = document.getElementById('cost').value;
    let currency = document.getElementById('currency').value;
    let size = document.getElementById('size').value;
    let weight = document.getElementById('weight').value;
    let manufacture = document.getElementById('manufacture').value;
    let date = document.getElementById('date').value;
    let line = {name, descriptione, cost, currency, size, weight, manufacture, date};
    
    
    addline(line);
})