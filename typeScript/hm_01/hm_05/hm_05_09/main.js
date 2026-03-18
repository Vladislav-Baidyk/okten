/*#bovDJDTIjt

– створити функцію, яка приймає масив об’єктів з наступними полями
 id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок. */
var paragraf = function (values) {
    for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
        var value = values_1[_i];
        document.writeln("<h1>".concat(value.id, " + ").concat(value.name, " + ").concat(value.age, "</h1>"));
    }
};
var info = [
    { id: 1, name: "vasya", age: "30" },
    { id: 2, name: "oleg", age: "23" },
    { id: 3, name: "orle", age: "32" }
];
paragraf(info);
