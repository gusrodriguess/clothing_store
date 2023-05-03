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
let addItemOnCart = (id, name) => {
    // PROCURA NO CARRINHO O PRODUTO COM ID FORNECIDO
    let search = basket.find((item) => item.id == id);
    
    // CASO NÃO EXISTA, ADICIONA O PRODUTO AO CARRINHO
    if(search === undefined) {
        basket.push({
            id: id,
            item: 1,
        });
        alert("O produto '" + name + "' foi adicionado ao carrinho");
    // CASO JÁ EXISTA, O PRODUTO NÃO É ADICIONADO
    } else {
        alert("O produto '" + name + "' já está no carrinho");
    }
    localStorage.setItem("data", JSON.stringify(basket));
    numberOfItemsOnCart(id);
    // update(id);
}

// REMOVE BUTTON
// <i class="bi bi-bag-x-fill" onclick="removeItemOnCart(${item.id}, '${item.name}')"></i>

// REMOVE UM ITEM DO CARRINHO
let removeItemOnCart = (id, name) => {
    // PROCURA NO CARRINHO O PRODUTO COM ID FORNECIDO
    let search = basket.find((item) => item.id == id);

    // CASO NÃO EXISTA, SIGNIFICA QUE O PRODUTO JÁ FOI REMOVIDO
    if(search === undefined) {
        alert("O produto '" + name + "' já foi removido");
    }
    // CASO EXISTA, O PRODUTO É REMOVIDO DO CARRINHO
    else {
        search.item = 0;
        alert("Produto '" + name + "' removido");
        if(search.item === 0) {
            basket = basket.filter(search => search.item != 0)
        }
    }
    localStorage.setItem("data", JSON.stringify(basket));
    numberOfItemsOnCart(id);
    // update(id);
}

// let update = (id) => {
//     let search = basket.find((item) => item.id === id);
//     numberOfItemsOnCart();
// }

let numberOfItemsOnCart = (id) => {
    let cartIcon = document.querySelector("#cartAmount");
    cartIcon.innerHTML = basket.length;
}

numberOfItemsOnCart();