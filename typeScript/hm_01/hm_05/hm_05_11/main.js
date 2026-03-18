/*#EKRNVPM

– створити функцію sum(arr), яка приймає масив чисел, с
умує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13 */
var sum = function (arr) {
    var sum = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        sum += num;
    }
    return sum;
};
console.log(sum([2, 541, 7]));
