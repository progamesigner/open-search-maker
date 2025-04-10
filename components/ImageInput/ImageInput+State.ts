import type {
  ChangeEventHandler,
  InputHTMLAttributes,
  PropsWithoutRef,
} from 'react';

export interface ImageInputProps
  extends PropsWithoutRef<
    Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value'>
  > {
  browser?: string | null;
  label?: string | null;
  value?: string | null;
  onFileChanged: ChangeEventHandler<HTMLInputElement>;
}

export interface UseImageInputState
  extends PropsWithoutRef<
    Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value'>
  > {
  browser: string | null;
  label: string | null;
  value: string | null;
  onFileChanged: ChangeEventHandler<HTMLInputElement>;
}

export function useImageInputState({
  browser = null,
  label = null,
  value = null,
  ...props
}: ImageInputProps): UseImageInputState {
  return { browser, label, value, ...props };
}
