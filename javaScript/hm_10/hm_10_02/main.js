/*
#j693ca8

– створити інпут, який приймає вік людини, та кнопку,
 яка підтверджує дію. При натисканні на кнопку зчитати інформацію
 з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача */
 let input = document.createElement("input");
 input.placeholder = "Write your age";
 let button = document.createElement("button");
 button.innerText = "Click";
 let p = document.createElement("p");
 button.onclick = () => {
    if(input.value>18){
        p.style.color = "green";
        p.innerText = "You are allowed";
        
    }
    else if(typeof input.value === "string"){
        p.style.color = "red";
        p.innerText = "Please write the number";
        input.value = '';
    }
    else{
        p.style.color = "red";
        p.innerText = "You aren't allowed";
        input.value = '';
    }
 }
 document.body.append(input,button,p);