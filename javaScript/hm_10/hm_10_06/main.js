/*
#Jg0gPO00

створити конвертор ваги з кг в фунти. дані заповнюються через інпут
. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
 */


let inputKG = document.createElement('input');
let div = document.createElement('div');
inputKG.type = "number";
inputKG.oninput = () => {
    const kilos = inputKG.value;
    div.innerText = (kilos * 2.2).toFixed(1);
};
document.body.append(inputKG,div);