// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. Если инпут пустой,
//  в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>


// Получили доступ к input
const input = document.querySelector('[id="name-input"]');
console.log(input)

// Получили доступ к span
const spanChange = document.querySelector('[id="name-output"]');
console.log(spanChange)


// Вешаем слушателя на input 
input.addEventListener('input', onInputChange);
// Вешаем слушателя на span
spanChange.addEventListener('input', onInputChange);

function onInputChange(event){
    

    spanChange.textContent = event.currentTarget.value ? event.currentTarget.value:  'Anonymous'
    console.log(event.currentTarget.value)
    
}






