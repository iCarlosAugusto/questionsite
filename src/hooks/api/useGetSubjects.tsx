import toast from 'react-hot-toast';
import { useQuery } from 'react-query';

import { Subject } from '@/entities/Subject';
import { axiosReq } from '@/http/axios_helper';

const getSubjectsByDisciplineId = async (disciplineId: string): Promise<Subject[]> => {
  console.log('DisciplineId: ', disciplineId);
  const { data } = await axiosReq.get(`/discipline/${disciplineId}/subject`);
  return data;
};

const useGetSubjectsByDisciplineId = () => {
  return useQuery<Subject[]>('subjects', () => getSubjectsByDisciplineId('123'), {
    retry: false,
    enabled: false,
    onError: () => {
      toast('Ocorreu um erro, tente novamente.');
    },
  });
};

export { useGetSubjectsByDisciplineId };
