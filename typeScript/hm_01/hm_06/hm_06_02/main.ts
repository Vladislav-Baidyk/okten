/*– Перевести до великого регістру наступні стрінгові значення

      "hello world’, "lorem ipsum’, ‘javascript is cool’ */
let arrString:string[] = ["hello world", "lorem ipsum", "javascript is cool"]
let toUpArr:(arr:string[]) => void = (arr:string[]) => {
    for(let i:number= 0; i< arr.length;i++){
        console.log(arr[i].toUpperCase());
    }
}
toUpArr(arrString);
