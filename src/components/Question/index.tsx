import React from 'react';

import { Alternative } from '../Alternative';
import Button from '../Button';

export default function Question() {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8 mt-5 mb-5">
      <div className="flex justify-between">
        <span className="font-bold">Q-4232 | AWS Developer Associate</span>
        <span className="text-green-500">Acertei essa questão</span>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laborum
        dignissimos ea, accusamus officia molestias, voluptate quo expedita in
        possimus dolore et corporis totam unde rerum. Modi et sapiente nihil?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
        eos mollitia minus nobis officiis nam nisi esse ab molestias vero non
        voluptatum praesentium ipsum eligendi, dignissimos possimus ea debitis
        qui.
      </p>
      <Alternative
        alternativeLetter="A"
        isSelected
        label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laborum dignissimos ea, accusamus officia molestias, voluptate quo expedita in possimus dolore et corporis totam unde rerum. Modi et sapiente nihil? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur eos mollitia minus nobis officiis nam nisi esse ab molestias vero non voluptatum praesentium ipsum eligendi, dignissimos possimus ea debitis qui."
      />
      <Alternative
        alternativeLetter="B"
        label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laborum dignissimos ea, accusamus officia molestias, voluptate quo expedita in possimus dolore et corporis totam unde rerum. Modi et sapiente nihil? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur eos mollitia minus nobis officiis nam nisi esse ab molestias vero non voluptatum praesentium ipsum eligendi, dignissimos possimus ea debitis qui."
      />
      <Alternative
        alternativeLetter="C"
        label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laborum dignissimos ea, accusamus officia molestias, voluptate quo expedita in possimus dolore et corporis totam unde rerum. Modi et sapiente nihil? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur eos mollitia minus nobis officiis nam nisi esse ab molestias vero non voluptatum praesentium ipsum eligendi, dignissimos possimus ea debitis qui."
      />
      <Alternative
        alternativeLetter="D"
        label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laborum dignissimos ea, accusamus officia molestias, voluptate quo expedita in possimus dolore et corporis totam unde rerum. Modi et sapiente nihil? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur eos mollitia minus nobis officiis nam nisi esse ab molestias vero non voluptatum praesentium ipsum eligendi, dignissimos possimus ea debitis qui."
      />

      <div className="flex flex-col md:flex-row mt-5 items-center">
        <Button label="Responder" />

        <div className="bg-green-500 rounded p-2 flex items-center justify-center md:ml-5">
          <span className="text-white">Você acertou</span>
        </div>
      </div>
    </div>
  );
}
