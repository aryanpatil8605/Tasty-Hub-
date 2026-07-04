/* ===== TASTY HUB – MAIN SCRIPT ===== */

// ── CONFIG ──────────────────────────────────────────────────────────────────
const FOOD_IMG_BASE = 'https://source.unsplash.com/400x300/?'; // fallback placeholder

// Food image map (use local images if available, else Unsplash keyword)
const IMG = {
  rice: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80',
  schezwan: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=400&q=80',
  noodles: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80',
  manchurian: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80',
  paneer: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80',
  springroll: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?w=400&q=80',
  momos: 'https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=400&q=80',
  coffee: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80',
  coldcoffee: 'https://images.unsplash.com/photo-1545665277-5937489579f2?w=400&q=80',
  shake: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80',
  tea: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80',
  mojito: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80',
  fries: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80',
  garlicbread: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?w=400&q=80',
  sandwich: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80',
  burger: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80',
  triplerice: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80',
  dragon: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80',
  loadedfries: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80',
  combo: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80',
  monster: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80',
  oreo: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80',
  limesoda: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80',
  cappuccino: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&q=80',
};

// ── MENU DATA ────────────────────────────────────────────────────────────────
const menuData = [
  // ── CHINESE ──
  { id: 1,  name: 'Veg Fried Rice',        cat: 'chinese', price: 80,  img: IMG.rice,       desc: 'Classic fried rice with fresh veggies and aromatic sauces.', badge: null },
  { id: 2,  name: 'Schezwan Fried Rice',   cat: 'chinese', price: 90,  img: IMG.schezwan,   desc: 'Spicy Schezwan-style fried rice with a fiery kick.', badge: 'bestseller' },
  { id: 3,  name: 'Triple Rice',           cat: 'chinese', price: 110, img: IMG.triplerice, desc: 'A triple combo of flavors — veg, Schezwan & fried.', badge: 'popular' },
  { id: 4,  name: 'Veg Noodles',           cat: 'chinese', price: 80,  img: IMG.noodles,    desc: 'Soft noodles tossed with fresh vegetables.', badge: null },
  { id: 5,  name: 'Hakka Noodles',         cat: 'chinese', price: 85,  img: IMG.noodles,    desc: 'Classic Hakka noodles with a hint of soy and pepper.', badge: 'bestseller' },
  { id: 6,  name: 'Schezwan Noodles',      cat: 'chinese', price: 90,  img: IMG.schezwan,   desc: 'Spicy Schezwan noodles for the heat lovers.', badge: null },
  { id: 7,  name: 'Triple Noodles',        cat: 'chinese', price: 110, img: IMG.noodles,    desc: 'Three noodle varieties in one satisfying bowl.', badge: null },
  { id: 8,  name: 'Veg Manchurian',        cat: 'chinese', price: 100, img: IMG.manchurian, desc: 'Crispy veg balls in a rich manchurian sauce.', badge: 'bestseller' },
  { id: 9,  name: 'Manchurian Gravy',      cat: 'chinese', price: 110, img: IMG.manchurian, desc: 'Veg manchurian in a thick, saucy gravy.', badge: null },
  { id: 10, name: 'Crispy Veg',            cat: 'chinese', price: 90,  img: IMG.manchurian, desc: 'Assorted crispy fried vegetables with dipping sauce.', badge: null },
  { id: 11, name: 'Paneer Chilli',         cat: 'chinese', price: 120, img: IMG.paneer,     desc: 'Soft paneer cubes tossed in spicy chilli sauce.', badge: 'popular' },
  { id: 12, name: 'Paneer Manchurian',     cat: 'chinese', price: 130, img: IMG.paneer,     desc: 'Paneer in a tangy, spicy manchurian sauce.', badge: null },
  { id: 13, name: 'Paneer Crispy',         cat: 'chinese', price: 120, img: IMG.paneer,     desc: 'Golden crispy fried paneer with sauces on the side.', badge: null },
  { id: 14, name: 'Spring Roll',           cat: 'chinese', price: 60,  img: IMG.springroll, desc: 'Crispy golden rolls packed with seasoned veggies.', badge: null },
  { id: 15, name: 'Momos (Steamed)',       cat: 'chinese', price: 70,  img: IMG.momos,      desc: 'Soft steamed dumplings with spicy chutney.', badge: 'bestseller' },
  { id: 16, name: 'Momos (Fried)',         cat: 'chinese', price: 80,  img: IMG.momos,      desc: 'Crispy fried dumplings — a crowd favourite.', badge: 'popular' },

  // ── CAFÉ ──
  { id: 17, name: 'Cold Coffee',           cat: 'cafe', price: 70,  img: IMG.coldcoffee, desc: 'Chilled, creamy cold coffee — the perfect pick-me-up.', badge: 'bestseller' },
  { id: 18, name: 'Chocolate Cold Coffee', cat: 'cafe', price: 80,  img: IMG.coldcoffee, desc: 'Rich chocolate blended with cold coffee bliss.', badge: null },
  { id: 19, name: 'Oreo Shake',            cat: 'cafe', price: 90,  img: IMG.shake,      desc: 'Thick Oreo milkshake — indulgent and delicious.', badge: 'popular' },
  { id: 20, name: 'KitKat Shake',          cat: 'cafe', price: 90,  img: IMG.shake,      desc: 'Creamy milkshake with crunchy KitKat pieces.', badge: null },
  { id: 21, name: 'Mango Shake',           cat: 'cafe', price: 80,  img: IMG.shake,      desc: 'Fresh mango blended into a thick, sweet shake.', badge: null },
  { id: 22, name: 'Strawberry Shake',      cat: 'cafe', price: 80,  img: IMG.shake,      desc: 'Sweet strawberry milkshake, smooth and refreshing.', badge: null },
  { id: 23, name: 'Vanilla Milkshake',     cat: 'cafe', price: 75,  img: IMG.shake,      desc: 'Classic vanilla milkshake, simple and satisfying.', badge: null },
  { id: 24, name: 'Hot Coffee',            cat: 'cafe', price: 50,  img: IMG.coffee,     desc: 'A comforting cup of freshly brewed hot coffee.', badge: null },
  { id: 25, name: 'Cappuccino',            cat: 'cafe', price: 60,  img: IMG.cappuccino, desc: 'Frothy cappuccino with rich espresso and milk foam.', badge: 'popular' },
  { id: 26, name: 'Tea',                   cat: 'cafe', price: 20,  img: IMG.tea,        desc: 'Classic Indian chai — warm, spiced, comforting.', badge: null },
  { id: 27, name: 'Lemon Tea',             cat: 'cafe', price: 30,  img: IMG.tea,        desc: 'Fresh lemon tea — light, tangy, and refreshing.', badge: null },
  { id: 28, name: 'Mojito',               cat: 'cafe', price: 60,  img: IMG.mojito,     desc: 'Minty mojito with a citrusy twist — super refreshing.', badge: 'popular' },
  { id: 29, name: 'Blue Lagoon',           cat: 'cafe', price: 70,  img: IMG.mojito,     desc: 'Vibrant blue lagoon drink — sweet and eye-catching.', badge: null },
  { id: 30, name: 'Fresh Lime Soda',       cat: 'cafe', price: 40,  img: IMG.limesoda,   desc: 'Sparkling lime soda — sweet or salted, your choice.', badge: null },

  // ── SNACKS ──
  { id: 31, name: 'French Fries',          cat: 'snacks', price: 60,  img: IMG.fries,      desc: 'Golden crispy fries — classic and irresistible.', badge: 'bestseller' },
  { id: 32, name: 'Peri Peri Fries',       cat: 'snacks', price: 70,  img: IMG.fries,      desc: 'Spicy peri peri seasoned fries with tangy dip.', badge: 'popular' },
  { id: 33, name: 'Cheese Fries',          cat: 'snacks', price: 80,  img: IMG.fries,      desc: 'Crispy fries loaded with melted cheese sauce.', badge: 'bestseller' },
  { id: 34, name: 'Garlic Bread',          cat: 'snacks', price: 50,  img: IMG.garlicbread, desc: 'Toasted bread with garlic butter — warm and fragrant.', badge: null },
  { id: 35, name: 'Cheese Garlic Bread',   cat: 'snacks', price: 65,  img: IMG.garlicbread, desc: 'Garlic bread loaded with melted cheese.', badge: 'popular' },
  { id: 36, name: 'Veg Sandwich',          cat: 'snacks', price: 55,  img: IMG.sandwich,   desc: 'Fresh veggie sandwich with mint chutney.', badge: null },
  { id: 37, name: 'Cheese Sandwich',       cat: 'snacks', price: 65,  img: IMG.sandwich,   desc: 'Grilled cheese sandwich — gooey and satisfying.', badge: null },
  { id: 38, name: 'Paneer Sandwich',       cat: 'snacks', price: 75,  img: IMG.sandwich,   desc: 'Spiced paneer filling in a toasted sandwich.', badge: null },
  { id: 39, name: 'Veg Burger',            cat: 'snacks', price: 70,  img: IMG.burger,     desc: 'Crispy veg patty burger with fresh toppings.', badge: null },
  { id: 40, name: 'Cheese Burger',         cat: 'snacks', price: 85,  img: IMG.burger,     desc: 'Juicy veg burger loaded with melted cheese.', badge: 'bestseller' },
  { id: 41, name: 'Paneer Burger',         cat: 'snacks', price: 90,  img: IMG.burger,     desc: 'Spiced paneer patty burger with special sauce.', badge: 'popular' },

  // ── SPECIALS ──
  { id: 42, name: 'Special Triple Rice',   cat: 'specials', price: 150, img: IMG.triplerice, desc: 'Our chef\'s ultimate triple rice creation — a must-try.', badge: 'special' },
  { id: 43, name: 'Dragon Paneer',         cat: 'specials', price: 160, img: IMG.dragon,     desc: 'Fiery dragon-spiced paneer — bold, intense flavors.', badge: 'special' },
  { id: 44, name: 'Special Loaded Fries',  cat: 'specials', price: 120, img: IMG.loadedfries, desc: 'Loaded fries with cheese, sauces and toppings galore.', badge: 'special' },
  { id: 45, name: 'Tasty Hub Combo Meal',  cat: 'specials', price: 200, img: IMG.combo,      desc: 'Rice + Manchurian + Drink — the ultimate combo.', badge: 'special' },
  { id: 46, name: 'Special Chinese Combo', cat: 'specials', price: 220, img: IMG.combo,      desc: 'Noodles + Rice + Starter + Drink — the feast combo.', badge: 'special' },
  { id: 47, name: 'Café Combo',            cat: 'specials', price: 130, img: IMG.combo,      desc: 'Sandwich + Cold Coffee + Fries — perfect café set.', badge: 'special' },
  { id: 48, name: 'Monster Cold Coffee',   cat: 'specials', price: 110, img: IMG.monster,    desc: 'Extra-large, double-shot cold coffee for true coffee fans.', badge: 'special' },
  { id: 49, name: 'Signature Oreo Blast',  cat: 'specials', price: 120, img: IMG.oreo,       desc: 'Layered Oreo shake with chocolate drizzle and whipped cream.', badge: 'special' },
  { id: 50, name: 'House Special Momos',   cat: 'specials', price: 100, img: IMG.momos,      desc: 'Pan-fried momos with chef\'s secret spicy dipping sauce.', badge: 'special' },
];

// ── CART STATE ────────────────────────────────────────────────────────────────
function getCart() {
  try { return JSON.parse(localStorage.getItem('th_cart') || '[]'); }
  catch { return []; }
}
function saveCart(cart) {
  localStorage.setItem('th_cart', JSON.stringify(cart));
}
function clearCart() {
  localStorage.removeItem('th_cart');
  updateCartUI();
}

// ── CART OPERATIONS ──────────────────────────────────────────────────────────
function addToCart(id, qty = 1) {
  const item = menuData.find(i => i.id === id);
  if (!item) return;
  const cart = getCart();
  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: item.id, name: item.name, price: item.price, img: item.img, qty });
  }
  saveCart(cart);
  updateCartUI();
  showToast(`${item.name} added to cart! 🛒`, 'success');
}

function updateCartQty(id, delta) {
  const cart = getCart();
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart.splice(cart.indexOf(item), 1);
  }
  saveCart(cart);
  updateCartUI();
  renderCartSidebar();
}

function removeFromCart(id) {
  const cart = getCart().filter(c => c.id !== id);
  saveCart(cart);
  updateCartUI();
  renderCartSidebar();
}

// ── CART UI ───────────────────────────────────────────────────────────────────
function updateCartUI() {
  const cart = getCart();
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  // Navbar cart count
  const badge = document.getElementById('cartCount');
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }

  // Floating cart
  const fc = document.getElementById('floatingCart');
  if (fc) {
    const fcItems = document.getElementById('fcItems');
    const fcPrice = document.getElementById('fcPrice');
    if (count > 0) {
      fc.classList.add('show');
      if (fcItems) fcItems.textContent = count + (count === 1 ? ' item' : ' items');
      if (fcPrice) fcPrice.textContent = '₹' + total;
    } else {
      fc.classList.remove('show');
    }
  }
}

function renderCartSidebar() {
  const cart = getCart();
  const body = document.getElementById('cartBody');
  const footer = document.getElementById('cartFooter');
  const summary = document.getElementById('cartSummary');
  if (!body) return;

  if (!cart.length) {
    body.innerHTML = `<div class="cart-empty"><div class="empty-icon">🛒</div><p>Your cart is empty.<br><a href="#menu" onclick="closeCart()" style="color:var(--orange);font-weight:600">Browse the menu →</a></p></div>`;
    if (footer) footer.style.display = 'none';
    return;
  }

  body.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=100&q=60'" />
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₹${item.price} each</div>
      </div>
      <div class="cart-item-qty">
        <button class="cqty-btn" onclick="updateCartQty(${item.id}, -1)">−</button>
        <span class="cqty-num">${item.qty}</span>
        <button class="cqty-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
      </div>
      <div class="cart-item-total">₹${item.price * item.qty}</div>
    </div>
  `).join('');

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const gst = Math.round(subtotal * 0.05);
  const grand = subtotal + gst;

  if (summary) {
    summary.innerHTML = `
      <div class="cart-summary-row"><span>Subtotal</span><span>₹${subtotal}</span></div>
      <div class="cart-summary-row"><span>GST (5%)</span><span>₹${gst}</span></div>
      <div class="cart-summary-row"><span>Delivery</span><span style="color:var(--success)">FREE</span></div>
      <div class="cart-summary-row total"><span>Grand Total</span><span style="color:var(--orange)">₹${grand}</span></div>
    `;
  }
  if (footer) footer.style.display = 'block';
}

function openCart() {
  renderCartSidebar();
  document.getElementById('cartOverlay')?.classList.add('show');
  document.getElementById('cartSidebar')?.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartOverlay')?.classList.remove('show');
  document.getElementById('cartSidebar')?.classList.remove('show');
  document.body.style.overflow = '';
}

function goToCheckout() {
  const cart = getCart();
  if (!cart.length) { showToast('Cart is empty!', 'error'); return; }
  window.location.href = 'checkout.html';
}

// ── MENU RENDERING ────────────────────────────────────────────────────────────
const quantities = {}; // Track selected quantities per card

function getQty(id) { return quantities[id] || 1; }

function changeQty(id, delta) {
  quantities[id] = Math.max(1, (quantities[id] || 1) + delta);
  const qtyEl = document.getElementById(`qty-${id}`);
  if (qtyEl) qtyEl.textContent = quantities[id];
}

function badgeHTML(badge) {
  if (!badge) return '';
  const map = {
    special: '<span class="badge badge-special">⭐ Chef\'s Special</span>',
    bestseller: '<span class="badge badge-bestseller">🔥 Best Seller</span>',
    popular: '<span class="badge badge-popular">👑 Popular</span>',
  };
  return map[badge] || '';
}

function createCard(item, compact = false) {
  return `
    <div class="food-card" data-id="${item.id}" data-cat="${item.cat}">
      <div class="food-card-img-wrap">
        <img class="food-card-img" src="${item.img}" alt="${item.name}"
          onerror="this.src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=60'" loading="lazy" />
        ${badgeHTML(item.badge)}
      </div>
      <div class="food-card-body">
        <div class="food-card-name">${item.name}</div>
        <div class="food-card-desc">${item.desc}</div>
        <div class="food-card-footer">
          <div>
            <div class="food-price">₹${item.price}</div>
          </div>
          <div style="display:flex;align-items:center;gap:8px">
            <div class="qty-control">
              <button class="qty-btn" onclick="changeQty(${item.id}, -1)" aria-label="Decrease">−</button>
              <span class="qty-num" id="qty-${item.id}">1</span>
              <button class="qty-btn" onclick="changeQty(${item.id}, 1)" aria-label="Increase">+</button>
            </div>
            <button class="add-to-cart-btn" id="atc-${item.id}" onclick="handleAddToCart(${item.id})" aria-label="Add ${item.name} to cart">
              + Add
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function handleAddToCart(id) {
  const qty = getQty(id);
  addToCart(id, qty);
  const btn = document.getElementById(`atc-${id}`);
  if (btn) {
    btn.classList.add('added');
    btn.textContent = '✓ Added';
    setTimeout(() => {
      btn.classList.remove('added');
      btn.textContent = '+ Add';
    }, 1500);
  }
  // Reset qty
  quantities[id] = 1;
  const qtyEl = document.getElementById(`qty-${id}`);
  if (qtyEl) qtyEl.textContent = '1';
}

function renderMenu(filter = 'all') {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;
  const items = filter === 'all' ? menuData.filter(i => i.cat !== 'specials') : menuData.filter(i => i.cat === filter);
  if (!items.length) {
    grid.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:40px 0;grid-column:1/-1">No items found.</p>';
    return;
  }
  grid.innerHTML = items.map(i => createCard(i)).join('');
}

function renderSpecials() {
  const grid = document.getElementById('specialsGrid');
  if (!grid) return;
  const specials = menuData.filter(i => i.cat === 'specials');
  grid.innerHTML = specials.map(i => createCard(i)).join('');
}

function renderPopular() {
  const scroll = document.getElementById('popularScroll');
  if (!scroll) return;
  const popular = menuData.filter(i => i.badge === 'bestseller' || i.badge === 'popular').slice(0, 10);
  scroll.innerHTML = popular.map(item => `
    <div class="popular-card" onclick="scrollToItem(${item.id})">
      <img src="${item.img}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&q=60'" loading="lazy" />
      <div class="popular-card-body">
        <div class="name">${item.name}</div>
        <div class="price">₹${item.price}</div>
      </div>
    </div>
  `).join('');
}

function scrollToItem(id) {
  document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => {
    const card = document.querySelector(`.food-card[data-id="${id}"]`);
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      card.style.outline = '2px solid var(--orange)';
      setTimeout(() => card.style.outline = '', 2000);
    }
  }, 600);
}

// ── CATEGORY FILTER ───────────────────────────────────────────────────────────
function filterCategory(cat, btn) {
  renderMenu(cat);
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
}

// ── SEARCH ────────────────────────────────────────────────────────────────────
function handleSearch(query) {
  const dropdown = document.getElementById('searchDropdown');
  if (!dropdown) return;
  const q = query.trim().toLowerCase();
  if (!q) { dropdown.classList.remove('show'); return; }
  const results = menuData.filter(i =>
    i.name.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q) || i.cat.toLowerCase().includes(q)
  ).slice(0, 8);
  if (!results.length) {
    dropdown.innerHTML = '<div style="padding:16px;color:var(--text-muted);text-align:center;font-size:0.9rem">No items found 😕</div>';
    dropdown.classList.add('show');
    return;
  }
  dropdown.innerHTML = results.map(item => `
    <div class="search-result-item" onclick="handleSearchSelect(${item.id})">
      <img src="${item.img}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=100&q=60'" />
      <div class="search-result-info">
        <div class="name">${item.name}</div>
        <div class="price">₹${item.price}</div>
      </div>
    </div>
  `).join('');
  dropdown.classList.add('show');
}

function handleSearchSelect(id) {
  document.getElementById('searchDropdown')?.classList.remove('show');
  document.getElementById('searchInput').value = '';
  scrollToItem(id);
}

function toggleSearchModal() {
  document.getElementById('searchSection')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  setTimeout(() => document.getElementById('searchInput')?.focus(), 400);
}

// Close search dropdown on outside click
document.addEventListener('click', (e) => {
  const wrap = document.getElementById('searchWrap');
  if (wrap && !wrap.contains(e.target)) {
    document.getElementById('searchDropdown')?.classList.remove('show');
  }
});

// ── NAVBAR SCROLL ─────────────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }
});

// ── MOBILE MENU ───────────────────────────────────────────────────────────────
function toggleMobileMenu() {
  document.getElementById('mobileMenu')?.classList.toggle('open');
}

// ── TOAST ─────────────────────────────────────────────────────────────────────
let toastTimer;
function showToast(msg, type = '') {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.className = 'toast show ' + type;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.className = 'toast'; }, 2800);
}

// ── INIT ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderMenu('all');
  renderSpecials();
  renderPopular();
  updateCartUI();
});
