// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let areaRectangleSides = (a, b) =>  a * b;
document.write(areaRectangleSides(10, 25));





// - створити функцію яка обчислює та повертає площу кола з радіусом r

let areaCircleWithRadius = (circleRadius) => 3.14159 * circleRadius * circleRadius;

const radius = 5;
const area = areaCircleWithRadius(radius);

document.write(`<div>Площа кола з радіусом ${radius} дорівнює ${area}</div>`);





// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let areaTheCylinder = (radiusCylinder, height) => 2 * 3.14159 * radiusCylinder * (radiusCylinder + height);

const radiusCylinder = 5;
const height = 10;

const surfaceArea = areaTheCylinder(radiusCylinder, height);

document.write(`<div>Площа поверхні циліндра з радіусом ${radiusCylinder} та висотою ${height} дорівнює ${surfaceArea}</div>`);





// - створити функцію яка приймає масив та виводить кожен його елемент

let printArrayElements = (array) => {
    for (const item of array) {
        document.write(`<div>Name: ${item.name}, Age: ${item.age}, Status: ${item.status}</div>`);
    }
}

let users = [
    {name: 'vasya', age: 37, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

printArrayElements(users);





// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let createsParagraphWithText = (textParagrap) => `<div><p>${textParagrap}</p></div>`

let text = "Функція яка створює параграф з текстом!";

document.write(createsParagraphWithText(text));





// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let creatingNumberedLists = (textList) => {
    document.write("<ul>");
    for (let i = 0; i < 3; i++) {
        document.write("<li>" + textList + "</li>");
    }
    document.write("</ul>");
}

let creatingText = 'Створення функції яка створює ul з трьома елементами li';
creatingNumberedLists(creatingText);





// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let createListWithItems = (text, count) => {
    document.write("<ul>");
    for(let i = 0; i < count; i++){
        document.write("<li>" + text + "</li>");
    }
    document.write("</ul>");
}

let textList = 'Текст для усіх елементів списку';
let count = 3;

createListWithItems(textList, count);





// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arrayPrimitiveElements = (arr) => {
    document.write("<ul>");
    for (let item of arr) {
        document.write("<li>" + item + "</li>");
    }
    document.write("</ul>");
}

let arrElements = [10, 50, 75, 'name', true];
arrayPrimitiveElements(arrElements);





// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let arraysOfObjects = (arr) => {
    for(let element of arr){
        document.write(`<div><ul><li>${element.name}</li><li>${element.age}</li><li>${element.id}</li></ul></div>`);
    }
}

let usersListName = [
    {name: 'Tom', age: 35, id: 'tomos'},
    {name: 'Bob', age: 30, id: 'bob'},
    {name: 'Nic', age: 29, id: 'nico'},
    {name: 'olya', age: 28, id: 'oli'},
    {name: 'max', age: 30, id: 'maxim'},
    {name: 'anya', age: 31, id: 'ani'},
    {name: 'oleg', age: 28, id: 'ole'},
    {name: 'andrey', age: 29, id: 'andru'},
    {name: 'masha', age: 30, id: 'mash'},
    {name: 'olya', age: 31, id: 'oli'},
    {name: 'max', age: 31, id: 'super'}
];

arraysOfObjects(usersListName);





// - створити функцію яка повертає найменьше число з масиву

let smallestNumberArray = (arr) => {
    let smallesNumber = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallesNumber) {
            smallesNumber = arr[i];
        }
    }
    return smallesNumber;
}

const numbersArray = [1, 2, 3, 4, 5];
console.log(smallestNumberArray(numbersArray));





// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

let sumArr = (arr) => {
    let sumNumbers = 0;
    for(let i = 0; i < arr.length; i++){
        sumNumbers += arr[i];
    }
    return sumNumbers;
}

let numbersArrays = [1, 2, 3, 4, 5];
console.log(sumArr(numbersArrays));





// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (arr, index1, index2) => {
    if (index1 >= 0 && index1 < arr.length && index2 >= 0 && index2 < arr.length) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
    return arr;
}

let array = [11, 22, 33, 44];
console.log(swap(array, 0, 1));





// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
debugger
let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let exchangeRate = null;

    for (let item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            exchangeRate = item.value;
        }
    }

    if (exchangeRate === null) {
        return "Не вдалося знайти значення валюти для конвертації";
    }

    return sumUAH / exchangeRate;
}

let result = exchange(10000, [{currency:'USD', value:40},{currency:'EUR', value:42}], 'USD');
console.log(result);