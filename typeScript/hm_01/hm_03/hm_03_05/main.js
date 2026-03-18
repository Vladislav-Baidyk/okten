/*
– Використовуючи данні з масиву, за допомоги document.write та циклу

побудувати структуру за шаблоном

Масив:

 

let listOfItems = [‘html’, ‘css’, ‘javascript’, ‘mysql’, ‘mongodb’, ‘react’, ‘angular’, ‘node.js’];

 

ШАБЛОН:

 <ul>

    <li>ITEM OF ARRAY</li>

    <!–

        і тд інші об’єкти масиву

         …

         …

         …

    –>

</ul>
 */
var listOfItems = ["html", "css", "javascript", "mysql", "mongodb", "react", "angular", "node.js"];
document.write('<ul>');
for (var _i = 0, listOfItems_1 = listOfItems; _i < listOfItems_1.length; _i++) {
    var item = listOfItems_1[_i];
    document.write('<li>' + item + '</li>');
}
document.write('</ul>');
