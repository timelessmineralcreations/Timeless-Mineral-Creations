export default function MemorialSelector({
  materials,
  selectedMaterials,
  onToggleMaterial,
}) {
  return (
    <section style={{ marginTop: "30px" }}>
      <h3>Choose Memorial Material</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: "14px",
          marginTop: "15px",
        }}
      >
        {materials.map((material) => {
          const isSelected = selectedMaterials.includes(material.id);

          return (
            <button
              key={material.id}
              onClick={() => onToggleMaterial(material.id)}
              style={{
                padding: "16px",
                borderRadius: "14px",
                cursor: "pointer",
                border: isSelected
                  ? "2px solid #60a5fa"
                  : "1px solid rgba(255,255,255,0.25)",
                background: isSelected
                  ? "rgba(96,165,250,0.2)"
                  : "rgba(255,255,255,0.03)",
                color: "inherit",
                textAlign: "left",
              }}
            >
              <div style={{ fontSize: "26px", marginBottom: "8px" }}>
                {material.icon}
              </div>

              <strong>{material.name}</strong>

              <p style={{ opacity: 0.7, fontSize: "13px", marginTop: "6px" }}>
                {material.description}
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}