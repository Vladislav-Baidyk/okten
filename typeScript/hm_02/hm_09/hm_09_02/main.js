/*

– Є масив:

[‘Main’,’Products’,’About us’,’Contacts’]

Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)


*/
var arr = ["Main", "Products", "About us", "Contacts"];
var container = document.createElement("ul");
for (var i = 0; i < arr.length; i++) {
    var li = document.createElement('li');
    var liContainer = document.createTextNode("".concat(arr[i]));
    li.appendChild(liContainer);
    container.appendChild(li);
}
document.body.appendChild(container);
