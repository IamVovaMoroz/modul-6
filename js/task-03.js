// Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.

// <ul class="gallery"></ul>

// Используй массив объектов images для создания элементов <img> вложенных в <li>. 
// Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


// 1 способ

const listEl = document.querySelector(".gallery");
const array = images.map(
  (element) =>`<li class="js-item"><img class="js-img" src = "${element.url}" alt = "${element.alt}"></li>` ).join("");
 listEl.insertAdjacentHTML("beforeend", array);
// console.log(listEl);
console.log(array);


const categoriesItems = listEl.querySelectorAll("img");
console.log(categoriesItems);









// 2 способ Получили доступ к ul

// const listEl = document.querySelector(".gallery");

// const elements = images.map(element => {

// const galleryItemEl = document.createElement("li");


// const galleryImgEl = document.createElement("img");

// galleryImgEl.src = element.url;

// console.log(galleryImgEl)
// galleryImgEl.alt = element.alt;

//  galleryItemEl.appendChild(galleryImgEl);


//  return listEl.appendChild(galleryItemEl);
// });

// console.log(elements)











// // Добавление ul - li - img

// // Создали li
// const galleryItemEl = document.createElement("li");
// galleryItemEl.classList.add("gallary-item");
// // Создали img
// const galleryImgEl = document.createElement("img");
// galleryImgEl.src = "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
// galleryImgEl.alt = "White and Black Long Fur Cat";
// // Прикрепили img к li
// galleryItemEl.appendChild(galleryImgEl);

// // Получили доступ к ul

// const listEl = document.querySelector(".gallery");

// // Добавили к ul - li - img
// listEl.appendChild(galleryItemEl);


// console.log(galleryItemEl);
// console.log(galleryImgEl);
// console.log(listEl);
