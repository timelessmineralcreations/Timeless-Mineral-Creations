export default function GlowSelector({
  glowOptions,
  selectedGlow,
  onSelectGlow,
}) {
  return (
    <section style={{ marginTop: "30px" }}>
      <h3>Choose Glow Color</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
          gap: "18px",
          marginTop: "15px",
        }}
      >
        {glowOptions.map((glow) => (
          <button
            key={glow.id}
            onClick={() => onSelectGlow(glow)}
            style={{
              border:
                selectedGlow?.id === glow.id
                  ? "2px solid #60a5fa"
                  : "1px solid rgba(255,255,255,0.15)",

              borderRadius: "16px",
              background:
                selectedGlow?.id === glow.id
                  ? "rgba(96,165,250,0.15)"
                  : "rgba(255,255,255,0.03)",

              cursor: "pointer",
              color: "inherit",
              padding: "18px",
              transition: "0.2s",
            }}
          >
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                margin: "0 auto 16px",
                background: glow.color,
                boxShadow: `0 0 22px ${glow.color}`,
              }}
            />

            <h4
              style={{
                margin: "0 0 8px",
                textAlign: "center",
              }}
            >
              {glow.name}
            </h4>

            <p
              style={{
                margin: 0,
                fontSize: "13px",
                opacity: 0.75,
                textAlign: "center",
              }}
            >
              Charges with UV, sunlight, or a black light.
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}