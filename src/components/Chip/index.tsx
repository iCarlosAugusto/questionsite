import React from 'react';

import { Chip } from '@nextui-org/react';

interface ChipProps {
  label: string;
  isSeleced?: boolean;
  onClick?: () => void;
}

export default function ChipComponent({
  label,
  isSeleced = false,
  onClick,
}: ChipProps) {
  return (
    <Chip
      className="mx-1 cursor-pointer"
      onClick={onClick}
      color={isSeleced ? 'primary' : 'default'}
    >
      {label}
    </Chip>
  );
}
