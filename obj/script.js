"use strict";

// let week = {
//     1: 'Понедельник',
//     2: 'Вторник',
//     3: 'Среда',
//     4: 'Четверг',
//     5: 'Пятница',
//     6: 'Суббота',
//     7: 'Воскресенье',
// }

// console.log(week);

// №1⊗jsPmObSK
// Создайте объект user с ключами 'name', 'surname', 'patronymic' и какими-то произвольными значениями. Выведите на экран фамилию, имя и отчество через пробел.
// let user = {
//     name: "Dima",
//     surname: "Rybalchenko",
//     patronymic: 'Aleksandrovich'
// }
// console.log(`${user['name']}  ${user['patronymic']}  ${user['surname']}`);

// №1⊗jsPmObPr
// Создайте объект date с ключами 'year', 'month' и 'day' и значениями, соответствующими текущему дню. Выведите созданную дату на экран в формате год-месяц-день.

// let date = {
//     year: 2022,
//     month: 12,
//     day: 5
// };
// console.log(`${date.year}-${date.month}-${date.day}`);

// №1⊗jsPmObKR

// Дан объект:

// let obj = {
// 	'1a': 1, да
// 	'b2': 2, нет
// 	'с-с': 3, да
// 	'd 4': 4, да
// 	'e5': 5 нет
// };
// Для каких ключей данного объекта кавычки обязательны, а для каких нет?

// №2⊗jsPmObKR
// Исправьте ошибки, допущенные в следующем коде:

// let obj = {
// 	'1a': 1,
// 	'b2': 2,
// 	'с-с': 3,
// 	'd 4': 4,
// 	'e5': 5
// };

// console.log(obj['1a']);
// console.log(obj.b2);
// console.log(obj['c-c']);
// console.log(obj['d 4']);
// console.log(obj.e5);

// №1⊗jsPmObECh
// Дан объект:
// Возведите в квадрат каждый элемент этого объекта.

// let obj = {x: 1, y: 2, z: 3};
// obj.x *= 2;
// obj.y *= 2;
// obj.z *= 2;
// console.log(obj);

// №1⊗jsPmObEA
// Создайте пустой объект, а затем заполните его значениями.
// let obj = {}
// obj.a = 1;
// obj.b = 3;
// obj.c = 23;
// console.log(obj);

// №1⊗jsPmObKA
// Получите массив ключей следующего объекта:

// let obj = {x: 1, y: 2, z: 3};
// let keys = Object.keys(obj);
// let values = Object.values(obj);
// console.log(keys);
// console.log(values);

// №1⊗jsPmObLn
// Найдите количество элементов в следующем объекте:

// let obj = {x: 1, y: 2, z: 3};
// console.log(Object.keys(obj).length);

// №1⊗jsPmObVK
// Дан следующий объект:
// Дана переменная key, в которой хранится один из ключей нашего объекта. Выведите с помощью этой переменной соответствующий элемент объекта.
// let obj = {x: 1, y: 2, z: 3};
// let key = 'y';
// console.log(obj[key]);

// №1⊗jsPmObEVM
// Исправьте ошибку, допущенную в следующем коде:

// let obj = {x: 1, y: 2, z: 3};
// console.log(obj['x']);

// ⊗jsPmObEVM
// Исправьте ошибку, допущенную в следующем коде:

// let obj = {x: 1, y: 2, z: 3};
// let key = 'x';
// console.log(obj[key]);

// №1⊗jsPmObPVM
// Исправьте ошибку, допущенную в следующем коде:
// let obj = {x: 1, y: 2, z: 3};
// let prop = 'x';
// console.log(obj[prop]);

// №2⊗jsPmObPVM
// Исправьте ошибку, допущенную в следующем коде:
// let obj = {x: 1, y: 2, z: 3};
// let prop = 'x';
// console.log(obj[prop]);

// №1⊗jsPmObCP
// В следующем коде ключ должен был взяться из переменной. Исправьте допущенную ошибку:

// let key = 'x';

// let obj = {
// 	[key]: 1,
// 	y: 2,
// 	z: 3
// };
// console.log(obj);

// №2⊗jsPmObCP

// Дан объект:
// let key1 = 'x';
// let key2 = 'y';
// let key3 = 'z';

// let obj = {
// 	[key1]: 1,
// 	[key2]: 2,
// 	[key3]: 3
// };

// console.log(obj);
// Даны переменные:
// Сделайте так, чтобы ключи объекта брались из этих переменных.

// №1⊗jsPmObOI
// Скажите, что выведется в консоль в результате выполнения следующего кода:
// let obj = {x: 1, y: 2, z: 3};
// console.log('x' in obj); true
// console.log('w' in obj); false

// №1⊗jsPmObOD
// Скажите, что выведется в консоль в результате выполнения следующего кода:

// let obj = {x: 1, y: 2, z: 3};
// delete obj.x;

// console.log('x' in obj); false

// №1⊗jsPmObTp
// Не запуская код, определите, что выведется в консоль:

// console.log( typeof {x: 1, y: 2, z: 3} );

// №2⊗jsPmObTp
// Не запуская код, определите, что выведется в консоль:

// console.log( typeof {} );

// №3⊗jsPmObTp
// Не запуская код, определите, что выведется в консоль:

// let obj = {x: 1, y: 2, z: 3};
// console.log( typeof obj );

// №4⊗jsPmObTp
// Не запуская код, определите, что выведется в консоль:

// let obj = {x: 1, y: 2, z: 3};
// console.log( typeof obj['x'] );

// №1⊗jsPmObAAO
// Не запуская код, определите, что выведется на экран в консоль:

// console.log( typeof {x: 1, y: 2, z: 3} );

// №2⊗jsPmObAAO
// Не запуская код, определите, что выведется в консоль:

// console.log( typeof [1, 2, 3] );

// №3⊗jsPmObAAO
// Не запуская код, определите, что выведется в консоль:

// let arr = [1, 2, 3];
// console.log( typeof arr );

// №4⊗jsPmObAAO
// Не запуская код, определите, что выведется в консоль:

// let arr = [1, 2, 3];
// console.log( typeof arr[0] );

// №5⊗jsPmObAAO
// Не запуская код, определите, что выведется в консоль:

// let arr = ['1', '2', '3'];
// console.log( typeof arr[0] );

// №1⊗jsPmObDAO
// Не запуская код, определите, что выведется на экран в консоль:

// console.log( Array.isArray([1, 2, 3]) );

// №2⊗jsPmObDAO
// Не запуская код, определите, что выведется на экран в консоль:

// console.log( Array.isArray({x: 1, y: 2, z: 3}));

// №1⊗jsPmObOP
// Дан следующий код:
// Какой тип данных выведется в консоль? Это примитив или объект?
// let test = {x: 1, y: 2, z: 3};
// console.log(test);

// №2⊗jsPmObOP
// Дан следующий код:
// Какой тип данных выведется в консоль? Это примитив или объект?

// let test = {x: 1, y: 2, z: 3};
// console.log(test.x);

// №3⊗jsPmObOP
// Дан следующий код:
// Какой тип данных выведется в консоль? Это примитив или объект?
// let test = [1, 2, 3];
// console.log(test);

//number, string, boolean, undefined, null, symbol, bigint 

// №1⊗jsPmObPBR
// Не запуская код, определите, что выведется в консоль:

// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// arr1[0] = 'a';
// console.log(arr2);


// №2⊗jsPmObPBR
// Не запуская код, определите, что выведется в консоль:
// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// arr1[0] = 'a';
// arr2[1] = 'b';

// console.log(arr1);

// №3⊗jsPmObPBR
// Не запуская код, определите, что выведется в консоль:

// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// arr1[0] = 'a';
// arr2[0] = 'b';

// console.log(arr2);

// №1⊗jsPmObCn
// Что выведется в результате выполнения следующего кода:

// const arr = ['a', 'b', 'c'];
// arr[1] = '!';
// console.log(arr); 

// №2⊗jsPmObCn
// Что выведется в результате выполнения следующего кода:

// const arr = ['a', 'b', 'c'];
// arr = [1, 2, 3];
// console.log(arr);

// №3⊗jsPmObCn
// Что выведется в результате выполнения следующего кода:

// const arr = ['a', 'b', 'c'];
// arr = ['a', 'b', 'c'];
// console.log(arr);

// №1⊗jsPmObMst
// Код должен вывести элемент объекта:

// let obj = {x: 1, y: 2, z: 3};
// console.log(obj['x']);

// №2⊗jsPmObMst
// Код должен вывести элемент объекта по ключу из переменной:

// let obj = {x: 1, y: 2, z: 3};
// let key = 'x';

// console.log(obj[key]);

// №3⊗jsPmObMst
// Код должен вывести сумму элементов объекта:

// let obj = {x: 1, y: 2, z: 3};
// let sum = obj.x + obj.y + obj.z;

// console.log(sum);

// №4⊗jsPmObMst
// Код должен вывести количество элементов объекта:

// let obj = {x: 1, y: 2, z: 3};
// console.log(Object.values(obj).length);