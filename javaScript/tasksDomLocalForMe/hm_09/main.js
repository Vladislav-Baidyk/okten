/*
Створити кнопку "Змінити тему".
 При натисканні змінювати колір фону
  сторінки (білий/чорний) і зберігати вибір у
   сховище, щоб при оновленні тема зберігалася.
 */
let button = document.createElement('button');
button.innerText = 'change theme';
document.body.style.background = 'lightgray';
let theme = JSON.parse(localStorage.getItem('theme') || true);
let checkTheme= () => { theme? document.body.style.background = 'lightgray' : document.body.style.background = 'black';};
checkTheme();
button.onclick = function(){
    theme = !theme;
    checkTheme();   
    localStorage.setItem('theme',JSON.stringify(theme));
}
document.body.append(button);