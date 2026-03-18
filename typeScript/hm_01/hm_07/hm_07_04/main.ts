/*
#nkMXISv

– створити конструктор для об’єктів Client з полями id, 
name, surname , email, phone, order (поле є масивом зі списком товарів)

створити пустий масив, наповнити його 10 об’єктами Client
 */

interface ProductI {
    title: string;
    price: number;
}

class Product implements ProductI {
    constructor(public title: string, public price: number) {}
}

interface ClientI {
    id: number;
    name: string;
    surname: string;
    email: string;
    phone: string;
    order: ProductI[]; 
}

class Client implements ClientI {
    constructor(
        public id: number,
        public name: string,
        public surname: string,
        public email: string,
        public phone: string,
        public order: ProductI[] 
    ) {}
}
let clients:ClientI[]= [
    new Client(2434,"Vlad","Baidyk","vlad@gmail.com","+481293401",[new Product("phone",12341)]),
    new Client(243314,"oldertyk","Gryzj","older@gmail.com","+481293401",[new Product("phone",13141)]),
    new Client(2434,"Vlad","Baidyk","vlad@gmail.com","+481293401",[new Product("phone",11)]),
    new Client(3434,"Vlad","Baidyk","vlad@gmail.com","+481293401",[new Product("phone",1441)]),
    new Client(5434,"Vlad","Baidyk","vlad@gmail.com","+481293401",[new Product("phone",41)]),

    new Client(24524,"Vlad","Baidyk","vlad@gmail.com","+481293401",[new Product("phone",200)]),
    new Client(2234,"Vlad","Baidyk","vlad@gmail.com","+481293401",[new Product("phone",450)]),
    new Client(2534,"Vlad","Baidyk","vlad@gmail.com","+481293401",[new Product("phone",500)]),
    new Client(3434,"Lad","Baidyk","vlad@gmail.com","+481293401",[new Product("phone",900)]),
    new Client(32,"Vlad","Baidyk","vlad@gmail.com","+481293401",[new Product("phone",531)]),
]