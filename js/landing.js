import { shops, products } from "./data.js";
import { addToCart, removeFromCart, getCartItems } from "./cart.js";
import { openProductModal } from "./productchip.js"; // ✅ added import for modal

/* =========================
   UTILS
========================= */
function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

/* =========================
   VERIFIED SHOPS (GRID)
   - 8 max (4 x 2)
   - Randomized
   - Clickable → shop.html
========================= */
function renderShops() {
  const grid = document.getElementById("shop-grid");
  if (!grid) return;

  grid.innerHTML = "";

  shuffle(shops)
    .slice(0, 8)
    .forEach(shop => {
      grid.innerHTML += `
        <a href="shop.html?shop=${shop.id}" class="shop-card">
          <img src="${shop.img}" alt="${shop.name}">
          <p>${shop.name}</p>
        </a>
      `;
    });
}

/* =========================
   CATEGORIES (FILTER ROW)
   - Derived from product categories
   - Clickable chips
========================= */
function renderCategories() {
  const wrap = document.getElementById("category-row");
  if (!wrap) return;

  const cats = Array.from(new Set(products.map(p => p.category))).slice(0, 8);

  wrap.innerHTML = `
    <button class="chip active" data-cat="All">All</button>
    ${cats.map(c => `<button class="chip" data-cat="${c}">${c}</button>`).join("")}
  `;

  wrap.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    const selected = chip.getAttribute("data-cat");

    wrap.querySelectorAll(".chip").forEach(b => b.classList.remove("active"));
    chip.classList.add("active");

    renderProducts(selected); // pass filter
  });
}

/* =========================
   POPULAR PRODUCTS (Tier One)
========================= */
function buildPopularSet() {
  let combined = [];
  shops.forEach(shop => {
    let shopProducts = products
      .filter(p => p.shopId === shop.id)
      .sort((a, b) => b.popularity - a.popularity);
    combined.push(...shopProducts.slice(0, 4));
  });
  return shuffle(combined);
}

function renderProducts(filter = "All") {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  grid.innerHTML = "";

  if (!sessionStorage.getItem("popularSet")) {
    sessionStorage.setItem("popularSet", JSON.stringify(buildPopularSet()));
  }
  let popularSet = JSON.parse(sessionStorage.getItem("popularSet")) || [];

  let view = filter === "All"
    ? popularSet
    : popularSet.filter(p => p.category === filter);

  const capped = view.slice(0, 20);
  capped.forEach(product => appendProductCard(grid, product));

  syncAllItemCounts();
}

/* =========================
   SEE MORE (Tier Two)
========================= */
function buildTierTwoSet() {
  let combined = [];
  shops.forEach(shop => {
    let shopProducts = products
      .filter(p => p.shopId === shop.id)
      .sort((a, b) => b.popularity - a.popularity);
    combined.push(...shopProducts.slice(4, 8));
  });
  return shuffle(combined);
}

function handleSeeMore() {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  if (!sessionStorage.getItem("popularSetTier2")) {
    sessionStorage.setItem("popularSetTier2", JSON.stringify(buildTierTwoSet()));
  }
  let tierTwoSet = JSON.parse(sessionStorage.getItem("popularSetTier2")) || [];

  tierTwoSet.forEach(product => appendProductCard(grid, product, true));

  syncAllItemCounts();

  const seeMoreBtn = document.querySelector(".popular-actions .btn-primary");
  if (seeMoreBtn) {
    seeMoreBtn.style.display = "none";
  }
}

/* =========================
   PRODUCT CARD HELPER
   - Preserves description, plus/minus, counts
   - Adds modal click (chip popup) ONLY for popular + category sections
========================= */
function appendProductCard(grid, product, animate = false) {
  const card = document.createElement("div");
  card.className = "product";
  card.setAttribute("data-id", product.id);
  card.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <h4>${product.name}</h4>
    <p class="desc">${product.description}</p>
    <p>Ksh ${product.price}</p>
    <div class="controls">
      <button class="btn-minus" aria-label="Remove from cart">−</button>
      <span class="item-count" data-id="${product.id}">0</span>
      <button class="btn-plus" aria-label="Add to cart">+</button>
    </div>
  `;
  if (animate) {
    card.classList.add("fade-in");
  }
  grid.appendChild(card);

  // ✅ Cart buttons (unchanged)
  if (!grid.__cartBound) {
    grid.addEventListener("click", (e) => {
      const minus = e.target.closest(".btn-minus");
      const plus = e.target.closest(".btn-plus");
      if (!minus && !plus) return;

      const card = e.target.closest(".product");
      if (!card) return;
      const productId = card.getAttribute("data-id");

      if (plus) {
        e.preventDefault();
        addToCart(productId);
        updateItemCount(productId);
      }
      if (minus) {
        e.preventDefault();
        removeFromCart(productId);
        updateItemCount(productId);
      }
    });
    grid.__cartBound = true;
  }

  // 🔑 New: modal popup when clicking card (but not controls)
  card.addEventListener("click", (e) => {
    if (e.target.closest(".controls")) return; // ignore plus/minus clicks
    openProductModal(product);
  });
}

/* =========================
   ITEM COUNT SYNC
========================= */
function updateItemCount(productId) {
  const items = getCartItems();
  const found = items.find(i => i.id === productId);
  const el = document.querySelector(`.item-count[data-id="${productId}"]`);
  if (el) el.textContent = found ? found.qty : 0;
}

function syncAllItemCounts() {
  const items = getCartItems();
  document.querySelectorAll(".item-count").forEach(el => {
    const productId = el.getAttribute("data-id");
    const found = items.find(i => i.id === productId);
    el.textContent = found ? found.qty : 0;
  });
}

/* =========================
   INIT
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const navType = performance.getEntriesByType("navigation")[0].type;
  if (navType === "reload") {
    sessionStorage.removeItem("popularSet");
    sessionStorage.removeItem("popularSetTier2");
  }

  renderShops();
  renderCategories();
  renderProducts();

  const seeMoreBtn = document.querySelector(".popular-actions .btn-primary");
  if (seeMoreBtn) {
    seeMoreBtn.addEventListener("click", (e) => {
      e.preventDefault();
      handleSeeMore();
    });
  }
});