'use client';

import React, { ReactNode, useState } from 'react';

import { AlternativeEntity } from '@/entities/AlternativeEntity';
import useModal from '@/hooks/useModal';

import { AlternativeLabel } from '../Alternative';
import { AlternativeWrapper } from '../Alternative/AlternativeWrapper';
import ButtonComponent from '../Button';
import Modal from '../Modal';

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
  // eslint-disable-next-line prettier/prettier
  const [alternativeSelected, setAlternativeSelected] = useState<AlternativeEntity | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const { isOpen, openModal, closeModal } = useModal();

  const handleShowAnswer = () => {
    openModal();
    setShowAnswer(true);
  };

  const pickAlternative = (alternative: AlternativeEntity) => {
    setAlternativeSelected(alternative);
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8 mt-5 mb-5">
      <span>Q-{id} | AWS</span>
      <Modal isOpen={isOpen} closeModal={closeModal} />
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

      <div className="flex items-center mt-5">
        <ButtonComponent
          label="Confirmar"
          className="w-full sm:w-auto"
          disable={!alternativeSelected}
          onClick={handleShowAnswer}
        />
        {showAnswer && <span className="ml-5">Você respondeu</span>}
      </div>
    </div>
  );
}
