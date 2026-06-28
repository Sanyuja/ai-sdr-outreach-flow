const sharp = require('sharp');
const path = require('path');

const svgPath = path.join(__dirname, 'ARCHITECTURE_DIAGRAM.svg');
const pngPath = path.join(__dirname, 'ARCHITECTURE_DIAGRAM.png');

console.log('Converting:', svgPath);
console.log('Output:', pngPath);

sharp(svgPath, { density: 150 })
  .png({ quality: 95 })
  .toFile(pngPath)
  .then(info => {
    console.log('✓ PNG created');
    console.log('Size:', info.width + 'x' + info.height);
    console.log('File:', pngPath);
  })
  .catch(err => {
    console.error('Error:', err.message);
    process.exit(1);
  });
