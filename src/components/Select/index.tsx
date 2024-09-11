import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

import ClickOutside from '../ClickOutside';

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  placerholder: string;
  options: Option[] | undefined;
}

export function Select({ options, placerholder }: SelectProps) {
  const [isOpen, setOpen] = useState(false);
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleItemClick = (itemId: string) => {
    const currentDisciplines = searchParams.get('disciplines');
    const currentIds = currentDisciplines ? currentDisciplines.split('%') : [];

    const itemExists = currentIds.includes(String(itemId));

    const updatedIds = itemExists
      ? currentIds.filter((id) => id !== String(itemId))
      : [...currentIds, itemId];

    const params = new URLSearchParams(searchParams.toString());
    if (updatedIds.length > 0) {
      params.set('disciplines', updatedIds.join('%'));
    } else {
      params.delete('disciplines');
    }
    replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  const disciplines = searchParams.get('disciplines')?.split('%');

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
                  handleItemClick(option.value);
                }}
              >
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={disciplines?.includes(option.value) ?? false}
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
