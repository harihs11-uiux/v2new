const fs = require('fs');

// Read the file
const content = fs.readFileSync('/imports/Form-1621-8529.tsx', 'utf8');
const lines = content.split('\n');

// The new section to insert (after line 1786, before the closing </div>)
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

// Insert after line 1786 (index 1785), which should be right after "          )}"
// The structure should be:
// 1784:          )}
// 1785: (blank line)
// 1786:          </div>
// INSERT HERE
// 1787:       </div>

// Insert at position 1786 (which pushes everything else down)
lines.splice(1786, 0, ...newSection);

// Write back
fs.writeFileSync('/imports/Form-1621-8529.tsx', lines.join('\n'), 'utf8');

console.log('✅ Successfully added Section 17 (Supporting Documents)!');
console.log(`   Inserted ${newSection.length} lines at position 1786`);
