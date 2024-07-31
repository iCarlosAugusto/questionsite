'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react';

import useModal from '@/hooks/useModal';

import { DragCloseDrawer } from '../Bottomsheet';
import ButtonComponent from '../Button';
import ChipComponent from '../Chip';

export default function Filter() {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentQuestionType = searchParams.get('questionType') ?? 'all';

  const changePage = (page: string) => {
    const params = new URLSearchParams(searchParams);
    if (page) {
      params.set('questionType', page);
    } else {
      params.delete('questionType');
    }

    replace(`${pathname}?${params.toString()}`);
  };
  const { closeModal, isOpen, openModal } = useModal();
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
            className="w-full"
            onClick={closeModal}
          />
          <ButtonComponent label="Limpar" className="w-full" />
        </div>
      </DragCloseDrawer>
      <span>Minhas questões</span>
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
        <div className="mt-5 space-x-5 flex">
          <ButtonComponent
            label="Filtrar"
            onClick={() => openModal()}
            className="w-full sm:w-auto"
          />
          <ButtonComponent label="Limpar" className="hidden sm:block" />
        </div>
      </div>
    </>
  );
}
