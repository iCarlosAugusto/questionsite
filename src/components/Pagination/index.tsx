'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react';

import { Pagination as PaginationNextUI } from '@nextui-org/react';

export default function Pagination() {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const changePage = (page: string) => {
    const params = new URLSearchParams(searchParams);
    if (page) {
      params.set('page', page);
    } else {
      params.delete('page');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex justify-center">
      <PaginationNextUI
        total={10}
        initialPage={1}
        onChange={(page: number) => changePage(page.toString())}
      />
    </div>
  );
}
