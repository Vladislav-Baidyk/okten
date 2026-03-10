/*
 Створити 3 інпута та кнопку. Один визначає кількість рядків,
  другий – кількість ячеєк, третій – вміст ячеєк.

При натисканні кнопки вся ця інформація зчитується і 
формується табличка з відповідним вмістом.
*/
const tab = document.getElementById('table');
const tableGenerator = document.forms['tableGeneratorForm'];


tableGenerator.onsubmit = function (e){
    e.preventDefault();

    const linesValue = +tableGenerator.lines.value;
    const cellsValue = +tableGenerator.cells.value;
    const datavalue = tableGenerator.data.value;
    tab.innerText = '';

        for(let i = 0; i<linesValue;i++){
            const tr = document.createElement('tr');
            for(let j = 0; j < cellsValue;j++){
                const td = document.createElement('td');
                td.innerText = datavalue
                tr.append(td);
            }
            tab.append(tr);
        }
};
