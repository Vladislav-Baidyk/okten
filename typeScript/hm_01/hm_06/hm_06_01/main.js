/*
– Знайти та вивести довжину наступних стрінгових значень

 ‘hello world’

‘lorem ipsum’

‘javascript is cool’
 */
var arrString = ["hello world", "lorem ipsum", "javascript is cool"];
var lengthCalculate = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i].length);
    }
};
lengthCalculate(arrString);
