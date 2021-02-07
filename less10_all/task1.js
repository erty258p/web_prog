"use strict";
let AddTablePromise = () => {
    return new Promise((resolve,reject) => {
        let xhr = new XMLHttpRequest();
        let url = new URL('http://45.67.59.109:2001/orders');

        xhr.open('GET', url);
        xhr.send();
        xhr.onload = () => {
            if (xhr.status != 200) {
                reject(`Ошибка ${xhr.status}: ${xhr.statusText}`);
             } else {
            let orderList;
            
            orderList = JSON.parse(xhr.response);
            resolve(orderList);
            }
        }

    });
}