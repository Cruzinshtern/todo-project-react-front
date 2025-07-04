import type { IconBaseProps } from 'react-icons';

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

export interface TooltipProps {
  /**
   * Content to display inside the tooltip.
   */
  content: React.ReactNode;
  /**
   * Element calling the tooltip on hover.
   */
  children: React.ReactNode;
  /**
   * Additional CSS-classes for the tooltip wrapper.
   */
  wrapperClassName?: string;
  /**
   * Additional CSS-classes for the appearing tolltip content.
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

export interface BadgeInputProp extends React.HTMLAttributes<HTMLDivElement> {
  color: 'blue' | 'yellow' | 'red';
  size: number;
  children: React.ReactElement<IconBaseProps>;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * TBD
   */
  error?: string;
  /**
   * Additional CSS-classes for input.
   */
  inputClassName?: string;
  /**
   * Additional CSS-classes for errors.
   */
  errorClassName?: string;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * button content (text, icons, etc.)
   */
  children: React.ReactNode;
  /**
   * style buttons (e.g. "primary", "secondary", "danger")
   */
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  /**
   * determine buttnon style depending on general class
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * add more taiwind or other classes
   */
  className?: string;
  /**
   * set disable status when necessary
   */
  disabled?: boolean;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /**
   * TBD
   */
  error?: string;
  /**
   * Additional CSS-classes for the whole select block (label if present and select).
   */
  selectClassName?: string;
  /**
   * Additional CSS-classes for errors.
   */
  errorClassName?: string;
  /**
   * Array of the select options
   */
  options: SelectOption[];
  /**
   * Select label to display if necessary
   */
  label?: string;
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * TBD
   */
  error?: string;
  /**
   * Additional CSS-classes for textarea.
   */
  textareaClassName?: string;
  /**
   * Additional CSS-classes for errors.
   */
  errorClassName?: string;
}
