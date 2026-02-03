
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
    "Jurong West Jewel", "Boon Lay Glade", "Tengah Plantation", "Tengah Garden",

    // --- TIER 5: TOP 2025-2026 (HOT LEADS - NEW KEYS) ---
    "Lentor Modern", "Sceneca Residence", "Terra Hill", "The Continuum", "Tembusu Grand",
    "Grand Dunman", "The Reserve Residences", "Watten House", "Hillock Green", "J'den",
    "Lentor Hills Residences", "The Myst", "Pinetree Hill", "Lakegarden Residences",
    "Altura EC", "Lumina Grand EC", "Hillhaven", "The Arcady at Boon Keng", "Lentor Mansion"
];

export const SERVICES = [
    // --- CORE SERVICES (DESIGN + BUILD) ---
    { slug: "interior-design", name: "Luxury Interior Design" },
    { slug: "renovation-contractor", name: "Direct Renovation Contractor" },
    { slug: "renovation", name: "Premium Home Renovation" },
    { slug: "resale-renovation", name: "Resale Condo/HDB Renovation" },
    { slug: "bto-renovation", name: "BTO Renovation Package" },
    { slug: "wet-works", name: "Wet Works & Tiling Specialist" },
    { slug: "carpentry", name: "Custom Carpentry & Joinery" },
    { slug: "3d-rendering", name: "Photorealistic 3D Rendering" },
    { slug: "condo-styling", name: "Condo Interior Styling" },
    { slug: "hdb-transformation", name: "HDB Flat Transformation" },

    // --- NICHE SERVICES (Long tail) ---
    { slug: "kitchen-overhaul", name: "Kitchen Renovation & Overhaul" },
    { slug: "luxury-bathroom", name: "Toilet & Bathroom Renovation" },
    { slug: "hack-and-build", name: "Hacking & Masonry Works" },
    { slug: "walk-in-wardrobe", name: "Bespoke Walk-In Wardrobe" },
    { slug: "home-office", name: "Productive Home Office Setup" },
    { slug: "smart-home", name: "Integrated Smart Home Renovation" },
    { slug: "minimalist-makeover", name: "Minimalist Makeover" },
    { slug: "feng-shui-audit", name: "Feng Shui Interior Audit" }
];

export const DESIGN_STYLES = [
    "Japandi", "Wabi-Sabi", "Modern Luxury", "Contemporary",
    "Industrial Chic", "Modern Classic", "Scandi-Luxe", "Hotel Suite Vibe"
];

export const VIRAL_VIDEOS = [
    "/ssstik.io_1770018198775.mp4",
    "/ssstik.io_1770018301644.mp4",
    "/videos/reel_1770030031744_691.mp4", "/videos/reel_1770030038401_753.mp4", "/videos/reel_1770030046343_214.mp4", "/videos/reel_1770030053561_322.mp4", "/videos/reel_1770030057117_551.mp4", "/videos/reel_1770030063941_254.mp4", "/videos/reel_1770030070293_906.mp4", "/videos/reel_1770030078694_220.mp4", "/videos/reel_1770030084533_69.mp4", "/videos/reel_1770030088363_289.mp4", "/videos/reel_1770030094092_58.mp4", "/videos/reel_1770030098323_737.mp4", "/videos/reel_1770030104184_962.mp4", "/videos/reel_1770030109156_441.mp4", "/videos/reel_1770030115747_742.mp4", "/videos/reel_1770030122003_836.mp4", "/videos/reel_1770030128153_809.mp4", "/videos/reel_1770030131452_869.mp4", "/videos/reel_1770030135559_453.mp4", "/videos/reel_1770030138870_140.mp4", "/videos/reel_1770030144549_741.mp4", "/videos/reel_1770030148529_918.mp4", "/videos/reel_1770030154628_759.mp4", "/videos/reel_1770030160978_398.mp4", "/videos/reel_1770030168397_860.mp4", "/videos/reel_1770030173948_365.mp4", "/videos/reel_1770030180578_871.mp4", "/videos/reel_1770030185287_123.mp4", "/videos/reel_1770030189112_234.mp4", "/videos/reel_1770030195364_385.mp4", "/videos/reel_1770030202394_344.mp4", "/videos/reel_1770030212060_134.mp4", "/videos/reel_1770030217962_995.mp4", "/videos/reel_1770030224011_411.mp4", "/videos/reel_1770030229588_790.mp4", "/videos/reel_1770030237360_946.mp4", "/videos/reel_1770030251852_89.mp4", "/videos/reel_1770030258471_941.mp4", "/videos/reel_1770030263961_884.mp4", "/videos/reel_1770030270318_934.mp4", "/videos/reel_1770030276309_380.mp4", "/videos/reel_1770030282874_631.mp4", "/videos/reel_1770030289831_181.mp4", "/videos/reel_1770030294782_648.mp4", "/videos/reel_1770030300213_333.mp4", "/videos/reel_1770030304981_164.mp4", "/videos/reel_1770030310236_836.mp4", "/videos/reel_1770030315355_388.mp4", "/videos/reel_1770030319358_45.mp4", "/videos/reel_1770030323377_295.mp4", "/videos/reel_1770030328053_801.mp4", "/videos/reel_1770030333620_215.mp4", "/videos/reel_1770030337700_850.mp4", "/videos/reel_1770030342707_377.mp4", "/videos/reel_1770030346717_428.mp4", "/videos/reel_1770030350418_433.mp4", "/videos/reel_1770030356348_856.mp4", "/videos/reel_1770030366038_485.mp4", "/videos/reel_1770030370375_103.mp4", "/videos/reel_1770030376491_663.mp4", "/videos/reel_1770030382110_204.mp4", "/videos/reel_1770030385769_909.mp4", "/videos/reel_1770030391548_795.mp4", "/videos/reel_1770030396168_729.mp4", "/videos/reel_1770030402218_609.mp4", "/videos/reel_1770030408522_806.mp4", "/videos/reel_1770030416845_578.mp4", "/videos/reel_1770030420951_130.mp4", "/videos/reel_1770030427091_284.mp4", "/videos/reel_1770030432802_260.mp4", "/videos/reel_1770030437833_229.mp4", "/videos/reel_1770030443171_932.mp4", "/videos/reel_1770030449011_609.mp4", "/videos/reel_1770030454085_148.mp4", "/videos/reel_1770030461840_331.mp4", "/videos/reel_1770030468628_838.mp4", "/videos/reel_1770030472915_802.mp4", "/videos/reel_1770030477204_883.mp4", "/videos/reel_1770030482222_330.mp4", "/videos/reel_1770030487925_49.mp4", "/videos/reel_1770030494205_24.mp4", "/videos/reel_1770030501041_642.mp4", "/videos/reel_1770030505618_895.mp4", "/videos/reel_1770030510235_688.mp4", "/videos/reel_1770030516136_238.mp4", "/videos/reel_1770030523144_195.mp4", "/videos/reel_1770030527317_165.mp4", "/videos/reel_1770030530594_823.mp4", "/videos/reel_1770030537062_67.mp4", "/videos/reel_1770030541106_894.mp4", "/videos/reel_1770030545235_962.mp4", "/videos/reel_1770030549284_855.mp4", "/videos/reel_1770030555560_507.mp4", "/videos/reel_1770030559864_511.mp4", "/videos/reel_1770030566006_330.mp4", "/videos/reel_1770030570072_683.mp4", "/videos/reel_1770030573518_633.mp4", "/videos/reel_1770030578714_124.mp4", "/videos/reel_1770030585860_660.mp4", "/videos/reel_1770030591954_246.mp4", "/videos/reel_1770030597271_841.mp4", "/videos/reel_1770030603466_169.mp4", "/videos/reel_1770030609432_425.mp4", "/videos/reel_1770030615287_152.mp4", "/videos/reel_1770030621288_502.mp4", "/videos/reel_1770030625586_449.mp4", "/videos/reel_1770030633012_558.mp4", "/videos/reel_1770030638810_42.mp4", "/videos/reel_1770030643819_112.mp4", "/videos/reel_1770030650323_245.mp4", "/videos/reel_1770030656655_207.mp4", "/videos/reel_1770030662037_983.mp4", "/videos/reel_1770030667681_747.mp4", "/videos/reel_1770030672011_56.mp4", "/videos/reel_1770030678195_54.mp4", "/videos/reel_1770030683848_953.mp4", "/videos/reel_1770030688066_238.mp4", "/videos/reel_1770030692872_769.mp4", "/videos/reel_1770030697238_322.mp4", "/videos/reel_1770030703942_93.mp4", "/videos/reel_1770030708103_600.mp4", "/videos/reel_1770030716118_367.mp4", "/videos/reel_1770030719794_102.mp4", "/videos/reel_1770030726143_224.mp4", "/videos/reel_1770030731332_196.mp4", "/videos/reel_1770030737845_64.mp4", "/videos/reel_1770030743634_923.mp4", "/videos/reel_1770030748771_844.mp4", "/videos/reel_1770030753010_38.mp4", "/videos/reel_1770030757359_371.mp4", "/videos/reel_1770124956853.mp4",
];

export const MANDARIN_CONTENT = {
    intro: {
        heading: "设计师寄语 (A Word from Jenny)",
        text: "设计不仅仅是美学，更是生活的艺术。在新加坡这样快节奏的城市，家应该是您心灵的避港。 (Design is not just aesthetics, it is the art of living. In a fast-paced city like Singapore, your home should be a sanctuary for your soul.)"
    },
    fengshui: {
        heading: "风水与现代从 (Modern Feng Shui)",
        text: "我们融合风水与现代奢华，为您打造独一无二的空间。 (We blend Feng Shui with modern luxury to create a unique space for you.)"
    }
};
