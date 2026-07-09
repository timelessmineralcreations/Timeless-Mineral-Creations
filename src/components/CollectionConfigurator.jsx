"use client";
import RingInspirationGallery from "@/components/builder/RingInspirationGallery";
import getBestRingPhoto from "@/utils/getBestRingPhoto";
import GlowSelector from "@/components/builder/GlowSelector";
import { glowPowders } from "@/data/glowPowders";
import { useEffect, useState } from "react";
import { loadDesign } from "@/utils/savedDesigns";
import MaterialSelector from "@/components/builder/MaterialSelector";
import RingCoreSelector from "@/components/builder/RingCoreSelector";
import WidthSelector from "@/components/builder/WidthSelector";
import SizeSelector from "@/components/builder/SizeSelector";
import RingDesignSelector from "@/components/builder/RingDesignSelector";
import SummaryCard from "@/components/builder/SummaryCard";
import OptionCard from "@/components/builder/OptionCard";
import AccentMaterialSelector from "@/components/builder/AccentMaterialSelector";
import EngravingSelector from "@/components/builder/EngravingSelector";

import { memorialMaterials } from "@/data/memorialMaterials";
import { minerals } from "@/data/minerals";
import { inlayStyles } from "@/data/inlayStyles";
import { accentMaterials } from "@/data/accentMaterials";

export default function CollectionConfigurator({ collection }) {
  const ringCores = collection.ringCores || [];
  const materials = [...new Set(ringCores.map((core) => core.material))];

  const [selectedMaterial, setSelectedMaterial] = useState(materials[0]);
  const availableCores = ringCores.filter(
    (core) => core.material === selectedMaterial
  );

  const [selectedCore, setSelectedCore] = useState(availableCores[0]);
  const [selectedWidth, setSelectedWidth] = useState(availableCores[0]?.widths?.[0]);
  const [selectedSize, setSelectedSize] = useState(availableCores[0]?.widths?.[0]?.sizes?.[0]);

  const [selectedInlayStyle, setSelectedInlayStyle] = useState(
    inlayStyles.find((style) => style.featured) || inlayStyles[0]
  );

  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedMinerals, setSelectedMinerals] = useState([]);
  const [selectedAccentMaterials, setSelectedAccentMaterials] = useState([]);
const [engravingEnabled, setEngravingEnabled] = useState(false);
const [engravingText, setEngravingText] = useState("");
const [selectedEngravingFont, setSelectedEngravingFont] = useState({
  id: "arial",
  name: "Arial",
  fontFamily: "Arial, sans-serif",
});
const [selectedGlow, setSelectedGlow] = useState(null);
useEffect(() => {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const designId = params.get("design");

  if (!designId) return;

  try {
    const savedDesign = loadDesign(designId);

    if (!savedDesign) return;

    const savedMaterial = savedDesign.material || materials[0];

    const savedCores = ringCores.filter(
      (core) => core.material === savedMaterial
    );

    const savedCore =
      savedCores.find((core) => core.id === savedDesign.core) ||
      savedCores[0];

    const savedWidth =
      savedCore?.widths?.find(
        (widthOption) => widthOption.width === savedDesign.width
      ) || savedCore?.widths?.[0];

    const savedSize =
      savedWidth?.sizes?.find((size) => size === savedDesign.size) ||
      savedWidth?.sizes?.[0];

    const savedStyle =
      inlayStyles.find((style) => style.id === savedDesign.design) ||
      inlayStyles.find((style) => style.featured) ||
      inlayStyles[0];

    const savedMinerals = (savedDesign.minerals || [])
      .map((mineralId) => minerals.find((mineral) => mineral.id === mineralId))
      .filter(Boolean);

    const savedGlow =
      glowPowders.find((glow) => glow.id === savedDesign.glow) || null;

    setSelectedMaterial(savedMaterial);
    setSelectedCore(savedCore);
    setSelectedWidth(savedWidth);
    setSelectedSize(savedSize);
    setSelectedInlayStyle(savedStyle);
    setSelectedMaterials(savedDesign.memorialMaterials || []);
    setSelectedMinerals(savedMinerals);
    setSelectedAccentMaterials(savedDesign.accentMaterials || []);
    setSelectedGlow(savedGlow);
    setEngravingEnabled(savedDesign.engravingEnabled || false);
    setEngravingText(savedDesign.engravingText || "");

    console.log("Loaded saved design:", savedDesign);
  } catch (error) {
    console.error("Could not load saved design:", error);
  }
}, []);
  const allowedMemorialMaterials = selectedInlayStyle?.memorialMaterials?.enabled
    ? memorialMaterials.filter((material) =>
        selectedInlayStyle.memorialMaterials.allowed.includes(material.id)
      )
    : [];

  const allowedAccentMaterials = selectedInlayStyle?.accentMaterials?.enabled
    ? accentMaterials.filter((item) =>
        selectedInlayStyle.accentMaterials.allowed.includes(item.id)
      )
    : [];

  const maxMinerals = selectedInlayStyle?.minerals?.max || 0;
  const showMinerals = selectedInlayStyle?.minerals?.enabled;

  function chooseMaterial(material) {
    const cores = ringCores.filter((core) => core.material === material);
    const firstCore = cores[0];
    const firstWidth = firstCore?.widths?.[0];

    setSelectedMaterial(material);
    setSelectedCore(firstCore);
    setSelectedWidth(firstWidth);
    setSelectedSize(firstWidth?.sizes?.[0]);
  }

  function chooseCore(core) {
    const firstWidth = core.widths?.[0];
    setSelectedCore(core);
    setSelectedWidth(firstWidth);
    setSelectedSize(firstWidth?.sizes?.[0]);
  }

  function chooseWidth(widthOption) {
    setSelectedWidth(widthOption);
    setSelectedSize(widthOption.sizes?.[0]);
  }

  function chooseInlayStyle(style) {
    setSelectedInlayStyle(style);

    if (style.memorialMaterials?.locked) {
      setSelectedMaterials(style.memorialMaterials.allowed);
    } else {
      setSelectedMaterials([]);
    }

    setSelectedMinerals([]);
setSelectedAccentMaterials([]);
setSelectedGlow(null);

    if (!style.engraving?.enabled) {
      setEngravingEnabled(false);
      setEngravingText("");
    }
  }

  function toggleMemorialMaterial(id) {
    const max = selectedInlayStyle?.memorialMaterials?.max || 1;

    setSelectedMaterials((current) => {
      if (current.includes(id)) return current.filter((x) => x !== id);
      if (current.length >= max) return [id];
      return [...current, id];
    });
  }

  function toggleMineral(mineral) {
  setSelectedMinerals((current) => {
    if (current.some((item) => item.id === mineral.id)) {
      return current.filter((item) => item.id !== mineral.id);
    }

    if (current.length >= maxMinerals) {
      return current;
    }

    return [...current, mineral];
  });
}

  function toggleAccentMaterial(id) {
    const max = selectedInlayStyle?.accentMaterials?.max || 0;

    setSelectedAccentMaterials((current) => {
      if (current.includes(id)) return current.filter((x) => x !== id);
      if (current.length >= max) return current;
      return [...current, id];
    });
  }

  function toggleEngraving() {
    setEngravingEnabled((current) => {
      if (current) setEngravingText("");
      return !current;
    });
  }
  const ringImage = getBestRingPhoto({
  photos: collection.ringPhotos || [],
  selectedMaterial,
  selectedCore,
  selectedWidth,
  selectedMinerals,
  selectedMaterials,
  fallbackImage: collection.heroImage,
});
const [previewImage, setPreviewImage] = useState(null);
const mainImage = previewImage || ringImage;
useEffect(() => {
  setPreviewImage(null);
}, [selectedMaterial, selectedCore, selectedWidth, selectedMinerals]);
const basePrice =
  (collection.pricing?.profit || 100) +
  (collection.pricing?.metal?.[selectedMaterial] || 0) +
  (collection.pricing?.width?.[selectedWidth?.width] || 0);

const mineralPrice = selectedMinerals.reduce((total, mineral) => {
  return total + (mineral.price || 0);
}, 0);

const glowPrice =
  selectedGlow && selectedGlow.id !== "none" ? selectedGlow.price || 0 : 0;

const engravingPrice = engravingEnabled
  ? collection.pricing?.engraving?.standard || 25
  : 0;

const totalPrice = basePrice + mineralPrice + glowPrice + engravingPrice;
  return (
    <div
  style={{
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) 380px",
    gap: "40px",
    alignItems: "start",
  }}
>
      <section>
  <img
    src={mainImage}
    alt={collection.name}
    style={{
      width: "100%",
      maxHeight: "620px",
      objectFit: "cover",
      borderRadius: "18px",
    }}
  />

  <RingInspirationGallery
    photos={collection.ringPhotos || []}
    selectedMaterial={selectedMaterial}
    selectedWidth={selectedWidth}
    onSelectPhoto={setPreviewImage}
  />


     
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>{collection.name}</h1>
        <p style={{ fontSize: "18px", opacity: 0.85, marginBottom: "28px" }}>{collection.description}</p>

        <MaterialSelector materials={materials} selectedMaterial={selectedMaterial} onSelectMaterial={chooseMaterial} />

        <RingCoreSelector cores={availableCores} selectedCore={selectedCore} onSelectCore={chooseCore} />

        <WidthSelector widths={selectedCore?.widths} selectedWidth={selectedWidth} onSelectWidth={chooseWidth} />

        <SizeSelector sizes={selectedWidth?.sizes} selectedSize={selectedSize} onSelectSize={setSelectedSize} />

        <RingDesignSelector styles={inlayStyles} selectedStyle={selectedInlayStyle} onSelectStyle={chooseInlayStyle} />

        {selectedInlayStyle?.memorialMaterials?.enabled && (
          <section style={{ marginBottom: "30px" }}>
            <h2>{selectedInlayStyle.memorialMaterials.locked ? "Memorial Material" : "Choose Memorial Material"}</h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              {allowedMemorialMaterials.map((material) => (
                <OptionCard
                  key={material.id}
                  title={`${material.icon} ${material.name}`}
                  description={material.description}
                  active={selectedMaterials.includes(material.id)}
                  onClick={() =>
                    !selectedInlayStyle.memorialMaterials.locked &&
                    toggleMemorialMaterial(material.id)
                  }
                />
              ))}
            </div>
          </section>
        )}

        {showMinerals && (
          <section style={{ marginBottom: "30px" }}>
            <h2>
              Choose Minerals{" "}
              <span style={{ fontSize: "14px", opacity: 0.7 }}>up to {maxMinerals}</span>
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "12px" }}>
              {minerals.map((mineral) => (
                <OptionCard
  key={mineral.id}
  title={mineral.name}
  description={
    selectedMinerals.some((item) => item.id === mineral.id)
      ? "Selected"
      : mineral.price > 0
      ? `+$${mineral.price}`
      : "Included"
  }
  image={mineral.image}
  active={selectedMinerals.some((item) => item.id === mineral.id)}
  onClick={() => toggleMineral(mineral)}
/>
              ))}
            </div>
          </section>
        )}

        {selectedInlayStyle?.accentMaterials?.enabled && (
          <AccentMaterialSelector
            accentMaterials={allowedAccentMaterials}
            selectedAccentMaterials={selectedAccentMaterials}
            onToggleAccentMaterial={toggleAccentMaterial}
            max={selectedInlayStyle.accentMaterials.max}
          />
        )}

       {selectedInlayStyle?.glow?.enabled && (
  <GlowSelector
    glowPowders={glowPowders}
    selectedGlow={selectedGlow}
    onSelectGlow={setSelectedGlow}
  />
)}
        

       {selectedInlayStyle?.engraving?.enabled && (
  <EngravingSelector
    engravingEnabled={engravingEnabled}
    engravingText={engravingText}
    selectedEngravingFont={selectedEngravingFont}
    onToggleEngraving={toggleEngraving}
    onChangeEngraving={setEngravingText}
    onChangeEngravingFont={setSelectedEngravingFont}
  />
)}
                     </section>

      <aside
  style={{
    position: "sticky",
    top: "20px",
    alignSelf: "start",
  }}
>
  <SummaryCard
  collection={collection}
  mainImage={mainImage}
  selectedMaterial={selectedMaterial}
  selectedCore={selectedCore}
  selectedWidth={selectedWidth}
  selectedSize={selectedSize}
  selectedInlayStyle={selectedInlayStyle}
  selectedMaterials={selectedMaterials}
  selectedMinerals={selectedMinerals}
  selectedAccentMaterials={selectedAccentMaterials}
  selectedGlow={selectedGlow}
  selectedEngravingFont={selectedEngravingFont}
  engravingEnabled={engravingEnabled}
  engravingText={engravingText}
  totalPrice={totalPrice}
/>
</aside>
</div>
);
}