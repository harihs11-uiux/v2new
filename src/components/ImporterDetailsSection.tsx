import React from 'react';
import EnhancedAutocompleteInput from './EnhancedAutocompleteInput';
import MasterSelection from '../imports/MasterSelection';

interface CustomInputProps {
  fieldId: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  style?: React.CSSProperties;
  isHighlighted?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
}

const CustomInput = ({ fieldId, value, onChange, placeholder, style, isHighlighted, onFocus, onBlur }: CustomInputProps) => {
  return (
    <input
      data-field-id={fieldId}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      placeholder={placeholder}
      className="text-[#050E25] text-[14px] px-2 py-1.5 outline-none focus:outline-none h-full w-full rounded-none bg-white"
      style={{
        ...style,
        borderTop: isHighlighted ? '1px solid #3874FF' : (style?.borderTop || '1px solid #D0D5E3'),
        borderBottom: isHighlighted ? '1px solid #3874FF' : 'none',
        borderRight: isHighlighted ? '1px solid #3874FF' : 'none',
        transition: 'all 0.2s ease'
      }}
    />
  );
};

interface CustomTextareaProps {
  fieldId: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  isHighlighted?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
}

const CustomTextarea = ({ fieldId, value, onChange, placeholder, isHighlighted, onFocus, onBlur }: CustomTextareaProps) => {
  return (
    <textarea
      data-field-id={fieldId}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      placeholder={placeholder}
      className="text-[#050E25] text-[14px] px-2 py-2 outline-none focus:outline-none w-full rounded-none h-[60px] resize-none bg-white"
      style={{
        borderTop: isHighlighted ? '1px solid #3874FF' : '1px solid #D0D5E3',
        borderBottom: isHighlighted ? '1px solid #3874FF' : 'none',
        borderRight: isHighlighted ? '1px solid #3874FF' : 'none',
        transition: 'all 0.2s ease'
      }}
    />
  );
};

interface ImporterDetailsSectionProps {
  formData: {
    importerName: string;
    iecPan: string;
    idBranch: string;
    importerAddress: string;
    importerCityPin: string;
    importerStateCountry: string;
    typeAdCode: string;
  };
  updateFormData: (field: string, value: any) => void;
  hoveredLabels: Set<string>;
  handleFieldHover?: (fieldId: string, isHovered: boolean) => void;
}

export default function ImporterDetailsSection({
  formData,
  updateFormData,
  hoveredLabels,
  handleFieldHover
}: ImporterDetailsSectionProps) {
  const [focusedField, setFocusedField] = React.useState<string | null>(null);
  
  const handleImporterSelect = (importer: { name: string; iec: string; id: string }) => {
    updateFormData('importerName', importer.name);
    updateFormData('iecPan', importer.iec);
    const branch = formData.idBranch.split('|')[1] || '0';
    updateFormData('idBranch', `${importer.id}|${branch}`);
  };

  const handleFocus = (fieldId: string) => {
    setFocusedField(fieldId);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const labelStyle = (fieldId: string) => {
    let isHighlighted = hoveredLabels.has(fieldId) || focusedField === fieldId;
    
    // Check children focus for grouped fields
    if (!isHighlighted) {
      if (fieldId === 'importer-iec-pan' && (focusedField === 'importer-iec' || focusedField === 'importer-pan')) isHighlighted = true;
      else if (fieldId === 'importer-id-branch' && (focusedField === 'importer-id' || focusedField === 'importer-branch')) isHighlighted = true;
      else if (fieldId === 'importer-city-pin' && (focusedField === 'importer-city' || focusedField === 'importer-pincode')) isHighlighted = true;
      else if (fieldId === 'importer-state-country' && (focusedField === 'importer-state' || focusedField === 'importer-country')) isHighlighted = true;
      else if (fieldId === 'importer-type-adcode' && (focusedField === 'importer-type' || focusedField === 'importer-adcode')) isHighlighted = true;
    }

    return {
      width: '150px',
      height: '30px',
      backgroundColor: isHighlighted ? '#CEF6F0' : '#F3F5FA',
      borderTop: isHighlighted ? '1px solid #02B196' : '1px solid #D0D5E3',
      borderRight: isHighlighted ? '1px solid #02B196' : '1px solid #D0D5E3',
      borderLeft: isHighlighted ? '1px solid #02B196' : '1px solid #D0D5E3',
      borderBottom: isHighlighted ? '1px solid #02B196' : 'none',
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      fontSize: '14px',
      fontWeight: '600',
      color: '#050e25',
      flexShrink: 0,
      transition: 'all 0.2s ease'
    };
  };

  const getIsHighlighted = (groupId: string, fieldId: string) => {
    return hoveredLabels.has(groupId) || focusedField === fieldId;
  };

  return (
    <div className="bg-white overflow-visible">
      {/* Row 1 */}
      <div className="flex border-b border-[#d0d5e3] overflow-visible">
        <div 
          className="flex w-1/2 border-r border-[#d0d5e3] h-[30px] overflow-visible"
          onMouseEnter={() => handleFieldHover?.('importer-name', true)}
          onMouseLeave={() => handleFieldHover?.('importer-name', false)}
        >
          <div style={labelStyle('importer-name')}>
            <span>Name</span>
            <div className="w-[18px] h-[18px] ml-2">
              <MasterSelection />
            </div>
          </div>
          <div className="flex-1 relative z-50">
            <EnhancedAutocompleteInput
              fieldId="importer-name"
              value={formData.importerName}
              onChange={(e) => updateFormData('importerName', e.target.value)}
              placeholder="Enter name"
              onSelectImporter={handleImporterSelect}
              displayField="name"
              onFocus={() => handleFocus('importer-name')}
              onBlur={handleBlur}
              isHighlighted={getIsHighlighted('importer-name', 'importer-name')}
            />
          </div>
        </div>
        <div 
          className="flex w-1/2 h-[30px] overflow-visible"
          onMouseEnter={() => handleFieldHover?.('importer-iec-pan', true)}
          onMouseLeave={() => handleFieldHover?.('importer-iec-pan', false)}
        >
          <div style={labelStyle('importer-iec-pan')}>IEC/PAN</div>
          <div className="flex flex-1 overflow-visible">
            <div className="flex-1 border-r border-[#d0d5e3] relative z-40">
              <EnhancedAutocompleteInput
                fieldId="importer-iec"
                value={formData.iecPan}
                onChange={(e) => updateFormData('iecPan', e.target.value)}
                placeholder="IEC"
                onSelectImporter={handleImporterSelect}
                displayField="iec"
                onFocus={() => handleFocus('importer-iec')}
                onBlur={handleBlur}
                isHighlighted={getIsHighlighted('importer-iec-pan', 'importer-iec')}
              />
            </div>
            <div className="flex-1">
              <CustomInput
                fieldId="importer-pan"
                value={formData.iecPan}
                onChange={() => {}}
                placeholder="PAN"
                onFocus={() => handleFocus('importer-pan')}
                onBlur={handleBlur}
                isHighlighted={getIsHighlighted('importer-iec-pan', 'importer-pan')}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex border-b border-[#d0d5e3] overflow-visible">
        <div 
          className="flex w-1/2 border-r border-[#d0d5e3] h-[30px] overflow-visible"
          onMouseEnter={() => handleFieldHover?.('importer-id-branch', true)}
          onMouseLeave={() => handleFieldHover?.('importer-id-branch', false)}
        >
          <div style={labelStyle('importer-id-branch')}>ID & Branch</div>
          <div className="flex flex-1 overflow-visible">
            <div className="flex-1 border-r border-[#d0d5e3] relative z-30">
              <EnhancedAutocompleteInput
                fieldId="importer-id"
                value={formData.idBranch.split('|')[0]}
                onChange={(e) => updateFormData('idBranch', `${e.target.value}|${formData.idBranch.split('|')[1]}`)}
                placeholder="ID"
                onSelectImporter={handleImporterSelect}
                displayField="id"
                onFocus={() => handleFocus('importer-id')}
                onBlur={handleBlur}
                isHighlighted={getIsHighlighted('importer-id-branch', 'importer-id')}
              />
            </div>
            <div className="w-[100px]">
              <CustomInput
                fieldId="importer-branch"
                value={formData.idBranch.split('|')[1]}
                onChange={(e) => updateFormData('idBranch', `${formData.idBranch.split('|')[0]}|${e.target.value}`)}
                placeholder="Branch"
                onFocus={() => handleFocus('importer-branch')}
                onBlur={handleBlur}
                isHighlighted={getIsHighlighted('importer-id-branch', 'importer-branch')}
              />
            </div>
          </div>
        </div>
        <div 
          className="flex w-1/2 h-[30px]"
          onMouseEnter={() => handleFieldHover?.('importer-city-pin', true)}
          onMouseLeave={() => handleFieldHover?.('importer-city-pin', false)}
        >
          <div style={labelStyle('importer-city-pin')}>City & Pin</div>
          <div className="flex flex-1">
            <div className="flex-1 border-r border-[#d0d5e3]">
              <CustomInput
                fieldId="importer-city"
                value={formData.importerCityPin.split('|')[0]}
                onChange={(e) => updateFormData('importerCityPin', `${e.target.value}|${formData.importerCityPin.split('|')[1]}`)}
                placeholder="City"
                onFocus={() => handleFocus('importer-city')}
                onBlur={handleBlur}
                isHighlighted={getIsHighlighted('importer-city-pin', 'importer-city')}
              />
            </div>
            <div className="flex-1">
              <CustomInput
                fieldId="importer-pincode"
                value={formData.importerCityPin.split('|')[1]}
                onChange={(e) => updateFormData('importerCityPin', `${formData.importerCityPin.split('|')[0]}|${e.target.value}`)}
                placeholder="Pin"
                onFocus={() => handleFocus('importer-pincode')}
                onBlur={handleBlur}
                isHighlighted={getIsHighlighted('importer-city-pin', 'importer-pincode')}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex border-b border-[#d0d5e3]" style={{ height: '60px' }}>
        <div 
          className="flex items-start w-1/2 border-r border-[#d0d5e3] h-full"
          onMouseEnter={() => handleFieldHover?.('importer-address', true)}
          onMouseLeave={() => handleFieldHover?.('importer-address', false)}
        >
          <div style={{ ...labelStyle('importer-address'), height: '60px' }}>Address</div>
          <div className="flex-1">
            <CustomTextarea
              fieldId="importer-address"
              value={formData.importerAddress}
              onChange={(e) => updateFormData('importerAddress', e.target.value)}
              placeholder="Enter Address"
              onFocus={() => handleFocus('importer-address')}
              onBlur={handleBlur}
              isHighlighted={getIsHighlighted('importer-address', 'importer-address')}
            />
          </div>
        </div>
        <div className="flex flex-col w-1/2 h-full">
          <div 
            className="flex h-[30px] border-b border-[#d0d5e3]"
            onMouseEnter={() => handleFieldHover?.('importer-state-country', true)}
            onMouseLeave={() => handleFieldHover?.('importer-state-country', false)}
          >
            <div style={labelStyle('importer-state-country')}>St. & Ctry.</div>
            <div className="flex flex-1">
              <div className="flex-1 border-r border-[#d0d5e3]">
                <CustomInput
                  fieldId="importer-state"
                  value={formData.importerStateCountry.split('|')[0]}
                  onChange={(e) => updateFormData('importerStateCountry', `${e.target.value}|${formData.importerStateCountry.split('|')[1]}`)}
                  placeholder="State"
                  style={{ borderTop: 'none' }}
                  onFocus={() => handleFocus('importer-state')}
                  onBlur={handleBlur}
                  isHighlighted={getIsHighlighted('importer-state-country', 'importer-state')}
                />
              </div>
              <div className="flex-1">
                <CustomInput
                  fieldId="importer-country"
                  value={formData.importerStateCountry.split('|')[1]}
                  onChange={(e) => updateFormData('importerStateCountry', `${formData.importerStateCountry.split('|')[0]}|${e.target.value}`)}
                  placeholder="Country"
                  style={{ borderTop: 'none' }}
                  onFocus={() => handleFocus('importer-country')}
                  onBlur={handleBlur}
                  isHighlighted={getIsHighlighted('importer-state-country', 'importer-country')}
                />
              </div>
            </div>
          </div>
          <div 
            className="flex h-[30px]"
            onMouseEnter={() => handleFieldHover?.('importer-type-adcode', true)}
            onMouseLeave={() => handleFieldHover?.('importer-type-adcode', false)}
          >
            <div style={labelStyle('importer-type-adcode')}>Type/ AD Code</div>
            <div className="flex flex-1">
              <div className="flex-1 border-r border-[#d0d5e3]">
                <CustomInput
                  fieldId="importer-type"
                  value={formData.typeAdCode.split('|')[0]}
                  onChange={(e) => updateFormData('typeAdCode', `${e.target.value}|${formData.typeAdCode.split('|')[1]}`)}
                  placeholder="Type"
                  style={{ borderTop: 'none' }}
                  onFocus={() => handleFocus('importer-type')}
                  onBlur={handleBlur}
                  isHighlighted={getIsHighlighted('importer-type-adcode', 'importer-type')}
                />
              </div>
              <div className="flex-1">
                <CustomInput
                  fieldId="importer-adcode"
                  value={formData.typeAdCode.split('|')[1]}
                  onChange={(e) => updateFormData('typeAdCode', `${formData.typeAdCode.split('|')[0]}|${e.target.value}`)}
                  placeholder="AD Code"
                  style={{ borderTop: 'none' }}
                  onFocus={() => handleFocus('importer-adcode')}
                  onBlur={handleBlur}
                  isHighlighted={getIsHighlighted('importer-type-adcode', 'importer-adcode')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
