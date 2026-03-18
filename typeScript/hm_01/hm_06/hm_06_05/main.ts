/*
#bfoJuse4ZzP

– Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

    let str = ‘Ревуть воли як ясла повні’;

    let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]
*/
let str:string = "Ревуть воли як ясла повні";
let stringToarray:(str:string) => void = (str:string) => {
    if(str){
        const split = str.split(' ');
        console.log(split);
    }
}
stringToarray(str);