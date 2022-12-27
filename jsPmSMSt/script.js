// №3⊗jsPmSMSt
// Дана строка 'я учу javascript!'. Вырежьте из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).

// let str = 'я учу javascript!';

// let substr = str.substr(2, 4);
// console.log(substr);

// let substring = str.substring(2, 5);
// console.log(substring);

// let slice = str.slice(2, 5);
// console.log(slice);

// let str = 'abcde';

// №4⊗jsPmSMSt
// Дана строка 'abcde'. Определите позицию буквы 'c' в этой строке.
// console.log(str.indexOf('c'));

// №5⊗jsPmSMSt
// Дана строка. Проверьте, есть ли в этой строке символ 'a'.

// if(str.indexOf('a') >= 0){
//   console.log('есть');
// }

// console.log((str.indexOf('a') >= 0) ? 'есть' : 'нет');

// №6⊗jsPmSMSt
// Дана строка. Проверьте, начинается ли эта строка с символа 'a'.

// if(str.indexOf('a') != 0){
//   console.log('нет');
// }else {
//   console.log('есть');
// }

// console.log((str.indexOf('a') === 0) ? 'есть' : 'нет');

// №7⊗jsPmSMSt
// Дана строка. Проверьте, заканчивается ли эта строка на символ 'a'.
// if(str.lastIndexOf('a') != 0){
//   console.log('нет');
// }else {
//   console.log('есть');
// }

// console.log((str.lastIndexOf('a') === 0) ? 'есть' : 'нет');

// №10⊗jsPmSMSt
// Дана строка. Проверьте, начинается ли эта строка на 'http://'.
// let str = 'https://www.code.mu/ru/javascript/book/prime/inbuilt/string/';
// console.log(str.startsWith('http://'));

// №11⊗jsPmSMSt
// Дана строка. Проверьте, заканчивается ли эта строка на '.html'.
//console.log(str.endsWith('.html'));

// №12⊗jsPmSMSt
// Дана строка '1-2-3-4-5'. С помощью метода split запишите каждое число этой строки в отдельный элемент массива.

// let str = '1-2-3-4-5';

// let arr = str.split('-');
// console.log(arr);

// №13⊗jsPmSMSt
// Дана строка '12345'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.

// let str = '12345';
// let arr = str.split('');
// console.log(arr);

// №14⊗jsPmSMSt
// Дан следующий массив:
// let arr = [1, 2, 3, 4, 5];
// С помощью метода join слейте его в строку '1-2-3-4-5'.
// let str = arr.join('');
// console.log(str);