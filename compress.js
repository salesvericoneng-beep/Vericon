import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');

const getAllFiles = (dirPath, arrayOfFiles) => {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function (file) {
    if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
      arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        arrayOfFiles.push(path.join(dirPath, file));
      }
    }
  });
  return arrayOfFiles;
}

const images = getAllFiles(publicDir);

async function compressImages() {
  let savedBytes = 0;
  for (const imgPath of images) {
    const ext = path.extname(imgPath).toLowerCase();
    const tmpPath = imgPath + '.tmp';
    try {
      const originalStats = fs.statSync(imgPath);
      const originalSize = originalStats.size;

      // Only compress files larger than 100KB to save time and avoid quality loss on small files
      if (originalSize > 100 * 1024) {
        if (ext === '.png') {
          await sharp(imgPath).png({ quality: 80, compressionLevel: 8 }).toFile(tmpPath);
        } else {
          await sharp(imgPath).jpeg({ quality: 80, progressive: true }).toFile(tmpPath);
        }
        
        const newStats = fs.statSync(tmpPath);
        const newSize = newStats.size;
        
        if (newSize < originalSize) {
          fs.renameSync(tmpPath, imgPath);
          savedBytes += (originalSize - newSize);
          console.log(`Compressed ${path.basename(imgPath)} - Saved ${(originalSize - newSize) / 1024 | 0} KB`);
        } else {
          fs.unlinkSync(tmpPath);
        }
      }
    } catch (e) {
      console.error(`Failed to compress ${imgPath}:`, e.message);
      if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
    }
  }
  console.log(`\nFinished compression. Total saved space: ${(savedBytes / 1024 / 1024).toFixed(2)} MB`);
}

compressImages();
