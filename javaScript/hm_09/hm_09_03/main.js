/*

#jeBqHV525U5

– Є масив

let coursesAndDurationArray = [

    {title: ‘JavaScript Complex’, monthDuration: 5},

    {title: ‘Java Complex’, monthDuration: 6},

    {title: ‘Python Complex’, monthDuration: 6},

    {title: ‘QA Complex’, monthDuration: 4},

    {title: ‘FullStack’, monthDuration: 7},

    {title: ‘Frontend’, monthDuration: 4}

];

Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration

Завдання робити через цикли.



*/
let coursesAndDurationArray = [

    {title: "JavaScript Complex", monthDuration: 5},

    {title: "Java Complex", monthDuration: 6},

    {title: "Python Complex", monthDuration: 6},

    {title: "QA Complex", monthDuration: 4},

    {title: "FullStack", monthDuration: 7},

    {title: "Frontend", monthDuration: 4}

];

let block = document.createElement("div");
for(let i = 0 ; i < coursesAndDurationArray.length ; i++){
    let textContent = document.createTextNode(`${coursesAndDurationArray[i].title} + ${coursesAndDurationArray[i].monthDuration}`);
    let text = document.createElement(`h1`);
    text.appendChild(textContent);
    block.appendChild(text);
}
document.body.appendChild(block);