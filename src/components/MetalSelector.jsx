export default function MetalSelector({
  metals,
  selectedMetal,
  onSelectMetal,
}) {
  return (
    <section style={{ marginTop: "30px" }}>
      <h3>Choose Metal</h3>

      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          marginTop: "15px",
        }}
      >
        {metals.map((metal) => (
          <button
            key={metal}
            onClick={() => onSelectMetal(metal)}
            style={{
              padding: "12px 18px",
              borderRadius: "10px",
              cursor: "pointer",
              border:
                selectedMetal === metal
                  ? "2px solid #60a5fa"
                  : "1px solid rgba(255,255,255,0.25)",
              background:
                selectedMetal === metal
                  ? "rgba(96,165,250,0.25)"
                  : "transparent",
              color: "inherit",
              fontWeight: "600",
            }}
          >
            {metal}
          </button>
        ))}
      </div>
    </section>
  );
}