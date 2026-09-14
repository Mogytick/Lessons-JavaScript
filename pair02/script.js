// if (умова){
//     дії пишем;
// }
// else if (){
//
// }  - розгалуження в js
// true:
// 1
//
// false:
// 0
// 0n
// NaN
// ''
// null
// undefined

// let a = 10, b = '10';
// console.log(a == b);-nestroga rivnist
// console.log(a === b);-stroga rivnist
// console.log(a != b);-nestroga rivnist
// console.log(a !== b);-stroga rivnist <> ><=

// Приклад розгалудження
// let a = +prompt('Введи число: ');
// let b = +prompt('Введи число: ');
// let c;
//
//
// if (a > b) {
//     c = ' a > b'
// }
// else if (a < b) {
//     c = ' a < b'
// }
// else{
//     c = 'a == b'
// }
// alert(c);

// Скорочений варіант
// let a = +prompt('Введи число: ');
// let b = +prompt('Введи число: ');
// let c;
//
// if (a > b) c = 'a > b';
// else if (a < b) c = 'a < b';
// else c = 'a == b'

// Switch Key - сценарій if

// let course = prompt("What is the name of course?"), tittle;
// switch (course) {
//     case 'figma':
//         tittle = 'Figma';
//         break;
//
//     case 'WEB':
//     case 'Html':
//     case 'CSS':
//         tittle = 'Html + CSS';
//         break;
//
//     case 'Javascript':
//         tittle = 'Javascript';
//         break;
//
//     default:
//         tittle = 'Курсів не знайдено'
// }
// alert(tittle);



//-------------------------------------------------------------
//1.Запитати  назву вартість і кількість товару і якщо покупка >5000 застосувати знижку 10 відсотків і вивести ціну зі знижкою якщо менше то просто вивести суму
// let nazva = prompt("Ввудіть назву товару:");
// let kilkist = +prompt("Ввудіть кількість товару:");
// let tsina1 = +prompt("Ввудіть ціну товару:");
// let zagalna_tsina;
// zagalna_tsina = kilkist * tsina1;
// switch (zagalna_tsina) {
//     case (zagalna_tsina > 5000):
// }
// курер пошта самовивіз три види доставки вивести вартість доставки кр=урером 100 самомвивіз безкоштовно пошта 200
// let vid_dostavky = prompt('Введіть вид доставки:'), price;
// switch(vid_dostavky){
//     case "кур'єр":
//         price = '100 гривень'
//         break;
//     case "Самовивіз":
//         price = 'безкоштовно'
//         break;
//     case "Пошта":
//         price = '200 гривень'
// }
// alert(price);
let a = true
// console.log(a)
// &&- оператор і   || - or
// let a = 10, b  = 12, c = 5;
// if (a > b && a > c) {
//     console.log(a);
// }else if (a < b || a < c) {}
//















