'use client';

import React, { ReactNode } from 'react';

import ButtonComponent from '../Button';

interface QuestionWrapperProps {
  id: string;
  children: ReactNode;
}

export function QuestionWrapper({ id, children }: QuestionWrapperProps) {
  const showAnswer = () => {};

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8 mt-5 mb-5">
      <span>Q-{id} | AWS</span>
      {children}

      <ButtonComponent
        label="Confirmar"
        className="mt-5"
        onClick={showAnswer}
      />
    </div>
  );
}
