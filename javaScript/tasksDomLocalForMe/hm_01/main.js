/*
Створити заголовок h1 та кнопку.
 При натисканні на кнопку текст заголовка має змінюватися 
  «Привіт» на «Бувай» і навпаки.
 */
let h1 = document.createElement('h1');
let button = document.createElement('button');
let check = true;
button.onclick = () => {
    h1.innerText = check? 'Привіт': 'Бувай';
    check = !check;
}
document.body.append(h1,button);