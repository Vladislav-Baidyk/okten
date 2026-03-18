/*
***PAGINATION

зробити масив на 100 об’єктів та дві кнопки prev next

при завантаженні сторінки з’являються перші 10 об’єктів.

При натисканні next виводяться наступні 10 об’єктів

При натисканні prev виводяться попередні 10 об’єктів

*/
var add = 10;
var current = 0;
var nextId = 10;
var array = [];
var div = document.createElement('div');
var createArray = function () {
    for (var i = 0; i < 100; i++) {
        array.push({ id: i, name: 'Vladyslav', surname: 'Baidyk' });
    }
};
createArray();
var prev = document.createElement('button');
var next = document.createElement('button');
document.body.append(prev, next, div);
next.onclick = function () {
    current += add;
    nextId += add;
    div.innerText = '';
    arrayShow();
};
prev.onclick = function () {
    current -= add;
    nextId -= add;
    div.innerText = '';
    arrayShow();
};
var arrayShow = function () {
    array.slice(current, nextId).map(function (object) {
        var p = document.createElement('p');
        p.innerText = "".concat(object.id, " + ").concat(object.name);
        div.append(p);
    });
};
arrayShow();
console.log(current, nextId);
