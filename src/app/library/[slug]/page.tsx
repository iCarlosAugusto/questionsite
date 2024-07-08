'use client';

import Link from 'next/link';
import React from 'react';

import ButtonComponent from '@/components/Button';
import DefaultLayout from '@/components/Layouts/DefaultLayout';

export default function Library() {
  return (
    <div>
      <DefaultLayout showSidebar={true}>
        <div>
          <span className="text-4xl">Questões de certificações</span>

          {Array.from({ length: 5 }).map((_, i) => (
            <>
              <div className="w-full flex flex-col rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark mt-5">
                <div>
                  <p className="text-2xl font-bold">AWS Cloud Patriconer</p>
                  <p className="mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse inventore vel, quam nisi corrupti perspiciatis, at quas
                    modi quo consequatur dolorem illum laudantium mollitia.
                    Vitae, optio non. Totam, rem deserunt. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Esse inventore vel, quam
                    nisi corrupti perspiciatis, at quas modi quo consequatur
                    dolorem illum laudantium mollitia. Vitae, optio non. Totam,
                    rem deserunt.
                  </p>
                </div>

                <Link href="/questions">
                  <ButtonComponent label="Estudar" />
                </Link>
              </div>
            </>
          ))}
        </div>
      </DefaultLayout>
    </div>
  );
}
