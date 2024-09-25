import { usePathname, useSearchParams } from 'next/navigation';

import { Select, SelectItem, SelectSection } from '@nextui-org/react';

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
  isDisable?: boolean;
}

export function SelectSectionComponent({
  sections,
  placeholder,
  isDisable = false,
}: SelectSectionProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSelectOption = (options: string) => {
    const optionsFormatted = options.replaceAll(',', '%');
    const params = new URLSearchParams(searchParams.toString());
    if (optionsFormatted.length > 0) {
      params.set('subjects', optionsFormatted);
    } else {
      params.delete('subjects');
    }
    window.history.pushState(null, '', `${pathname}?${params.toString()}`);
  };

  const subjects = searchParams.get('subjects')?.split('%');

  return (
    <Select
      label={placeholder}
      className="max-w-xs"
      selectionMode="multiple"
      isDisabled={isDisable}
      selectedKeys={subjects ?? []}
      onChange={(el) => handleSelectOption(el.target.value)}
    >
      {sections.map((section) => (
        <SelectSection showDivider title={section.title} key={section.title}>
          {section.options.map((option) => (
            <SelectItem key={option.value}>{option.label}</SelectItem>
          ))}
        </SelectSection>
      ))}
    </Select>
  );
}
