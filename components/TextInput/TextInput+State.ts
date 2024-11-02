import type { InputHTMLAttributes, PropsWithoutRef } from 'react';

export interface TextInputProps
  extends PropsWithoutRef<InputHTMLAttributes<HTMLInputElement>> {
  label?: string;
}

export interface UseTextInputState
  extends PropsWithoutRef<InputHTMLAttributes<HTMLInputElement>> {
  label: string | null;
}

export function useTextInputState({
  label,
  ...props
}: TextInputProps): UseTextInputState {
  return { label: label !== undefined ? label : null, ...props };
}
