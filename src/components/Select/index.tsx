import { useState } from 'react';

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  options: Option[];
  onChange: (selectedOptions: Option[]) => void;
}

export function Select({ options, onChange }: SelectProps) {
  const [isOpen, setOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Set<string>>(new Set());

  const handleOptionChange = (value: string) => {
    setSelectedOptions((prevSelectedOptions) => {
      const newSelectedOptions = new Set(prevSelectedOptions);
      if (newSelectedOptions.has(value)) {
        newSelectedOptions.delete(value);
      } else {
        newSelectedOptions.add(value);
      }
      const updatedOptions = Array.from(newSelectedOptions).map((val) => ({
        value: val,
        label: options.find((option) => option.value === val)?.label || '',
      }));
      onChange(updatedOptions);
      return newSelectedOptions;
    });
  };

  return (
    <div className="relative z-50">
      <div
        className="bg-slate-400 p-3 w-40 cursor-pointer"
        onClick={() => {
          setOpen((prevState) => !prevState);
        }}
      >
        Select
      </div>

      {isOpen && (
        <div className="h-50 w-100 p-2 bg-red flex flex-col overflow-y-scroll mt-2">
          {options.map((option, key) => (
            <div key={key} className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedOptions.has(option.value)}
                onChange={() => handleOptionChange(option.value)}
              />
              <p>{option.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
