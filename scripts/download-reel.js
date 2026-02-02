const instagramGetUrl = require("instagram-url-direct");
const fs = require('fs');
const path = require('path');
const axios = require('axios');

// Usage: node scripts/download-reel.js <INSTAGRAM_URL>
const args = process.argv.slice(2);
const instagramUrl = args[0];

if (!instagramUrl) {
    console.error('❌ Please provide an Instagram URL.');
    console.log('Usage: node scripts/download-reel.js <URL>');
    process.exit(1);
}

const PUBLIC_VIDEOS_DIR = path.resolve(__dirname, '../public/videos');
const DATA_FILE = path.resolve(__dirname, '../src/data/singapore_pseo.ts');

if (!fs.existsSync(PUBLIC_VIDEOS_DIR)) {
    fs.mkdirSync(PUBLIC_VIDEOS_DIR, { recursive: true });
}

async function downloadVideo() {
    console.log(`🔍 Fetching video from: ${instagramUrl} ...`);

    try {
        const result = await instagramGetUrl(instagramUrl);

        if (result.url_list && result.url_list.length > 0) {
            const videoUrl = result.url_list[0];
            console.log(`🎥 Found video URL! Downloading...`);

            const timestamp = Date.now();
            const filename = `reel_${timestamp}.mp4`;
            const filePath = path.join(PUBLIC_VIDEOS_DIR, filename);

            const writer = fs.createWriteStream(filePath);
            const response = await axios({
                url: videoUrl,
                method: 'GET',
                responseType: 'stream'
            });

            response.data.pipe(writer);

            return new Promise((resolve, reject) => {
                writer.on('finish', () => {
                    console.log(`✅ Downloaded to: public/videos/${filename}`);
                    updateDataFile(filename);
                    resolve();
                });
                writer.on('error', reject);
            });
        } else {
            console.error('❌ No video found in the provided link.');
        }

    } catch (error) {
        console.error('❌ Error downloading video:', error.message);
    }
}

function updateDataFile(filename) {
    let content = fs.readFileSync(DATA_FILE, 'utf8');

    // Regex to find the VIRAL_VIDEOS array and append the new video
    // This assumes the array format is: export const VIRAL_VIDEOS = [ ... ];
    const videoPath = `/videos/${filename}`;
    const insertString = `    "${videoPath}",\n`;

    // Look for the closing bracket of VIRAL_VIDEOS
    const arrayRegex = /(export const VIRAL_VIDEOS = \[\s*)([\s\S]*?)(\s*\];)/;

    if (arrayRegex.test(content)) {
        content = content.replace(arrayRegex, (match, prefix, body, suffix) => {
            // Check if user has comma at end of body
            const trimmedBody = body.trimEnd();
            if (trimmedBody.length > 0 && !trimmedBody.endsWith(',') && !trimmedBody.endsWith('[')) {
                // Add comma if missing
                return `${prefix}${trimmedBody},\n${insertString}${suffix}`;
            }
            return `${prefix}${body}${insertString}${suffix}`;
        });

        fs.writeFileSync(DATA_FILE, content, 'utf8');
        console.log(`📝 Updated src/data/singapore_pseo.ts with new video.`);
    } else {
        console.error('❌ Could not find VIRAL_VIDEOS array in data file.');
    }
}

downloadVideo();
