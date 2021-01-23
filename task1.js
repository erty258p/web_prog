"use strict";
let FirstCity = {
	city_name: 'Magnitogorsk',
	foundation_ear: 1939,
	numbers: 413000,
	country: 'Russia'
};
let SecondCity = {
	city_name: 'Chelyabinsk',
	foundation_ear: 1736,
	numbers: 1296000,
	country: 'Russia'
};
let comp_lenght_name = (str1, str2) => str1.length > str2.length ;
let comp_numbers = (a, b) => a > b;
let comp_foundation_ear = (a, b) => a - b;
let showFullInformation = function(){
	console.warn(`The city ${this.city_name} is based in ${this.foundation_ear} and located in the country ${this.country}, the population of the city is ${this.numbers} people.`);
}

if (comp_lenght_name(FirstCity.city_name, SecondCity.city_name)) {
	console.warn(`City ​​name "${FirstCity.city_name}" is longer than city "${SecondCity.city_name}"`);
} else {
	console.warn(`City ​​name "${SecondCity.city_name}" is longer than city "${FirstCity.city_name}"`);
}
if (comp_numbers(FirstCity.numbers, SecondCity.numbers)){
	console.warn(`Population in city "${FirstCity.city_name}" is more than in city "${SecondCity.city_name}"`);
} else {
	console.warn(`Population in city "${SecondCity.city_name}" is more than in city "${FirstCity.city_name}"`);
}	
if (comp_foundation_ear(FirstCity.foundation_ear, SecondCity.foundation_ear)<0){
	console.warn(`Сity ​​"${FirstCity.city_name}" is older than city "${SecondCity.city_name}" by ${Math.abs(comp_foundation_ear(FirstCity.foundation_ear, SecondCity.foundation_ear))} years`);
} else {
	console.warn(`Сity ​​"${SecondCity.city_name}" is older than city "${FirstCity.city_name}" by ${Math.abs(comp_foundation_ear(FirstCity.foundation_ear, SecondCity.foundation_ear))} years`);
}	
FirstCity.info = showFullInformation;
SecondCity.info = showFullInformation;
FirstCity.info();
SecondCity.info();


