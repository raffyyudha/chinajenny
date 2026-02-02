import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import ffmpegPath from 'ffmpeg-static';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VIDEOS_DIR = path.resolve(__dirname, '../public/videos');
const FFMPEG_PATH = ffmpegPath;

if (!fs.existsSync(VIDEOS_DIR)) {
    console.error(`❌ Directory not found: ${VIDEOS_DIR}`);
    process.exit(1);
}

const files = fs.readdirSync(VIDEOS_DIR).filter(file => file.endsWith('.mp4') && !file.includes('_optimized'));

console.log(`🚀 Found ${files.length} videos to compress (HIGH QUALITY AUDIO MODE)...`);

if (files.length === 0) {
    console.log("✅ All videos are already optimized or no videos found.");
    process.exit(0);
}

files.forEach((file, index) => {
    const inputPath = path.join(VIDEOS_DIR, file);
    const tempPath = path.join(VIDEOS_DIR, `temp_${file}`);

    console.log(`[${index + 1}/${files.length}] Compressing ${file}...`);

    try {
        // SAFE & SMALL MODE (With Audio):
        // - CRF 32 (Good compression, manageable quality)
        // - Scale width to 480p (Perfect for mobile landing pages)
        // - Audio AAC 64k (Very small file size, audible sound)
        // - Preset veryfast

        const command = `${FFMPEG_PATH} -i "${inputPath}" -vcodec libx264 -crf 32 -preset veryfast -vf "scale=480:-2" -acodec aac -b:a 64k "${tempPath}"`;

        execSync(command, { stdio: 'inherit' });

        // Replace original with compressed
        fs.unlinkSync(inputPath);
        fs.renameSync(tempPath, inputPath);

        console.log(`✅ Compressed (Safe Mode): ${file}`);
    } catch (error) {
        console.error(`❌ Failed to compress ${file}:`, error.message);
        if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
    }
});

console.log(`\n🎉 HQ AUDIO COMPRESSION COMPLETED!`);
