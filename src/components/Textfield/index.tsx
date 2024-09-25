import React, { ReactNode } from 'react';

import { Input } from '@nextui-org/react';

interface TextfieldProps {
  labelText?: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  name: string;
  textError?: string;
  icon?: ReactNode;
  className?: string;
}

export function Textfield({
  labelText,
  type,
  placeholder,
  name,
  textError,
  className,
}: TextfieldProps) {
  return (
    <Input
      type={type}
      label={labelText}
      variant="bordered"
      placeholder={placeholder}
      name={name}
      isInvalid={textError ? true : false}
      errorMessage={textError}
      className={className}
    />
  );
}
