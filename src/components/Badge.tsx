import React from 'react';
import type { BadgeInputProp } from '../interfaces/customComponents.interface';

const Badge = React.forwardRef<HTMLDivElement, BadgeInputProp>(
  ({ color, size, children, ...rest }, ref) => {
    const colors = {
      blue: 'text-blue-500',
      yellow: 'text-yellow-500',
      red: 'text-red-500',
    };

    const hoverColors = {
      blue: 'hover:text-white hover:bg-blue-500',
      yellow: 'hover:text-white hover:bg-yellow-500',
      red: 'hover:text-white hover:bg-red-500',
    };

    const defaultIconSize: number = 18;
    const childrenWithProps = React.cloneElement(children, { size: size || defaultIconSize });

    return (
      <div
        ref={ref}
        {...rest}
        className={`flex justify-center items-center border rounded-full p-2 cursor-pointer ${colors[color]} ${hoverColors[color]}`}
      >
        {childrenWithProps}
      </div>
    );
  }
);

Badge.displayName = 'Badge';
export default Badge;
