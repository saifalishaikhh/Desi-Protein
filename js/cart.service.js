/* ================= CART SERVICE ================= */

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

/* ADD TO CART */
function addToCart(product, size, qty) {
  let cart = getCart();

  const index = cart.findIndex(
    item => item.id === product.id && item.size === size
  );

  if (index !== -1) {
    cart[index].qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      image: product.image,
      size: size,
      price: product.prices[size],
      qty: qty
    });
  }

  saveCart(cart);
}

/* UPDATE QTY (+ / -) */
function updateQty(id, size, delta) {
  let cart = getCart();

  cart = cart.map(item => {
    if (item.id === id && item.size === size) {
      item.qty = Math.max(1, item.qty + delta);
    }
    return item;
  });

  saveCart(cart);
}

/* REMOVE ITEM */
function removeItem(id, size) {
  let cart = getCart();
  cart = cart.filter(item => !(item.id === id && item.size === size));
  saveCart(cart);
}

/* DISTINCT CART COUNT */
function getCartItemCount() {
  const cart = getCart();
  const unique = new Set(cart.map(i => `${i.id}_${i.size}`));
  return unique.size;
}

/* UPDATE HEADER BADGE */
function updateCartCount() {
  const badge = document.getElementById("cartCount");
  if (!badge) return;

  const count = getCartItemCount();
  badge.innerText = count;
  badge.style.display = count > 0 ? "inline-block" : "none";
}
