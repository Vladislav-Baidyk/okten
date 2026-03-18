/*
#59g0IsA

– створити функцію, яка створює параграф з текстом та виводить
його через document.write. Текст задати через аргумент
*/
function paragraf(test) {
    document.write("<h1>".concat(test, " </h1>"));
}
console.log(paragraf("szymon"));
