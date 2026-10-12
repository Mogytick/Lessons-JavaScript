//Масиви, списки
// let languages = ["Python", "Javascript", "C++", "C#"];
// console.log(languages);
// console.log(languages[1]);
// console.log(languages.length);
// //
// // for (let i = 0; i < languages.length; i++) {
// //     console.log(languages[i]); - вивід всіх елементів  тексту
// // }
// function getSum(array){
//     let sum = 0;
//     for(let  i = 0; i < array.length; i++){
//         sum += array[i];
//     }
//     return sum;
// }
//
// let Numbers = [10, 15, 24, 46]
// console.log(getSum(Numbers));
//
// let name = [];
// name.push('Yehor')//-додати елемент в кінець списку
// name.push('Yehor1')
// name.pop()//-видаляє останій елемент
// name.unshift('Yehor2')//-додає один або більше елементів на початок списка
// name.unshift('Yehor3')
// name.shift()//-видаляє елемент с початку
// console.log(name.slice(0, 1))//-зріз елементів
//
//
// console.log(name)
//
// let color = ['red', 'green', 'blue', 'yellow', 'brown', 'cyan', 'white'];
// // color.splice(2,1,'pink');
// let deleted = color.splice(4, 2);
// color.splice(0, 0, 'pink');
//
// console.log(color);
// function registerNames(names) {
//     if (names.trim() === "") {
//         alert("Please enter a name");
//         return;
//     }
//     let dublicationName = false;
//     for (i = 0; i < names.length; i++) {
//         if (eventNames[i] === names[i]) {
//             dublicationName = true;
//         }
//     }
//     if (dublicationName) {
//         alert("Registered");
//     }else{
//     eventNames.push(names);
//     alert(`${names} registered`)}
// }
// function removeNames(names) {
//     let index = -1;
//     for (i = 0; i < eventNames.length; i++) {
//         if (eventNames[i] === names[i]) {
//             index = i;
//             break;
//         }
//     }
//     if (index === -1) {
//         alert("Name isn't in base")
//     }
//     else{
//         eventNames.splice(index, 1);
//         alert(`${names} removed`);
//     }
// }
// function printCount(){
//     alert(`All participants ${eventNames.length} `);
// }
//
// let eventNames = ["Ivan", "Yehor", "Stepan","Bandera","Sikorskii"]
//
// registerNames("Ihor");
// removeNames("Sikorskii");
// printCount();



let eventNames = ["Ivan", "Yehor", "Stepan","Bandera","Sikorskii"]
// for(let i = 0; i < eventNames.length; i++){
//     console.log(`${eventNames[i]}`);
// }

// for(let name of eventNames){
//     console.log(`${name}`);
// }

eventNames.forEach(function(name, index){
    console.log(name)
    console.log(index)
})






