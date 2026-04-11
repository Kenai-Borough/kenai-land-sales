import type {
  DashboardInquiry,
  DashboardTransaction,
  MarketPoint,
  Parcel,
  SavedSearch,
  Testimonial,
} from '../types'

export const parcels: Parcel[] = [
  {
    "id": "parcel-01",
    "slug": "kenai-01",
    "title": "Kenai Mountain View Parcel",
    "city": "Kenai",
    "borough": "Kenai Peninsula Borough",
    "region": "Central Kenai",
    "address": "101 Owner Direct Trail, Kenai, AK",
    "gps": "60.5334, -151.2833",
    "price": 42000,
    "acreage": 0.75,
    "landType": "residential",
    "zoning": "Suburban Residential",
    "status": "active",
    "locationLabel": "Kenai, Alaska",
    "coordinates": [
      60.5334,
      -151.2833
    ],
    "boundary": [
      [
        60.5514,
        -151.319915
      ],
      [
        60.5433,
        -151.246685
      ],
      [
        60.5154,
        -151.257669
      ],
      [
        60.5226,
        -151.316254
      ]
    ],
    "views": 161,
    "favorites": 10,
    "featured": false,
    "verifiedSeller": true,
    "clearTitle": true,
    "surveyed": true,
    "roadAccess": "Borough maintained road",
    "utilities": [
      "Power at road",
      "Borough maintained road",
      "Nearby well sites"
    ],
    "features": [
      "road access",
      "utilities",
      "buildable",
      "surveyed",
      "clear title"
    ],
    "description": "Kenai Mountain View Parcel gives buyers a direct-owner opportunity in Kenai, Alaska. Minutes from town with mature spruce, easy year-round access, and enough room for a home, shop, or guest cabin. The parcel captures the Kenai Peninsula feel with spruce forest, mountain horizons, and dependable access for site visits and closing coordination without broker overhead.",
    "sellerNotes": "Seller has staked corners and packaged utilities notes so buyers can move into due diligence quickly.",
    "dueDiligence": {
      "titleStatus": "Preliminary title reviewed",
      "surveyStatus": "Stamped survey on file",
      "environmentalStatus": "No known wetlands or contamination issues reported by seller",
      "easements": "Standard utility and access easements only",
      "liens": "No open liens disclosed",
      "docsReady": [
        "Deed copy",
        "Tax statement",
        "Parcel map",
        "Disclosure packet"
      ]
    },
    "nearbyAmenities": [
      {
        "label": "Old Town Kenai",
        "distance": "6 min"
      },
      {
        "label": "Central Peninsula Hospital",
        "distance": "18 min"
      },
      {
        "label": "Kenai Municipal Airport",
        "distance": "11 min"
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80"
    ],
    "documents": [
      {
        "type": "parcel_map",
        "label": "Parcel map PDF"
      },
      {
        "type": "survey",
        "label": "Survey and corner notes"
      },
      {
        "type": "title",
        "label": "Title and tax summary"
      }
    ],
    "seller": {
      "id": "seller-1",
      "name": "Sarah McKinley",
      "email": "sarah@kenailandsales.com",
      "phone": "907-555-0101",
      "verified": true,
      "successRate": 96,
      "transactionCount": 4,
      "responseRate": 93,
      "responseTime": "within 4 hours"
    },
    "listedAt": "2026-02-14T10:00:00.000Z",
    "metrics": [
      {
        "label": "Price / acre",
        "value": "$56000"
      },
      {
        "label": "Parcel ID",
        "value": "KN-3101"
      },
      {
        "label": "Road access",
        "value": "Direct"
      },
      {
        "label": "Closing support",
        "value": "Escrow-ready"
      }
    ]
  },
  {
    "id": "parcel-02",
    "slug": "kenai-02",
    "title": "Kenai Ready-to-Build Acreage",
    "city": "Kenai",
    "borough": "Kenai Peninsula Borough",
    "region": "Central Kenai",
    "address": "102 Owner Direct Trail, Kenai, AK",
    "gps": "60.5544, -151.2583",
    "price": 68000,
    "acreage": 1.8,
    "landType": "residential",
    "zoning": "Suburban Residential",
    "status": "active",
    "locationLabel": "Kenai, Alaska",
    "coordinates": [
      60.5544,
      -151.2583
    ],
    "boundary": [
      [
        60.5784,
        -151.30712
      ],
      [
        60.5676,
        -151.20948
      ],
      [
        60.5304,
        -151.224126
      ],
      [
        60.54,
        -151.302238
      ]
    ],
    "views": 182,
    "favorites": 12,
    "featured": false,
    "verifiedSeller": true,
    "clearTitle": true,
    "surveyed": true,
    "roadAccess": "Borough maintained road",
    "utilities": [
      "Power at road",
      "Borough maintained road",
      "Nearby well sites"
    ],
    "features": [
      "road access",
      "utilities",
      "buildable",
      "surveyed",
      "clear title"
    ],
    "description": "Kenai Ready-to-Build Acreage gives buyers a direct-owner opportunity in Kenai, Alaska. Minutes from town with mature spruce, easy year-round access, and enough room for a home, shop, or guest cabin. The parcel captures the Kenai Peninsula feel with spruce forest, mountain horizons, and dependable access for site visits and closing coordination without broker overhead.",
    "sellerNotes": "Seller has staked corners and packaged utilities notes so buyers can move into due diligence quickly.",
    "dueDiligence": {
      "titleStatus": "Preliminary title reviewed",
      "surveyStatus": "Stamped survey on file",
      "environmentalStatus": "No known wetlands or contamination issues reported by seller",
      "easements": "Standard utility and access easements only",
      "liens": "No open liens disclosed",
      "docsReady": [
        "Deed copy",
        "Tax statement",
        "Parcel map",
        "Disclosure packet"
      ]
    },
    "nearbyAmenities": [
      {
        "label": "Old Town Kenai",
        "distance": "6 min"
      },
      {
        "label": "Central Peninsula Hospital",
        "distance": "18 min"
      },
      {
        "label": "Kenai Municipal Airport",
        "distance": "11 min"
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80"
    ],
    "documents": [
      {
        "type": "parcel_map",
        "label": "Parcel map PDF"
      },
      {
        "type": "survey",
        "label": "Survey and corner notes"
      },
      {
        "type": "title",
        "label": "Title and tax summary"
      }
    ],
    "seller": {
      "id": "seller-2",
      "name": "Tyler Jensen",
      "email": "tyler@kenailandsales.com",
      "phone": "907-555-0102",
      "verified": true,
      "successRate": 97,
      "transactionCount": 5,
      "responseRate": 94,
      "responseTime": "same day"
    },
    "listedAt": "2026-03-05T10:00:00.000Z",
    "metrics": [
      {
        "label": "Price / acre",
        "value": "$37778"
      },
      {
        "label": "Parcel ID",
        "value": "KN-3102"
      },
      {
        "label": "Road access",
        "value": "Direct"
      },
      {
        "label": "Closing support",
        "value": "Escrow-ready"
      }
    ]
  },
  {
    "id": "parcel-03",
    "slug": "kenai-03",
    "title": "Kenai Creekside Tract",
    "city": "Kenai",
    "borough": "Kenai Peninsula Borough",
    "region": "Central Kenai",
    "address": "103 Owner Direct Trail, Kenai, AK",
    "gps": "60.5754, -151.2333",
    "price": 115000,
    "acreage": 4.6,
    "landType": "residential",
    "zoning": "Suburban Residential",
    "status": "active",
    "locationLabel": "Kenai, Alaska",
    "coordinates": [
      60.5754,
      -151.2333
    ],
    "boundary": [
      [
        60.6054,
        -151.294326
      ],
      [
        60.5919,
        -151.172274
      ],
      [
        60.5454,
        -151.190582
      ],
      [
        60.5574,
        -151.288223
      ]
    ],
    "views": 203,
    "favorites": 14,
    "featured": false,
    "verifiedSeller": true,
    "clearTitle": true,
    "surveyed": false,
    "roadAccess": "Borough maintained road",
    "utilities": [
      "Power at road",
      "Borough maintained road",
      "Nearby well sites"
    ],
    "features": [
      "road access",
      "utilities",
      "buildable",
      "surveyed",
      "clear title"
    ],
    "description": "Kenai Creekside Tract gives buyers a direct-owner opportunity in Kenai, Alaska. Minutes from town with mature spruce, easy year-round access, and enough room for a home, shop, or guest cabin. The parcel captures the Kenai Peninsula feel with spruce forest, mountain horizons, and dependable access for site visits and closing coordination without broker overhead.",
    "sellerNotes": "Seller has staked corners and packaged utilities notes so buyers can move into due diligence quickly.",
    "dueDiligence": {
      "titleStatus": "Preliminary title reviewed",
      "surveyStatus": "Corners flagged; survey quote available",
      "environmentalStatus": "No known wetlands or contamination issues reported by seller",
      "easements": "Standard utility and access easements only",
      "liens": "No open liens disclosed",
      "docsReady": [
        "Deed copy",
        "Tax statement",
        "Parcel map",
        "Disclosure packet"
      ]
    },
    "nearbyAmenities": [
      {
        "label": "Old Town Kenai",
        "distance": "6 min"
      },
      {
        "label": "Central Peninsula Hospital",
        "distance": "18 min"
      },
      {
        "label": "Kenai Municipal Airport",
        "distance": "11 min"
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80"
    ],
    "documents": [
      {
        "type": "parcel_map",
        "label": "Parcel map PDF"
      },
      {
        "type": "survey",
        "label": "Survey and corner notes"
      },
      {
        "type": "title",
        "label": "Title and tax summary"
      }
    ],
    "seller": {
      "id": "seller-3",
      "name": "Alyssa Rowan",
      "email": "alyssa@kenailandsales.com",
      "phone": "907-555-0103",
      "verified": true,
      "successRate": 98,
      "transactionCount": 6,
      "responseRate": 95,
      "responseTime": "within 4 hours"
    },
    "listedAt": "2026-03-18T10:00:00.000Z",
    "metrics": [
      {
        "label": "Price / acre",
        "value": "$25000"
      },
      {
        "label": "Parcel ID",
        "value": "KN-3103"
      },
      {
        "label": "Road access",
        "value": "Direct"
      },
      {
        "label": "Closing support",
        "value": "Escrow-ready"
      }
    ]
  },
  {
    "id": "parcel-04",
    "slug": "soldotna-04",
    "title": "Soldotna View Parcel",
    "city": "Soldotna",
    "borough": "Kenai Peninsula Borough",
    "region": "Central Kenai",
    "address": "104 Owner Direct Trail, Soldotna, AK",
    "gps": "60.4654, -151.0833",
    "price": 65000,
    "acreage": 1.2,
    "landType": "mixed_use",
    "zoning": "Mixed Use",
    "status": "active",
    "locationLabel": "Soldotna, Alaska",
    "coordinates": [
      60.4654,
      -151.0833
    ],
    "boundary": [
      [
        60.4834,
        -151.119839
      ],
      [
        60.4753,
        -151.046761
      ],
      [
        60.4474,
        -151.057723
      ],
      [
        60.4546,
        -151.116185
      ]
    ],
    "views": 224,
    "favorites": 16,
    "featured": true,
    "verifiedSeller": true,
    "clearTitle": true,
    "surveyed": true,
    "roadAccess": "Borough maintained road",
    "utilities": [
      "Power",
      "Natural gas nearby",
      "High-speed internet corridor"
    ],
    "features": [
      "road access",
      "utilities",
      "buildable",
      "clear title",
      "most viewed"
    ],
    "description": "Soldotna View Parcel gives buyers a direct-owner opportunity in Soldotna, Alaska. Flexible frontage with room for a shop house, contractor yard, or small business tied to a residential build. The parcel captures the Kenai Peninsula feel with spruce forest, mountain horizons, and dependable access for site visits and closing coordination without broker overhead.",
    "sellerNotes": "Owner gathered traffic counts, utility proximity maps, and builder sketches to make direct negotiation straightforward.",
    "dueDiligence": {
      "titleStatus": "Preliminary title reviewed",
      "surveyStatus": "Stamped survey on file",
      "environmentalStatus": "No known wetlands or contamination issues reported by seller",
      "easements": "Standard utility and access easements only",
      "liens": "No open liens disclosed",
      "docsReady": [
        "Deed copy",
        "Tax statement",
        "Parcel map",
        "Disclosure packet"
      ]
    },
    "nearbyAmenities": [
      {
        "label": "Soldotna Creek Park",
        "distance": "5 min"
      },
      {
        "label": "Central Peninsula Hospital",
        "distance": "8 min"
      },
      {
        "label": "Fred Meyer",
        "distance": "7 min"
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80"
    ],
    "documents": [
      {
        "type": "parcel_map",
        "label": "Parcel map PDF"
      },
      {
        "type": "survey",
        "label": "Survey and corner notes"
      },
      {
        "type": "title",
        "label": "Title and tax summary"
      }
    ],
    "seller": {
      "id": "seller-4",
      "name": "Mark Seavey",
      "email": "mark@kenailandsales.com",
      "phone": "907-555-0104",
      "verified": true,
      "successRate": 95,
      "transactionCount": 7,
      "responseRate": 96,
      "responseTime": "same day"
    },
    "listedAt": "2026-04-02T10:00:00.000Z",
    "metrics": [
      {
        "label": "Price / acre",
        "value": "$54167"
      },
      {
        "label": "Parcel ID",
        "value": "KN-3104"
      },
      {
        "label": "Road access",
        "value": "Direct"
      },
      {
        "label": "Closing support",
        "value": "Escrow-ready"
      }
    ]
  },
  {
    "id": "parcel-05",
    "slug": "soldotna-05",
    "title": "Soldotna Spruce Lot",
    "city": "Soldotna",
    "borough": "Kenai Peninsula Borough",
    "region": "Central Kenai",
    "address": "105 Owner Direct Trail, Soldotna, AK",
    "gps": "60.4864, -151.0583",
    "price": 138000,
    "acreage": 2.6,
    "landType": "mixed_use",
    "zoning": "Mixed Use",
    "status": "active",
    "locationLabel": "Soldotna, Alaska",
    "coordinates": [
      60.4864,
      -151.0583
    ],
    "boundary": [
      [
        60.5104,
        -151.107018
      ],
      [
        60.4996,
        -151.009582
      ],
      [
        60.4624,
        -151.024197
      ],
      [
        60.472,
        -151.102146
      ]
    ],
    "views": 245,
    "favorites": 18,
    "featured": false,
    "verifiedSeller": true,
    "clearTitle": false,
    "surveyed": true,
    "roadAccess": "Borough maintained road",
    "utilities": [
      "Power",
      "Natural gas nearby",
      "High-speed internet corridor"
    ],
    "features": [
      "road access",
      "utilities",
      "buildable",
      "clear title",
      "most viewed"
    ],
    "description": "Soldotna Spruce Lot gives buyers a direct-owner opportunity in Soldotna, Alaska. Flexible frontage with room for a shop house, contractor yard, or small business tied to a residential build. The parcel captures the Kenai Peninsula feel with spruce forest, mountain horizons, and dependable access for site visits and closing coordination without broker overhead.",
    "sellerNotes": "Owner gathered traffic counts, utility proximity maps, and builder sketches to make direct negotiation straightforward.",
    "dueDiligence": {
      "titleStatus": "Commitment requested from title company",
      "surveyStatus": "Stamped survey on file",
      "environmentalStatus": "No known wetlands or contamination issues reported by seller",
      "easements": "Standard utility and access easements only",
      "liens": "Seller resolving historical filing before closing",
      "docsReady": [
        "Deed copy",
        "Tax statement",
        "Parcel map",
        "Disclosure packet"
      ]
    },
    "nearbyAmenities": [
      {
        "label": "Soldotna Creek Park",
        "distance": "5 min"
      },
      {
        "label": "Central Peninsula Hospital",
        "distance": "8 min"
      },
      {
        "label": "Fred Meyer",
        "distance": "7 min"
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80"
    ],
    "documents": [
      {
        "type": "parcel_map",
        "label": "Parcel map PDF"
      },
      {
        "type": "survey",
        "label": "Survey and corner notes"
      },
      {
        "type": "title",
        "label": "Title and tax summary"
      }
    ],
    "seller": {
      "id": "seller-5",
      "name": "Evelyn North",
      "email": "evelyn@kenailandsales.com",
      "phone": "907-555-0105",
      "verified": true,
      "successRate": 96,
      "transactionCount": 8,
      "responseRate": 92,
      "responseTime": "within 4 hours"
    },
    "listedAt": "2026-01-10T10:00:00.000Z",
    "metrics": [
      {
        "label": "Price / acre",
        "value": "$53077"
      },
      {
        "label": "Parcel ID",
        "value": "KN-3105"
      },
      {
        "label": "Road access",
        "value": "Direct"
      },
      {
        "label": "Closing support",
        "value": "Escrow-ready"
      }
    ]
  },
  {
    "id": "parcel-06",
    "slug": "soldotna-06",
    "title": "Soldotna Mountain View Parcel",
    "city": "Soldotna",
    "borough": "Kenai Peninsula Borough",
    "region": "Central Kenai",
    "address": "106 Owner Direct Trail, Soldotna, AK",
    "gps": "60.5074, -151.0333",
    "price": 189000,
    "acreage": 4.1,
    "landType": "mixed_use",
    "zoning": "Mixed Use",
    "status": "active",
    "locationLabel": "Soldotna, Alaska",
    "coordinates": [
      60.5074,
      -151.0333
    ],
    "boundary": [
      [
        60.5374,
        -151.094198
      ],
      [
        60.5239,
        -150.972402
      ],
      [
        60.4774,
        -150.990672
      ],
      [
        60.4894,
        -151.088108
      ]
    ],
    "views": 266,
    "favorites": 20,
    "featured": false,
    "verifiedSeller": true,
    "clearTitle": true,
    "surveyed": false,
    "roadAccess": "Borough maintained road",
    "utilities": [
      "Power",
      "Natural gas nearby",
      "High-speed internet corridor"
    ],
    "features": [
      "road access",
      "utilities",
      "buildable",
      "clear title",
      "most viewed"
    ],
    "description": "Soldotna Mountain View Parcel gives buyers a direct-owner opportunity in Soldotna, Alaska. Flexible frontage with room for a shop house, contractor yard, or small business tied to a residential build. The parcel captures the Kenai Peninsula feel with spruce forest, mountain horizons, and dependable access for site visits and closing coordination without broker overhead.",
    "sellerNotes": "Owner gathered traffic counts, utility proximity maps, and builder sketches to make direct negotiation straightforward.",
    "dueDiligence": {
      "titleStatus": "Preliminary title reviewed",
      "surveyStatus": "Corners flagged; survey quote available",
      "environmentalStatus": "No known wetlands or contamination issues reported by seller",
      "easements": "Standard utility and access easements only",
      "liens": "No open liens disclosed",
      "docsReady": [
        "Deed copy",
        "Tax statement",
        "Parcel map",
        "Disclosure packet"
      ]
    },
    "nearbyAmenities": [
      {
        "label": "Soldotna Creek Park",
        "distance": "5 min"
      },
      {
        "label": "Central Peninsula Hospital",
        "distance": "8 min"
      },
      {
        "label": "Fred Meyer",
        "distance": "7 min"
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80"
    ],
    "documents": [
      {
        "type": "parcel_map",
        "label": "Parcel map PDF"
      },
      {
        "type": "survey",
        "label": "Survey and corner notes"
      },
      {
        "type": "title",
        "label": "Title and tax summary"
      }
    ],
    "seller": {
      "id": "seller-6",
      "name": "Ben Kachemak",
      "email": "ben@kenailandsales.com",
      "phone": "907-555-0106",
      "verified": true,
      "successRate": 97,
      "transactionCount": 3,
      "responseRate": 93,
      "responseTime": "same day"
    },
    "listedAt": "2026-02-14T10:00:00.000Z",
    "metrics": [
      {
        "label": "Price / acre",
        "value": "$46098"
      },
      {
        "label": "Parcel ID",
        "value": "KN-3106"
      },
      {
        "label": "Road access",
        "value": "Direct"
      },
      {
        "label": "Closing support",
        "value": "Escrow-ready"
      }
    ]
  },
  {
    "id": "parcel-07",
    "slug": "homer-07",
    "title": "Homer Ready-to-Build Acreage",
    "city": "Homer",
    "borough": "Kenai Peninsula Borough",
    "region": "Kachemak Bay",
    "address": "107 Owner Direct Trail, Homer, AK",
    "gps": "59.6215, -151.5733",
    "price": 189000,
    "acreage": 1.1,
    "landType": "waterfront",
    "zoning": "Coastal Residential",
    "status": "active",
    "locationLabel": "Homer, Alaska",
    "coordinates": [
      59.6215,
      -151.5733
    ],
    "boundary": [
      [
        59.6395,
        -151.608916
      ],
      [
        59.6314,
        -151.537684
      ],
      [
        59.6035,
        -151.548369
      ],
      [
        59.6107,
        -151.605354
      ]
    ],
    "views": 287,
    "favorites": 22,
    "featured": true,
    "verifiedSeller": true,
    "clearTitle": true,
    "surveyed": true,
    "roadAccess": "Borough maintained road",
    "utilities": [
      "Power nearby",
      "Driveway pad",
      "Private bluff access"
    ],
    "features": [
      "water rights",
      "buildable",
      "surveyed",
      "clear title",
      "view corridor",
      "ocean view"
    ],
    "description": "Homer Ready-to-Build Acreage gives buyers a direct-owner opportunity in Homer, Alaska. A dramatic homesite with panoramic water views, bluff privacy, and the kind of sunset exposure buyers search all summer for. The parcel captures the Kenai Peninsula feel with spruce forest, mountain horizons, and dependable access for site visits and closing coordination without broker overhead.",
    "sellerNotes": "Bluff setbacks and view corridors are already summarized for buyers, reducing broker-style guesswork.",
    "dueDiligence": {
      "titleStatus": "Preliminary title reviewed",
      "surveyStatus": "Stamped survey on file",
      "environmentalStatus": "No known wetlands or contamination issues reported by seller",
      "easements": "Standard utility and access easements only",
      "liens": "No open liens disclosed",
      "docsReady": [
        "Deed copy",
        "Tax statement",
        "Parcel map",
        "Disclosure packet"
      ]
    },
    "nearbyAmenities": [
      {
        "label": "Homer Spit",
        "distance": "14 min"
      },
      {
        "label": "South Peninsula Hospital",
        "distance": "11 min"
      },
      {
        "label": "Homer Airport",
        "distance": "9 min"
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1200&q=80"
    ],
    "documents": [
      {
        "type": "parcel_map",
        "label": "Parcel map PDF"
      },
      {
        "type": "survey",
        "label": "Survey and corner notes"
      },
      {
        "type": "title",
        "label": "Title and tax summary"
      }
    ],
    "seller": {
      "id": "seller-1",
      "name": "Sarah McKinley",
      "email": "sarah@kenailandsales.com",
      "phone": "907-555-0101",
      "verified": true,
      "successRate": 98,
      "transactionCount": 4,
      "responseRate": 94,
      "responseTime": "within 4 hours"
    },
    "listedAt": "2026-03-05T10:00:00.000Z",
    "metrics": [
      {
        "label": "Price / acre",
        "value": "$171818"
      },
      {
        "label": "Parcel ID",
        "value": "KN-3107"
      },
      {
        "label": "Road access",
        "value": "Direct"
      },
      {
        "label": "Closing support",
        "value": "Escrow-ready"
      }
    ]
  },
  {
    "id": "parcel-08",
    "slug": "homer-08",
    "title": "Homer Creekside Tract",
    "city": "Homer",
    "borough": "Kenai Peninsula Borough",
    "region": "Kachemak Bay",
    "address": "108 Owner Direct Trail, Homer, AK",
    "gps": "59.6425, -151.5483",
    "price": 325000,
    "acreage": 2.3,
    "landType": "waterfront",
    "zoning": "Coastal Residential",
    "status": "active",
    "locationLabel": "Homer, Alaska",
    "coordinates": [
      59.6425,
      -151.5483
    ],
    "boundary": [
      [
        59.6665,
        -151.595788
      ],
      [
        59.6557,
        -151.500812
      ],
      [
        59.6185,
        -151.515059
      ],
      [
        59.6281,
        -151.591039
      ]
    ],
    "views": 308,
    "favorites": 24,
    "featured": true,
    "verifiedSeller": true,
    "clearTitle": true,
    "surveyed": true,
    "roadAccess": "Borough maintained road",
    "utilities": [
      "Power nearby",
      "Driveway pad",
      "Private bluff access"
    ],
    "features": [
      "water rights",
      "buildable",
      "surveyed",
      "clear title",
      "view corridor",
      "ocean view"
    ],
    "description": "Homer Creekside Tract gives buyers a direct-owner opportunity in Homer, Alaska. A dramatic homesite with panoramic water views, bluff privacy, and the kind of sunset exposure buyers search all summer for. The parcel captures the Kenai Peninsula feel with spruce forest, mountain horizons, and dependable access for site visits and closing coordination without broker overhead.",
    "sellerNotes": "Bluff setbacks and view corridors are already summarized for buyers, reducing broker-style guesswork.",
    "dueDiligence": {
      "titleStatus": "Preliminary title reviewed",
      "surveyStatus": "Stamped survey on file",
      "environmentalStatus": "No known wetlands or contamination issues reported by seller",
      "easements": "Standard utility and access easements only",
      "liens": "No open liens disclosed",
      "docsReady": [
        "Deed copy",
        "Tax statement",
        "Parcel map",
        "Disclosure packet"
      ]
    },
    "nearbyAmenities": [
      {
        "label": "Homer Spit",
        "distance": "14 min"
      },
      {
        "label": "South Peninsula Hospital",
        "distance": "11 min"
      },
      {
        "label": "Homer Airport",
        "distance": "9 min"
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1200&q=80"
    ],
    "documents": [
      {
        "type": "parcel_map",
        "label": "Parcel map PDF"
      },
      {
        "type": "survey",
        "label": "Survey and corner notes"
      },
      {
        "type": "title",
        "label": "Title and tax summary"
      }
    ],
    "seller": {
      "id": "seller-2",
      "name": "Tyler Jensen",
      "email": "tyler@kenailandsales.com",
      "phone": "907-555-0102",
      "verified": true,
      "successRate": 95,
      "transactionCount": 5,
      "responseRate": 95,
      "responseTime": "same day"
    },
    "listedAt": "2026-03-18T10:00:00.000Z",
    "metrics": [
      {
        "label": "Price / acre",
        "value": "$141304"
      },
      {
        "label": "Parcel ID",
        "value": "KN-3108"
      },
      {
        "label": "Road access",
        "value": "Direct"
      },
      {
        "label": "Closing support",
        "value": "Escrow-ready"
      }
    ]
  },
  {
    "id": "parcel-09",
    "slug": "homer-09",
    "title": "Homer View Parcel",
    "city": "Homer",
    "borough": "Kenai Peninsula Borough",
    "region": "Kachemak Bay",
    "address": "109 Owner Direct Trail, Homer, AK",
    "gps": "59.6635, -151.5233",
    "price": 479000,
    "acreage": 3.7,
    "landType": "waterfront",
    "zoning": "Coastal Residential",
    "status": "active",
    "locationLabel": "Homer, Alaska",
    "coordinates": [
      59.6635,
      -151.5233
    ],
    "boundary": [
      [
        59.6935,
        -151.58266
      ],
      [
        59.68,
        -151.46394
      ],
      [
        59.6335,
        -151.481748
      ],
      [
        59.6455,
        -151.576724
      ]
    ],
    "views": 329,
    "favorites": 26,
    "featured": true,
    "verifiedSeller": true,
    "clearTitle": true,
    "surveyed": false,
    "roadAccess": "Borough maintained road",
    "utilities": [
      "Power nearby",
      "Driveway pad",
      "Private bluff access"
    ],
    "features": [
      "water rights",
      "buildable",
      "surveyed",
      "clear title",
      "view corridor",
      "ocean view"
    ],
    "description": "Homer View Parcel gives buyers a direct-owner opportunity in Homer, Alaska. A dramatic homesite with panoramic water views, bluff privacy, and the kind of sunset exposure buyers search all summer for. The parcel captures the Kenai Peninsula feel with spruce forest, mountain horizons, and dependable access for site visits and closing coordination without broker overhead.",
    "sellerNotes": "Bluff setbacks and view corridors are already summarized for buyers, reducing broker-style guesswork.",
    "dueDiligence": {
      "titleStatus": "Preliminary title reviewed",
      "surveyStatus": "Corners flagged; survey quote available",
      "environmentalStatus": "No known wetlands or contamination issues reported by seller",
      "easements": "Standard utility and access easements only",
      "liens": "No open liens disclosed",
      "docsReady": [
        "Deed copy",
        "Tax statement",
        "Parcel map",
        "Disclosure packet"
      ]
    },
    "nearbyAmenities": [
      {
        "label": "Homer Spit",
        "distance": "14 min"
      },
      {
        "label": "South Peninsula Hospital",
        "distance": "11 min"
      },
      {
        "label": "Homer Airport",
        "distance": "9 min"
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1200&q=80"
    ],
    "documents": [
      {
        "type": "parcel_map",
        "label": "Parcel map PDF"
      },
      {
        "type": "survey",
        "label": "Survey and corner notes"
      },
      {
        "type": "title",
        "label": "Title and tax summary"
      }
    ],
    "seller": {
      "id": "seller-3",
      "name": "Alyssa Rowan",
      "email": "alyssa@kenailandsales.com",
      "phone": "907-555-0103",
      "verified": true,
      "successRate": 96,
      "transactionCount": 6,
      "responseRate": 96,
      "responseTime": "within 4 hours"
    },
    "listedAt": "2026-04-02T10:00:00.000Z",
    "metrics": [
      {
        "label": "Price / acre",
        "value": "$129459"
      },
      {
        "label": "Parcel ID",
        "value": "KN-3109"
      },
      {
        "label": "Road access",
        "value": "Direct"
      },
      {
        "label": "Closing support",
        "value": "Escrow-ready"
      }
    ]
  },
  {
    "id": "parcel-10",
    "slug": "sterling-10",
    "title": "Sterling Spruce Lot",
    "city": "Sterling",
    "borough": "Kenai Peninsula Borough",
    "region": "Middle Peninsula",
    "address": "110 Owner Direct Trail, Sterling, AK",
    "gps": "60.5169, -150.7891",
    "price": 29000,
    "acreage": 5.5,
    "landType": "homestead",
    "zoning": "Rural Residential",
    "status": "active",
    "locationLabel": "Sterling, Alaska",
    "coordinates": [
      60.5169,
      -150.7891
    ],
    "boundary": [
      [
        60.5349,
        -150.825697
      ],
      [
        60.5268,
        -150.752503
      ],
      [
        60.4989,
        -150.763482
      ],
      [
        60.5061,
        -150.822037
      ]
    ],
    "views": 350,
    "favorites": 28,
    "featured": false,
    "verifiedSeller": true,
    "clearTitle": false,
    "surveyed": true,
    "roadAccess": "Borough maintained road",
    "utilities": [
      "Driveway cut",
      "Generator ready",
      "Cistern location identified"
    ],
    "features": [
      "road access",
      "off-grid ready",
      "surveyed",
      "wildlife corridor",
      "clear title"
    ],
    "description": "Sterling Spruce Lot gives buyers a direct-owner opportunity in Sterling, Alaska. Rolling ground with birch and spruce cover, ideal for a cabin start, greenhouse, and long-term Alaska homestead plan. The parcel captures the Kenai Peninsula feel with spruce forest, mountain horizons, and dependable access for site visits and closing coordination without broker overhead.",
    "sellerNotes": "Cabin, garden, and future shop locations have been walked and noted for the next owner.",
    "dueDiligence": {
      "titleStatus": "Commitment requested from title company",
      "surveyStatus": "Stamped survey on file",
      "environmentalStatus": "No known wetlands or contamination issues reported by seller",
      "easements": "Standard utility and access easements only",
      "liens": "Seller resolving historical filing before closing",
      "docsReady": [
        "Deed copy",
        "Tax statement",
        "Parcel map",
        "Disclosure packet"
      ]
    },
    "nearbyAmenities": [
      {
        "label": "Sterling Highway",
        "distance": "6 min"
      },
      {
        "label": "Soldotna",
        "distance": "24 min"
      },
      {
        "label": "Skilak Lake access",
        "distance": "21 min"
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80"
    ],
    "documents": [
      {
        "type": "parcel_map",
        "label": "Parcel map PDF"
      },
      {
        "type": "survey",
        "label": "Survey and corner notes"
      },
      {
        "type": "title",
        "label": "Title and tax summary"
      }
    ],
    "seller": {
      "id": "seller-4",
      "name": "Mark Seavey",
      "email": "mark@kenailandsales.com",
      "phone": "907-555-0104",
      "verified": true,
      "successRate": 97,
      "transactionCount": 7,
      "responseRate": 92,
      "responseTime": "same day"
    },
    "listedAt": "2026-01-10T10:00:00.000Z",
    "metrics": [
      {
        "label": "Price / acre",
        "value": "$5273"
      },
      {
        "label": "Parcel ID",
        "value": "KN-3110"
      },
      {
        "label": "Road access",
        "value": "Direct"
      },
      {
        "label": "Closing support",
        "value": "Escrow-ready"
      }
    ]
  },
  {
    "id": "parcel-11",
    "slug": "sterling-11",
    "title": "Sterling Mountain View Parcel",
    "city": "Sterling",
    "borough": "Kenai Peninsula Borough",
    "region": "Middle Peninsula",
    "address": "111 Owner Direct Trail, Sterling, AK",
    "gps": "60.5379, -150.7641",
    "price": 56000,
    "acreage": 14.2,
    "landType": "homestead",
    "zoning": "Rural Residential",
    "status": "active",
    "locationLabel": "Sterling, Alaska",
    "coordinates": [
      60.5379,
      -150.7641
    ],
    "boundary": [
      [
        60.5619,
        -150.812896
      ],
      [
        60.5511,
        -150.715304
      ],
      [
        60.5139,
        -150.729943
      ],
      [
        60.5235,
        -150.808016
      ]
    ],
    "views": 371,
    "favorites": 30,
    "featured": false,
    "verifiedSeller": true,
    "clearTitle": true,
    "surveyed": true,
    "roadAccess": "Borough maintained road",
    "utilities": [
      "Driveway cut",
      "Generator ready",
      "Cistern location identified"
    ],
    "features": [
      "road access",
      "off-grid ready",
      "surveyed",
      "wildlife corridor",
      "clear title"
    ],
    "description": "Sterling Mountain View Parcel gives buyers a direct-owner opportunity in Sterling, Alaska. Rolling ground with birch and spruce cover, ideal for a cabin start, greenhouse, and long-term Alaska homestead plan. The parcel captures the Kenai Peninsula feel with spruce forest, mountain horizons, and dependable access for site visits and closing coordination without broker overhead.",
    "sellerNotes": "Cabin, garden, and future shop locations have been walked and noted for the next owner.",
    "dueDiligence": {
      "titleStatus": "Preliminary title reviewed",
      "surveyStatus": "Stamped survey on file",
      "environmentalStatus": "No known wetlands or contamination issues reported by seller",
      "easements": "Standard utility and access easements only",
      "liens": "No open liens disclosed",
      "docsReady": [
        "Deed copy",
        "Tax statement",
        "Parcel map",
        "Disclosure packet"
      ]
    },
    "nearbyAmenities": [
      {
        "label": "Sterling Highway",
        "distance": "6 min"
      },
      {
        "label": "Soldotna",
        "distance": "24 min"
      },
      {
        "label": "Skilak Lake access",
        "distance": "21 min"
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80"
    ],
    "documents": [
      {
        "type": "parcel_map",
        "label": "Parcel map PDF"
      },
      {
        "type": "survey",
        "label": "Survey and corner notes"
      },
      {
        "type": "title",
        "label": "Title and tax summary"
      }
    ],
    "seller": {
      "id": "seller-5",
      "name": "Evelyn North",
      "email": "evelyn@kenailandsales.com",
      "phone": "907-555-0105",
      "verified": true,
      "successRate": 98,
      "transactionCount": 8,
      "responseRate": 93,
      "responseTime": "within 4 hours"
    },
    "listedAt": "2026-02-14T10:00:00.000Z",
    "metrics": [
      {
        "label": "Price / acre",
        "value": "$3944"
      },
      {
        "label": "Parcel ID",
        "value": "KN-3111"
      },
      {
        "label": "Road access",
        "value": "Direct"
      },
      {
        "label": "Closing support",
        "value": "Escrow-ready"
      }
    ]
  },
  {
    "id": "parcel-12",
    "slug": "sterling-12",
    "title": "Sterling Ready-to-Build Acreage",
    "city": "Sterling",
    "borough": "Kenai Peninsula Borough",
    "region": "Middle Peninsula",
    "address": "112 Owner Direct Trail, Sterling, AK",
    "gps": "60.5589, -150.7391",
    "price": 94000,
    "acreage": 31.0,
    "landType": "homestead",
    "zoning": "Rural Residential",
    "status": "active",
    "locationLabel": "Sterling, Alaska",
    "coordinates": [
      60.5589,
      -150.7391
    ],
    "boundary": [
      [
        60.5889,
        -150.800094
      ],
      [
        60.5754,
        -150.678106
      ],
      [
        60.5289,
        -150.696404
      ],
      [
        60.5409,
        -150.793995
      ]
    ],
    "views": 392,
    "favorites": 32,
    "featured": true,
    "verifiedSeller": true,
    "clearTitle": true,
    "surveyed": false,
    "roadAccess": "Borough maintained road",
    "utilities": [
      "Driveway cut",
      "Generator ready",
      "Cistern location identified"
    ],
    "features": [
      "road access",
      "off-grid ready",
      "surveyed",
      "wildlife corridor",
      "clear title"
    ],
    "description": "Sterling Ready-to-Build Acreage gives buyers a direct-owner opportunity in Sterling, Alaska. Rolling ground with birch and spruce cover, ideal for a cabin start, greenhouse, and long-term Alaska homestead plan. The parcel captures the Kenai Peninsula feel with spruce forest, mountain horizons, and dependable access for site visits and closing coordination without broker overhead.",
    "sellerNotes": "Cabin, garden, and future shop locations have been walked and noted for the next owner.",
    "dueDiligence": {
      "titleStatus": "Preliminary title reviewed",
      "surveyStatus": "Corners flagged; survey quote available",
      "environmentalStatus": "No known wetlands or contamination issues reported by seller",
      "easements": "Standard utility and access easements only",
      "liens": "No open liens disclosed",
      "docsReady": [
        "Deed copy",
        "Tax statement",
        "Parcel map",
        "Disclosure packet"
      ]
    },
    "nearbyAmenities": [
      {
        "label": "Sterling Highway",
        "distance": "6 min"
      },
      {
        "label": "Soldotna",
        "distance": "24 min"
      },
      {
        "label": "Skilak Lake access",
        "distance": "21 min"
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80"
    ],
    "documents": [
      {
        "type": "parcel_map",
        "label": "Parcel map PDF"
      },
      {
        "type": "survey",
        "label": "Survey and corner notes"
      },
      {
        "type": "title",
        "label": "Title and tax summary"
      }
    ],
    "seller": {
      "id": "seller-6",
      "name": "Ben Kachemak",
      "email": "ben@kenailandsales.com",
      "phone": "907-555-0106",
      "verified": true,
      "successRate": 95,
      "transactionCount": 3,
      "responseRate": 94,
      "responseTime": "same day"
    },
    "listedAt": "2026-03-05T10:00:00.000Z",
    "metrics": [
      {
        "label": "Price / acre",
        "value": "$3032"
      },
      {
        "label": "Parcel ID",
        "value": "KN-3112"
      },
      {
        "label": "Road access",
        "value": "Direct"
      },
      {
        "label": "Closing support",
        "value": "Escrow-ready"
      }
    ]
  },
  {
    "id": "parcel-13",
    "slug": "cooper-landing-13",
    "title": "Cooper Landing Creekside Tract",
    "city": "Cooper Landing",
    "borough": "Kenai Peninsula Borough",
    "region": "Upper Kenai",
    "address": "113 Owner Direct Trail, Cooper Landing, AK",
    "gps": "60.464, -149.8531",
    "price": 119000,
    "acreage": 1.4,
    "landType": "riverfront",
    "zoning": "Scenic Recreation",
    "status": "active",
    "locationLabel": "Cooper Landing, Alaska",
    "coordinates": [
      60.464,
      -149.8531
    ],
    "boundary": [
      [
        60.482,
        -149.889637
      ],
      [
        60.4739,
        -149.816563
      ],
      [
        60.446,
        -149.827524
      ],
      [
        60.4532,
        -149.885983
      ]
    ],
    "views": 413,
    "favorites": 34,
    "featured": true,
    "verifiedSeller": true,
    "clearTitle": true,
    "surveyed": true,
    "roadAccess": "Borough maintained road",
    "utilities": [
      "Power nearby",
      "Boat-friendly access",
      "Cabin pad"
    ],
    "features": [
      "river access",
      "surveyed",
      "clear title",
      "boat launch nearby",
      "buildable",
      "river access"
    ],
    "description": "Cooper Landing Creekside Tract gives buyers a direct-owner opportunity in Cooper Landing, Alaska. Rare Kenai Peninsula river access with a mix of open building pockets and tree cover for privacy. The parcel captures the Kenai Peninsula feel with spruce forest, mountain horizons, and dependable access for site visits and closing coordination without broker overhead.",
    "sellerNotes": "Riverbank use notes, fish habitat guidance, and survey pins are ready to share after inquiry.",
    "dueDiligence": {
      "titleStatus": "Preliminary title reviewed",
      "surveyStatus": "Stamped survey on file",
      "environmentalStatus": "No known wetlands or contamination issues reported by seller",
      "easements": "Standard utility and access easements only",
      "liens": "No open liens disclosed",
      "docsReady": [
        "Deed copy",
        "Tax statement",
        "Parcel map",
        "Disclosure packet"
      ]
    },
    "nearbyAmenities": [
      {
        "label": "Kenai River launch",
        "distance": "4 min"
      },
      {
        "label": "Cooper Landing School",
        "distance": "7 min"
      },
      {
        "label": "Seward Highway junction",
        "distance": "18 min"
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80"
    ],
    "documents": [
      {
        "type": "parcel_map",
        "label": "Parcel map PDF"
      },
      {
        "type": "survey",
        "label": "Survey and corner notes"
      },
      {
        "type": "title",
        "label": "Title and tax summary"
      }
    ],
    "seller": {
      "id": "seller-1",
      "name": "Sarah McKinley",
      "email": "sarah@kenailandsales.com",
      "phone": "907-555-0101",
      "verified": true,
      "successRate": 96,
      "transactionCount": 4,
      "responseRate": 95,
      "responseTime": "within 4 hours"
    },
    "listedAt": "2026-03-18T10:00:00.000Z",
    "metrics": [
      {
        "label": "Price / acre",
        "value": "$85000"
      },
      {
        "label": "Parcel ID",
        "value": "KN-3113"
      },
      {
        "label": "Road access",
        "value": "Direct"
      },
      {
        "label": "Closing support",
        "value": "Escrow-ready"
      }
    ]
  },
  {
    "id": "parcel-14",
    "slug": "cooper-landing-14",
    "title": "Cooper Landing View Parcel",
    "city": "Cooper Landing",
    "borough": "Kenai Peninsula Borough",
    "region": "Upper Kenai",
    "address": "114 Owner Direct Trail, Cooper Landing, AK",
    "gps": "60.485, -149.8281",
    "price": 208000,
    "acreage": 3.3,
    "landType": "riverfront",
    "zoning": "Scenic Recreation",
    "status": "active",
    "locationLabel": "Cooper Landing, Alaska",
    "coordinates": [
      60.485,
      -149.8281
    ],
    "boundary": [
      [
        60.509,
        -149.876816
      ],
      [
        60.4982,
        -149.779384
      ],
      [
        60.461,
        -149.793999
      ],
      [
        60.4706,
        -149.871944
      ]
    ],
    "views": 434,
    "favorites": 36,
    "featured": true,
    "verifiedSeller": true,
    "clearTitle": true,
    "surveyed": true,
    "roadAccess": "Borough maintained road",
    "utilities": [
      "Power nearby",
      "Boat-friendly access",
      "Cabin pad"
    ],
    "features": [
      "river access",
      "surveyed",
      "clear title",
      "boat launch nearby",
      "buildable",
      "river access"
    ],
    "description": "Cooper Landing View Parcel gives buyers a direct-owner opportunity in Cooper Landing, Alaska. Rare Kenai Peninsula river access with a mix of open building pockets and tree cover for privacy. The parcel captures the Kenai Peninsula feel with spruce forest, mountain horizons, and dependable access for site visits and closing coordination without broker overhead.",
    "sellerNotes": "Riverbank use notes, fish habitat guidance, and survey pins are ready to share after inquiry.",
    "dueDiligence": {
      "titleStatus": "Preliminary title reviewed",
      "surveyStatus": "Stamped survey on file",
      "environmentalStatus": "No known wetlands or contamination issues reported by seller",
      "easements": "Standard utility and access easements only",
      "liens": "No open liens disclosed",
      "docsReady": [
        "Deed copy",
        "Tax statement",
        "Parcel map",
        "Disclosure packet"
      ]
    },
    "nearbyAmenities": [
      {
        "label": "Kenai River launch",
        "distance": "4 min"
      },
      {
        "label": "Cooper Landing School",
        "distance": "7 min"
      },
      {
        "label": "Seward Highway junction",
        "distance": "18 min"
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80"
    ],
    "documents": [
      {
        "type": "parcel_map",
        "label": "Parcel map PDF"
      },
      {
        "type": "survey",
        "label": "Survey and corner notes"
      },
      {
        "type": "title",
        "label": "Title and tax summary"
      }
    ],
    "seller": {
      "id": "seller-2",
      "name": "Tyler Jensen",
      "email": "tyler@kenailandsales.com",
      "phone": "907-555-0102",
      "verified": true,
      "successRate": 97,
      "transactionCount": 5,
      "responseRate": 96,
      "responseTime": "same day"
    },
    "listedAt": "2026-04-02T10:00:00.000Z",
    "metrics": [
      {
        "label": "Price / acre",
        "value": "$63030"
      },
      {
        "label": "Parcel ID",
        "value": "KN-3114"
      },
      {
        "label": "Road access",
        "value": "Direct"
      },
      {
        "label": "Closing support",
        "value": "Escrow-ready"
      }
    ]
  },
  {
    "id": "parcel-15",
    "slug": "cooper-landing-15",
    "title": "Cooper Landing Spruce Lot",
    "city": "Cooper Landing",
    "borough": "Kenai Peninsula Borough",
    "region": "Upper Kenai",
    "address": "115 Owner Direct Trail, Cooper Landing, AK",
    "gps": "60.506, -149.8031",
    "price": 286000,
    "acreage": 6.0,
    "landType": "riverfront",
    "zoning": "Scenic Recreation",
    "status": "active",
    "locationLabel": "Cooper Landing, Alaska",
    "coordinates": [
      60.506,
      -149.8031
    ],
    "boundary": [
      [
        60.536,
        -149.863995
      ],
      [
        60.5225,
        -149.742205
      ],
      [
        60.476,
        -149.760474
      ],
      [
        60.488,
        -149.857905
      ]
    ],
    "views": 455,
    "favorites": 38,
    "featured": true,
    "verifiedSeller": true,
    "clearTitle": false,
    "surveyed": false,
    "roadAccess": "Borough maintained road",
    "utilities": [
      "Power nearby",
      "Boat-friendly access",
      "Cabin pad"
    ],
    "features": [
      "river access",
      "surveyed",
      "clear title",
      "boat launch nearby",
      "buildable",
      "river access"
    ],
    "description": "Cooper Landing Spruce Lot gives buyers a direct-owner opportunity in Cooper Landing, Alaska. Rare Kenai Peninsula river access with a mix of open building pockets and tree cover for privacy. The parcel captures the Kenai Peninsula feel with spruce forest, mountain horizons, and dependable access for site visits and closing coordination without broker overhead.",
    "sellerNotes": "Riverbank use notes, fish habitat guidance, and survey pins are ready to share after inquiry.",
    "dueDiligence": {
      "titleStatus": "Commitment requested from title company",
      "surveyStatus": "Corners flagged; survey quote available",
      "environmentalStatus": "No known wetlands or contamination issues reported by seller",
      "easements": "Standard utility and access easements only",
      "liens": "Seller resolving historical filing before closing",
      "docsReady": [
        "Deed copy",
        "Tax statement",
        "Parcel map",
        "Disclosure packet"
      ]
    },
    "nearbyAmenities": [
      {
        "label": "Kenai River launch",
        "distance": "4 min"
      },
      {
        "label": "Cooper Landing School",
        "distance": "7 min"
      },
      {
        "label": "Seward Highway junction",
        "distance": "18 min"
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80"
    ],
    "documents": [
      {
        "type": "parcel_map",
        "label": "Parcel map PDF"
      },
      {
        "type": "survey",
        "label": "Survey and corner notes"
      },
      {
        "type": "title",
        "label": "Title and tax summary"
      }
    ],
    "seller": {
      "id": "seller-3",
      "name": "Alyssa Rowan",
      "email": "alyssa@kenailandsales.com",
      "phone": "907-555-0103",
      "verified": true,
      "successRate": 98,
      "transactionCount": 6,
      "responseRate": 92,
      "responseTime": "within 4 hours"
    },
    "listedAt": "2026-01-10T10:00:00.000Z",
    "metrics": [
      {
        "label": "Price / acre",
        "value": "$47667"
      },
      {
        "label": "Parcel ID",
        "value": "KN-3115"
      },
      {
        "label": "Road access",
        "value": "Direct"
      },
      {
        "label": "Closing support",
        "value": "Escrow-ready"
      }
    ]
  },
  {
    "id": "parcel-16",
    "slug": "nikiski-16",
    "title": "Nikiski Mountain View Parcel",
    "city": "Nikiski",
    "borough": "Kenai Peninsula Borough",
    "region": "North Peninsula",
    "address": "116 Owner Direct Trail, Nikiski, AK",
    "gps": "60.6697, -151.3147",
    "price": 24000,
    "acreage": 2.2,
    "landType": "residential",
    "zoning": "Rural Residential",
    "status": "active",
    "locationLabel": "Nikiski, Alaska",
    "coordinates": [
      60.6697,
      -151.3147
    ],
    "boundary": [
      [
        60.6877,
        -151.35147
      ],
      [
        60.6796,
        -151.27793
      ],
      [
        60.6517,
        -151.288961
      ],
      [
        60.6589,
        -151.347793
      ]
    ],
    "views": 476,
    "favorites": 40,
    "featured": true,
    "verifiedSeller": true,
    "clearTitle": true,
    "surveyed": true,
    "roadAccess": "Borough maintained road",
    "utilities": [
      "Power at road",
      "Borough maintained road",
      "Nearby well sites"
    ],
    "features": [
      "road access",
      "utilities",
      "buildable",
      "surveyed",
      "clear title"
    ],
    "description": "Nikiski Mountain View Parcel gives buyers a direct-owner opportunity in Nikiski, Alaska. Minutes from town with mature spruce, easy year-round access, and enough room for a home, shop, or guest cabin. The parcel captures the Kenai Peninsula feel with spruce forest, mountain horizons, and dependable access for site visits and closing coordination without broker overhead.",
    "sellerNotes": "Seller has staked corners and packaged utilities notes so buyers can move into due diligence quickly.",
    "dueDiligence": {
      "titleStatus": "Preliminary title reviewed",
      "surveyStatus": "Stamped survey on file",
      "environmentalStatus": "No known wetlands or contamination issues reported by seller",
      "easements": "Standard utility and access easements only",
      "liens": "No open liens disclosed",
      "docsReady": [
        "Deed copy",
        "Tax statement",
        "Parcel map",
        "Disclosure packet"
      ]
    },
    "nearbyAmenities": [
      {
        "label": "Captain Cook Park",
        "distance": "19 min"
      },
      {
        "label": "Kenai airport",
        "distance": "26 min"
      },
      {
        "label": "North Peninsula Rec",
        "distance": "9 min"
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80"
    ],
    "documents": [
      {
        "type": "parcel_map",
        "label": "Parcel map PDF"
      },
      {
        "type": "survey",
        "label": "Survey and corner notes"
      },
      {
        "type": "title",
        "label": "Title and tax summary"
      }
    ],
    "seller": {
      "id": "seller-4",
      "name": "Mark Seavey",
      "email": "mark@kenailandsales.com",
      "phone": "907-555-0104",
      "verified": true,
      "successRate": 95,
      "transactionCount": 7,
      "responseRate": 93,
      "responseTime": "same day"
    },
    "listedAt": "2026-02-14T10:00:00.000Z",
    "metrics": [
      {
        "label": "Price / acre",
        "value": "$10909"
      },
      {
        "label": "Parcel ID",
        "value": "KN-3116"
      },
      {
        "label": "Road access",
        "value": "Direct"
      },
      {
        "label": "Closing support",
        "value": "Escrow-ready"
      }
    ]
  },
  {
    "id": "parcel-17",
    "slug": "nikiski-17",
    "title": "Nikiski Ready-to-Build Acreage",
    "city": "Nikiski",
    "borough": "Kenai Peninsula Borough",
    "region": "North Peninsula",
    "address": "117 Owner Direct Trail, Nikiski, AK",
    "gps": "60.6907, -151.2897",
    "price": 51000,
    "acreage": 5.0,
    "landType": "residential",
    "zoning": "Rural Residential",
    "status": "active",
    "locationLabel": "Nikiski, Alaska",
    "coordinates": [
      60.6907,
      -151.2897
    ],
    "boundary": [
      [
        60.7147,
        -151.338727
      ],
      [
        60.7039,
        -151.240673
      ],
      [
        60.6667,
        -151.255381
      ],
      [
        60.6763,
        -151.333824
      ]
    ],
    "views": 497,
    "favorites": 42,
    "featured": false,
    "verifiedSeller": true,
    "clearTitle": true,
    "surveyed": true,
    "roadAccess": "Borough maintained road",
    "utilities": [
      "Power at road",
      "Borough maintained road",
      "Nearby well sites"
    ],
    "features": [
      "road access",
      "utilities",
      "buildable",
      "surveyed",
      "clear title"
    ],
    "description": "Nikiski Ready-to-Build Acreage gives buyers a direct-owner opportunity in Nikiski, Alaska. Minutes from town with mature spruce, easy year-round access, and enough room for a home, shop, or guest cabin. The parcel captures the Kenai Peninsula feel with spruce forest, mountain horizons, and dependable access for site visits and closing coordination without broker overhead.",
    "sellerNotes": "Seller has staked corners and packaged utilities notes so buyers can move into due diligence quickly.",
    "dueDiligence": {
      "titleStatus": "Preliminary title reviewed",
      "surveyStatus": "Stamped survey on file",
      "environmentalStatus": "No known wetlands or contamination issues reported by seller",
      "easements": "Standard utility and access easements only",
      "liens": "No open liens disclosed",
      "docsReady": [
        "Deed copy",
        "Tax statement",
        "Parcel map",
        "Disclosure packet"
      ]
    },
    "nearbyAmenities": [
      {
        "label": "Captain Cook Park",
        "distance": "19 min"
      },
      {
        "label": "Kenai airport",
        "distance": "26 min"
      },
      {
        "label": "North Peninsula Rec",
        "distance": "9 min"
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80"
    ],
    "documents": [
      {
        "type": "parcel_map",
        "label": "Parcel map PDF"
      },
      {
        "type": "survey",
        "label": "Survey and corner notes"
      },
      {
        "type": "title",
        "label": "Title and tax summary"
      }
    ],
    "seller": {
      "id": "seller-5",
      "name": "Evelyn North",
      "email": "evelyn@kenailandsales.com",
      "phone": "907-555-0105",
      "verified": true,
      "successRate": 96,
      "transactionCount": 8,
      "responseRate": 94,
      "responseTime": "within 4 hours"
    },
    "listedAt": "2026-03-05T10:00:00.000Z",
    "metrics": [
      {
        "label": "Price / acre",
        "value": "$10200"
      },
      {
        "label": "Parcel ID",
        "value": "KN-3117"
      },
      {
        "label": "Road access",
        "value": "Direct"
      },
      {
        "label": "Closing support",
        "value": "Escrow-ready"
      }
    ]
  },
  {
    "id": "parcel-18",
    "slug": "nikiski-18",
    "title": "Nikiski Creekside Tract",
    "city": "Nikiski",
    "borough": "Kenai Peninsula Borough",
    "region": "North Peninsula",
    "address": "118 Owner Direct Trail, Nikiski, AK",
    "gps": "60.7117, -151.2647",
    "price": 79000,
    "acreage": 14.4,
    "landType": "residential",
    "zoning": "Rural Residential",
    "status": "active",
    "locationLabel": "Nikiski, Alaska",
    "coordinates": [
      60.7117,
      -151.2647
    ],
    "boundary": [
      [
        60.7417,
        -151.325984
      ],
      [
        60.7282,
        -151.203416
      ],
      [
        60.6817,
        -151.221801
      ],
      [
        60.6937,
        -151.319856
      ]
    ],
    "views": 518,
    "favorites": 44,
    "featured": false,
    "verifiedSeller": true,
    "clearTitle": true,
    "surveyed": false,
    "roadAccess": "Borough maintained road",
    "utilities": [
      "Power at road",
      "Borough maintained road",
      "Nearby well sites"
    ],
    "features": [
      "road access",
      "utilities",
      "buildable",
      "surveyed",
      "clear title"
    ],
    "description": "Nikiski Creekside Tract gives buyers a direct-owner opportunity in Nikiski, Alaska. Minutes from town with mature spruce, easy year-round access, and enough room for a home, shop, or guest cabin. The parcel captures the Kenai Peninsula feel with spruce forest, mountain horizons, and dependable access for site visits and closing coordination without broker overhead.",
    "sellerNotes": "Seller has staked corners and packaged utilities notes so buyers can move into due diligence quickly.",
    "dueDiligence": {
      "titleStatus": "Preliminary title reviewed",
      "surveyStatus": "Corners flagged; survey quote available",
      "environmentalStatus": "No known wetlands or contamination issues reported by seller",
      "easements": "Standard utility and access easements only",
      "liens": "No open liens disclosed",
      "docsReady": [
        "Deed copy",
        "Tax statement",
        "Parcel map",
        "Disclosure packet"
      ]
    },
    "nearbyAmenities": [
      {
        "label": "Captain Cook Park",
        "distance": "19 min"
      },
      {
        "label": "Kenai airport",
        "distance": "26 min"
      },
      {
        "label": "North Peninsula Rec",
        "distance": "9 min"
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80"
    ],
    "documents": [
      {
        "type": "parcel_map",
        "label": "Parcel map PDF"
      },
      {
        "type": "survey",
        "label": "Survey and corner notes"
      },
      {
        "type": "title",
        "label": "Title and tax summary"
      }
    ],
    "seller": {
      "id": "seller-6",
      "name": "Ben Kachemak",
      "email": "ben@kenailandsales.com",
      "phone": "907-555-0106",
      "verified": true,
      "successRate": 97,
      "transactionCount": 3,
      "responseRate": 95,
      "responseTime": "same day"
    },
    "listedAt": "2026-03-18T10:00:00.000Z",
    "metrics": [
      {
        "label": "Price / acre",
        "value": "$5486"
      },
      {
        "label": "Parcel ID",
        "value": "KN-3118"
      },
      {
        "label": "Road access",
        "value": "Direct"
      },
      {
        "label": "Closing support",
        "value": "Escrow-ready"
      }
    ]
  },
  {
    "id": "parcel-19",
    "slug": "anchor-point-19",
    "title": "Anchor Point View Parcel",
    "city": "Anchor Point",
    "borough": "Kenai Peninsula Borough",
    "region": "South Peninsula",
    "address": "119 Owner Direct Trail, Anchor Point, AK",
    "gps": "59.756, -151.8885",
    "price": 18000,
    "acreage": 8.0,
    "landType": "off_grid",
    "zoning": "Homestead",
    "status": "active",
    "locationLabel": "Anchor Point, Alaska",
    "coordinates": [
      59.756,
      -151.8885
    ],
    "boundary": [
      [
        59.774,
        -151.924259
      ],
      [
        59.7659,
        -151.852741
      ],
      [
        59.738,
        -151.863469
      ],
      [
        59.7452,
        -151.920683
      ]
    ],
    "views": 539,
    "favorites": 46,
    "featured": false,
    "verifiedSeller": true,
    "clearTitle": true,
    "surveyed": true,
    "roadAccess": "Private gravel or trail approach",
    "utilities": [
      "Solar exposure",
      "Private trail access",
      "Rain catchment potential"
    ],
    "features": [
      "off-grid ready",
      "surveyed",
      "southern exposure",
      "homestead potential",
      "clear title"
    ],
    "description": "Anchor Point View Parcel gives buyers a direct-owner opportunity in Anchor Point, Alaska. Wide-open Alaska freedom with privacy, wildlife movement, and enough dry ground for a serious off-grid basecamp. The parcel captures the Kenai Peninsula feel with spruce forest, mountain horizons, and dependable access for site visits and closing coordination without broker overhead.",
    "sellerNotes": "This tract is set up for confident self-sufficiency with solar orientation and access notes included.",
    "dueDiligence": {
      "titleStatus": "Preliminary title reviewed",
      "surveyStatus": "Stamped survey on file",
      "environmentalStatus": "No known wetlands or contamination issues reported by seller",
      "easements": "Standard utility and access easements only",
      "liens": "No open liens disclosed",
      "docsReady": [
        "Deed copy",
        "Tax statement",
        "Parcel map",
        "Disclosure packet"
      ]
    },
    "nearbyAmenities": [
      {
        "label": "Anchor River launch",
        "distance": "12 min"
      },
      {
        "label": "Homer",
        "distance": "23 min"
      },
      {
        "label": "Airport overlook",
        "distance": "16 min"
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1200&q=80"
    ],
    "documents": [
      {
        "type": "parcel_map",
        "label": "Parcel map PDF"
      },
      {
        "type": "survey",
        "label": "Survey and corner notes"
      },
      {
        "type": "title",
        "label": "Title and tax summary"
      }
    ],
    "seller": {
      "id": "seller-1",
      "name": "Sarah McKinley",
      "email": "sarah@kenailandsales.com",
      "phone": "907-555-0101",
      "verified": true,
      "successRate": 98,
      "transactionCount": 4,
      "responseRate": 96,
      "responseTime": "within 4 hours"
    },
    "listedAt": "2026-04-02T10:00:00.000Z",
    "metrics": [
      {
        "label": "Price / acre",
        "value": "$2250"
      },
      {
        "label": "Parcel ID",
        "value": "KN-3119"
      },
      {
        "label": "Road access",
        "value": "Seasonal"
      },
      {
        "label": "Closing support",
        "value": "Escrow-ready"
      }
    ]
  },
  {
    "id": "parcel-20",
    "slug": "anchor-point-20",
    "title": "Anchor Point Spruce Lot",
    "city": "Anchor Point",
    "borough": "Kenai Peninsula Borough",
    "region": "South Peninsula",
    "address": "120 Owner Direct Trail, Anchor Point, AK",
    "gps": "59.777, -151.8635",
    "price": 42000,
    "acreage": 22.0,
    "landType": "off_grid",
    "zoning": "Homestead",
    "status": "active",
    "locationLabel": "Anchor Point, Alaska",
    "coordinates": [
      59.777,
      -151.8635
    ],
    "boundary": [
      [
        59.801,
        -151.911179
      ],
      [
        59.7902,
        -151.815821
      ],
      [
        59.753,
        -151.830125
      ],
      [
        59.7626,
        -151.906411
      ]
    ],
    "views": 560,
    "favorites": 48,
    "featured": true,
    "verifiedSeller": true,
    "clearTitle": false,
    "surveyed": true,
    "roadAccess": "Private gravel or trail approach",
    "utilities": [
      "Solar exposure",
      "Private trail access",
      "Rain catchment potential"
    ],
    "features": [
      "off-grid ready",
      "surveyed",
      "southern exposure",
      "homestead potential",
      "clear title"
    ],
    "description": "Anchor Point Spruce Lot gives buyers a direct-owner opportunity in Anchor Point, Alaska. Wide-open Alaska freedom with privacy, wildlife movement, and enough dry ground for a serious off-grid basecamp. The parcel captures the Kenai Peninsula feel with spruce forest, mountain horizons, and dependable access for site visits and closing coordination without broker overhead.",
    "sellerNotes": "This tract is set up for confident self-sufficiency with solar orientation and access notes included.",
    "dueDiligence": {
      "titleStatus": "Commitment requested from title company",
      "surveyStatus": "Stamped survey on file",
      "environmentalStatus": "No known wetlands or contamination issues reported by seller",
      "easements": "Standard utility and access easements only",
      "liens": "Seller resolving historical filing before closing",
      "docsReady": [
        "Deed copy",
        "Tax statement",
        "Parcel map",
        "Disclosure packet"
      ]
    },
    "nearbyAmenities": [
      {
        "label": "Anchor River launch",
        "distance": "12 min"
      },
      {
        "label": "Homer",
        "distance": "23 min"
      },
      {
        "label": "Airport overlook",
        "distance": "16 min"
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1200&q=80"
    ],
    "documents": [
      {
        "type": "parcel_map",
        "label": "Parcel map PDF"
      },
      {
        "type": "survey",
        "label": "Survey and corner notes"
      },
      {
        "type": "title",
        "label": "Title and tax summary"
      }
    ],
    "seller": {
      "id": "seller-2",
      "name": "Tyler Jensen",
      "email": "tyler@kenailandsales.com",
      "phone": "907-555-0102",
      "verified": true,
      "successRate": 95,
      "transactionCount": 5,
      "responseRate": 92,
      "responseTime": "same day"
    },
    "listedAt": "2026-01-10T10:00:00.000Z",
    "metrics": [
      {
        "label": "Price / acre",
        "value": "$1909"
      },
      {
        "label": "Parcel ID",
        "value": "KN-3120"
      },
      {
        "label": "Road access",
        "value": "Seasonal"
      },
      {
        "label": "Closing support",
        "value": "Escrow-ready"
      }
    ]
  },
  {
    "id": "parcel-21",
    "slug": "anchor-point-21",
    "title": "Anchor Point Mountain View Parcel",
    "city": "Anchor Point",
    "borough": "Kenai Peninsula Borough",
    "region": "South Peninsula",
    "address": "121 Owner Direct Trail, Anchor Point, AK",
    "gps": "59.798, -151.8385",
    "price": 58000,
    "acreage": 64.0,
    "landType": "off_grid",
    "zoning": "Homestead",
    "status": "active",
    "locationLabel": "Anchor Point, Alaska",
    "coordinates": [
      59.798,
      -151.8385
    ],
    "boundary": [
      [
        59.828,
        -151.898099
      ],
      [
        59.8145,
        -151.778901
      ],
      [
        59.768,
        -151.796781
      ],
      [
        59.78,
        -151.892139
      ]
    ],
    "views": 581,
    "favorites": 50,
    "featured": false,
    "verifiedSeller": true,
    "clearTitle": true,
    "surveyed": false,
    "roadAccess": "Private gravel or trail approach",
    "utilities": [
      "Solar exposure",
      "Private trail access",
      "Rain catchment potential"
    ],
    "features": [
      "off-grid ready",
      "surveyed",
      "southern exposure",
      "homestead potential",
      "clear title"
    ],
    "description": "Anchor Point Mountain View Parcel gives buyers a direct-owner opportunity in Anchor Point, Alaska. Wide-open Alaska freedom with privacy, wildlife movement, and enough dry ground for a serious off-grid basecamp. The parcel captures the Kenai Peninsula feel with spruce forest, mountain horizons, and dependable access for site visits and closing coordination without broker overhead.",
    "sellerNotes": "This tract is set up for confident self-sufficiency with solar orientation and access notes included.",
    "dueDiligence": {
      "titleStatus": "Preliminary title reviewed",
      "surveyStatus": "Corners flagged; survey quote available",
      "environmentalStatus": "No known wetlands or contamination issues reported by seller",
      "easements": "Standard utility and access easements only",
      "liens": "No open liens disclosed",
      "docsReady": [
        "Deed copy",
        "Tax statement",
        "Parcel map",
        "Disclosure packet"
      ]
    },
    "nearbyAmenities": [
      {
        "label": "Anchor River launch",
        "distance": "12 min"
      },
      {
        "label": "Homer",
        "distance": "23 min"
      },
      {
        "label": "Airport overlook",
        "distance": "16 min"
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1200&q=80"
    ],
    "documents": [
      {
        "type": "parcel_map",
        "label": "Parcel map PDF"
      },
      {
        "type": "survey",
        "label": "Survey and corner notes"
      },
      {
        "type": "title",
        "label": "Title and tax summary"
      }
    ],
    "seller": {
      "id": "seller-3",
      "name": "Alyssa Rowan",
      "email": "alyssa@kenailandsales.com",
      "phone": "907-555-0103",
      "verified": true,
      "successRate": 96,
      "transactionCount": 6,
      "responseRate": 93,
      "responseTime": "within 4 hours"
    },
    "listedAt": "2026-02-14T10:00:00.000Z",
    "metrics": [
      {
        "label": "Price / acre",
        "value": "$906"
      },
      {
        "label": "Parcel ID",
        "value": "KN-3121"
      },
      {
        "label": "Road access",
        "value": "Seasonal"
      },
      {
        "label": "Closing support",
        "value": "Escrow-ready"
      }
    ]
  },
  {
    "id": "parcel-22",
    "slug": "ninilchik-22",
    "title": "Ninilchik Ready-to-Build Acreage",
    "city": "Ninilchik",
    "borough": "Kenai Peninsula Borough",
    "region": "South Peninsula",
    "address": "122 Owner Direct Trail, Ninilchik, AK",
    "gps": "60.0293, -151.6931",
    "price": 72000,
    "acreage": 1.3,
    "landType": "waterfront",
    "zoning": "Rural Residential",
    "status": "active",
    "locationLabel": "Ninilchik, Alaska",
    "coordinates": [
      60.0293,
      -151.6931
    ],
    "boundary": [
      [
        60.0473,
        -151.729155
      ],
      [
        60.0392,
        -151.657045
      ],
      [
        60.0113,
        -151.667862
      ],
      [
        60.0185,
        -151.725549
      ]
    ],
    "views": 602,
    "favorites": 52,
    "featured": false,
    "verifiedSeller": true,
    "clearTitle": true,
    "surveyed": true,
    "roadAccess": "Borough maintained road",
    "utilities": [
      "Power nearby",
      "Driveway pad",
      "Private bluff access"
    ],
    "features": [
      "water rights",
      "buildable",
      "surveyed",
      "clear title",
      "view corridor",
      "ocean view"
    ],
    "description": "Ninilchik Ready-to-Build Acreage gives buyers a direct-owner opportunity in Ninilchik, Alaska. A dramatic homesite with panoramic water views, bluff privacy, and the kind of sunset exposure buyers search all summer for. The parcel captures the Kenai Peninsula feel with spruce forest, mountain horizons, and dependable access for site visits and closing coordination without broker overhead.",
    "sellerNotes": "Bluff setbacks and view corridors are already summarized for buyers, reducing broker-style guesswork.",
    "dueDiligence": {
      "titleStatus": "Preliminary title reviewed",
      "surveyStatus": "Stamped survey on file",
      "environmentalStatus": "No known wetlands or contamination issues reported by seller",
      "easements": "Standard utility and access easements only",
      "liens": "No open liens disclosed",
      "docsReady": [
        "Deed copy",
        "Tax statement",
        "Parcel map",
        "Disclosure packet"
      ]
    },
    "nearbyAmenities": [
      {
        "label": "Ninilchik harbor",
        "distance": "8 min"
      },
      {
        "label": "School",
        "distance": "7 min"
      },
      {
        "label": "Soldotna",
        "distance": "46 min"
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1200&q=80"
    ],
    "documents": [
      {
        "type": "parcel_map",
        "label": "Parcel map PDF"
      },
      {
        "type": "survey",
        "label": "Survey and corner notes"
      },
      {
        "type": "title",
        "label": "Title and tax summary"
      }
    ],
    "seller": {
      "id": "seller-4",
      "name": "Mark Seavey",
      "email": "mark@kenailandsales.com",
      "phone": "907-555-0104",
      "verified": true,
      "successRate": 97,
      "transactionCount": 7,
      "responseRate": 94,
      "responseTime": "same day"
    },
    "listedAt": "2026-03-05T10:00:00.000Z",
    "metrics": [
      {
        "label": "Price / acre",
        "value": "$55385"
      },
      {
        "label": "Parcel ID",
        "value": "KN-3122"
      },
      {
        "label": "Road access",
        "value": "Direct"
      },
      {
        "label": "Closing support",
        "value": "Escrow-ready"
      }
    ]
  },
  {
    "id": "parcel-23",
    "slug": "ninilchik-23",
    "title": "Ninilchik Creekside Tract",
    "city": "Ninilchik",
    "borough": "Kenai Peninsula Borough",
    "region": "South Peninsula",
    "address": "123 Owner Direct Trail, Ninilchik, AK",
    "gps": "60.0503, -151.6681",
    "price": 132000,
    "acreage": 4.5,
    "landType": "waterfront",
    "zoning": "Rural Residential",
    "status": "active",
    "locationLabel": "Ninilchik, Alaska",
    "coordinates": [
      60.0503,
      -151.6681
    ],
    "boundary": [
      [
        60.0743,
        -151.716173
      ],
      [
        60.0635,
        -151.620027
      ],
      [
        60.0263,
        -151.634449
      ],
      [
        60.0359,
        -151.711366
      ]
    ],
    "views": 623,
    "favorites": 54,
    "featured": false,
    "verifiedSeller": true,
    "clearTitle": true,
    "surveyed": true,
    "roadAccess": "Borough maintained road",
    "utilities": [
      "Power nearby",
      "Driveway pad",
      "Private bluff access"
    ],
    "features": [
      "water rights",
      "buildable",
      "surveyed",
      "clear title",
      "view corridor",
      "ocean view"
    ],
    "description": "Ninilchik Creekside Tract gives buyers a direct-owner opportunity in Ninilchik, Alaska. A dramatic homesite with panoramic water views, bluff privacy, and the kind of sunset exposure buyers search all summer for. The parcel captures the Kenai Peninsula feel with spruce forest, mountain horizons, and dependable access for site visits and closing coordination without broker overhead.",
    "sellerNotes": "Bluff setbacks and view corridors are already summarized for buyers, reducing broker-style guesswork.",
    "dueDiligence": {
      "titleStatus": "Preliminary title reviewed",
      "surveyStatus": "Stamped survey on file",
      "environmentalStatus": "No known wetlands or contamination issues reported by seller",
      "easements": "Standard utility and access easements only",
      "liens": "No open liens disclosed",
      "docsReady": [
        "Deed copy",
        "Tax statement",
        "Parcel map",
        "Disclosure packet"
      ]
    },
    "nearbyAmenities": [
      {
        "label": "Ninilchik harbor",
        "distance": "8 min"
      },
      {
        "label": "School",
        "distance": "7 min"
      },
      {
        "label": "Soldotna",
        "distance": "46 min"
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1200&q=80"
    ],
    "documents": [
      {
        "type": "parcel_map",
        "label": "Parcel map PDF"
      },
      {
        "type": "survey",
        "label": "Survey and corner notes"
      },
      {
        "type": "title",
        "label": "Title and tax summary"
      }
    ],
    "seller": {
      "id": "seller-5",
      "name": "Evelyn North",
      "email": "evelyn@kenailandsales.com",
      "phone": "907-555-0105",
      "verified": true,
      "successRate": 98,
      "transactionCount": 8,
      "responseRate": 95,
      "responseTime": "within 4 hours"
    },
    "listedAt": "2026-03-18T10:00:00.000Z",
    "metrics": [
      {
        "label": "Price / acre",
        "value": "$29333"
      },
      {
        "label": "Parcel ID",
        "value": "KN-3123"
      },
      {
        "label": "Road access",
        "value": "Direct"
      },
      {
        "label": "Closing support",
        "value": "Escrow-ready"
      }
    ]
  },
  {
    "id": "parcel-24",
    "slug": "ninilchik-24",
    "title": "Ninilchik View Parcel",
    "city": "Ninilchik",
    "borough": "Kenai Peninsula Borough",
    "region": "South Peninsula",
    "address": "124 Owner Direct Trail, Ninilchik, AK",
    "gps": "60.0713, -151.6431",
    "price": 188000,
    "acreage": 9.0,
    "landType": "waterfront",
    "zoning": "Rural Residential",
    "status": "active",
    "locationLabel": "Ninilchik, Alaska",
    "coordinates": [
      60.0713,
      -151.6431
    ],
    "boundary": [
      [
        60.1013,
        -151.703191
      ],
      [
        60.0878,
        -151.583009
      ],
      [
        60.0413,
        -151.601036
      ],
      [
        60.0533,
        -151.697182
      ]
    ],
    "views": 644,
    "favorites": 56,
    "featured": true,
    "verifiedSeller": true,
    "clearTitle": true,
    "surveyed": false,
    "roadAccess": "Borough maintained road",
    "utilities": [
      "Power nearby",
      "Driveway pad",
      "Private bluff access"
    ],
    "features": [
      "water rights",
      "buildable",
      "surveyed",
      "clear title",
      "view corridor",
      "ocean view"
    ],
    "description": "Ninilchik View Parcel gives buyers a direct-owner opportunity in Ninilchik, Alaska. A dramatic homesite with panoramic water views, bluff privacy, and the kind of sunset exposure buyers search all summer for. The parcel captures the Kenai Peninsula feel with spruce forest, mountain horizons, and dependable access for site visits and closing coordination without broker overhead.",
    "sellerNotes": "Bluff setbacks and view corridors are already summarized for buyers, reducing broker-style guesswork.",
    "dueDiligence": {
      "titleStatus": "Preliminary title reviewed",
      "surveyStatus": "Corners flagged; survey quote available",
      "environmentalStatus": "No known wetlands or contamination issues reported by seller",
      "easements": "Standard utility and access easements only",
      "liens": "No open liens disclosed",
      "docsReady": [
        "Deed copy",
        "Tax statement",
        "Parcel map",
        "Disclosure packet"
      ]
    },
    "nearbyAmenities": [
      {
        "label": "Ninilchik harbor",
        "distance": "8 min"
      },
      {
        "label": "School",
        "distance": "7 min"
      },
      {
        "label": "Soldotna",
        "distance": "46 min"
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=1200&q=80"
    ],
    "documents": [
      {
        "type": "parcel_map",
        "label": "Parcel map PDF"
      },
      {
        "type": "survey",
        "label": "Survey and corner notes"
      },
      {
        "type": "title",
        "label": "Title and tax summary"
      }
    ],
    "seller": {
      "id": "seller-6",
      "name": "Ben Kachemak",
      "email": "ben@kenailandsales.com",
      "phone": "907-555-0106",
      "verified": true,
      "successRate": 95,
      "transactionCount": 3,
      "responseRate": 96,
      "responseTime": "same day"
    },
    "listedAt": "2026-04-02T10:00:00.000Z",
    "metrics": [
      {
        "label": "Price / acre",
        "value": "$20889"
      },
      {
        "label": "Parcel ID",
        "value": "KN-3124"
      },
      {
        "label": "Road access",
        "value": "Direct"
      },
      {
        "label": "Closing support",
        "value": "Escrow-ready"
      }
    ]
  },
  {
    "id": "parcel-25",
    "slug": "kasilof-25",
    "title": "Kasilof Spruce Lot",
    "city": "Kasilof",
    "borough": "Kenai Peninsula Borough",
    "region": "Central Kenai",
    "address": "125 Owner Direct Trail, Kasilof, AK",
    "gps": "60.2952, -151.312",
    "price": 39000,
    "acreage": 10.0,
    "landType": "agricultural",
    "zoning": "Agricultural",
    "status": "active",
    "locationLabel": "Kasilof, Alaska",
    "coordinates": [
      60.2952,
      -151.312
    ],
    "boundary": [
      [
        60.3132,
        -151.348348
      ],
      [
        60.3051,
        -151.275652
      ],
      [
        60.2772,
        -151.286556
      ],
      [
        60.2844,
        -151.344713
      ]
    ],
    "views": 665,
    "favorites": 58,
    "featured": false,
    "verifiedSeller": true,
    "clearTitle": false,
    "surveyed": true,
    "roadAccess": "Borough maintained road",
    "utilities": [
      "Power along frontage",
      "Irrigation potential",
      "Equipment turnaround"
    ],
    "features": [
      "road access",
      "soil report",
      "water rights",
      "surveyed",
      "clear title",
      "river access"
    ],
    "description": "Kasilof Spruce Lot gives buyers a direct-owner opportunity in Kasilof, Alaska. Open, workable acreage with drainage notes, hay potential, and room for a home plus productive ground. The parcel captures the Kenai Peninsula feel with spruce forest, mountain horizons, and dependable access for site visits and closing coordination without broker overhead.",
    "sellerNotes": "Soil, drainage, and fencing observations are already organized to help a buyer plan fast.",
    "dueDiligence": {
      "titleStatus": "Commitment requested from title company",
      "surveyStatus": "Stamped survey on file",
      "environmentalStatus": "No known wetlands or contamination issues reported by seller",
      "easements": "Standard utility and access easements only",
      "liens": "Seller resolving historical filing before closing",
      "docsReady": [
        "Deed copy",
        "Tax statement",
        "Parcel map",
        "Disclosure packet"
      ]
    },
    "nearbyAmenities": [
      {
        "label": "Kasilof River boat launch",
        "distance": "7 min"
      },
      {
        "label": "Soldotna",
        "distance": "21 min"
      },
      {
        "label": "Beach access",
        "distance": "10 min"
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80"
    ],
    "documents": [
      {
        "type": "parcel_map",
        "label": "Parcel map PDF"
      },
      {
        "type": "survey",
        "label": "Survey and corner notes"
      },
      {
        "type": "title",
        "label": "Title and tax summary"
      }
    ],
    "seller": {
      "id": "seller-1",
      "name": "Sarah McKinley",
      "email": "sarah@kenailandsales.com",
      "phone": "907-555-0101",
      "verified": true,
      "successRate": 96,
      "transactionCount": 4,
      "responseRate": 92,
      "responseTime": "within 4 hours"
    },
    "listedAt": "2026-01-10T10:00:00.000Z",
    "metrics": [
      {
        "label": "Price / acre",
        "value": "$3900"
      },
      {
        "label": "Parcel ID",
        "value": "KN-3125"
      },
      {
        "label": "Road access",
        "value": "Direct"
      },
      {
        "label": "Closing support",
        "value": "Escrow-ready"
      }
    ]
  },
  {
    "id": "parcel-26",
    "slug": "kasilof-26",
    "title": "Kasilof Mountain View Parcel",
    "city": "Kasilof",
    "borough": "Kenai Peninsula Borough",
    "region": "Central Kenai",
    "address": "126 Owner Direct Trail, Kasilof, AK",
    "gps": "60.3162, -151.287",
    "price": 86000,
    "acreage": 20.0,
    "landType": "agricultural",
    "zoning": "Agricultural",
    "status": "active",
    "locationLabel": "Kasilof, Alaska",
    "coordinates": [
      60.3162,
      -151.287
    ],
    "boundary": [
      [
        60.3402,
        -151.335464
      ],
      [
        60.3294,
        -151.238536
      ],
      [
        60.2922,
        -151.253075
      ],
      [
        60.3018,
        -151.330618
      ]
    ],
    "views": 686,
    "favorites": 60,
    "featured": false,
    "verifiedSeller": true,
    "clearTitle": true,
    "surveyed": true,
    "roadAccess": "Borough maintained road",
    "utilities": [
      "Power along frontage",
      "Irrigation potential",
      "Equipment turnaround"
    ],
    "features": [
      "road access",
      "soil report",
      "water rights",
      "surveyed",
      "clear title",
      "river access"
    ],
    "description": "Kasilof Mountain View Parcel gives buyers a direct-owner opportunity in Kasilof, Alaska. Open, workable acreage with drainage notes, hay potential, and room for a home plus productive ground. The parcel captures the Kenai Peninsula feel with spruce forest, mountain horizons, and dependable access for site visits and closing coordination without broker overhead.",
    "sellerNotes": "Soil, drainage, and fencing observations are already organized to help a buyer plan fast.",
    "dueDiligence": {
      "titleStatus": "Preliminary title reviewed",
      "surveyStatus": "Stamped survey on file",
      "environmentalStatus": "No known wetlands or contamination issues reported by seller",
      "easements": "Standard utility and access easements only",
      "liens": "No open liens disclosed",
      "docsReady": [
        "Deed copy",
        "Tax statement",
        "Parcel map",
        "Disclosure packet"
      ]
    },
    "nearbyAmenities": [
      {
        "label": "Kasilof River boat launch",
        "distance": "7 min"
      },
      {
        "label": "Soldotna",
        "distance": "21 min"
      },
      {
        "label": "Beach access",
        "distance": "10 min"
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80"
    ],
    "documents": [
      {
        "type": "parcel_map",
        "label": "Parcel map PDF"
      },
      {
        "type": "survey",
        "label": "Survey and corner notes"
      },
      {
        "type": "title",
        "label": "Title and tax summary"
      }
    ],
    "seller": {
      "id": "seller-2",
      "name": "Tyler Jensen",
      "email": "tyler@kenailandsales.com",
      "phone": "907-555-0102",
      "verified": true,
      "successRate": 97,
      "transactionCount": 5,
      "responseRate": 93,
      "responseTime": "same day"
    },
    "listedAt": "2026-02-14T10:00:00.000Z",
    "metrics": [
      {
        "label": "Price / acre",
        "value": "$4300"
      },
      {
        "label": "Parcel ID",
        "value": "KN-3126"
      },
      {
        "label": "Road access",
        "value": "Direct"
      },
      {
        "label": "Closing support",
        "value": "Escrow-ready"
      }
    ]
  },
  {
    "id": "parcel-27",
    "slug": "kasilof-27",
    "title": "Kasilof Ready-to-Build Acreage",
    "city": "Kasilof",
    "borough": "Kenai Peninsula Borough",
    "region": "Central Kenai",
    "address": "127 Owner Direct Trail, Kasilof, AK",
    "gps": "60.3372, -151.262",
    "price": 118000,
    "acreage": 36.0,
    "landType": "agricultural",
    "zoning": "Agricultural",
    "status": "active",
    "locationLabel": "Kasilof, Alaska",
    "coordinates": [
      60.3372,
      -151.262
    ],
    "boundary": [
      [
        60.3672,
        -151.32258
      ],
      [
        60.3537,
        -151.20142
      ],
      [
        60.3072,
        -151.219594
      ],
      [
        60.3192,
        -151.316522
      ]
    ],
    "views": 707,
    "favorites": 62,
    "featured": false,
    "verifiedSeller": true,
    "clearTitle": true,
    "surveyed": false,
    "roadAccess": "Borough maintained road",
    "utilities": [
      "Power along frontage",
      "Irrigation potential",
      "Equipment turnaround"
    ],
    "features": [
      "road access",
      "soil report",
      "water rights",
      "surveyed",
      "clear title",
      "river access"
    ],
    "description": "Kasilof Ready-to-Build Acreage gives buyers a direct-owner opportunity in Kasilof, Alaska. Open, workable acreage with drainage notes, hay potential, and room for a home plus productive ground. The parcel captures the Kenai Peninsula feel with spruce forest, mountain horizons, and dependable access for site visits and closing coordination without broker overhead.",
    "sellerNotes": "Soil, drainage, and fencing observations are already organized to help a buyer plan fast.",
    "dueDiligence": {
      "titleStatus": "Preliminary title reviewed",
      "surveyStatus": "Corners flagged; survey quote available",
      "environmentalStatus": "No known wetlands or contamination issues reported by seller",
      "easements": "Standard utility and access easements only",
      "liens": "No open liens disclosed",
      "docsReady": [
        "Deed copy",
        "Tax statement",
        "Parcel map",
        "Disclosure packet"
      ]
    },
    "nearbyAmenities": [
      {
        "label": "Kasilof River boat launch",
        "distance": "7 min"
      },
      {
        "label": "Soldotna",
        "distance": "21 min"
      },
      {
        "label": "Beach access",
        "distance": "10 min"
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80"
    ],
    "documents": [
      {
        "type": "parcel_map",
        "label": "Parcel map PDF"
      },
      {
        "type": "survey",
        "label": "Survey and corner notes"
      },
      {
        "type": "title",
        "label": "Title and tax summary"
      }
    ],
    "seller": {
      "id": "seller-3",
      "name": "Alyssa Rowan",
      "email": "alyssa@kenailandsales.com",
      "phone": "907-555-0103",
      "verified": true,
      "successRate": 98,
      "transactionCount": 6,
      "responseRate": 94,
      "responseTime": "within 4 hours"
    },
    "listedAt": "2026-03-05T10:00:00.000Z",
    "metrics": [
      {
        "label": "Price / acre",
        "value": "$3278"
      },
      {
        "label": "Parcel ID",
        "value": "KN-3127"
      },
      {
        "label": "Road access",
        "value": "Direct"
      },
      {
        "label": "Closing support",
        "value": "Escrow-ready"
      }
    ]
  },
  {
    "id": "parcel-28",
    "slug": "clam-gulch-28",
    "title": "Clam Gulch Creekside Tract",
    "city": "Clam Gulch",
    "borough": "Kenai Peninsula Borough",
    "region": "Central Kenai",
    "address": "128 Owner Direct Trail, Clam Gulch, AK",
    "gps": "60.171, -151.4175",
    "price": 22000,
    "acreage": 5.4,
    "landType": "recreational",
    "zoning": "Recreation",
    "status": "active",
    "locationLabel": "Clam Gulch, Alaska",
    "coordinates": [
      60.171,
      -151.4175
    ],
    "boundary": [
      [
        60.189,
        -151.45371
      ],
      [
        60.1809,
        -151.38129
      ],
      [
        60.153,
        -151.392153
      ],
      [
        60.1602,
        -151.450089
      ]
    ],
    "views": 728,
    "favorites": 64,
    "featured": true,
    "verifiedSeller": true,
    "clearTitle": true,
    "surveyed": true,
    "roadAccess": "Private gravel or trail approach",
    "utilities": [
      "Trail access",
      "Dry cabin pad",
      "ATV approach"
    ],
    "features": [
      "road access",
      "trails nearby",
      "surveyed",
      "clear title",
      "timber mix"
    ],
    "description": "Clam Gulch Creekside Tract gives buyers a direct-owner opportunity in Clam Gulch, Alaska. A quiet recreation tract with trails, camp pads, and moose traffic right out the back edge of the parcel. The parcel captures the Kenai Peninsula feel with spruce forest, mountain horizons, and dependable access for site visits and closing coordination without broker overhead.",
    "sellerNotes": "Trailheads, camping pads, and wildlife sign were documented to support a simple owner-to-owner sale.",
    "dueDiligence": {
      "titleStatus": "Preliminary title reviewed",
      "surveyStatus": "Stamped survey on file",
      "environmentalStatus": "No known wetlands or contamination issues reported by seller",
      "easements": "Standard utility and access easements only",
      "liens": "No open liens disclosed",
      "docsReady": [
        "Deed copy",
        "Tax statement",
        "Parcel map",
        "Disclosure packet"
      ]
    },
    "nearbyAmenities": [
      {
        "label": "Beach access",
        "distance": "11 min"
      },
      {
        "label": "Deep Creek launch",
        "distance": "19 min"
      },
      {
        "label": "Soldotna",
        "distance": "29 min"
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80"
    ],
    "documents": [
      {
        "type": "parcel_map",
        "label": "Parcel map PDF"
      },
      {
        "type": "survey",
        "label": "Survey and corner notes"
      },
      {
        "type": "title",
        "label": "Title and tax summary"
      }
    ],
    "seller": {
      "id": "seller-4",
      "name": "Mark Seavey",
      "email": "mark@kenailandsales.com",
      "phone": "907-555-0104",
      "verified": true,
      "successRate": 95,
      "transactionCount": 7,
      "responseRate": 95,
      "responseTime": "same day"
    },
    "listedAt": "2026-03-18T10:00:00.000Z",
    "metrics": [
      {
        "label": "Price / acre",
        "value": "$4074"
      },
      {
        "label": "Parcel ID",
        "value": "KN-3128"
      },
      {
        "label": "Road access",
        "value": "Seasonal"
      },
      {
        "label": "Closing support",
        "value": "Escrow-ready"
      }
    ]
  },
  {
    "id": "parcel-29",
    "slug": "clam-gulch-29",
    "title": "Clam Gulch View Parcel",
    "city": "Clam Gulch",
    "borough": "Kenai Peninsula Borough",
    "region": "Central Kenai",
    "address": "129 Owner Direct Trail, Clam Gulch, AK",
    "gps": "60.192, -151.3925",
    "price": 48000,
    "acreage": 17.5,
    "landType": "recreational",
    "zoning": "Recreation",
    "status": "active",
    "locationLabel": "Clam Gulch, Alaska",
    "coordinates": [
      60.192,
      -151.3925
    ],
    "boundary": [
      [
        60.216,
        -151.44078
      ],
      [
        60.2052,
        -151.34422
      ],
      [
        60.168,
        -151.358704
      ],
      [
        60.1776,
        -151.435952
      ]
    ],
    "views": 749,
    "favorites": 66,
    "featured": false,
    "verifiedSeller": true,
    "clearTitle": true,
    "surveyed": true,
    "roadAccess": "Private gravel or trail approach",
    "utilities": [
      "Trail access",
      "Dry cabin pad",
      "ATV approach"
    ],
    "features": [
      "road access",
      "trails nearby",
      "surveyed",
      "clear title",
      "timber mix"
    ],
    "description": "Clam Gulch View Parcel gives buyers a direct-owner opportunity in Clam Gulch, Alaska. A quiet recreation tract with trails, camp pads, and moose traffic right out the back edge of the parcel. The parcel captures the Kenai Peninsula feel with spruce forest, mountain horizons, and dependable access for site visits and closing coordination without broker overhead.",
    "sellerNotes": "Trailheads, camping pads, and wildlife sign were documented to support a simple owner-to-owner sale.",
    "dueDiligence": {
      "titleStatus": "Preliminary title reviewed",
      "surveyStatus": "Stamped survey on file",
      "environmentalStatus": "No known wetlands or contamination issues reported by seller",
      "easements": "Standard utility and access easements only",
      "liens": "No open liens disclosed",
      "docsReady": [
        "Deed copy",
        "Tax statement",
        "Parcel map",
        "Disclosure packet"
      ]
    },
    "nearbyAmenities": [
      {
        "label": "Beach access",
        "distance": "11 min"
      },
      {
        "label": "Deep Creek launch",
        "distance": "19 min"
      },
      {
        "label": "Soldotna",
        "distance": "29 min"
      }
    ],
    "photos": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80"
    ],
    "documents": [
      {
        "type": "parcel_map",
        "label": "Parcel map PDF"
      },
      {
        "type": "survey",
        "label": "Survey and corner notes"
      },
      {
        "type": "title",
        "label": "Title and tax summary"
      }
    ],
    "seller": {
      "id": "seller-5",
      "name": "Evelyn North",
      "email": "evelyn@kenailandsales.com",
      "phone": "907-555-0105",
      "verified": true,
      "successRate": 96,
      "transactionCount": 8,
      "responseRate": 96,
      "responseTime": "within 4 hours"
    },
    "listedAt": "2026-04-02T10:00:00.000Z",
    "metrics": [
      {
        "label": "Price / acre",
        "value": "$2743"
      },
      {
        "label": "Parcel ID",
        "value": "KN-3129"
      },
      {
        "label": "Road access",
        "value": "Seasonal"
      },
      {
        "label": "Closing support",
        "value": "Escrow-ready"
      }
    ]
  }
]

export const featuredParcels = parcels.filter((parcel) => parcel.featured).slice(0, 6)
export const homeStats = [
  {
    "label": "Active FSBO parcels",
    "value": "26"
  },
  {
    "label": "Average seller savings",
    "value": "$18.4K"
  },
  {
    "label": "Owner-direct parcels sold",
    "value": "112"
  },
  {
    "label": "Verified title reviews",
    "value": "98%"
  }
]
export const testimonials: Testimonial[] = [
  {
    "name": "Tara L.",
    "role": "Soldotna seller",
    "quote": "We stayed in control, used a title company for closing, and saved more than a full commission.",
    "savings": "$21,600 saved"
  },
  {
    "name": "Jon P.",
    "role": "Homer bluff seller",
    "quote": "The due diligence checklist made buyers trust the listing before the first phone call.",
    "savings": "$34,000 saved"
  },
  {
    "name": "Mia R.",
    "role": "Sterling homestead buyer",
    "quote": "Seeing survey, title, and amenity notes on one page gave us confidence to move fast.",
    "savings": "Closed in 32 days"
  }
]
export const marketDataByArea: Record<string, MarketPoint[]> = {
  "Kenai": [
    {
      "period": "Jan",
      "averagePricePerAcre": 24500,
      "averageDaysOnMarket": 63,
      "closedSales": 7
    },
    {
      "period": "Feb",
      "averagePricePerAcre": 25200,
      "averageDaysOnMarket": 61,
      "closedSales": 8
    },
    {
      "period": "Mar",
      "averagePricePerAcre": 26100,
      "averageDaysOnMarket": 57,
      "closedSales": 9
    },
    {
      "period": "Apr",
      "averagePricePerAcre": 26800,
      "averageDaysOnMarket": 54,
      "closedSales": 10
    },
    {
      "period": "May",
      "averagePricePerAcre": 27400,
      "averageDaysOnMarket": 49,
      "closedSales": 12
    }
  ],
  "Homer": [
    {
      "period": "Jan",
      "averagePricePerAcre": 68200,
      "averageDaysOnMarket": 74,
      "closedSales": 4
    },
    {
      "period": "Feb",
      "averagePricePerAcre": 69100,
      "averageDaysOnMarket": 71,
      "closedSales": 4
    },
    {
      "period": "Mar",
      "averagePricePerAcre": 70600,
      "averageDaysOnMarket": 69,
      "closedSales": 5
    },
    {
      "period": "Apr",
      "averagePricePerAcre": 72200,
      "averageDaysOnMarket": 66,
      "closedSales": 6
    },
    {
      "period": "May",
      "averagePricePerAcre": 74100,
      "averageDaysOnMarket": 62,
      "closedSales": 7
    }
  ],
  "Cooper Landing": [
    {
      "period": "Jan",
      "averagePricePerAcre": 41800,
      "averageDaysOnMarket": 88,
      "closedSales": 2
    },
    {
      "period": "Feb",
      "averagePricePerAcre": 42500,
      "averageDaysOnMarket": 84,
      "closedSales": 2
    },
    {
      "period": "Mar",
      "averagePricePerAcre": 43800,
      "averageDaysOnMarket": 79,
      "closedSales": 3
    },
    {
      "period": "Apr",
      "averagePricePerAcre": 44700,
      "averageDaysOnMarket": 76,
      "closedSales": 3
    },
    {
      "period": "May",
      "averagePricePerAcre": 46300,
      "averageDaysOnMarket": 72,
      "closedSales": 4
    }
  ]
}
export const savedSearches: SavedSearch[] = [
  {
    "id": "search-1",
    "label": "Kenai buildable lots",
    "criteria": "Kenai \u2022 under $120K \u2022 utilities \u2022 buildable",
    "alerts": true
  },
  {
    "id": "search-2",
    "label": "Cooper Landing riverfront",
    "criteria": "Riverfront \u2022 under $300K \u2022 surveyed",
    "alerts": false
  }
]
export const dashboardInquiries: DashboardInquiry[] = [
  {
    "id": "inq-1",
    "parcelId": "parcel-02",
    "name": "Casey Holden",
    "email": "casey@example.com",
    "phone": "907-555-0121",
    "message": "Can you send the survey and confirm year-round access?",
    "receivedAt": "2026-04-07T16:10:00.000Z",
    "status": "new"
  },
  {
    "id": "inq-2",
    "parcelId": "parcel-12",
    "name": "Dylan Frost",
    "email": "dylan@example.com",
    "phone": "907-555-0122",
    "message": "We are pre-approved and would like a site walk this weekend.",
    "receivedAt": "2026-04-05T12:40:00.000Z",
    "status": "scheduled"
  },
  {
    "id": "inq-3",
    "parcelId": "parcel-20",
    "name": "Erin Shore",
    "email": "erin@example.com",
    "phone": "907-555-0123",
    "message": "Do you have the borough zoning confirmation in writing?",
    "receivedAt": "2026-04-03T10:15:00.000Z",
    "status": "responded"
  }
]
export const dashboardTransactions: DashboardTransaction[] = [
  {
    "id": "txn-1",
    "parcelId": "parcel-04",
    "buyer": "Willow Ridge LLC",
    "salePrice": 154000,
    "status": "title_review",
    "escrowCompany": "Kenai Peninsula Title",
    "closingDate": "2026-05-16"
  },
  {
    "id": "txn-2",
    "parcelId": "parcel-08",
    "buyer": "Brooks Family Trust",
    "salePrice": 267000,
    "status": "closing_scheduled",
    "escrowCompany": "First Alaska Escrow",
    "closingDate": "2026-04-28"
  },
  {
    "id": "txn-3",
    "parcelId": "parcel-15",
    "buyer": "North Trail Ventures",
    "salePrice": 82000,
    "status": "escrow_open",
    "escrowCompany": "Homer Land Title",
    "closingDate": "2026-05-30"
  }
]
export const adminQueue = [
  {
    "parcelId": "parcel-05",
    "reason": "New listing awaiting docs review",
    "priority": "High"
  },
  {
    "parcelId": "parcel-13",
    "reason": "Boundary map needs moderator check",
    "priority": "Medium"
  },
  {
    "parcelId": "parcel-24",
    "reason": "Seller badge renewal due",
    "priority": "Low"
  }
]
export const guideSteps = [
  {
    "title": "Know Your Land",
    "summary": "Order survey records, confirm parcel corners, verify legal access, and collect zoning notes before you price anything."
  },
  {
    "title": "Price It Right",
    "summary": "Compare acreage-adjusted sales, location premiums, and utility access so your asking price feels justified to local buyers."
  },
  {
    "title": "Prepare Documentation",
    "summary": "Assemble deed copies, tax statements, disclosures, survey files, and DNR or borough correspondence into one shareable folder."
  },
  {
    "title": "List and Market",
    "summary": "Lead with views, access, and due diligence. Share your listing on social channels and directly with local builders or cabin buyers."
  },
  {
    "title": "Handle Offers",
    "summary": "Use written offers, clear deadlines, and documented counter-offers. Keep title and escrow partners looped in early."
  },
  {
    "title": "Close the Sale",
    "summary": "Open escrow, resolve title questions, coordinate funding, and record the deed with an Alaska closing professional."
  }
]
export const diligenceTopics = [
  "Title search explained",
  "Survey requirements",
  "Environmental assessments",
  "Easements and right-of-way",
  "Water rights in Alaska",
  "Mineral rights",
  "Zoning and land use",
  "Alaska DNR resources"
]
export const closingSteps = [
  {
    "title": "Open escrow",
    "timing": "Day 1-5",
    "detail": "Choose a title and escrow company, deliver the signed purchase agreement, and deposit earnest money."
  },
  {
    "title": "Title and document review",
    "timing": "Day 5-20",
    "detail": "Title officer reviews vesting, taxes, legal description, and any easements or payoff items."
  },
  {
    "title": "Buyer due diligence",
    "timing": "Day 10-30",
    "detail": "Buyer confirms financing, walk-through, survey needs, access, and any environmental questions."
  },
  {
    "title": "Closing package",
    "timing": "Day 25-45",
    "detail": "Escrow prepares deed, settlement statement, title insurance, and signing instructions for both sides."
  },
  {
    "title": "Funding and recording",
    "timing": "Day 30-60",
    "detail": "Funds arrive, deed records, proceeds disburse, and both parties receive final closing documents."
  }
]
export const sisterSites = [
  "https://kenaiborough.com",
  "https://kenaiboroughrealty.com",
  "https://kenaipeninsularentals.com",
  "https://kenaihomesales.com",
  "https://kenaiautosales.com",
  "https://kenailistings.com",
  "https://kenainews.com"
]

export const landFeatures = [
  'road access',
  'utilities',
  'water rights',
  'buildable',
  'surveyed',
  'clear title',
  'river access',
  'off-grid ready',
  'ocean view',
  'timber mix',
]

export const zoningOptions = ['All', ...new Set(parcels.map((parcel) => parcel.zoning))]
export const cities = ['All', ...new Set(parcels.map((parcel) => parcel.city))]
export const regions = ['All', ...new Set(parcels.map((parcel) => parcel.region))]
