import { Metadata } from 'next';
import React, { Fragment } from 'react';

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
    disciplines: string;
    subjects: string;
  };
}

export default async function Question({ searchParams }: QuestionProps) {
  const buildQueryString = (): string => {
    const currentPage = searchParams.page ? Number(searchParams.page) - 1 : 0;

    const queryParams = {
      page: currentPage,
      disciplines: searchParams.disciplines,
      subjects: searchParams.subjects,
    };

    const queryString = Object.entries(queryParams)
      // eslint-disable-next-line no-unused-vars
      .filter(([_, value]) => value !== undefined && value !== null)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')
      .replaceAll('%', '%25');

    return `/question?${queryString}`;
  };

  const { data } = await axiosReq.get<Pagable<QuestionEntity>>(buildQueryString());
  const questions = data.content;

  return (
    <DefaultLayout showSidebar={true}>
      <h1 className="text-4xl font-bold">Questões de OAB</h1>
      <span>Foram encontradas {data.totalElements} questões</span>
      <Filter />
      {questions.length > 0 && (
        <Fragment>
          {questions.map((currentQuestion, index) => (
            <QuestionWrapper question={currentQuestion} key={index}>
              <QuestionLabel label={currentQuestion.text} key={index} />
            </QuestionWrapper>
          ))}
          <Pagination totalPages={data.totalPages} />
        </Fragment>
      )}

      {questions.length === 0 && (
        <div className="flex  items-center justify-center mt-10">
          <span className="text-center">
            Não conseguimos encontrar nenhuma questão =(
            <br />
            Tente trocar os filtros
          </span>
        </div>
      )}
    </DefaultLayout>
  );
}
