
// Напиши скрипт, который изменяет цвета фона элемента <body>
//  через инлайн стиль при клике на button.change-color
//   и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерации случайного цвета используй функцию getRandomHexColor.


// получили ссылку на body
const bodyRef = document.querySelector('body')
// получили ссылку на кнопку
const changeColorBtn = document.querySelector(".change-color")
// повесили слушателя на кнопку
changeColorBtn.addEventListener("click", ()=>{

// Создали переменную для цвета  
let currentColor =  getRandomHexColor()

  // присвоение цвета backgroundColor по клику
  bodyRef.style.backgroundColor = currentColor;

// получили ссылку на span
const spanRef = document.querySelector('.color')

// Изменение текста span
spanRef.textContent = currentColor;
});

// Функция изменения цвета

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
















