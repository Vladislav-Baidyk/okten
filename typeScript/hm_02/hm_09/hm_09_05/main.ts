/*
=========

– Є масив coursesArray котрий лежить в arrays.js 
(на цей момент ви вже знаєте де він знаходиться)

 

Створити для кожного елементу масиву свій блок, 
блок розділити блоками, в яких будуть зберігатись 
значення окремих властивостей, для властивості modules зробити список з елементами

Приклад структури знаходиться у файлі example.png, 
який лежить в папці з поточним файлом

 


*/
interface CourseI{
    title:string;
    monthDuration:number;
    hourDuration :number;
    modules:string[];
}
let coursesArray:CourseI[] = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
document.body.style.padding= "0";
document.body.style.margin = "0";
    for(let i:number =0 ; i< coursesArray.length; i++){
         /*creating the blokc */
        let block:HTMLDivElement = document.createElement("div");       
        block.classList.add("container")
        /*creating a title */
        let title:HTMLHeadElement = document.createElement("h1");
        title.classList.add("title");
        let titleContent :Text= document.createTextNode(`${coursesArray[i].title}`);
        title.appendChild(titleContent);
        block.appendChild(title);
        /*container for month and hour duration */
        let mothAndHourContainer:HTMLDivElement = document.createElement("div");
        mothAndHourContainer.classList.add("moth-hour-container");
        block.appendChild(mothAndHourContainer);
        /* month info*/
        let month :HTMLParagraphElement= document.createElement("p");
        let monthContent  :Text= document.createTextNode(`${coursesArray[i].monthDuration}`);
        month.appendChild(monthContent);
        mothAndHourContainer.appendChild(month);
        /*hour info */
        let hour:HTMLParagraphElement = document.createElement("p");
        let hourContent  :Text= document.createTextNode(`${coursesArray[i].hourDuration}`);
        hour.appendChild(hourContent);
        mothAndHourContainer.appendChild(hour);
        /*modules container */
        let modules:HTMLUListElement = document.createElement("ul");
        block.appendChild(modules);
        /*info in modules */
        for(let k:number=0; k<coursesArray[i].modules.length; k++){
            let li:HTMLLIElement = document.createElement("li");
            let liContent:Text = document.createTextNode(`${coursesArray[i].modules[k]}`);
            li.appendChild(liContent);
            modules.appendChild(li);
        }
        document.body.appendChild(block);
    }
