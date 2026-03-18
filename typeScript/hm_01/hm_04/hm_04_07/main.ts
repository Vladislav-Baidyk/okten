/*– створити функцію, яка створює ul з  елементами li.
 Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, 
який є числовим (тут використовувати цикл) та виводить його через document.write */
function paragraf(num:number,text:string){
   document.write(`<ul>`);
   let i:number =0;
   while(i<num){
    document.write(`<li>${text}</li>`);
    i++;
   }
   document.write(`</ul>`);
}
paragraf(20,'text');