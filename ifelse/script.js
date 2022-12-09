"use strict";

// let test = 11;

// if (test > 10) {
//     console.log('yes');
// } else {
//     console.log('no');
// }

// if(test < 10){
//     console.log('yes');
// } else{
//     console.log('no');
// }

// if(test >= 10){
//     console.log('yes');
// } else {
//     console.log('no');
// }

// if(test <= 10){
//     console.log('yes');
// } else {
//     console.log('no');
// }

// if( test == 10){
//     console.log('yes');
// } else {
//     console.log('no');
// }

// let test1 = 1;
// let test2 = 2;

// if(test1 > test2){
//     console.log(`${test1} > ${test2}`);
// } else {
//     console.log(`${test2} > ${test1}`);
// }

// if(test1 == test2){
//     console.log('yes');
// } else {
//     console.log('no');
// }

// let test1, test2;
// test1 = 'avb';
// test2 = 'abc';
// if(test1 == test2){
//     console.log('yes');
// } else {
//     console.log('no');
// }

// let test1 = '123';
// let test2 = 123;
// if(test1 == test2){
//     console.log('yes');
// } else {
//     console.log('no');
// }

// let num = 31;
// if(num > 0 && num < 5){
//     console.log('yes');
// }else {
//     console.log('no');
// }

// if(num >= 10 && num <= 20){
//     console.log('yes');
// } else {
//     console.log('no');
// }

// let num2 = 4;
// let num1 = 0;
// if(num1 <= 1 && num2 >= 3){
//     console.log('yes');
// }else {
//     console.log('no');
// }

// №1⊗jsPmCdLSI

// Дан следующий код:
// Используя оператор ! инвертируйте приведенное условие.

// if (!(num1 >= 0 || num2 <= 10)) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// NaN
// ''
// undefined
// false
// null
// 0

// let day = 33;
// if(day < 1 || day > 31){
//     console.log('error');
// } else{
//     if(day <= 10){
//         console.log('первая декада');
//     } else if(day >= 10 && day <= 20){
//         console.log('вторая декада');
//     } else if( day >= 20 && day <= 31){
//         console.log('Третья');
//     }
// }


let num = 22;

if(num >= 10 && num <=99){
    let str = String(num);
    console.log(+str[0] + +str[1]);
}else if (num <= 9){
    console.log('однозначно');
}