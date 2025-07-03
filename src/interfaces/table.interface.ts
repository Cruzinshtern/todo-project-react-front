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

export interface RadixTooltipProp {
  children: React.ReactNode;
  content: React.ReactNode;
}

export interface TooltipProps {
  /**
   * Content to display inside the tooltip.
   */
  content: React.ReactNode;
  /**
   * Элемент, который вызывает тултип при наведении.
   */
  children: React.ReactNode;
  /**
   * Дополнительные CSS-классы для контейнера тултипа (например, для ширины).
   */
  wrapperClassName?: string;
  /**
   * Дополнительные CSS-классы для самого всплывающего контента тултипа.
   */
  tooltipClassName?: string;
  /**
   * Tooltip position relavite to its trigger. 'top' by default.
   */
  position?: 'top' | 'bottom' | 'left' | 'right';
  /**
   * Tooltip offset relative to its trigger in pixels. 8px by default.
   */
  offset?: number;
}
