import { Metadata } from 'next';
import React from 'react';

import Filter from '@/components/Filter';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import Pagination from '@/components/Pagination';
import Question from '@/components/Question';

export const metadata: Metadata = {
  title: 'AWS Questions',
  description:
    'This is Next.js Profile page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template',
};

const Questions = () => {
  return (
    <DefaultLayout showSidebar={false}>
      <h1 className="text-4xl font-bold ">AWS Questions</h1>
      <span>Foram encontradas 1.343 questões</span>
      <Filter />

      <Question />
      <Question />
      <Question />

      <Pagination />
    </DefaultLayout>
  );
};

export default Questions;
