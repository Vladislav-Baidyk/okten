/*#hOL6126

– створити функцію, яка створює 
ul з трьома елементами li. Текст li задати через аргумент всім однаковий */

let bigParagraf = (text) => {
    document.writeln(`<ul>`)
    for(let i = 0; i < 3;i++){
        document.writeln(`<li>${text}</li>`);
    }
    document.writeln(`</ul>`);
}
bigParagraf("text");