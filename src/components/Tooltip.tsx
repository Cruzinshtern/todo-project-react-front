import React, { useState, useRef, useEffect, useCallback } from 'react';
import type { TooltipProps } from '../interfaces/customComponents.interface';

export default function Tooltip({
  content,
  children,
  wrapperClassName,
  tooltipClassName,
  position = 'top',
  offset = 8,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});

  const showTooltip = useCallback(() => {
    setIsVisible(true);
  }, []);

  const hideTooltip = useCallback(() => {
    setIsVisible(false);
  }, []);

  // Effect to dynamically position the tooltip
  useEffect(() => {
    if (!isVisible || !triggerRef.current || !tooltipRef.current) {
      return;
    }

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();

    let newStyle: React.CSSProperties = {};

    switch (position) {
      case 'top':
        newStyle = {
          left: triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2,
          top: triggerRect.top - tooltipRect.height - offset,
        };
        break;
      case 'bottom':
        newStyle = {
          left: triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2,
          top: triggerRect.bottom + offset,
        };
        break;
      case 'left':
        newStyle = {
          left: triggerRect.left - tooltipRect.width - offset,
          top: triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2,
        };
        break;
      case 'right':
        newStyle = {
          left: triggerRect.right + offset,
          top: triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2,
        };
        break;
    }

    newStyle.left = (newStyle.left as number) + window.scrollX;
    newStyle.top = (newStyle.top as number) + window.scrollY;

    setTooltipStyle(newStyle);
  }, [isVisible, position, offset]); // Recalculate position when visibility, position or offset are changed

  const defaultTooltipClasses = `absolute z-50 p-2 text-sm text-white bg-gray-800 rounded-md shadow-lg 
                                 whitespace-nowrap transition-opacity duration-200 pointer-events-none`;

  return (
    <div
      ref={triggerRef}
      className={`inline-block ${wrapperClassName || ''}`} // wrapperClassName to wrap the trigger
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children} {/* Element calling the tooltip */}
      {/* Render tooltip only if it is visible for productivity */}
      {isVisible && (
        <div
          ref={tooltipRef}
          style={{ ...tooltipStyle, opacity: isVisible ? 1 : 0 }}
          className={`${defaultTooltipClasses} ${tooltipClassName || ''}`}
          role="tooltip"
          aria-hidden={!isVisible}
        >
          {content}
        </div>
      )}
    </div>
  );
}
