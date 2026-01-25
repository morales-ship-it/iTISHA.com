// productpage.js
import { shops, products } from "./data.js";
import { addToCart, removeFromCart, getCartItems } from "./cart.js";
import { openProductPanel } from "./productpanel.js"; // ✅ reuse overlay logic

// Utility: get product ID from URL
function getProductIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

// Render product details (same structure as productpanel.js)
function renderProductPage(product) {
  const container = document.getElementById("product-page-container");
  if (!container) return;

  const shop = shops.find(s => s.id === product.shopId);
  const shopName = shop ? shop.name : "Unknown Shop";

  container.innerHTML = `
    <div class="product-panel product-page">
      <div class="panel-images">
        <button class="enlarge-btn" title="View full image">
          &#x21f2; <!-- slick double-arrow icon -->
        </button>
        <img src="${(product.images && product.images[0]) || product.img}" 
             alt="${product.name}" class="panel-main-img">
        <div class="panel-thumbs">
          ${(product.images || [product.img])
            .map(img => `<img src="${img}" alt="${product.name}" class="panel-thumb">`)
            .join("")}
        </div>
      </div>

      <div class="panel-info">
        <h2 class="panel-title">${product.name}</h2>
        <p class="panel-size">${product.size || ""}</p>
        <ul class="panel-nutrition">
          ${product.sodium ? `<li>Sodium: ${product.sodium}</li>` : ""}
          ${product.sugar ? `<li>Sugar: ${product.sugar}</li>` : ""}
          ${product.fat ? `<li>Fat: ${product.fat}</li>` : ""}
          ${product.calories ? `<li>Calories: ${product.calories}</li>` : ""}
        </ul>
        ${product.label ? `<p class="panel-label">${product.label}</p>` : ""}
        <p class="panel-shop">Shop: ${shopName}</p>
      </div>

      <div class="panel-pricing">
        <p class="panel-price">Ksh ${product.price}</p>
        ${product.originalPrice ? `<p class="panel-original">Ksh ${product.originalPrice}</p>` : ""}
        ${product.promo ? `<p class="panel-promo">${product.promo}</p>` : ""}
      </div>

      <div class="panel-actions">
        <div class="qty-controls">
          <button class="btn-minus">−</button>
          <span class="item-count" data-id="${product.id}">0</span>
          <button class="btn-plus">+</button>
        </div>
        <button class="btn-add">Add to cart</button>
        <button class="btn-save">Save</button>
      </div>

      <div class="panel-related">
        <h3>Customers also considered</h3>
        <div class="related-grid"></div>
      </div>
    </div>
  `;

  // Thumbnail swap
  const mainImg = container.querySelector(".panel-main-img");
  container.querySelectorAll(".panel-thumb").forEach(thumb => {
    thumb.addEventListener("click", () => {
      mainImg.src = thumb.src;
    });
  });

  // ✅ Enlarge image button logic
  const enlargeBtn = container.querySelector(".enlarge-btn");
  enlargeBtn.addEventListener("click", () => {
    const modal = document.createElement("div");
    modal.className = "image-modal";
    modal.innerHTML = `
      <span class="close-modal">&times;</span>
      <img src="${mainImg.src}" alt="Enlarged ${product.name}">
    `;
    document.body.appendChild(modal);

    // Close modal with X
    modal.querySelector(".close-modal").addEventListener("click", () => {
      document.body.removeChild(modal);
    });

    // Close modal on background click
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        document.body.removeChild(modal);
      }
    });

    // Close modal with Esc key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && document.body.contains(modal)) {
        document.body.removeChild(modal);
      }
    });
  });

  // Cart controls
  const minusBtn = container.querySelector(".btn-minus");
  const plusBtn = container.querySelector(".btn-plus");
  const countEl = container.querySelector(".item-count");
  const addBtn = container.querySelector(".btn-add");

  function updateCount() {
    const items = getCartItems();
    const found = items.find(i => i.id === product.id);
    countEl.textContent = found ? found.qty : 0;
  }

  plusBtn.addEventListener("click", () => {
    addToCart(product.id);
    updateCount();
  });

  minusBtn.addEventListener("click", () => {
    removeFromCart(product.id);
    updateCount();
  });

  addBtn.addEventListener("click", () => {
    addToCart(product.id);
    updateCount();
  });

  updateCount();

  // Related products
  const relatedGrid = container.querySelector(".related-grid");
  const related = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  related.forEach(rp => {
    const card = document.createElement("div");
    card.className = "related-card";
    card.innerHTML = `
      <img src="${rp.img}" alt="${rp.name}">
      <p>${rp.name}</p>
      <button class="btn-add-related">Add</button>
    `;
    card.querySelector(".btn-add-related").addEventListener("click", () => {
      addToCart(rp.id);
      updateCount();
    });
    relatedGrid.appendChild(card);
  });
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  const productId = getProductIdFromUrl();
  const product = products.find(p => p.id === productId);

  if (product) {
    renderProductPage(product);
  } else {
    document.getElementById("product-page-container").innerHTML = "<p>Product not found.</p>";
  }

  // ✅ Back button logic
  const backBtn = document.getElementById("back-btn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      if (document.referrer && document.referrer.includes("index.html")) {
        window.history.back();
      } else {
        window.location.href = "index.html";
      }
    });
  }

  // ✅ Resize logic: if user enlarges to desktop, snap into overlay
  function resizeHandler() {
    if (window.innerWidth >= 768 && product) {
      // Redirect back to landing and open overlay
      window.location.href = `index.html?product=${product.id}`;
    }
  }

  window.addEventListener("resize", resizeHandler);
});