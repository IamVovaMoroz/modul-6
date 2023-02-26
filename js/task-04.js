
// Получили доступ к span
const value = document.getElementById("value");
// const value = document.querySelector('[id="value"]')

let counterValue = 0;
// Получили доступ к кнопкам decrement
const decrementBtn =  document.querySelector('[data-action="decrement"]');
// Назначили слушателя decrement
decrementBtn.addEventListener("click", () => {
    // console.log("кликнули декримент");
    
    counterValue -= 1;
    value.textContent = counterValue;

    
    console.log(counterValue)

  
}) 
// Получили доступ к кнопкам increment
const incrementBtn = document.querySelector('[data-action="increment"]')
// Назначили слушателя decrement increment
incrementBtn.addEventListener("click", () => {
    // console.log("кликнули икримент")
// Увеличиваем счетчик на 1
    counterValue += 1;
// Присваиваем значению спана значение новое counterValue
    value.textContent = counterValue;

    console.log(counterValue)
})


/* <button type="button" data-type="data-attribute">+1</button> */





 


// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

// Получили доступ к кнопкам и спану


// console.log(decrementBtn)

// console.log(incrementBtn)


// const value = document.querySelector('[id="value"]')
// console.log(value)

// Создали переменную counterValue где хранится значение


// console.log(counterValue)

// Вешаем слушателя на кнопки












// const targetBtn = document.querySelector(".js-target-btn");
// const addListenerBtn = document.querySelector(".js-add-listener");
// const removeListenerBtn = document.querySelector(".js-remove-listener");
// // targetBtn.addEventListener("click", () => {console.log("click")});


// // 1 вариант без снимания слушателя кнопки
// // addListenerBtn.addEventListener("click", ()=>{
// //     console.log("вешаем слушателя события")
// //     targetBtn.addEventListener("click", () => {console.log("клик по кнопке вызова")});
// // } )

// // 2 вариант с сниманием слушателя кнопки. Параметр(ссылка во внешней функции.)

// addListenerBtn.addEventListener("click", ()=>{
//     console.log("вешаем слушателя события")
//     targetBtn.addEventListener("click", onTargetBthClick);
// } )

// removeListenerBtn.addEventListener("click", ()=>{
//     console.log("снимаем слушателя события")
//     targetBtn.removeEventListener("click", onTargetBthClick);

// })

// function onTargetBthClick(){console.log("клик по целевой кнопке")}