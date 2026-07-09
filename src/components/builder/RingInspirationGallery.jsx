"use client";

export default function RingInspirationGallery({
  photos = [],
  selectedMaterial,
  selectedWidth,
  onSelectPhoto,
}) {
  if (!photos.length) return null;

  const width = selectedWidth?.width;

  const sortedPhotos = [...photos].sort((a, b) => {
    const aMaterial = a.material === selectedMaterial ? 0 : 1;
    const bMaterial = b.material === selectedMaterial ? 0 : 1;

    if (aMaterial !== bMaterial) return aMaterial - bMaterial;

    const aWidth = a.width === width ? 0 : 1;
    const bWidth = b.width === width ? 0 : 1;

    return aWidth - bWidth;
  });

  return (
    <section style={{ marginTop: "24px" }}>
      <h2 style={{ marginBottom: "8px" }}>Real Rings We’ve Handcrafted</h2>

      <p style={{ opacity: 0.75, marginBottom: "14px" }}>
        Click a photo to preview it larger. This will not change your selected
        options.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
          gap: "12px",
        }}
      >
        {sortedPhotos.slice(0, 8).map((photo, index) => (
          <button
            key={photo.image || index}
            type="button"
            onClick={() => onSelectPhoto?.(photo.image)}
            title={`${photo.material || "Ring"}${
              photo.width ? ` • ${photo.width}mm` : ""
            }${photo.mineral ? ` • ${formatLabel(photo.mineral)}` : ""}`}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,.18)",
              aspectRatio: "1 / 1",
              cursor: "zoom-in",
              padding: 0,
              background: "transparent",
              color: "inherit",
            }}
          >
            <img
              src={photo.image}
              alt={`${photo.material || "Ring"} example`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "end",
                padding: "10px",
                background:
                  "linear-gradient(to top, rgba(0,0,0,.72), transparent)",
              }}
            >
              <div style={{ fontSize: "13px", lineHeight: 1.3 }}>
                <strong>{photo.material}</strong>
                {photo.width && <div>{photo.width}mm</div>}
                {photo.mineral && <div>{formatLabel(photo.mineral)}</div>}
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function formatLabel(value) {
  return value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}