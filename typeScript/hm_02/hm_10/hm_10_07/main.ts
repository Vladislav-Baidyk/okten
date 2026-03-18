/*
#RbQGnH5DuC

В localStorage зберігаються масиви. Вам потрібно зробити функцію, 
які дістає потрібний вам масив з localStorage та додає в нього об’єкт

сигнатура функції –

addToLocalStorage(arrayName:string,objToAdd:any{}):void
 */

interface ObjAddI{
    title:string;
    monthDuration:number;
}
function addToLocalStorage(arrayName:string, objToAdd:ObjAddI){

    let Jsonstring:string = localStorage.getItem(arrayName);

    let array:any = Jsonstring ? JSON.parse(Jsonstring) : [];

    array.push(objToAdd);
    localStorage.setItem(arrayName,JSON.stringify(array));
}
addToLocalStorage('courses', {title: 'Node.js Complex', monthDuration: 3});
