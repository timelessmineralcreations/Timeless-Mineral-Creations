"use client";

import { useState } from "react";
import { saveDesign } from "@/utils/savedDesigns";
import { useCart } from "@/context/CartContext";
import { memorialMaterials } from "@/data/memorialMaterials";
import { accentMaterials } from "@/data/accentMaterials";

export default function SummaryCard({
  collection,
  mainImage,
  selectedMaterial,
  selectedCore,
  selectedWidth,
  selectedSize,
  selectedInlayStyle,
  selectedMaterials,
  selectedMinerals,
  selectedAccentMaterials,
  selectedGlow,
  selectedEngravingFont,
  engravingEnabled,
  engravingText,
  totalPrice,
}) {

  const [copied, setCopied] = useState(false);
const { addItem } = useCart();
  const memorialNames = selectedMaterials.map(
    (id) => memorialMaterials.find((m) => m.id === id)?.name || id
  );

  const mineralNames = selectedMinerals.map(
    (mineral) => mineral.name || mineral.id
  );

  const accentNames = selectedAccentMaterials.map(
    (id) => accentMaterials.find((a) => a.id === id)?.name || id
  );

  const styleName = `${selectedCore?.color ? `${selectedCore.color} ` : ""}${
    selectedCore?.edge || ""
  }`;

  async function handleSaveDesign() {
  const design = {
    collectionId: collection.id,
    collectionName: collection.name,
    material: selectedMaterial,
    core: selectedCore?.id,
    width: selectedWidth?.width,
    size: selectedSize,
    design: selectedInlayStyle?.id,
    memorialMaterials: selectedMaterials,
    minerals: selectedMinerals.map((m) => m.id),
    accentMaterials: selectedAccentMaterials,
    glow: selectedGlow?.id,
    engravingEnabled,
    engravingText,
    engravingFont: selectedEngravingFont?.id,
    totalPrice,
  };

  const designId = saveDesign(design);

  const cleanUrl = `${window.location.origin}${window.location.pathname}?design=${designId}`;

  await navigator.clipboard.writeText(cleanUrl);

  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 2000);
}

  function handleAddToCart() {
  const cartItem = {
    collectionId: collection.id,
    collectionName: collection.name,

    material: selectedMaterial,
    core: selectedCore,
    width: selectedWidth,
    size: selectedSize,

    design: selectedInlayStyle,

    memorialMaterials: selectedMaterials,
    minerals: selectedMinerals,
    accentMaterials: selectedAccentMaterials,

    glow: selectedGlow,

    engravingEnabled,
    engravingText,
    engravingFont: selectedEngravingFont,

    price: totalPrice,

    image:
      typeof mainImage !== "undefined"
        ? mainImage
        : collection.heroImage,
  };

  addItem(cartItem);

  alert("Your ring has been added to your cart!");
}

  return (
    <section
      style={{
        marginTop: 0,
        padding: 16,
        border: "1px solid rgba(255,255,255,.18)",
        borderRadius: "18px",
        background: "rgba(255,255,255,.05)",
      }}
    >
      <h2 style={{ marginBottom: 10, fontSize: 22, fontWeight: 700 }}>
        Your Ring
      </h2>

      <CompactItem label="Collection" value={collection.name} full />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 8,
          marginBottom: 10,
        }}
      >
        <CompactItem label="Material" value={selectedMaterial} />
        <CompactItem label="Style" value={styleName || "Not selected"} />
        <CompactItem
          label="Width"
          value={selectedWidth?.width ? `${selectedWidth.width}mm` : "Not selected"}
        />
        <CompactItem
          label="Channel"
          value={selectedWidth?.channel ? `${selectedWidth.channel}mm` : "Not selected"}
        />
        <CompactItem label="Size" value={selectedSize || "Not selected"} />
      </div>

      <SummaryRow label="Design" value={selectedInlayStyle?.name || "Not selected"} />
      <SummaryRow
        label="Memorial Material"
        value={memorialNames.length ? memorialNames.join(", ") : "None"}
      />
      <SummaryRow
        label="Minerals"
        value={mineralNames.length ? mineralNames.join(", ") : "None"}
      />

      {accentNames.length > 0 && (
        <SummaryRow label="Accent Materials" value={accentNames.join(", ")} />
      )}

      <SummaryRow label="Glow Powder" value={selectedGlow ? selectedGlow.name : "None"} />
      <SummaryRow
        label="Engraving"
        value={engravingEnabled ? engravingText || "(No text entered yet)" : "None"}
      />

      {engravingEnabled && (
        <SummaryRow label="Font" value={selectedEngravingFont.name} />
      )}

      <hr style={{ margin: "12px 0", opacity: 0.2 }} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <span style={{ fontSize: 15, opacity: 0.8 }}>Total</span>
        <span style={{ fontSize: 23, fontWeight: "bold" }}>
          ${totalPrice.toFixed(2)}
        </span>
      </div>

      <button
        type="button"
        onClick={handleAddToCart}
        style={{
          width: "100%",
          padding: "14px",
          marginBottom: "10px",
          borderRadius: "12px",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: 700,
          color: "#111",
          background:
            "linear-gradient(135deg, rgb(233, 192, 84), rgb(184, 134, 11))",
          boxShadow: "0 6px 20px rgba(184,134,11,.35)",
        }}
      >
        Add to Cart
      </button>

      <button
        type="button"
        onClick={handleSaveDesign}
        style={{
          width: "100%",
          padding: "11px",
          marginBottom: "8px",
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,.18)",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: 700,
          color: "white",
          background: "rgba(255,255,255,.06)",
        }}
      >
        {copied ? "Design Link Copied!" : "Save My Design"}
      </button>

      <div
        style={{
          textAlign: "center",
          fontSize: "12px",
          opacity: 0.75,
          marginBottom: "12px",
        }}
      >
        Looking for something completely unique?
        <br />
        <strong>Request a Custom Design</strong>
      </div>

      <div
        style={{
          display: "grid",
          gap: 5,
          fontSize: 12,
          lineHeight: 1.3,
          opacity: 0.9,
        }}
      >
        <TrustLine text="Proudly Made in North Carolina" />
        <TrustLine text="Genuine Natural Minerals" />
        <TrustLine text="Crafted for Life's Journey" />
        <TrustLine text="Carefully Handcrafted • Estimated 2–10 Week Completion" />
      </div>
    </section>
  );
}

function CompactItem({ label, value, full }) {
  return (
    <div
      style={{
        gridColumn: full ? "1 / -1" : "auto",
        padding: "8px 10px",
        border: "1px solid rgba(255,255,255,.12)",
        borderRadius: "10px",
        background: "rgba(255,255,255,.04)",
      }}
    >
      <div
        style={{
          fontSize: 10,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          opacity: 0.55,
          marginBottom: 3,
        }}
      >
        {label}
      </div>

      <div style={{ fontSize: 13, fontWeight: 700 }}>{value}</div>
    </div>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div
      style={{
        padding: "5px 0",
        borderBottom: "1px solid rgba(255,255,255,.1)",
      }}
    >
      <div
        style={{
          fontSize: 10,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          opacity: 0.55,
          marginBottom: 2,
        }}
      >
        ✓ {label}
      </div>

      <div style={{ fontSize: 13, fontWeight: 600 }}>{value}</div>
    </div>
  );
}

function TrustLine({ text }) {
  return (
    <div style={{ display: "flex", gap: 7, alignItems: "flex-start" }}>
      <span>✓</span>
      <span>{text}</span>
    </div>
  );
}