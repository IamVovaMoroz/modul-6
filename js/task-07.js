// Напиши скрипт, который реагирует на изменение значения input#font-size-control 
// (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size.
//  В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>


// Получить доступ к инпут

const input = document.querySelector('[id="font-size-control"]')

// Получить доступ к спан

const span = document.querySelector('[id="text"]')
// const span = document.querySelector("#text")

input.addEventListener("input", onInputChange);


function onInputChange(event) {
  
    console.log( span.style.fontSize )
   
    span.style.fontSize = event.
    
    currentTarget.value + "px";
    
   console.log(event.currentTarget)
//    console.log(event.currentTarget.max = 120)
}
