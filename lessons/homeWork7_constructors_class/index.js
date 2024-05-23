// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let newUsers = [];

let users = [
    new User(1, 'John', 'Doe', 'john.doe@example.com', '123-456-7890'),
    new User(2, 'Jane', 'Smith', 'jane.smith@example.com', '234-567-8901'),
    new User(3, 'Alice', 'Johnson', 'alice.johnson@example.com', '345-678-9012'),
    new User(4, 'Bob', 'Brown', 'bob.brown@example.com', '456-789-0123'),
    new User(5, 'Charlie', 'Davis', 'charlie.davis@example.com', '567-890-1234'),
    new User(6, 'David', 'Miller', 'david.miller@example.com', '678-901-2345'),
    new User(7, 'Emma', 'Wilson', 'emma.wilson@example.com', '789-012-3456'),
    new User(8, 'Frank', 'Moore', 'frank.moore@example.com', '890-123-4567'),
    new User(9, 'Grace', 'Taylor', 'grace.taylor@example.com', '901-234-5678'),
    new User(10, 'Hannah', 'Anderson', 'hannah.anderson@example.com', '012-345-6789')
];

newUsers.push(new User(1, 'John', 'Doe', 'john.doe@example.com', '123-456-7890'));
newUsers.push(new User(2, 'Jane', 'Smith', 'jane.smith@example.com', '234-567-8901'));
newUsers.push(new User(3, 'Alice', 'Johnson', 'alice.johnson@example.com', '345-678-9012'));
newUsers.push(new User(4, 'Bob', 'Brown', 'bob.brown@example.com', '456-789-0123'));
newUsers.push(new User(5, 'Charlie', 'Davis', 'charlie.davis@example.com', '567-890-1234'));
newUsers.push(new User(6, 'David', 'Miller', 'david.miller@example.com', '678-901-2345'));
newUsers.push(new User(7, 'Emma', 'Wilson', 'emma.wilson@example.com', '789-012-3456'));
newUsers.push(new User(8, 'Frank', 'Moore', 'frank.moore@example.com', '890-123-4567'));
newUsers.push(new User(9, 'Grace', 'Taylor', 'grace.taylor@example.com', '901-234-5678'));
newUsers.push(new User(10, 'Hannah', 'Anderson', 'hannah.anderson@example.com', '012-345-6789'));

console.log(users);






// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let newUsersObject = [
    new User(1, 'John', 'Doe', 'john.doe@example.com', '123-456-7890'),
    new User(2, 'Jane', 'Smith', 'jane.smith@example.com', '234-567-8901'),
    new User(3, 'Alice', 'Johnson', 'alice.johnson@example.com', '345-678-9012'),
    new User(4, 'Bob', 'Brown', 'bob.brown@example.com', '456-789-0123'),
    new User(5, 'Charlie', 'Davis', 'charlie.davis@example.com', '567-890-1234'),
    new User(6, 'David', 'Miller', 'david.miller@example.com', '678-901-2345'),
    new User(7, 'Emma', 'Wilson', 'emma.wilson@example.com', '789-012-3456'),
    new User(8, 'Frank', 'Moore', 'frank.moore@example.com', '890-123-4567'),
    new User(9, 'Grace', 'Taylor', 'grace.taylor@example.com', '901-234-5678'),
    new User(10, 'Hannah', 'Anderson', 'hannah.anderson@example.com', '012-345-6789')
];

let newUsersObjectFilter = (users) => {
    return users.filter(user => user.id % 2 === 0);
}

let resultUsersIdObjectFilter = newUsersObjectFilter(newUsersObject);
console.log(resultUsersIdObjectFilter);






// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let newUsersObjectSort = [
    new User(1, 'John', 'Doe', 'john.doe@example.com', '123-456-7890'),
    new User(2, 'Jane', 'Smith', 'jane.smith@example.com', '234-567-8901'),
    new User(3, 'Alice', 'Johnson', 'alice.johnson@example.com', '345-678-9012'),
    new User(4, 'Bob', 'Brown', 'bob.brown@example.com', '456-789-0123'),
    new User(5, 'Charlie', 'Davis', 'charlie.davis@example.com', '567-890-1234'),
    new User(6, 'David', 'Miller', 'david.miller@example.com', '678-901-2345'),
    new User(7, 'Emma', 'Wilson', 'emma.wilson@example.com', '789-012-3456'),
    new User(8, 'Frank', 'Moore', 'frank.moore@example.com', '890-123-4567'),
    new User(9, 'Grace', 'Taylor', 'grace.taylor@example.com', '901-234-5678'),
    new User(10, 'Hannah', 'Anderson', 'hannah.anderson@example.com', '012-345-6789')

];

let newUsersObjectSortId = (users) => {

    return users.sort((userA, userB) => userA.id - userB.id);

}

let resultUsersIdObjectSort = newUsersObjectSortId(newUsersObjectSort);
console.log(resultUsersIdObjectSort);





// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [];

clients.push(new Client(1, 'John', 'Doe', 'john.doe@example.com', '123-456-7890', ['milk', 'bread', 'tomato', 'cheese', 'sugar']));
clients.push(new Client(2, 'Jane', 'Smith', 'jane.smith@example.com', '234-567-8901', ['bread', 'juster', 'cheese', 'sugar']));
clients.push(new Client(3, 'Alice', 'Johnson', 'alice.johnson@example.com', '345-678-9012', ['apple', 'banana', 'orange', 'cheese', 'sugar', 'tomato', 'eggs']));
clients.push(new Client(4, 'Bob', 'Brown', 'bob.brown@example.com', '456-789-0123', ['eggs', 'butter', 'sugar']));
clients.push(new Client(5, 'Charlie', 'Davis', 'charlie.davis@example.com', '567-890-1234', ['milk', 'bread']));
clients.push(new Client(6, 'David', 'Miller', 'david.miller@example.com', '678-901-2345', ['tomato']));
clients.push(new Client(7, 'Emma', 'Wilson', 'emma.wilson@example.com', '789-012-3456', ['bread', 'tomato']));
clients.push(new Client(8, 'Frank', 'Moore', 'frank.moore@example.com', '890-123-4567', ['patata', 'bread', 'tomato', 'sugare']));
clients.push(new Client(9, 'Grace', 'Taylor', 'grace.taylor@example.com', '901-234-5678', ['sald', 'sugare',]));
clients.push(new Client(10, 'Hannah', 'Anderson', 'hannah.anderson@example.com', '012-345-6789', ['olive', 'orange', 'apple']));

console.log(clients);





// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let productsClients = [
    { id: 1, name: 'Tom', surname: 'Tomas', email: 'tom.doe@example.com', phone: '123-456-7890', order: ['milk', 'bread', 'tomato', 'cheese', 'sugar'] },
    { id: 2, name: 'Jane', surname: 'Smith', email: 'jane.smith@example.com', phone: '234-567-8901', order: ['bread', 'butter', 'cheese', 'sugar'] },
    { id: 3, name: 'Alice', surname: 'Johnson', email: 'alice.johnson@example.com', phone: '345-678-9012', order: ['apple', 'banana', 'orange', 'cheese', 'sugar', 'tomato', 'eggs'] },
    { id: 4, name: 'Bob', surname: 'Brown', email: 'bob.brown@example.com', phone: '456-789-0123', order: ['eggs', 'butter', 'sugar'] },
    { id: 5, name: 'Charlie', surname: 'Davis', email: 'charlie.davis@example.com', phone: '567-890-1234', order: ['milk', 'bread'] },
    { id: 6, name: 'David', surname: 'Miller', email: 'david.miller@example.com', phone: '678-901-2345', order: ['tomato'] },
    { id: 7, name: 'Emma', surname: 'Wilson', email: 'emma.wilson@example.com', phone: '789-012-3456', order: ['bread', 'tomato'] },
    { id: 8, name: 'Frank', surname: 'Moore', email: 'frank.moore@example.com', phone: '890-123-4567', order: ['potato', 'bread', 'tomato', 'sugar'] },
    { id: 9, name: 'Grace', surname: 'Taylor', email: 'grace.taylor@example.com', phone: '901-234-5678', order: ['salad', 'sugar'] },
    { id: 10, name: 'Hannah', surname: 'Anderson', email: 'hannah.anderson@example.com', phone: '012-345-6789', order: ['olive', 'orange', 'apple'] }
];

function sortProducts(clientProducts1, clientProducts2) {
    return clientProducts1.order.length - clientProducts2.order.length;
}

productsClients.sort(sortProducts);

console.log(productsClients);





// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = () => {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    this.info = () => {
        console.log(`модель - ${this.model}`);
        console.log(`виробник - ${this.manufacturer}`);
        console.log(`рік випуску - ${this.year}`);
        console.log(`максимальна швидкість - ${this.maxSpeed}`);
        console.log(`об'єм двигуна - ${this.engineVolume}`);
    };

    this.increaseMaxSpeed = (newSpeed) => {
        this.maxSpeed += newSpeed;
    };

    this.changeYear = (newValue) => {
        this.year = newValue;
    };

    this.addDriver = (driver) => {
        this.driver = driver;
    };
}


let myCar = new Car('A8 RX', 'Audi', 2020, 250, 100);

myCar.drive();
myCar.info();

myCar.increaseMaxSpeed(20);
myCar.drive();

myCar.changeYear(2022);
myCar.info();

myCar.addDriver({name: 'Tom', age: 30});
console.log(myCar.driver);






// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


class Car2 {

    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }


    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        console.log(`модель - ${this.model}`);
        console.log(`виробник - ${this.manufacturer}`);
        console.log(`рік випуску - ${this.year}`);
        console.log(`максимальна швидкість - ${this.maxSpeed}`);
        console.log(`об'єм двигуна - ${this.engineVolume}`);
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }


    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}


let myCar2 = new Car2('Model S', 'Tesla', 2020, 250, 100);

myCar2.drive();

myCar2.info();

myCar2.increaseMaxSpeed(20);

myCar2.drive();

myCar2.changeYear(2022);

myCar2.info();

myCar2.addDriver({name: 'Tom', age: 30});

console.log(myCar2.driver);





// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


// Класс попелюшка (Peppa)
function Peppa(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

const peppas = [
    new Peppa('Peppa', 20, 36),
    new Peppa('Bella', 21, 37),
    new Peppa('Clara', 22, 38),
    new Peppa('Diana', 23, 39),
    new Peppa('Eva', 24, 40),
    new Peppa('Fiona', 25, 41),
    new Peppa('Gina', 26, 36),
    new Peppa('Hanna', 27, 37),
    new Peppa('Ivy', 28, 44),
    new Peppa('Julia', 29, 45)
];

const prince = {
    name: 'Tom',
    age: 30,
    slipper: 39
};

function findPeppa() {
    return peppas.find(peppa => peppa.footSize === prince.slipper);
}

const foundPeppa = findPeppa();

console.log(foundPeppa);





// Через Array.prototype. створити власний foreach, filter, map

Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

const numbers = [1, 2, 3, 4, 5];

numbers.myForEach(function(item, index, array) {
    console.log(`Item: ${item}, Index: ${index}, Array: ${array}`);
});






Array.prototype.myFilter = function(callback) {
    const filteredArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            filteredArray.push(this[i]);
        }
    }
    return filteredArray;
};

const filteredNumbers = numbers.myFilter(function(item) {
    return item > 3;
});

console.log(filteredNumbers);






Array.prototype.myMap = function(callback) {
    const mappedArray = [];
    for (let i = 0; i < this.length; i++) {
        mappedArray.push(callback(this[i], i, this));
    }
    return mappedArray;
};

const mappedNumbers = numbers.myMap(function(item) {
    return item * 2;
});

console.log(mappedNumbers);
