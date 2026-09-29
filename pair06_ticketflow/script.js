let eventType = prompt(
    "Оберіть тип події\n" +
    "1 — Кіно (150 грн)\n" +
    "2 — Театр (220 грн)\n" +
    "3 — Концерт (350 грн)");

while (eventType !== "1" && eventType !== "2" && eventType !== "3") {
    alert("Помилка");
    eventType = prompt(
        "Оберіть тип події:\n" +
        "1 — Кіно (150 грн)\n" +
        "2 — Театр (220 грн)\n" +
        "3 — Концерт (350 грн)");
}

let basePrice = 0;
let eventName = "";

switch (eventType) {
    case "1":
        basePrice = 150;
        eventName = "Кіно";
        break;
    case "2":
        basePrice = 220;
        eventName = "Театр";
        break;
    case "3":
        basePrice = 350;
        eventName = "Концерт";
        break;
}

let dayType = prompt(
    "Оберіть тип дня:\n" +
    "1 — Будній\n" +
    "2 — Вихідний"
);

while (dayType !== "1" && dayType !== "2") {
    alert("Помилка");
    dayType = prompt(`Оберіть тип дня:\n +
        1 — Будній\n +
        2 — Вихідний`);
}

if (dayType === "2") {
    basePrice *= 1.15;
}

let ticketsCount = +prompt("Введіть кількість квитків (від 1 до 6)");

while (Number.isNaN(ticketsCount) || ticketsCount < 1 || ticketsCount > 6) {
    alert("Помилка");
    ticketsCount = +prompt("Введіть кількість квитків (від 1 до 6)");
}

let processedTickets = 0;
let freeTicketsCount = 0;
let discountedTicketsCount = 0;
let fullPriceTicketsCount = 0;
let totalSum = 0;

for (let i = 1; i <= ticketsCount; i++) {
    let age = +prompt(`Введіть вік для квитка №${i} (або -1 для завершення)`);

    if (age === -1) {
        alert("Оформлення квитків завершено");
        break;
    }
    while (Number.isNaN(age) || age < 0 || age > 120) {
        alert("Помилка");
        age = +prompt(`Введіть вік для квитка №${i}`);

        if (age === -1) {
            break;
        }

    if (age === -1) {
        alert("Оформлення квитків завершено");
        break;
    }
}

    processedTickets++;

    let ticketPrice = basePrice;

    if (age <= 5) {
        freeTicketsCount++;
        alert(`Квиток №${i}: Безкоштовний`);
        continue;
    } else if (age <= 12) {
        ticketPrice *= 0.5;
        discountedTicketsCount++;
    } else if (age <= 17) {
        ticketPrice *= 0.8;
        discountedTicketsCount++;
    } else if (age >= 18 && age <= 25) {
        let hasStudentCard = confirm("Чи є у вас студентський квиток?");
        if (hasStudentCard) {
            ticketPrice *= 0.9;
            discountedTicketsCount++;
        } else {
            fullPriceTicketsCount++;
        }
    } else if (age >= 60) {
        ticketPrice *= 0.75;
        discountedTicketsCount++;
    } else {
        fullPriceTicketsCount++;
    }

    totalSum += ticketPrice;
    alert(`Ціна квитка №${i}: ${ticketPrice} грн`);
}

let finalDiscountApplied = false;
if (totalSum > 1000) {
    totalSum *= 0.95;
    finalDiscountApplied = true;
}

let result = `
    Обрана подія: ${eventName}\n +
    Оброблено квитків: ${processedTickets}\n +
    Безкоштовних: ${freeTicketsCount}\n +
    Зі знижкою: ${discountedTicketsCount}\n +
    За повною ціною: ${fullPriceTicketsCount}\n +
    Загальна сума до сплати: ${totalSum} грн`;

if (finalDiscountApplied) {
    result += `\n(Додаткова знижка 5%)`;
}

alert(result);