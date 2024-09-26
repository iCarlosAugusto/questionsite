import React from 'react';

interface ChipProps {
  label: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export function Chip({ label, isSelected = false, onClick }: ChipProps) {
  return (
    <div
      className={`rounded-3xl px-3 py-2 inline cursor-pointer 
      ${isSelected ? 'bg-blue-500' : 'bg-slate-200 dark:bg-slate-800'}`}
      onClick={onClick}
    >
      <span>{label}</span>
    </div>
  );
}
