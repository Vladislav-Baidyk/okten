/*
#pOeHKct

– Взяти масив з  User[] з попереднього завдання, 
та відсортувати його по id. по зростанню (sort)
 */
interface UserI {
    id: number;
    name: string;      
    surname: string;
    email: string;
    phone: string;
}
function User(this:UserI,id:number,name:string,surname:string,email:string,phone:string){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users:any = [];
let ids:number[] = [1,4,5,12,4,51,61,613,63,61,41,231,4,31];
let randomNames:string[] = ["Vasya","Oleg","Jora","Vlad","Bogdan","Sasha","Stesha","Masha","Polina","Szymon"];
let surNames:string[] = ["Dovbopol","Dovgolob","Dovgoczol","Sagajdacznyj","Milodzien","Muzyka","Seksofonist","Jaropol","Mudryj","Korol"];
let emails:string[] = ["dovakg@gmail.com","vasya@gmail.com","jora@gmail.com","vlad@gmail.com","sasha@gmail.com","bogdan@gmail.com","stesha@gmail.com","masha@gmail.com","polina@gmail.com","szymon@gmail.com"]; 
let numbers:string[] = ["+13551515","+15135526","+745733452352","+265894452532","+26586834634","+255784547634","+2543734672","235437332","255794573452","58799567475632","255795673","23543737342","244375373"];
for(let i :number= 0 ; i < randomNames.length;i++){
    users.push(new (User as any)(ids[i],randomNames[i], surNames[i], emails[i], numbers[i]));
}  

let sortId:number = users.sort((a:any,b:any) =>
    {
        return a.id - b.id
    });
console.table(sortId);