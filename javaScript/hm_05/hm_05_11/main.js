/*#EKRNVPM

– створити функцію sum(arr), яка приймає масив чисел, с
умує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13 */
let sum = (arr) => {
    let sum = 0;
    for(let num of arr){
        sum += num;
    }
    return sum;
 }
console.log(sum([2,541,7]));