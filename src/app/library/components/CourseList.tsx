'use client';

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { getCourses } from '../server-actions/getCourses';
import Course from './Course';

interface CourseListProps {
  initialCourses: any[];
}

export default function CourseList({ initialCourses }: CourseListProps) {
  const [courses, setCourses] = useState(initialCourses);
  const { ref, inView } = useInView();

  const loadMoreCourses = async () => {
    const courses = await getCourses();

    setCourses([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    console.log('Buscando mais....');
  };

  useEffect(() => {
    console.log(inView);
    if (inView) {
      loadMoreCourses();
    }
  }, [inView]);

  return (
    <div>
      {courses.map((_, i) => (
        <Course key={i} />
      ))}

      <div ref={ref}>Loading...</div>
    </div>
  );
}
