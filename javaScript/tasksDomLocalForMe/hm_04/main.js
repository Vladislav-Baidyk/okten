/**
Створити дві кнопки "+" 
 та "-" і p між ними з цифрою 0. Кнопки мають збільшувати або зменшувати число.
 */
let incr = document.createElement('button');
let p = document.createElement('p');
let decr = document.createElement('button');

let count = Number(0);
p.innerHTML = count;
incr.onclick = function(){
    count +=1;
    p.innerText= count;
}
decr.onclick = function(){
    count -=1;
    p.innerText= count;
}
document.body.append(incr,p,decr);
