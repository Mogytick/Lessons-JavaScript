//Об'єкти
// let book = {
//     title: "Кобзар",
//     author: "Тарас Шевченко",
//     price: 500,
//     available: true
// }
// // console.log(book.title);
// // console.log(book["author"]);
// // book.price = 550;
// // console.log(book["price"]);
//
// for (let key in book) {
//     console.log(`${key}: ${book[key]}`);
// }
//
// let books = [
//     {
//         id: 1, title: "Кобзар", author: "Тарас Шевченко", price: 500, available: true},
//     {id: 2, title: "Лісова Пісня", author: "Леся Українка", price: 600, available: false},
//     { id: 3, title: "Тигролови", author: "Іван Багряний", price: 450, available: true},
//     { id: 4, title: "Енеїда", author: "Іван Котляревський", price: 500, available: false}
// ]
// // console.log(books);
// books.push({id:5, title:"Захар Беркут", author: "Іван Франко", price: 600, available: false});
// // console.log(books);
// // for (let book of books) {
// //     console.log(`title: ${book.title} - ${book.author}`);
// // }
// // books.forEach(function(book) {
// //     console.log(`author: ${book.author} - ${book.price}`);
// // })
// //
// // let total =books.filter(function(book){
// //     return book.available === true;
// // })
// // let total = books.filter(book => book.available === true);-те ж саме що і минулий запис
// //console.log(total)
// //
// // let foundBooks = books.find(book => book.id === 3);
// // console.log(foundBooks);
// //
// // let searchUserBooks = prompt("Enter book name");
// // let searchBooks = books.find(book => book.title === searchUserBooks);
// // if (searchBooks !== undefined) {
// //     alert(searchBooks);
// // }
// // else{
// //     alert("Book don't exist");
// // }
// // let titles = books.map(book => book.title);
// // console.log(titles);
// //
// // let booksSales = books.map(book => {
// //     return {
// //         id: book.id,
// //         title: book.title,
// //         author: book.author,
// //         price: Math.round(book.price * 0.9),
// //         available: book.available
// //     }
// // })
//
// let sortedByPrice = books.slice().sort((a, b) => a.price - b.price);
// console.log(sortedByPrice);
//----------------------------------------------------ДЗ--------------------------------------------
let games = [
    { id: 1, title: "Cyberpunk 2077", genre: "RPG", price: 1200, rating: 9, available: true },
    { id: 2, title: "The Witcher 3", genre: "RPG", price: 800, rating: 10, available: true },
    { id: 3, title: "Counter-Strike 2", genre: "Shooter", price: 0, rating: 6.7, available: true },
    { id: 4, title: "RDR2", genre: "Roguelike", price: 1500, rating: 10, available: false },
    { id: 5, title: "Minecraft", genre: "Sandbox", price: 750, rating: 9, available: true },
    { id: 6, title: "Elden Ring", genre: "Soulslike", price: 1500, rating: 10, available: false }
];

console.log("Список всіх ігор");
for (let game of games) {
    console.log(`ID: ${game.id}, Назва: ${game.title}, Жанр: ${game.genre}, Ціна: ${game.price} грн, Рейтинг: ${game.rating}, Доступність: ${game.available}`);
}

console.log(`\n2. Загальна кількість ігор: ${games.length}`);
let newTitle = prompt("Введіть назву нової гри:");
let newGenre = prompt("Введіть жанр гри:");
let newPrice = +(prompt("Введіть ціну гри:"));
let newRating = +(prompt("Введіть рейтинг гри (від 1 до 10):"));
let newGame = { id: games.length > 0 ? games[games.length - 1].id + 1 : 1, title: newTitle, genre: newGenre, price:(newPrice) ? 0 : newPrice, rating:(newRating) ? 5 : newRating, available: true };
games.push(newGame);

if (games.length > 0) {
    let confirmDelete = confirm(`Ви дійсно хочете видалити останню гру з каталогу: "${games[games.length - 1].title}"?`);
    if (confirmDelete) {
        let removedGame = games.pop(); console.log(`Видалено гру: ${removedGame.title}`);
    } else {
        console.log("Видалення скасовано користувачем.");
    }
} else {
    console.log("Каталог порожній.");
}

console.log("\n Пошук гри за назвою");
let searchTitle = prompt("Введіть назву гри для пошуку:");
let foundGame = games.find(game => game.title.toLowerCase() === searchTitle.trim().toLowerCase());

if (foundGame) {
    console.log("Знайдено гру:", foundGame);
    alert(`Знайдено гру!\nНазва: ${foundGame.title}\nЦіна: ${foundGame.price} грн\nРейтинг: ${foundGame.rating}`); } else { console.log(`Гра з назвою "${searchTitle}" не знайдена.`);
    alert(`На жаль, гра "${searchTitle}" не знайдена в каталозі.`); }

 console.log("\nФільтрація за ціною");
let maxPriceInput = +(prompt("Введіть максимальну суму для пошуку ігор за ціною:"));
let filteredByPrice = games.filter(game => game.price <= ((maxPriceInput) ? 0 : maxPriceInput));
console.log(`Ігри вартістю до ${maxPriceInput} грн:`, filteredByPrice);

console.log("\nІгри з високим рейтингом");
let topRatedGames = games.filter(game => game.rating >= 8);
console.log("Ігри з рейтингом >= 8:", topRatedGames);

console.log("\nМасив назв ігор");
let gameTitles = games.map(game => game.title);
console.log("Назви ігор:", gameTitles);

console.log("\nКаталог зі знижкою 15%");
let discountedGames = games.map(game => {
    return {
        ...game,
        price: Number((game.price * 0.85).toFixed(2))
    };
});
console.log("Початковий каталог:", games);
console.log("Каталог зі знижкою 15%:", discountedGames);

console.log("\nСортування ігор за ціною");
let sortedByPrice = [...games].sort((a, b) => a.price - b.price);
console.log("Відсортовані ігри:", sortedByPrice);

console.log("\nІндивідуальне завдання");

let myName = "Єгор";
let nameLength = myName.length;
console.log(`Ім'я: ${myName}, кількість символів: ${nameLength}`);

let budget = nameLength * 100;
console.log(`Ваш персональний бюджет на ігри: ${budget} грн`);
console.log("Доступні для придбання ігри (available: true):");
let availableGames = games.filter(game => game.available);
let totalAvailableCost = 0;
for (let game of availableGames) {
    console.log(`- ${game.title} (${game.price} грн)`);
    totalAvailableCost += game.price; }
console.log(`Загальна вартість усіх доступних ігор: ${totalAvailableCost} грн`);

if (totalAvailableCost > budget) {
    let diff = totalAvailableCost - budget;
    console.log(`Увага! Загальна вартість доступних ігор (${totalAvailableCost} грн) перевищує ваш бюджет (${budget} грн) на ${diff} грн.`);
    alert(`Бюджет перевищено! Не вистачає ${diff} грн для купівлі всіх доступних ігор.`);
} else {
    let remainder = budget - totalAvailableCost;
    console.log(`Вітаємо! Ваш бюджет покриває вартість усіх доступних ігор. Залишок коштів: ${remainder} грн.`);
    alert(`Коштів достатньо! Ваш залишок після покупки: ${remainder} грн.`);
}