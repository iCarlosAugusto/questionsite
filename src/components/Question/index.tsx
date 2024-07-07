import React from 'react';

interface QuestionLabelProps {
  label: string;
}

export default function QuestionLabel({ label }: QuestionLabelProps) {
  console.log('Question Label');
  return (
    <>
      <p>{label}</p>
    </>
  );
}
