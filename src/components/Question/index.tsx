import React from 'react';

import { QuestionEntity } from '@/entities/QuestionEntity';

import { Alternative } from '../Alternative';
import Button from '../Button';

export default function Question({ text, alternatives, id }: QuestionEntity) {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8 mt-5 mb-5">
      <div className="flex justify-between">
        <span className="font-bold">Q-{id} | AWS Developer Associate</span>
        {/* <span className="text-green-500">Acertei essa questão</span> */}
      </div>

      <p>{text}</p>
      {alternatives.map((el, index) => (
        <Alternative
          key={index}
          alternativeLetter="A"
          isSelected
          label={el.textAlternative}
        />
      ))}

      <div className="flex flex-col md:flex-row mt-5 items-center">
        <Button label="Responder" />

        <div className="bg-green-500 rounded p-2 flex items-center justify-center md:ml-5">
          <span className="text-white">Você acertou</span>
        </div>
      </div>
    </div>
  );
}
