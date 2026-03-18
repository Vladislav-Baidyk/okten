var coursesArray = [
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
document.body.style.padding = "0";
document.body.style.margin = "0";
for (var i = 0; i < coursesArray.length; i++) {
    /*creating the blokc */
    var block = document.createElement("div");
    block.classList.add("container");
    /*creating a title */
    var title = document.createElement("h1");
    title.classList.add("title");
    var titleContent = document.createTextNode("".concat(coursesArray[i].title));
    title.appendChild(titleContent);
    block.appendChild(title);
    /*container for month and hour duration */
    var mothAndHourContainer = document.createElement("div");
    mothAndHourContainer.classList.add("moth-hour-container");
    block.appendChild(mothAndHourContainer);
    /* month info*/
    var month = document.createElement("p");
    var monthContent = document.createTextNode("".concat(coursesArray[i].monthDuration));
    month.appendChild(monthContent);
    mothAndHourContainer.appendChild(month);
    /*hour info */
    var hour = document.createElement("p");
    var hourContent = document.createTextNode("".concat(coursesArray[i].hourDuration));
    hour.appendChild(hourContent);
    mothAndHourContainer.appendChild(hour);
    /*modules container */
    var modules = document.createElement("ul");
    block.appendChild(modules);
    /*info in modules */
    for (var k = 0; k < coursesArray[i].modules.length; k++) {
        var li = document.createElement("li");
        var liContent = document.createTextNode("".concat(coursesArray[i].modules[k]));
        li.appendChild(liContent);
        modules.appendChild(li);
    }
    document.body.appendChild(block);
}
