// let str = "hello world";

// №1⊗jsPmSMPrm
// Преобразуйте последнюю букву строки в верхний регистр.

// let result = str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(result);

// №2⊗jsPmSMPrm
// Преобразуйте первые 2 буквы строки в верхний регистр.

// let result = str.slice(0, 2).toUpperCase() + str.slice(2);

// console.log(result);

// №3⊗jsPmSMPrm
// Пусть дана строка, у которой первая буква в верхнем регистре, например вот такая:
// Преобразуйте первую букву строки в нижний регистр.
// let str = 'London';
// let result = str.slice(0, 1).toLowerCase() + str.slice(1);
// console.log(result);

// Пусть у нас есть некоторая переменная с текстом, состоящим из нескольких слов:
// Давайте напишем код, который преобразует первую букву каждого слова в верхний регистр.
// let str = 'word1 word2 word3';
// let arr = [];
// let worlds = str.split(' ');
// for (let world of worlds) {
//   world = world.slice(0, 1).toUpperCase() + world.slice(1);
//   arr.push(world);
// }
// let str1 = arr.join(' ');
// console.log(str1);

// let str = 'word1 word2 word3';

// let worlds = str.split(' ');

// worlds.forEach(function(elem, index){
//   return worlds[index] = worlds[index].slice(0, 1).toUpperCase() + worlds[index].slice(1); 
// });

// console.log(worlds);

// console.log('word1 word2 word3'.split(' ').map(el => el.slice(0,1).toUpperCase() + el.slice(1)).join(' '));

// №5⊗jsPmSMPrm
// Преобразуйте строку 'var_test_text' в 'VarTestText'.
// Написанный код должен работать для любых строк такого типа (то есть для строк, в которых слова разделены символов подчеркивания).


// let str = 'var_test_text';

// let worlds = str.split('_').map(el => el[0].slice(0, 1).toUpperCase() + el.slice(1)).join('');

// console.log(worlds);

// №7⊗jsPmSMPrm
// Дана строка со словами. Напишите скрипт, который переставит слова в строке в обратном порядке.

let str = 'hello world!';

let result = str.split('').reverse().join('');
console.log(result);


