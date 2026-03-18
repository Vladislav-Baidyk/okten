/*#bovDJDTIjt

– створити функцію, яка приймає масив об’єктів з наступними полями
 id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок. */

 interface Info{
    id:number,
    name:string,
    age:string
 }

let paragraf:(values:Info[])=> void = (values:Info[]) => {
    for(const value of values)
    document.writeln(`<h1>${value.id} + ${value.name} + ${value.age}</h1>`)
}
 const info = [
    {id:1,name : "vasya" , age: "30"},
    {id:2,name : "oleg" , age: "23"},
    {id:3,name : "orle" , age: "32"}
 ]
 paragraf(info);