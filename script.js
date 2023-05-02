// PEGA O A DIV QUE TEM A ID DE 'SHOP'
let shop = document.querySelector("#shop");

// ARRAY COM TODOS OS PRODUTOS
let shopItems = [
    {
        id: 1,
        name: "Casual Shirt",
        price: 45,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "images/img-1.jpg"
    }, 
    {
        id: 2,
        name: "Office Shirt",
        price: 100,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "images/img-2.jpg"
    }, 
    {
        id: 3,
        name: "T Shirt",
        price: 25,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "images/img-3.jpg"
    }, 
    {
        id: 4,
        name: "Mens Suit",
        price: 300,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "images/img-4.jpg"
    }
];

// ARRAY COM OS PRODUTOS DO CARRINHO
let basket = [
];

// EXIBI TODOS OS PRODUTOS DO ARRAY 'shopItems' 
let generateShop = () => {
    return shop.innerHTML = shopItems.map((item) => {
        return `
        <div id="´product-id-${item.id}" class="item">
            <img src="${item.img}" alt="">
            <div class="details">
                <h3> ${item.name} </h3>
                <p> ${item.desc}</p>
                <div class="price-quantity">
                    <h2> $${item.price},00</h2>
                    <div class="button">
                        <i class="bi bi-bag-plus-fill" onclick="addItemOnCart(${item.id}, '${item.name}')"></i>
                        <i class="bi bi-bag-x-fill" onclick="removeItemOnCart(${item.id}, '${item.name}')"></i>
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
}

// REMOVE UM ITEM DO CARRINHO
let removeItemOnCart = (id, name) => {
    // PROCURA NO CARRINHO O PRODUTO COM ID FORNECIDO
    let search = basket.find((item) => item.id == id);

    // CASO NÃO EXISTA, SIGNIFICA QUE O PRODUTO JÁ FOI REMOVIDO
    if(search === undefined) {
        alert("O produto '" + name + "' já foi removido");
        //return;
    }
    // CASO EXISTA, O PRODUTO É REMOVIDO DO CARRINHO
    else {
        search.item -= 1;
        alert("Produto '" + name + "' removido");
        if(search.item === 0) {
            basket = basket.filter(search => search.item != 0)
        }
    }
}

