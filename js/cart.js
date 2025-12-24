document.addEventListener("DOMContentLoaded", () => {
  renderCart();
  updateCartCount();
});

/* ================= RENDER CART ================= */
function renderCart() {
  const cart = getCart();
  const list = document.getElementById("cartList");
  const actions = document.getElementById("cartActions");
  const userCard = document.getElementById("userCard");

  list.innerHTML = "";
  actions.innerHTML = "";

  /* EMPTY CART */
  if (cart.length === 0) {
    list.innerHTML = `<div class="empty-cart">Your cart is empty 🛒</div>`;
    userCard.style.display = "none";
    return;
  }

  userCard.style.display = "block";

  let total = 0;
  let summaryHtml = "";

  cart.forEach(item => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;

    /* CART ITEM */
    list.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}"
             class="cart-img"
             onclick="goToProduct('${item.id}')">

        <div class="cart-info">
          <h4>${item.name}</h4>
          <p class="size">${item.size}</p>
          <p class="price">₹${item.price}</p>

          <div class="qty-box">
            <button onclick="changeQty('${item.id}','${item.size}',-1)">−</button>
            <strong>${item.qty}</strong>
            <button onclick="changeQty('${item.id}','${item.size}',1)">+</button>
          </div>

          <button class="remove-btn"
            onclick="removeCartItem('${item.id}','${item.size}')">
            Delete
          </button>
        </div>
      </div>
    `;

    summaryHtml += `
      <div class="summary-row">
        <span>${item.name} (${item.size})</span>
        <span>₹${item.price} × ${item.qty} = ₹${itemTotal}</span>
      </div>
    `;
  });

  /* ORDER SUMMARY */
  actions.innerHTML = `
    <div class="summary-card">
      <h3>Order Summary</h3>
      ${summaryHtml}
      <hr>
      <div class="summary-total">
        <strong>Total</strong>
        <strong>₹${total}</strong>
      </div>
      <button class="order-btn" onclick="orderOnWhatsApp()">
        Proceed to Buy
      </button>
    </div>
  `;
}

/* ================= CART ACTIONS ================= */
function goToProduct(id) {
  window.location.href = `product.html?id=${id}`;
}

function changeQty(id, size, delta) {
  updateQty(id, size, delta);
  renderCart();
}

function removeCartItem(id, size) {
  removeItem(id, size);
  renderCart();
  updateCartCount();
}

/* ================= POPUP ================= */
function showPopup(message, icon = "⚠️") {
  document.getElementById("popupText").innerText = message;
  document.getElementById("popupIcon").innerText = icon;
  document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

/* ================= WHATSAPP ORDER ================= */
function orderOnWhatsApp() {
  const name = document.getElementById("userName").value.trim();
  const phone = document.getElementById("userPhone").value.trim();
  const address = document.getElementById("userAddress").value.trim();
  const cart = getCart();

  /* VALIDATION */
  if (!name) return showPopup("Please enter your full name", "👤");
  if (!/^[a-zA-Z ]{1,20}$/.test(name)) return showPopup("Name must be max 20 letters", "⚠️");
  if (!/^[0-9]{10}$/.test(phone)) return showPopup("Enter valid 10 digit mobile number", "📱");
  if (!address || address.length > 100) return showPopup("Address is required (max 100 chars)", "📍");

  /* BUILD MESSAGE */
  let total = 0;

  let msg = "";
  msg += "🥗 *DESI PROTEIN – ORDER RECEIVED*\n";
  msg += "────────────────────────\n\n";

  msg += "🛒 *ORDER ITEMS*\n";

  cart.forEach(i => {
    const itemTotal = i.price * i.qty;
    total += itemTotal;

    msg += "```\n";
    msg += `${i.name}\n`;
    msg += `${i.size}  |  ₹${i.price} × ${i.qty} = ₹${itemTotal}\n`;
    msg += "```\n";
  });

  msg += "────────────────────────\n";
  msg += `💰 *TOTAL AMOUNT*: ₹${total}\n\n`;

  msg += "👤 *CUSTOMER DETAILS*\n";
  msg += "```\n";
  msg += `Name   : ${name}\n`;
  msg += `Phone  : ${phone}\n`;
  msg += `Address: ${address}\n`;
  msg += "```\n\n";

  msg += "📦 Please confirm delivery availability.\n";
  msg += "🙏 Thank you for ordering from *Desi Protein*";

  /* OPEN WHATSAPP */
  window.open(
    "https://wa.me/918828099766?text=" + encodeURIComponent(msg),
    "_blank"
  );
}
