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
interface CourseI{
    title:string,
    monthDuration:number
}
let coursesAndDurationArray:CourseI[] = [

    {title: "JavaScript Complex", monthDuration: 5},

    {title: "Java Complex", monthDuration: 6},

    {title: "Python Complex", monthDuration: 6},

    {title: "QA Complex", monthDuration: 4},

    {title: "FullStack", monthDuration: 7},

    {title: "Frontend", monthDuration: 4}

];

let block:HTMLDivElement = document.createElement("div");
for(let i:number = 0 ; i < coursesAndDurationArray.length ; i++){
    let textContent:Text = document.createTextNode(`${coursesAndDurationArray[i].title} + ${coursesAndDurationArray[i].monthDuration}`);
    let text:HTMLHeadElement = document.createElement(`h1`);
    text.appendChild(textContent);
    block.appendChild(text);
}
document.body.appendChild(block);