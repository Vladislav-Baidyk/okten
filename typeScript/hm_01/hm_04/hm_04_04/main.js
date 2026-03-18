/*#SIdMd0hQ

– створити функцію, яка приймає масив та виводить кожен його елемент

 */
function arrayTake(randomArray) {
    for (var item in randomArray) {
        console.log(item);
    }
}
console.log(arrayTake([10, 20, 0, 20, 4]));
