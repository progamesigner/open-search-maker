import type {
  ChangeEventHandler,
  InputHTMLAttributes,
  PropsWithoutRef,
} from 'react';

export interface ImageInputProps
  extends PropsWithoutRef<
    Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value'>
  > {
  label?: string | null;
  value?: string | null;
  onFileChanged: ChangeEventHandler<HTMLInputElement>;
}

export interface UseImageInputState
  extends PropsWithoutRef<
    Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value'>
  > {
  label: string | null;
  value: string | null;
  onFileChanged: ChangeEventHandler<HTMLInputElement>;
}

export function useImageInputState({
  label = null,
  value = null,
  ...props
}: ImageInputProps): UseImageInputState {
  return { label, value, ...props };
}
