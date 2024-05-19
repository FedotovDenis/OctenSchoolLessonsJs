// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

let lengthOfStringValuesHelloWorld = 'hello world';
console.log(lengthOfStringValuesHelloWorld.trim());

let lengthOfStringValuesloremIpsum = 'lorem ipsum';
console.log(lengthOfStringValuesloremIpsum.trim());

let lengthOfStringValuesJavascriptIsCool = 'javascript is cool';
console.log(lengthOfStringValuesJavascriptIsCool.trim());





// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

let upperCaseHello = 'hello world';
console.log(upperCaseHello.toUpperCase());

let upperCaselorem = 'lorem ipsum';
console.log(upperCaselorem.toUpperCase());

let upperCaseJavascript = 'javascript is cool';
console.log(upperCaseJavascript.toUpperCase());





// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let lowerCaseHello = 'HELLO WORLD';
console.log(lowerCaseHello.toLowerCase());

let lowerCaselorem = 'LOREM IPSUM';
console.log(lowerCaselorem.toLowerCase());

let lowerCaseJavascript = 'JAVASCRIPT IS COOL';
console.log(lowerCaseJavascript.toLowerCase());





// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
console.log(str.substring(1, 15));





// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let stringToarray = (str) => {
    return str.split(' ');
}
let strArr = 'Ревуть воли як ясла повні';
console.log(stringToarray(strArr));





// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let array = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let arrayString = array.map(item => String(item));
console.log(arrayString);





// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let sortNums = (nums, direction) => {
    if (direction === 'ascending') {
        return nums.sort((startTheArray, EndOfArray) => startTheArray - EndOfArray);
    } else if (direction === 'descending') {
        return nums.sort((startTheArray, EndOfArray) => EndOfArray - startTheArray);
    } else {
        return nums;
    }
};

let nums = [11, 21, 3];
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));




/*
 - є масив
 let coursesAndDurationArray = [
     {title: 'JavaScript Complex', monthDuration: 5},
     {title: 'Java Complex', monthDuration: 6},
     {title: 'Python Complex', monthDuration: 6},
     {title: 'QA Complex', monthDuration: 4},
     {title: 'FullStack', monthDuration: 7},
     {title: 'Frontend', monthDuration: 4}
 ];
  -- відсортувати його за спаданням за monthDuration
  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
*/

// -- відсортувати його за спаданням за monthDuration

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let decreasingByMonthDuration = () => {
    let sortedArray = [];
    coursesAndDurationArray.forEach(course => {
        sortedArray.push(course);
    });

    sortedArray.sort((startTheArray, EndOfArray) => EndOfArray.monthDuration - startTheArray.monthDuration);

    coursesAndDurationArray = sortedArray;
};

decreasingByMonthDuration();
console.log(coursesAndDurationArray);





//  описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let cardSuit = ['spade', 'diamond', 'heart', 'clubs'];
let values = [6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];

let cards = cardSuit.reduce((acc, suit) => {
    values.forEach(value => {
        let color = (suit === 'diamond' || suit === 'heart') ? 'red' : 'black';
        acc.push({
            cardSuit: suit,
            value: value,
            color: color
        });
    });
    return acc;
}, []);

console.log(cards);

console.log(cards.find(card => card.cardSuit === 'spade' && card.value === 'ace'));

console.log(cards.filter(card => card.value === 6));

console.log(cards.filter(card => card.color === 'red'));

console.log(cards.filter(card => card.cardSuit === 'diamond'));

console.log(cards.filter(card => card.cardSuit === 'clubs' && typeof card.value === 'number' && card.value >= 9));


// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let packedCards = cards.reduce((acc, card) => {
    acc[card.cardSuit].push(card);
    return acc;
}, { spade: [], diamond: [], heart: [], clubs: [] });

console.log(packedCards);





/*
взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
--написати пошук всіх об'єктів, в який в modules є sass
--написати пошук всіх об'єктів, в який в modules є docker
 */



let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let newSassModules = [];
coursesArray.forEach(course => {
    if (course.modules.includes('sass')) {
        newSassModules.push(course.modules);
    }
});
console.log(newSassModules);


let newDockerModules = [];
coursesArray.forEach(course => {
    if (course.modules.includes('docker')) {
        newDockerModules.push(course.modules);
    }
});
console.log(newDockerModules);






