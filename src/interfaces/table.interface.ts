export interface TableColumn {
  key: string;
  value: string;
}

export interface PaginationInputProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isLoading?: boolean; // To disable buttons when data is being downloaded
}
export interface SelectOption {
  key: string;
  value: string;
  isDisabled: boolean;
}
