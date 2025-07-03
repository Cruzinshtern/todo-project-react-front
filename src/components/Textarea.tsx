// Use React.TextareaHTMLAttributes to inherit all the standard textarea props
import { useId } from 'react';
import type { TextareaProps } from '../interfaces/customComponents.interface';

export default function Textarea({ error, textareaClassName, id, ...rest }: TextareaProps) {
  const uniqueId = useId();
  const inputId = id || uniqueId;
  const defaultInputClasses =
    'block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm';

  return (
    <textarea
      id={inputId}
      className={`${textareaClassName || defaultInputClasses} ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
      {...rest}
    ></textarea>
  );
}
