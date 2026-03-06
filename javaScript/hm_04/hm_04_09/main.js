/*– створити функцію яка повертає найменьше число з масиву */
function LowestNumber(numbers){
    let min;
    for(const numb of numbers){
        min = numbers[0];
        if(numb < min){
            min = numb;
        }
    }
    return min;
}
console.log(LowestNumber([5,2,3,1]));