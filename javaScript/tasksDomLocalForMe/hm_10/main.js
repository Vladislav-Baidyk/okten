/*
Створити функцію updateObjectInArray(id, newField, newValue).
 Вона має дістати масив об'єктів з localStorage, знайти об'єкт за id,
 змінити йому поле і зберегти назад.
 */
let arr  = [];
let createArray = () => {
    for(let i = 0; i < 40;i++){
        arr.push({id:i,name:'Vladyslav',surname:'baidyk'});
    }
}
createArray();
let localArr = localStorage.setItem('arr',JSON.stringify(arr));
function updateObjectInArray(id, newField, newValue){
    let localArrJson = JSON.parse(localStorage.getItem('arr'));
    let filterObject = localArrJson.find(obj => obj.id === id);
    filterObject[newField] = newValue;
    localStorage.setItem('arr',JSON.stringify(localArrJson));
    

}