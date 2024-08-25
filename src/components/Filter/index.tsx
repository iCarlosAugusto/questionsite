'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { useGetDisciplines } from '@/hooks/api/useGetDisciplines';
import { DeviceType, useDeviceType } from '@/hooks/useDeviceType';
import useModal from '@/hooks/useModal';

import { DragCloseDrawer } from '../Bottomsheet';
import ButtonComponent from '../Button';
import ChipComponent from '../Chip';

export default function Filter() {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentQuestionType = searchParams.get('questionType') ?? null;
  const deviceType = useDeviceType();

  const { data: disciplines, isLoading: isLoadingDisciplines } = useGetDisciplines();

  const { closeModal, isOpen, openModal } = useModal();
  const animatedComponents = makeAnimated();

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
    console.log('Filtrando...');
  };

  const colourOptions = [
    { value: 'cherry', label: 'Cherry', color: '#e26a6a' },
    { value: 'grape', label: 'Grape', color: '#6a1b9a' },
    { value: 'lime', label: 'Lime', color: '#cddc39' },
    { value: 'mango', label: 'Mango', color: '#ff9800' },
    { value: 'orange', label: 'Orange', color: '#ff5722' },
    { value: 'peach', label: 'Peach', color: '#ffcc80' },
  ];

  const disciplineOptions = disciplines?.map((discipline) => {
    return {
      value: discipline.name,
      label: discipline.name,
    };
  });

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
        <div className="flex space-x-5 mb-5">
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            isLoading={isLoadingDisciplines}
            isDisabled={isLoadingDisciplines}
            options={disciplineOptions}
            className="my-react-select-container w-1/2"
            classNamePrefix="my-react-select"
          />
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isLoading={true}
            isDisabled={true}
            isMulti
            options={colourOptions}
            className="my-react-select-container w-1/2"
            classNamePrefix="my-react-select"
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
