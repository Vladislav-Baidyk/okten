/*
 Створити 3 інпута та кнопку. Один визначає кількість рядків,
  другий – кількість ячеєк, третій – вміст ячеєк.

При натисканні кнопки вся ця інформація зчитується і
формується табличка з відповідним вмістом.
*/
var tab = document.getElementById('table');
var tableGenerator = document.forms['tableGeneratorForm'];
tableGenerator.onsubmit = function (e) {
    e.preventDefault();
    var linesValue = +tableGenerator.lines.value;
    var cellsValue = +tableGenerator.cells.value;
    var datavalue = tableGenerator.data.value;
    tab.innerText = '';
    for (var i = 0; i < linesValue; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < cellsValue; j++) {
            var td = document.createElement('td');
            td.innerText = datavalue;
            tr.append(td);
        }
        tab.append(tr);
    }
};
