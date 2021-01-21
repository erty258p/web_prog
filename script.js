"use script";
let userFirstName=prompt("Name", "default");
let userLastName=prompt("Family", "default");
let userBirthDay=prompt("Birth Day", "01"); 
let userBirthMonth=prompt("Birth Month", "01");
let userBirthYear=prompt("Birth Year", "1990");
let userAge = 2020 - userBirthYear;

alert('Name: ' + userFirstName + ' ' + userLastName + ' date of Birth: ' + userBirthDay + '.' + userBirthMonth + '.' + userBirthYear + ' age: ' + userAge);