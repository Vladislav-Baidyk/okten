/*#0Kxco1edSN

– створити функцію, яка створює ul з трьома елементами li.
Текст li задати через аргумент всім однаковий
. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) */
var paragraf = function (text, num) {
    document.writeln("<ul>");
    for (var i = 0; i < num; i++) {
        document.writeln("<li>".concat(text, "</li>"));
    }
    document.writeln("</ul>");
};
paragraf("text", 4);
