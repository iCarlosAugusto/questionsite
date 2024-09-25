import { usePathname, useSearchParams } from 'next/navigation';

import { Select, SelectItem } from '@nextui-org/react';

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  placerholder: string;
  options: Option[];
}

export function SelectComponent({ options, placerholder }: SelectProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSelectOption = (options: string) => {
    const optionsFormatted = options.replaceAll(',', '%');
    const params = new URLSearchParams(searchParams.toString());
    if (optionsFormatted.length > 0) {
      params.set('disciplines', optionsFormatted);
    } else {
      params.delete('disciplines');
    }
    window.history.pushState(null, '', `${pathname}?${params.toString()}`);
  };

  const disciplinesSelected = searchParams.get('disciplines')?.split('%');

  return (
    <>
      <Select
        label={placerholder}
        selectionMode="multiple"
        selectedKeys={disciplinesSelected ?? []}
        className="max-w-xs"
        onChange={(el) => handleSelectOption(el.target.value)}
      >
        {options.map((el, index) => (
          <SelectItem key={index}>{el.label}</SelectItem>
        ))}
      </Select>
    </>
  );
}
