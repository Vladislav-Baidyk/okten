/*
#ymAmN2xJ

Створити форму з трьома полями для name, surname, age та кнопкою. 
При натисканні на кнопку зчитати дані з полів, та вивести об’єкт
 в документ. Іншими словами : заповнили форму, натиснули кнопку,
  під формою з’явився блок з вашим об’єктом
 */
let arr:string[] = ['name','surname','age']
for(let element of arr ){
   let input:HTMLInputElement =  document.createElement('input');
   input.placeholder = `Please write the ${element}`;
   input.id = `${element}`;
   document.body.append(input);
}
let button:HTMLButtonElement = document.createElement('button');;
button.onclick = () => {
    let user:any = {}
    for(let element of arr){
        let inputField = document.getElementById(element) as HTMLInputElement;
        user[element] = inputField.value;
    }
    let div:HTMLDivElement = document.createElement('div');
    div.innerText = JSON.stringify(user);
    document.body.append(div);
}
document.body.append(button);