export default function SizeSelector({
  sizes,
  selectedSize,
  onSelectSize,
}) {
  return (
    <section style={{ marginBottom: "30px" }}>
      <h2>Choose Ring Size</h2>

      <select
        value={selectedSize || ""}
        onChange={(e) => onSelectSize(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "260px",
          padding: "14px",
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,.25)",
          background: "rgba(20,20,20,.95)",
          color: "white",
          fontSize: "16px",
        }}
      >
        {sizes?.map((size) => (
          <option key={size} value={size}>
            Size {size}
          </option>
        ))}
      </select>
    </section>
  );
}