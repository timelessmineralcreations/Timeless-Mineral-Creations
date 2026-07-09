import OptionCard from "@/components/builder/OptionCard";

export default function AccentMaterialSelector({
  accentMaterials,
  selectedAccentMaterials,
  onToggleAccentMaterial,
  max = 2,
}) {
  return (
    <section style={{ marginBottom: "30px" }}>
      <h2>
        Accent Materials{" "}
        <span
          style={{
            fontSize: "14px",
            opacity: 0.7,
            fontWeight: "normal",
          }}
        >
          (Optional • Choose up to {max})
        </span>
      </h2>

      <p
        style={{
          marginTop: "4px",
          marginBottom: "18px",
          opacity: 0.75,
        }}
      >
        Add decorative accent materials to enhance your ring.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "12px",
        }}
      >
        {accentMaterials.map((item) => (
          <OptionCard
            key={item.id}
            title={item.name}
            description={item.description}
            image={item.image}
            active={selectedAccentMaterials.includes(item.id)}
            onClick={() => onToggleAccentMaterial(item.id)}
          />
        ))}
      </div>
    </section>
  );
}