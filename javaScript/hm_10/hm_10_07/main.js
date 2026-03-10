/*
#RbQGnH5DuC

В localStorage зберігаються масиви. Вам потрібно зробити функцію, 
які дістає потрібний вам масив з localStorage та додає в нього об’єкт

сигнатура функції –

addToLocalStorage(arrayName:string,objToAdd:any{}):void
 */

function getItem(arrayName, objToAdd){

    let Jsonstring = localStorage.getItem(arrayName);

    let array = Jsonstring ? JSON.parse(Jsonstring) : [];

    array.push(objToAdd);
    localStorage.setItem(arrayName,JSON.stringify(array));
}
addToLocalStorage('courses', {title: 'Node.js Complex', monthDuration: 3});
