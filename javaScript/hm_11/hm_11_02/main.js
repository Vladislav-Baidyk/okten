/*
– взяти https://dummyjson.com/docs/recipes та
 вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.
 */
let container = document.createElement('div');
container.classList.add('container');
document.body.append(container);

let styles = [
    {diff : 'easy'},
    {diff : 'medium'}
]

let makeRecipe = (recipe) => {
    let containerInfo = document.createElement('div');
    containerInfo.classList.add('container-info');
    container.append(containerInfo);
    /*id */
    let id = document.createElement('h1');
    id.innerText = `${recipe.id} ${recipe.name}`;
    containerInfo.append(id);   
    /*diff */
    let diff = document.createElement('div');
    let diffStyle = styles.find(style => style.diff === recipe.difficulty.toLowerCase());
    diff.classList.add(`diff`);
    diff.classList.add(`${diffStyle ? diffStyle.diff : recipe.difficulty.toLowerCase()}`);
    containerInfo.append(diff);
    /*ingridients */
    let ulIng = document.createElement('ul');
    let IngHeader = document.createElement('p');
    IngHeader.innerText = `Ingridients For Meal Number ${recipe.id}`;
    IngHeader.classList.add('array-header');
    ulIng.append(IngHeader);
    containerInfo.append(ulIng);

    for(let i = 0; i < recipe.ingredients.length; i++ ){
        let li = document.createElement('li');
        li.innerText = `${recipe.ingredients[i]}`;
        ulIng.append(li);
    }
        /*instructions */
    let ulInst = document.createElement('ul');
    let InstHeader = document.createElement('p');
    InstHeader.innerText = `Instructions For Meal Number ${recipe.id}`;
    InstHeader.classList.add('array-header');
    ulInst.append(InstHeader);
    containerInfo.append(ulInst);

    for(let i = 0; i < recipe.instructions.length; i++ ){
        let li = document.createElement('li');
        li.innerText = `${recipe.instructions[i]}`;
        ulInst.append(li);
    }
    /*other info */
    let otherInfo = document.createElement('div');
    otherInfo.innerText = `
                    Preperation Time Minutes : ${recipe.prepTimeMinutes}
                    Cook Time Minutes : ${recipe.cookTimeMinutes},
                    Servings: ${recipe.servings},
                    Cuisine: ${recipe.cuisine},
                    Calories Per Serving :  ${recipe.caloriesPerServing}`;
    containerInfo.append(otherInfo);

    /*image */
    let image = document.createElement('img');
    image.src = `${recipe.image}`;
    image.classList.add('image');
    containerInfo.append(image);

    /*tags */
    let tags = document.createElement('ul');
    let tagHeader = document.createElement('p');
    tagHeader.innerText = `Tags`;
    tagHeader.classList.add('array-header');
    tags.append(tagHeader);
    containerInfo.append(tags);
    for(let i = 0 ; i < recipe.tags.length;i++){
        let li = document.createElement('li');
        li.innerText = `${recipe.tags[i]}`;
        tags.append(li);
    }
    /*other info 2 */
    let ratings = document.createElement('div');
    ratings.innerText = `
                    rating : ${recipe.rating},
                    reviewCount : ${recipe.reviewCount}`
    containerInfo.append(ratings);
    /*mealType */
    let mealType = document.createElement('p');
    mealType.innerText = `${recipe.mealType}`;
    containerInfo.append(mealType);
}

let url = 'https://dummyjson.com/recipes';

 fetch(url)
        .then(res => res.json())
        .then(data => {
            data.recipes.map((recipe) => {
                makeRecipe(recipe);
        });
        });