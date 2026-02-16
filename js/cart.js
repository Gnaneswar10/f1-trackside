// Shopping Cart Functionality for PitStop Arena
document.addEventListener('DOMContentLoaded', function () {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartTotal = document.getElementById('cart-total');
    const clearCartBtn = document.getElementById('clear-cart');

    // Load and display cart
    function loadCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="cart__empty">
                    <h2>Your cart is empty</h2>
                    <p>Start shopping to add items to your cart!</p>
                    <a href="index.html" class="btn">Browse Products</a>
                </div>
            `;
            updateTotals(0);
            return;
        }

        cartItemsContainer.innerHTML = '';
        cart.forEach((item, index) => {
            const cartItem = createCartItemElement(item, index);
            cartItemsContainer.appendChild(cartItem);
        });

        updateTotals(calculateTotal(cart));
    }

    // Create cart item element
    function createCartItemElement(item, index) {
        const div = document.createElement('div');
        div.className = 'cart__item';
        div.innerHTML = `
            <div class="cart__item-image">
                <img src="${item.image}" alt="${item.title}" onerror="this.src='img/placeholder.jpg'">
            </div>
            <div class="cart__item-details">
                <h3>${item.title}</h3>
                <p class="cart__item-price">$${item.price.toFixed(2)}</p>
            </div>
            <div class="cart__item-quantity">
                <button onclick="decreaseQuantity(${index})">-</button>
                <span>${item.quantity}</span>
                <button onclick="increaseQuantity(${index})">+</button>
            </div>
            <div class="cart__item-total">
                $${(item.price * item.quantity).toFixed(2)}
            </div>
            <button class="cart__item-remove" onclick="removeItem(${index})">
                <i class="fas fa-trash"></i>
            </button>
        `;
        return div;
    }

    // Calculate total
    function calculateTotal(cart) {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    // Update totals display
    function updateTotals(total) {
        if (cartSubtotal) cartSubtotal.textContent = `$${total.toFixed(2)}`;
        if (cartTotal) cartTotal.textContent = `$${total.toFixed(2)}`;
    }

    // Increase quantity
    window.increaseQuantity = function (index) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart[index].quantity++;
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
        updateCartCount();
    };

    // Decrease quantity
    window.decreaseQuantity = function (index) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
            localStorage.setItem('cart', JSON.stringify(cart));
            loadCart();
            updateCartCount();
        }
    };

    // Remove item
    window.removeItem = function (index) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
        updateCartCount();
    };

    // Clear cart
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to clear your cart?')) {
                localStorage.removeItem('cart');
                loadCart();
                updateCartCount();
            }
        });
    }

    // Update cart count in navbar
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartCount = document.querySelector('.nav__cart-count');
        if (cartCount) {
            cartCount.textContent = totalItems;
            if (totalItems > 0) {
                cartCount.style.display = 'flex';
            } else {
                cartCount.style.display = 'none';
            }
        }
    }

    // Initialize
    loadCart();
    updateCartCount();

    // Checkout form handling
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Order placed successfully! This is a demo site.');
            localStorage.removeItem('cart');
            window.location.href = 'index.html';
        });
    }
});
