export const inlayStyles = [
  {
    id: "signature-alternating",
    name: "⭐ Signature Alternating Design",
    shortDescription: "Our Most Popular Design",
    description:
      "Four alternating sections of your memorial material and four alternating sections of your selected minerals.",

    featured: true,

    memorialMaterials: {
      enabled: true,
      allowed: [
        "ashes",
        "hair",
        "fur",
        "horseHair",
        "sand",
        "soil",
        "specialRequest",
      ],
      max: 2,
    },

    minerals: {
      enabled: true,
      max: 4,
    },

    accentMaterials: {
      enabled: false,
      allowed: [],
      max: 0,
    },

    glow: {
      enabled: true,
      max: 1,
    },

    engraving: {
      enabled: true,
    },

    specialRequest: {
      enabled: true,
      requiresApproval: true,
    },
  },

  {
    id: "memorial-base-sprinkle",
    name: "Memorial Base + Mineral Sprinkle",
    shortDescription: "Memorial Base with Minerals on Top",
    description:
      "A memorial material base with up to four selected minerals sprinkled on top. Hair, pet fur, or horse hair may also be placed on top.",

    featured: false,

    memorialMaterials: {
      enabled: true,
      allowed: [
        "ashes",
        "hair",
        "fur",
        "horseHair",
        "sand",
        "soil",
        "specialRequest",
      ],
      max: 2,
    },

    minerals: {
      enabled: true,
      max: 4,
    },

    accentMaterials: {
      enabled: true,
      allowed: ["goldFoil", "silverFoil"],
      max: 2,
    },

    glow: {
      enabled: true,
      max: 1,
    },

    engraving: {
      enabled: true,
    },

    specialRequest: {
      enabled: true,
      requiresApproval: true,
    },
  },

  {
    id: "solid-memorial",
    name: "Solid Memorial",
    shortDescription: "Memorial Material Only",
    description:
      "A full inlay crafted entirely from cremation ashes, sand, or soil.",

    featured: false,

    memorialMaterials: {
      enabled: true,
      allowed: [
        "ashes",
        "sand",
        "soil",
        "specialRequest",
      ],
      max: 1,
    },

    minerals: {
      enabled: false,
      max: 0,
    },

    accentMaterials: {
      enabled: false,
      allowed: [],
      max: 0,
    },

    glow: {
      enabled: true,
      max: 1,
    },

    engraving: {
      enabled: true,
    },

    specialRequest: {
      enabled: true,
      requiresApproval: true,
    },
  },

  {
    id: "mineral-center",
    name: "Mineral Center",
    shortDescription: "One Mineral with Memorial Material",
    description:
      "One selected mineral in the center with your memorial material on both sides.",

    featured: false,

    memorialMaterials: {
      enabled: true,
      allowed: [
        "ashes",
        "hair",
        "fur",
        "horseHair",
        "sand",
        "soil",
        "specialRequest",
      ],
      max: 1,
    },

    minerals: {
      enabled: true,
      max: 1,
    },

    accentMaterials: {
      enabled: false,
      allowed: [],
      max: 0,
    },

    glow: {
      enabled: true,
      max: 1,
    },

    engraving: {
      enabled: true,
    },

    specialRequest: {
      enabled: true,
      requiresApproval: true,
    },
  },

  {
    id: "solid-mineral",
    name: "Solid Mineral",
    shortDescription: "Mineral Only",
    description:
      "A full mineral inlay. If multiple minerals are selected they will be arranged in an alternating pattern.",

    featured: false,

    memorialMaterials: {
      enabled: false,
      allowed: [],
      max: 0,
    },

    minerals: {
      enabled: true,
      max: 8,
    },

    accentMaterials: {
      enabled: false,
      allowed: [],
      max: 0,
    },

    glow: {
      enabled: false,
      max: 0,
    },

    engraving: {
      enabled: true,
    },

    specialRequest: {
      enabled: true,
      requiresApproval: true,
    },
  },

  {
    id: "fabric-memorial",
    name: "Fabric Memorial",
    shortDescription: "Fabric Only",
    description:
      "A memorial design created using fabric. Mineral and glow powder are not available for this design.",

    featured: false,

    memorialMaterials: {
      enabled: true,
      allowed: [
        "fabric",
        "specialRequest",
      ],
      max: 1,
      locked: true,
    },

    minerals: {
      enabled: false,
      max: 0,
    },

    accentMaterials: {
      enabled: false,
      allowed: [],
      max: 0,
    },

    glow: {
      enabled: false,
      max: 0,
    },

    engraving: {
      enabled: true,
    },

    specialRequest: {
      enabled: true,
      requiresApproval: true,
    },
  },
];