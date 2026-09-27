//Цикли:
//For
// for (let i = 10; i >= 1; i--){// i +=1 i = i + 1
//     console.log(`Число номер ${11 - i} - ${i}` );
//
// }

// sum = 0;
// for(let i = 1; i <= 100; i++){
//     sum += i;
// }
// console.log(sum);
//
// for(let i = 1; i <= 100; i++){
//     if (i >= 20 && i % 3 === 0 && i % 6 ===0){
//         console.log(i);
//         break;
//     }
// }

// for(let i = 1; i <= 100; i++){
//     if (i % 5 === 0){
//         continue;
//     }
//     console.log(i);
// }

//Користувач водить к-ть учнів потім питає оцінку кожного учня по 12 бальній оцінці якшо оцінка не правильна то перезапитати
// let studentsCount = +prompt('Введіть кількість учнів:')
// if (studentsCount > 0){
//     let sum = 0, highLevel = 0, otherLevel = 0, av;
//     let minGrade = 12, maxGrade = 1;
//     for(let i = 1; i <= studentsCount; i++){
//         let grade = +prompt(`Введіть оцінку учня № ${i} від 1 до 12:`)
//         if (!(grade >= 1 && grade <= 12)){
//             alert("error");
//             i--;
//             continue;
//         }
//         sum += grade;
//
//         if (grade >= 10){
//             highLevel++;
//         }
//         else{
//             otherLevel++;
//         }
//         if (grade < minGrade){
//             minGrade = grade
//         }if (grade > maxGrade){
//             maxGrade = grade
//         }
//     }
//     av = sum / studentsCount;
// }
// alert(`Кількість учнів: ${studentsCount}\n Сума оцінок: ${sum}\n
// Середнє значення по оцінкам: ${av}\n
// Мінімальна оцінка: ${minGrade}\n Максимальна оцінка: ${maxGrade}\n
// Високий рівень: ${highLevel}, Інші: ${otherLevel}`)

//ДЗ-----------------------------------------------------------------------------------------
let studentsCount = +prompt("Введіть кількість учасників тесту:");

if (studentsCount > 0) {
    let sum = 0;
    let excellentCount = 0; // 90–100
    let goodCount = 0;      // 60–89
    let lowCount = 0;       // < 60

    let minGrade = 100, maxGrade = 0;
    let firstHundredIndex = 0;
    let averageGrade;

    for (let i = 1; i <= studentsCount; i++) {
        let grade = +prompt(`Введіть результат учасника №${i} (від 0 до 100):`);

        if (grade < 0 || grade > 100) {
            alert("Помилка! Введіть значення від 0 до 100.");
            i--;
            continue;
        }

        sum += grade;

        if (grade >= 90) {
            excellentCount++;
        } else if (grade >= 60) {
            goodCount++;
        } else {
            lowCount++;
        }

        if (grade < minGrade) {
            minGrade = grade;
        }
        if (grade > maxGrade) {
            maxGrade = grade;
        }

        if (grade === 100 && firstHundredIndex === 0) {
            firstHundredIndex = i;
        }
    }

    averageGrade = sum / studentsCount;

    alert(`Кількість учасників: ${studentsCount}
Сума балів: ${sum}
Середній результат: ${averageGrade.toFixed(2)}
Найвищий результат: ${maxGrade}
Найнижчий результат: ${minGrade}
Результати 90–100: ${excellentCount}
Результати 60–89: ${goodCount}
Результати нижче 60: ${lowCount}
Перший учасник зі 100 балами: №${firstHundredIndex}`);
}
