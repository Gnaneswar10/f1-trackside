// Main JavaScript for PitStop Arena
document.addEventListener('DOMContentLoaded', function () {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav__menu-item a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });

    // Cookie Banner
    const cookieBanner = document.querySelector('.cookie-banner');
    const cookieAccept = document.getElementById('cookie-accept');

    // Check if cookie consent was already given
    if (localStorage.getItem('cookieConsent') === 'accepted') {
        if (cookieBanner) {
            cookieBanner.classList.add('hidden');
        }
    }

    if (cookieAccept) {
        cookieAccept.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'accepted');
            cookieBanner.classList.add('hidden');
        });
    }

    // Render Products
    const productsGrid = document.getElementById('products-grid');

    if (productsGrid && typeof productsData !== 'undefined') {
        renderProducts(productsData);
    }

    // Add to Cart Functionality
    function addToCart(productId) {
        const product = productsData.find(p => p.id === productId);
        if (!product) return;

        // Get existing cart or initialize empty array
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Check if product already in cart
        const existingIndex = cart.findIndex(item => item.id === productId);

        if (existingIndex > -1) {
            cart[existingIndex].quantity++;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();

        // Show feedback
        showNotification('Product added to cart!');
    }

    // Render Products Function
    function renderProducts(products) {
        productsGrid.innerHTML = '';

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'products__card';
            productCard.innerHTML = `
                <div class="products__image">
                    <img src="${product.image}" alt="${product.title}" onerror="this.src='img/placeholder.jpg'">
                </div>
                <div class="products__info">
                    <h3 class="products__title">${product.title}</h3>
                    <p class="products__price">$${product.price.toFixed(2)}</p>
                    <button class="products__btn" onclick="addToCartHandler(${product.id})">
                        Add to Cart
                    </button>
                </div>
            `;
            productsGrid.appendChild(productCard);
        });
    }

    // Global handler for add to cart
    window.addToCartHandler = function (productId) {
        addToCart(productId);
    };

    // Update Cart Count
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

    // Show Notification
    function showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background-color: #e10600;
            color: white;
            padding: 1.5rem 3rem;
            border-radius: 5px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            z-index: 9999;
            font-weight: 700;
            animation: slideIn 0.3s ease;
        `;

        document.body.appendChild(notification);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Initialize cart count on page load
    updateCartCount();

    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});
