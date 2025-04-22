// Зберігання інгредієнтів
let ingredients = [];
// Зберігання даних про продукти
let foodsData = {
    "categories": [
        {
            "name": "Овочі",
            "items": [
                {
                    "name": "Картопля",
                    "calories": 77
                },
                {
                    "name": "Морква",
                    "calories": 41
                },
                {
                    "name": "Цибуля",
                    "calories": 40
                },
                {
                    "name": "Помідори",
                    "calories": 18
                },
                {
                    "name": "Огірки",
                    "calories": 15
                },
                {
                    "name": "Перець болгарський",
                    "calories": 27
                },
                {
                    "name": "Капуста білокачанна",
                    "calories": 27
                },
                {
                    "name": "Баклажани",
                    "calories": 24
                },
                {
                    "name": "Кабачки",
                    "calories": 17
                },
                {
                    "name": "Буряк",
                    "calories": 43
                }
            ]
        },
        {
            "name": "Фрукти",
            "items": [
                {
                    "name": "Яблука",
                    "calories": 52
                },
                {
                    "name": "Банани",
                    "calories": 89
                },
                {
                    "name": "Апельсини",
                    "calories": 47
                },
                {
                    "name": "Мандарини",
                    "calories": 53
                },
                {
                    "name": "Груші",
                    "calories": 57
                },
                {
                    "name": "Виноград",
                    "calories": 69
                },
                {
                    "name": "Персики",
                    "calories": 39
                },
                {
                    "name": "Абрикоси",
                    "calories": 48
                },
                {
                    "name": "Сливи",
                    "calories": 49
                },
                {
                    "name": "Киві",
                    "calories": 61
                }
            ]
        },
        {
            "name": "М'ясо та риба",
            "items": [
                {
                    "name": "Курка (філе)",
                    "calories": 165
                },
                {
                    "name": "Свинина (нежирна)",
                    "calories": 242
                },
                {
                    "name": "Яловичина (нежирна)",
                    "calories": 250
                },
                {
                    "name": "Форель",
                    "calories": 97
                },
                {
                    "name": "Лосось",
                    "calories": 208
                },
                {
                    "name": "Тунець",
                    "calories": 184
                },
                {
                    "name": "Креветки",
                    "calories": 85
                },
                {
                    "name": "Індичка (філе)",
                    "calories": 189
                },
                {
                    "name": "Кролик",
                    "calories": 173
                },
                {
                    "name": "Телятина",
                    "calories": 172
                }
            ]
        },
        {
            "name": "Молочні продукти",
            "items": [
                {
                    "name": "Молоко (3.2%)",
                    "calories": 60
                },
                {
                    "name": "Йогурт (натуральний)",
                    "calories": 59
                },
                {
                    "name": "Сир твердий",
                    "calories": 402
                },
                {
                    "name": "Сир кисломолочний (5%)",
                    "calories": 121
                },
                {
                    "name": "Сметана (20%)",
                    "calories": 206
                },
                {
                    "name": "Кефір (2.5%)",
                    "calories": 53
                },
                {
                    "name": "Ряжанка",
                    "calories": 53
                },
                {
                    "name": "Творог (5%)",
                    "calories": 121
                },
                {
                    "name": "Масло вершкове",
                    "calories": 748
                },
                {
                    "name": "Сир кисломолочний (0%)",
                    "calories": 71
                }
            ]
        },
        {
            "name": "Крупи та борошно",
            "items": [
                {
                    "name": "Рис (варенений)",
                    "calories": 130
                },
                {
                    "name": "Гречка (варенена)",
                    "calories": 132
                },
                {
                    "name": "Овсянка (варенена)",
                    "calories": 68
                },
                {
                    "name": "Пшениця (варенена)",
                    "calories": 130
                },
                {
                    "name": "Кукурудза (варенена)",
                    "calories": 96
                },
                {
                    "name": "Борошно пшеничне",
                    "calories": 334
                },
                {
                    "name": "Борошно гречане",
                    "calories": 335
                },
                {
                    "name": "Манна крупа",
                    "calories": 333
                },
                {
                    "name": "Перлова крупа",
                    "calories": 123
                },
                {
                    "name": "Пшоно",
                    "calories": 348
                }
            ]
        },
        {
            "name": "Напої",
            "items": [
                {
                    "name": "Кока-кола",
                    "calories": 42
                },
                {
                    "name": "Пепсі",
                    "calories": 41
                },
                {
                    "name": "Сік апельсиновий",
                    "calories": 45
                },
                {
                    "name": "Сік яблучний",
                    "calories": 46
                },
                {
                    "name": "Сік томатний",
                    "calories": 17
                },
                {
                    "name": "Сік виноградний",
                    "calories": 54
                },
                {
                    "name": "Сік гранатовий",
                    "calories": 54
                },
                {
                    "name": "Сік морквяний",
                    "calories": 28
                },
                {
                    "name": "Сік ананасовий",
                    "calories": 53
                },
                {
                    "name": "Сік вишневий",
                    "calories": 50
                }
            ]
        },
        {
            "name": "Снеки",
            "items": [
                {
                    "name": "Чіпси",
                    "calories": 536
                },
                {
                    "name": "Попкорн",
                    "calories": 375
                },
                {
                    "name": "Крекер",
                    "calories": 504
                },
                {
                    "name": "Печиво",
                    "calories": 417
                },
                {
                    "name": "Шоколад темний",
                    "calories": 545
                },
                {
                    "name": "Шоколад молочний",
                    "calories": 535
                },
                {
                    "name": "Мармелад",
                    "calories": 305
                },
                {
                    "name": "Зефір",
                    "calories": 304
                },
                {
                    "name": "Вафлі",
                    "calories": 425
                },
                {
                    "name": "Мюслі",
                    "calories": 357
                }
            ]
        }
    ]
};

// Ключ для Local Storage
const STORAGE_KEY = 'calorieCalculatorIngredients';

// Отримання елементів DOM
const ingredientForm = document.getElementById('ingredientForm');
const ingredientsList = document.getElementById('ingredientsList');
const resetButton = document.getElementById('resetButton');
const totalWeightElement = document.getElementById('totalWeight');
const detailedTotalCaloriesElement = document.getElementById('detailedTotalCalories');
const caloriesPer100gElement = document.getElementById('caloriesPer100g');
const recommendedPortionsElement = document.getElementById('recommendedPortions');
const recommendedPortionSizeElement = document.getElementById('recommendedPortionSize');
const instructionsButton = document.getElementById('instructionsButton');
const instructionsModal = document.getElementById('instructionsModal');
const closeInstructions = document.getElementById('closeInstructions');
const categorySelect = document.getElementById('categorySelect');
const foodSelect = document.getElementById('foodSelect');
const weightInput = document.getElementById('weight');
const nameInput = document.getElementById('name');
const customWeightInput = document.getElementById('customWeight');
const caloriesInput = document.getElementById('calories');
// Нові елементи для вкладок
const predefinedTab = document.getElementById('predefinedTab');
const customTab = document.getElementById('customTab');
const predefinedSection = document.getElementById('predefinedSection');
const customSection = document.getElementById('customSection');

// Завантаження даних про продукти
function loadFoodsData() {
    populateCategorySelect();
}

// Заповнення випадаючого списку категорій
function populateCategorySelect() {
    categorySelect.innerHTML = '<option value="">Виберіть категорію</option>';

    if (foodsData && foodsData.categories) {
        foodsData.categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category.name;
            option.textContent = category.name;
            categorySelect.appendChild(option);
        });
    }
}

// Заповнення випадаючого списку продуктів за категорією
function populateFoodSelect(categoryName) {
    foodSelect.innerHTML = '<option value="">Виберіть продукт</option>';

    if (foodsData && foodsData.categories) {
        const category = foodsData.categories.find(cat => cat.name === categoryName);
        if (category && category.items) {
            category.items.forEach(food => {
                const option = document.createElement('option');
                option.value = JSON.stringify(food);
                option.textContent = `${food.name} (${food.calories} ккал/100г)`;
                foodSelect.appendChild(option);
            });
        }
    }
}

// Обробник зміни категорії
categorySelect.addEventListener('change', () => {
    const selectedCategory = categorySelect.value;
    if (selectedCategory) {
        populateFoodSelect(selectedCategory);
    } else {
        foodSelect.innerHTML = '<option value="">Виберіть продукт</option>';
    }
});

// Обробник зміни продукту
foodSelect.addEventListener('change', () => {
    const selectedFoodValue = foodSelect.value;
    if (selectedFoodValue) {
        const selectedFood = JSON.parse(selectedFoodValue);
        caloriesInput.value = selectedFood.calories;
        nameInput.value = selectedFood.name;
    }
});

// Завантаження даних з Local Storage при ініціалізації
function loadFromLocalStorage() {
    const savedIngredients = localStorage.getItem(STORAGE_KEY);
    if (savedIngredients) {
        ingredients = JSON.parse(savedIngredients);
        updateIngredientsList();
        updateDetailedStatistics();
    }
    // Оновлюємо стан кнопки скидання після завантаження даних
    updateResetButtonState();
}

// Збереження даних у Local Storage
function saveToLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ingredients));
}

// Оновлення розширеної статистики
function updateDetailedStatistics() {
    // Розрахунок загальної маси
    const totalWeight = ingredients.reduce((sum, ingredient) => sum + ingredient.weight, 0);

    // Розрахунок загальної калорійності
    const totalCalories = ingredients.reduce((sum, ingredient) => sum + ingredient.totalCalories, 0);

    // Розрахунок калорійності на 100г
    const caloriesPer100g = totalWeight > 0 ? (totalCalories / totalWeight) * 100 : 0;

    // Розрахунок рекомендованої кількості порцій (мінімум 1 порція)
    const recommendedPortions = Math.max(1, Math.round(totalCalories / 500));

    // Розрахунок рекомендованого розміру однієї порції
    const recommendedPortionSize = totalWeight > 0 ? Math.round(totalWeight / recommendedPortions) : 0;

    // Оновлення елементів DOM
    totalWeightElement.textContent = `${Math.round(totalWeight)} г`;
    detailedTotalCaloriesElement.textContent = `${Math.round(totalCalories)} ккал`;
    caloriesPer100gElement.textContent = `${Math.round(caloriesPer100g)} ккал`;
    recommendedPortionsElement.textContent = recommendedPortions;
    recommendedPortionSizeElement.textContent = `${recommendedPortionSize} г`;

    // Оновлення лічильника інгредієнтів
    updateIngredientCounter();
}

// Оновлення лічильника інгредієнтів
function updateIngredientCounter() {
    const ingredientCounter = document.getElementById('ingredientCounter');
    const count = ingredients.length;

    // Просто показуємо кількість в дужках
    ingredientCounter.textContent = `(${count})`;

    // Оновлення стану кнопки скидання
    updateResetButtonState();
}

// Оновлення стану кнопки скидання
function updateResetButtonState() {
    if (ingredients.length === 0) {
        // Якщо список порожній, приховуємо кнопку
        resetButton.classList.add('hidden');
    } else {
        // Якщо в списку є інгредієнти, показуємо кнопку
        resetButton.classList.remove('hidden');
    }
}

// Обробник перемикання вкладок
predefinedTab.addEventListener('click', () => {
    predefinedTab.classList.add('bg-white', 'text-blue-600', 'shadow-sm', 'border', 'border-blue-200');
    predefinedTab.classList.remove('bg-gray-50', 'text-gray-600', 'border-transparent');
    customTab.classList.add('bg-gray-50', 'text-gray-600', 'border-transparent');
    customTab.classList.remove('bg-white', 'text-blue-600', 'shadow-sm', 'border', 'border-blue-200');
    predefinedSection.classList.remove('hidden');
    customSection.classList.add('hidden');
});

customTab.addEventListener('click', () => {
    customTab.classList.add('bg-white', 'text-blue-600', 'shadow-sm', 'border', 'border-blue-200');
    customTab.classList.remove('bg-gray-50', 'text-gray-600', 'border-transparent');
    predefinedTab.classList.add('bg-gray-50', 'text-gray-600', 'border-transparent');
    predefinedTab.classList.remove('bg-white', 'text-blue-600', 'shadow-sm', 'border', 'border-blue-200');
    customSection.classList.remove('hidden');
    predefinedSection.classList.add('hidden');
});

// Обробник форми
ingredientForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let name, weight, caloriesPer100g;

    // Перевіряємо, чи вибрано продукт зі списку
    if (foodSelect.value) {
        const selectedFood = JSON.parse(foodSelect.value);
        name = selectedFood.name;
        weight = parseFloat(weightInput.value);
        caloriesPer100g = selectedFood.calories;
    }
    // Або використовуємо власний інгредієнт
    else if (nameInput.value && customWeightInput.value && caloriesInput.value) {
        name = nameInput.value;
        weight = parseFloat(customWeightInput.value);
        caloriesPer100g = parseFloat(caloriesInput.value);
    } else {
        alert('Будь ласка, виберіть продукт зі списку або введіть власний інгредієнт');
        return;
    }

    // Створення нового інгредієнта
    const ingredient = {
        id: Date.now(), // Унікальний ідентифікатор
        name,
        weight,
        caloriesPer100g,
        totalCalories: (weight * caloriesPer100g) / 100
    };

    // Додавання інгредієнта до масиву (на початок масиву)
    ingredients.unshift(ingredient);

    // Оновлення інтерфейсу
    updateIngredientsList();
    updateDetailedStatistics();
    updateResetButtonState();

    // Збереження даних у Local Storage
    saveToLocalStorage();

    // Очищення форми
    ingredientForm.reset();
    foodSelect.innerHTML = '<option value="">Виберіть продукт</option>';
});

// Обробник кнопки скидання
resetButton.addEventListener('click', () => {
    // Показуємо діалогове вікно підтвердження
    const isConfirmed = window.confirm('Ви впевнені, що хочете скинути всі дані? Цю дію неможливо скасувати.');

    // Якщо користувач підтвердив
    if (isConfirmed) {
        // Очищення масиву інгредієнтів
        ingredients = [];

        // Оновлення інтерфейсу
        updateIngredientsList();
        updateDetailedStatistics();
        updateResetButtonState();

        // Видалення даних з Local Storage
        localStorage.removeItem(STORAGE_KEY);
    }
});

// Функція оновлення списку інгредієнтів
function updateIngredientsList() {
    ingredientsList.innerHTML = '';

    ingredients.forEach(ingredient => {
        const ingredientElement = document.createElement('div');
        ingredientElement.className = 'flex items-center justify-between p-4 bg-gray-50 rounded-lg';

        ingredientElement.innerHTML = `
            <div class="flex-1">
                <h3 class="font-medium text-gray-900">${ingredient.name}</h3>
                <p class="text-sm text-gray-500">
                    ${ingredient.weight}г × ${ingredient.caloriesPer100g} ккал/100г = 
                    ${Math.round(ingredient.totalCalories)} ккал
                </p>
            </div>
            <button 
                onclick="deleteIngredient(${ingredient.id})"
                class="ml-4 p-2 text-red-500 hover:text-red-600 transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </button>
        `;

        ingredientsList.appendChild(ingredientElement);
    });

    // Оновлюємо лічильник інгредієнтів
    updateIngredientCounter();
}

// Функція видалення інгредієнта
function deleteIngredient(id) {
    ingredients = ingredients.filter(ingredient => ingredient.id !== id);
    updateIngredientsList();
    updateDetailedStatistics();
    updateResetButtonState();

    // Збереження даних у Local Storage після видалення
    saveToLocalStorage();
}

// Функція відкриття модального вікна з інструкцією
function openInstructionsModal() {
    instructionsModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Запобігаємо прокрутці сторінки
}

// Функція закриття модального вікна з інструкцією
function closeInstructionsModal() {
    instructionsModal.classList.add('hidden');
    document.body.style.overflow = ''; // Відновлюємо прокрутку сторінки
}

// Обробник кліку по кнопці інструкції
instructionsButton.addEventListener('click', openInstructionsModal);

// Обробник кліку по кнопці закриття
closeInstructions.addEventListener('click', closeInstructionsModal);

// Закриття модального вікна при кліку поза ним
instructionsModal.addEventListener('click', (e) => {
    if (e.target === instructionsModal) {
        closeInstructionsModal();
    }
});

// Закриття модального вікна при натисканні клавіші Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !instructionsModal.classList.contains('hidden')) {
        closeInstructionsModal();
    }
});

// Завантаження даних при ініціалізації сторінки
document.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage();
    loadFoodsData();
}); 