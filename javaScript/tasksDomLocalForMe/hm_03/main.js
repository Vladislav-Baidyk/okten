/*
 Створити інпут і порожній параграф.
 Зробити так, щоб при введенні тексту в інпут він миттєво дублювався в параграф.
 */
let div = document.createElement('div');
let input = document.createElement('input');
input.oninput= function(){
    div.innerText = this.value;
}
document.body.append(div,input);