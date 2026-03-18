/*

– Є масив:

[‘Main’,’Products’,’About us’,’Contacts’]

Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)


*/
let arr:string[] = ["Main","Products","About us","Contacts"];
let container:HTMLUListElement = document.createElement("ul");
for(let i:number = 0; i < arr.length;i++){
    let li:HTMLLIElement = document.createElement('li');
    let liContainer:Text = document.createTextNode(`${arr[i]}`);
    li.appendChild(liContainer);
    container.appendChild(li);
}
document.body.appendChild(container);