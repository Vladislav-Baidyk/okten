/*
– Знайти та вивести довжину наступних стрінгових значень

 ‘hello world’

‘lorem ipsum’

‘javascript is cool’
 */
let arrString = ["hello world", "lorem ipsum", "javascript is cool"];
let lengthCalculate = (arr) => {
    for(let i = 0; i < arr.length;i++){
        console.log(arr[i].length)
    }
}
lengthCalculate(arrString);