"agus"
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const directory = './public/portofolio';

fs.readdir(directory, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    files.forEach((file) => {
        // Check if file is an image (png, jpg, jpeg)
        if (file.match(/\.(png|jpg|jpeg)$/i)) {
            const filePath = path.join(directory, file);
            const outputName = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');
            const outputPath = path.join(directory, outputName);

            // Convert
            sharp(filePath)
                .webp({ quality: 80, effort: 6 }) // High compression effort
                .toFile(outputPath)
                .then(info => {
                    console.log(`Converted ${file} to ${outputName} (${info.size} bytes)`);
                    // Optional: Remove original if strictly required, but I'll keeping them for now until confirmed safe
                    // fs.unlinkSync(filePath); 
                })
                .catch(err => {
                    console.error(`Error converting ${file}:`, err);
                });
        }
    });
});
