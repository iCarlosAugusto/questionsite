'use server';

import { SubjectCategoryEntity } from '@/entities/SubjectCategoryEntity';
// import { axiosReq } from '@/http/axios_helper';

export const getSubjectCategoryById = async (
  subjectCategoryId: string,
): Promise<SubjectCategoryEntity> => {
  // eslint-disable-next-line prettier/prettier
  // const { data } = await axiosReq.get<SubjectCategoryEntity>(`/courseCategory/${subjectCategoryId}`);
  console.log(subjectCategoryId);
  const mockResult: SubjectCategoryEntity = {
    id: '1',
    createdAt: new Date(),
    name: 'AWS',
    updatedAt: new Date(),
    courses: [
      {
        id: '12',
        courseCategoryId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
        name: 'Cloud Patricioner',
      },
      {
        id: '12',
        courseCategoryId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
        name: 'Security',
      },
      {
        id: '12',
        courseCategoryId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
        name: 'Arquiteto',
      },
    ],
  };
  return mockResult;
};
