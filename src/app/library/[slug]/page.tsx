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

  return (
    <div>
      <DefaultLayout showSidebar={true}>
        <div>
          <h1 className="text-4xl">Questões de certificações {params.slug}</h1>

          <CourseList initialCourses={[1, 2, 3]} />
        </div>
      </DefaultLayout>
    </div>
  );
}
