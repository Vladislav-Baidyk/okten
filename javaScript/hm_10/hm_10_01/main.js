/*
#sH8c4er

– Створити довільний елемент з id = text та створити кнопку.
Використовуючи JavaScript, зробіть так, щоб при натисканні на
 кнопку зникав елемент з id=”text”.
 */

let div = document.createElement("div");
div.id = "text";
div.innerText = "Hello that's me";
document.body.appendChild(div);
let buttonDis = document.createElement("button");
buttonDis.innerText = "Disappear";
buttonDis.onclick = () => {
    div.style.display = "none";
}
document.body.appendChild(buttonDis);