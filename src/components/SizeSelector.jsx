"use client";

import OptionCard from "./OptionCard";

export default function SizeSelector({
  sizes = [],
  selectedSize,
  onSelectSize,
}) {
  if (!sizes.length) return null;

  return (
    <section style={{ marginBottom: "30px" }}>
      <h2>Choose Ring Size</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(90px, 1fr))",
          gap: "12px",
        }}
      >
        {sizes.map((size) => (
          <OptionCard
            key={size}
            title={size}
            active={selectedSize === size}
            onClick={() => onSelectSize(size)}
          />
        ))}
      </div>
    </section>
  );
}