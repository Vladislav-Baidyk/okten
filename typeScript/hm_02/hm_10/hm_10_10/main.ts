/*
***PAGINATION

зробити масив на 100 об’єктів та дві кнопки prev next

при завантаженні сторінки з’являються перші 10 об’єктів.

При натисканні next виводяться наступні 10 об’єктів

При натисканні prev виводяться попередні 10 об’єктів

*/

let add:number = 10;
let current:number = 0;
let nextId:number = 10;
let array:any[] = []
let div:HTMLDivElement = document.createElement('div');
let createArray:()=> void = () => {
    for(let i:number = 0; i < 100; i++){
        array.push({id:i,name:'Vladyslav',surname:'Baidyk'});
    }
}
createArray();
let prev:HTMLButtonElement = document.createElement('button');
let next:HTMLButtonElement = document.createElement('button');
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

let arrayShow:() => void = () => {
    array.slice(current,nextId).map((object) => {
        let p:HTMLParagraphElement = document.createElement('p');
        p.innerText = `${object.id} + ${object.name}`;
        div.append(p);
    })
}

arrayShow();
console.log(current,nextId);