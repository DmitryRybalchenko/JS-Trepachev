// №1⊗jsPmSMAr
// Дан следующий массив:
// [1, 2, 3]
// Добавьте ему в конец элементы 4, 5, 6.

// let arr = [1,2,3];
// arr.push(4,5,6);

// console.log(arr);

// arr.unshift(4,5,6);
// console.log(arr);

// №3⊗jsPmSMAr
// Дан следующий массив:
// [1, 2, 3]
// Выведите на экран первый элемент этого массива.

// let arr = [1,2,3];

// let first = arr.shift();
// console.log(first);

// let last = arr.pop();
// console.log(last);

// №5⊗jsPmSMAr
// Дан следующий массив:
// [1, 2, 3, 4, 5]
// Сделайте из этого массива следующий:
// [1, 2, 3]

// let arr = [1,2,3,4,5];
// let subArr = arr.slice(0, 3);
// console.log(arr);
// console.log(subArr);

// №6⊗jsPmSMAr
// Дан следующий массив:
// [1, 2, 3, 4, 5]
// Используя этот массив, запишите в новую переменную следующий массив:
// [4, 5]

// let arr = [1,2,3,4,5];
// let sub = arr.slice(-2);

// console.log(sub);

// №7⊗jsPmSMAr
// Дан следующий массив:
// [1, 2, 3, 4, 5]
// С помощью метода splice преобразуйте массив в следующий:
// [1, 4, 5]

// let arr = [1,2,3,4,5];
// let sub = arr.splice(1, 2);

// console.log(arr);

// №8⊗jsPmSMAr
// Дан следующий массив:
// [1, 2, 3, 4, 5]
// С помощью метода splice сделайте из него массив:
// [1, 2, 3, 'a', 'b', 'c', 4, 5]

// let arr = [1,2,3,4,5];
// arr.splice(3, 0, 'a', 'b', 'c');
// console.log(arr);

// №9⊗jsPmSMAr
// Дан следующий массив:
// [1, 2, 3, 4, 5]
// С помощью метода splice сделайте из него массив:
// [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']

// let arr = [1,2,3,4,5];

// arr.splice(1, 0, 'a', 'b');
// arr.splice(-1, 0, 'c');
// arr.splice(arr.length, 0, 'e');

// console.log(arr);

// №10⊗jsPmSMAr
// Дан следующий массив:
// [1, 2, 3, 4, 5]
// Найдите позицию числа 3 в этом массиве.

// let arr = [1,2,3,4,5];
// console.log(arr.indexOf(3));

// №11⊗jsPmSMAr
// Дан следующий массив:
// [1, 2, 3, 4, 5]
// Проверьте, есть ли в этом массиве число 3.

// let arr = [1,2,3,4,5];
// let result = arr.includes(3);
// console.log(result);