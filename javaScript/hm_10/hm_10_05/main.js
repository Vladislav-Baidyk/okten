/*
Є сторінка index.html (назва довільна), 
при відвідуванні якої в локальне сховище, 
в масив sessionsList зберігається інформація
 про дату та час відвідування сторінки. Є 
  сторінка sessionsListPage.html (назва довільна), 
  при відвідуванні якої потрібно відмалювати всю
  інформацію про відвідування сторінки index.html.
   Інфу НЕ виводити в консоль, а малювати в DOM
 */
let items = JSON.parse(localStorage.getItem('sessions-list'));
for(let item of items){
    let p =document.createElement('p');
    p.innerText = item.toString();
    document.body.append(p);
}
