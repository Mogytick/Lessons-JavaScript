//Функції-пишеш один раз використовуєш багато раз
// function showMessage() {     Приклад функції
//     consol.log("Hello World!");
// }
//
// showMessage();
// showMessage();
// showMessage();
// showMessage();

// function showProduct(name, price = 'немає у наявності') {
//     console.log(`Товар ${name}, Ціна ${price}грн`);
// }
//
// showProduct("Notebook", 200);
//
// function calculate(price, count) {
//     return price * count;
// }
//
// let total = calculate(1000, 4);
// console.log(total);

// function discount(total) {
//     if (total >= 5000) {
//         return 10;
//     }
//     else {
//         return 0;
//     }
// }
// let discount1 = +prompt("Please enter a number");
//
// console.log(discount(discount1));

// function getProductTotal(price, count) {
//     return price * count;
// }
//
// function getDiscount(total) {
//     if(total >= 10000){
//         return 0.15;
//     }
//     else if (total >= 5000){
//         return 0.1;
//     }
//     else if (total >= 2000){
//         return 0.05;
//     }
//     else{
//         return 0;
//     }
// }
// function getDiscountValue(total, percent) {
//     return total * percent;
// }
//
// function getFinalPrice(total, discount) {
//     return total - discount;
// }
// let productName = prompt('Enter Product Name');
// let productPrice = +prompt('Enter Product Price');
// let productCount = +prompt('Enter Product Count');
//
// let productTotal = getProductTotal(productPrice, productCount);
// let discount = getDiscount(productTotal)
// let productDiscountvalue = getDiscountValue(productTotal, discount);
// let productFinalPrice = getFinalPrice(productTotal, productDiscountvalue);
//
// console.log(`Товар: ${productName}`);
// console.log(`Ціна: ${productPrice}грн`);
// console.log(`Кількість: ${productCount}`);
// console.log(`Сума: ${productTotal}грн`);
// console.log(`Знижка: ${productTotal} %`);
// console.log(`Сума знижки: ${productDiscountvalue}грн`);
// console.log(`До сплати: ${productFinalPrice}грн`);

//-------------------------------------------------------------------------------------

// яка буде рахувати скільки обійдеться поїздка на машині треба місто старту далі фініш місто далі відстань в км далі розхід  пального л\100км
// вартість за 1 л пального відповідь скільки потрібно грошей


// function getFuelVolume(distance, consumption) {
//     return (distance / 100) * consumption;
// }
// function getTotalCost(fuelVolume, pricePerLiter) {
//     return fuelVolume * pricePerLiter;
// }
// function getCostPerKm(totalCost, distance) {
//     return totalCost / distance;
// }
// let startCity = prompt('Введіть місто старту');
// let finishCity = prompt('Введіть місто фінішу');
// let tripDistance = +prompt('Введіть відстань у км');
// let fuelConsumption = +prompt('Введіть розхід пального (л/100км)');
// let fuelPrice = +prompt('Введіть вартість 1 л пального у грн');
//
// let litersNeeded = getFuelVolume(tripDistance, fuelConsumption);
// let totalTripCost = getTotalCost(litersNeeded, fuelPrice);
// let costPerKm = getCostPerKm(totalTripCost, tripDistance);
//
// console.log(`Маршрут: ${startCity} — ${finishCity}`);
// console.log(`Відстань: ${tripDistance} км`);
// console.log(`Розхід: ${fuelConsumption} л/100км`);
// console.log(`Ціна пального: ${fuelPrice} грн/л`);
// console.log(`Потрібно пального: ${litersNeeded} л`);
// console.log(`Вартість 1 км: ${costPerKm} грн`);
// console.log(`Загальна вартість: ${totalTripCost} грн`);

//-------------------------------------------------------Самостійна робота--------------------------------------------------------------
let myLogin = "";
let myPassword = "";
let isRegistered = false;

function registerUser() {
    myLogin = prompt("Придумайте логін:");
    myPassword = prompt("Придумайте пароль:");

    isRegistered = true;
    alert("Ви успішно зареєструвалися");
}

function loginUser() {
    if (isRegistered === false) {
        alert("Спочатку зареєструйся!");
        return;
    }
    let attempts = 3;

    while (attempts > 0) {
        let inputLogin = prompt("Введіть логін:");
        let inputPassword = prompt("Введіть пароль:");

        if (inputLogin === myLogin && inputPassword === myPassword) {
            alert("Вхід дозволено");
            return;
        } else {
            attempts = attempts - 1;

            if (attempts > 0) {
                alert(`Неправильно! Залишилося спроб: ${attempts}`);
            } else {
                alert("Ви вичерпали всі спроби. Вхід заблоковано");
            }
        }
    }
}

function showMenu() {
    let choice;
    do {
        choice = prompt(
            "1 — Зареєструватися\n" +
            "2 — Увійти в акаунт\n" +
            "0 — Вийти"
        );

        if (choice === "1") {
            registerUser();
        } else if (choice === "2") {
            loginUser();
        } else if (choice === "0") {
            alert("Роботу завершено");
        } else{
            alert("Неіснуючий пункт меню");
        }

    } while (choice !== "0");
}
showMenu();













