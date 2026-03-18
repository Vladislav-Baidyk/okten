/*
 

#bq1zkx7WP

*** (подібне було вище, але…будьте уважні в другій частині)
створити сторінку з довільним блоком, в середині якого є значення “100грн”

при перезавантаженні сторінки до значення додається по 10грн,
 але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.

 При перезавантаженні, яке відбулось раніше ніж минуло
 10 секунд, нічого не відбувається
  */
var infoJson = localStorage.getItem('sto') ? JSON.parse(localStorage.getItem('sto')) : 100;
var now = Date.now();
var previousTime = localStorage.getItem('lastReloadTime');
var div = document.createElement('div');
if (previousTime) {
    var diffInSeconds = (now - parseInt(previousTime)) / 1000;
    console.log("\u041C\u0438\u043D\u0443\u043B\u043E \u0441\u0435\u043A\u0443\u043D\u0434: ".concat(diffInSeconds.toFixed(1)));
    if (diffInSeconds > 10) {
        infoJson += 10;
        localStorage.setItem('lastReloadTime', now.toString());
    }
}
else {
    localStorage.setItem('lastReloadTime', now.toString());
}
localStorage.setItem('sto', JSON.stringify(infoJson));
div.innerText = "".concat(infoJson, "\u0433\u0440\u043D");
document.body.append(div);
