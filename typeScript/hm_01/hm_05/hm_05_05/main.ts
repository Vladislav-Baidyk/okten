/*#59g0IsA

– створити функцію, яка створює параграф з текстом. Текст задати через аргумент */
let paragraf:(text1:string) => void = (text1:string) => {
    document.write(`<h1>${text1}</h1>`)
}
paragraf("text");