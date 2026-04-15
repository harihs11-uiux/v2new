#!/usr/bin/env python3
import sys

# Read file
with open('/imports/Form-1621-8529.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# New section to add
new_section = """
          <div className="flex flex-col">
           {/* Supporting Documents */}
           <GridSectionHeader title="17. SUPPORTING DOCUMENTS" expanded={sections.supportingDocs} onToggle={() => toggleSection('supportingDocs')} />
          {sections.supportingDocs && (
            <div className="w-full overflow-x-auto bg-white">
                <SupportingDocumentsTable />
            </div>
          )}

          </div>
"""

# Insert after line 1786 (index 1785)
# Line 1786 is:          </div>
# We want to insert the new section AFTER this line, BEFORE line 1787 which is:       </div>

lines.insert(1786, new_section)

# Write back
with open('/imports/Form-1621-8529.tsx', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("✅ Section 17 (Supporting Documents) successfully added!")
print(f"   Total lines now: {len(lines)}")
