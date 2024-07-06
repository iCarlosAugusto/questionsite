'use client';

import React from 'react';

interface AlternativeProps {
  alternativeLetter: string;
  label: string;
  isSelected?: boolean;
}

export function Alternative({
  alternativeLetter,
  label,
  isSelected = false,
}: AlternativeProps) {
  return (
    <div className="flex flex-row items-center mt-5 cursor-pointer">
      <div
        className={`p-5 h-5 w-5 flex justify-center border items-center rounded-full ${isSelected ? 'bg-blue-500 border-blue-500' : 'bg-none'}`}
      >
        <span
          className={`font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}
        >
          {alternativeLetter}
        </span>
      </div>
      <div className="ml-5">
        <p>{label}</p>
      </div>
    </div>
  );
}
