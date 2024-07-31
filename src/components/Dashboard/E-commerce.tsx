import Link from 'next/link';
import React from 'react';

import { SubjectCategoryEntity } from '@/entities/SubjectCategoryEntity';
import { axiosReq } from '@/http/axios_helper';

import ButtonComponent from '../Button';

const getSubjectCategory = async (): Promise<SubjectCategoryEntity[]> => {
  // eslint-disable-next-line prettier/prettier
  const { data } = await axiosReq.get<SubjectCategoryEntity[]>('/courseCategory');
  return data;
};

export default async function ECommerce() {
  const subjectCategories = await getSubjectCategory();
  console.log(subjectCategories);
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5"></div>
      <div className="w-full flex flex-col rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark mt-5">
        <div>
          <span className="text-3xl">Boas vindas! Vamos estudar?</span>
          <div className="flex justify-between">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              porro doloribus laboriosam minus nam quisquam labore numquam
              voluptas ratione sed, praesentium minima quae ut voluptatum quos
              obcaecati aperiam fugit facilis!
            </span>
          </div>
        </div>

        <div className="flex space-x-5 mt-5">
          <ButtonComponent label="Continuar de onde parei" />
          <ButtonComponent label="Explorar todas as questões disponíveis" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-15">
        <span className="text-4xl">Explore os mais 15 cursos disponveis</span>

        <div className="flex justify-evenly w-full mt-5">
          {[
            {
              name: 'Cloud',
              image: 'https://media.whizlabs.com/website/g1.webp',
            },
            {
              name: 'Segurança',
              image: 'https://media.whizlabs.com/website/g3.webp',
            },
            {
              name: 'Microsoft',
              image: 'https://media.whizlabs.com/website/g4.webp',
            },
            {
              name: 'Java',
              image: 'https://media.whizlabs.com/website/g5.webp',
            },
            {
              name: 'Cloud',
              image: 'https://media.whizlabs.com/website/g6.webp',
            },
            {
              name: 'Cloud',
              image: 'https://media.whizlabs.com/website/g1.webp',
            },
          ].map((el, index) => (
            <Link href={`/library/${el.name}`} key={index}>
              <div className="flex flex-col items-center cursor-pointer">
                <div className="w-25 h-25 rounded-full bg-gray-200 flex items-center justify-center bg-slate-100 cursor-pointer">
                  <img src={el.image} alt="Imagem no centro" />
                </div>
                <span>{el.name}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5"></div>
      </div>
    </>
  );
}
