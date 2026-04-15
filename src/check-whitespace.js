const fs = require('fs');
const content = fs.readFileSync('/imports/Form-1621-8529.tsx', 'utf8');
const lines = content.split('\n');

// Check lines 1786-1794
for (let i = 1785; i < 1794; i++) {
  const line = lines[i];
  const escaped = JSON.stringify(line);
  console.log(`Line ${i+1}: ${escaped}`);
}
