//Цикли while з виконанням певної умови
// let i = 1;
// while (i <= 5){
//     console.log(i);
//     i++;
// }

// console.log(Number("7") === 7)-True
// console.log(Number("Hello"))-NaN

// let age = +prompt('Enter your age');
// while (Number.isNaN(age) || age < 0 || age >= 120) { //isNan - перевірка на число
//     alert("Please enter a valid age");
//     age = +prompt('Enter your age');
// }
// console.log(age);

//Pinkod

// const correctPin = 1111;
//
// // let pin = +prompt("Enter a valid pin");
// let tries = 1;
//
// //
// // while (pin !== correctPin && tries <= 3 && Number.isNaN(pin)) {
// //     pin = +prompt("Enter a valid pin");
// //     tries++;
// // }
// // if (pin === correctPin) {
// //     alert("Access required");
// // }
// // else{
// //     alert("Access denied");
// // }
//-------------------------------------------------
// while (tries <= 3) {
//     let pin = +prompt('Enter a valid pin');
//     if (pin === correctPin) {
//         console.log("Access required");
//         break;
//
//     }
//     tries++;
//    console.log("Password incorrect");
// }

// Цикл do.......while робить одну ітерацію а потім перевіряє умову
//
// let menuChoice;
// do {
//     menuChoice = prompt("Оберіть дію\n "+
//     "1 - Відкрити профіль\n" +
//     "2 - Налаштувати профіль\n" +
//     "0 - Вихід")
//     if( menuChoice === 1 ){
//         console.log("Profile opened")
//     }
//     else if (menuChoice === 2 ){
//         console.log("Profile changed")
//     }
//     else if (menuChoice === 0 ){
//         console.log("Exit")
//     }
//     else{
//         console.log("Dont understand u")
//     }
// }while (menuChoice !== 0 );


// let gradeSum = 0;
// let count = 0;
// while(count < 5){
//     let num;
//     num = +prompt("Enter your grade");
//     if(Number.isNaN(num) || num <= 0 || num > 12){
//         alert("Incorrect grade");
//         continue;
//     }
//     sum += num;
//     count++;
// }
// alert(`Average grade is ${gradeSum / 5}`)


//-------------------------------------------------------------------------
let age = +prompt("Введіть свій вік");

while (Number.isNaN(age) || age < 12 || age > 90) {
    age = +prompt("Будь ласка, введіть свій вік ще раз");
}

console.log(`Вік підтверджено: ${age}`);

const correctPin = 4321;
let tries = 1;
let isAccessGranted = false;

while (tries <= 3) {
    let pin = +prompt(`Спроба ${tries} з 3 Введіть PIN`);

    if (pin === correctPin) {
        alert("Доступ надано");
        isAccessGranted = true;
        break;
    } else {
        alert("Невірний PIN-код");
    }

    tries++;
}

if (isAccessGranted) {
    let menuChoice;

    do {
        menuChoice = prompt(
            "1 - Особистий кабінет\n" +
            "2 - Повідомлення\n" +
            "3 - Налаштування\n" +
            "0 - Вихід\n\n" +
            "Оберіть пункт меню"
        );

        switch (menuChoice) {
            case "1":
                alert("Особистий епбінет відкрито");
                break;
            case "2":
                alert("Відкрито повідомлення");
                break;
            case "3":
                alert("Відкрито налаштування");
                break;
            case "0":
                alert("Вихід з системи");
                break;
            default:
                alert("Такого пункту немає");
                break;
        }

    } while (menuChoice !== "0");

} else {
    alert("Кількість спроб вичерпано");
}














