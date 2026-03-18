/*
#bfoJuse4ZzP

– Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

    let str = ‘Ревуть воли як ясла повні’;

    let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]
*/
var str = "Ревуть воли як ясла повні";
var stringToarray = function (str) {
    if (str) {
        var split = str.split(' ');
        console.log(split);
    }
};
stringToarray(str);
