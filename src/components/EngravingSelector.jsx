export default function EngravingSelector({
  engraving,
  setEngraving,
  enabled,
}) {
  if (!enabled) return null;

  return (
    <section style={{ marginTop: "30px" }}>
      <h3>Inside Engraving</h3>

      <p style={{ opacity: 0.75, lineHeight: "1.6" }}>
        Step 1: Select your font. Step 2: Choose your personal message.
        Must be under 25 characters including spaces. Engraving is case
        sensitive.
      </p>

      <input
        type="text"
        value={engraving}
        onChange={(e) => setEngraving(e.target.value)}
        placeholder="Enter engraving..."
        maxLength={25}
        style={{
          width: "100%",
          padding: "14px",
          marginTop: "12px",
          borderRadius: "10px",
          border: "1px solid rgba(255,255,255,0.2)",
          background: "rgba(255,255,255,0.05)",
          color: "inherit",
          fontSize: "16px",
        }}
      />

      <p style={{ marginTop: "8px", opacity: 0.6, fontSize: "14px" }}>
        {engraving.length}/25 characters
      </p>

      <div style={{ marginTop: "14px", opacity: 0.75, fontSize: "14px" }}>
        <strong>Examples:</strong>
        <p>Michael 9/20/57</p>
        <p>I will always love you</p>
        <p>Gone But Never Forgotten</p>
      </div>
    </section>
  );
}