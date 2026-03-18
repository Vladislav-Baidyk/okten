/*#SIdMd0hQ

– створити функцію, яка приймає масив та виводить кожен його елемент */
let showAllArray:(arr:number[]) => void = (arr:number[]) => {
    for(let i:number = 0 ; i < arr.length;i++){
        document.write(`<h1> ${arr[i]}</h1>`)
    }
}
(showAllArray([2,4,5,1,5]));