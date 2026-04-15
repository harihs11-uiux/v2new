const fs = require('fs');

const filepath = '/imports/Form-1621-8529.tsx';
let content = fs.readFileSync(filepath, 'utf8');

// Find the exact position to insert - after Section 16 (Statements) closes
// Looking for the pattern just before the closing tags

const searchMarker = `          )}

          </div>
       </div>
       </ResizablePanel>`;

const newSection = `          )}

          </div>

          <div className="flex flex-col">
           {/* Supporting Documents */}
           <GridSectionHeader title="17. SUPPORTING DOCUMENTS" expanded={sections.supportingDocs} onToggle={() => toggleSection('supportingDocs')} />
          {sections.supportingDocs && (
            <div className="w-full overflow-x-auto bg-white">
                <SupportingDocumentsTable />
            </div>
          )}

          </div>
       </div>
       </ResizablePanel>`;

// Find last occurrence (should be at the end of the right column)
const lastIndex = content.lastIndexOf(searchMarker);

if (lastIndex !== -1) {
    content = content.substring(0, lastIndex) + newSection + content.substring(lastIndex + searchMarker.length);
    fs.writeFileSync(filepath, content, 'utf8');
    console.log('✅ Successfully added Section 17!');
    console.log(`   Inserted at position: ${lastIndex}`);
} else {
    console.log('❌ Could not find insertion point');
    console.log('Trying alternative search...');
    
    // Try finding just before </ResizablePanel>
    const lines = content.split('\n');
    let insertIndex = -1;
    
    // Find the line with "       </ResizablePanel>" that comes after "16. STATEMENTS"
    for (let i = lines.length - 1; i >= 0; i--) {
        if (lines[i].trim() === '</ResizablePanel>') {
            // Found a ResizablePanel close, check if it's the right one
            // It should have "          </div>" a few lines before
            let foundDiv = false;
            for (let j = i - 1; j >= Math.max(0, i - 5); j--) {
                if (lines[j].trim() === '</div>' && lines[j].startsWith('          </div>')) {
                    foundDiv = true;
                    insertIndex = i;
                    break;
                }
            }
            if (foundDiv) break;
        }
    }
    
    if (insertIndex > 0) {
        const sectionLines = [
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
        
        // Insert before the closing tags
        // Find the right place: after "          </div>" and before "       </div>"
        for (let i = insertIndex - 1; i >= 0; i--) {
            if (lines[i].trim() === '</div>' && lines[i].startsWith('          </div>')) {
                lines.splice(i + 1, 0, ...sectionLines);
                break;
            }
        }
        
        fs.writeFileSync(filepath, lines.join('\n'), 'utf8');
        console.log('✅ Successfully added Section 17 using line-by-line method!');
    } else {
        console.log('❌ Could not find insertion point with alternative method either');
    }
}
