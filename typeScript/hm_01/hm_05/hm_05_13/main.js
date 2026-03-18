/*#mkGDenYnNjn

– Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)

Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’)
// => 250 */
var exchange = function (sumUAH, currencyValues, exchangeCurrency) {
    var changingCurr = 0;
    for (var i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            changingCurr = currencyValues[i].value;
        }
    }
    return Math.floor(sumUAH / changingCurr);
};
console.log(exchange(24444, [{ currency: "USD", value: 40 }, { currency: "EUR", value: 42 }], "EUR"));
