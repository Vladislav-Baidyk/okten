/* Написати функцію обміну валюти
exchange(sumUAH,currencyValues,exchangeCurrency)

Приклад exchange(10000,[{currency:’USD’,value:25},
{currency:’EUR’,value:42}],’USD’) // => 400 */
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    var changingCurr = 0;
    for (var i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            changingCurr = currencyValues[i].value;
        }
    }
    return Math.floor(sumUAH / changingCurr);
}
console.log(exchange(105000, [{ currency: "USD", value: 25 },
    { currency: "EUR", value: 42 }], "USD"));
