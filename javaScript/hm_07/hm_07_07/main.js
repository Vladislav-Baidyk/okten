/*
– (Те саме, тільки через клас)

Створити клас, який дозволяє створювати об’єкти car, 
з властивостями модель, виробник, рік випуску,
 максимальна швидкість, об’єм двигуна. додати в об’єкт функції:

— drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

    — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`

    — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed

    — changeYear (newValue) – змінює рік випуску на значення newValue

    — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт car


    */
   class Car {
        constructor(model,creator,date,speed,volume){
                this.model = model;
                this.creater = creator;
                this.date = date;
                this.speed = speed;
                this.volume  = volume;
   }

      drive() {
        console.log(`We are driving ${car.speed} per hour`);
    };
    info(){
        for(const key in this){
            console.log(key,this[key]);
        }
    };
    increaseMaxSpeed(newSpeed) {
        this.speed = newSpeed
    };
    changeYear(newYear) {
        this.year = newYear;
    };
    addDriver(driverObject){
        this.driver = driverObject; 
    }
}
let car =  new Car("ford","FORD J",1939,90,1200);
console.log(car);
car.drive()
car.info();