import React from 'react';

interface QuestionLabelProps {
  label: string;
}

export default function QuestionLabel({ label }: QuestionLabelProps) {
  return (
    <>
      <p>{label}</p>
    </>
  );
}
