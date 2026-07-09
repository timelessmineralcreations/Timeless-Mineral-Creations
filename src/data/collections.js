export const collections = [
  {
    id: "signature",
    slug: "signature",

    name: "Signature Collection",

    description:
      "A timeless beveled edge flat inlay band that can be customized with memorial materials and your choice of minerals.",

    images: [
      "/rings/signature/signature-turquoise-original.png",
    ],
heroImage: "/rings/signature/signature-stainless-steel-turquoise-howlite-8mm.png",
    startingPrice: 130,

    defaults: {
      metal: "Tungsten",
      width: 8,
    },

    metals: [
      "Tungsten",
      "Titanium",
      "Black Ceramic",
      "White Ceramic",
    ],

    widthsByMetal: {
      Tungsten: [4, 6, 8, 10],
      Titanium: [6, 8],
      "Black Ceramic": [4, 6, 8],
      "White Ceramic": [4, 6, 8],
    },

    sizesByMetalAndWidth: {
      Tungsten: {
        4: ["3","3.5","4","4.5","5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13","13.5","14","14.5","15","15.5","16"],
        6: ["3","3.5","4","4.5","5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13","13.5","14","14.5","15","15.5","16"],
        8: ["3","3.5","4","4.5","5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13","13.5","14","14.5","15","15.5","16","16.5","17","17.5","18","18.5","19","19.5","20"],
        10:["3","3.5","4","4.5","5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13","13.5","14","14.5","15","15.5","16","16.5","17","17.5","18","18.5","19","19.5","20"],
      },

      Titanium: {
        4: ["3","3.5","4","4.5","5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13","13.5","14","14.5","15","15.5","16"],
        6: ["3","3.5","4","4.5","5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13","13.5","14","14.5","15","15.5","16"],
        8: ["3","3.5","4","4.5","5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13","13.5","14","14.5","15","15.5","16","16.5","17","17.5","18","18.5","19","19.5","20"],
        10:["3","3.5","4","4.5","5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13","13.5","14","14.5","15","15.5","16","16.5","17","17.5","18","18.5","19","19.5","20"],
      },

      "Black Ceramic": {
        8: ["6","6.5","7","7.5","8","8.5","9","9.5","10"],
      },

      "White Ceramic": {
        8: ["6","6.5","7","7.5","8","8.5","9","9.5","10"],
      },
    },

    availableMemorialMaterials: {
      ashes: true,
      hair: true,
      fur: true,
      flowers: true,
      breastMilk: false,
      sand: true,
      soil: true,
      fabric: true,
      horseHair: true,
    },

    availableMinerals: "all",

    availableInlayStyles: [
  "alternating-channel",
  "solid-cremation",
  "mineral-center",
  "solid-mineral",
],
    availableGlow: {
      pink: true,
      blue: true,
      aqua: true,
      green: true,
      white: true,
      red: true,
      purple: true,
      orange: true,
    },

    availableFonts: {
      comicSans: true,
      arial: true,
      freestyleScript: true,
      sitka: true,
      papyrus: true,
      century: true,
      timesNewRoman: true,
      customSignature: true,
    },

    pricing: {
  profit: 100,

  metal: {
    Tungsten: 30,
    Titanium: 40,
    Ceramic: 35,
    "Sterling Silver": 60,
    "Stainless Steel": 30,
  },

  width: {
    4: 0,
    6: 0,
    8: 0,
    10: 0,
  },

  memorialMaterials: {
    ashes: 0,
    hair: 20,
    fur: 20,
    flowers: 10,
    breastMilk: 50,
    sand: 10,
    soil: 10,
    fabric: 15,
    horseHair: 25,
  },

  glow: 15,

    engraving: {
    standard: 25,
    customSignature: 50,
  },
},
  },
];
