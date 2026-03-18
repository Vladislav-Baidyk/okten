/*
Kx1xgoKy8

– Є масив

let coursesAndDurationArray = [

    {title: ‘JavaScript Complex’, monthDuration: 5},

    {title: ‘Java Complex’, monthDuration: 6},

    {title: ‘Python Complex’, monthDuration: 6},

    {title: ‘QA Complex’, monthDuration: 4},

    {title: ‘FullStack’, monthDuration: 7},

    {title: ‘Frontend’, monthDuration: 4}

];

 

За допомоги скріпта для кожного елементу масиву зробити
 <div class=’item’> ,
  в якому буде <h1 class=’heading’> 
   з title  елементу, та <p class=’description’>
    з monthDuration елементу.

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
let content:HTMLDivElement = document.createElement('div');
 for(let i:number = 0; i < coursesAndDurationArray.length; i++){
    let element:HTMLDivElement = document.createElement('div');
    element.classList.add("item");
    let elementH1:HTMLHeadingElement = document.createElement('h1');
    let elementContent:Text = document.createTextNode(`${coursesAndDurationArray[i].title}`);
    elementH1.classList.add("heading");
    elementH1.appendChild(elementContent);
    element.appendChild(elementH1);
    let elementDuration:HTMLParagraphElement = document.createElement('p');
    elementDuration.classList.add("description");
    let elementDurationContent:Text = document.createTextNode(`${coursesAndDurationArray[i].monthDuration}`);
    elementDuration.appendChild(elementDurationContent);
    element.appendChild(elementDuration);
    content.appendChild(element);
    };
document.body.appendChild(content);
