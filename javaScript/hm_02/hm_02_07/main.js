/*– Дано змінну time яка рівна числу від 0 до 59. 
Потрібно написати код, який перевірить, до якої четверті години попадає число

(в першу, другу, третю або четверту частину години). */
let time  =Math.floor(Math.random() * 60);
console.log(time);

if(time < 15){
    console.log('в першу');
}
else if (time < 30){
    console.log('в другу');
}
else if (time < 45 ){
    console.log('в третю');
}
else if (time < 60){
    console.log('в четверту');
}