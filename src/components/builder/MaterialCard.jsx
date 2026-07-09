export default function MaterialCard({
  material,
  description,
  active,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        textAlign: "left",
        padding: "14px",
        borderRadius: "14px",
        border: active
          ? "2px solid #d4af37"
          : "1px solid rgba(255,255,255,.18)",
        background: active
          ? "rgba(212,175,55,.16)"
          : "rgba(255,255,255,.05)",
        color: "white",
        cursor: "pointer",
        minHeight: "76px",
      }}
    >
      <h3 style={{ margin: "0 0 5px", fontSize: "17px" }}>{material}</h3>

      <p style={{ margin: 0, opacity: 0.75, fontSize: "13px" }}>
        {description}
      </p>
    </button>
  );
}