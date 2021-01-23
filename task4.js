"use strict";
let City0 = {
	city_name: 'A',
	foundation_ear: 1939,
	numbers: 413000,
	country: 'Russia'
};
let City1 = {
	city_name: 'B',
	foundation_ear: 1939,
	numbers: 580000,
	country: 'Russia'
};
let City2 = {
	city_name: 'C',
	foundation_ear: 1939,
	numbers: 1000000,
	country: 'Russia'
};
let City3 = {
	city_name: 'D',
	foundation_ear: 1939,
	numbers: 123000,
	country: 'Russia'
};
let City4 = {
	city_name: 'E',
	foundation_ear: 1939,
	numbers: 5620,
	country: 'Russia'
};
let City5 = {
	city_name: 'F',
	foundation_ear: 1939,
	numbers: 5515,
	country: 'Russia'
};
let City = [City0, City1, City2, City3, City4, City5];
let sortByPopulation = (a) => {
	a.sort((a, b) => a.numbers - b.numbers);
}

sortByPopulation(City);
for (let i = 0; i < City.length; i++) {
console.warn(City[i].city_name);
}