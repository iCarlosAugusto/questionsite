'use client';

import React, { ReactNode, useState } from 'react';

import { AlternativeEntity } from '@/entities/AlternativeEntity';

import { AlternativeLabel } from '../Alternative';
import { AlternativeWrapper } from '../Alternative/AlternativeWrapper';
import ButtonComponent from '../Button';

interface QuestionWrapperProps {
  id: string;
  alternatives: AlternativeEntity[];
  children: ReactNode;
}

export function QuestionWrapper({
  id,
  alternatives,
  children,
}: QuestionWrapperProps) {
  const [alternativeSelected, setAlternativeSelected] =
    useState<AlternativeEntity | null>(null);
  const showAnswer = () => {
    console.log('SHOW ANSER');
  };

  const pickAlternative = (alternative: AlternativeEntity) => {
    setAlternativeSelected(alternative);
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8 mt-5 mb-5">
      <span>Q-{id} | AWS</span>
      {children}
      {alternatives.map((currentAlternative, index) => (
        <div onClick={() => pickAlternative(currentAlternative)} key={index}>
          <AlternativeWrapper
            {...currentAlternative}
            isSelected={currentAlternative.id === alternativeSelected?.id}
            alternativeLetter="A"
          >
            <AlternativeLabel label={currentAlternative.textAlternative} />
          </AlternativeWrapper>
        </div>
      ))}

      <ButtonComponent
        label="Confirmar"
        className="mt-5"
        disable={!alternativeSelected}
        onClick={showAnswer}
      />
    </div>
  );
}
