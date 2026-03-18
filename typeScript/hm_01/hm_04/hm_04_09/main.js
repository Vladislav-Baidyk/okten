/*– створити функцію яка повертає найменьше число з масиву */
function LowestNumber(numbers) {
    var min;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var numb = numbers_1[_i];
        min = numbers[0];
        if (numb < min) {
            min = numb;
        }
    }
    return min;
}
console.log(LowestNumber([5, 2, 3, 1]));
