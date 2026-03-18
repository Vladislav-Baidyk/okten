/*
#ymAmN2xJ

Створити форму з трьома полями для name, surname, age та кнопкою.
При натисканні на кнопку зчитати дані з полів, та вивести об’єкт
 в документ. Іншими словами : заповнили форму, натиснули кнопку,
  під формою з’явився блок з вашим об’єктом
 */
var arr = ['name', 'surname', 'age'];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var element = arr_1[_i];
    var input = document.createElement('input');
    input.placeholder = "Please write the ".concat(element);
    input.id = "".concat(element);
    document.body.append(input);
}
var button = document.createElement('button');
;
button.onclick = function () {
    var user = {};
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var element = arr_2[_i];
        var inputField = document.getElementById(element);
        user[element] = inputField.value;
    }
    var div = document.createElement('div');
    div.innerText = JSON.stringify(user);
    document.body.append(div);
};
document.body.append(button);
