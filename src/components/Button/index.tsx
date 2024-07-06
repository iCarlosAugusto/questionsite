import React from 'react'
import { Button as NextUIButton } from '@nextui-org/react'

interface ButtonProps {
    label: string;
    onClick?: () => void;
    className?: string;
}

export default function ButtonComponent({ label, className, onClick }: ButtonProps) {
  return (
    <NextUIButton onClick={onClick} className={`w-full md:w-min ${className}`}>
      { label }
    </NextUIButton>
  )
}
