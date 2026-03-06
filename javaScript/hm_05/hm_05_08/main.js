/*#gEFoxMMO

– створити функцію, 
яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список */
let elements = (num,text,booleans) => {
    document.writeln(`<ul>`);
    document.writeln(`<li>The number is  ${num}</li>`);
    document.writeln(`<li>The text is ${text}</li>`);
    document.writeln(`<li>The boolean is ${booleans}</li>`);
}
elements(22,"my name is vlad" , false);
 
