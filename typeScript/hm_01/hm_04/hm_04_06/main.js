/*
#hOL6126

– створити функцію, яка створює ul з
 трьома елементами li та виводить його через document.write.
 Текст li задати через аргумент всім однаковий
 */
function navigation(text) {
    document.write("\n        <ul>\n        <li>".concat(text, "</li>\n        <li>").concat(text, "</li>\n        <li>").concat(text, "</li>\n        </ul>"));
}
console.log(navigation("text"));
