export default function MineralSelector({
  minerals,
  selectedMineral,
  onSelectMineral,
}) {
  return (
    <section style={{ marginTop: "30px" }}>
      <h3>Choose Your Mineral</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "18px",
          marginTop: "15px",
        }}
      >
        {minerals.map((mineral) => (
          <button
            key={mineral.id}
            onClick={() => onSelectMineral(mineral)}
            style={{
              border:
                selectedMineral?.id === mineral.id
                  ? "2px solid #60a5fa"
                  : "1px solid rgba(255,255,255,0.15)",
              borderRadius: "14px",
              background:
                selectedMineral?.id === mineral.id
                  ? "rgba(96,165,250,0.15)"
                  : "rgba(255,255,255,0.03)",
              cursor: "pointer",
              overflow: "hidden",
              padding: "0",
              color: "inherit",
              textAlign: "left",
            }}
          >
            <img
              src={mineral.image}
              alt={mineral.name}
              style={{
                width: "100%",
                height: "160px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "12px" }}>
              <h4 style={{ margin: "0 0 6px" }}>
                {mineral.name}
              </h4>

              <p
                style={{
                  margin: 0,
                  opacity: 0.7,
                  fontSize: "14px",
                }}
              >
                {mineral.category}
              </p>

              {mineral.popular && (
                <div style={{ marginTop: "10px" }}>
                  <span
                    style={{
                      background: "#2563eb",
                      padding: "4px 10px",
                      borderRadius: "999px",
                      fontSize: "12px",
                    }}
                  >
                    Popular
                  </span>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}