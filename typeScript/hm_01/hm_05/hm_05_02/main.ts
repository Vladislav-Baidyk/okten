/*#ETGAxbEn8l

– створити функцію, яка обчислює та повертає площу кола з радіусом r */
let radius:(r:number) => number = (r:number) => {
    return Math.floor(Math.PI * r * r);
}
console.log(radius(9));