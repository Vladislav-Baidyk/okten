/*
==========================

#yo06d74c1C

– є масив

let coursesAndDurationArray = [

    {title: ‘JavaScript Complex’, monthDuration: 5},

    {title: ‘Java Complex’, monthDuration: 6},

    {title: ‘Python Complex’, monthDuration: 6},

    {title: ‘QA Complex’, monthDuration: 4},

    {title: ‘FullStack’, monthDuration: 7},

    {title: ‘Frontend’, monthDuration: 4}

];

 — відсортувати його за спаданням за monthDuration

 — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців

 — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
  */
 interface Course{
    title:string,
    monthDuration :number
 }
 interface CourseWithId extends Course {
    id: number;
}
let coursesAndDurationArray:Course[] = [

    {title: "JavaScript Complex", monthDuration: 5},

    {title: "Java Complex", monthDuration: 6},

    {title: "Python Complex", monthDuration: 6},

    {title: "QA Complex", monthDuration: 4},

    {title: "FullStack", monthDuration: 7},

    {title: "Frontend", monthDuration: 4}

];
let sortFunc:CourseWithId[] = coursesAndDurationArray
    .sort((a,b) => a.monthDuration - b.monthDuration)
    .filter(value => value.monthDuration > 5)
    .map((value, index): CourseWithId => {
        return {
            ...value,   
            id: index + 1 
        };
    });;
console.log(sortFunc);