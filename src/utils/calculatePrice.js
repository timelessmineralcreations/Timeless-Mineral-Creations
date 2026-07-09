export default function calculatePrice({
  collection,
  metal,
  width,
  memorialMaterials,
  glow,
  engravingFont,
}) {
 let total = collection.pricing.profit || 100;

  // Metal Upgrade
  if (collection.pricing.metal?.[metal]) {
    total += collection.pricing.metal[metal];
  }

  // Width Upgrade
  if (collection.pricing.width?.[width]) {
    total += collection.pricing.width[width];
  }

  // Memorial Materials
  memorialMaterials.forEach((material) => {
    total += collection.pricing.memorialMaterials?.[material] || 0;
  });

  // Glow
  if (glow) {
    total += collection.pricing.glow || 0;
  }

  // Engraving
  if (engravingFont === "customSignature") {
    total +=
      collection.pricing.engraving?.customSignature || 0;
  } else if (engravingFont) {
    total +=
      collection.pricing.engraving?.standard || 0;
  }

  return total;
}