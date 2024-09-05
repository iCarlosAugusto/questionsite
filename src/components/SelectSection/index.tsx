import { useState } from 'react';

import ClickOutside from '../ClickOutside';

interface Section {
  title: string;
  options: Option[];
}

interface Option {
  label: string;
  value: string;
}

interface SelectSectionProps {
  placeholder: string;
  sections: Section[];
  onChange: (selectedOptions: Option[]) => void;
}

export function SelectSection({ sections, onChange, placeholder }: SelectSectionProps) {
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
        label:
          sections.flatMap((section) => section.options).find((option) => option.value === val)
            ?.label || '',
      }));
      onChange(updatedOptions);
      return newSelectedOptions;
    });
  };

  return (
    <ClickOutside onClick={() => setOpen(false)} className="absolute">
      <div className="flex flex-col absolute">
        <div className="flex flex-col z-999999">
          <div
            className="bg-slate-300 p-3 w-40 rounded"
            onClick={() => {
              setOpen((oldState) => !oldState);
            }}
          >
            <span className="text-black">
              {selectedOptions.size === 0
                ? placeholder
                : selectedOptions.size.toString() + ' ' + placeholder}
            </span>
          </div>
        </div>
        {isOpen && (
          <div className="h-50 w-100 bg-slate-300 rounded flex flex-col overflow-y-scroll mt-2 ">
            {sections.map((section, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex items-center p-2">
                  <span className="font-bold text-black">{section.title}</span>
                </div>
                {section.options.map((option, key) => (
                  <div
                    key={key}
                    className="flex items-center hover:bg-slate-500 cursor-pointer p-2"
                    onClick={() => handleOptionChange(option.value)}
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
            ))}
          </div>
        )}
      </div>
    </ClickOutside>
  );
}
