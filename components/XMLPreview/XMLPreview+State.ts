import type { HTMLAttributes, PropsWithoutRef } from 'react';

export interface XMLPreviewProps
  extends PropsWithoutRef<HTMLAttributes<HTMLDivElement>> {
  message?: string | null;
  tab?: string | null;
  xml: string | null;
}

export type UseXMLPreviewState = XMLPreviewProps;

export function useXMLPreviewState({
  message = null,
  tab = null,
  xml,
  ...props
}: XMLPreviewProps): UseXMLPreviewState {
  return { message, tab, xml, ...props };
}
