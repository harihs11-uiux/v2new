const fs = require('fs');

// Read the entire file
const content = fs.readFileSync('/imports/Form-1621-8529.tsx', 'utf-8');

// Split by lines but preserve line endings
const lines = content.split('\n');

console.log(`Total lines before: ${lines.length}`);
console.log(`Line 1786: "${lines[1785]}"`);
console.log(`Line 1787: "${lines[1786]}"`);

// The section to insert (as an array of lines)
const newSection = [
  '',
  '          <div className="flex flex-col">',
  '           {/* Supporting Documents */}',
  '           <GridSectionHeader title="17. SUPPORTING DOCUMENTS" expanded={sections.supportingDocs} onToggle={() => toggleSection(\'supportingDocs\')} />',
  '          {sections.supportingDocs && (',
  '            <div className="w-full overflow-x-auto bg-white">',
  '                <SupportingDocumentsTable />',
  '            </div>',
  '          )}',
  '',
  '          </div>'
];

// Insert after line 1786 (index 1785)
// Line 1786 should be: "          </div>"
// Line 1787 should be: "       </div>"

// Insert the new lines at position 1786 (before line 1787)
lines.splice(1786, 0, ...newSection);

// Write back
const newContent = lines.join('\n');
fs.writeFileSync('/imports/Form-1621-8529.tsx', newContent, 'utf-8');

console.log(`✅ Section 17 added successfully!`);
console.log(`Total lines after: ${lines.length}`);
console.log(`New lines 1786-1798:`);
for (let i = 1785; i < 1798 && i < lines.length; i++) {
  console.log(`  ${i+1}: ${lines[i].substring(0, 60)}`);
}
