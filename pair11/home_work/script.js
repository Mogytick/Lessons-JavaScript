let usernameInput = document.querySelector('#username');
let greeting = document.querySelector('#greeting');

usernameInput.addEventListener('input', function() {
    let name = usernameInput.value.trim();
    if (name === "") {
        greeting.textContent = "Привіт гостю!";
    } else {
        greeting.textContent = `Привіт, ${name}!`;
    }
});

let themeSelect = document.querySelector('#themeSelect');

themeSelect.addEventListener('change', function() {
    let selectedTheme = themeSelect.value;

    if (selectedTheme === 'dark') {
        document.body.classList.add('theme-dark');
        document.body.classList.remove('theme-light');
    } else {
        document.body.classList.add('theme-light');
        document.body.classList.remove('theme-dark');
    }
});

let toggleBtn = document.querySelector('#toggleBtn');
let infoBlock = document.querySelector('#infoBlock');

toggleBtn.addEventListener('click', function() {
    infoBlock.classList.toggle('hidden');

    if (infoBlock.classList.contains('hidden')) {
        toggleBtn.textContent = "Показати додаткову інформацію";
    } else {
        toggleBtn.textContent = "Приховати додаткову інформацію";
    }
});

let saveBtn = document.querySelector('#saveBtn');
let saveMessage = document.querySelector('#saveMessage');

saveBtn.addEventListener('click', function() {
    saveMessage.classList.remove('hidden');

    // Ховаємо повідомлення автоматично через 2.5 секунди
    setTimeout(function() {
        saveMessage.classList.add('hidden');
    }, 2500);
});