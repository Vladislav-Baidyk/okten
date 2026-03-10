/*
Створити інпут та кнопку. При натисканні на 
кнопку текст з інпуту має додаватися як новий пункт li у список ul.
 */
let input = document.createElement('input');
let button  = document.createElement('button');
let ul = document.createElement('ul');
document.body.append(input,button,ul);
button.onclick= function() {
    let li = document.createElement('li');
    li.innerText = input.value;
    ul.append(li);
    input.value = '';
}