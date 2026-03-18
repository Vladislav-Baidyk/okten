/*– Перевести до великого регістру наступні стрінгові значення

      "hello world’, "lorem ipsum’, ‘javascript is cool’ */
var arrString = ["hello world", "lorem ipsum", "javascript is cool"];
var toUpArr = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i].toUpperCase());
    }
};
toUpArr(arrString);
