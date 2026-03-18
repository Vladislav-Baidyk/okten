/*#SIdMd0hQ

– створити функцію, яка приймає масив та виводить кожен його елемент

 */
function arrayTake(randomArray:any[]){
    for(const item in randomArray){
        console.log(item);
    }
}
console.log(arrayTake([10,20,0,20,4]));