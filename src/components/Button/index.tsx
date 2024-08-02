'use client';

import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disable?: boolean;
  type: 'button' | 'submit';
  className?: string;
}

export default function ButtonComponent({
  label,
  className,
  disable = false,
  type = 'button',
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`flex flex-wrap gap-5 xl:gap-20 ${className} ${disable ? 'opacity-50' : 'opacity-100'} ${className} inline-flex items-center justify-center rounded-md bg-meta-3 px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10`}
      disabled={disable}
      type={type}
      onClick={() => (disable == true ? null : onClick?.())}
    >
      {label}
    </button>
  );
}
