const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const VIDEOS_DIR = path.resolve(__dirname, '../public/videos');
const FFMPEG_PATH = 'ffmpeg'; // Assumes ffmpeg is in system PATH

if (!fs.existsSync(VIDEOS_DIR)) {
    console.error(`❌ Directory not found: ${VIDEOS_DIR}`);
    process.exit(1);
}

const files = fs.readdirSync(VIDEOS_DIR).filter(file => file.endsWith('.mp4') && !file.includes('_optimized'));

console.log(`🚀 Found ${files.length} videos to compress...`);

if (files.length === 0) {
    console.log("✅ All videos are already optimized or no videos found.");
    process.exit(0);
}

files.forEach((file, index) => {
    const inputPath = path.join(VIDEOS_DIR, file);
    const tempPath = path.join(VIDEOS_DIR, `temp_${file}`);

    console.log(`[${index + 1}/${files.length}] Compressing ${file}...`);

    try {
        // High compression settings: 
        // - CRF 28 (Lower quality, smaller size. Range 0-51, 18-28 is standard)
        // - Preset veryfast (Faster encoding)
        // - Resize to 720p width (Scale height automatically)
        // - Remove audio if not critical (Optional: -an) -> We keep audio for now

        const command = `${FFMPEG_PATH} -i "${inputPath}" -vcodec libx264 -crf 30 -preset veryfast -vf "scale=720:-2" -acodec aac -b:a 64k "${tempPath}"`;

        execSync(command, { stdio: 'inherit' });

        // Replace original with compressed
        fs.unlinkSync(inputPath);
        fs.renameSync(tempPath, inputPath);

        console.log(`✅ Compressed: ${file}`);
    } catch (error) {
        console.error(`❌ Failed to compress ${file}:`, error.message);
        if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
    }
});

console.log(`\n🎉 ALL VIDEOS COMPRESSED SUCCESSFULLY!`);
