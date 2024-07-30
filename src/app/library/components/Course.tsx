import Link from 'next/link';
import React from 'react';

import ButtonComponent from '@/components/Button';

export default function Course() {
  console.log('Eu estou no client side');
  return (
    <div className="w-full flex flex-col rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark mt-5">
      <div>
        <p className="text-2xl font-bold">AWS Cloud Patriconer</p>
        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          inventore vel, quam nisi corrupti perspiciatis, at quas modi quo
          consequatur dolorem illum laudantium mollitia. Vitae, optio non.
          Totam, rem deserunt. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Esse inventore vel, quam nisi corrupti perspiciatis,
          at quas modi quo consequatur dolorem illum laudantium mollitia. Vitae,
          optio non. Totam, rem deserunt.
        </p>
      </div>

      <Link href="/questions">
        <ButtonComponent label="Estudar" />
      </Link>
    </div>
  );
}
