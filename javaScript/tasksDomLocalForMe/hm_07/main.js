/*
Створити два інпути для чисел і 4 кнопки (+, -, *, /). 
Результат операції виводити в окремий блок.
*/

/*RESULT */
let result = document.createElement('input');
result.disabled = true;

let storageResult = localStorage.getItem('storageResult') || "[]";
let saveResult = () => {
    let arrayJson = JSON.parse(storageResult);
    let resultJson = result.value;
    arrayJson.push(resultJson);
    localStorage.setItem('storageResult',JSON.stringify(arrayJson));
}


let input1 = document.createElement('input');
input1.type = 'number';
let input2 = document.createElement('input');
input2.type = 'number';
/*buttons */
let add = document.createElement('button');
let minus = document.createElement('button');
let multiply = document.createElement('button');
let divide = document.createElement('button');
add.innerText = 'add';
minus.innerText = 'minus';
multiply.innerText = 'multiply';
divide.innerText = 'divide';
/*function add */
add.onclick = function(){
    let a = Number(input1.value);
    let b = Number(input2.value);
    result.value = a + b;
    saveResult();
    console.log(localStorage.getItem('storageResult'));
}
/*function minus */
minus.onclick = function(){
    let a = Number(input1.value);
    let b = Number(input2.value);
    result.value = a - b;
    saveResult();
    console.log(localStorage.getItem('storageResult'));
}
/*mulitply */
multiply.onclick = function(){
    let a = Number(input1.value);
    let b = Number(input2.value);
    result.value = a * b;
    saveResult();
    console.log(localStorage.getItem('storageResult'));
}
/*divide */
divide.onclick = function(){
    let a = Number(input1.value);
    let b = Number(input2.value);
    result.value = a / b;
    saveResult();
    console.log(localStorage.getItem('storageResult'));
}

document.body.append(input1,input2,add,minus,multiply,divide,result);