var Car = /** @class */ (function () {
    function Car(model, creator, date, speed, volume) {
        this.model = model;
        this.creator = creator;
        this.date = date;
        this.speed = speed;
        this.volume = volume;
    }
    Car.prototype.drive = function () {
        console.log("We are driving ".concat(car.speed, " per hour"));
    };
    ;
    Car.prototype.info = function () {
        for (var key in this) {
            console.log(key, this[key]);
        }
    };
    ;
    Car.prototype.increaseMaxSpeed = function (newSpeed) {
        this.speed = newSpeed;
    };
    ;
    Car.prototype.changeYear = function (newYear) {
        this.date = newYear;
    };
    ;
    Car.prototype.addDriver = function (driverObject) {
        this.driver = driverObject;
    };
    return Car;
}());
var car = new Car("ford", "FORD J", 1939, 90, 1200);
console.log(car);
car.drive();
car.info();
