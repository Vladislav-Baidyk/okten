/*
Створити два інпути для пароля та кнопку.
 При натисканні перевірити, чи однакові паролі.
  Вивести повідомлення «Успіх» або «Помилка».
 */
let firstPass = document.createElement('input');
let secondPass = document.createElement('input');
firstPass.type = 'password';
secondPass.type = 'password';
let button = document.createElement('button');
let p = document.createElement('p');
button.onclick = function(){
    if(firstPass.value === secondPass.value){
        p.innerText = 'The passwords are the same';
        p.style.color = 'green';
    }
    else{
        p.innerText = 'The passwords are not the same';
        p.style.color = 'red';
    }
}
document.body.append(firstPass,secondPass,button,p);