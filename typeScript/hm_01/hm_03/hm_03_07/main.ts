/*
#4WrHwFTEop0

є масив

let users = [

    {name: ‘vasya’, age: 31, status: false},

    {name: ‘petya’, age: 30, status: true},

    {name: ‘kolya’, age: 29, status: true},

    {name: ‘olya’, age: 28, status: false},

    {name: ‘max’, age: 30, status: true},

    {name: ‘anya’, age: 31, status: false},

    {name: ‘oleg’, age: 28, status: false},

    {name: ‘andrey’, age: 29, status: true},

    {name: ‘masha’, age: 30, status: true},

    {name: ‘olya’, age: 31, status: false},

    {name: ‘max’, age: 31, status: true}

];

 за допомогою циклу вивести:

 – користувачів зі статусом true

 – користувачів зі статусом false

 – користувачів, які старші за 30 років

 
 */
let users:{name:string,age:number,status:boolean}[] = [

    {name: "vasya", age: 31, status: false},

    {name: "petya", age: 30, status: true},

    {name: "kolya", age: 29, status: true},

    {name: "olya", age: 28, status: false},

    {name: "max", age: 30, status: true},

    {name: "anya", age: 31, status: false},

    {name: "oleg", age: 28, status: false},

    {name: "andrey", age: 29, status: true},

    {name: "masha", age: 30, status: true},

    {name: "olya", age: 31, status: false},

    {name: "max", age: 31, status: true}

];

document.write('<p>' + 'користувачів зі статусом true' +'</p>');
function loopTrue(){
    for (let i:number = 0; i < users.length; i++){
        if(users[i].status === true){
            document.write('<li>' + users[i].name + ' - ' + users[i].age + '</li>');
        }
    }
}
loopTrue(); 

document.write('<p>' + 'користувачів зі статусом false' +'</p>');
function loopFalse(){
    for (let i:number = 0; i < users.length; i++){
        if(users[i].status === true){
            document.write('<li>' + users[i].name + ' - ' + users[i].age + '</li>');
        }
    }
}
loopFalse(); 

document.write('<p>' + 'користувачів, які старші за 30 років' +'</p>');
function loopAge(){
    for (let i:number = 0; i < users.length; i++){
        if(users[i].age > 30){
            document.write('<li>' + users[i].name + ' - ' + users[i].age + '</li>');
        }
    }
}
loopAge(); 