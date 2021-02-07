"use strict";

let PayPromise = (id) => {
    let xhr_pay = new XMLHttpRequest();
	let url = new URL('http://45.67.59.109:2001/order/pay');

	xhr_pay.open('POST', url);
	xhr_pay.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
	xhr_pay.send(JSON.stringify({id}));
	xhr_pay.onload = () => {
		if (xhr_pay.status != 200) {
			alert(`Ошибка ${xhr_pay.status}: ${xhr_pay.statusText}`);
		} else {
			alert(xhr_pay.response);
		}
	}
}