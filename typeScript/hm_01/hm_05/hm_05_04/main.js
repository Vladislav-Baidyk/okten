/*#SIdMd0hQ

– створити функцію, яка приймає масив та виводить кожен його елемент */
var showAllArray = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        document.write("<h1> ".concat(arr[i], "</h1>"));
    }
};
(showAllArray([2, 4, 5, 1, 5]));
