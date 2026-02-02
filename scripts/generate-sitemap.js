import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// DATA SOURCE (HARDCODED FOR SCRIPT SIMPLICITY)
const SINGAPORE_LOCATIONS = [
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

// GENERATE 5000+ HDB STREETS & AVENUES
const BASE_LOCATIONS = [
    "Bedok", "Tampines", "Jurong West", "Woodlands", "Sengkang", "Yishun",
    "Choa Chu Kang", "Hougang", "Punggol", "Ang Mo Kio", "Bukit Batok", "Bukit Panjang",
    "Pasir Ris", "Bukit Merah", "Serangoon", "Toa Payoh", "Geylang", "Kallang",
    "Queenstown", "Clementi", "Bishan", "Sembawang", "Jurong East", "Novena", "Marine Parade"
];

const GENERATED_LOCATIONS = [];
BASE_LOCATIONS.forEach(loc => {
    // Generate Street 1 to Street 65 (Common in HDB towns)
    for (let i = 1; i <= 65; i++) {
        GENERATED_LOCATIONS.push(`${loc} Street ${i}`);
    }
    // Generate Avenue 1 to Avenue 15
    for (let i = 1; i <= 15; i++) {
        GENERATED_LOCATIONS.push(`${loc} Avenue ${i}`);
    }
    // Generate Drive 1 to Drive 20
    for (let i = 1; i <= 20; i++) {
        GENERATED_LOCATIONS.push(`${loc} Drive ${i}`);
    }
    // Generate Crescent 1 to Crescent 10
    for (let i = 1; i <= 10; i++) {
        GENERATED_LOCATIONS.push(`${loc} Crescent ${i}`);
    }
    // Generate Lane 1 to Lane 10 (For landed/mixed areas)
    for (let i = 1; i <= 10; i++) {
        GENERATED_LOCATIONS.push(`${loc} Lane ${i}`);
    }
});

const ALL_LOCATIONS = [...SINGAPORE_LOCATIONS, ...GENERATED_LOCATIONS];

const SERVICES = [
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
    { slug: "walk-in-wardrobe", name: "Bespoke Walk-In Wardrobe" },
    { slug: "home-office", name: "Productive Home Office Setup" },
    { slug: "smart-home", name: "Integrated Smart Home Renovation" },
    { slug: "minimalist-makeover", name: "Minimalist Makeover" },
    { slug: "feng-shui-audit", name: "Feng Shui Interior Audit" }
];

const DOMAIN = "https://booking.blesspace.org";

console.log(`🚀 Generating Sitemap for ${ALL_LOCATIONS.length} locations x ${SERVICES.length} services...`);

let urls = [];

// 1. Static Routes
urls.push(
    `${DOMAIN}/`,
    `${DOMAIN}/pricing`,
    `${DOMAIN}/portfolio`,
    `${DOMAIN}/contact`
);

// 2. Generate PSEO Routes (English & Chinese)
ALL_LOCATIONS.forEach(location => {
    SERVICES.forEach(service => {
        // Normalize slugs
        const locSlug = location.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

        // English URL
        urls.push(`${DOMAIN}/sg/${service.slug}/${locSlug}`);

        // Chinese URL (Targeting Mandarin Speakers in SG)
        // Format: /zh-sg/service/location (We will handle this route in App.tsx)
        urls.push(`${DOMAIN}/zh-sg/${service.slug}/${locSlug}`);
    });
});

console.log(`✅ Total URLs Generated: ${urls.length}`);

// SPLIT SITEMAPS IF > 45,000 URLs (Google Limit is 50k, safe margin)
const CHUNK_SIZE = 45000;
const chunks = [];

for (let i = 0; i < urls.length; i += CHUNK_SIZE) {
    chunks.push(urls.slice(i, i + CHUNK_SIZE));
}

// Generate Individual Sitemap Files
chunks.forEach((chunk, index) => {
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${chunk.map(url => `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url.length < 50 ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

    const fileName = `sitemap-${index + 1}.xml`;
    fs.writeFileSync(path.resolve(__dirname, `../public/${fileName}`), sitemapContent);
    console.log(`📄 Created ${fileName} with ${chunk.length} URLs`);
});

// Generate Sitemap Index
const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${chunks.map((_, index) => `  <sitemap>
    <loc>${DOMAIN}/sitemap-${index + 1}.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`;

fs.writeFileSync(path.resolve(__dirname, '../public/sitemap.xml'), sitemapIndex);
console.log(`🎉 Sitemap Index Generated: sitemap.xml linking to ${chunks.length} sitemaps.`);
