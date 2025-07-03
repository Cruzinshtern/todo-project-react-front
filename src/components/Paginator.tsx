import type { PaginationInputProps } from '../interfaces/customComponents.interface';
import Button from './Button';

export default function Paginator({
  currentPage,
  totalPages,
  onPageChange,
  isLoading = false,
}: PaginationInputProps) {
  // Hide paginator is there is only one page or none at all
  if (totalPages <= 1) {
    return null;
  }

  const canGoPrev = currentPage > 1 && !isLoading;
  const canGoNext = currentPage < totalPages && !isLoading;

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-4">
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!canGoPrev}
        variant="secondary"
      >
        Previous
      </Button>

      <div className="flex gap-2">
        {pageNumbers.map((page) => (
          <span
            key={page}
            className={`px-3 py-1 rounded-full cursor-pointer 
                        ${page === currentPage ? 'bg-blue-500 text-white font-bold' : 'text-gray-700 hover:bg-gray-200'}
                        ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => !isLoading && onPageChange(page)}
          >
            {page}
          </span>
        ))}
      </div>

      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!canGoNext}
        variant="secondary"
      >
        Next
      </Button>
    </div>
  );
}
