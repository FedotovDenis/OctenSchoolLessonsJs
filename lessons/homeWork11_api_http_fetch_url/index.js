/*
Завдання №1
- взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
 */

// Отримуємо данні с API DummyJSON
fetch('https://dummyjson.com/carts')
    .then(response => response.json())
    .then(data => {
        // Витягуємо масив кошиків з отриманих даних
        let carts = data.carts;

        // Створюємо контейнер для інформації про кошики
        let cartContainer = document.getElementById('cartContainer');

        // Перебираємо кожен кошик
        carts.forEach(cart => {
            // Створюємо елемент <div> для відображення інформації про кошик
            let cartDiv = document.createElement('div');
            cartDiv.className = 'cart';

            /*
            Перебираємо кожен продукт у кошику
            Для кожного кошика є масив продуктів (products)
            Метод forEach() викликає функцію один раз для кожного продукту в масиві
            */
            cart.products.forEach(product => {
                // Створюємо новий елемент <div> для відображення інформації про продукт
                let productDiv = document.createElement('div');
                // Встановлюємо клас нового елемента <div>
                // Клас 'product' використовуємо для стилізації елемента CSS
                productDiv.className = 'product';

                // Формуємо деталі продукту
                let productDetails = `
                 <p>Продукт ID: ${product.id}</p>
                 <p>Назва: ${product.title}</p>
                 <p>Ціна: ${product.price}</p>
                 <p>Кількість: ${product.quantity}</p>
                 <p>Сума: ${product.total}</p>
                 `;

                // Вставляємо деталі продукту елемент productDiv
                productDiv.innerHTML = productDetails;
                // Додаємо productDiv до cartDiv
                cartDiv.appendChild(productDiv);
            });

            // Додаємо cartDiv у контейнер
            cartContainer.appendChild(cartDiv);
        });
    })
    .catch(error => console.error('Помилка при отриманні даних про кошики:', error));





/*
Завдання №2
- взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
 */

// Получаем контейнер для рецептов
let recipesBlock = document.getElementById('recipesBlock');

// Запрашиваем данные о рецептах
fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(({recipes}) => {
        // Перебираем каждый рецепт и создаем элементы для отображения
        for (const recipe of recipes) {
            let recipeInfo = document.createElement('div');
            let recipeBlock = document.createElement('div');
            let recipeName = document.createElement('div');
            let ingredientsList = document.createElement('ul');
            let recipeImg = document.createElement('img');

            // Добавляем классы для стилизации
            recipeBlock.classList.add('recipe');
            recipeName.classList.add('recipeName');
            recipeInfo.classList.add('recipeInfo');

            // Заполняем информацию о рецепте
            recipeName.innerText = `Name: ${recipe.name}`;
            recipeBlock.innerText = `
                        ID: ${recipe.id}
                        Description: ${recipe.instructions.join(' ')}
                        Calories per serving: ${recipe.caloriesPerServing}
                        Cook time: ${recipe.cookTimeMinutes} minutes
                        Cuisine: ${recipe.cuisine}
                        Difficulty: ${recipe.difficulty}
                        Prep time: ${recipe.prepTimeMinutes} minutes
                        Rating: ${recipe.rating}
                        Servings: ${recipe.servings}
                    `;
            recipeImg.src = recipe.image;

            // Добавляем список ингредиентов
            ingredientsList.classList.add('ingredient');
            for (const item of recipe.ingredients) {
                let ingredient = document.createElement('li');
                ingredient.innerText = item;
                ingredientsList.appendChild(ingredient);
            }

            // Собираем всю информацию в одном блоке
            recipeInfo.append(recipeName, recipeBlock, recipeImg, ingredientsList);
            recipesBlock.appendChild(recipeInfo);
        }
    })
    .catch(error => console.error('Ошибка при получении данных о рецептах:', error));




/*
Завдання №3
- зробити файл users.html
з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)
 */

// Через fetch звиртаємось на 'https://jsonplaceholder.typicode.com/users' та через .then(res => res.json()) виводимо в форматі JSON users
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        // Витягуємо масив користувачів з отриманих даних
        let userList = document.getElementById('userList');

        // Перебираємо кожен користувача у масиві користувачів
        users.forEach(user => {
            // Створюємо елемент <li> для кожного користувача
            let userLI = document.createElement('li');
            userLI.textContent = `${user.id} - ${user.name}`;

            // Додаємо посилання до <li> користувача
            let userLink = document.createElement('a');
            userLink.href = 'user-details.html?id=' + user.id;
            userLink.textContent = ' Подробний опис користувача';

            // Додаємо посилання до <li> користувача
            userLI.appendChild(userLink);

            // Додаємо <li> користувача до списку
            userList.appendChild(userLI);
        });
    })
    .catch(error => console.error('Помилка при отриманні даних про користувачі:', error));

// Отримуємо параметр id з URL
let urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get('id');

// Запитуємо дані про користувача з id
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        // Витягуємо контейнер для відображення деталей користувача
        let userDetails = document.getElementById('userDetails');

        // Заповнюємо контейнер інформацією про користувача
        userDetails.innerHTML = `
                    <h2>${user.name}</h2>
                    <p><strong>ID:</strong> ${user.id}</p>
                    <p><strong>Username:</strong> ${user.username}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Website:</strong> ${user.website}</p>
                    <p><strong>Company:</strong> ${user.company.name}</p>
                `;
    })
    .catch(error => console.error('Помилка при отриманні даних про користувача:', error));








