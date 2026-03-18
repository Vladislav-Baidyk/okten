/*
– створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги.
 Створити масив з 10 попелюшок.

Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік,
 туфелька яку він знайшов.


За допомоги циклу знайти, яка попелюшка повинна бути з принцом.

! Додатково, знайти необхідну попелюшку за допомогою функції масиву
 та відповідного колбеку
 */
var PopelushkaClass = /** @class */ (function () {
    function PopelushkaClass(name, age, sizeLeg) {
        this.name = name;
        this.age = age;
        this.sizeLeg = sizeLeg;
    }
    return PopelushkaClass;
}());
var PrinceClass = /** @class */ (function () {
    function PrinceClass(name, age, sizeLegToFind) {
        this.name = name;
        this.age = age;
        this.sizeLegToFind = sizeLegToFind;
    }
    PrinceClass.prototype.findRightPrincess = function (array) {
        var _this = this;
        var princess = array.find(function (princess) { return princess.sizeLeg === _this.sizeLegToFind; });
        console.log(princess);
    };
    return PrinceClass;
}());
var popel = new PopelushkaClass("Popeluska", 23, 124);
var princessArray = [
    new PopelushkaClass("Cinderella", 19, 35),
    new PopelushkaClass("Belle", 20, 37),
    new PopelushkaClass("Ariel", 16, 36),
    new PopelushkaClass("Jasmine", 18, 36),
    new PopelushkaClass("Snow White", 14, 34),
    new PopelushkaClass("Aurora", 16, 38),
    new PopelushkaClass("Mulan", 19, 37),
    new PopelushkaClass("Tiana", 19, 38),
    new PopelushkaClass("Rapunzel", 18, 35),
    new PopelushkaClass("Merida", 16, 39),
    new PopelushkaClass("Moana", 16, 40),
    new PopelushkaClass("Elsa", 21, 37),
    new PopelushkaClass("Anna", 18, 36),
    new PopelushkaClass("Pocahontas", 18, 38),
    new PopelushkaClass("Fiona", 22, 42),
    new PopelushkaClass("Odette", 20, 36),
    new PopelushkaClass("Anastasia", 18, 37),
    new PopelushkaClass("Thumbelina", 18, 5),
    new PopelushkaClass("Kida", 8500, 39),
    new PopelushkaClass("Giantess", 25, 124)
];
var prince1 = new PrinceClass("Charles", 20, 40);
var findPrincess = princessArray.find(function (princess) { return princess.sizeLeg === prince1.sizeLegToFind; });
console.log(findPrincess);
prince1.findRightPrincess(princessArray);
