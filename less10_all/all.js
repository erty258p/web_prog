"use stcriсt";

AddTablePromise() //task1
    .then((result) =>{
        for (let el of result) {
			let tr = document.createElement('tr');
			let a = document.createElement('a');
			let td_a = document.createElement('td');
			let td_button = document.createElement('td'); 
            let button_remove = document.createElement('button');
			
			tr.id = el.id;
			a.innerText = el.name;
			td_a.appendChild(a);
			a.addEventListener('click', (ev) => { 		//task2
				let id_oreder = ev.target.closest('tr').id;
				alert
				ShowInfoPromise(id_oreder);
			});
			tr.appendChild(td_a);
			
            for (let key in el) {
				if (key != 'id' && key != 'name') {
					let td = document.createElement('td');

					td.innerHTML = el[key];
					tr.appendChild(td);
				}
			}
			button_remove.innerText = 'удалить';
			td_button.appendChild(button_remove);
			tr.appendChild(td_button);
			button_remove.addEventListener ('click', function(evt) {
				evt.target.closest('tr').remove();
			});
			table.appendChild(tr);
        }
    })