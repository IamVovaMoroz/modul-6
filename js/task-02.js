// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// 2 ВАРИАНТ ЧЕРЕЗ MAP

// Получил доступ (ссылку) на ul по ID
const navEl = document.getElementById("ingredients");

// Через map создаю новый массив  с добавлением нужных параметров
const elements = ingredients.map(ingredient =>{
  const navItemEl = document.createElement("li");
  navItemEl.classList.add("item");
  navItemEl.textContent = ingredient;

  return navItemEl;
} );

console.log(elements);

// Добавил все обьекты массива в DOM
navEl.append(...elements);










// 1 ВАРИАНТ OLD SCHOOL

// Получил доступ (ссылку) на ul по ID
// const navEl = document.getElementById("ingredients");

// Создал новый массив для добавления 
// const elements = [];

// // Перебор массива с добавлением нужных параметров в li и добавлением в elements
// for (let i = 0; i < ingredients.length; i+=1){
// const option = ingredients[i];



// const navItemEl = document.createElement("li");
// navItemEl.classList.add("item");
// navItemEl.textContent = ingredients[i];

// elements.push(navItemEl);
// }

// console.log(elements);

// // Добавил все обьекты массива в DOM
// navEl.append(...elements)




