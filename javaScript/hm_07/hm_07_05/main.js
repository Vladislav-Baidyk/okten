/*
#8abtVjRv

– Взяти масив (Client [] з попереднього завдання). 
Відсортувати його за кількістю товарів в полі order по зростанню. (sort)
 */

function Product(title,price){
    this.title = title;
    this.price = price
}
function Client(id,name,surname,email,phone,order){
    this.id = id;
    this.name = name,
    this.surname = surname;
    this.emai = email;
    this.phone = phone;
    this.order = order;
}

let clients = [
    new Client(2434,"Vlad","Baidyk","vlad@gmail.com","+481293401",[new Product("phone",531), new Product("phone",531),new Product("phone",531), new Product("phone",531),new Product("phone",13141),new Product("phone",13141),new Product("phone",13141),new Product("phone",13141),new Product("phone",13141)]),
    new Client(243314,"oldertyk","Gryzj","older@gmail.com","+481293401",[new Product("phone",500)]),
    new Client(2434,"Vlad","Baidyk","vlad@gmail.com","+481293401",[new Product("phone",500)]),
    new Client(3434,"Vlad","Baidyk","vlad@gmail.com","+481293401",[new Product("phone",531), new Product("phone",531),new Product("phone",13141),new Product("phone",13141),new Product("phone",13141),new Product("phone",13141),new Product("phone",13141)]),
    new Client(5434,"Vlad","Baidyk","vlad@gmail.com","+481293401",[new Product("phone",500)]),

    new Client(24524,"Vlad","Baidyk","vlad@gmail.com","+481293401",[new Product("phone",531), new Product("phone",531),new Product("phone",13141),new Product("phone",13141)]),
    new Client(2234,"Vlad","Baidyk","vlad@gmail.com","+481293401",[new Product("phone",500)]),
    new Client(2534,"Vlad","Baidyk","vlad@gmail.com","+481293401",[new Product("phone",500)]),
    new Client(3434,"Lad","Baidyk","vlad@gmail.com","+481293401",[new Product("phone",531), new Product("phone",531),new Product("phone",13141),new Product("phone",13141),new Product("phone",13141),new Product("phone",13141)]),
    new Client(32,"Vlad","Baidyk","vlad@gmail.com","+481293401",[new Product("phone",531), new Product("phone",531)],new Product("phone",13141)),
]
let sortOrder = clients.sort((a, b) => {
    return a.order.length - b.order.length;
});
console.table(sortOrder);