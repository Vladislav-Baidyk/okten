/*#gEFoxMMO

– створити функцію,
 яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список */
function primitives(num:number,text:string,booleans:boolean){
    document.writeln(`<ul>`);
    document.writeln(`<li>The number is  ${num}</li>`);
    document.writeln(`<li>The text is ${text}</li>`);
    document.writeln(`<li>The boolean is ${booleans}</li>`);
}
primitives(20,"hello",false);