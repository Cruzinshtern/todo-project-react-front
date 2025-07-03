// Use React.SelectHTMLAttributes to inherit all the standard select props
import React from 'react';
import type { SelectProps } from '../interfaces/customComponents.interface';

export default function Select({ error, selectClassName, options, label, ...rest }: SelectProps) {
  const selectId = React.useId();

  const defaultSelectClasses =
    'block px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500';

  return (
    <div className={`flex items-center gap-3 ${selectClassName}`}>
      {label && <label htmlFor={selectId}>{label}: </label>}

      <select
        id={selectId}
        className={`${defaultSelectClasses}  ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
        {...rest}
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value} disabled={option.isDisabled}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
}
