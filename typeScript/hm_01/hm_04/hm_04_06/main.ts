/*
#hOL6126

– створити функцію, яка створює ul з
 трьома елементами li та виводить його через document.write. 
 Текст li задати через аргумент всім однаковий
 */
function navigation(text:string){
    document.write(`
        <ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
        </ul>`)
}
console.log(navigation("text"))