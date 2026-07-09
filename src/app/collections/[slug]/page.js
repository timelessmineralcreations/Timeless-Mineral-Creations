import { notFound } from "next/navigation";
import CollectionConfigurator from "@/components/CollectionConfigurator";

import { signatureCollection } from "@/data/collections/signature/collection";

const collections = [signatureCollection];

export default async function CollectionPage({ params }) {
  const { slug } = await params;

  const collection = collections.find((item) => item.slug === slug);

  if (!collection) {
    notFound();
  }

  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
      <CollectionConfigurator collection={collection} />
    </main>
  );
}