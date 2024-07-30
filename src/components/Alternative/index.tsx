import React from 'react';

interface AlternativeLabelProps {
  label: string;
}

export function AlternativeLabel({ label }: AlternativeLabelProps) {
  return <p>{label}</p>;
}
