// Зберігання інгредієнтів
let ingredients = [];

// Ключ для Local Storage
const STORAGE_KEY = 'calorieCalculatorIngredients';

// Отримання елементів DOM
const ingredientForm = document.getElementById('ingredientForm');
const ingredientsList = document.getElementById('ingredientsList');
const totalCaloriesElement = document.getElementById('totalCalories');
const resetButton = document.getElementById('resetButton');

// Завантаження даних з Local Storage при ініціалізації
function loadFromLocalStorage() {
    const savedIngredients = localStorage.getItem(STORAGE_KEY);
    if (savedIngredients) {
        ingredients = JSON.parse(savedIngredients);
        updateIngredientsList();
        updateTotalCalories();
    }
    // Оновлюємо стан кнопки скидання після завантаження даних
    updateResetButtonState();
}

// Збереження даних у Local Storage
function saveToLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ingredients));
}

// Оновлення стану кнопки скидання
function updateResetButtonState() {
    if (ingredients.length === 0) {
        // Якщо список порожній, відключаємо кнопку
        resetButton.disabled = true;
        resetButton.classList.add('opacity-50', 'cursor-not-allowed');
        resetButton.classList.remove('hover:bg-gray-200');
    } else {
        // Якщо в списку є інгредієнти, активуємо кнопку
        resetButton.disabled = false;
        resetButton.classList.remove('opacity-50', 'cursor-not-allowed');
        resetButton.classList.add('hover:bg-gray-200');
    }
}

// Обробник форми
ingredientForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Отримання значень з форми
    const name = document.getElementById('name').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const caloriesPer100g = parseFloat(document.getElementById('calories').value);

    // Створення нового інгредієнта
    const ingredient = {
        id: Date.now(), // Унікальний ідентифікатор
        name,
        weight,
        caloriesPer100g,
        totalCalories: (weight * caloriesPer100g) / 100
    };

    // Додавання інгредієнта до масиву
    ingredients.push(ingredient);

    // Оновлення інтерфейсу
    updateIngredientsList();
    updateTotalCalories();
    updateResetButtonState();

    // Збереження даних у Local Storage
    saveToLocalStorage();

    // Очищення форми
    ingredientForm.reset();
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
        updateTotalCalories();
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
}

// Функція видалення інгредієнта
function deleteIngredient(id) {
    ingredients = ingredients.filter(ingredient => ingredient.id !== id);
    updateIngredientsList();
    updateTotalCalories();
    updateResetButtonState();

    // Збереження даних у Local Storage після видалення
    saveToLocalStorage();
}

// Функція оновлення загальної калорійності
function updateTotalCalories() {
    const total = ingredients.reduce((sum, ingredient) => sum + ingredient.totalCalories, 0);
    totalCaloriesElement.textContent = `${Math.round(total)} ккал`;
}

// Завантаження даних при ініціалізації сторінки
document.addEventListener('DOMContentLoaded', loadFromLocalStorage); 