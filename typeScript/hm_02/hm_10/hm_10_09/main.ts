/*
 

#bq1zkx7WP

*** (подібне було вище, але…будьте уважні в другій частині) 
створити сторінку з довільним блоком, в середині якого є значення “100грн”

при перезавантаженні сторінки до значення додається по 10грн,
 але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.

 При перезавантаженні, яке відбулось раніше ніж минуло 
 10 секунд, нічого не відбувається
  */
let infoJson:number = localStorage.getItem('sto') ? JSON.parse(localStorage.getItem('sto')) : 100;

const now:number = Date.now();
const previousTime:string = localStorage.getItem('lastReloadTime');
const div:HTMLDivElement = document.createElement('div');

if (previousTime) {
    const diffInSeconds:number = (now - parseInt(previousTime)) / 1000;
    console.log(`Минуло секунд: ${diffInSeconds.toFixed(1)}`);

    if (diffInSeconds > 10) {
        infoJson += 10; 
        localStorage.setItem('lastReloadTime', now.toString());
    }
} else {
    localStorage.setItem('lastReloadTime', now.toString());
}

localStorage.setItem('sto', JSON.stringify(infoJson));

div.innerText = `${infoJson}грн`;
document.body.append(div);