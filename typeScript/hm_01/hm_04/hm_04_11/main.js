/*– створити функцію swap(arr,index1,index2).
Функція міняє місцями значення у відповідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44] */
function swap(arr, index1, index2) {
    console.log("Array before " + arr);
    var tempA = 0;
    var tempB = 0;
    if (arr.length === 0)
        return;
    /*finding index 1 */
    tempA = arr[index1];
    /*findin index 2 */
    tempB = arr[index2];
    arr[index1] = tempB;
    arr[index2] = tempA;
    console.log("Array after " + arr);
}
console.log(swap([1, 2, 3, 4, 5], 0, 1));
