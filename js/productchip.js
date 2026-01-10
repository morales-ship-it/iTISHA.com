// productchip.js
import { shops } from "./data.js"; // ✅ import shops to resolve shop name

export function openProductModal(product) {
  // Find shop name from shops array
  const shop = shops.find(s => s.id === product.shopId);
  const shopName = shop ? shop.name : "Unknown Shop";

  // Create overlay
  const overlay = document.createElement("div");
  overlay.className = "product-modal-overlay";

  // Modal content
  overlay.innerHTML = `
    <div class="product-modal">
      <span class="modal-close">&times;</span>
      <h2 class="modal-title">${product.name}</h2>
      <p class="modal-price">Ksh ${product.price}</p>
      <div class="modal-carousel-wrapper">
        <button class="carousel-arrow left" aria-label="Previous image">&#10094;</button>
        <div class="modal-carousel">
          ${(product.images || [product.img]).map((img) => `
            <img src="${img}" alt="${product.name}" class="carousel-img">
          `).join("")}
        </div>
        <button class="carousel-arrow right" aria-label="Next image">&#10095;</button>
      </div>
      <div class="modal-extra">
        <p class="modal-shop">Available at: <strong>${shopName}</strong></p>
        <div class="modal-desc-scroll">
          ${product.details || product.description || "No additional details available."}
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  // Close logic
  overlay.querySelector(".modal-close").addEventListener("click", () => {
    document.body.removeChild(overlay);
  });

  // Scroll logic for images
  const carousel = overlay.querySelector(".modal-carousel");
  const leftArrow = overlay.querySelector(".carousel-arrow.left");
  const rightArrow = overlay.querySelector(".carousel-arrow.right");
  const images = overlay.querySelectorAll(".carousel-img");

  // Ensure first image is visible and centered
  carousel.scrollTo({ left: 0, behavior: "auto" });

  // Helper: get width of one image (matches CSS flex: 0 0 100%)
  function getImageWidth() {
    if (images.length > 0) {
      // Use the carousel viewport width since each image fills it
      return carousel.getBoundingClientRect().width;
    }
    return 300; // fallback
  }

  leftArrow.addEventListener("click", () => {
    carousel.scrollBy({ left: -getImageWidth(), behavior: "smooth" });
  });

  rightArrow.addEventListener("click", () => {
    carousel.scrollBy({ left: getImageWidth(), behavior: "smooth" });
  });

  // Optional: keyboard navigation (left/right arrows)
  function handleKey(e) {
    if (e.key === "ArrowLeft") {
      carousel.scrollBy({ left: -getImageWidth(), behavior: "smooth" });
    } else if (e.key === "ArrowRight") {
      carousel.scrollBy({ left: getImageWidth(), behavior: "smooth" });
    } else if (e.key === "Escape") {
      document.body.removeChild(overlay);
      window.removeEventListener("keydown", handleKey);
    }
  }
  window.addEventListener("keydown", handleKey);
}