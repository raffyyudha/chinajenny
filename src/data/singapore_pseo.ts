
// SINGAPORE PSEO DATA - MASSIVE DATABASE
// Target: 100k+ permutations via Service + Location + Style + Room combinations

export const SINGAPORE_LOCATIONS = [
    // --- TIER 1: ULTRA LUXURY CONDOS (Orchard, Tanglin, Sentosa) ---
    "The Marq on Paterson Hill", "Les Maisons Nassim", "Wallich Residence", "Boulevard 88",
    "Sculptura Ardmore", "Le Nouvel Ardmore", "TwentyOne Angullia Park", "Reignwood Hamilton Scotts",
    "3 Orchard By-The-Park", "Nouvel 18", "Skyline @ Orchard Boulevard", "New Futura",
    "The Ritz-Carlton Residences", "Ardmore Park", "Grange 1866", "Cuscaden Reserve",
    "Park Nova", "Klimt Cairnhill", "Perfect Ten", "Dalvey Haus", "The Nassim",
    "Seven Palms Sentosa Cove", "The Oceanfront @ Sentosa", "Cape Royale", "Turquoise",
    "Seascape", "Marina Collection", "Reflections at Keppel Bay", "Corals at Keppel Bay",

    // --- TIER 2: PRIME DISTRICT CONDOS (D9, D10, D11, D01, D02) ---
    "Marina One Residences", "The Sail @ Marina Bay", "V on Shenton", "One Shenton",
    "Duo Residences", "South Beach Residences", "Midtown Modern", "Midtown Bay",
    "Martin Modern", "Riverdale Residence", "Centennia Suites", "Cosmopolitan",
    "Trilight", "Newton Suites", "L'Viv", "Espada", "OUE Twin Peaks", "The Avenir",
    "Riviere", "Canninghill Piers", "Irwell Hill Residences", "Kopar at Newton",
    "Pullman Residences", "Neu at Novena", "Fyve Derbyshire", "35 Gilstead", "Dunearn 386",

    // --- TIER 3: POPULAR MASS MARKET CONDOS (High Renovation Volume) ---
    "D'Leedon", "Interlace", "Florence Residences", "Treasure at Tampines", "Parc Clematis",
    "Jadescape", "Riverfront Residences", "Affinity at Serangoon", "Stirling Residences",
    "Park Colonial", "Woodleigh Residences", "Parc Estes", "Sims Urban Oasis",
    "Principal Garden", "Commonwealth Towers", "Queens Peak", "Margaret Ville",
    "Seaside Residences", "Coastline Residences", "Amber Park", "Nyon", "Meyer Mansion",

    // --- TIER 4: HDB ESTATES (BTO & Resale Hubs) ---
    "Punggol Point Woods", "Punggol Northshore", "Bidadari Park", "Alkaff Oasis",
    "Tampines GreenVerge", "Tampines GreenCourt", "Clementi NorthArc", "Clementi Peaks",
    "Dawson SkyVille", "Dawson SkyTerrace", "Pinnacle @ Duxton", "Telok Blangah ParcView",
    "Ghim Moh Edge", "Toa Payoh Crest", "Toa Payoh Apex", "Boon Keng Vistra",
    "Kallang Trivista", "MacPherson Spring", "Bedok South Horizon", "Chai Chee Green",
    "Jurong West Jewel", "Boon Lay Glade", "Tengah Plantation", "Tengah Garden"
];

export const SERVICES = [
    // --- CORE SERVICES ---
    { slug: "interior-design", name: "Luxury Interior Design" },
    { slug: "renovation", name: "Premium Renovation" },
    { slug: "3d-rendering", name: "Photorealistic 3D Rendering" },
    { slug: "condo-styling", name: "Condo Interior Styling" },
    { slug: "hdb-transformation", name: "HDB Flat Transformation" },

    // --- NICHE SERVICES (Long tail) ---
    { slug: "kitchen-overhaul", name: "Gourmet Kitchen Overhaul" },
    { slug: "luxury-bathroom", name: "Spa-Like Bathroom Design" },
    { slug: "walk-in-wardrobe", name: "Bespoke Walk-In Wardrobe" },
    { slug: "home-office", name: "Productive Home Office Setup" },
    { slug: "smart-home", name: "Integrated Smart Home Design" },
    { slug: "minimalist-makeover", name: "Minimalist Makeover" },
    { slug: "feng-shui-audit", name: "Feng Shui Interior Audit" }
];

export const DESIGN_STYLES = [
    "Japandi", "Wabi-Sabi", "Modern Luxury", "Contemporary",
    "Industrial Chic", "Modern Classic", "Scandi-Luxe", "Hotel Suite Vibe"
];

export const VIRAL_VIDEOS = [
    "/ssstik.io_1770018198775.mp4",
    "/ssstik.io_1770018301644.mp4"
];

export const MANDARIN_CONTENT = {
    intro: {
        heading: "设计师寄语 (A Word from Jenny)",
        text: "设计不仅仅是美学，更是生活的艺术。在新加坡这样快节奏的城市，家应该是您心灵的避风港。 (Design is not just aesthetics, it is the art of living. In a fast-paced city like Singapore, your home should be a sanctuary for your soul.)"
    },
    fengshui: {
        heading: "风水与现代从 (Modern Feng Shui)",
        text: "我们融合风水与现代奢华，为您打造独一无二的空间。 (We blend Feng Shui with modern luxury to create a unique space for you.)"
    }
};
