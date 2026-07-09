export function getCart() {
  if (typeof window === "undefined") return [];

  return JSON.parse(localStorage.getItem("cart") || "[]");
}

export function addToCart(item) {
  if (typeof window === "undefined") return [];

  const cart = getCart();

  const cartItem = {
    id: crypto.randomUUID(),
    ...item,
    addedAt: Date.now(),
  };

  const updatedCart = [...cart, cartItem];

  localStorage.setItem("cart", JSON.stringify(updatedCart));

  return updatedCart;
}

export function removeFromCart(id) {
  if (typeof window === "undefined") return [];

  const cart = getCart();

  const updatedCart = cart.filter((item) => item.id !== id);

  localStorage.setItem("cart", JSON.stringify(updatedCart));

  return updatedCart;
}

export function clearCart() {
  if (typeof window === "undefined") return;

  localStorage.removeItem("cart");
}