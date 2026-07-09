import OptionCard from "@/components/builder/OptionCard";

export default function RingDesignSelector({
  styles,
  selectedStyle,
  onSelectStyle,
}) {
  return (
    <section style={{ marginBottom: "30px" }}>
      <h2>Choose Your Ring Design</h2>

      <div style={{ display: "grid", gap: "14px" }}>
        {styles.map((style) => (
          <OptionCard
            key={style.id}
            title={style.name}
            subtitle={style.shortDescription}
            description={style.description}
            image={style.preview}
            badge={style.featured ? "MOST POPULAR" : null}
            active={selectedStyle?.id === style.id}
            onClick={() => onSelectStyle(style)}
          />
        ))}
      </div>
    </section>
  );
}