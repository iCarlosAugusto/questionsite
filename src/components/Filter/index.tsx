'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { Discipline } from '@/entities/Discipline';
import { Subject } from '@/entities/Subject';
import { DeviceType, useDeviceType } from '@/hooks/useDeviceType';
import useModal from '@/hooks/useModal';
import { axiosReq } from '@/http/axios_helper';

import { DragCloseDrawer } from '../Bottomsheet';
import ButtonComponent from '../Button';
import { Chip } from '../Chip';
import { Select } from '../Select';
import { SelectSection } from '../SelectSection';

export function Filter() {
  const { replace, refresh } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentQuestionType = searchParams.get('questionType') ?? null;
  const deviceType = useDeviceType();

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

  const handleCleanFilters = () => {
    const params = new URLSearchParams(searchParams);
    params.delete('questionType');
  };

  const handleFilter = () => {
    refresh();
  };

  interface Option {
    label: string;
    value: string;
  }

  const [disciplines, setDisciplines] = useState<Discipline[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [isLoadingDisciplines, setLoadingDisciplines] = useState(false);
  const [isLoadingSubjects, setLoadingSubjects] = useState(false);

  const getDiscipliens = async () => {
    setLoadingDisciplines(true);
    try {
      const { data } = await axiosReq.get<Discipline[]>('/discipline');
      setDisciplines(data);
    } catch (error) {
      console.log('erro');
    } finally {
      setLoadingDisciplines(false);
    }
  };

  const getSubjects = async () => {
    setLoadingSubjects(true);
    try {
      const { data } = await axiosReq.get<Subject[]>('/subject');
      setSubjects(data);
    } catch (error) {
      console.log('erro');
    } finally {
      setLoadingSubjects(false);
    }
  };

  useEffect(() => {
    getDiscipliens();
  }, []);

  useEffect(() => {
    getSubjects();
  }, [disciplines]);

  return (
    <>
      <DragCloseDrawer open={isOpen} setOpen={closeModal}>
        <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
          <div className="mt-2">
            <div>
              <Chip
                label="Todas"
                isSelected={currentQuestionType === 'all'}
                onClick={() => changePage('all')}
              />
              <Chip
                label="Resolvidas"
                isSelected={currentQuestionType === 'resolved'}
                onClick={() => changePage('resolved')}
              />
              <Chip
                label="Não resolvidas"
                isSelected={currentQuestionType === 'notResolved'}
                onClick={() => changePage('notResolved')}
              />
              <Chip
                label="Acertei"
                isSelected={currentQuestionType === 'correct'}
                onClick={() => changePage('correct')}
              />
              <Chip
                label="Errei"
                isSelected={currentQuestionType === 'wrong'}
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
          <Chip
            label="Todas"
            isSelected={currentQuestionType === 'all'}
            onClick={() => changePage('all')}
          />
          <Chip
            label="Resolvidas"
            isSelected={currentQuestionType === 'resolved'}
            onClick={() => changePage('resolved')}
          />
          <Chip
            label="Não resolvidas"
            isSelected={currentQuestionType === 'notResolved'}
            onClick={() => changePage('notResolved')}
          />
          <Chip
            label="Acertei"
            isSelected={currentQuestionType === 'correct'}
            onClick={() => changePage('correct')}
          />
          <Chip
            label="Errei"
            isSelected={currentQuestionType === 'wrong'}
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
