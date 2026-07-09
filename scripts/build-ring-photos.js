const fs = require("fs");
const path = require("path");

const collectionSlug = "signature";

const imageDir = path.join(process.cwd(), "public", "rings", collectionSlug);

const outputFile = path.join(
  process.cwd(),
  "src",
  "data",
  "collections",
  collectionSlug,
  "ringPhotos.js"
);

const materialRules = [
  { key: "stainless-steel", label: "Stainless Steel" },
  { key: "sterling-silver", label: "Sterling Silver" },
  { key: "black-ceramic", label: "Black Ceramic", material: "Ceramic", color: "Black" },
  { key: "white-ceramic", label: "White Ceramic", material: "Ceramic", color: "White" },
  { key: "titanium", label: "Titanium" },
  { key: "tungsten", label: "Tungsten" },
];

function parsePhoto(filename) {
  const lower = filename.toLowerCase();

  if (!/\.(png|jpg|jpeg|webp)$/.test(lower)) return null;
  if (!lower.startsWith(`${collectionSlug}-`)) return null;

  const materialRule = materialRules.find((rule) =>
    lower.includes(rule.key)
  );

  if (!materialRule) return null;

  const widthMatch = lower.match(/-(\d+)mm\.(png|jpg|jpeg|webp)$/);
  const width = widthMatch ? Number(widthMatch[1]) : null;

  let mineral = lower
    .replace(`${collectionSlug}-`, "")
    .replace(materialRule.key, "")
    .replace(/-\d+mm\.(png|jpg|jpeg|webp)$/i, "")
    .replace(/\.(png|jpg|jpeg|webp)$/i, "")
    .replace(/^-+|-+$/g, "");

  return {
    material: materialRule.material || materialRule.label,
    ...(materialRule.color ? { color: materialRule.color } : {}),
    ...(width ? { width } : {}),
    ...(mineral ? { mineral } : {}),
    image: `/rings/${collectionSlug}/${filename}`,
  };
}

const files = fs.readdirSync(imageDir);

const photos = files
  .map(parsePhoto)
  .filter(Boolean)
  .sort((a, b) => a.image.localeCompare(b.image));

const output = `export const signatureRingPhotos = ${JSON.stringify(
  photos,
  null,
  2
)};
`;

fs.writeFileSync(outputFile, output);

console.log(`Built ${photos.length} signature ring photos.`);
console.log(`Updated ${outputFile}`);