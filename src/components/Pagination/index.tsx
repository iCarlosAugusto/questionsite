'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

interface PaginationProps {
  totalPages: number;
}

export const Pagination = ({ totalPages }: PaginationProps) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const currentPage = Number(searchParams.get('page') ?? 1);

  const getVisiblePages = () => {
    const visiblePages = 5;
    let start = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
    const end = Math.min(start + visiblePages - 1, totalPages);

    if (end - start < visiblePages - 1) {
      start = Math.max(end - visiblePages + 1, 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const pages = getVisiblePages();

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
    <div className="flex items-center justify-center space-x-2">
      {/* Botão Voltar */}
      <button
        onClick={() => changePage(String(Math.max(currentPage - 1, 1)))}
        disabled={currentPage === 1}
        className={`flex items-center space-x-1 px-3 py-1 rounded dark:text-white text-black-2 ${
          currentPage === 1 ? 'bg-gray-300' : 'hover:bg-slate-600'
        }`}
      >
        <span>←</span>
        <span>Voltar</span>
      </button>

      {/* Exibir "1" sempre */}
      <button
        onClick={() => changePage(String(1))}
        className={`px-3 py-1 rounded ${
          currentPage === 1
            ? 'bg-black-2 text-white'
            : 'hover:bg-slate-600 dark:text-white text-black-2'
        }`}
      >
        1
      </button>

      {/* Mostrar "..." se necessário */}
      {currentPage > 3 && <span className="dark:text-white text-black-2">...</span>}

      {/* Páginas visíveis */}
      {pages.map((page) => {
        if (page !== 1 && page !== totalPages) {
          return (
            <button
              key={page}
              onClick={() => changePage(String(page))}
              className={`px-3 py-1 rounded ${
                currentPage === page
                  ? 'bg-black-2 text-white'
                  : 'hover:bg-slate-600 dark:text-white text-black-2'
              }`}
            >
              {page}
            </button>
          );
        }
        return null;
      })}

      {/* Mostrar "..." se estiver longe da última página */}
      {currentPage < totalPages - 2 && <span className="dark:text-white text-black-2">...</span>}

      {/* Exibir o número da última página */}
      {totalPages > 1 && (
        <button
          onClick={() => changePage(String(totalPages))}
          className={`px-3 py-1 rounded ${
            currentPage === totalPages
              ? 'bg-black-2 text-white'
              : 'hover:bg-slate-600 dark:text-white text-black-2'
          }`}
        >
          {totalPages}
        </button>
      )}

      {/* Botão Next */}
      <button
        onClick={() => changePage(String(currentPage + 1))}
        disabled={currentPage === totalPages}
        className={`flex items-center space-x-1 px-3 py-1 rounded dark:text-white text-black-2 ${
          currentPage === totalPages ? 'bg-gray-300 ' : 'hover:bg-slate-600'
        }`}
      >
        <span className="dark:text-white text-black-2">Próxima</span>
        <span className="dark:text-white text-black-2">→</span>
      </button>
    </div>
  );
};
