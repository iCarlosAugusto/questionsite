import { useState } from 'react';

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
    <div className="flex flex-col relative">
      {/* <ClickOutside onClick={() => setOpen((oldState) => !oldState)} className="absolute"> */}
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
        <div className="h-50 w-100 p-2 bg-slate-300 rounded flex flex-col overflow-y-scroll mt-2 ">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-center mb-2">
                <span className="font-bold text-black">{section.title}</span>
              </div>
              {section.options.map((option, key) => (
                <div key={key} className="flex">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={selectedOptions.has(option.value)}
                    onChange={() => handleOptionChange(option.value)}
                  />
                  <span className="text-black">{option.label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* </ClickOutside> */}
    </div>
  );
}
