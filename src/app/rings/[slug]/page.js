import { rings } from "@/data/rings";
import { notFound } from "next/navigation";

export default function RingPage({ params }) {
  const ring = rings.find((r) => r.id === params.slug);

  if (!ring) {
    notFound();
  }

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 20px",
      }}
    >
      <img
        src={ring.images[0]}
        alt={ring.name}
        style={{
          width: "100%",
          borderRadius: "12px",
          marginBottom: "30px",
        }}
      />

      <h1>{ring.name}</h1>

      <p>{ring.description}</p>

      <hr />

      <p><strong>Metal:</strong> {ring.metal}</p>
      <p><strong>Width:</strong> {ring.width}</p>
      <p><strong>Shape:</strong> {ring.shape}</p>
      <p><strong>Finish:</strong> {ring.finish}</p>
      <p><strong>Category:</strong> {ring.category}</p>

      <h3>Available Inlays</h3>

      <ul>
        {ring.inlays.map((inlay) => (
          <li key={inlay}>{inlay}</li>
        ))}
      </ul>
    </main>
  );
}