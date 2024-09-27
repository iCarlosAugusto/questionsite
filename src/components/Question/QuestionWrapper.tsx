'use client';

import React, { ReactNode, useState } from 'react';

import { AlternativeEntity } from '@/entities/AlternativeEntity';
import { QuestionEntity } from '@/entities/QuestionEntity';
import { axiosReq } from '@/http/axios_helper';
import { useDisclosure } from '@nextui-org/react';

import { AlternativeLabel } from '../Alternative';
import { AlternativeWrapper } from '../Alternative/AlternativeWrapper';
import ButtonComponent from '../Button';
import { ModalAuth } from '../ModalAuth';

interface QuestionWrapperProps {
  question: QuestionEntity;
  children: ReactNode;
}

interface QuestionRepliedStatus {
  correctAlternativeId: string;
  replyCorrect: boolean;
}

export function QuestionWrapper({ question, children }: QuestionWrapperProps) {
  const [alternativeSelected, setAlternativeSelected] = useState<AlternativeEntity | null>(null);
  const [questionRepliedStatus, setQuestionRepliedStatus] = useState<QuestionRepliedStatus>();
  const [isLoadingValidation, setLoadingValidation] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  //const { isOpen, closeModal } = useModal();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { id, alternatives, discipline, subject } = question;

  const handleValidateAnswer = async () => {
    setLoadingValidation(true);
    try {
      const { data } = await axiosReq.post<QuestionRepliedStatus>(`/question/${id}/validateReply`, {
        alternativeId: alternativeSelected?.id,
      });
      setQuestionRepliedStatus(data);
      setShowAnswer(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingValidation(false);
    }
  };

  const handleShowAnswer = () => {
    onOpen();
    handleValidateAnswer();
    //setShowAnswer(true);
  };

  const pickAlternative = (alternative: AlternativeEntity) => {
    setAlternativeSelected(alternative);
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8 mt-5 mb-5">
      <span className="font-bold">
        {discipline.name} - {subject.name}
      </span>
      <ModalAuth isOpen={isOpen} onOpenChange={onOpenChange} />
      {children}
      {alternatives.map((currentAlternative, index) => (
        <div onClick={() => pickAlternative(currentAlternative)} key={index}>
          <AlternativeWrapper
            {...currentAlternative}
            isSelected={currentAlternative.id === alternativeSelected?.id}
            alternativeLetter={currentAlternative.alternativeLetter}
          >
            <AlternativeLabel label={currentAlternative.text} />
          </AlternativeWrapper>
        </div>
      ))}

      <div className="flex flex-col sm:flex-row items-center mt-5">
        <ButtonComponent
          label="Confirmar"
          className="w-full sm:w-auto"
          disable={!alternativeSelected || isLoadingValidation}
          onClick={handleShowAnswer}
        />
        {showAnswer && (
          <div
            className={`mt-5 sm:mt-0 sm:ml-5 w-full sm:w-auto ${questionRepliedStatus?.replyCorrect ? 'bg-green-500' : 'bg-red '} opacity-80 p-4 rounded flex items-center justify-center`}
          >
            <span className="font-bold text-center text-white">
              {questionRepliedStatus?.replyCorrect
                ? 'Você acertou'
                : `Você errou! Resposta correta: A`}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
