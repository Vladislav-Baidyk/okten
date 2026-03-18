/*
– Перевести до нижнього регістру наступні стрінгові значення

      "HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’


      */
var arrLower = ["HELLO WORLD", "LOREM IPSUM", "JAVASCRIPT IS COOL"];
var toLowerRegist = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i].toLowerCase());
    }
};
toLowerRegist(arrLower);
