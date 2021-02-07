"use strict";
let ShowInfoPromise = (id) => {
    let table = document.querySelector('#table');
    let table_order = document.querySelector('#order');
    let xhr_order = new XMLHttpRequest();
    let url = new URL('http://45.67.59.109:2001/order');
    
    url.searchParams.set("id", id);
	xhr_order.open('GET', url);
	xhr_order.send();
	xhr_order.onload = () => {
        if (xhr_order.status != 200) {
            alert(`Ошибка ${xhr_order.status}: ${xhr_order.statusText}`);
        } else {
            let order = JSON.parse(xhr_order.response);
			let tr_order = document.createElement('tr');
			let td_back = document.createElement('td');
			let button_back = document.createElement('button')

            tr_order.id = order.id;
            for (let key in order){
                 if (key !== 'id'){
				    let td_order = document.createElement('td');

				    td_order.innerText = order[key];
				    tr_order. appendChild(td_order);
                }
            }
                        //вызов task3
            let button_pay = document.createElement('button');
            let td_pay = document.createElement('td');
            button_pay.innerText = 'Оплата';
			button_pay.addEventListener('click', (ev) => {
                let id_pay = ev.target.closest('tr').id;

                PayPromise(id_pay);
            });			
			td_pay.appendChild(button_pay);
			tr_order.appendChild(td_pay);
                        //end 
            button_back.innerText = 'назад'; 
			button_back.addEventListener('click', () => {
				document.querySelector('#order').hidden = true;
				document.querySelector('#order').lastChild.remove();
				table.hidden = false;
			});
						
			table.hidden = true;
			td_back.appendChild(button_back);
			tr_order.appendChild(td_back);
			table_order.hidden = false;
			table_order.appendChild(tr_order);
        }

    }

}