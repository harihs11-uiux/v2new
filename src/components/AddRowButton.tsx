import Button from '../imports/Button';

interface AddRowButtonProps {
  onAddRow: () => void;
}

export default function AddRowButton({ onAddRow }: AddRowButtonProps) {
  return (
    <div 
      className="flex items-center justify-center bg-white cursor-pointer hover:bg-gray-50 transition-colors"
      onClick={onAddRow}
      style={{
        width: '66px',
        height: '36px'
      }}
    >
      <div className="w-[60px] h-[26px]">
        <Button />
      </div>
    </div>
  );
}