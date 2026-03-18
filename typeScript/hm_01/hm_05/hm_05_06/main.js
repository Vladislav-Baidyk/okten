/*#hOL6126

– створити функцію, яка створює
ul з трьома елементами li. Текст li задати через аргумент всім однаковий */
var bigParagraf = function (text) {
    document.writeln("<ul>");
    for (var i = 0; i < 3; i++) {
        document.writeln("<li>".concat(text, "</li>"));
    }
    document.writeln("</ul>");
};
bigParagraf("text");
