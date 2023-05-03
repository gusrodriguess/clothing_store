let label = document.querySelector("#label");
let shoppingCart = document.querySelector("#shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let numberOfItemsOnCart = (id) => {
    let cartIcon = document.querySelector("#cartAmount");
    cartIcon.innerHTML = basket.length;
}
numberOfItemsOnCart();

let generateCartItems = () => {
    if(basket.length !== 0) {
        return shoppingCart.innerHTML = basket.map((item) => {
            let search = shopItems.find((x) => x.id === item.id) || [];
            return `
                    <div class="cart-item">
                            <img src="${search.img}" alt="" />
                            <div class="details">
                                <div class="title-price-x">
                                    <h4 class="title-price">
                                        <p>${search.name}</p>
                                    </h4>
                                    <i class="bi bi-bag-x-fill"></i>
                                </div>
                                <div class="cart-buttons">
                                    <p class="cart-item-price">$ ${search.price}</p>
                                    <div class="buttons">
                                        <i class="bi bi-dash-lg"></i>
                                        <div class="quantity"> 0 </div>
                                        <i class="bi bi-plus-lg"></i>
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