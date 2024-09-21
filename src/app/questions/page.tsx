import { Metadata } from 'next';
import React from 'react';

import { Filter } from '@/components/Filter';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import { Pagination } from '@/components/Pagination';
import QuestionLabel from '@/components/Question';
import { QuestionWrapper } from '@/components/Question/QuestionWrapper';
import { Pagable } from '@/entities/Pageable';
import { QuestionEntity } from '@/entities/QuestionEntity';
import { axiosReq } from '@/http/axios_helper';

export const metadata: Metadata = {
  title: 'AWS Questions',
  description:
    'This is Next.js Profile page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template',
};

interface QuestionProps {
  params: object;
  searchParams: {
    page: string;
    disciplinesId: string;
  };
}

export default async function Question({ params, searchParams }: QuestionProps) {
  const currentPage = searchParams.page ? Number(searchParams.page) - 1 : 0;
  const { data } = await axiosReq.get<Pagable<QuestionEntity>>(`/question?page=${currentPage}`);
  const questions = data.content;

  return (
    <DefaultLayout showSidebar={true}>
      <h1 className="text-4xl font-bold">Questões de OAB</h1>
      <span>Foram encontradas {data.totalElements} questões</span>
      <Filter />

      {questions.map((currentQuestion, index) => (
        <QuestionWrapper {...currentQuestion} key={index}>
          <QuestionLabel label={currentQuestion.text} key={index} />
        </QuestionWrapper>
      ))}
      <Pagination totalPages={data.totalPages} />
    </DefaultLayout>
  );
}
