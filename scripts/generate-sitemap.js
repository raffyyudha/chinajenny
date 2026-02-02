
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- MASSIVE DATASET FOR 100K TARGET ---

// 1. FIXED LOCATIONS (Luxury Condos & Areas)
const BASE_LOCATIONS = [
    "Orchard Road", "Tanglin Road", "Newton Circus", "River Valley Road", "Bukit Timah Road", "Holland Village",
    "Novena", "Thomson", "Balestier", "Marina Bay", "Sentosa Cove", "Tanjong Pagar", "Keppel Bay",
    "The Marq on Paterson Hill", "Les Maisons Nassim", "Wallich Residence", "Boulevard 88",
    "Sculptura Ardmore", "Le Nouvel Ardmore", "TwentyOne Angullia Park", "Reignwood Hamilton Scotts",
    "3 Orchard By-The-Park", "Nouvel 18", "Skyline @ Orchard Boulevard", "New Futura",
    "The Ritz-Carlton Residences", "Ardmore Park", "Grange 1866", "Cuscaden Reserve",
    "Park Nova", "Klimt Cairnhill", "Perfect Ten", "Dalvey Haus", "The Nassim",
    "Seven Palms Sentosa Cove", "The Oceanfront @ Sentosa", "Cape Royale", "Turquoise",
    "Seascape", "Marina Collection", "Reflections at Keppel Bay", "Corals at Keppel Bay",
    "Marina One Residences", "The Sail @ Marina Bay", "V on Shenton", "One Shenton",
    "Duo Residences", "South Beach Residences", "Midtown Modern", "Midtown Bay",
    "Martin Modern", "Riverdale Residence", "Centennia Suites", "Cosmopolitan",
    "Trilight", "Newton Suites", "L'Viv", "Espada", "OUE Twin Peaks", "The Avenir",
    "Riviere", "Canninghill Piers", "Irwell Hill Residences", "Kopar at Newton",
    "Pullman Residences", "Neu at Novena", "Fyve Derbyshire", "35 Gilstead", "Dunearn 386",
    "D'Leedon", "Interlace", "Florence Residences", "Treasure at Tampines", "Parc Clematis",
    "Jadescape", "Riverfront Residences", "Affinity at Serangoon", "Stirling Residences",
    "Park Colonial", "Woodleigh Residences", "Parc Estes", "Sims Urban Oasis",
    "Principal Garden", "Commonwealth Towers", "Queens Peak", "Margaret Ville",
    "Seaside Residences", "Coastline Residences", "Amber Park", "Nyon", "Meyer Mansion",
    "Tengah Plantation", "Bidadari Park", "Canberra", "Lentor Modern", "Beauty World",
    "Normanton Park", "One North", "Dover", "Ghim Moh", "Holland Drive", "Empress Road",
    "Farrer Road", "Queensway", "Alexandra Road", "Tiong Bahru", "Redhill", "Telok Blangah",
    "Harbourfront", "Pasir Panjang", "West Coast", "Pandan Valley", "Mount Sinai",
    "Sixth Avenue", "King Albert Park", "Hillview", "Dairy Farm", "Chestnut Drive",
    "Upper Bukit Timah", "Hume Avenue", "Springleaf", "Mandai", "Tagore", "Yio Chu Kang",
    "Seletar", "Jalan Kayu", "Fernvale", "Anchorvale", "Compassvale", "Rivervale",
    "Punggol Field", "Punggol Central", "Punggol Way", "Punggol Walk", "Punggol Place",
    "Sumang", "Nibong", "Soo Teck", "Cheng Lim", "Damai", "Oasis", "Kadaloor", "Riviera",
    "Coral Edge", "Meridian", "Rumbia", "Bakau", "Kangkar", "Ranggung", "Renjong"
];

// 2. GENERATE MASSIVE HDB STREETS & AVENUES (Singapore Pattern)
const GENERATED_LOCATIONS = [];
const ESTATES = [
    "Ang Mo Kio", "Bedok", "Bishan", "Bukit Batok", "Bukit Merah",
    "Bukit Panjang", "Choa Chu Kang", "Clementi", "Geylang", "Hougang",
    "Jurong East", "Jurong West", "Pasir Ris", "Punggol", "Queenstown",
    "Sembawang", "Sengkang", "Serangoon", "Tampines", "Toa Payoh",
    "Woodlands", "Yishun"
];

ESTATES.forEach(estate => {
    // Generate Avenue 1-15
    for (let i = 1; i <= 15; i++) {
        GENERATED_LOCATIONS.push(`${estate} Avenue ${i}`);
    }
    // Generate Street 11-91 (Common HDB patterns)
    for (let i = 11; i <= 91; i += 2) { // Skip some to be organic
        GENERATED_LOCATIONS.push(`${estate} Street ${i}`);
    }
    // Generate Ring Road / Central specific
    GENERATED_LOCATIONS.push(`${estate} Ring Road`);
    GENERATED_LOCATIONS.push(`${estate} Central`);
    GENERATED_LOCATIONS.push(`${estate} North`);
});

// 3. COMBINE ALL
const ALL_LOCATIONS = [...BASE_LOCATIONS, ...GENERATED_LOCATIONS];

// 4. STRATEGIES
const SERVICES = [
    "interior-design", "renovation", "3d-rendering", "hdb-renovation",
    "condo-renovation", "landed-property-design", "commercial-interior",
    "kitchen-renovation", "bathroom-renovation" // Promoted to top level for multiplier
];

const STYLES = [
    "japandi", "wabi-sabi", "minimalist", "luxury", "modern-classic",
    "industrial", "scandinavian", "contemporary", "hotel-style", "victorian",
    "retro", "art-deco", "bohemian", "mid-century-modern", "resort-style", "zen"
];

const UNIT_TYPES = [
    "2-bedroom", "3-bedroom", "4-bedroom", "5-bedroom", "penthouse",
    "dual-key", "studio", "maisonette", "executive-apartment", "jumbo-flat"
];

// GENERATE URLs
let urls = [];

console.log(`Generating URLs for ${ALL_LOCATIONS.length} unique locations...`);

ALL_LOCATIONS.forEach(loc => {
    const locSlug = loc.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

    // 1. CORE SERVICES (e.g. /sg/interior-design/location)
    SERVICES.forEach(service => {
        urls.push(`https://booking.blesspace.org/sg/${service}/${locSlug}`);
    });

    // 2. UNIT TYPE DEEP LINKS (e.g. /sg/interior-design/location-penthouse)
    // Applied primarily to main services to avoid overload
    ["interior-design", "renovation"].forEach(service => {
        UNIT_TYPES.forEach(unit => {
            urls.push(`https://booking.blesspace.org/sg/${service}/${locSlug}-${unit}`);
        });
    });

    // 3. STYLE PERMUTATIONS (e.g. /sg/japandi-interior-design/location)
    STYLES.forEach(style => {
        urls.push(`https://booking.blesspace.org/sg/${style}-interior-design/${locSlug}`);
    });
});

console.log(`Generated ${urls.length} unique PSEO URLs.`);

// XML SITEMAP SPLITTING (GOOGLE LIMIT IS 50K URLS PER SITEMAP)
// We will generate multiple sitemaps and a sitemap index.

if (urls.length > 50000) {
    console.log("URL count exceeds 50,000. Configuring sitemap index...");
    const chunks = [];
    while (urls.length > 0) {
        chunks.push(urls.splice(0, 45000));
    }

    chunks.forEach((chunk, index) => {
        const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${chunk.map(url => `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`;
        fs.writeFileSync(path.resolve(__dirname, `../public/sitemap-${index + 1}.xml`), sitemapContent);
        console.log(`Written public/sitemap-${index + 1}.xml`);
    });

    // CREATE SITEMAP INDEX
    const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${chunks.map((_, i) => `
    <sitemap>
        <loc>https://booking.blesspace.org/sitemap-${i + 1}.xml</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
    </sitemap>`).join('')}
</sitemapindex>`;

    fs.writeFileSync(path.resolve(__dirname, '../public/sitemap.xml'), sitemapIndex);
    console.log("Written sitemap index to public/sitemap.xml");

} else {
    // SINGLE FILE FALLBACK
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(url => `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`;

    fs.writeFileSync(path.resolve(__dirname, '../public/sitemap.xml'), sitemap);
}
