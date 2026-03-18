/*
– Знайти та вивести довжину наступних стрінгових значень

 ‘hello world’

‘lorem ipsum’

‘javascript is cool’
 */
let arrString:string[] = ["hello world", "lorem ipsum", "javascript is cool"];
let lengthCalculate:(arr:string[]) => void = (arr:string[]) => {
    for(let i:number = 0; i < arr.length;i++){
        console.log(arr[i].length)
    }
}
lengthCalculate(arrString);