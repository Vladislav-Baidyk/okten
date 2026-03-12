/*
Створити інпут. При натисканні
 кнопки зберегти текст з нього в
  localStorage. При перезавантаженні сторінки цей текст має автоматично з’явитися в інпуті.
 */
let input = document.createElement('input');
let newText = localStorage.getItem('savedText') || '0';
let button = document.createElement('button');
button.innerText = 'save';
input.value = newText;
button.onclick = function() {
let newSave = input.value;
localStorage.setItem('savedText',JSON.stringify(newSave));
}
document.body.append(input,button);