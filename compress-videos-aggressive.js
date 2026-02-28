import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.join(__dirname, 'public', 'videos');
const tmpDir = path.join(__dirname, 'public', 'videos_tmp');

if (!fs.existsSync(tmpDir)) {
    fs.mkdirSync(tmpDir);
}

const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.mp4') && !f.startsWith('temp_'));
let totalOriginal = 0;
let totalNew = 0;

console.log(`Found ${files.length} mp4 files`);

// Target: reduce from ~211 MB to ~170 MB
// Use CRF 38 + scale down to 360p for aggressive compression while keeping audio
for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const inputPath = path.join(targetDir, file);
    const tmpPath = path.join(tmpDir, file);

    const stats = fs.statSync(inputPath);
    totalOriginal += stats.size;

    // Only re-compress files larger than 1.5 MB (the big ones)
    if (stats.size < 1.5 * 1024 * 1024) {
        totalNew += stats.size;
        continue;
    }

    console.log(`[${i + 1}/${files.length}] ${file} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);

    try {
        // More aggressive: CRF 38, scale to 360p width, keep audio
        execSync(`ffmpeg -y -i "${inputPath}" -vf "scale=360:-2" -vcodec libx264 -crf 38 -preset fast -c:a aac -b:a 64k "${tmpPath}"`, { stdio: 'pipe' });

        const newStats = fs.statSync(tmpPath);
        if (newStats.size < stats.size) {
            fs.renameSync(tmpPath, inputPath);
            totalNew += newStats.size;
            console.log(`  -> ${(newStats.size / 1024 / 1024).toFixed(2)} MB (saved ${((stats.size - newStats.size) / 1024 / 1024).toFixed(2)} MB)`);
        } else {
            fs.unlinkSync(tmpPath);
            totalNew += stats.size;
            console.log(`  -> kept original (compression not effective)`);
        }
    } catch (error) {
        console.error(`  Error: ${error.message}`);
        if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
        totalNew += stats.size;
    }
}

try { fs.rmdirSync(tmpDir); } catch (e) { }

console.log('--- DONE ---');
console.log(`Original: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
console.log(`New: ${(totalNew / 1024 / 1024).toFixed(2)} MB`);
console.log(`Saved: ${((totalOriginal - totalNew) / 1024 / 1024).toFixed(2)} MB`);
