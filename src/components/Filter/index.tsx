'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useQuery } from 'react-query';

import { Discipline } from '@/entities/Discipline';
import { Subject } from '@/entities/Subject';
import { useGetDisciplines } from '@/hooks/api/useGetDisciplines';
import { DeviceType, useDeviceType } from '@/hooks/useDeviceType';
import useModal from '@/hooks/useModal';
import { axiosReq } from '@/http/axios_helper';

import { DragCloseDrawer } from '../Bottomsheet';
import ButtonComponent from '../Button';
import ChipComponent from '../Chip';
import { Select } from '../Select';
import { SelectSection } from '../SelectSection';

export function Filter() {
  const { replace, refresh } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentQuestionType = searchParams.get('questionType') ?? null;
  const deviceType = useDeviceType();

  //const { data: disciplines, isLoading: isLoadingDisciplines } = useGetDisciplines();
  //const { data: subjects, isLoading: isLoadingSubjects, refetch } = useGetSubjectsByDisciplineId();

  const { closeModal, isOpen, openModal } = useModal();

  const changePage = (page: string) => {
    const params = new URLSearchParams(searchParams);
    if (page) {
      params.set('questionType', page);
    } else {
      params.delete('questionType');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const handleFillDisciplineUrl = (disciplines: Option[]) => {
    const queryStringDisciplines = disciplines.map((item) => item.value).join(', ');
    const params = new URLSearchParams(searchParams);
    const formattedString = queryStringDisciplines.replaceAll(', ', '%');
    if (formattedString) {
      params.set('disciplinesId', formattedString);
    } else {
      params.delete('disciplinesId');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const setSubjects = (subjects: Option[]) => {
    const queryStringSubjects = subjects.map((item) => item.value).join(', ');
    const params = new URLSearchParams(searchParams);
    const formattedString = queryStringSubjects.replaceAll(', ', '%');
    if (queryStringSubjects) {
      params.set('subjectsId', formattedString);
    } else {
      params.delete('subjectsId');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleCleanFilters = () => {
    const params = new URLSearchParams(searchParams);
    params.delete('questionType');
  };

  const handleFilter = () => {
    refresh();
  };

  const getSubjectsByDisciplineId = async (disciplineId: string): Promise<Subject[]> => {
    console.log('DisciplineId: ', disciplineId);
    const { data } = await axiosReq.get(`/discipline/${disciplineId}/subject`);
    return data;
  };

  const {
    data: subjects,
    isLoading: isLoadingSubjects,
    refetch,
  } = useQuery<Subject[]>(['subjects'], () => getSubjectsByDisciplineId('123'), {
    retry: false,
    enabled: false,
    onError: () => {
      toast('Ocorreu um erro, tente novamente.');
    },
  });

  interface Option {
    label: string;
    value: string;
  }

  const handleGetSubjects = async (options: Option[]) => {
    console.log('handleFetchSubject');
    console.log(options);
  };
  const disciplines: Discipline[] = [
    {
      id: '1',
      filterId: '2',
      name: 'Direito Constitucional',
    },
    {
      id: '2',
      filterId: '3',
      name: 'Direito Tributário',
    },
    {
      id: '3',
      filterId: '21',
      name: 'Direito Civil',
    },
  ];
  return (
    <>
      <DragCloseDrawer open={isOpen} setOpen={closeModal}>
        <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
          <div className="mt-2">
            <div>
              <ChipComponent
                label="Todas"
                isSeleced={currentQuestionType === 'all'}
                onClick={() => changePage('all')}
              />
              <ChipComponent
                label="Resolvidas"
                isSeleced={currentQuestionType === 'resolved'}
                onClick={() => changePage('resolved')}
              />
              <ChipComponent
                label="Não resolvidas"
                isSeleced={currentQuestionType === 'notResolved'}
                onClick={() => changePage('notResolved')}
              />
              <ChipComponent
                label="Acertei"
                isSeleced={currentQuestionType === 'correct'}
                onClick={() => changePage('correct')}
              />
              <ChipComponent
                label="Errei"
                isSeleced={currentQuestionType === 'wrong'}
                onClick={() => changePage('wrong')}
              />
            </div>
          </div>
          <ButtonComponent
            label="Filtrar"
            disable={!currentQuestionType}
            className="w-full"
            onClick={closeModal}
          />
          <ButtonComponent label="Limpar" className="w-full" />
        </div>
      </DragCloseDrawer>
      <span>Minhas questões</span>
      <Toaster />
      <div className="mt-2">
        <div className="flex mb-5 space-x-100 relative h-50">
          <Select
            placerholder="Disciplinas"
            options={disciplines?.map((el) => {
              return {
                label: el.name,
                value: el.id,
              } as Option;
            })}
          />
          <SelectSection
            placeholder="Matérias"
            sections={[
              {
                title: 'Direito constitucional',
                options: [
                  {
                    label: 'Artigo 1',
                    value: '1',
                  },
                  {
                    label: 'Artigo 2',
                    value: '2',
                  },
                  {
                    label: 'Artigo 3',
                    value: '3',
                  },
                  {
                    label: 'Artigo 4',
                    value: '4',
                  },
                  {
                    label: 'Artigo 5',
                    value: '5',
                  },
                ],
              },
            ]}
          />
        </div>

        <div className="hidden sm:block">
          <ChipComponent
            label="Todas"
            isSeleced={currentQuestionType === 'all'}
            onClick={() => changePage('all')}
          />
          <ChipComponent
            label="Resolvidas"
            isSeleced={currentQuestionType === 'resolved'}
            onClick={() => changePage('resolved')}
          />
          <ChipComponent
            label="Não resolvidas"
            isSeleced={currentQuestionType === 'notResolved'}
            onClick={() => changePage('notResolved')}
          />
          <ChipComponent
            label="Acertei"
            isSeleced={currentQuestionType === 'correct'}
            onClick={() => changePage('correct')}
          />
          <ChipComponent
            label="Errei"
            isSeleced={currentQuestionType === 'wrong'}
            onClick={() => changePage('wrong')}
          />
        </div>
        <div className="mt-5 space-x-5 flex">
          <ButtonComponent
            label="Filtrar"
            onClick={() => {
              deviceType === DeviceType.MOBILE || deviceType === DeviceType.TABLET
                ? openModal()
                : handleFilter();
            }}
            className="w-full sm:w-auto"
          />
          <ButtonComponent
            label="Limpar"
            onClick={handleCleanFilters}
            className="hidden sm:block"
            disable={!currentQuestionType}
          />
        </div>
      </div>
    </>
  );
}
