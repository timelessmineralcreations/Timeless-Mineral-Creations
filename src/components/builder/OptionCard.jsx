export default function OptionCard({
  title,
  subtitle,
  description,
  image,
  badge,
  active,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        textAlign: "left",
        padding: "12px",
        borderRadius: "14px",
        border: active
          ? "2px solid #d4af37"
          : "1px solid rgba(255,255,255,.18)",
        background: active
          ? "rgba(212,175,55,.16)"
          : "rgba(255,255,255,.05)",
        color: "white",
        cursor: "pointer",
        marginBottom: "8px",
        minHeight: "82px",
      }}
    >
      {image && (
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "95px",
            objectFit: "cover",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
        />
      )}

      {badge && (
        <div
          style={{
            display: "inline-block",
            marginBottom: "6px",
            padding: "3px 7px",
            borderRadius: "999px",
            background: "rgba(212,175,55,.22)",
            color: "#f7d774",
            fontSize: "11px",
            fontWeight: "bold",
          }}
        >
          {badge}
        </div>
      )}

      <h3 style={{ margin: "0 0 4px", fontSize: "16px" }}>{title}</h3>

      {subtitle && (
        <p style={{ margin: "0 0 4px", opacity: 0.82, fontSize: "12px" }}>
          {subtitle}
        </p>
      )}

      {description && (
        <p style={{ margin: 0, opacity: 0.7, fontSize: "12px", lineHeight: 1.35 }}>
          {description}
        </p>
      )}
    </button>
  );
}