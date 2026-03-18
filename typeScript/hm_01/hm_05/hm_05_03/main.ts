/*#Mbiz5K4yFe7

– створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r */
let square:(h:number,r:number) => number = (h:number,r:number) => {
    return Math.floor(Math.PI * 2  * r * h);
}
console.log("Square of cylinder is " + square(2,4));