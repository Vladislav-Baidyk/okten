/*
#AiN5CoUQ

Створити функцію, яка робить глибоку копію об’єкта.

Додати перевірки на undefined, null, NaN.

Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції,
 які в нього були до цього моменту.


*/
var deepCopy = function (obj) {
    if (obj === null)
        return null;
    if (obj === undefined)
        return undefined;
    if (typeof obj === 'number' && isNaN(obj))
        return NaN;
    if (typeof obj !== 'object') {
        return obj;
    }
    var copy = Array.isArray(obj) ? [] : {};
    for (var key in obj) {
        copy[key] = deepCopy(obj[key]);
    }
    return copy;
};
var fruit = {
    name: "Apple",
    weight: 20,
    checkWeight: function () {
        console.log("The weight is " + this.weight);
    }
};
console.log(deepCopy(fruit));
