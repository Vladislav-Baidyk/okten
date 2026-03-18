var coursesAndDurationArray = [
    { title: "JavaScript Complex", monthDuration: 5 },
    { title: "Java Complex", monthDuration: 6 },
    { title: "Python Complex", monthDuration: 6 },
    { title: "QA Complex", monthDuration: 4 },
    { title: "FullStack", monthDuration: 7 },
    { title: "Frontend", monthDuration: 4 }
];
var block = document.createElement("div");
for (var i = 0; i < coursesAndDurationArray.length; i++) {
    var textContent = document.createTextNode("".concat(coursesAndDurationArray[i].title, " + ").concat(coursesAndDurationArray[i].monthDuration));
    var text = document.createElement("h1");
    text.appendChild(textContent);
    block.appendChild(text);
}
document.body.appendChild(block);
