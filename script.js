// Lista de itens do carrinho
let cart = [];

// Função para adicionar itens ao carrinho
function addToCart(productName, productPrice) {
    // Adicionar produto ao carrinho
    cart.push({ name: productName, price: parseFloat(productPrice) });
    updateCart();
}

// Função para atualizar o carrinho
function updateCart() {
    const cartItemsList = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    // Limpar lista de itens do carrinho
    cartItemsList.innerHTML = "";

    // Calcular o total
    let total = 0;

    // Adicionar cada item ao carrinho
    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartItemsList.appendChild(listItem);
        total += item.price;
    });

    // Atualizar o total
    totalPriceElement.textContent = total.toFixed(2);
}

// Adicionar evento aos botões de "Adicionar ao Carrinho"
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const productName = button.getAttribute("data-name");
        const productPrice = button.getAttribute("data-price");
        addToCart(productName, productPrice);
    });
});
