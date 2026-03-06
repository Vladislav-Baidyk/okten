/*– створити функцію sum(arr), яка приймає масив чисел,
 сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13 */
 function sum(arr){
    let sum = 0;
    for(let i = 0; i< arr.length; i++){
        sum += arr[i];
    }
    return sum;
 }
 console.log(sum([1,5,3,-2]));