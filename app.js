// Products data with all 18 products
const products = [
    {
        "id": 1,
        "name": "Bracelets brésiliens modèle chevron",
        "description": "Très jolis petits bracelets brésiliens réalisés à la main par mes soins.Une multitude de couleurs à associer, ils sont relativement discrets et vous permettent une touche finale à votre tenue vestimentaire",
        "price": 15.00,
        "images": [
            "./assets/ProductPics/1.jpg",],
        "stock": 15,
        "rating": 4.8,
        "category": "women"
    },
    {
        "id": 2,
        "name": "Bracelets brésiliens modèle chevron",
        "description": "Très jolis petits bracelets brésiliens réalisés à la main par mes soins.Une multitude de couleurs à associer, ils sont relativement discrets et vous permettent une touche finale à votre tenue vestimentaire",
        "price": 17.00,
        "images": [
            "./assets/ProductPics/2.jpg"
        ],
        "stock": 18,
        "rating": 4.6,
        "category": "men"
    },
    {
        "id": 3,
        "name": "bracelets brésiliens motifs cœur",
        "description": "bracelets brésiliens motifs cœur, faits main par mes soins❤️, parce qu'on a toujours besoin d'amour.Bracelet intemporel, en été comme en hiver ",
        "price": 13.00,
        "images": [
            "./assets/ProductPics/3.jpg",
        ],
        "stock": 12,
        "rating": 4.9,
        "category": "women"
    },
    {
        "id": 4,
        "name": "bracelet brésilien torsadés",
        "description": "Ces jolis bracelets brésiliens sont tissés à la main par mes soins.Ils sont réglables et ajustables grâce aux deux tresses.N'hésitez pas à me contacter si vous souhaitez des coloris particuliers car les possibilités sont grandes",
        "price": 7.00,
        "images": [
            "./assets/ProductPics/4.jpg"
        ],
        "stock": 20,
        "rating": 4.5,
        "category": "unisex"
    },
    {
        "id": 5,
        "name": "cow bracelet",
        "description": "Ces jolis bracelets brésiliens sont tissés à la main par mes soins.Ils sont réglables et ajustables grâce aux deux tresses.N'hésitez pas à me contacter si vous souhaitez des coloris particuliers car les possibilités sont grandes",
        "price": 25.00,
        "images": [
            "./assets/ProductPics/5.jpg",],
        "stock": 25,
        "rating": 4.7,
        "category": "women"
    },
    {
        "id": 6,
        "name": "bracelet brésilien tressée avec coquillages cauris",
        "description": "Ce bracelet  minimaliste est fabriqué à la main avec des fils de coton de qualité supérieure, il est orné d'un cquillage ✨Ce bracelet brésilien est également parfait pour la plage, grâce à sa résistance à l'eau et son design élégant qui conviendra à tous les styles. ",
        "price": 9.00,
        "images": [
            "./assets/ProductPics/6.jpg"
        ],
        "stock": 18,
        "rating": 4.4,
        "category": "men"
    },
    {
        "id": 7,
        "name": "bracelet bresilen coeur oeil",
        "description": "Ces adorables bracelets coeurs rouges pour femme sont fabriqués à partir de fils de haute qualité sélectionnés pour leur résistance et leurs couleurs vives. Tissés à la main à l'aide d'une méthode de nouage spéciale, les bracelets avec des motifs amoureux sont à la fois résistants et durables. Les bracelets smiley avec de jolis cœurs avec des yeux sont un bon choix pour la Saint-Valentin. Les cœurs sont tissés selon un schéma spécifique et chaque nœud est soigneusement placé pour créer un look réaliste",
        "price": 23.00,
        "images": [
            "./assets/ProductPics/1.png",
            "./assets/ProductPics/3.png",
            "./assets/ProductPics/4.png",
            "./assets/ProductPics/5.png"
        ],
        "stock": 16,
        "rating": 4.9,
        "category": "women"
    },
    {
        "id": 8,
        "name": "bracelet bresilen spider man",
        "description": "Le bracelet pour fille Vsco est réglable et s'adapte à différentes tailles de poignet. Mesure environ 1,7 cm de large et peut être nouée plus ou moins serrée selon vos préférences personnelles. Léger et confortable à utiliser, ce bracelet est le choix parfait pour un port quotidien.",
        "price": 35.00,
        "images": [
            "./assets/ProductPics/7.jpg"
        ],
        "stock": 30,
        "rating": 4.3,
        "category": "men"
    },
    {
        "id": 9,
        "name": "Bracelets brésiliens modèle zigzag",
        "description": "🌈 Bracelet brésilien fait main – Porte-bonheur coloré ! 🌈Ajoutez une touche de couleur et de symbolisme à votre poignet avec ce bracelet brésilien tissé à la main ! Traditionnellement, on fait un vœu en l’attachant, et lorsque le bracelet se détache naturellement, le vœu est censé se réaliser. ✨🎨 Personnalisation disponible :Une envie de motif ou de couleurs en particulier ?Envoyez-moi un petit message, je serai ravie de créer un bracelet rien que pour vous !🧵 S’adapte à vous✔️ Ajustable selon la taille de votre poignet✔️ Léger et confortable à porter au quotidien📦 Livraison fiable avec suivi !Toutes les commandes sont envoyées en Lettre Verte avec suivi, pour assurer une livraison sécurisée.💡 Idée cadeau originale : Parfait pour les amis, la famille ou simplement pour se faire plaisir !Fait avec amour et patience ❤️, chaque bracelet est unique !",
        "price": 19.00,
        "images": [
            "./assets/ProductPics/A1.png",],
        "stock": 14,
        "rating": 4.7,
        "category": "unisex"
    },
    {
        "id": 10,
        "name": "bracelet brésilien rond - set de deux",
        "description": "Bracelets brésiliens fait mainPour poignet ou cheville : faites comme vous voulez !🤞 Faites un vœu pendant que vous nouez le bracelet puis attendez qu'il tombe pour que le vœu se réalise 🤞☀️ Parfait pour cet été ! ☀️Idéal à offrir en bracelet d'amitié, ou encore pour des anniversaires ou autres occasions ❣️N'hésitez pas à me contacter, je répondrai avec plaisir à toutes vos questions 😉Bonne nouvelle : tous nos colis sont désormais livrés avec suivi afin de vous garantir la meilleur expérience possible ! 🌟",
        "price": 17.00,
        "images": [
            "./assets/ProductPics/A2.png",],
        "stock": 19,
        "rating": 4.6,
        "category": "women"
    },
    {
        "id": 11,
        "name": "un set des bracelets brésiliens summery ",
        "description": "Bracelets brésiliens fait mainPour poignet ou cheville: faites comme vous voulez !🤞 Faites un vœu pendant que vous nouez le bracelet puis attendez qu'il tombe pour que le vœu se réalise 🤞☀️ Parfait pour cet été! ☀️Idéal à offrir en bracelet d'amitié, ou encore pour des anniversaires ou autres occasions ❣️N'hésitez pas à me contacter, je répondrai avec plaisir à toutes vos questions 😉Bonne nouvelle: tous nos colis sont désormais livrés avec suivi afin de vous garantir la meilleur expérience possible! 🌟",
        "price": 25.00,
        "images": [
            "./assets/ProductPics/A3.png"
        ],
        "stock": 22,
        "rating": 4.4,
        "category": "men"
    },
    {
        "id": 12,
        "name": "un set des bracelets brésiliens - 3 bracelets rond",
        "description": "Bracelets brésiliens fait mainPour poignet ou cheville: faites comme vous voulez !🤞 Faites un vœu pendant que vous nouez le bracelet puis attendez qu'il tombe pour que le vœu se réalise 🤞☀️ Parfait pour cet été! ☀️Idéal à offrir en bracelet d'amitié, ou encore pour des anniversaires ou autres occasions ❣️N'hésitez pas à me contacter, je répondrai avec plaisir à toutes vos questions 😉Bonne nouvelle: tous nos colis sont désormais livrés avec suivi afin de vous garantir la meilleur expérience possible! 🌟",
        "price": 25.00,
        "images": [
            "./assets/ProductPics/8.jpg"
        ],
        "stock": 16,
        "rating": 4.8,
        "category": "women"
    },
];

// Telegram configuration
const TELEGRAM_BOT_TOKEN = '8250051619:AAH1PVu5Z5gVdtrvR4PaNI7ghg-VWLA0WEw';
const TELEGRAM_CHAT_ID = '-4946979320';

// Global variables
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentFilter = 'all';
let currentImageIndex = {};

// DOM elements
const productsGrid = document.getElementById('products-grid');
const cartBtn = document.getElementById('cart-btn');
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const cartOverlay = document.getElementById('cart-overlay');
const cartClose = document.getElementById('cart-close');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const checkoutModal = document.getElementById('checkout-modal');
const checkoutOverlay = document.getElementById('checkout-overlay');
const checkoutClose = document.getElementById('checkout-close');
const checkoutForm = document.getElementById('checkout-form');
const orderSummary = document.getElementById('order-summary');
const themeToggle = document.getElementById('theme-toggle');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const b2bForm = document.getElementById('b2b-form');
const contactForm = document.getElementById('contact-form');
const heroBtn = document.querySelector('.hero__cta');

// Initialize app
document.addEventListener('DOMContentLoaded', function () {
    initializeTheme();
    renderProducts();
    updateCartDisplay();
    setupEventListeners();
    setupScrollAnimations();
    setupSmoothScrolling();
    animateStats();
    initializeImageCarousels();
});

// Theme functionality
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('.theme-icon');
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Format price with Tunisian Dinar
function formatPrice(price) {
    return `${price.toFixed(2)} د.ت`;
}

// Product rendering
function renderProducts(filter = 'all') {
    productsGrid.innerHTML = '';

    const filteredProducts = filter === 'all'
        ? products
        : products.filter(product => product.category === filter);

    filteredProducts.forEach((product, index) => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);

        // Initialize current image index for each product
        currentImageIndex[product.id] = 0;

        // Animate cards on load
        setTimeout(() => {
            productCard.classList.add('fade-in');
        }, index * 100);
    });

    // Setup image carousels after rendering
    setTimeout(() => {
        setupImageCarousels();
    }, 500);
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    const hasMultipleImages = product.images.length > 1;
    const imagesHtml = product.images.map((image, index) =>
        `<img src="${image}" alt="${product.name}" loading="lazy" class="${index === 0 ? 'active' : ''}" data-index="${index}">`
    ).join('');

    const carouselNav = hasMultipleImages ? `
        <div class="carousel-nav">
            ${product.images.map((_, index) =>
        `<div class="carousel-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>`
    ).join('')}
        </div>
        <button class="carousel-arrows carousel-prev" data-direction="-1">‹</button>
        <button class="carousel-arrows carousel-next" data-direction="1">›</button>
    ` : '';

    card.innerHTML = `
        <div class="product-image image-carousel" data-product-id="${product.id}">
            ${imagesHtml}
            ${carouselNav}
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-details">
                <span class="product-price">${formatPrice(product.price)}</span>
                <div class="product-rating">
                    <span class="rating-stars">${generateStars(product.rating)}</span>
                    <span class="rating-value">(${product.rating})</span>
                </div>
            </div>
            <p class="product-stock ${product.stock < 10 ? 'stock-low' : ''}">
                ${product.stock} in stock
            </p>
            <button class="add-to-cart btn btn--primary" 
                    onclick="addToCart(${product.id})"
                    ${product.stock === 0 ? 'disabled' : ''}>
                ${product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
        </div>
    `;
    return card;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    let stars = '';

    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }
    if (halfStar) {
        stars += '☆';
    }
    while (stars.length < 5) {
        stars += '☆';
    }

    return stars;
}

// Image carousel functionality
function initializeImageCarousels() {
    products.forEach(product => {
        currentImageIndex[product.id] = 0;
    });
}

function setupImageCarousels() {
    // Setup carousel navigation
    document.querySelectorAll('.image-carousel').forEach(carousel => {
        const productId = parseInt(carousel.dataset.productId);
        const product = products.find(p => p.id === productId);

        if (!product || product.images.length <= 1) return;

        // Carousel dots
        const dots = carousel.querySelectorAll('.carousel-dot');
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showImage(productId, index);
            });
        });

        // Carousel arrows
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');

        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                changeImage(productId, -1);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                changeImage(productId, 1);
            });
        }

        // Auto-slide functionality (optional)
        let autoSlideInterval;

        carousel.addEventListener('mouseenter', () => {
            if (autoSlideInterval) {
                clearInterval(autoSlideInterval);
            }
        });

        carousel.addEventListener('mouseleave', () => {
            if (product.images.length > 1) {
                autoSlideInterval = setInterval(() => {
                    changeImage(productId, 1);
                }, 3000);
            }
        });

        // Touch/swipe support for mobile
        let startX = 0;
        let startY = 0;

        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });

        carousel.addEventListener('touchend', (e) => {
            if (!startX || !startY) return;

            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;

            const diffX = startX - endX;
            const diffY = startY - endY;

            // Check if horizontal swipe is more significant than vertical
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    // Swipe left - next image
                    changeImage(productId, 1);
                } else {
                    // Swipe right - previous image
                    changeImage(productId, -1);
                }
            }

            startX = 0;
            startY = 0;
        });
    });
}

function showImage(productId, imageIndex) {
    const carousel = document.querySelector(`[data-product-id="${productId}"]`);
    if (!carousel) return;

    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Ensure index is within bounds
    imageIndex = Math.max(0, Math.min(imageIndex, product.images.length - 1));
    currentImageIndex[productId] = imageIndex;

    // Update images
    const images = carousel.querySelectorAll('img');
    images.forEach((img, index) => {
        img.classList.toggle('active', index === imageIndex);
    });

    // Update dots
    const dots = carousel.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === imageIndex);
    });
}

function changeImage(productId, direction) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const currentIndex = currentImageIndex[productId] || 0;
    let newIndex = currentIndex + direction;

    // Loop around
    if (newIndex >= product.images.length) {
        newIndex = 0;
    } else if (newIndex < 0) {
        newIndex = product.images.length - 1;
    }

    showImage(productId, newIndex);
}

// Cart functionality
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || product.stock === 0) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        if (existingItem.quantity < product.stock) {
            existingItem.quantity += 1;
            showNotification('Item quantity updated!', 'success');
        } else {
            showNotification('Not enough stock available!', 'error');
            return;
        }
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
        showNotification('Added to cart!', 'success');
    }

    updateCartDisplay();
    saveCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    saveCart();
    renderCartItems();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    const product = products.find(p => p.id === productId);

    if (item && product) {
        const newQuantity = item.quantity + change;

        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else if (newQuantity <= product.stock) {
            item.quantity = newQuantity;
            updateCartDisplay();
            saveCart();
            renderCartItems();
        } else {
            showNotification('Not enough stock available!', 'error');
        }
    }
}

function updateCartDisplay() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    cartCount.textContent = totalItems;
    cartTotal.textContent = formatPrice(totalPrice);

    if (totalItems > 0) {
        cartCount.style.display = 'flex';
    } else {
        cartCount.style.display = 'none';
    }
}

function renderCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.images[0]}" alt="${item.name}" class="cart-item__image">
            <div class="cart-item__details">
                <div class="cart-item__name">${item.name}</div>
                <div class="cart-item__price">${formatPrice(item.price)}</div>
            </div>
            <div class="cart-item__controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                <button class="quantity-btn" onclick="removeFromCart(${item.id})" style="margin-left: 1rem; color: red;">×</button>
            </div>
        </div>
    `).join('');
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Modal functionality
function openModal(modal) {
    modal.classList.remove('hidden');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.classList.remove('active');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Checkout functionality
function renderOrderSummary() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = total > 50 ? 0 : 8.00;
    const finalTotal = total + shipping;

    orderSummary.innerHTML = `
        <h4>Order Summary</h4>
        ${cart.map(item => `
            <div class="order-item">
                <span>${item.name} x${item.quantity}</span>
                <span>${formatPrice(item.price * item.quantity)}</span>
            </div>
        `).join('')}
        <div class="order-item">
            <span>Shipping</span>
            <span>${shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
        </div>
        <div class="order-total">
            <span>Total: ${formatPrice(finalTotal)}</span>
        </div>
    `;
}

// Telegram integration
async function sendToTelegram(message) {
    try {
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            })
        });

        if (!response.ok) {
            throw new Error('Failed to send message');
        }

        return true;
    } catch (error) {
        console.error('Telegram error:', error);
        return false;
    }
}

function formatOrderMessage(orderData) {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = total > 50 ? 0 : 5.99;
    const finalTotal = total + shipping;

    let message = `🛍️ <b>NEW ORDER</b>\n\n`;
    message += `👤 <b>Customer:</b> ${orderData.name}\n`;
    message += `📧 <b>Email:</b> ${orderData.email}\n`;
    message += `📱 <b>Phone:</b> ${orderData.phone}\n`;
    message += `🏠 <b>Address:</b> ${orderData.address}, ${orderData.city}\n\n`;

    message += `🛒 <b>Items:</b>\n`;
    cart.forEach(item => {
        message += `• ${item.name} x${item.quantity} - ${formatPrice(item.price * item.quantity)}\n`;
    });

    message += `\n💰 <b>Subtotal:</b> ${formatPrice(total)}\n`;
    message += `🚚 <b>Shipping:</b> ${shipping === 0 ? 'Free' : formatPrice(shipping)}\n`;
    message += `💳 <b>Total:</b> ${formatPrice(finalTotal)}`;

    return message;
}

function formatB2BMessage(formData) {
    let message = `🏢 <b>B2B INQUIRY</b>\n\n`;
    message += `🏬 <b>Company:</b> ${formData.companyName}\n`;
    message += `👤 <b>Contact:</b> ${formData.contactPerson}\n`;
    message += `📧 <b>Email:</b> ${formData.email}\n`;
    message += `📱 <b>Phone:</b> ${formData.phone}\n\n`;
    message += `💬 <b>Message:</b>\n${formData.message}`;

    return message;
}

function formatContactMessage(formData) {
    let message = `📧 <b>CONTACT FORM</b>\n\n`;
    message += `👤 <b>Name:</b> ${formData.name}\n`;
    message += `📧 <b>Email:</b> ${formData.email}\n`;
    if (formData.subject) {
        message += `📝 <b>Subject:</b> ${formData.subject}\n`;
    }
    message += `\n💬 <b>Message:</b>\n${formData.message}`;

    return message;
}

// Notification system
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10B981' : '#EF4444'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 3000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Animation functions
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for animations
    document.querySelectorAll('.section-header, .about__text, .about__image, .b2b-form, .contact__content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

function animateStats() {
    const stats = document.querySelectorAll('.stat__number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumber(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    stats.forEach(stat => observer.observe(stat));
}

function animateNumber(element) {
    const target = parseInt(element.dataset.target);
    const duration = 2000;
    const start = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);

        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(easeOutQuart * target);

        element.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Event listeners
function setupEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);

    // Navigation toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Cart modal
    cartBtn.addEventListener('click', () => {
        renderCartItems();
        openModal(cartModal);
    });

    cartOverlay.addEventListener('click', () => closeModal(cartModal));
    cartClose.addEventListener('click', () => closeModal(cartModal));

    // Checkout modal
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showNotification('Your cart is empty!', 'error');
            return;
        }
        closeModal(cartModal);
        renderOrderSummary();
        openModal(checkoutModal);
    });

    checkoutOverlay.addEventListener('click', () => closeModal(checkoutModal));
    checkoutClose.addEventListener('click', () => closeModal(checkoutModal));

    // Product filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            currentFilter = filter;
            renderProducts(filter);
        });
    });

    // Hero CTA
    heroBtn.addEventListener('click', () => {
        document.querySelector('#products').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    // Checkout form
    checkoutForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(checkoutForm);
        const orderData = Object.fromEntries(formData.entries());

        const submitBtn = checkoutForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Processing...';
        submitBtn.disabled = true;

        try {
            const message = formatOrderMessage(orderData);
            const success = await sendToTelegram(message);

            if (success) {
                showNotification('Order placed successfully! We\'ll contact you soon.', 'success');
                cart = [];
                updateCartDisplay();
                saveCart();
                closeModal(checkoutModal);
                checkoutForm.reset();
            } else {
                throw new Error('Failed to send order');
            }
        } catch (error) {
            showNotification('Failed to place order. Please try again.', 'error');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });

    // B2B form
    b2bForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(b2bForm);
        const inquiryData = Object.fromEntries(formData.entries());

        const submitBtn = b2bForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        try {
            const message = formatB2BMessage(inquiryData);
            const success = await sendToTelegram(message);

            if (success) {
                showNotification('Inquiry sent successfully! We\'ll get back to you soon.', 'success');
                b2bForm.reset();
            } else {
                throw new Error('Failed to send inquiry');
            }
        } catch (error) {
            showNotification('Failed to send inquiry. Please try again.', 'error');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });

    // Contact form
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const contactData = Object.fromEntries(formData.entries());

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            try {
                const message = formatContactMessage(contactData);
                const success = await sendToTelegram(message);

                if (success) {
                    showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
                    contactForm.reset();
                } else {
                    throw new Error('Failed to send message');
                }
            } catch (error) {
                showNotification('Failed to send message. Please try again.', 'error');
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }

    // Close modals on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal(cartModal);
            closeModal(checkoutModal);
        }
    });

    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Scroll effects
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'var(--color-store-surface)';
        header.style.boxShadow = 'none';
    }
});

// Loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});