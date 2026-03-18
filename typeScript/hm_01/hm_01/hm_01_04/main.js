/*#ruUtWDUI

Додаткове для тих, хто цікавився prompt`oм

– За допомогою 3-х різних prompt() отримати 3 слова які являються вашими Імʼям,
По-батькові та роками. Та вивести в консоль */
function getName() {
    var firstName = prompt("Введіть ваше ім'я:", "Владислав");
    console.log("Ім'я: " + firstName);
}
function getBatkovi() {
    var batkovi = prompt("Введіть ваше по-батькові", "Максимович");
    console.log("По-батькові: " + batkovi);
}
function getAge() {
    var age = prompt("Введіть скільки вам років:", "20");
    console.log("Роки " + age);
}
