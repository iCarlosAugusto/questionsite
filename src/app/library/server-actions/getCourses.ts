'use server';

import { SubjectCategoryEntity } from '@/entities/SubjectCategoryEntity';
import { axiosReq } from '@/http/axios_helper';

export const getSubjectCategoryById = async (
  subjectCategoryId: string,
): Promise<SubjectCategoryEntity> => {
  // eslint-disable-next-line prettier/prettier
  const { data } = await axiosReq.get<SubjectCategoryEntity>(`/courseCategory/${subjectCategoryId}`);

  return data;
};
