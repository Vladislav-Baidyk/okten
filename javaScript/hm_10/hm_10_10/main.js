/*
***PAGINATION

зробити масив на 100 об’єктів та дві кнопки prev next

при завантаженні сторінки з’являються перші 10 об’єктів.

При натисканні next виводяться наступні 10 об’єктів

При натисканні prev виводяться попередні 10 об’єктів

*/

let add = 10;
let current = 0;
let nextId = 10;
let array = []
let div = document.createElement('div');
let createArray = () => {
    for(let i = 0; i < 100; i++){
        array.push({id:i,name:'Vladyslav',surname:'Baidyk'});
    }
}
createArray();
let prev = document.createElement('button');
let next = document.createElement('button');
document.body.append(prev,next,div);

next.onclick = function(){
    current+=add;
    nextId+= add;
    div.innerText = '';
    arrayShow();
}

prev.onclick = function(){
    current-=add;
    nextId-= add;
    div.innerText = '';
    arrayShow();
}

let arrayShow = () => {
    array.slice(current,nextId).map((object) => {
        let p = document.createElement('p');
        p.innerText = `${object.id} + ${object.name}`;
        div.append(p);
    })
}

arrayShow();
console.log(current,nextId);