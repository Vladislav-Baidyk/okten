/*
 

#XjJuucOMR0

– Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone

створити пустий масив, наповнити його 10 об’єктами new User(….) */
function User(id,user,surname,email,phone){
    this.id = id;
    this.user = user;
    this.surname = surname;
    this.emai = email;
    this.phone = phone;
}
let users = [];
let randomNames = ["Vasya","Oleg","Jora","Vlad","Bogdan","Sasha","Stesha","Masha","Polina","Szymon"];
let surNames = ["Dovbopol","Dovgolob","Dovgoczol","Sagajdacznyj","Milodzien","Muzyka","Seksofonist","Jaropol","Mudryj","Korol"];
let emails = ["dovakg@gmail.com","vasya@gmail.com","jora@gmail.com","vlad@gmail.com","sasha@gmail.com","bogdan@gmail.com","stesha@gmail.com","masha@gmail.com","polina@gmail.com","szymon@gmail.com"]; 
let numbers = ["+13551515","+15135526","+745733452352","+265894452532","+26586834634","+255784547634","+2543734672","235437332","255794573452","58799567475632","255795673","23543737342","244375373"];
for(let i = 0 ; i < randomNames.length;i++){
    users.push(new User(i+1,randomNames[i], surNames[i], emails[i], numbers[i]));
}  
console.table(users);