// №1⊗jsPmSMMth
// Возведите 2 в 10 степень.
// console.log(Math.pow(2, 10));

// №2⊗jsPmSMMth
// Найдите квадратный корень из 245.
// console.log(Math.sqrt(245));

// №3⊗jsPmSMMth
// Дан следующий массив:
// Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом

// let arr = [4, 2, 5, 19, 13, 0, 10];
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//   sum += Math.pow(arr[i], 3);
// }

// arr.forEach(el => sum += Math.pow(el, 3));

// let sum = arr.reduce((total, el) => total += Math.pow(el, 3));
// let sqrt = Math.sqrt(sum);
// console.log(sqrt);

// №4⊗jsPmSMMth
// Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
// let num = 379;
// let sqrt = Math.sqrt(num);
// console.log(Math.round(sqrt));
// console.log(sqrt.toFixed(1));
// console.log(sqrt.toFixed(2));

// №5⊗jsPmSMMth
// Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.

// let num = 587;
// let sqrt = Math.sqrt(num);
// let floor = Math.floor(sqrt);
// let ceil = Math.ceil(sqrt);

// let obj = {floor, ceil}
// console.log(obj);