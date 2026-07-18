// ========================================== //
// ДАННЫЕ ТОВАРОВ                             //
// ========================================== //
const productsData = [
    // === CROSS ===
    { id: 1, name: 'Beaded Chain Necklace "Sanahin"', collection: 'CROSS', category: 'Колье', price: 12000, image: 'img/cross/necklace-sanahin.jpg', symbolism: 'Вдохновлено монастырем Санаин — символом духовной мудрости и вечности.' },
    { id: 2, name: 'Ring "Sanahin"', collection: 'CROSS', category: 'Кольцо', price: 7000, image: 'img/cross/ring-sanahin.jpg', symbolism: 'Кольцо, вдохновленное архитектурой Санаина — символ веры и защиты.' },
    { id: 3, name: 'Earrings "Akhtala"', collection: 'CROSS', category: 'Серьги', price: 8300, image: 'img/cross/earrings-akhtala.jpg', symbolism: 'Вдохновлено крепостью Ахтала — символом стойкости и силы духа.' },
    { id: 4, name: 'Earring "Etchmiadzin"', collection: 'CROSS', category: 'Серьги', price: 35000, image: 'img/cross/earring-etchmiadzin.jpg', symbolism: 'Вдохновлено Эчмиадзинским собором — символом веры и единства.' },
    { id: 5, name: 'Necklace "Etchmiadzin"', collection: 'CROSS', category: 'Колье', price: 28000, image: 'img/cross/necklace-etchmiadzin.jpg', symbolism: 'Колье, вдохновленное Эчмиадзином — символом духовного наследия.' },

    // === VISHAP ===
    { id: 6, name: 'Necklace "Vishap"', collection: 'VISHAP', category: 'Колье', price: 71000, image: 'img/vishap/necklace-vishap.jpg', symbolism: 'Дракон Вишап — символ победы над страхами и внутренней силы.' },
    { id: 7, name: 'Palm Bracelet "Vishap"', collection: 'VISHAP', category: 'Браслет', price: 42000, image: 'img/vishap/palm-bracelet-vishap.jpg', symbolism: 'Браслет-талисман с символом Вишапа — защита и мощь.' },
    { id: 8, name: 'Earrings "Vishap"', collection: 'VISHAP', category: 'Серьги', price: 28000, image: 'img/vishap/earrings-vishap.jpg', symbolism: 'Серьги с драконом Вишапом — символ преодоления.' },
    { id: 9, name: 'Bracelet "Vishap"', collection: 'VISHAP', category: 'Браслет', price: 25000, image: 'img/vishap/bracelet-vishap.jpg', symbolism: 'Браслет Вишап — личный трофей над невзгодами.' },

    // === PEARL ===
    { id: 10, name: 'Pearl Necklace "Haghartsin"', collection: 'PEARL', category: 'Колье', price: 19000, image: 'img/pearl/necklace-haghartsin.jpg', symbolism: 'Вдохновлено монастырем Агарцин — символом тишины и благодати.' },
    { id: 11, name: 'Pearl Earrings "Haghartsin"', collection: 'PEARL', category: 'Серьги', price: 31000, image: 'img/pearl/earrings-haghartsin.jpg', symbolism: 'Жемчужные серьги — символ женственности и изящества.' },
    { id: 12, name: 'Earrings "Shushan Drop"', collection: 'PEARL', category: 'Серьги', price: 16000, image: 'img/pearl/earrings-shushan-drop.jpg', symbolism: 'Серьги-капли «Шушан» — символ нежности и красоты.' },
    { id: 13, name: 'Pearl Ring "Vanq"', collection: 'PEARL', category: 'Кольцо', price: 15500, image: 'img/pearl/ring-vanq.jpg', symbolism: 'Кольцо с жемчугом — символ чистоты и мудрости.' },
    { id: 14, name: 'Pearl Bracelet "Vanq"', collection: 'PEARL', category: 'Браслет', price: 18000, image: 'img/pearl/bracelet-vanq.jpg', symbolism: 'Жемчужный браслет — символ вечной женственности.' },

    // === VARD ===
    { id: 15, name: 'Earrings "Vard & Poosh"', collection: 'VARD', category: 'Серьги', price: 13000, image: 'img/vard/earrings-vard-poosh.jpg', symbolism: 'Символ цветка и роста — женское начало и плодородие.' },
    { id: 16, name: 'Ring "Vard & Poosh"', collection: 'VARD', category: 'Кольцо', price: 8600, image: 'img/vard/ring-vard-poosh.jpg', symbolism: 'Кольцо с цветочным орнаментом — символ жизни и процветания.' },
    { id: 17, name: 'Necklace "Vard"', collection: 'VARD', category: 'Колье', price: 9500, image: 'img/vard/necklace-vard.jpg', symbolism: 'Колье «Вард» — символ цветущей жизни и красоты.' },
    { id: 18, name: 'Ring "Push"', collection: 'VARD', category: 'Кольцо', price: 2600, image: 'img/vard/ring-push.jpg', symbolism: 'Кольцо «Пуш» — символ нежности и любви.' }
];

// ========================================== //
// ХИТЫ ПРОДАЖ (3 ТОВАРА)                    //
// ========================================== //
const hitsIds = [1, 6, 10];

// ========================================== //
// КОРЗИНА (РАБОТА С LOCALSTORAGE)           //
// ========================================== //
function getCart() {
    try {
        return JSON.parse(localStorage.getItem('cart')) || [];
    } catch {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cart = getCart();
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(el => {
        el.textContent = total;
    });
}

function addToCart(productId) {
    const cart = getCart();
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }
    saveCart(cart);
    alert('✅ Товар добавлен в корзину!');
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    renderCart();
}

function changeQuantity(productId, delta) {
    const cart = getCart();
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }
    saveCart(cart);
    renderCart();
}

function getCartTotal() {
    const cart = getCart();
    return cart.reduce((sum, item) => {
        const product = productsData.find(p => p.id === item.id);
        return sum + (product ? product.price * item.quantity : 0);
    }, 0);
}

// ========================================== //
// ОТРИСОВКА ТОВАРОВ                         //
// ========================================== //
function renderProducts(containerId, products, isCatalog = false) {
    const container = document.getElementById(containerId);
    if (!container) return;
    if (!products || products.length === 0) {
        container.innerHTML = '<p style="text-align:center;color:#B0A8A0;">Товаров не найдено</p>';
        return;
    }
    container.innerHTML = products.map(p => `
        <div class="product-card">
            <a href="product.html?id=${p.id}" class="product-card__link">
                <div class="product-card__image">
                    <img src="${p.image}" alt="${p.name}" onerror="this.src='img/placeholder.jpg'">
                </div>
                <div class="product-card__info">
                    <h3 class="product-card__title">${p.name}</h3>
                    <p class="product-card__collection">${p.collection}</p>
                    <div class="product-card__price">${p.price.toLocaleString()} ₽</div>
                    ${!isCatalog ? `<button class="btn btn-small add-to-cart-btn" data-id="${p.id}" onclick="event.preventDefault(); addToCart(${p.id});">В корзину</button>` : ''}
                </div>
            </a>
        </div>
    `).join('');
}

// ========================================== //
// ГЛАВНАЯ СТРАНИЦА                          //
// ========================================== //
function renderHomePage() {
    // Хиты продаж
    const hits = productsData.filter(p => hitsIds.includes(p.id));
    renderProducts('hitsGrid', hits);

    // Коллекции
    const collections = ['CROSS', 'VISHAP', 'PEARL', 'VARD'];
    const collectionDescriptions = {
        'CROSS': 'Tribute to Faith',
        'VISHAP': 'Win and Embrace the Power',
        'PEARL': 'Quiet Beauty',
        'VARD': 'Growth and Fertility'
    };
    const container = document.getElementById('collectionsGrid');
    if (container) {
        container.innerHTML = collections.map(c => `
            <a href="collection.html?collection=${c}" class="collection-card">
                <div class="collection-card__image">
                    <img src="img/${c.toLowerCase()}/collection-${c.toLowerCase()}.jpg" alt="${c}" onerror="this.style.background='#F5F0EB'; this.style.height='220px';">
                </div>
                <div class="collection-card__info">
                    <h3 class="collection-card__name">${c}</h3>
                    <p class="collection-card__description">${collectionDescriptions[c] || ''}</p>
                </div>
            </a>
        `).join('');
    }

    // Футер — коллекции
    const footerContainer = document.getElementById('footerCollections');
    if (footerContainer) {
        footerContainer.innerHTML = collections.map(c => `
            <li><a href="collection.html?collection=${c}">${c}</a></li>
        `).join('');
    }
}

// ========================================== //
// КАТАЛОГ (С ФИЛЬТРАМИ)                     //
// ========================================== //
let filteredProducts = [...productsData];

function renderCatalog() {
    const container = document.getElementById('catalogGrid');
    if (!container) return;

    // Фильтры
    const collectionFilters = document.getElementById('collectionFilters');
    const categoryFilters = document.getElementById('categoryFilters');

    if (collectionFilters) {
        const collections = [...new Set(productsData.map(p => p.collection))];
        collectionFilters.innerHTML = collections.map(c => `
            <label>
                <input type="checkbox" class="filter-checkbox" data-type="collection" value="${c}" checked>
                ${c}
            </label>
        `).join('');
    }

    if (categoryFilters) {
        const categories = [...new Set(productsData.map(p => p.category))];
        categoryFilters.innerHTML = categories.map(c => `
            <label>
                <input type="checkbox" class="filter-checkbox" data-type="category" value="${c}" checked>
                ${c}
            </label>
        `).join('');
    }

    // Применяем фильтры
    applyFilters();

    // Очистка фильтров
    const clearBtn = document.getElementById('clearFilters');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            document.querySelectorAll('.filter-checkbox').forEach(cb => cb.checked = true);
            applyFilters();
        });
    }

    // События на чекбоксы
    document.querySelectorAll('.filter-checkbox').forEach(cb => {
        cb.addEventListener('change', applyFilters);
    });
}

function applyFilters() {
    const selectedCollections = [];
    const selectedCategories = [];

    document.querySelectorAll('.filter-checkbox[data-type="collection"]:checked').forEach(cb => {
        selectedCollections.push(cb.value);
    });
    document.querySelectorAll('.filter-checkbox[data-type="category"]:checked').forEach(cb => {
        selectedCategories.push(cb.value);
    });

    filteredProducts = productsData.filter(p => {
        const matchCollection = selectedCollections.length === 0 || selectedCollections.includes(p.collection);
        const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(p.category);
        return matchCollection && matchCategory;
    });

    renderProducts('catalogGrid', filteredProducts, true);
    const countEl = document.getElementById('productCount');
    if (countEl) {
        countEl.textContent = `${filteredProducts.length} товаров`;
    }
}

// ========================================== //
// СТРАНИЦА КОЛЛЕКЦИИ                        //
// ========================================== //
let currentCollection = 'CROSS';

function renderCollectionPage(collectionName) {
    const params = new URLSearchParams(window.location.search);
    const urlCollection = params.get('collection');
    const collection = collectionName || urlCollection || currentCollection || 'CROSS';
    currentCollection = collection;

    const products = productsData.filter(p => p.collection === collection);

    // Заголовки
    const titleEl = document.getElementById('collectionTitle');
    const subtitleEl = document.getElementById('collectionSubtitle');
    const descEl = document.getElementById('collectionDescription');

    const subtitles = {
        'CROSS': 'TRIBUTE TO FAITH, CREATION, AND CONTINUITY',
        'VISHAP': 'WIN AND EMBRACE THE POWER',
        'PEARL': 'QUIET BEAUTY AND TIMELESS FEMININITY',
        'VARD': 'GROWTH AND FERTILITY'
    };
    const descriptions = {
        'CROSS': 'Inspired by seven sacred landmarks, "Cross" Collection is a tribute to faith, creation, and continuity. The collection unfolds through seven distinct lines, echoing the seven days of creation. Each takes its name from an Armenian church, not as a replica of its architecture, but as an interpretation of its spirit.',
        'VISHAP': 'In mythology, Vishap represents power and fear, but in Vishap, it symbolizes triumph. Wearing a Vishap piece signifies overcoming inner struggles and emerging victorious. The design reflects a fierce battle, with the dragon now a symbol of strength and power. It\'s a personal trophy, marking the wearer\'s mastery over adversity and embodying both power and control.',
        'PEARL': 'Hidden among the forests of Tavush, Haghartsin Monastery has long been a place of tranquility and reflection. Surrounded by nature and known for its elegant architectural details, it inspires a collection defined by softness and grace. Pearls bring lightness to each design, creating pieces that embody quiet beauty and timeless femininity.',
        'VARD': 'In Armenian culture, Rose is a generalized name for flowers, symbolizing growth and fertility. This is evidenced by the embroidered floral motifs bearing the name "vard" (rose), which adorn women\'s headbands, the metal headpieces of girls from Vaspurakan and Upper Hayk, and the jewelry that crowns the tassels of women\'s fez hats in Shirak-Karin. The presence of floral motifs in women\'s traditional attire is entirely justified, as women were entrusted with the mission of bearing future generations.'
    };

    if (titleEl) titleEl.textContent = collection;
    if (subtitleEl) subtitleEl.textContent = subtitles[collection] || '';
    if (descEl) descEl.textContent = descriptions[collection] || '';

    renderProducts('collectionGrid', products, true);

    // Активная кнопка
    document.querySelectorAll('.collection-nav__btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.collection === collection);
    });
}

// Инициализация кнопок навигации
function initCollectionNav() {
    const buttons = document.querySelectorAll('.collection-nav__btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            const collection = this.dataset.collection;
            renderCollectionPage(collection);
            if (history.pushState) {
                const url = new URL(window.location);
                url.searchParams.set('collection', collection);
                window.history.pushState({}, '', url);
            }
        });
    });
}

// ========================================== //
// СТРАНИЦА ТОВАРА                           //
// ========================================== //
function renderProductPage() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const product = productsData.find(p => p.id === id);

    if (!product) {
        const nameEl = document.getElementById('productName');
        if (nameEl) nameEl.textContent = 'Товар не найден';
        return;
    }

    const nameEl = document.getElementById('productName');
    const collectionEl = document.getElementById('productCollection');
    const priceEl = document.getElementById('productPrice');
    const breadcrumbEl = document.getElementById('productBreadcrumb');
    const imgEl = document.getElementById('productImage');
    const symbolismEl = document.getElementById('productSymbolism');

    if (nameEl) nameEl.textContent = product.name;
    if (collectionEl) collectionEl.textContent = product.collection;
    if (priceEl) priceEl.textContent = `${product.price.toLocaleString()} ₽`;
    if (breadcrumbEl) breadcrumbEl.textContent = product.name;
    if (imgEl) {
        imgEl.src = product.image;
        imgEl.alt = product.name;
        imgEl.onerror = function() { this.src = 'img/placeholder.jpg'; };
    }
    if (symbolismEl) {
        symbolismEl.textContent = product.symbolism || 'Символика этого украшения отражает древние армянские традиции и верования.';
    }

    // Кнопка "В корзину"
    const addBtn = document.getElementById('addToCartBtn');
    if (addBtn) {
        addBtn.addEventListener('click', () => addToCart(product.id));
    }
}

// ========================================== //
// КОРЗИНА                                    //
// ========================================== //
function renderCart() {
    const cart = getCart();
    const emptyEl = document.getElementById('cartEmpty');
    const contentEl = document.getElementById('cartContent');
    const itemsEl = document.getElementById('cartItems');
    const totalEl = document.getElementById('cartTotal');

    if (!itemsEl) return;

    if (cart.length === 0) {
        if (emptyEl) emptyEl.style.display = 'block';
        if (contentEl) contentEl.style.display = 'none';
        return;
    }

    if (emptyEl) emptyEl.style.display = 'none';
    if (contentEl) contentEl.style.display = 'block';

    let html = '';
    cart.forEach(item => {
        const product = productsData.find(p => p.id === item.id);
        if (!product) return;
        const total = product.price * item.quantity;
        html += `
            <div class="cart-item">
                <div class="cart-item__image">
                    <img src="${product.image}" alt="${product.name}" onerror="this.src='img/placeholder.jpg'">
                </div>
                <div class="cart-item__info">
                    <div class="cart-item__title">${product.name}</div>
                    <div class="cart-item__collection">${product.collection}</div>
                    <div class="cart-item__price">${product.price.toLocaleString()} ₽</div>
                </div>
                <div class="cart-item__quantity">
                    <button onclick="changeQuantity(${product.id}, -1)">−</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity(${product.id}, 1)">+</button>
                </div>
                <div style="font-weight:700;min-width:80px;text-align:right;">${total.toLocaleString()} ₽</div>
                <button class="cart-item__remove" onclick="removeFromCart(${product.id})">🗑️</button>
            </div>
        `;
    });

    itemsEl.innerHTML = html;
    if (totalEl) {
        totalEl.textContent = `${getCartTotal().toLocaleString()} ₽`;
    }
}

// ========================================== //
// КОНТАКТЫ (ФОРМА)                          //
// ========================================== //
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const successEl = document.getElementById('formSuccess');
        if (successEl) {
            successEl.style.display = 'block';
        }
        form.reset();
        setTimeout(() => {
            if (successEl) {
                successEl.style.display = 'none';
            }
        }, 5000);
    });
}


function initBurgerMenu() {
    const burger = document.getElementById('burgerBtn');
    const nav = document.getElementById('mainNav');
    if (burger && nav) {
        burger.addEventListener('click', function() {
            nav.classList.toggle('nav--open');
            this.classList.toggle('active');
        });
    }
}

// ========================================== //
// ЗАПУСК ПРИ ЗАГРУЗКЕ СТРАНИЦЫ            //
// ========================================== //
document.addEventListener('DOMContentLoaded', function() {
    // Обновить счётчик корзины
    updateCartCount();

    // Бургер-меню
    initBurgerMenu();

    // Форма контактов
    initContactForm();

    // Определяем страницу по наличию элементов
    if (document.getElementById('hitsGrid')) {
        renderHomePage();
    }

    if (document.getElementById('catalogGrid')) {
        renderCatalog();
    }

    if (document.getElementById('collectionGrid')) {
        renderCollectionPage();
        initCollectionNav();
    }

    if (document.getElementById('productName')) {
        renderProductPage();
    }

    if (document.getElementById('cartItems')) {
        renderCart();
    }

    // Обновить корзину при изменении в других вкладках
    window.addEventListener('storage', function(e) {
        if (e.key === 'cart') {
            updateCartCount();
            if (document.getElementById('cartItems')) {
                renderCart();
            }
        }
    });
});