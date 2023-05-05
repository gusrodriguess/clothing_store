// PEGA O A DIV QUE TEM A ID DE 'SHOP'
let shop = document.querySelector("#shop");

// ARRAY COM OS PRODUTOS DO CARRINHO
// SE JÁ EXISTIR PRODUTOS NO CARRINHO, ELE PEGA ESSES ITENS
let basket = JSON.parse(localStorage.getItem("data")) || [];

// EXIBI TODOS OS PRODUTOS DO ARRAY 'shopItems' 
let generateShop = () => {
    return shop.innerHTML = shopItems.map((item) => {
        // let search = basket.find((item) => item.id == item.id) || [];
        return `
        <div id="´product-id-${item.id}" class="item">
            <img src="${item.img}" alt="">
            <div class="details">
                <h3> ${item.name} </h3>
                <p> ${item.desc}</p>
                <div class="price-quantity">
                    <h2> $ ${item.price}</h2>
                    <div class="button">
                        <i class="bi bi-bag-plus-fill" onclick="addItemOnCart(${item.id}, '${item.name}')"></i>
                    </div>
                </div>
            </div>
        </div>`
    }).join("");
}
generateShop();

// ADICIONA UM PRODUTO AO CARRINHO
let addItemOnCart = (id) => {
    // PROCURA NO CARRINHO O PRODUTO COM ID FORNECIDO
    let search = basket.find((item) => item.id == id);
    
    // CASO NÃO EXISTA, ADICIONA O PRODUTO AO CARRINHO
    if(search === undefined) {
        basket.push({
            id: id,
            item: 1,
        });
    }
    localStorage.setItem("data", JSON.stringify(basket));
    numberOfItemsOnCart();
}

// ATUALIZA O NÚMERO DE PRODUTOS NO CARRINHO
let numberOfItemsOnCart = () => {
    let cartIcon = document.querySelector("#cartAmount");
    cartIcon.innerHTML = basket.length;
}

numberOfItemsOnCart();