//DOM
// let student = {
//     name: 'John Doe',
//     role: 'student'
// }
// console.log(student.name);
// console.log(document.body);
//
// let heading = document.getElementsByTagName("h1");
// let headingId = document.getElementById("profile-name");
// let skills = document.getElementById("skills");- старомодні звернення до елементів
//
// let headingH2 = document.querySelector("h2");
// // let skills2 = document.querySelector(".skills");
// let skills3 = document.querySelector(".skills");-новіші способи

//
// let skills = document.querySelector(".skills");
// for ( let skill in skills) {
//     console.log(skill);
// }

// let nameElement = document.querySelector('#profile-name');
// nameElement.textContent = "Ihor Zhdanov";-змінення вмісту

let student = {
    name: 'Valerii Vahovskii',
    role: 'Anchor',
    club: "NaVi",
    portfolio: "https://navi.gg/ua/cs2/b1t",
}

let nameElement = document.querySelector('#profile-name');
let roleElement = document.querySelector('.profile-role');
let clubElement = document.querySelector('#profile-city');
let portfolioElement = document.querySelector('#profile-link');
nameElement.textContent = student.name;
roleElement.textContent = student.role;
clubElement.textContent = student.club;

roleElement.innerHTML =  '<strong>' + student.role + '</strong>';

portfolioElement.setAttribute('href', student.portfolio);
let skillsElement = document.querySelectorAll('.skills');

let skillsArray = ['Aim', 'Knowledge', 'Sensory'];
// skillsElement[0].textContent = 'Aim';
// skillsElement[1].textContent = 'Sensory';
// skillsElement[2].textContent = 'Knowledge';
for (let i = 0; i < skillsArray.length; i++) {
    skillsElement[i].textContent = skillsArray[i];
}






