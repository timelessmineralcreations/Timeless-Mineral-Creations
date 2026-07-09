import OptionCard from "@/components/builder/OptionCard";

export default function RingCoreSelector({
  cores,
  selectedCore,
  onSelectCore,
}) {
  return (
    <section style={{ marginBottom: "30px" }}>
      <h2>Choose Your Band Style</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "14px",
        }}
      >
        {cores.map((core) => (
          <OptionCard
            key={core.id}
            title={`${core.color ? `${core.color} ` : ""}${core.edge}`}
            subtitle={core.comfortFit ? "Comfort Fit" : core.finish}
            description={core.finish}
            image={core.image}
            active={selectedCore?.id === core.id}
            onClick={() => onSelectCore(core)}
          />
        ))}
      </div>
    </section>
  );
}