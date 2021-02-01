"use script";
let otder = {
	name: 'Chocolate' ,
	description: 'Food product',
	cost: 25,
	cyrrency: 'RUB' ,
	manufacturers_firm: 'Сonfectionery' ,
	date_of_manufacture: '25 Feb. 2020'
};
let unfilledOrder = {
	name: 'Marshmallows' ,
	manufacturers_firm: 'Сonfectionery' ,
	date_of_manufacture: '15 Mar. 2020'
};
let FullInfo = (a) => {
	let {name = 'Not specified', description = 'Not specified', cost = 'Not specified', cyrrency = 'Not specified', manufacturers_firm = 'Not specified', date_of_manufacture = 'Not specified' } = a;
	let Validation = () => {
		if (name == 'Not specified' || description == 'Not specified' || cost == 'Not specified' || cyrrency == 'Not specified' ||  manufacturers_firm == 'Not specified' || date_of_manufacture == 'Not specified') {
			alert ('No product data entered');
		}
		if ( typeof cost === 'string') alert ('Incorrectly entered the value of the goods');
		else if (cost < 0) alert ('Incorrectly entered the value of the goods'); 
	}
	
	alert (` Name: ${name}\n Description: ${description}\n Cost: ${cost}\n Cyrrency: ${cyrrency}\n Manufacturers firm:${manufacturers_firm}\n Date of manufacture: ${date_of_manufacture}`);
	Validation();
}

FullInfo(otder);
FullInfo(unfilledOrder);