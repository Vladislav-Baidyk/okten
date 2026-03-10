/*– Перевести до великого регістру наступні стрінгові значення

      "hello world’, "lorem ipsum’, ‘javascript is cool’ */
let arrString = ["hello world", "lorem ipsum", "javascript is cool"]
let toUpArr = (arr) => {
    for(let i = 0; i< arr.length;i++){
        console.log(arr[i].toUpperCase());
    }
}
toUpArr(arrString);
