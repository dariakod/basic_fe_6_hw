// 1. Написать программу, которая считывает через prompt число и выводит в консоль его куб (в степени 3).

let number = +prompt('Enter the number');
console.log(number**3);


// 2. Написать программу, которая считывает два числа (объявляем две переменные и записываем туда результат работы двух вызовов prompt) и выводит их сумму. Не забудьте преобразовать полученные значения в число.

let number1 = +prompt("25");
let number2 = +prompt("35");

number1 = Number(25);
number2 = Number(35);

let sum = number1 + number2


// 3. Есть переменные username, usersurname, userage, userposition. Напишите программу которая через prompt заполняет эти переменные и выводит в консоль строку 
// “Hi, my name is  . I was born in <текущий год(2024) – user_age>. I’m .”

let user_name = 'Dasha'
let user_surname = 'Codjebas'
let user_age = 16
let user_year_of_birth = '2007'

console.log = prompt(`Hi my name is ${user_name} ${user_surname}. I was born in ${user_year_of_birth}. I'm ${user_age}.`);
