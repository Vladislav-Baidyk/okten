/*
– Користувач вводить або має два числа.

Потрібно знайти та вивести максимальне число з тих двох .

Також потрібно врахувати, коли введені рівні числа.

 
*/

let a:number = Number(prompt("Write the first number" ));
let b:number = Number(prompt("Write the second number"));

let check = a > b ? 
    a + ' is a bigger number' 
    : a == b 
        ? a + " equals " + b
        : b  + ' is a bigger number';
console.log(check);
