import React from 'react';

import DefaultLayout from '@/components/Layouts/DefaultLayout';

import CourseList from '../components/CourseList';
import { getCourses } from '../server-actions/getCourses';

export default async function Library({
  params,
}: {
  params: { slug: string };
}) {
  const value = await getCourses();
  console.log(params.slug);
  return (
    <div>
      <DefaultLayout showSidebar={true}>
        <div>
          <span className="text-4xl">Questões de certificações</span>
          {value}

          <CourseList initialCourses={[1, 2, 3]} />
        </div>
      </DefaultLayout>
    </div>
  );
}
