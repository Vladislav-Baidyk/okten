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
var items = JSON.parse(localStorage.getItem('sessions-list'));
for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
    var item = items_1[_i];
    var p = document.createElement('p');
    p.innerText = item.toString();
    document.body.append(p);
}
