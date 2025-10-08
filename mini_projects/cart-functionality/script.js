document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: "Product 1", price: 10.25 },
        { id: 2, name: "Product 2", price: 15.65 },
        { id: 3, name: "Product 3", price: 17.90 }
    ];

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const emptyCartMessage = document.getElementById("empty-cart");
    const cartPrice = document.getElementById("total-price");
    const checkoutBtn = document.getElementById("checkout-btn");
    const cartDiv = document.getElementById("cart-total");

    // Display product list
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product');
        productItem.innerHTML = `
            <span>${product.name} - $${product.price.toFixed(2)}</span>
            <button data-id="${product.id}">Add to cart</button>
        `;
        productList.appendChild(productItem);
    });

    // Add product to cart
    productList.addEventListener('click', (e) => {
        if (e.target.tagName === "BUTTON") {
            const productID = parseInt(e.target.getAttribute('data-id'));
            const product = products.find(product => productID === product.id);
            addToCart(product);
        }
    });

    function addToCart(product) {
        cart.push(product);
        saveCart();
        renderCart();
    }

    function renderCart() {
        cartItems.innerHTML = '';
        let totalPrice = 0;

        if (cart.length > 0) {
            emptyCartMessage.classList.add('hidden');
            cartDiv.classList.remove('hidden');

            cart.forEach(item => {
                totalPrice += item.price;
                const cartItemDiv = document.createElement('div');
                cartItemDiv.classList.add('cartItem');
                cartItemDiv.innerHTML = `
                    <span>${item.name} - $${item.price.toFixed(2)}</span>
                    <button data-id="${item.id}">Remove</button>
                `;
                cartItems.appendChild(cartItemDiv);
            });

            cartPrice.textContent = `$${totalPrice.toFixed(2)}`;
        } else {
            emptyCartMessage.classList.remove('hidden');
            cartDiv.classList.add('hidden');
            cartPrice.textContent = `$0.00`;
        }
    }

    // Remove item from cart
    cartItems.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const itemId = parseInt(e.target.getAttribute('data-id'));
            const itemIndex = cart.findIndex(item => item.id === itemId);
            if (itemIndex !== -1) {
                cart.splice(itemIndex, 1);
                saveCart();
                renderCart();
            }
        }
    });

    // Save cart to localStorage
    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    // Checkout button
    checkoutBtn.addEventListener('click', () => {
        if (cart.length > 0) {
            alert("Checkout successfully!");
            cart.length = 0;
            saveCart();
            renderCart();
        } else {
            alert("Your cart is empty!");
        }
    });

    // ✅ FIX: Load saved cart on page load
    renderCart();
});
