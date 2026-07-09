"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeItem, clearItems } = useCart();

  const subtotal = cart.reduce((total, item) => total + (item.price || 0), 0);
async function handleCheckout() {
  try {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart }),
    });

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      alert(data.error || "Checkout failed.");
    }
  } catch (error) {
    console.error("Checkout error:", error);
    alert("Something went wrong starting checkout.");
  }
}
  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "50px 20px" }}>
      <h1 style={{ fontSize: "44px", marginBottom: "28px" }}>Your Cart</h1>

      {cart.length === 0 ? (
        <div>
          <p style={{ fontSize: "18px", opacity: 0.8 }}>Your cart is empty.</p>
          <Link href="/collections" style={{ color: "#D4AF37", fontWeight: 700 }}>
            Continue Shopping →
          </Link>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "28px" }}>
          <div style={{ display: "grid", gap: "18px" }}>
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "180px 1fr auto",
                  gap: "20px",
                  padding: "18px",
                  border: "1px solid rgba(255,255,255,.14)",
                  borderRadius: "18px",
                  background: "rgba(255,255,255,.05)",
                }}
              >
                <img
                  src={item.image || "/rings/signature/signature-stainless-steel-turquoise-howlite-8mm.png"}
                  alt={item.collectionName}
                  style={{
                    width: "180px",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "14px",
                  }}
                />

                <div>
                  <h2 style={{ marginTop: 0, marginBottom: 10 }}>
                    {item.collectionName}
                  </h2>

                  <CartLine label="Material" value={item.material} />
                  <CartLine
                    label="Style"
                    value={`${item.core?.color ? `${item.core.color} ` : ""}${item.core?.edge || ""}`}
                  />
                  <CartLine label="Width" value={`${item.width?.width}mm`} />
                  <CartLine label="Size" value={item.size} />
                  <CartLine label="Design" value={item.design?.name} />

                  <CartLine
                    label="Memorial Material"
                    value={
                      item.memorialMaterials?.length
                        ? item.memorialMaterials.join(", ")
                        : "None"
                    }
                  />

                  <CartLine
                    label="Minerals"
                    value={
                      item.minerals?.length
                        ? item.minerals.map((m) => m.name).join(", ")
                        : "None"
                    }
                  />

                  <CartLine label="Glow" value={item.glow?.name || "None"} />

                  <CartLine
                    label="Engraving"
                    value={
                      item.engravingEnabled
                        ? item.engravingText || "Yes"
                        : "None"
                    }
                  />
                </div>

                <div style={{ textAlign: "right" }}>
                  <div
                    style={{
                      fontSize: "26px",
                      fontWeight: 800,
                      color: "#D4AF37",
                      marginBottom: "16px",
                    }}
                  >
                    ${(item.price || 0).toFixed(2)}
                  </div>

                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    style={{
                      padding: "8px 12px",
                      borderRadius: "10px",
                      border: "1px solid rgba(255,255,255,.22)",
                      background: "transparent",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <aside
            style={{
              padding: "22px",
              border: "1px solid rgba(255,255,255,.14)",
              borderRadius: "18px",
              background: "rgba(255,255,255,.05)",
              height: "fit-content",
              position: "sticky",
              top: "95px",
            }}
          >
            <h2 style={{ marginTop: 0 }}>Order Summary</h2>

            <SummaryLine label="Items" value={cart.length} />
            <SummaryLine label="Subtotal" value={`$${subtotal.toFixed(2)}`} />
            <SummaryLine label="Shipping" value="Calculated at checkout" />

            <hr style={{ margin: "18px 0", opacity: 0.2 }} />

            <SummaryLine
              label="Total"
              value={`$${subtotal.toFixed(2)}`}
              large
            />

            <button
              type="button"
              onClick={handleCheckout}
              style={{
                width: "100%",
                marginTop: "18px",
                padding: "14px",
                borderRadius: "12px",
                border: "none",
                background:
                  "linear-gradient(135deg, rgb(233, 192, 84), rgb(184, 134, 11))",
                color: "#111",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              Secure Checkout
            </button>

            <Link
              href="/collections"
              style={{
                display: "block",
                textAlign: "center",
                marginTop: "14px",
                color: "#D4AF37",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Continue Shopping
            </Link>

            <button
              type="button"
              onClick={clearItems}
              style={{
                width: "100%",
                marginTop: "12px",
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,.18)",
                background: "transparent",
                color: "white",
                cursor: "pointer",
              }}
            >
              Clear Cart
            </button>

            <p style={{ fontSize: "12px", opacity: 0.7, marginTop: "16px" }}>
              Each piece is handcrafted. Memorial material shipping instructions
              will be provided after checkout.
            </p>
          </aside>
        </div>
      )}
    </main>
  );
}

function CartLine({ label, value }) {
  return (
    <p style={{ margin: "5px 0", fontSize: "14px", opacity: 0.9 }}>
      <strong>{label}:</strong> {value}
    </p>
  );
}

function SummaryLine({ label, value, large }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "10px 0",
        fontSize: large ? "22px" : "15px",
        fontWeight: large ? 800 : 500,
      }}
    >
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}