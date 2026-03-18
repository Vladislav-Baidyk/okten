/*
#HmvAfRQM

– взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
 Відобразити всі поля кожної корзини.
 */
var mainContainer = document.getElementById('container');
var buttonLoad = document.getElementById('load');
buttonLoad.classList.add('button-load');
buttonLoad.innerText = 'LOAD';
mainContainer.append(buttonLoad);
var current = 0;
var addObjects = 10;
function showElem(cartO) {
    /*creating a container */
    var container = document.createElement('div');
    container.classList.add('cart-container');
    var mainContainer = document.getElementById('container');
    var numberCart = document.createElement('h1');
    numberCart.innerText = "".concat(cartO.id);
    container.append(numberCart);
    mainContainer.append(container);
    var _loop_1 = function (i) {
        /* box container*/
        var cart = document.createElement('button');
        cart.classList.add('cart');
        container.append(cart);
        /*cart-content*/
        var cartContent = document.createElement('div');
        cartContent.classList.add('cart-content');
        cart.append(cartContent);
        /* image*/
        var picture = document.createElement('img');
        picture.src = cartO.products[i].thumbnail;
        picture.classList.add('cart-image');
        picture.style.display = 'block';
        cartContent.append(picture);
        /*info */
        var productsInfo = document.createElement('div');
        productsInfo.style.display = 'none';
        productsInfo.innerHTML = "\n            <h3>".concat(cartO.products[i].title, "</h3>\n            <p>Price: $").concat(cartO.products[i].price, "</p>\n            <p>Quantity: ").concat(cartO.products[i].quantity, "</p>\n            <p>Total: $").concat(cartO.products[i].total, "</p>\n            <p>Id: $").concat(cartO.products[i].id, "</p>\n            <p>Discounted Total: ").concat(cartO.products[i].discountedTotal, "</p>\n            <p>Discount Percentage: $").concat(cartO.products[i].discountPercentage, "</p>\n        ");
        cartContent.append(productsInfo);
        cart.onclick = function () {
            if (productsInfo.style.display === 'block') {
                picture.style.display = 'block';
                productsInfo.style.display = 'none';
            }
            else {
                picture.style.display = 'none';
                productsInfo.style.display = 'block';
            }
        };
    };
    for (var i = 0; i < cartO.products.length; i++) {
        _loop_1(i);
    }
}
var load = function () {
    fetch('https://dummyjson.com/carts')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        var nextId = current + addObjects;
        data.carts.slice(current, nextId).map(function (cart) {
            showElem(cart);
        });
        current = nextId;
        if (nextId >= data.total) {
            buttonLoad.style.display = 'none';
        }
    });
};
load();
buttonLoad.onclick = function () { return load(); };
