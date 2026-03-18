var Constructor = /** @class */ (function () {
    function Constructor(model, creator, date, speed, volume) {
        this.model = model;
        this.creator = creator;
        this.date = date;
        this.speed = speed;
        this.volume = volume;
    }
    Constructor.prototype.drive = function () {
        console.log("\u0407\u0434\u0435\u043C\u043E \u0437\u0456 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044E ".concat(this.speed, " \u043D\u0430 \u0433\u043E\u0434\u0438\u043D\u0443"));
    };
    Constructor.prototype.info = function () {
        for (var _i = 0, _a = Object.entries(this); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (typeof value !== 'function') {
                console.log("".concat(key, " \u2013 ").concat(value));
            }
        }
    };
    Constructor.prototype.increaseMaxSpeed = function (newSpeed) {
        this.speed += newSpeed;
    };
    Constructor.prototype.changeYear = function (newValue) {
        this.date = newValue;
    };
    Constructor.prototype.addDriver = function (driver) {
        this.driver = driver;
    };
    return Constructor;
}());
var car = new Constructor("ford", "FORD J", 1939, 90, 1200);
console.log(car);
