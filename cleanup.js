import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');
const srcDir = path.join(__dirname, 'src');

// Find all image files in public
const getAllFiles = (dirPath, arrayOfFiles) => {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp', '.svg'].includes(ext)) {
        arrayOfFiles.push(path.join(dirPath, file));
      }
    }
  });
  return arrayOfFiles;
}

const allPublicImages = getAllFiles(publicDir);

// Read all JSX files and extract image paths
let allSrcText = '';
const readSrcFiles = (dirPath) => {
  const files = fs.readdirSync(dirPath);
  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      readSrcFiles(dirPath + "/" + file);
    } else {
      if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.html')) {
        allSrcText += fs.readFileSync(path.join(dirPath, file), 'utf8') + '\n';
      }
    }
  });
};
readSrcFiles(srcDir);
// Also read index.html in root
allSrcText += fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8') + '\n';

let deletedCount = 0;
let keptCount = 0;

for (const imgPath of allPublicImages) {
  // Get relative path from public to image
  let relPath = path.relative(publicDir, imgPath).replace(/\\/g, '/');
  
  // Also check just the filename
  const filename = path.basename(imgPath);
  
  // If the file is literally referenced in the text (simple check)
  // Usually it's /filename or /images/...
  if (allSrcText.includes(relPath) || allSrcText.includes(`/${relPath}`) || allSrcText.includes(filename)) {
    console.log(`[KEPT] ${relPath}`);
    keptCount++;
  } else {
    console.log(`[DELETED] ${relPath}`);
    fs.unlinkSync(imgPath);
    deletedCount++;
  }
}

console.log(`Done. Deleted: ${deletedCount}, Kept: ${keptCount}`);
