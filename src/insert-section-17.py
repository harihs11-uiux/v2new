#!/usr/bin/env python3
"""
Script to insert Section 17 (Supporting Documents) into Form-1621-8529.tsx
"""

# Read the file
with open('/imports/Form-1621-8529.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# The section to insert (after line 1786 which is index 1785)
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

# Insert after line 1786 (index 1785, but insert BEFORE index 1786)
insert_index = 1786  # This will be BEFORE the line "</div>" at line 1787

lines.insert(insert_index, new_section)

# Write back
with open('/imports/Form-1621-8529.tsx', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("✅ Successfully inserted Section 17 (Supporting Documents)!")
print(f"   Inserted at line {insert_index + 1}")
