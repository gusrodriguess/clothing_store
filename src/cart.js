let label = document.querySelector("#label");
let shoppingCart = document.querySelector("#shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

// ATUALIZA O NÚMERO DE PRODUTOS NO CARRINHO
let numberOfItemsOnCart = () => {
    let cartIcon = document.querySelector("#cartAmount");
    cartIcon.innerHTML = basket.length;
}
numberOfItemsOnCart();

let generateCartItems = () => {
    if(basket.length !== 0) {
        return shoppingCart.innerHTML = basket.map((item) => {
            let search = shopItems.find((info) => info.id === item.id) || [];
            return `
                    <div class="cart-item">
                            <img src="${search.img}" alt="" />
                            <div class="details">
                                <div class="title-price-x">
                                    <h4 class="title-price">
                                        <p>${search.name}</p>
                                    </h4>
                                    <i onclick="removeItemOnCart(${search.id})" class="bi bi-bag-x-fill"></i>
                                </div>
                                <div class="cart-buttons">
                                    <p class="cart-item-price">$ ${search.price}</p>
                                    <div class="buttons">
                                        <i onclick="decrement(${search.id})" class="bi bi-dash-lg"></i>
                                        <div class="quantity" id="${search.id}"> ${item.item} </div>
                                        <i onclick="increment(${search.id})" class="bi bi-plus-lg"></i>
                                    </div>
                                </div>
                            </div>
                    </div> 
                `
        }).join("");
    } else {
       shoppingCart.innerHTML = ``;
       label.innerHTML = `
       <h2> Cart is Empty </h2>
       <a href="index.html">
            <button class="HomeBtn"> Back to home </button>
       </a>
       `
    }
}
generateCartItems();

// AUMENTA A QUANTIDADE DO PRODUTO NO CARRINHO
let increment = (id) => {
    let search = basket.find((item) => item.id == id);
    search.item += 1;

    localStorage.setItem("data", JSON.stringify(basket));
    // ATUALIZA A QUANTIDADE DE ITENS DO PRODUTO NO CARRINHO
    document.getElementById(id).innerHTML = search.item
    generateCartItems();
    totalAmount();
};

// DIMINUI A QUANTIDADE DO PRODUTO NO CARRINHO
let decrement = (id) => {
    let search = basket.find((item) => item.id == id);
    search.item -= 1;
    if(search.item === 0) {
        basket = basket.filter((search => search.item != 0))
        generateCartItems();
    }
    localStorage.setItem("data", JSON.stringify(basket));
    numberOfItemsOnCart();
    totalAmount();

    // ATUALIZA A QUANTIDADE DE ITENS DO PRODUTO NO CARRINHO
    document.getElementById(id).innerHTML = search.item
};

// REMOVE UM ITEM DO CARRINHO
let removeItemOnCart = (id) => {
    // PROCURA NO CARRINHO O PRODUTO COM ID FORNECIDO
    let search = basket.find((item) => item.id == id);
    search.item = 0;
    search.item
        if(search.item === 0) {
            basket = basket.filter(search => search.item != 0)
            generateCartItems();
        }
    
    localStorage.setItem("data", JSON.stringify(basket));
    numberOfItemsOnCart();
    totalAmount();
}

let clearCart = () => {
    basket = [];
    generateCartItems();
    numberOfItemsOnCart();
    localStorage.setItem("data", JSON.stringify(basket));
}

let totalAmount = () => {
    if(basket.length !== 0) {
        let amount = basket.map((item) => {
            let search = shopItems.find((info) => info.id === item.id) || [];
            return item.item * search.price;
        }).reduce((x,y) => x + y, 0)
        label.innerHTML = `
            <h2> Total Bill: $ ${amount}</h2>
            <button class="checkout"> Checkout </button>
            <button onclick="clearCart()" class="removeAll"> Clear Cart </button>
        `
    } else return
}
totalAmount();