/*– створити функцію swap(arr,index1,index2). 
Функція міняє місцями значення у відповідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44] */
function swap(arr:number[],index1:number,index2:number){
    console.log("Array before " + arr);
    let tempA:number = 0;
    let tempB:number = 0;
    if(arr.length === 0) return;
    /*finding index 1 */
        tempA = arr[index1];
    
    /*findin index 2 */
    tempB = arr[index2];

    arr[index1] = tempB;
    arr[index2] = tempA;
    
    console.log("Array after " + arr);
}
console.log(swap([1,2,3,4,5],0,1));