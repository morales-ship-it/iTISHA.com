// productpanel.js
import { shops, products } from "./data.js";
import { addToCart, removeFromCart, getCartItems } from "./cart.js";

export function openProductPanel(product) {
  // Find shop name
  const shop = shops.find(s => s.id === product.shopId);
  const shopName = shop ? shop.name : "Unknown Shop";

  // Create overlay
  const overlay = document.createElement("div");
  overlay.className = "product-panel-overlay";

  // Build panel HTML
  overlay.innerHTML = `
    <div class="product-panel">
      <span class="panel-close">&times;</span>

      <!-- Images -->
      <div class="panel-images">
        <img src="${(product.images && product.images[0]) || product.img}" 
             alt="${product.name}" class="panel-main-img">
        <div class="panel-thumbs">
          ${(product.images || [product.img])
            .map(img => `<img src="${img}" alt="${product.name}" class="panel-thumb">`)
            .join("")}
        </div>
      </div>

      <!-- Product info -->
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
      </div>

      <!-- Pricing -->
      <div class="panel-pricing">
        <p class="panel-price">Ksh ${product.price}</p>
        ${product.originalPrice ? `<p class="panel-original">Ksh ${product.originalPrice}</p>` : ""}
        ${product.promo ? `<p class="panel-promo">${product.promo}</p>` : ""}
      </div>

      <!-- Actions -->
      <div class="panel-actions">
        <div class="qty-controls">
          <button class="btn-minus">−</button>
          <span class="item-count" data-id="${product.id}">0</span>
          <button class="btn-plus">+</button>
        </div>
        <button class="btn-add">Add to cart</button>
        <button class="btn-save">Save</button>
      </div>

      <!-- Related products -->
      <div class="panel-related">
        <h3>Customers also considered</h3>
        <div class="related-grid"></div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  // Close logic
  overlay.querySelector(".panel-close").addEventListener("click", () => {
    document.body.removeChild(overlay);
  });

  // Thumbnail click → swap main image
  const mainImg = overlay.querySelector(".panel-main-img");
  overlay.querySelectorAll(".panel-thumb").forEach(thumb => {
    thumb.addEventListener("click", () => {
      mainImg.src = thumb.src;
    });
  });

  // Cart controls
  const minusBtn = overlay.querySelector(".btn-minus");
  const plusBtn = overlay.querySelector(".btn-plus");
  const countEl = overlay.querySelector(".item-count");
  const addBtn = overlay.querySelector(".btn-add");

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

  // Related products (same category)
  const relatedGrid = overlay.querySelector(".related-grid");
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