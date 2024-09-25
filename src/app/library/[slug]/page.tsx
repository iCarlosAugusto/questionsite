import React from 'react';

import DefaultLayout from '@/components/Layouts/DefaultLayout';

import Course from '../components/Course';
import { getSubjectCategoryById } from '../server-actions/getCourses';

export default async function Library({ params }: { params: { slug: string } }) {
  const subjectCategory = await getSubjectCategoryById('668f1e74f6941242765096e1');
  return (
    <div>
      <DefaultLayout showSidebar={true}>
        <div>
          <h1 className="text-4xl">Questões de certificações {params.slug}</h1>

          {subjectCategory.courses.map((_, i) => (
            <Course key={i} />
          ))}
        </div>
      </DefaultLayout>
    </div>
  );
}
