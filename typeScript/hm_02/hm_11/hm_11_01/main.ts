/*
#HmvAfRQM

– взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
 Відобразити всі поля кожної корзини.
 */

 interface CartI{
    id:number;
    products:{
    id:number;
    title:string;
    price:number;
    quantity:number;
    total:number;
    discountPercentage:number;
    discountedTotal:number;
    thumbnail:string;
    }[];
 }
let mainContainer:HTMLElement = document.getElementById('container');
let buttonLoad:HTMLElement = document.getElementById('load');
buttonLoad.classList.add('button-load');
buttonLoad.innerText = 'LOAD';
mainContainer.append(buttonLoad);
let current:number = 0;
let addObjects:number = 10;
function showElem(cartO:CartI) {
    
    /*creating a container */
    let container:HTMLDivElement = document.createElement('div');
    container.classList.add('cart-container')
    let mainContainer:HTMLElement = document.getElementById('container');


    let numberCart:HTMLHeadingElement = document.createElement('h1');
    numberCart.innerText = `${cartO.id}`;
    container.append(numberCart);
    mainContainer.append(container);
            for(let i:number =0; i < cartO.products.length ; i++){
    
    
    /* box container*/
    let cart:HTMLButtonElement = document.createElement('button');
    cart.classList.add('cart');
    container.append(cart);
    /*cart-content*/
    let cartContent:HTMLDivElement = document.createElement('div');
    cartContent.classList.add('cart-content');
    cart.append(cartContent);
    
    /* image*/
    let picture:HTMLImageElement = document.createElement('img');
    picture.src = cartO.products[i].thumbnail;
    picture.classList.add('cart-image');
    picture.style.display = 'block';
    cartContent.append(picture);
    
                /*info */
 let productsInfo:HTMLDivElement = document.createElement('div');
        productsInfo.style.display = 'none';
        productsInfo.innerHTML = `
            <h3>${cartO.products[i].title}</h3>
            <p>Price: $${cartO.products[i].price}</p>
            <p>Quantity: ${cartO.products[i].quantity}</p>
            <p>Total: $${cartO.products[i].total}</p>
            <p>Id: $${cartO.products[i].id}</p>
            <p>Discounted Total: ${cartO.products[i].discountedTotal}</p>
            <p>Discount Percentage: $${cartO.products[i].discountPercentage}</p>
        `;
        cartContent.append(productsInfo);
    cart.onclick = () => {
        if (productsInfo.style.display === 'block') {
            picture.style.display = 'block';
            productsInfo.style.display = 'none';
        } else {
            picture.style.display = 'none';
            productsInfo.style.display = 'block';
        }
    };

    }
    }

    


let load: () => void = () => {fetch('https://dummyjson.com/carts')
    .then(response => response.json())
    .then(data => {
           let nextId:number = current + addObjects;
           data.carts.slice(current,nextId).map((cart:CartI) => {
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