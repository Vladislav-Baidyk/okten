/*
Створити блок 100х100 пікселів. 
При кожному натисканні на нього його колір фону має ставати випадкови
 */
let div = document.createElement('div');
div.style.width = '100px';
div.style.height = '100px';
div.style.background = 'green';
div.onclick = function (ev) {
    let r = ev.clientX;
    let  g = ev.clientY;
    let b = ev.clientX+10;
    this.style.background = `rgb(${r},${g},${b})`;
}
document.body.append(div);