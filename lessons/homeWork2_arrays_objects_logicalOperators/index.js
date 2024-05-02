/*
Масиви та об'єкти:
*/


// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let  arraysData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arraysData);



// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let Books1 = {
    title: "Adventures in space",
    pageCount: 1500,
    genre: "Fantastic",
};

let Books2 = {
    title: "Science and technology",
    pageCount: 2500,
    genre: "Scientific literature",
};

let Books3 = {
    title: "Robot Adventures",
    pageCount: 3500,
    genre: "Comedy",
};





/*
Створити 3 об'єкти які описують книги.
Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом.
Кожен автор має поля name та age.
*/

let BooksAdventures = {
    title: "Adventures",
    pageCount: 7500,
    genre: "Fantastic",
    authors: [
        {
            name: "Tom",
            age: 75,
        }
    ]
};

let BooksScience = {
    title: "Science and technology",
    pageCount: 2500,
    genre: "Scientific literature",
    authors: [
        {
            name: "Bob",
            age: 85,
        }
    ]
};

let BooksRobot = {
    title: "Robot Adventures",
    pageCount: 3500,
    genre: "Comedy",
    authors: [
        {
            name: "Alice",
            age: 35,
        }
    ]
};




/*
 - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
Вивести в консоль пароль кожного користувача
*/
let users = [
    {
        name: "Tom",
        username: "tom123",
        password: 6516651
    },
    {
        name: "Bob",
        username: "bob456",
        password: 8965155
    },
    {
        name: "Alex",
        username: "alex789",
        password: 5156515
    },
    {
        name: "Alis",
        username: "alis111",
        password: 454141
    },
    {
        name: "Anna",
        username: "anna222",
        password: 865161615
    },
    {
        name: "Vasiliy",
        username: "vasyl333",
        password: 841652652
    },
    {
        name: "Tatiana",
        username: "tetiana444",
        password: 84588894894
    },
    {
        name: "Oleg",
        username: "oleg555",
        password: 8465111
    },
    {
        name: "Natalia",
        username: "natalia666",
        password: 56561561651
    },
    {
        name: "Mikhail",
        username: "mikhail777",
        password: 845261651616
    }
];

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);



/*
описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
*/

let weeklyTemperatureInformation = [
    { day: "Понеділок", morning: 18, dayTime: 22, evening: 20 },
    { day: "Вівторок", morning: 17, dayTime: 23, evening: 19 },
    { day: "Середа", morning: 16, dayTime: 21, evening: 18 },
    { day: "Четвер", morning: 19, dayTime: 24, evening: 21 },
    { day: "П'ятниця", morning: 20, dayTime: 25, evening: 22 },
    { day: "Субота", morning: 18, dayTime: 22, evening: 20 },
    { day: "Неділя", morning: 17, dayTime: 21, evening: 19 }
];

console.log(weeklyTemperatureInformation[0]);
console.log(weeklyTemperatureInformation[1]);
console.log(weeklyTemperatureInformation[2]);
console.log(weeklyTemperatureInformation[3]);
console.log(weeklyTemperatureInformation[4]);
console.log(weeklyTemperatureInformation[5]);
console.log(weeklyTemperatureInformation[6]);





// Логічні розгалуження:

/*
 - Є змінна х, якій ви надаєте довільне числове значення.
Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
*/

let x = 5;
if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}




/*
- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).
*/

let time = 55;
if (time <= 15) {
    console.log(`${time} попадає до першої четверті години`)
} else if (time <= 30) {
    console.log(`${time} попадає до другої четверті години`)
} else if (time <= 45) {
    console.log(`${time} попадає до третьої четверті години`)
} else if (time <= 60) {
    console.log(`${time} попадає до четвертої четверті години`)
}





/*
- У змінній day дано якесь число від 1 до 31.
Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
*/

let day = 25;
if (day >= 1 && day <= 10) {
    console.log(`${day} Це перша половина місяця`);
} else if (day >= 11 && day <= 20) {
    console.log(`${day} Це друга половина місяця`);
} else if (day >= 21 && day <= 31) {
    console.log(`${day} Це третя половина місяця`);
}




/*
- Скласти розклад на тиждень за домопоги switch.
Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
(можна замість плану на день, назву дня англійською).
*/

let dayWeekNumber = 7;

switch (true) {
    case (dayWeekNumber === 1):
        console.log("Понеділок: Почати новий проект");
        break;
    case (dayWeekNumber === 2):
        console.log("Вівторок: Завершити роботу над проектом");
        break;
    case (dayWeekNumber === 3):
        console.log("Середа: Розпочати роботу над новими функціями");
        break;
    case (dayWeekNumber === 4):
        console.log("Четвер: Тестування і відладка нових функцій");
        break;
    case (dayWeekNumber === 5):
        console.log("П'ятниця: Підготовка до демонстрації нових функцій");
        break;
    case (dayWeekNumber === 6):
        console.log("Субота: Відпочинок та вільний час");
        break;
    case (dayWeekNumber === 7):
        console.log("Неділя: Сімейний відпочинок та підготовка до нового тижня");
        break;
    default:
        console.log("Невірно введений номер дня");
        break;
}




/*
- Користувач вводить або має два числа.
Потрібно знайти та вивести максимальне число з тих двох .
Також потрібно врахувати коли введені рівні числа.
*/

let number1 = 5;

let number2 = 100;

if (number1 > number2) {
    console.log(`Максимальне число: ${number1}`);
} else if (number2 > number1) {
    console.log(`Максимальне число: ${number2}`);
} else {
    console.log("Введені числа рівні");
}




/*
- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
(хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
*/

if (!x) {
    x = "default";
    console.log("Змінній x було присвоєно значення 'default'");
} else {
    console.log("Змінна x не є falsy, її значення:", x);
}





/*
- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
За допомоги іф перевірити кожен його елемент на тривалість навчання.
У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
*/

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5 ) {
    console.log("Супер");
}

if (coursesAndDurationArray[1].monthDuration > 5 ) {
    console.log("Супер");
}

if (coursesAndDurationArray[2].monthDuration > 5 ) {
    console.log("Супер");
}

if (coursesAndDurationArray[3].monthDuration > 5 ) {
    console.log("Супер");
}

if (coursesAndDurationArray[4].monthDuration > 5 ) {
    console.log("Супер");
}

if (coursesAndDurationArray[5].monthDuration > 5 ) {
    console.log("Супер");
}





