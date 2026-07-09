const engravingFonts = [
  { id: "arial", name: "Arial", fontFamily: "Arial, sans-serif" },
  { id: "century", name: "Century", fontFamily: "Century, serif" },
  { id: "comic-sans", name: "Comic Sans", fontFamily: "'Comic Sans MS', cursive" },
  { id: "freestyle-script", name: "Freestyle Script", fontFamily: "'Freestyle Script', cursive" },
  { id: "papyrus", name: "Papyrus", fontFamily: "Papyrus, fantasy" },
  { id: "sitka", name: "Sitka", fontFamily: "Sitka, serif" },
  { id: "times-new-roman", name: "Times New Roman", fontFamily: "'Times New Roman', serif" },
];

export default function EngravingSelector({
  engravingEnabled,
  engravingText,
  selectedEngravingFont,
  onToggleEngraving,
  onChangeEngraving,
  onChangeEngravingFont,
}) {
  const maxCharacters = 25;
  const previewText = engravingText || "Your Text";

  function handleChange(e) {
    const value = e.target.value.slice(0, maxCharacters);
    onChangeEngraving(value);
  }

  return (
    <section style={{ marginBottom: "30px" }}>
      <h2>Inside Engraving</h2>

      <button
        onClick={onToggleEngraving}
        style={{
          padding: "12px 18px",
          borderRadius: "12px",
          border: engravingEnabled
            ? "2px solid #d4af37"
            : "1px solid rgba(255,255,255,.25)",
          background: engravingEnabled
            ? "rgba(212,175,55,.16)"
            : "rgba(255,255,255,.05)",
          color: "white",
          cursor: "pointer",
          marginBottom: "16px",
        }}
      >
        {engravingEnabled ? "✓ " : ""}Add Inside Engraving (+$20)
      </button>

      {engravingEnabled && (
        <div>
          <input
            type="text"
            value={engravingText}
            onChange={handleChange}
            placeholder="Enter engraving text"
            maxLength={maxCharacters}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,.25)",
              background: "rgba(20,20,20,.95)",
              color: "white",
              fontSize: "16px",
              marginBottom: "8px",
            }}
          />

          <p
            style={{
              margin: 0,
              opacity: 0.75,
              color:
                engravingText.length === maxCharacters ? "#d4af37" : "white",
              marginBottom: "18px",
            }}
          >
            {engravingText.length} / {maxCharacters} characters including spaces
          </p>

          <h3 style={{ marginBottom: "10px" }}>Choose Engraving Font</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "12px",
              marginBottom: "20px",
            }}
          >
            {engravingFonts.map((font) => (
              <button
                key={font.id}
                onClick={() => onChangeEngravingFont(font)}
                style={{
                  padding: "14px",
                  borderRadius: "12px",
                  border:
                    selectedEngravingFont?.id === font.id
                      ? "2px solid #d4af37"
                      : "1px solid rgba(255,255,255,.25)",
                  background:
                    selectedEngravingFont?.id === font.id
                      ? "rgba(212,175,55,.16)"
                      : "rgba(255,255,255,.05)",
                  color: "white",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    fontFamily: font.fontFamily,
                    fontSize: "24px",
                    marginBottom: "8px",
                  }}
                >
                  {previewText}
                </div>
                <strong>{font.name}</strong>
              </button>
            ))}
          </div>

          <div
            style={{
              padding: "18px",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,.25)",
              background: "rgba(255,255,255,.04)",
            }}
          >
            <p style={{ marginTop: 0, opacity: 0.75 }}>Engraving Preview</p>
            <div
              style={{
                fontFamily:
                  selectedEngravingFont?.fontFamily || "Arial, sans-serif",
                fontSize: "32px",
              }}
            >
              {previewText}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}