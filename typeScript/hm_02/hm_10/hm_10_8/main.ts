/*
 Створити 3 інпута та кнопку. Один визначає кількість рядків,
  другий – кількість ячеєк, третій – вміст ячеєк.

При натисканні кнопки вся ця інформація зчитується і 
формується табличка з відповідним вмістом.
*/
const tab:HTMLElement = document.getElementById('table');
const tableGenerator:HTMLFormElement = document.forms['tableGeneratorForm'];


tableGenerator.onsubmit = function (e){
    e.preventDefault();

    const linesValue:number = +tableGenerator.lines.value;
    const cellsValue:number = +tableGenerator.cells.value;
    const datavalue :any= tableGenerator.data.value;
    tab.innerText = '';

        for(let i:number = 0; i<linesValue;i++){
            const tr:HTMLTableRowElement = document.createElement('tr');
            for(let j:number = 0; j < cellsValue;j++){
                const td:HTMLTableCellElement = document.createElement('td');
                td.innerText = datavalue
                tr.append(td);
            }
            tab.append(tr);
        }
};
