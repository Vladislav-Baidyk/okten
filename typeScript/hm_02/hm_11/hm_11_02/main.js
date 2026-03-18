/*
– взяти https://dummyjson.com/docs/recipes та
 вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.
 */
var container = document.createElement('div');
container.classList.add('container');
document.body.append(container);
var styles = [
    { diff: 'easy' },
    { diff: 'medium' }
];
var makeRecipe = function (recipe) {
    var containerInfo = document.createElement('div');
    containerInfo.classList.add('container-info');
    container.append(containerInfo);
    /*id */
    var id = document.createElement('h1');
    id.innerText = "".concat(recipe.id, " ").concat(recipe.name);
    containerInfo.append(id);
    /*diff */
    var diff = document.createElement('div');
    var diffStyle = styles.find(function (style) { return style.diff === recipe.difficulty.toLowerCase(); });
    diff.classList.add("diff");
    diff.classList.add("".concat(diffStyle ? diffStyle.diff : recipe.difficulty.toLowerCase()));
    containerInfo.append(diff);
    /*ingridients */
    var ulIng = document.createElement('ul');
    var IngHeader = document.createElement('p');
    IngHeader.innerText = "Ingridients For Meal Number ".concat(recipe.id);
    IngHeader.classList.add('array-header');
    ulIng.append(IngHeader);
    containerInfo.append(ulIng);
    for (var i = 0; i < recipe.ingredients.length; i++) {
        var li = document.createElement('li');
        li.innerText = "".concat(recipe.ingredients[i]);
        ulIng.append(li);
    }
    /*instructions */
    var ulInst = document.createElement('ul');
    var InstHeader = document.createElement('p');
    InstHeader.innerText = "Instructions For Meal Number ".concat(recipe.id);
    InstHeader.classList.add('array-header');
    ulInst.append(InstHeader);
    containerInfo.append(ulInst);
    for (var i = 0; i < recipe.instructions.length; i++) {
        var li = document.createElement('li');
        li.innerText = "".concat(recipe.instructions[i]);
        ulInst.append(li);
    }
    /*other info */
    var otherInfo = document.createElement('div');
    otherInfo.innerText = "\n                    Preperation Time Minutes : ".concat(recipe.prepTimeMinutes, "\n                    Cook Time Minutes : ").concat(recipe.cookTimeMinutes, ",\n                    Servings: ").concat(recipe.servings, ",\n                    Cuisine: ").concat(recipe.cuisine, ",\n                    Calories Per Serving :  ").concat(recipe.caloriesPerServing);
    containerInfo.append(otherInfo);
    /*image */
    var image = document.createElement('img');
    image.src = "".concat(recipe.image);
    image.classList.add('image');
    containerInfo.append(image);
    /*tags */
    var tags = document.createElement('ul');
    var tagHeader = document.createElement('p');
    tagHeader.innerText = "Tags";
    tagHeader.classList.add('array-header');
    tags.append(tagHeader);
    containerInfo.append(tags);
    for (var i = 0; i < recipe.tags.length; i++) {
        var li = document.createElement('li');
        li.innerText = "".concat(recipe.tags[i]);
        tags.append(li);
    }
    /*other info 2 */
    var ratings = document.createElement('div');
    ratings.innerText = "\n                    rating : ".concat(recipe.rating, ",\n                    reviewCount : ").concat(recipe.reviewCount);
    containerInfo.append(ratings);
    /*mealType */
    var mealType = document.createElement('p');
    mealType.innerText = "".concat(recipe.mealType);
    containerInfo.append(mealType);
};
var url = 'https://dummyjson.com/recipes';
fetch(url)
    .then(function (res) { return res.json(); })
    .then(function (data) {
    data.recipes.map(function (recipe) {
        makeRecipe(recipe);
    });
});
