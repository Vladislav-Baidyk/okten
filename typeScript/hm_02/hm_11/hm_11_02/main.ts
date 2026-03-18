/*
– взяти https://dummyjson.com/docs/recipes та
 вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.
 */

let container:HTMLDivElement = document.createElement('div');
container.classList.add('container');
document.body.append(container);

let styles:{diff:string}[] = [
    {diff : 'easy'},
    {diff : 'medium'}
]
interface IRecipe{
    id: number;
      name: string;
      ingredients: string[];
      instructions: string[];
      prepTimeMinutes: number;
      cookTimeMinutes: number;
      servings: number;
      difficulty: string;
      cuisine: string;
      caloriesPerServing:number;
      tags: string[];
      userId: number;
      image: string;
      rating:number;
      reviewCount:number;
      mealType: string[];
}
let makeRecipe:(recipe:IRecipe)=> any = (recipe:IRecipe) => {
    let containerInfo:HTMLDivElement = document.createElement('div');
    containerInfo.classList.add('container-info');
    container.append(containerInfo);
    /*id */
    let id:HTMLHeadElement = document.createElement('h1');
    id.innerText = `${recipe.id} ${recipe.name}`;
    containerInfo.append(id);   
    /*diff */
    let diff:HTMLDivElement = document.createElement('div');
    let diffStyle: { diff: string } | undefined = styles.find(style => style.diff === recipe.difficulty.toLowerCase());
    diff.classList.add(`diff`);
    diff.classList.add(`${diffStyle ? diffStyle.diff : recipe.difficulty.toLowerCase()}`);
    containerInfo.append(diff);
    /*ingridients */
    let ulIng:HTMLUListElement= document.createElement('ul');
    let IngHeader:HTMLParagraphElement = document.createElement('p');
    IngHeader.innerText = `Ingridients For Meal Number ${recipe.id}`;
    IngHeader.classList.add('array-header');
    ulIng.append(IngHeader);
    containerInfo.append(ulIng);

    for(let i:number = 0; i < recipe.ingredients.length; i++ ){
        let li:HTMLLIElement = document.createElement('li');
        li.innerText = `${recipe.ingredients[i]}`;
        ulIng.append(li);
    }
        /*instructions */
    let ulInst:HTMLUListElement = document.createElement('ul');
    let InstHeader:HTMLParagraphElement = document.createElement('p');
    InstHeader.innerText = `Instructions For Meal Number ${recipe.id}`;
    InstHeader.classList.add('array-header');
    ulInst.append(InstHeader);
    containerInfo.append(ulInst);

    for(let i :number= 0; i < recipe.instructions.length; i++ ){
        let li:HTMLLIElement = document.createElement('li');
        li.innerText = `${recipe.instructions[i]}`;
        ulInst.append(li);
    }
    /*other info */
    let otherInfo:HTMLDivElement = document.createElement('div');
    otherInfo.innerText = `
                    Preperation Time Minutes : ${recipe.prepTimeMinutes}
                    Cook Time Minutes : ${recipe.cookTimeMinutes},
                    Servings: ${recipe.servings},
                    Cuisine: ${recipe.cuisine},
                    Calories Per Serving :  ${recipe.caloriesPerServing}`;
    containerInfo.append(otherInfo);

    /*image */
    let image:HTMLImageElement = document.createElement('img');
    image.src = `${recipe.image}`;
    image.classList.add('image');
    containerInfo.append(image);

    /*tags */
    let tags:HTMLUListElement = document.createElement('ul');
    let tagHeader:HTMLParagraphElement = document.createElement('p');
    tagHeader.innerText = `Tags`;
    tagHeader.classList.add('array-header');
    tags.append(tagHeader);
    containerInfo.append(tags);
    for(let i:number = 0 ; i < recipe.tags.length;i++){
        let li:HTMLLIElement = document.createElement('li');
        li.innerText = `${recipe.tags[i]}`;
        tags.append(li);
    }
    /*other info 2 */
    let ratings:HTMLDivElement = document.createElement('div');
    ratings.innerText = `
                    rating : ${recipe.rating},
                    reviewCount : ${recipe.reviewCount}`
    containerInfo.append(ratings);
    /*mealType */
    let mealType:HTMLParagraphElement = document.createElement('p');
    mealType.innerText = `${recipe.mealType}`;
    containerInfo.append(mealType);
}

let url:string = 'https://dummyjson.com/recipes';

 fetch(url)
        .then(res => res.json())
        .then(data => {
            data.recipes.map((recipe:IRecipe) => {
                makeRecipe(recipe);
        });
        });