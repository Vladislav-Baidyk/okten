/*
#HmvAfRQM

– взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
 Відобразити всі поля кожної корзини.
 */
let mainContainer = document.getElementById('container');
let buttonLoad = document.getElementById('load');
buttonLoad.classList.add('button-load');
buttonLoad.innerText = 'LOAD';
mainContainer.append(buttonLoad);
let current = 0;
let addObjects = 10;
function showElem(cartO) {
    
    /*creating a container */
    let container = document.createElement('div');
    container.classList.add('cart-container')
    let mainContainer = document.getElementById('container');

    mainContainer.append(container);


    for(let i =0; i < cartO.products.length ; i++){
    /* box container*/
    let cart = document.createElement('button');
    cart.classList.add('cart');
    container.append(cart);
    /*cart-content*/
    let cartContent = document.createElement('div');
    cartContent.classList.add('cart-content');
    cart.append(cartContent);
    
    /* image*/
    let picture = document.createElement('img');
    picture.src = cartO.products[i].thumbnail;
    picture.classList.add('cart-image');
    picture.style.display = 'block';
    cartContent.append(picture);
    
    let text = document.createElement('h1');    
    text.style.display = 'none';
    text.innerText  = ' chuk ';
    cartContent.append(text);
        
    cart.onclick = () => {
        if (text.style.display === 'block') {
            picture.style.display = 'block';
            text.style.display = 'none';
        } else {
            picture.style.display = 'none';
            text.style.display = 'block';
        }
    };
            /*info */
    }

    }
    


let load = () => {fetch('https://dummyjson.com/carts')
    .then(response => response.json())
    .then(data => {
           let nextId = current + addObjects;
           data.carts.slice(current,nextId).map((cart) => {
            showElem(cart);
           });
           current = nextId;
           if(nextId >= data.total){
            buttonLoad.style.display = 'none';
           }
    });
}
load();
buttonLoad.onclick = () => load();