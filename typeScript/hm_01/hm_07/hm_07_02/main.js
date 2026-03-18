function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
var users = [];
var randomNames = ["Vasya", "Oleg", "Jora", "Vlad", "Bogdan", "Sasha", "Stesha", "Masha", "Polina", "Szymon"];
var surNames = ["Dovbopol", "Dovgolob", "Dovgoczol", "Sagajdacznyj", "Milodzien", "Muzyka", "Seksofonist", "Jaropol", "Mudryj", "Korol"];
var emails = ["dovakg@gmail.com", "vasya@gmail.com", "jora@gmail.com", "vlad@gmail.com", "sasha@gmail.com", "bogdan@gmail.com", "stesha@gmail.com", "masha@gmail.com", "polina@gmail.com", "szymon@gmail.com"];
var numbers = ["+13551515", "+15135526", "+745733452352", "+265894452532", "+26586834634", "+255784547634", "+2543734672", "235437332", "255794573452", "58799567475632", "255795673", "23543737342", "244375373"];
for (var i = 0; i < randomNames.length; i++) {
    users.push(new User(i + 1, randomNames[i], surNames[i], emails[i], numbers[i]));
}
console.table(users);
var filterId = users.filter(function (user) { return user.id % 2 === 0; });
console.table(filterId);
