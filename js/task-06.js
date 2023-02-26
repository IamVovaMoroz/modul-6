// Напиши скрипт, который при потере фокуса на инпуте (событие blur), 
// проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, 
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, 
// которые мы уже добавили в исходные файлы задания.


const input = document.querySelector('[id="validation-input"]');
console.log(input)

// Получили доступ к длине строки допустимой 
const maxLength =  Number(input.dataset.length);
console.log(maxLength)

// Если полученное значение инпуте(event.currentTarget.value.length) меньше или равно maxLength -valid, если нет то через replace заменяем на invalid

input.addEventListener('blur', (event)=>{
    input.classList.add("invalid")
    event.currentTarget.value.length === maxLength? input.classList.replace("invalid", "valid") : input.classList.replace("valid", "invalid")
});






// getText.addEventListener('blur', (event) =>{
//     function setClass (a, b) {
//         if(getText.classList.contains(a)) {
//         } else if(getText.classList.contains(b)) {
//             getText.classList.replace(b, a);
//             } else {
//                 getText.classList.add(a)
//             };
//     }
//     if(event.currentTarget.value.length == Number(getText.dataset.length)) {
//         setClass ('.valid', '.invalid');
//             getText.style.borderColor = "#4CAF50";
//     } else {
//         setClass ('.invalid', '.valid');
//             getText.style.borderColor = "#F44336";
//     }
// });




