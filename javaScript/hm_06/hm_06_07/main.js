/*
#5hqyKTfmc

– створити функцію sortNums(array,direction), яка 
приймає масив чисел, та сортує його від більшого до меншого,
 або навпаки  – залежно від значення аргументу direction.

let nums = [11,21,3];

sortNums(nums,’ascending’) // [3,11,21]

sortNums(nums,’descending’) // [21,11,3]
//  */

let nums = [11,21,3];

let sortingFunc = (numb,text) => {
    if(text.toLowerCase() === "ascending"){
    numb.sort((a,b) => a-  b );
    console.log(numb);
    }
    else if(text.toLowerCase() === "descending"){
    numb.sort((a,b) => b - a);
    console.log(numb);
    }
}
sortingFunc(nums,"ascending");