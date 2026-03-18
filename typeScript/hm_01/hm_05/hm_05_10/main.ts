/*#pghbnSB

– створити функцію, яка повертає найменше число з масиву */
let lowestNum:(arr:number[]) => number | undefined = (arr:number[]) => {
    let min;
    for(const numb of arr){
        min = arr[0];
        if(numb < min){
            min = numb;
        }
    }
    return min;

}
console.log(lowestNum([4,2,-4,-5,-10]));