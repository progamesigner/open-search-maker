import type { JSX } from 'react';
import type { UseSelectState } from './Select+State';

export function SelectComponent({
  children,
  className,
  ...props
}: UseSelectState): JSX.Element {
  return (
    <select className={`appearance-none ${className}`} {...props}>
      {children}
    </select>
  );
}
