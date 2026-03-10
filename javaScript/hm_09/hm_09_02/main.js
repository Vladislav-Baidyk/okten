/*

– Є масив:

[‘Main’,’Products’,’About us’,’Contacts’]

Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)


*/
let arr = ["Main","Products","About us","Contacts"];
let container = document.createElement("ul");
for(let i = 0; i < arr.length;i++){
    let li = document.createElement('li');
    let liContainer = document.createTextNode(`${arr[i]}`);
    li.appendChild(liContainer);
    container.appendChild(li);
}
document.body.appendChild(container);