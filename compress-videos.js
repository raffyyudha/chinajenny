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

const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.mp4'));
let totalStartedSize = 0;
let totalProcessedSize = 0;

console.log(`Found ${files.length} mp4 files in ${targetDir}`);

for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const inputPath = path.join(targetDir, file);
    const tmpPath = path.join(tmpDir, file);

    const stats = fs.statSync(inputPath);
    totalStartedSize += stats.size;

    console.log(`Processing [${i + 1}/${files.length}] ${file} ... (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);

    try {
        // Compress video, skip audio encoding (copy audio)
        // -crf 32 with fast preset gives decent compression and speed
        execSync(`ffmpeg -y -i "${inputPath}" -vcodec libx264 -crf 32 -preset fast -c:a copy "${tmpPath}"`, { stdio: 'pipe' });

        // Check if compression actually made it smaller, if yes, overwrite original
        const newStats = fs.statSync(tmpPath);
        if (newStats.size < stats.size) {
            fs.renameSync(tmpPath, inputPath);
            totalProcessedSize += newStats.size;
        } else {
            // If it's bigger or same (unlikely, but possible), keep original
            fs.unlinkSync(tmpPath);
            totalProcessedSize += stats.size;
        }
    } catch (error) {
        console.error(`Error processing ${file}: ${error.message}`);
        totalProcessedSize += stats.size;
    }
}

fs.rmdirSync(tmpDir);

console.log('--- COMPRESSION COMPLETE ---');
console.log(`Original total size: ${(totalStartedSize / 1024 / 1024).toFixed(2)} MB`);
console.log(`New total size: ${(totalProcessedSize / 1024 / 1024).toFixed(2)} MB`);
