// Use React.InputHTMLAttributes to inherit all the standard input props
import { useId } from 'react';
import type { InputProps } from '../interfaces/customComponents.interface';

export default function Input({ error, inputClassName, id, ...rest }: InputProps) {
  const uniqueId = useId();
  const inputId = id || uniqueId;
  const defaultInputClasses =
    'block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm';

  return (
    <input
      id={inputId}
      className={`${inputClassName || defaultInputClasses} ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
      {...rest}
    />
  );
}
