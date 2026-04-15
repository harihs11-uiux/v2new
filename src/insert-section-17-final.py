#!/usr/bin/env python3

# Read the file
with open('/imports/Form-1621-8529.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the insertion point - right after line 1786 which contains "          </div>"
# and before line 1787 which contains "       </div>"
# We'll search for the unique pattern around the Statements section end

search_pattern = """          )}

          </div>
       </div>
       </ResizablePanel>"""

replacement = """          )}

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
       </ResizablePanel>"""

if search_pattern in content:
    content = content.replace(search_pattern, replacement)
    
    # Write back
    with open('/imports/Form-1621-8529.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("✅ Successfully added Section 17 (Supporting Documents)!")
else:
    print("❌ Could not find the insertion point. Pattern not found.")
    print("Searching for alternate pattern...")
    
    # Try a simpler pattern
    search_pattern2 = "       </div>\n       </ResizablePanel>\n       \n     </ResizablePanelGroup>"
    
    if search_pattern2 in content:
        # Find the last occurrence (should be the closing tags)
        last_index = content.rfind(search_pattern2)
        
        # Insert before this closing section
        section_to_insert = """
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
        
        # Insert right before "       </div>"
        insert_point = content.rfind("       </div>\n       </ResizablePanel>")
        if insert_point > 0:
            content = content[:insert_point] + section_to_insert + content[insert_point:]
            
            with open('/imports/Form-1621-8529.tsx', 'w', encoding='utf-8') as f:
                f.write(content)
            
            print("✅ Successfully added Section 17 (Supporting Documents) using alternate method!")
        else:
            print("❌ Could not find insertion point with alternate method either.")
    else:
        print("❌ Alternate pattern also not found.")
