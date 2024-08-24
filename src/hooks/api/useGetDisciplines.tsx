import { useQuery } from 'react-query';

import { Discipline } from '@/entities/Discipline';
import { axiosReq } from '@/http/axios_helper';

const getDisciplines = async (): Promise<Discipline[]> => {
  const { data } = await axiosReq.get('/discipline');
  return data;
};

const useGetDisciplines = () => {
  return useQuery<Discipline[]>('disciplines', () => getDisciplines());
};

export { useGetDisciplines };
