/*– створити функцію, яка приймає масив об’єктів з наступними полями id,name,age ,
 та виводить їх в документ. Для кожного об’єкту 
 окремий блок. */
 interface Info {
    id :number,
    name:string,
    age:string
 }
 function block(users:Info[]){
    for(const user of users){
            document.write(`<h1>${user.id} , ${user.name} , ${user.age}</h1>`)
    }
 }
 const info:Info[] = [
    {id:1,name : "vasya" , age: "30"},
    {id:2,name : "oleg" , age: "23"},
    {id:3,name : "orle" , age: "32"}
 ]
console.log(block(info));