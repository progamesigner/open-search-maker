import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export interface ButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {}

export type UseButtonState = ButtonProps;

export function useButtonState(props: ButtonProps): UseButtonState {
  return props;
}
