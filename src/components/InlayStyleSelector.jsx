export default function InlayStyleSelector({
  styles,
  selectedStyle,
  onSelectStyle,
}) {
  return (
    <section style={{ marginTop: "28px" }}>
      <h3 style={{ marginBottom: "12px" }}>Choose Inlay Style</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "12px",
        }}
      >
        {styles.map((style) => {
          const isSelected = selectedStyle?.id === style.id;

          return (
            <button
              key={style.id}
              onClick={() => onSelectStyle(style)}
              style={{
                textAlign: "left",
                padding: "16px",
                borderRadius: "14px",
                cursor: "pointer",
                background: isSelected
                  ? "rgba(0, 145, 255, 0.35)"
                  : "rgba(255,255,255,0.04)",
                border: isSelected
                  ? "2px solid #00aaff"
                  : "1px solid rgba(255,255,255,0.25)",
                color: "white",
              }}
            >
              <h4 style={{ margin: "0 0 8px" }}>{style.name}</h4>
              <p style={{ margin: 0, opacity: 0.8, fontSize: "14px" }}>
                {style.description}
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}