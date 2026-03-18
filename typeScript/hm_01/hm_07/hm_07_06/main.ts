/*
– Створити функцію конструктор, яка дозволяє створювати об’єкти car, 
з властивостями модель, виробник, рік випуску, максимальна швидкість, 
об’єм двигуна. додати в об’єкт функції:

    — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість}
     на годину`

    — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля 
    – значення поля`

    — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості
     на значення newSpeed

    — changeYear (newValue) – змінює рік випуску на значення newValue

    — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів,
     і додає його в поточний об’єкт car
     */
interface ConstructorI{
    model:string;
    creator:string;
    date:number;
    speed:number;
    volume:number;
    driver?:any;
}

class Constructor implements ConstructorI {
    public driver?: any;

    constructor(
        public model: string,
        public creator: string,
        public date: number,
        public speed: number,
        public volume: number
    ) {}

    drive() {
        console.log(`Їдемо зі швидкістю ${this.speed} на годину`);
    }

    info() {
        for (const [key, value] of Object.entries(this)) {
            if (typeof value !== 'function') {
                console.log(`${key} – ${value}`);
            }
        }
    }

    increaseMaxSpeed(newSpeed: number) {
        this.speed += newSpeed;
    }

    changeYear(newValue: number) {
        this.date = newValue;
    }

    addDriver(driver: any) {
        this.driver = driver;
    }
}
let car:Constructor =  new Constructor("ford","FORD J",1939,90,1200);
console.log(car);