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

// function grow(x){
//   return x.reduce((acum, elem) => acum *= elem);
// }

// console.log(grow([1, 2, 3]))

// function findSmallestInt(args) {
//   let min = args[0];
//   for(let i = 0; i < args.length; i++){
//     if(min > args[i]){
//       min = args[i];
//     }
//   }
//   return min;
// }

// findSmallestInt([78,56,232,12,8]);

// function summation(num) {
//   // let sum = 0;
//   // for(let i = 1; i <= num; i++){
//   //   sum += i;
//   //   console.log(i);
//   // }
//   // console.log(sum);
//   // return sum;
//   return toString(num).reduce((sum, item) => sum += item);
// }

// summation(2);

// const dog = {
//   name: 'жуля',
//   age: 0,
//   color: 'Черный с белым',
//   weight: 2
// }

// dog['breed'] = 'Двортерер';

// console.log(dog);

// const htmlDiv = {
//   className: 'column',
//   rel: 'main',
//   id: 'block',
// };

// for(let key in htmlDiv){
//   console.log(htmlDiv[key]);
// }

// const person = {
//   name: 'Anna',
//   surname: 'Dance',
//   age: 18,
//   greeting(){
//     console.log('Hello');
//   },
//   changeSurname(surname){
//     this.surname = surname;
//   }
// };

// 1.
// const correctAnswer = 'JavaScript';
// const userAnswer = ' javaScript! ';

// const isCorrect = userAnswer.toLowerCase().includes(correctAnswer.toLowerCase()); //TODO: сохранить true или false в зависимости от выполнения условия по заданию 1.
// console.log(isCorrect);

// const salary = 3;
// const salaryFixed = salary.toFixed(2);
// console.log(salaryFixed);

// const fruits = ['apple', 'banana', 'melon', 'orange'];
// const hasOrange = fruits.includes('orange');

// const cars = ['BMW', 'Nissan', 'VW', 'Skoda', 'Audi', 'Kia'];
// const favoriteCars = cars.filter((item, index) => index < 3);

// const otherCars = cars.reverse().filter((item, index) => index < 3);

// const average = function(...args){
//   let sum = args.reduce((acum, index) => acum += index);
//   return sum / args.length;
// }

// console.log(average(2, 4, 4, 2));

// let arr = [1,2,3,5,3];
// let counter = 0;

// function getLength (arr){
//   let res = arr.pop();
//   if(res === undefined){
//     return counter;
//   }
//   counter++;
//   return getLength(arr);
// }

// console.log(getLength(arr));

// function addByX(num){
//   let sum = (num1) => num + num1;
//   return sum;
// }

// const addByTwo = addByX(2);
// addByTwo(3); // 5
// addByTwo(5); // 7


const supporter1 = {
  club: 'Milan',
  
  chant() {
      setTimeout(() => console.log(this.club), 1000);
  }
}

const supporter2 = {
  club: 'Inter'
}

supporter2.chant = supporter1.chant.bind(supporter2);
console.log(supporter2.chant());
