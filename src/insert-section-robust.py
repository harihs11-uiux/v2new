#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import sys

# Read file
with open('/imports/Form-1621-8529.tsx', 'r', encoding='utf-8', newline='') as f:
    lines = f.readlines()

print(f"Total lines: {len(lines)}")
print(f"Line 1785: {repr(lines[1784])}")
print(f"Line 1786: {repr(lines[1785])}")
print(f"Line 1787: {repr(lines[1786])}")

# The new section to insert (with proper line endings)
new_section_lines = [
    '\n',
    '          <div className="flex flex-col">\n',
    '           {/* Supporting Documents */}\n',
    '           <GridSectionHeader title="17. SUPPORTING DOCUMENTS" expanded={sections.supportingDocs} onToggle={() => toggleSection(\'supportingDocs\')} />\n',
    '          {sections.supportingDocs && (\n',
    '            <div className="w-full overflow-x-auto bg-white">\n',
    '                <SupportingDocumentsTable />\n',
    '            </div>\n',
    '          )}\n',
    '\n',
    '          </div>\n'
]

# Insert after line 1786 (index 1785), which should be "          </div>\n"
# This means inserting at index 1786
lines[1786:1786] = new_section_lines

# Write back with same line endings
with open('/imports/Form-1621-8529.tsx', 'w', encoding='utf-8', newline='') as f:
    f.writelines(lines)

print(f"\n✅ Section 17 added successfully!")
print(f"Total lines now: {len(lines)}")
