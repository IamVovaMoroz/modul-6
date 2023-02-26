// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.



// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект,
//  где имя поля будет именем свойства, а значение поля - значением свойства. 
//  Для доступа к элементам формы используй свойство elements.

// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, 
// что все поля должны быть заполнены.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

// Получили доступ к form
const formEl = document.querySelector(".login-form");


// Отправка формы через submit
formEl.addEventListener("submit", submitHundler);

// Функция для собирания 
function submitHundler(event) {
// Cтраница не перезагружается - event.preventDefault()
    event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;



  


  // console.log(email.value, password.value);

//   Если значение email или password не заполнили выдаёт alert
  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені!");
  }

//   Обьект с данными пользователя
  const userDetails = { email: email.value, Password: password.value };

  console.log(userDetails);
//   Сброс через reset
  event.currentTarget.reset();
}


// // Получил name инпута куда вводится email
// const emailName = event.currentTarget.elements.email.name;
// // Получили значение введенного email
// const emailValue = event.currentTarget.elements.email.value;
// // Получили значение введенного  password
// const passwordValue = event.currentTarget.elements.password.value;
// // Получил name инпута куда вводится password
// const passwordName = event.currentTarget.elements.password.name;







// ЧЕРНОВИК


// // Получили доступ к form
// const formRef = document.querySelector(".login-form")

// // Получили доступ к inputEmail
// const inputEmailEl = document.querySelector('[name="email"]')

// // Получили доступ к PasswordEmail
// const inputPasswordEl = document.querySelector('[name="password"]')




// // Функция получения inputEmailEl
// inputEmailEl.addEventListener("change", onInputEmailChange)
// function onInputEmailChange(even){
//     //  if(even.currentTarget.value = " "){
//     //     alert("Все поля должны быть заполнены")
//     // }
// console.log("email:", even.currentTarget.value)
// }


// // // Функция получения inputEmailEl
// inputPasswordEl.addEventListener("change", onInputPasswordChange)
// function onInputPasswordChange(even){
//     // if(even.currentTarget.value = " "){
//     //     alert("Все поля должны быть заполнены")
//     // }
// console.log("password:", even.currentTarget.value)
// }


// // Отправка формы через submit
// formRef.addEventListener("submit", onFormSubmit)

// // Функция для собирания масива
// function onFormSubmit (event) {
//     // страница не перезагружается - event.preventDefault()
//     event.preventDefault();

//     const formRefData = new FormData(event.currentTarget)
  
//     formRefData.forEach((value, name)=>{

// if(value === "" || name === ""){ return alert("Всі поля повинні бути заповнені!")}
// // Получил name инпута куда вводится email
// const emailName = event.currentTarget.elements.email.name;
// // Получили значение введенного email
// const emailValue = event.currentTarget.elements.email.value;
// // Получили значение введенного  password
// const passwordValue = event.currentTarget.elements.password.value;
// // Получил name инпута куда вводится password
// const passwordName = event.currentTarget.elements.password.name;


// console.log(emailName)
// console.log(passwordName)
//         // if(event.currentTarget.elements.email.value  == " "){alert(
//         //     "нужно ввести email"
//         // )}
//         // Значение полученное почты введеного в инпут
// console.log(event.currentTarget.elements.password.name)
// console.log(passwordValue)
// console.log(event.currentTarget.elements.email.name)
// console.log(emailValue)
//         // console.log(event.currentTarget.elements.email.value )
//         //  // Значение полученное пароля введеного в инпут
//         // console.log(event.currentTarget.elements.password.value )
//         // formRefData.name = name;
//         // formRefData.password = password;


   
        
//     }) 


// }


// const form = document.querySelector(".register-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const {
//     elements: { username, password }
//   } = event.currentTarget;
//   console.log(username.value, password.value);
// });