var coursesAndDurationArray = [
    { title: "JavaScript Complex", monthDuration: 5 },
    { title: "Java Complex", monthDuration: 6 },
    { title: "Python Complex", monthDuration: 6 },
    { title: "QA Complex", monthDuration: 4 },
    { title: "FullStack", monthDuration: 7 },
    { title: "Frontend", monthDuration: 4 }
];
var content = document.createElement('div');
for (var i = 0; i < coursesAndDurationArray.length; i++) {
    var element = document.createElement('div');
    element.classList.add("item");
    var elementH1 = document.createElement('h1');
    var elementContent = document.createTextNode("".concat(coursesAndDurationArray[i].title));
    elementH1.classList.add("heading");
    elementH1.appendChild(elementContent);
    element.appendChild(elementH1);
    var elementDuration = document.createElement('p');
    elementDuration.classList.add("description");
    var elementDurationContent = document.createTextNode("".concat(coursesAndDurationArray[i].monthDuration));
    elementDuration.appendChild(elementDurationContent);
    element.appendChild(elementDuration);
    content.appendChild(element);
}
;
document.body.appendChild(content);
