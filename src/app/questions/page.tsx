import { Metadata } from 'next';
import React from 'react';

import { AlternativeLabel } from '@/components/Alternative';
import { AlternativeWrapper } from '@/components/Alternative/AlternativeWrapper';
import Filter from '@/components/Filter';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import Pagination from '@/components/Pagination';
import QuestionLabel from '@/components/Question';
import { QuestionWrapper } from '@/components/Question/QuestionWrapper';
import { QuestionEntity } from '@/entities/QuestionEntity';

export const metadata: Metadata = {
  title: 'AWS Questions',
  description:
    'This is Next.js Profile page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template',
};

const Questions = () => {
  const questions: QuestionEntity[] = [
    {
      id: '1',
      text: 'Quanto é 1+1',

      alternatives: [
        {
          id: '2',
          questionId: '1',
          textAlternative: '2',
          isCorrect: true,
        },
        {
          id: '2',
          questionId: '1',
          textAlternative: '11',
          isCorrect: false,
        },
        {
          id: '3',
          questionId: '1',
          textAlternative: '333',
          isCorrect: true,
        },
        {
          id: '4',
          questionId: '1',
          textAlternative: '444',
          isCorrect: true,
        },
      ],
    },
    {
      id: '2',
      text: 'Quanto é 2+2',

      alternatives: [
        {
          id: '1',
          questionId: '2',
          textAlternative: '2',
          isCorrect: false,
        },
        {
          id: '2',
          questionId: '2',
          textAlternative: '4',
          isCorrect: true,
        },
        {
          id: '3',
          questionId: '2',
          textAlternative: '999',
          isCorrect: true,
        },
        {
          id: '4',
          questionId: '2',
          textAlternative: '1232',
          isCorrect: true,
        },
      ],
    },
  ];

  return (
    <DefaultLayout showSidebar={false}>
      <h1 className="text-4xl font-bold ">AWS Questions</h1>
      <span>Foram encontradas 1.343 questões</span>
      <Filter />

      {questions.map((currentQuestion, index) => (
        <QuestionWrapper {...currentQuestion} key={index}>
          <QuestionLabel label={currentQuestion.text} key={index} />
          {currentQuestion.alternatives.map((currentAlternative, index) => (
            <AlternativeWrapper
              {...currentAlternative}
              alternativeLetter="A"
              key={index}
            >
              <AlternativeLabel label={currentAlternative.textAlternative} />
            </AlternativeWrapper>
          ))}
        </QuestionWrapper>
      ))}
      <Pagination />
    </DefaultLayout>
  );
};

export default Questions;
