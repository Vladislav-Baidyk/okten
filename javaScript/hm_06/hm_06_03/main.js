/*
– Перевести до нижнього регістру наступні стрінгові значення

      "HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’


      */
let arrLower = ["HELLO WORLD", "LOREM IPSUM", "JAVASCRIPT IS COOL"];
let toLowerRegist = (arr) => {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i].toLowerCase());
    }
}
toLowerRegist(arrLower);