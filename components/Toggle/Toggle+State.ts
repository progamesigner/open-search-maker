import type { InputHTMLAttributes, PropsWithChildren } from 'react';

export interface ToggleProps
  extends PropsWithChildren<InputHTMLAttributes<HTMLInputElement>> {
  checked?: boolean;
}

export interface UseToggleState
  extends PropsWithChildren<InputHTMLAttributes<HTMLInputElement>> {
  checked: boolean;
}

export function useToggleState({
  checked = false,
  ...props
}: ToggleProps): UseToggleState {
  return { checked, ...props };
}
