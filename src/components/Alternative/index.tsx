import React from 'react';

interface AlternativeLabelProps {
  label: string;
}

export function AlternativeLabel({ label }: AlternativeLabelProps) {
  console.log('Alternative Label');
  return <p>{label}</p>;
}
