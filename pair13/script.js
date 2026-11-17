let participantInput = document.querySelector("#participantInput");
let eventInput = document.querySelector("#eventInput");
let addButton = document.querySelector("#addButton");

let totalCounter = document.querySelector("#totalCounter");
let confirmedCounter = document.querySelector("#confirmedCounter");
let emptyMessage = document.querySelector("#emptyMessage");
let cardsList = document.querySelector("#cardsList");
let clearAllBtn = document.querySelector("#clearAllBtn");

function updateCounters() {
    let cards = cardsList.querySelectorAll('.request-card');
    let totalCount = cards.length;
    let confirmedCount = cardsList.querySelectorAll('.request-card.is-confirmed').length;

    totalCounter.textContent = totalCount;
    confirmedCounter.textContent = confirmedCount;

    if (totalCount === 0) {
        emptyMessage.classList.remove("hidden");
        clearAllBtn.classList.add("hidden");
    } else {
        emptyMessage.classList.add("hidden");
        clearAllBtn.classList.remove("hidden");
    }
}

addButton.addEventListener("click", function () {
    let nameText = participantInput.value.trim();
    let eventText = eventInput.value.trim();

    if (nameText === "" || eventText === "") {
        alert("Будь ласка, заповніть обидва поля");
        return;
    }

    let card = document.createElement("div");
    card.classList.add("request-card");

    let infoDiv = document.createElement("div");
    infoDiv.classList.add("card-info");

    let nameSpan = document.createElement("span");
    nameSpan.classList.add("card-name");
    nameSpan.textContent = nameText;

    let eventSpan = document.createElement("span");
    eventSpan.classList.add("card-event");
    eventSpan.textContent = eventText;

    let statusSpan = document.createElement("span");
    statusSpan.classList.add("card-status", "pending");
    statusSpan.textContent = "Очікує";

    infoDiv.append(nameSpan, eventSpan, statusSpan);

    let actionsDiv = document.createElement("div");
    actionsDiv.classList.add("card-actions");

    let confirmButton = document.createElement("button");
    confirmButton.textContent = "Підтвердити";
    confirmButton.classList.add("btn-confirm");

    confirmButton.addEventListener("click", function () {
        card.classList.toggle("is-confirmed");

        if (card.classList.contains("is-confirmed")) {
            statusSpan.textContent = "Підтверджено";
            statusSpan.classList.remove("pending");
            statusSpan.classList.add("confirmed");
            confirmButton.textContent = "Скасувати";
        } else {
            statusSpan.textContent = "Очікує";
            statusSpan.classList.remove("confirmed");
            statusSpan.classList.add("pending");
            confirmButton.textContent = "Підтвердити";
        }
        updateCounters();
    });

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Видалити";
    deleteButton.classList.add("btn-delete");

    deleteButton.addEventListener("click", function () {
        card.remove();
        updateCounters();
    });

    actionsDiv.append(confirmButton, deleteButton);
    card.append(infoDiv, actionsDiv);


    cardsList.append(card);


    participantInput.value = "";
    eventInput.value = "";

    updateCounters();
});


clearAllBtn.addEventListener("click", function () {
    let answer = confirm("Ви впевнені, що хочете видалити всі заявки?");
    if (answer) {
        cardsList.innerHTML = "";
        updateCounters();
    }
});