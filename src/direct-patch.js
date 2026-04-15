const fs = require('fs');

// Read entire file
const content = fs.readFileSync('/imports/Form-1621-8529.tsx', 'utf8');
const lines = content.split('\n');

console.log(`File has ${lines.length} lines`);

// We want to insert after line 1786: "          </div>"
// and before line 1787: "       </div>"

const sectionToAdd = [
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

// Insert at position 1786 (after line 1786, which is index 1785)
lines.splice(1786, 0, ...sectionToAdd);

// Write back
fs.writeFileSync('/imports/Form-1621-8529.tsx', lines.join('\n'), 'utf8');

console.log(`✅ Done! File now has ${lines.length} lines`);
console.log(`Lines around insertion:`);
for (let i = 1784; i < 1800 && i < lines.length; i++) {
  console.log(`${String(i + 1).padStart(4)}: ${lines[i].substring(0, 70)}`);
}
