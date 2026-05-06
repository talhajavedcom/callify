const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDir = path.join(__dirname, 'public');

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const ext = path.extname(file);
      const webpPath = fullPath.replace(ext, '.webp');
      
      console.log(`Converting ${file} to ${path.basename(webpPath)}...`);
      await sharp(fullPath)
        .webp({ quality: 85, effort: 6 })
        .toFile(webpPath);
        
      console.log(`Successfully converted to WebP: ${webpPath}`);
      // Remove original file
      fs.unlinkSync(fullPath);
    }
  }
}

console.log(`Scanning public directory: ${targetDir}`);
processDirectory(targetDir).then(() => {
  console.log('✅ All public images converted to WebP and old PNGs removed!');
}).catch(console.error);
