/*#ruUtWDUI

Додаткове для тих, хто цікавився prompt`oм

– За допомогою 3-х різних prompt() отримати 3 слова які являються вашими Імʼям, 
По-батькові та роками. Та вивести в консоль */
function getName() {
    let firstName:string | null = prompt("Введіть ваше ім'я:", "Владислав");
    console.log("Ім'я: " + firstName);
}
function getBatkovi() {
    let batkovi:string | null = prompt("Введіть ваше по-батькові", "Максимович");
    console.log("По-батькові: " + batkovi);
}
function getAge() {
    let age:string | null = prompt("Введіть скільки вам років:", "20");
    console.log("Роки " + age);
}