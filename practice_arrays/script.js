let topics = ["JavaScript", "HTML", "CSS", "Git", "WebStorm", "Vue"];
let seats = [12, 8, 15, 0, 6, 10];

let userName = "";
while (!userName) {
    userName = prompt("Введіть ваше ім'я:");
    if (userName === null) {
        userName = "Гість";
        break;
    }
    userName = userName.trim();
}

let birthDay = +prompt("Введіть день вашого народження:");
while (isNaN(birthDay) || birthDay < 1 || birthDay > 31) {
    birthDay = +prompt("Помилка! Введіть коректний день народження:");
}

let birthMonth = +prompt("Введіть місяць вашого народження:");
while (isNaN(birthMonth) || birthMonth < 1 || birthMonth > 12) {
    birthMonth = +prompt("Помилка! Введіть коректний місяць народження:");
}

let personalNumber = (userName.length + birthDay + birthMonth) % topics.length;
alert(`Вітаю ${userName}!\nРекомендований вебінар для вас: "${topics[personalNumber]}"`);

let catalogMessage = "Каталог вебінарів:";
for (let i = 0; i < topics.length; i++) {
    let status;
    if (seats[i] > 0) {
        status = "Набір відкрито";
    } else {
        status = "Місць немає";
    }
    catalogMessage += `${i + 1}. ${topics[i]} — Місць: ${seats[i]} (${status})\n`;
}
alert(catalogMessage);

let minSeats = +prompt("Введіть мінімальну кількість місць:");
let filteredMessage = `Вебінари з кількістю місць >= ${minSeats}:`;
let foundCount = 0;
for (let i = 0; i < topics.length; i++) {
    if (seats[i] >= minSeats) {
        filteredMessage += `- ${topics[i]} (${seats[i]} місць)`;
        foundCount++;
    }
}
if (foundCount > 0) {
    alert(filteredMessage);
} else {
    alert("вебінарів що відповідають критерію немає.");
}

let searchName = prompt("Введіть назву вебінару для пошуку та запису:");
if (searchName === null) {
    alert("Пошук скасовано користувачем.");
} else {
    let foundIndex = -1;
    for (let i = 0; i < topics.length; i++) {
        if (topics[i] === searchName) {
            foundIndex = i;
            break;
        }
    }

    if (foundIndex !== -1) {
        if (seats[foundIndex] > 0) {
            let confirmEnroll = confirm(`Вебінар "${topics[foundIndex]}" знайдено. Доступно місць: ${seats[foundIndex]}`);
            if (confirmEnroll) {
                seats[foundIndex]--;
                alert(`Ви записані на вебінар ${topics[foundIndex]}. Оновлена кількість місць: ${seats[foundIndex]}`);
            } else {
                alert("Запис скасовано користувачем");
            }
        } else {
            alert(`Вебінар "${topics[foundIndex]}" знайдено, але все зайнято`)
        }
    } else {
        alert("Невідома назва вебінару")
    }
}

let participants = [userName];

for (let i = 0; i < 4; i++) {
    let nextName = prompt(`Введіть ім'я учасника ${i + 2} із 5:`);
    if (nextName === null) {
        alert("Введення учасників перервано.");
        break;
    }
    nextName = nextName.trim();
    if (nextName === "") {
        alert("Ім'я не може бути порожнім. Спробуйте ще раз для цього учасника.");
        i--
    } else {
        participants.push(nextName);
    }
}

let partMessage = "Список учасників:";
for (let i = 0; i < participants.length; i++) {
    partMessage += `${i + 1}. ${participants[i]}`
}
alert(partMessage);

let longerNamesCount = 0;
let personalThreshold = userName.length;
for (let i = 0; i < participants.length; i++) {
    if (participants[i].length > personalThreshold) {
        longerNamesCount++;
    }
}
alert(`Кількість учасників чиє ім'я довше за ваше ${personalThreshold}: ${longerNamesCount}\nПерсональний поріг довжини: ${personalThreshold}`);

let changeNameConfirm = confirm("Бажаєте змінити ім'я одного з учасників?")
if (changeNameConfirm) {
    let partIdx = +prompt(`Введіть номер учасника:`) - 1;
    if (!isNaN(partIdx) && partIdx >= 0 && partIdx < participants.length) {
        let newPartName = prompt(`Введіть нове ім'я для ${partIdx + 1}:`);
        if (newPartName !== null && newPartName.trim() !== "") {
            participants[partIdx] = newPartName.trim();
            let updatedPartMsg = "Оновлений список учасників:"
            for (let i = 0; i < participants.length; i++) {
                updatedPartMsg += `${i + 1} ${participants[i]}`;
            }
            alert(updatedPartMsg);
        } else {
            alert("Некоректне ім'я");
        }
    } else {
        alert("Неправильний номер учасника");
    }
}

let visits = [24, 18, 32, 0, 15, 27, 9, 21];
let bonus = (birthDay + birthMonth) % 7;
let personalVisits = [];

for (let i = 0; i < visits.length; i++) {
    personalVisits.push(visits[i] + bonus);
}

function getVisitStats(values) {
    let sum = 0;
    let max = values[0];
    let min = values[0];

    for (let i = 0; i < values.length; i++) {
        sum += values[i];
        if (values[i] > max) max = values[i];
        if (values[i] < min) min = values[i];
    }
    let average = sum / values.length;
    return [sum, average, max, min];
}

let stats = getVisitStats(personalVisits);

let visitThreshold = +prompt("Введіть поріг відвідуваності:");
while (isNaN(visitThreshold)) {
    visitThreshold = +prompt("Введіть числове значення порогу відвідуваності:");
}

let countAboveThreshold = 0;
let reachedWebinarsIndices = [];
for (let i = 0; i < personalVisits.length; i++) {
    if (personalVisits[i] >= visitThreshold) {
        countAboveThreshold++;
        reachedWebinarsIndices.push(i + 1);
    }
}

alert(`Статистика відвідувань з урахуванням бонуса ${bonus}:\n` +
    `- Сума: ${stats[0]}\n` +
    `- Середнє: ${stats[1]}\n` +
    `- Максимум: ${stats[2]}\n` +
    `- Мінімум: ${stats[3]}\n` +
    `Кількість значень не менших за поріг: ${countAboveThreshold}`);

let showReached = confirm("Бажаєте побачити номери вебінарів, які досягли порогу відвідуваності?");
if (showReached) {
    alert(`Номери вебінарів що досягли порогу: ${reachedWebinarsIndices.join(", ") || "немає"}`);
}

function showTopicsList() {
    let msg = "Поточний список вебінарів:";
    for (let i = 0; i < topics.length; i++) {
        msg += `${i + 1}. ${topics[i]} (${seats[i]} місць)`
    }
    alert(msg);
}

function findTopicMenu() {
    let query = prompt("Введіть назву для пошуку:")
    if (!query) return;
    let found = false;
    for (let i = 0; i < topics.length; i++) {
        if (topics[i] === query) {
            alert(`Знайдено: ${topics[i]} під номером ${i + 1}, вільних місць: ${seats[i]}`);
            found = true;
            break;
        }
    }
    if (!found) alert("Вебінар не знайдено")
}

let menuChoice;
do {
    let menuStr = prompt(
        "Меню керування списком:\n" +
        "1 - Показати вебінари\n" +
        "2 - Додати вебінар\n" +
        "3 - Перейменувати за номером\n" +
        "4 - Знайти вебінар\n" +
        "5 - Видалити останній вебінар\n" +
        "0 - Вихід"
    );

    if (menuStr === null) {
        let confirmExit = confirm("Бажаєте вийти з програми?");
        if (confirmExit) {
            menuChoice = "0";
        } else {
            continue;
        }
    } else {
        menuChoice = menuStr();
    }

    switch (menuChoice) {
        case "1":
            showTopicsList();
            break;
        case "2":
            let newTopicName = prompt("Введіть назву нового вебінару:");
            if (newTopicName && newTopicName !== "") {
                let newTopicSeats = +prompt("Введіть кількість місць для цього вебінару:");
                if (!isNaN(newTopicSeats) && newTopicSeats >= 0) {
                    topics.push(newTopicName);
                    seats.push(newTopicSeats);
                    alert("Вебінар успішно додано!");
                } else {
                    alert("Некоректна кількість місць.");
                }
            } else {
                alert("Назва не може бути порожньою.");
            }
            break;
        case "3":
            let indexToRename = +prompt(`Введіть номер вебінару для перейменування:`) - 1;
            if (!isNaN(indexToRename) && indexToRename >= 0 && indexToRename < topics.length) {
                let updatedName = prompt(`Введіть нову назву для "${topics[indexToRename]}":`);
                if (updatedName && updatedName !== "") {
                    topics[indexToRename] = updatedName
                    alert("Назву успішно змінено!");
                } else {
                    alert("Назва не може бути порожньою.");
                }
            } else {
                alert("Невірний номер вебінару.");
            }
            break;
        case "4":
            findTopicMenu();
            break;
        case "5":
            let confirmDelete = confirm("Ви впевнені?");
            if (confirmDelete) {
                if (topics.length > 0) {
                    topics.pop();
                    seats.pop();
                    alert("Останній вебінар успішно видалено.");
                } else {
                    alert("Список порожній.");
                }
            } else {
                alert("Видалення скасовано.");
            }
            break;
        case "0":
            let confirmExitApp = confirm("Ви дійсно хочете вийти?");
            if (!confirmExitApp) {
                menuChoice = "";
            } else {
                alert("Роботу меню завершено.");
            }
            break;
        default:
            alert("Невірний вибір. Спробуйте ще раз.");
    }
} while (menuChoice !== "0");


let requestScores = [72, 95, 41, 86, 60, 100, 53, 88, 29];

let personalScore = (birthDay * birthMonth + userName.length) % 101;
requestScores.push(personalScore);

function distributeRequests(scores) {
    let high = [];
    let medium = [];
    let low = [];

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] >= 85) {
            high.push(scores[i]);
        } else if (scores[i] >= 50) {
            medium.push(scores[i]);
        } else {
            low.push(scores[i]);
        }
    }
    return [high, medium, low];
}

let addMoreScores = true;
while (addMoreScores) {
    let scoreInput = +prompt("Введіть новий бал (від 0 до 100):");
    if (scoreInput === null) break;
    let val = +scoreInput
    if (!isNaN(val) && val >= 0 && val <= 100) {
        requestScores.push(val);
        alert(`Бал ${val} успішно додано.`);
    } else {
        alert("Некоректне значення")
    }
    addMoreScores = confirm("Бажаєте додати ще один бал?")
}

let distributed = distributeRequests(requestScores);
let highGroup = distributed[0];
let mediumGroup = distributed[1];
let lowGroup = distributed[2];

function calculateGroupStats(group) {
    if (group.length === 0) return { count: 0, avg: 0 };
    let sum = 0;
    for (let i = 0; i < group.length; i++) {
        sum += group[i];
    }
    return { count: group.length, avg: sum / group.length };
}

let highStats = calculateGroupStats(highGroup);
let medStats = calculateGroupStats(mediumGroup);
let lowStats = calculateGroupStats(lowGroup);

let maxCount = Math.max(highStats.count, medStats.count, lowStats.count);
let largestGroups = [];
if (highStats.count === maxCount) {largestGroups.push("High")}
if (medStats.count === maxCount) {largestGroups.push("Medium")}
if (lowStats.count === maxCount) {largestGroups.push("Low")}
let largestGroupName;

if (largestGroups.length === 3) {
    largestGroupName = "Усі групи рівні";
} else {
    largestGroupName = largestGroups.join(", ");
}

let personalGroupCategory = "";
if (personalScore >= 85) {personalGroupCategory = "High"}
else if (personalScore >= 50) {personalGroupCategory = "Medium"}
else {personalGroupCategory = "Low"}

alert(
    `Розподіл заявок:\n` +
    `1. High (>=85): кількість = ${highStats.count}, сер. бал = ${highStats.avg.toFixed(2)}, елементи: [${highGroup.join(", ")}]\n` +
    `2. Medium (50-84): кількість = ${medStats.count}, сер. бал = ${medStats.avg.toFixed(2)}, елементи: [${mediumGroup.join(", ")}]\n` +
    `3. Low (<50): кількість = ${lowStats.count}, сер. бал = ${lowStats.avg.toFixed(2)}, елементи: [${lowGroup.join(", ")}]\n\n` +
    `Найбільша група(-и): ${largestGroupName}\n` +
    `Ваш персональний бал: ${personalScore} (потрапив до групи: ${personalGroupCategory})`
);