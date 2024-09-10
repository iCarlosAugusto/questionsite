import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';

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
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleItemClick = (itemId: string) => {
    const currentDisciplines = searchParams.get('subjects');
    const currentIds = currentDisciplines ? currentDisciplines.split('%') : [];

    const itemExists = currentIds.includes(String(itemId));

    const updatedIds = itemExists
      ? currentIds.filter((id) => id !== String(itemId))
      : [...currentIds, itemId];

    const params = new URLSearchParams(searchParams.toString());
    if (updatedIds.length > 0) {
      params.set('subjects', updatedIds.join('%'));
    } else {
      params.delete('subjects');
    }
    replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  const subjects = searchParams.get('subjects')?.split('%');

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
            <span className="text-black">Disciplinas</span>
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
                    onClick={() => handleItemClick(option.value)}
                  >
                    <input
                      type="checkbox"
                      className="mr-2"
                      onChange={() => {}}
                      checked={subjects?.includes(option.value) ?? false}
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
