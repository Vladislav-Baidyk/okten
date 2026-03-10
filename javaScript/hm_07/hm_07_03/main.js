/*
#pOeHKct

– Взяти масив з  User[] з попереднього завдання, 
та відсортувати його по id. по зростанню (sort)
 */
function User(id,user,surname,email,phone){
    this.id = id;
    this.user = user;
    this.surname = surname;
    this.emai = email;
    this.phone = phone;
}
let users = [];
let ids = [1,4,5,12,4,51,61,613,63,61,41,231,4,31];
let randomNames = ["Vasya","Oleg","Jora","Vlad","Bogdan","Sasha","Stesha","Masha","Polina","Szymon"];
let surNames = ["Dovbopol","Dovgolob","Dovgoczol","Sagajdacznyj","Milodzien","Muzyka","Seksofonist","Jaropol","Mudryj","Korol"];
let emails = ["dovakg@gmail.com","vasya@gmail.com","jora@gmail.com","vlad@gmail.com","sasha@gmail.com","bogdan@gmail.com","stesha@gmail.com","masha@gmail.com","polina@gmail.com","szymon@gmail.com"]; 
let numbers = ["+13551515","+15135526","+745733452352","+265894452532","+26586834634","+255784547634","+2543734672","235437332","255794573452","58799567475632","255795673","23543737342","244375373"];
for(let i = 0 ; i < randomNames.length;i++){
    users.push(new User(ids[i],randomNames[i], surNames[i], emails[i], numbers[i]));
}  

let sortId = users.sort((a,b) =>
    {
        return a.id - b.id
    });
console.table(sortId);