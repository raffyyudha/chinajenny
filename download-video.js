import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const url = "https://videos.pexels.com/video-files/3773487/3773487-hd_1280_720_25fps.mp4";
const dest = path.join(__dirname, 'public', 'hero-video.mp4');

console.log(`Downloading video from ${url} to ${dest}...`);

const file = fs.createWriteStream(dest);

https.get(url, (response) => {
    if (response.statusCode === 302 || response.statusCode === 301) {
        // Handle redirect
        https.get(response.headers.location, (redirectResponse) => {
            redirectResponse.pipe(file);
            file.on('finish', () => {
                file.close(() => {
                    console.log('Download completed successfully!');
                });
            });
        }).on('error', (err) => {
            console.error('Error on redirect:', err.message);
        });
    } else {
        response.pipe(file);
        file.on('finish', () => {
            file.close(() => {
                console.log('Download completed successfully!');
            });
        });
    }
}).on('error', (err) => {
    fs.unlink(dest, () => { });
    console.error('Error downloading video:', err.message);
});
