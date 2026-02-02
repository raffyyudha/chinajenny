import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
// Try to import the library
let instagramGetUrl;
try {
    const lib = require("instagram-url-direct");
    console.log("📦 Library loaded. Type:", typeof lib);
    if (typeof lib === 'function') {
        instagramGetUrl = lib;
    } else if (lib.default && typeof lib.default === 'function') {
        instagramGetUrl = lib.default;
    } else if (lib.instagramGetUrl && typeof lib.instagramGetUrl === 'function') {
        instagramGetUrl = lib.instagramGetUrl;
    } else {
        console.log("⚠️  Library structure:", lib);
        instagramGetUrl = lib; // Fallback
    }
} catch (e) {
    console.error("❌ Failed to require 'instagram-url-direct':", e.message);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// File containing links (one per line)
const LINKS_FILE = path.resolve(__dirname, '../instagram-links.txt');
const PUBLIC_VIDEOS_DIR = path.resolve(__dirname, '../public/videos');
const DATA_FILE = path.resolve(__dirname, '../src/data/singapore_pseo.ts');

if (!fs.existsSync(PUBLIC_VIDEOS_DIR)) {
    fs.mkdirSync(PUBLIC_VIDEOS_DIR, { recursive: true });
}

// Function to download a single video
async function downloadVideo(url) {
    if (!url || !url.startsWith('http')) return;

    console.log(`\n🔍 Processing: ${url}`);

    if (typeof instagramGetUrl !== 'function') {
        console.error("❌ Link fetcher is not a function. Aborting.");
        return false;
    }

    try {
        const result = await instagramGetUrl(url);

        // API robustness check
        let videoUrl = null;
        if (result.url_list && result.url_list.length > 0) {
            videoUrl = result.url_list[0];
        } else if (result.media_details && result.media_details[0]?.url) {
            videoUrl = result.media_details[0].url;
        }

        if (videoUrl) {
            const timestamp = Date.now();
            // Add random number to avoid collision if running fast
            const random = Math.floor(Math.random() * 1000);
            const filename = `reel_${timestamp}_${random}.mp4`;
            const filePath = path.join(PUBLIC_VIDEOS_DIR, filename);

            console.log(`   ⬇️  Downloading content...`);

            const writer = fs.createWriteStream(filePath);
            const response = await axios({
                url: videoUrl,
                method: 'GET',
                responseType: 'stream'
            });

            response.data.pipe(writer);

            return new Promise((resolve, reject) => {
                writer.on('finish', () => {
                    console.log(`   ✅ Saved: ${filename}`);
                    updateDataFile(filename);
                    resolve(true);
                });
                writer.on('error', (err) => {
                    console.error(`   ❌ Write Error: ${err.message}`);
                    resolve(false);
                });
            });
        } else {
            console.error('   ❌ No video URL found (Private account, Rate limited, or Invalid Link?)');
            console.log('   (Result:)', JSON.stringify(result)); // Debug
            return false;
        }

    } catch (error) {
        console.error(`   ❌ Failed: ${error.message}`);
        return false;
    }
}

// Function to update the PSEO data file
function updateDataFile(filename) {
    try {
        let content = fs.readFileSync(DATA_FILE, 'utf8');
        const videoPath = `/videos/${filename}`;
        const insertString = `    "${videoPath}",\n`;
        const arrayRegex = /(export const VIRAL_VIDEOS = \[\s*)([\s\S]*?)(\s*\];)/;

        if (arrayRegex.test(content)) {
            content = content.replace(arrayRegex, (match, prefix, body, suffix) => {
                const trimmedBody = body.trimEnd();
                if (trimmedBody.length > 0 && !trimmedBody.endsWith(',') && !trimmedBody.endsWith('[')) {
                    return `${prefix}${trimmedBody},\n${insertString}${suffix}`;
                }
                return `${prefix}${body}${insertString}${suffix}`;
            });
            fs.writeFileSync(DATA_FILE, content, 'utf8');
            console.log(`   📝 Database Updated.`);
        }
    } catch (e) {
        console.error("   ❌ Database Update Failed:", e);
    }
}

// Main Runner
async function runBulkDownload() {
    if (!fs.existsSync(LINKS_FILE)) {
        console.log(`⚠️  File 'instagram-links.txt' not found!`);
        console.log(`Creating it now... Please paste your links there and run this script again.`);
        fs.writeFileSync(LINKS_FILE, '# Paste Instagram Reel URLs here (one per line)\n');
        return;
    }

    const fileContent = fs.readFileSync(LINKS_FILE, 'utf8');
    const urls = fileContent.split('\n').map(line => line.trim()).filter(line => line.length > 0 && !line.startsWith('#'));

    if (urls.length === 0) {
        console.log("⚠️  No links found in 'instagram-links.txt'. Please add some links!");
        return;
    }

    console.log(`🚀 Found ${urls.length} links to process...`);

    for (let i = 0; i < urls.length; i++) {
        await downloadVideo(urls[i]);
        // Random delay 2-5 seconds to be safe
        const delay = Math.floor(Math.random() * 3000) + 2000;
        if (i < urls.length - 1) {
            console.log(`   ⏳ Waiting ${delay / 1000}s...`);
            await new Promise(r => setTimeout(r, delay));
        }
    }

    console.log(`\n🎉 BATCH COMPLETED!`);
}

runBulkDownload();
