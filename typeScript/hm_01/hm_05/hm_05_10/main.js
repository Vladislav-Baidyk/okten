/*#pghbnSB

– створити функцію, яка повертає найменше число з масиву */
var lowestNum = function (arr) {
    var min;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var numb = arr_1[_i];
        min = arr[0];
        if (numb < min) {
            min = numb;
        }
    }
    return min;
};
console.log(lowestNum([4, 2, -4, -5, -10]));
