// Завдання №1
// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
const btn = document.getElementById('btn');
if (btn) {
    btn.addEventListener('click', function() {
        let name = document.getElementById('name').value;
        let surname = document.getElementById('surname').value;
        let age = document.getElementById('age').value;

        let userValuesForm = {
            name: name,
            surname: surname,
            age: age
        };

        let resultForm = document.getElementById('result');
        resultForm.innerHTML = '';

        let userForm = document.createElement('div');
        userForm.innerText = `Name: ${userValuesForm.name}, Surname: ${userValuesForm.surname}, Age: ${userValuesForm.age}`;
        resultForm.appendChild(userForm);
    });
}






// Завдання №2
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

const numberDiv = document.getElementById('number');
if (numberDiv) {
    let currentPageNumber = localStorage.getItem('number');
    if (currentPageNumber === null) {
        currentPageNumber = 0;
    } else {
        currentPageNumber = parseInt(currentPageNumber) + 1;
    }
    localStorage.setItem('number', currentPageNumber);
    numberDiv.innerText = currentPageNumber;
}






// Завдання №3
/*
    Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
    в масив sessions зберігається інформація про дату та час відвідування сторінки.
    Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію
    про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
*/

const sessionList = document.getElementById('sessionList');
    if (sessionList) {
        let newSessions = JSON.parse(localStorage.getItem('sessions')) || [];
        if (newSessions.length === 0) {
            sessionList.innerText = "No sessions found.";
        } else {
            newSessions.forEach(session => {
                let sessionDiv = document.createElement('div');
                sessionDiv.innerText = `Date: ${session.date}, Time: ${session.time}`;
                sessionList.appendChild(sessionDiv);
            });
        }
    } else {
        let getNowDate = new Date();
        let nowSessionInfo = {
            date: getNowDate.toLocaleDateString(),
            time: getNowDate.toLocaleTimeString()
        };

        let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
        sessions.push(nowSessionInfo);
        localStorage.setItem('sessions', JSON.stringify(sessions));
};





/*
 Завдання №4
 зробити масив на 100 об'єктів та дві кнопки prev next
 при завантажені сторінки з'являються перші 10 об'єктів.
 При натисканні next виводяться настпні 10 об'єктів
 При натисканні prev виводяться попередні 10 об'єктів
*/

const heroes = [
    { name: "Mickey Mouse", universe: "Disney" },
    { name: "Donald Duck", universe: "Disney" },
    { name: "Goofy", universe: "Disney" },
    { name: "Minnie Mouse", universe: "Disney" },
    { name: "Daisy Duck", universe: "Disney" },
    { name: "Pluto", universe: "Disney" },
    { name: "Spider-Man", universe: "Marvel" },
    { name: "Iron Man", universe: "Marvel" },
    { name: "Captain America", universe: "Marvel" },
    { name: "Thor", universe: "Marvel" },
    { name: "Hulk", universe: "Marvel" },
    { name: "Black Widow", universe: "Marvel" },
    { name: "Hawkeye", universe: "Marvel" },
    { name: "Doctor Strange", universe: "Marvel" },
    { name: "Black Panther", universe: "Marvel" },
    { name: "Scarlet Witch", universe: "Marvel" },
    { name: "Vision", universe: "Marvel" },
    { name: "Falcon", universe: "Marvel" },
    { name: "Winter Soldier", universe: "Marvel" },
    { name: "Ant-Man", universe: "Marvel" },
    { name: "Wasp", universe: "Marvel" },
    { name: "Star-Lord", universe: "Marvel" },
    { name: "Gamora", universe: "Marvel" },
    { name: "Drax", universe: "Marvel" },
    { name: "Rocket", universe: "Marvel" },
    { name: "Groot", universe: "Marvel" },
    { name: "Loki", universe: "Marvel" },
    { name: "Nick Fury", universe: "Marvel" },
    { name: "War Machine", universe: "Marvel" },
    { name: "Nebula", universe: "Marvel" },
    { name: "Shang-Chi", universe: "Marvel" },
    { name: "Eternals", universe: "Marvel" },
    { name: "Hercules", universe: "Disney" },
    { name: "Tarzan", universe: "Disney" },
    { name: "Simba", universe: "Disney" },
    { name: "Nemo", universe: "Disney" },
    { name: "Dory", universe: "Disney" },
    { name: "Elsa", universe: "Disney" },
    { name: "Anna", universe: "Disney" },
    { name: "Olaf", universe: "Disney" },
    { name: "Kristoff", universe: "Disney" },
    { name: "Sven", universe: "Disney" },
    { name: "Rapunzel", universe: "Disney" },
    { name: "Flynn Rider", universe: "Disney" },
    { name: "Moana", universe: "Disney" },
    { name: "Maui", universe: "Disney" },
    { name: "Ariel", universe: "Disney" },
    { name: "Belle", universe: "Disney" },
    { name: "Beast", universe: "Disney" },
    { name: "Aladdin", universe: "Disney" },
    { name: "Jasmine", universe: "Disney" },
    { name: "Genie", universe: "Disney" },
    { name: "Pocahontas", universe: "Disney" },
    { name: "Mulan", universe: "Disney" },
    { name: "Li Shang", universe: "Disney" },
    { name: "Tiana", universe: "Disney" },
    { name: "Naveen", universe: "Disney" },
    { name: "Cinderella", universe: "Disney" },
    { name: "Prince Charming", universe: "Disney" },
    { name: "Aurora", universe: "Disney" },
    { name: "Maleficent", universe: "Disney" },
    { name: "Megara", universe: "Disney" },
    { name: "Phil", universe: "Disney" },
    { name: "Hades", universe: "Disney" },
    { name: "Stitch", universe: "Disney" },
    { name: "Lilo", universe: "Disney" },
    { name: "Kuzco", universe: "Disney" },
    { name: "Pacha", universe: "Disney" },
    { name: "Emperor Zurg", universe: "Disney" },
    { name: "Buzz Lightyear", universe: "Disney" },
    { name: "Woody", universe: "Disney" },
    { name: "Jessie", universe: "Disney" },
    { name: "Bo Peep", universe: "Disney" },
    { name: "Mr. Incredible", universe: "Disney" },
    { name: "Elastigirl", universe: "Disney" },
    { name: "Dash", universe: "Disney" },
    { name: "Violet", universe: "Disney" },
    { name: "Jack-Jack", universe: "Disney" },
    { name: "Frozone", universe: "Disney" },
    { name: "Edna Mode", universe: "Disney" },
    { name: "WALL-E", universe: "Disney" },
    { name: "EVE", universe: "Disney" },
    { name: "Merida", universe: "Disney" },
    { name: "Anger", universe: "Disney" },
    { name: "Joy", universe: "Disney" },
    { name: "Sadness", universe: "Disney" },
    { name: "Fear", universe: "Disney" },
    { name: "Disgust", universe: "Disney" },
    { name: "Bolt", universe: "Disney" },
    { name: "Penny", universe: "Disney" },
    { name: "Vanellope", universe: "Disney" },
    { name: "Ralph", universe: "Disney" }
];

const heroesPerPage = 10;
let currentPage = 0;

const heroContainer = document.getElementById('heroContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function displayHeroes() {

    heroContainer.innerHTML = '';

    const start = currentPage * heroesPerPage;
    const end = start + heroesPerPage;

    for (let i = start; i < end && i < heroes.length; i++) {
        const heroDiv = document.createElement('div');
        heroDiv.className = 'hero';
        heroDiv.textContent = `${heroes[i].name} (${heroes[i].universe})`;
        heroContainer.appendChild(heroDiv);
    }

    prevBtn.disabled = currentPage === 0;

    nextBtn.disabled = end >= heroes.length;
}

prevBtn.onclick = function() {
    if (currentPage > 0) {
        currentPage--;
        displayHeroes();
    }
};

nextBtn.onclick = function() {
    if ((currentPage + 1) * heroesPerPage < heroes.length) {
        currentPage++;
        displayHeroes();
    }
};

displayHeroes();






/*
Завдання №5
Створити довільний елемент з id = text та створити кнопку.
Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
 */

let textElement = document.getElementById('text');

let textButtonClick = document.getElementById('textClick');

textButtonClick.addEventListener('click', function() {
    if (textElement) {
        textElement.style.display = 'none';
    }
});





/*
 Завдання №6
 створити інпут який приймає вік людини та кнопку яка підтверджує дію.
 При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
*/

let superheroAge = document.getElementById('superheroAge');
let clickSuperHeroButton = document.getElementById('clickSuperHero');
let resultDiv = document.getElementById('newResult');

clickSuperHeroButton.addEventListener('click', function() {

    let age = parseInt(superheroAge.value);

    if (isNaN(age)) {
        resultDiv.innerText = 'Не вірне значення';
    } else {
        if (age < 18) {
            resultDiv.innerText = 'Вам меньше ніж 18';
        } else {
            resultDiv.innerText = 'Вам більше 18';
        }
    }
});





/*
Завдання №7
*** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
(Додатковачастина для завдання)
 */

let rowsInput = document.getElementById('rows');
let columnsInput = document.getElementById('columns');
let contentInput = document.getElementById('content');
let generateTableButton = document.getElementById('generateTable');
let tableContainer = document.getElementById('tableContainer');

generateTableButton.addEventListener('click', function() {

    let rows = rowsInput.value;
    let columns = columnsInput.value;
    let content = contentInput.value;

    if (rows > 0  && columns > 0) {

        let table = document.createElement('table');
        for (let i = 0; i < rows; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < columns; j++) {
                let td = document.createElement('td');
                td.innerText = content;
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }

        tableContainer.innerHTML = '';
        tableContainer.appendChild(table);
    } else {
        tableContainer.innerHTML = 'Не вірне значення';
    }
});





/*
Завдання №8
*** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
при перезавантаженні сторінки до значаення додається по 10грн, але !!!
 зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
 При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
 */

let valuesMoney = document.getElementById('valuesMoney');

if (valuesMoney) {

    let currentValuesMoney = localStorage.getItem('valuesMoney');
    let lastUpdateTime = localStorage.getItem('lastUpdateTime');
    let currentTime = new Date().getTime();

    if (!currentValuesMoney) {
        currentValuesMoney = 100;
    } else {
        currentValuesMoney = parseInt(currentValuesMoney);
        lastUpdateTime = parseInt(lastUpdateTime);

        if (currentTime - lastUpdateTime > 10000) {
            currentValuesMoney += 10;
        }
    }

    localStorage.setItem('valuesMoney', currentValuesMoney);
    localStorage.setItem('lastUpdateTime', currentTime);

    valuesMoney.innerText = currentValuesMoney + 'грн';
}








