import { signatureRingPhotos } from "./ringPhotos";
import { signatureRingCores } from "./ringCores";
import { signaturePricing } from "./pricing";

export const signatureCollection = {
  id: "signature",
  slug: "signature",
  name: "Signature Collection",
  description:
    "Design a one-of-a-kind memorial ring by selecting your ring material, edge style, width, memorial material, minerals, glow, and engraving.",

  heroImage: "/hero/signature-hero.jpg",
  startingPrice: 130,

  builder: "signature",
  ringCores: signatureRingCores,
  pricing: signaturePricing,
  ringPhotos: signatureRingPhotos,
};