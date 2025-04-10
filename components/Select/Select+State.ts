import type { InputHTMLAttributes, PropsWithChildren } from 'react';

export interface SelectProps
  extends PropsWithChildren<InputHTMLAttributes<HTMLSelectElement>> {}

export interface UseSelectState
  extends PropsWithChildren<InputHTMLAttributes<HTMLSelectElement>> {}

export function useSelectState({ ...props }: SelectProps): UseSelectState {
  return { ...props };
}
