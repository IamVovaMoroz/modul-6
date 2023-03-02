/**
 * ЗАДАЧА 8
 * Створи перелік справ.
 * Є  інпут, в який вноситься зміст задачі.
 * При натисканні на кнопку "Додати" задача додається в список #list.
 * Поруч з кожною задачею знаходится кнопка "Видалити", щоб можна було
 * видалити цю задачу із списку.
 * Список з задачами має бути доступним післе перезавантаження сторінки.
 */
// const formRef = document.querySelector("#task-form")
// console.log(formRef)

// const  taskListRef = document.querySelector("#task-list")

// console.log(taskListRef)

// formRef.addEventListener("submit", onFormClick);

// function onFormClick(event){
// event.preventDefault();
// const inputValue = event.target.elements.taskName.value;
// console.log(inputValue)

// const markup = `<li id="${Date.now()}"><p>${inputValue}</p><button>Видалити</button></li> `
// taskListRef.insertAdjacentHTML("afterbegin", markup)

// console.log(Date.now())

// }
// taskListRef.addEventListener("click", ontaskListClick)

// function ontaskListClick (event){
//   if(event.target.nodeName !== "BUTTON"){
//     return;
//       }
//       event.target.closest("li").remove()
// }

/*
Задача 10
Дан список людей. Сделай возможность сортировки списка по имени и по фамилии.
*/

// const ListRef = document.querySelector(".people");

// console.log(ListRef)

// const itemsRef = document.querySelectorAll(".person")

// console.log(itemsRef)

// const sortByNameButtonRef = document.querySelector("#sortByNameButton");
// console.log(sortByNameButtonRef)

// sortByNameButtonRef.addEventListener("click", onSortByName)

// const sortByLastNameButtonRef = document.querySelector("#sortByLastNameButton");
// console.log(sortByLastNameButtonRef)

// sortByLastNameButtonRef.addEventListener("click", onSortByLastName)

// function onSortByName (event){
// // itemsRef.textContent.split(" ")[0];
// const newsortByNameItem = [...itemsRef].sort((a, b) => {
//   console.log(a.textContent.split(" ")[0])
//    return a.textContent.split(" ")[0].localeCompare(b.textContent.split(" ")[0])  });
//    console.log(newsortByNameItem)
//    ListRef.innerHTML = "";
//    ListRef.append(...newsortByNameItem)

// }

// function onSortByLastName (event){
//   // console.log(itemsRef.textContent.split(" ")[1])
//   const newsortByLastNameItem = [...itemsRef].sort((a, b) => {
//     return a.textContent.split(" ")[1].localeCompare(b.textContent.split(" ")[1])  });

//     ListRef.append(...newsortByLastNameItem)}
//

/*
Задача 8
При кліку на кожню із кнопок додаються значення з data-атрибутів.
При натисканні на кнопку "Вивести результат" виводиться сума значень, а также статистика с
информацией о том, какая кнопка была нажата сколько раз.
*/
const object = {}
const divStatRef = document.querySelector('.statList')

let total = 0

divStatRef.addEventListener('click', onDivStatClick)

function onDivStatClick (event) {
  if (event.target.nodeName !== 'BUTTON') {
    return
  }
  //  console.log(event.target.dataset.number)
  total += Number(event.target.dataset.number)

  if (object[event.target.textContent]) {
    object[event.target.textContent] += 1
  } else {
    object[event.target.textContent] = 1
  }
}

const divResultRef = document.querySelector('#resultSection')

const showResultButton = document.querySelector('#resultButton')

showResultButton.addEventListener('click', onDivResultClick)

function onDivResultClick () {
  // divResultRef.textContent = total
  console.log(object)
  let message = ''
  const keys = Object.keys(object)
  for (const key of keys) {
    message = message.concat(` ${key} Clicked ${object[key]} \n`)
  }
  // console.log(message)
  divResultRef.textContent = total + message
}
