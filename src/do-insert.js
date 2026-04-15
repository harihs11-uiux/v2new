const fs = require('fs');

const filePath = '/imports/Form-1621-8529.tsx';
const content = fs.readFileSync(filePath, 'utf-8');
const lines = content.split('\n');

const newLines = [
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

// Insert after line 1786 (which is index 1785 in 0-based array)
// Line 1786 contains: "          </div>"
// We want to insert before line 1787 which contains: "       </div>"

lines.splice(1786, 0, ...newLines);

fs.writeFileSync(filePath, lines.join('\n'), 'utf-8');

console.log('✅ Section 17 added successfully!');
console.log(`   File now has ${lines.length} lines (was 1794)`);
