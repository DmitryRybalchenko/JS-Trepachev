"use strict";

// ⊗jsPmMuAFP
// Автор следующего кода хотел сделать двухмерный массив:
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
// let arr = [];

// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }

// console.log(arr);

// №2⊗jsPmMuAFP
// Автор следующего кода хотел сделать двухмерный массив:
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }

// console.log(arr);

// №3⊗jsPmMuAFP
// Автор следующего кода хотел сделать двухмерный массив:
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.s
// let arr = [];

// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
	
// 	for (let j = 1; j <= 5; j++) {
//         arr[i].push(j);
// 	}
// }
// console.log(arr);

// №1⊗jsPmMuAFO
// Сформируйте с помощью двух вложенных циклов следующий массив:
// [[1, 2], [3, 4], [5, 6], [7, 8]]

// let arr = [];
// let counter = 1;

// for(let i = 0; i < 4; i++){
//     arr[i] = [];
//     for(let j = 0; j < 2; j++){
//         arr[i].push(counter++);
//     }
// }

// console.log(arr);

// №2⊗jsPmMuAFO
// Сформируйте с помощью двух вложенных циклов следующий массив:

// [[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]]

let arr = [];
let counter = 0;
for(let i = 0; i < 4; i++){
    arr[i] = [];
    for(let j = 0; j < 3; j++){
        arr[i].push(counter += 2);
    }
}

console.log(arr);