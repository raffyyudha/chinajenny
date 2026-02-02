
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
    // --- CORE SERVICES (DESIGN + BUILD) ---
    { slug: "interior-design", name: "Luxury Interior Design" },
    { slug: "renovation-contractor", name: "Direct Renovation Contractor" }, // NEW
    { slug: "renovation", name: "Premium Home Renovation" },
    { slug: "resale-renovation", name: "Resale Condo/HDB Renovation" }, // NEW
    { slug: "bto-renovation", name: "BTO Renovation Package" }, // NEW
    { slug: "wet-works", name: "Wet Works & Tiling Specialist" }, // NEW
    { slug: "carpentry", name: "Custom Carpentry & Joinery" }, // NEW
    { slug: "3d-rendering", name: "Photorealistic 3D Rendering" },
    { slug: "condo-styling", name: "Condo Interior Styling" },
    { slug: "hdb-transformation", name: "HDB Flat Transformation" },

    // --- NICHE SERVICES (Long tail) ---
    { slug: "kitchen-overhaul", name: "Kitchen Renovation & Overhaul" },
    { slug: "luxury-bathroom", name: "Toilet & Bathroom Renovation" },
    { slug: "hack-and-build", name: "Hacking & Masonry Works" }, // NEW
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
    "/ssstik.io_1770018301644.mp4",
    "/videos/reel_1770024798101_231.mp4", "/videos/reel_1770024804496_845.mp4", "/videos/reel_1770024810462_229.mp4", "/videos/reel_1770024816891_986.mp4", "/videos/reel_1770024821110_467.mp4", "/videos/reel_1770024827023_696.mp4", "/videos/reel_1770024832577_178.mp4", "/videos/reel_1770024840322_325.mp4", "/videos/reel_1770024847375_29.mp4", "/videos/reel_1770024851766_771.mp4", "/videos/reel_1770024857899_458.mp4", "/videos/reel_1770024864322_932.mp4", "/videos/reel_1770024871027_39.mp4", "/videos/reel_1770024877674_474.mp4", "/videos/reel_1770024884657_310.mp4", "/videos/reel_1770024889744_526.mp4", "/videos/reel_1770024895776_746.mp4", "/videos/reel_1770024902244_919.mp4", "/videos/reel_1770024909305_406.mp4", "/videos/reel_1770024913320_973.mp4", "/videos/reel_1770024921091_526.mp4", "/videos/reel_1770024928892_448.mp4", "/videos/reel_1770024933794_97.mp4", "/videos/reel_1770024939190_504.mp4", "/videos/reel_1770024946946_195.mp4", "/videos/reel_1770024953832_746.mp4", "/videos/reel_1770024957867_606.mp4", "/videos/reel_1770024964846_92.mp4", "/videos/reel_1770024969660_420.mp4", "/videos/reel_1770024974405_781.mp4", "/videos/reel_1770024980459_493.mp4", "/videos/reel_1770024987985_189.mp4", "/videos/reel_1770024992001_580.mp4", "/videos/reel_1770024996051_380.mp4", "/videos/reel_1770025003932_252.mp4", "/videos/reel_1770025010894_545.mp4", "/videos/reel_1770025026266_924.mp4", "/videos/reel_1770025030639_364.mp4", "/videos/reel_1770025037708_525.mp4", "/videos/reel_1770025044088_202.mp4", "/videos/reel_1770025051375_714.mp4", "/videos/reel_1770025060500_520.mp4", "/videos/reel_1770025067582_588.mp4", "/videos/reel_1770025075876_842.mp4", "/videos/reel_1770025082209_697.mp4", "/videos/reel_1770025088200_272.mp4", "/videos/reel_1770025095442_864.mp4", "/videos/reel_1770025102286_511.mp4", "/videos/reel_1770025107719_977.mp4", "/videos/reel_1770025114795_626.mp4", "/videos/reel_1770025119528_79.mp4", "/videos/reel_1770025124143_491.mp4", "/videos/reel_1770025130804_818.mp4", "/videos/reel_1770025137533_889.mp4", "/videos/reel_1770025143159_300.mp4", "/videos/reel_1770025148982_871.mp4", "/videos/reel_1770025153488_964.mp4", "/videos/reel_1770025161158_865.mp4", "/videos/reel_1770025166739_957.mp4", "/videos/reel_1770025173920_830.mp4", "/videos/reel_1770025178425_513.mp4", "/videos/reel_1770025182966_333.mp4", "/videos/reel_1770025189454_543.mp4", "/videos/reel_1770025196725_865.mp4", "/videos/reel_1770025201642_455.mp4", "/videos/reel_1770025209196_230.mp4", "/videos/reel_1770025217981_215.mp4", "/videos/reel_1770025224870_579.mp4", "/videos/reel_1770025229426_477.mp4", "/videos/reel_1770025244510_132.mp4", "/videos/reel_1770025251225_487.mp4",    "/videos/reel_1770025257783_714.mp4",    "/videos/reel_1770025264878_40.mp4",    "/videos/reel_1770025272961_631.mp4",    "/videos/reel_1770025280987_50.mp4",    "/videos/reel_1770025286963_374.mp4",    "/videos/reel_1770025291767_144.mp4",    "/videos/reel_1770025298236_448.mp4",    "/videos/reel_1770025304502_478.mp4",    "/videos/reel_1770025310697_164.mp4",    "/videos/reel_1770025317355_37.mp4",    "/videos/reel_1770025323721_216.mp4",    "/videos/reel_1770025329305_420.mp4",    "/videos/reel_1770025337758_854.mp4",    "/videos/reel_1770025344609_387.mp4",    "/videos/reel_1770025351663_208.mp4",    "/videos/reel_1770025357135_680.mp4",    "/videos/reel_1770025362860_835.mp4",    "/videos/reel_1770025368889_269.mp4",    "/videos/reel_1770025374348_877.mp4",    "/videos/reel_1770025382598_651.mp4",    "/videos/reel_1770025389150_345.mp4",    "/videos/reel_1770025394440_707.mp4",    "/videos/reel_1770025399030_392.mp4",    "/videos/reel_1770025405820_399.mp4",    "/videos/reel_1770025414416_77.mp4",    "/videos/reel_1770025419805_272.mp4",    "/videos/reel_1770025425446_896.mp4",    "/videos/reel_1770025432681_179.mp4",    "/videos/reel_1770025440586_314.mp4",    "/videos/reel_1770025445023_547.mp4",    "/videos/reel_1770025451579_153.mp4",    "/videos/reel_1770025458243_668.mp4",    "/videos/reel_1770025465409_779.mp4",    "/videos/reel_1770025474735_126.mp4",    "/videos/reel_1770025481621_309.mp4",    "/videos/reel_1770025486951_998.mp4",    "/videos/reel_1770025493040_884.mp4",    "/videos/reel_1770025498406_851.mp4",    "/videos/reel_1770025504358_897.mp4",    "/videos/reel_1770025511018_878.mp4",    "/videos/reel_1770025515706_719.mp4",    "/videos/reel_1770025520940_155.mp4",    "/videos/reel_1770025527320_311.mp4",    "/videos/reel_1770025532179_714.mp4",    "/videos/reel_1770025540237_474.mp4",    "/videos/reel_1770025545183_21.mp4",    "/videos/reel_1770025550770_137.mp4",    "/videos/reel_1770025556470_578.mp4",    "/videos/reel_1770025562487_779.mp4",    "/videos/reel_1770025566915_705.mp4",    "/videos/reel_1770025571299_244.mp4",    "/videos/reel_1770025576351_763.mp4",    "/videos/reel_1770025582637_711.mp4",    "/videos/reel_1770025588693_210.mp4",    "/videos/reel_1770025593452_119.mp4",    "/videos/reel_1770025598342_957.mp4",    "/videos/reel_1770025603034_33.mp4",    "/videos/reel_1770025608418_433.mp4",    "/videos/reel_1770025612749_90.mp4",    "/videos/reel_1770025616835_915.mp4",    "/videos/reel_1770025622524_906.mp4",    "/videos/reel_1770025628852_602.mp4",    "/videos/reel_1770025635480_26.mp4",    "/videos/reel_1770025642577_441.mp4",    "/videos/reel_1770025647231_888.mp4",    "/videos/reel_1770025653318_902.mp4",    "/videos/reel_1770025660429_880.mp4",    "/videos/reel_1770025667455_782.mp4",    "/videos/reel_1770025674888_403.mp4",    "/videos/reel_1770025680069_571.mp4",    "/videos/reel_1770025685564_755.mp4",    "/videos/reel_1770025689686_659.mp4",    "/videos/reel_1770025696017_616.mp4",    "/videos/reel_1770025700438_989.mp4",    "/videos/reel_1770025705135_391.mp4",    "/videos/reel_1770025711544_658.mp4",    "/videos/reel_1770025715864_701.mp4",    "/videos/reel_1770025721489_762.mp4",    "/videos/reel_1770025726408_628.mp4",    "/videos/reel_1770025731630_312.mp4",    "/videos/reel_1770025739155_978.mp4",    "/videos/reel_1770025745845_976.mp4",    "/videos/reel_1770025751005_759.mp4",    "/videos/reel_1770025758581_310.mp4",    "/videos/reel_1770025765523_992.mp4",    "/videos/reel_1770025769662_899.mp4",    "/videos/reel_1770025775730_439.mp4",    "/videos/reel_1770025781297_569.mp4",    "/videos/reel_1770025789493_570.mp4",
































































































































































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
