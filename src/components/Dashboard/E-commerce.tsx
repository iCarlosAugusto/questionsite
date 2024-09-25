import Link from 'next/link';
import React from 'react';

import { SubjectCategoryEntity } from '@/entities/SubjectCategoryEntity';
//import { axiosReq } from '@/http/axios_helper';

import ButtonComponent from '../Button';

const getSubjectCategory = async (): Promise<SubjectCategoryEntity[]> => {
  // eslint-disable-next-line prettier/prettier
  // const { data } = await axiosReq.get<SubjectCategoryEntity[]>('/courseCategory');
  // return data;
  return [
    {
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
    },
    {
      id: '2',
      createdAt: new Date(),
      name: 'Azure',
      updatedAt: new Date(),
      courses: [
        {
          id: '12',
          courseCategoryId: '1',
          createdAt: new Date(),
          updatedAt: new Date(),
          name: 'IT Especalista',
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
    },
  ];
};

export default async function ECommerce() {
  const subjectCategories = await getSubjectCategory();
  console.log(subjectCategories);
  return (
    <>
      <div className="w-full flex flex-col rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark mt-5">
        <div>
          <span className="text-3xl">Boas vindas! Vamos estudar?</span>
          <div className="flex justify-between">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem porro doloribus
              laboriosam minus nam quisquam labore numquam voluptas ratione sed, praesentium minima
              quae ut voluptatum quos obcaecati aperiam fugit facilis!
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-5 mt-5">
          <Link href={'/library/Java'}>
            <ButtonComponent label="Continuar de onde parei" className="w-full sm:w-auto" />
          </Link>

          <Link href={'/library/Java'}>
            <ButtonComponent
              label="Explorar todas as questões disponíveis"
              className="w-full sm:w-auto mt-2 sm:mt-0"
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-15">
        <span className="text-4xl text-center">Explore os mais 15 cursos disponveis</span>

        <div className="grid grid-cols-2 sm:flex mt-5">
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
            <Link href={`/library/${el.name}`} key={index} className="m-3">
              <div className="flex flex-col items-center cursor-pointer">
                <div className="w-25 h-25 rounded-full bg-gray-200 flex items-center justify-center bg-slate-100 cursor-pointer">
                  <img src={el.image} alt="Imagem no centro" />
                </div>
                <span>{el.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
