/*#gEFoxMMO

– створити функцію,
 яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список */
function primitives(num, text, booleans) {
    document.writeln("<ul>");
    document.writeln("<li>The number is  ".concat(num, "</li>"));
    document.writeln("<li>The text is ".concat(text, "</li>"));
    document.writeln("<li>The boolean is ".concat(booleans, "</li>"));
}
primitives(20, "hello", false);
