/*#kpsbSQCt2Lf

– створити функцію
 swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах */
 let swap:(arr:number[],index1:number,index2:number)=> number[] = (arr:number[],index1:number,index2:number) => {
    let tempA:number = 0;
    let tempB:number = 0;
    tempA = arr[index1];
    tempB = arr[index2];
    arr[index1] = tempB;
    arr[index2] = tempA;
    return arr;
 } 
 console.log(swap([1,2,3,4,5],3,4));