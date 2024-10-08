'use client';

import React, { ReactNode } from 'react';

interface AlternativeProps {
  alternativeLetter: string;
  isSelected?: boolean;
  children: ReactNode;
}

export function AlternativeWrapper({
  alternativeLetter,
  isSelected = false,
  children,
}: AlternativeProps) {
  return (
    <div className="flex flex-row items-center mt-5 cursor-pointer p-5 hover:bg-slate-200 dark:hover:bg-slate-800 opacity-90 rounded-3xl">
      <div
        className={`p-5 h-5 w-5 flex justify-center border-2 items-center rounded-full ${isSelected ? 'bg-blue-500 border-blue-500' : 'bg-none'}`}
      >
        <span
          className={`font-bold text-center uppercase ${isSelected ? 'text-white' : 'text-slate-300'}`}
        >
          {alternativeLetter}
        </span>
      </div>
      <div className="ml-5">{children}</div>
    </div>
  );
}
