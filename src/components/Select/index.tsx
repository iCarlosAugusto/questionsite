import { useState } from 'react';

import ClickOutside from '../ClickOutside';

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  placerholder: string;
  options: Option[] | undefined;
  onChange: (selectedOptions: Option[]) => void;
}

export function Select({ options, placerholder, onChange }: SelectProps) {
  const [isOpen, setOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Set<string>>(new Set());

  const handleOptionChange = (value: string) => {
    console.log('handleOptionChange');
    setSelectedOptions((prevSelectedOptions) => {
      const newSelectedOptions = new Set(prevSelectedOptions);
      if (newSelectedOptions.has(value)) {
        newSelectedOptions.delete(value);
      } else {
        newSelectedOptions.add(value);
      }
      const updatedOptions = Array.from(newSelectedOptions).map((val) => ({
        value: val,
        label: options?.find((option) => option.value === val)?.label || '',
      }));
      onChange(updatedOptions);
      return newSelectedOptions;
    });
  };

  return (
    <ClickOutside onClick={() => setOpen(false)}>
      <div className="absolute">
        <div
          className="bg-slate-400 p-3 w-40 cursor-pointer rounded"
          onClick={() => {
            if (!options) return;
            setOpen((prevState) => !prevState);
          }}
        >
          <span className="text-black">{placerholder}</span>
        </div>

        {isOpen && (
          <div className="h-50 w-100 bg-slate-400 flex flex-col overflow-y-scroll mt-2 rounded">
            {options?.map((option, key) => (
              <div
                key={key}
                className="flex items-center hover:bg-slate-500 cursor-pointer p-2"
                onClick={() => {
                  handleOptionChange(option.value);
                }}
              >
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedOptions.has(option.value)}
                />
                <span className="text-black"> {option.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </ClickOutside>
  );
}
