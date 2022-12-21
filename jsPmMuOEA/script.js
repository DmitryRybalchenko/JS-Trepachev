// №1⊗jsPmMuOEA

// Скопируйте себе следующую структуру для хранения списка дел за определенные даты:

// let affairs = {
// 	'2019-12-28': ['data11', 'data12', 'data13'],
// 	'2019-12-29': ['data21', 'data22', 'data23'],
// 	'2019-12-30': ['data31', 'data32', 'data33'],
// }

// // №2⊗jsPmMuOEA
// // Добавьте еще одно дело в дату '2019-12-29'.

// affairs["2019-12-29"].push('data24');

// // №3⊗jsPmMuOEA
// // Добавьте еще два дела в дату '2019-12-31'.

// affairs['2019-12-31'] = ['data40', 'data41'];


// console.log(affairs);

// №4⊗jsPmMuOEA
// Скопируйте себе следующую структуру для хранения списка студентов:

let students = {
	'group1': {
		'subgroup11': ['student111', 'student112', 'student113'],
		'subgroup12': ['student121', 'student122', 'student123'],
	},
	'group2': {
		'subgroup21': ['student211', 'student212', 'student213'],
		'subgroup22': ['student221', 'student222', 'student223'],
	},
	'group3': {
		'subgroup31': ['student311', 'student312', 'student313'],
		'subgroup32': ['student321', 'student322', 'student323'],
	},
};

// №5⊗jsPmMuOEA
// Добавьте нового студента в подгруппу 'subgroup11'.

students.group1.subgroup11.push('student114');

// №6⊗jsPmMuOEA
// Добавьте в первую группу еще одну подгруппу.

students.group1['subgroup13'] = [];

// №7⊗jsPmMuOEA
// Сделайте четвертую группу, в ней сделайте подгруппу и добавьте в нее двух новых студентов.

students.group4 = {};
students.group4.subgroup41 = [];
students.group4.subgroup41.push('student411');
students.group4.subgroup41.push('student412');

console.log(students);