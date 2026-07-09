import Link from "next/link";
import { rings } from "@/data/rings";

export default function RingsPage() {
  return (
    <main
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "60px 30px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "48px",
          marginBottom: "50px",
        }}
      >
        Our Rings
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(350px,1fr))",
          gap: "35px",
        }}
      >
        {rings.map((ring) => (
          <Link
            key={ring.id}
            href={`/rings/${ring.slug}`}
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <div
              style={{
                background: "#111",
                border: "1px solid #333",
                borderRadius: "18px",
                overflow: "hidden",
                transition: "0.3s",
              }}
            >
              <img
                src={ring.images[0]}
                alt={ring.name}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "22px" }}>
                <h2
                  style={{
                    marginBottom: "12px",
                    fontSize: "24px",
                  }}
                >
                  {ring.name}
                </h2>

                <p
                  style={{
                    color: "#bbb",
                    marginBottom: "18px",
                  }}
                >
                  {ring.description}
                </p>

                <strong>{ring.metal}</strong>

                <div
                  style={{
                    marginTop: "22px",
                    display: "inline-block",
                    background: "#3b82f6",
                    color: "white",
                    padding: "10px 18px",
                    borderRadius: "8px",
                    fontWeight: "bold",
                  }}
                >
                  View Details →
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}