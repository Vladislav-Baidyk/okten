function block(users) {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        document.write("<h1>".concat(user.id, " , ").concat(user.name, " , ").concat(user.age, "</h1>"));
    }
}
var info = [
    { id: 1, name: "vasya", age: "30" },
    { id: 2, name: "oleg", age: "23" },
    { id: 3, name: "orle", age: "32" }
];
console.log(block(info));
