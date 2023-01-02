// // Задание 1
// // const spainCapital = 'Valencia';
// // let isCorrectAnswer;

// // Конструкция if..else
// // if (spainCapital === 'Madrid') {
// //     isCorrectAnswer = true;
// // } else if (spainCapital === 'madrid') {
// //     isCorrectAnswer = true;
// // } else if (spainCapital === 'MADRID') {
// //     isCorrectAnswer = true;
// // } else {
// //     isCorrectAnswer = false;
// // }

// // Добавьте код здесь, переписав конструкцию выше на switch
// // switch (spainCapital) {
// //   case 'Madrid':
// //     isCorrectAnswer = true;
// //     break;
// //   case 'madrid':
// //     isCorrectAnswer = true;
// //     break;
// //   case 'MADRID':
// //     isCorrectAnswer = true;
// //     break;
// //   default:
// //     isCorrectAnswer = false;
// //     break;
// // }

// // console.log(isCorrectAnswer);

// // Задание 2
// // const a = 1;
// // const b = 2;
// // let result;

// // // if (a + b < 4) {
// // //   result = 'Мало';
// // // } else {
// // //   result = 'Много';
// // // }

// // // Добавьте код здесь, переписав конструкцию выше на тернарный оператор

// // result = a + b < 4 ? 'Мало' : 'Много';
// // console.log(result);

// // 1) Создайте массив numbers и сохраните в нем 3 числа - 1, 2 и 3
// const numbers = [];
// numbers.push(1,2,3);

// // 2) Создайте переменную luckyNumber и сохраните в него последнее число из массива (используя индекс массива).
// let luckyNumber = numbers[numbers.length - 1];

// // 3) Удалите последний элемент массива и добавьте в конец массива два новых числа.
// numbers.pop(numbers[numbers.length - 1]);
// numbers.push(7, 8);
// console.log(numbers);