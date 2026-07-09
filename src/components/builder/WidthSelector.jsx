import OptionCard from "@/components/builder/OptionCard";

function getWidthLabel(width) {
  if (width <= 4) return "Slim";
  if (width <= 6) return "Classic";
  if (width <= 8) return "Bold";
  return "Extra Bold";
}

export default function WidthSelector({
  widths,
  selectedWidth,
  onSelectWidth,
}) {
  return (
    <section style={{ marginBottom: "30px" }}>
      <h2>Choose Width</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(115px, 1fr))",
          gap: "12px",
        }}
      >
        {widths?.map((widthOption, index) => (
          <OptionCard
            key={`${widthOption.width}-${widthOption.channel}-${index}`}
            title={`${widthOption.width}mm`}
            subtitle={getWidthLabel(widthOption.width)}
            description={`${widthOption.channel}mm inlay channel`}
            active={selectedWidth === widthOption}
            onClick={() => onSelectWidth(widthOption)}
          />
        ))}
      </div>
    </section>
  );
}