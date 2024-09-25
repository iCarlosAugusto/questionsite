'use client';

import React from 'react';

import { Button } from '@nextui-org/react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disable?: boolean;
  type?: 'button' | 'submit';
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
    <Button
      disabled={disable}
      type={type}
      onClick={() => (disable == true ? null : onClick?.())}
      className={className}
    >
      {label}
    </Button>
  );
}
