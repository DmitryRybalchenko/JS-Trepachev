"use strict";

// №1⊗jsPmMuOI

// Дан следующий объект:

// let obj = {
// 	1: {
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	2: {
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	3: {
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// }
// // Используя циклы, найдите сумму элементов этого объекта.

// let sum = 0;
// for(let key in obj){
//     for(let subKey in obj[key]){
//         sum += obj[key][subKey];
//     }
// }
// console.log(sum);

// №2⊗jsPmMuOI

// Дан следующий объект:

// let obj = {
// 	1: {
// 		1: {
// 			1: 111,
// 			2: 112,
// 			3: 113,
// 		},
// 		2: {
// 			1: 121,
// 			2: 122,
// 			3: 123,
// 		},
// 	},
// 	2: {
// 		1: {
// 			1: 211,
// 			2: 212,
// 			3: 213,
// 		},
// 		2: {
// 			1: 221,
// 			2: 222,
// 			3: 223,
// 		},
// 	},
// 	3: {
// 		1: {
// 			1: 311,
// 			2: 312,
// 			3: 313,
// 		},
// 		2: {
// 			1: 321,
// 			2: 322,
// 			3: 323,
// 		},
// 	},
// }
// // Используя циклы, найдите сумму элементов этого объекта.

// let sum = 0;
// for(let key in obj){
//     for(let subKey in obj[key]){
//         for(let subSubKey in obj[key][subKey]){
            
//             sum += obj[key][subKey][subSubKey]
//         }
//     }
// }

// console.log(sum);

// №1⊗jsPmMuSt
// Дан следующий объект со студентами:

// let students = {
// 	'group1': ['name11', 'name12', 'name13'],
// 	'group2': ['name21', 'name22', 'name23'],
// 	'group3': ['name31', 'name32', 'name33'],
// };
// // Выведите на экран первого студента из третьей группы.

// console.log(students.group3[0]);

// №1⊗jsPmMuSI

// Дана следующая структура с данными:

// let data = {
// 	1: [
// 		'data11',
// 		'data12',
// 		'data13',
// 	],
// 	2: [
// 		'data21',
// 		'data22',
// 		'data23',
// 	],
// 	3: [
// 		'data31',
// 		'data32',
// 		'data33',
// 	],
// 	4: [
// 		'data41',
// 		'data42',
// 		'data43',
// 	],
// };
// // С помощью вложенных циклов выведите на экран все строки с данными.

// for(let key in data){
// 	for(let elem of data[key]){
// 		console.log(elem);
// 	}
// }

// №2⊗jsPmMuSI
// Дана следующая структура с данными:

// let data = [
// 	{
// 		1: 'data11',
// 		2: 'data12',
// 		3: 'data13',
// 	},
// 	{
// 		1: 'data21',
// 		2: 'data22',
// 		3: 'data33',
// 	},
// 	{
// 		1: 'data31',
// 		2: 'data32',
// 		3: 'data33',
// 	},
// ];
// // С помощью вложенных циклов выведите на экран все строки с данными.

// for(let elem of data){
// 	for(let key in elem){
// 		console.log(elem[key]);
// 	}
// }

// №3⊗jsPmMuSI
// Дана следующая структура с данными:

// let data = [
// 	{
// 		1: [
// 			'data111',
// 			'data112',
// 			'data113',
// 		],
// 		2: [
// 			'data121',
// 			'data122',
// 			'data123',
// 		],
// 	},
// 	{
// 		1: [
// 			'data211',
// 			'data212',
// 			'data213',
// 		],
// 		2: [
// 			'data221',
// 			'data222',
// 			'data223',
// 		],
// 	},
// 	{
// 		1: [
// 			'data411',
// 			'data412',
// 			'data413',
// 		],
// 		2: [
// 			'data421',
// 			'data422',
// 			'data423',
// 		],
// 	},
// ];
// // С помощью вложенных циклов выведите на экран все строки с данными.

// for(let obj of data){
// 	for(let key in obj){
// 		for(let elem of obj[key]){
// 			console.log(elem);
// 		}
// 	}
// }

// №1⊗jsPmMuAOO
// Дан следующий массив работников:

// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 	},
// ];
// // Выведите на экран данные каждого работника в формате имя - зарплата.

// for(let obj of employees){
// 	console.log(obj.name + '-' + obj.salary);
// }

// №2⊗jsPmMuAOO

// Дан следующий массив работников:

// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 	},
// ];
// Выведите на экран сумму зарплат всех работников.

// №3⊗jsPmMuAOO

// Дан следующий массив работников:

// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 		age: 28,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 		age: 29,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 		age: 30,
// 	},
// 	{
// 		name: 'name4',
// 		salary: 600,
// 		age: 31,
// 	},
// 	{
// 		name: 'name5',
// 		salary: 700,
// 		age: 32,
// 	},
// ];
// // Выведите на экран сумму зарплат тех работников, возраст которых равен или более 30 лет.
// let sum = 0;
// for (let person of employees){
// 	if(person.age >= 30){
// 		sum += person.salary;
// 	}
// }

// console.log(sum);

