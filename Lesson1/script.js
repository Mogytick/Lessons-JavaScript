//42- Number тип даних для чисел
//4.5 - Number тип даних для чисел

//'use Str';- String для рядків

//true == 1
//- bool format
//false; == 0 NaN null undefined

//Зміні варіанти:

// 1) var a;
// a = 10;
//
// console.log(a);
//var b = 20;

// 2)let aNew = '32';-область видимості краще за вар, вказує на помилки
// 3)const a = 4;-стале значення не можна змінювати
//--------------------------------------------


// let a = 15, b = 26
// console.log(a + b);
// console.log(a - b);
// console.log(b * a);
// console.log(b ** a);
// console.log(b / a);
// console.log(b % a);
//
//
// a++;//додаваняя 1
// a--;//віднімання 1
// ++a;
// let a = 2, b;
// // b = a++;-суфіксна форма
// b = ++a;-префіксна форма
// console.log(b);

//Перетворення

// let a = '4';
// let b = 5;
// console.log(a - b);//сам перетворив а з стр на намбер
// console.log(a + b);//конкастенація
// console.log((a - 0) + b);//обійшли систему
//
// a = Number(a);
// console.log(a + b);


//Інтерполяція - формат рядкового значення ну короче як ф строка з пайтона
// let name = 'Yehor';
// let age = 50;
// console.log('Привіт' + name + '!' + 'тобі' + age + 'років');
// //==
// console.log(`Привіт  ${name}!  тобі ${age} років`);
// console.info("Hello World!");-console.log toch v toch
// console.warn('hello world');- poperedzhenya
// console.error('hello world');- pomilra poznachka


// alert('hello');-vikno tipa
// prompt('Як тебе звати')-pitanya koristyvacha

// let a = Number(prompt('Number 1:'));
// let b = +prompt('Number 2:');
// console.log(a + b);