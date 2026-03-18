/*
#2VaLt4vDczH

є сторінка, на якій є блок, в кому знаходиться цифра.
 Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
 */

let count:string | number = localStorage.getItem('number-increase') || 0;
count = Number(count) + 1;
localStorage.setItem('number-increase',count.toString());
let div:HTMLDivElement = document.createElement('div');
div.innerText = String(count);
document.body.appendChild(div);