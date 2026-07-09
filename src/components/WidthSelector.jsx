export default function WidthSelector({
  widths,
  selectedWidth,
  onSelectWidth,
}) {
  return (
    <section style={{ marginTop: "30px" }}>
      <h3>Choose Width</h3>

      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          marginTop: "15px",
        }}
      >
        {widths.map((width) => (
          <button
            key={width}
            onClick={() => onSelectWidth(width)}
            style={{
              padding: "12px 18px",
              borderRadius: "10px",
              cursor: "pointer",
              minWidth: "70px",
              border:
                selectedWidth === width
                  ? "2px solid #60a5fa"
                  : "1px solid rgba(255,255,255,0.25)",
              background:
                selectedWidth === width
                  ? "rgba(96,165,250,0.25)"
                  : "transparent",
              color: "inherit",
              fontWeight: "600",
              transition: "all 0.2s ease",
            }}
          >
            {width} mm
          </button>
        ))}
      </div>
    </section>
  );
}