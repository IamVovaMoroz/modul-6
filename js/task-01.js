// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>)
//  и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categoriesList = document.getElementById("categories");

const categoriesItems = categoriesList.querySelectorAll("li.item");

console.log(`Number of categories: ${categoriesItems.length}`);

for(const item of categoriesItems) {
    const categoriesName = item.querySelector("h2").textContent;
    const categoriesElements = item.querySelectorAll("li").length;
    console.log(`Category: ${categoriesName}`);
    console.log(`Elements: ${categoriesElements}`);
}








const targetBtn = document.querySelector(".js-target-btn");
const addListenerBtn = document.querySelector(".js-add-listener");
const removeListenerBtn = document.querySelector(".js-remove-listener");
// targetBtn.addEventListener("click", () => {console.log("click")});


// 1 вариант без снимания слушателя кнопки
// addListenerBtn.addEventListener("click", ()=>{
//     console.log("вешаем слушателя события")
//     targetBtn.addEventListener("click", () => {console.log("клик по кнопке вызова")});
// } )

// 2 вариант с сниманием слушателя кнопки. Параметр(ссылка во внешней функции.)

addListenerBtn.addEventListener("click", ()=>{
    console.log("вешаем слушателя события")
    targetBtn.addEventListener("click", onTargetBthClick);
} )

removeListenerBtn.addEventListener("click", ()=>{
    console.log("снимаем слушателя события")
    targetBtn.removeEventListener("click", onTargetBthClick);

})

function onTargetBthClick(){console.log("клик по целевой кнопке")}



// targetBtn.addEventListener("click", handletargetBtnClick);

// function handletargetBtnClick(){console.log("click")}

// console.log(`Category: ${titlesAll[0].textContent}`)

// const navEl = document.getElementById("categories");
// const navEllist = document.querySelector("ul");
// navEllist.classList.add("list")
// const navElItem = document.querySelectorAll("li");
// // navElItem.classList.add("item")
// const titlesAll = document.querySelectorAll("h2")

// // const block1 = navEllist.document.querySelector("list");

// // console.log(`Number of categories: ${titlesAll.length}`)
// // console.log(`Category: ${titlesAll[0].textContent}`)

// // console.log(`Category: ${titlesAll[1].textContent}`)

// // console.log(`Category: ${titlesAll[2].textContent}`)
// console.log(categoriesItems)
// console.log(categoriesList)
// // console.log(navEllist)
// console.log(navElItem)
// console.log(titlesAll)