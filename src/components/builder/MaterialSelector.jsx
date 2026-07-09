import MaterialCard from "@/components/builder/MaterialCard";

const materialDescriptions = {
  Tungsten: "Extremely durable and scratch resistant.",
  Titanium: "Lightweight, strong, and comfortable.",
  Ceramic: "Modern, lightweight, and scratch resistant.",
  "Sterling Silver": "Classic precious metal.",
  "Stainless Steel": "Durable and affordable.",
};

export default function MaterialSelector({
  materials,
  selectedMaterial,
  onSelectMaterial,
}) {
  return (
    <section style={{ marginBottom: "30px" }}>
      <h2>Choose Material</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "12px",
        }}
      >
        {materials.map((material) => (
          <MaterialCard
            key={material}
            material={material}
            description={materialDescriptions[material]}
            active={selectedMaterial === material}
            onClick={() => onSelectMaterial(material)}
          />
        ))}
      </div>
    </section>
  );
}