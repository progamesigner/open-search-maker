import type { HTMLAttributes, PropsWithoutRef } from 'react';

export interface XMLPreviewProps
  extends PropsWithoutRef<HTMLAttributes<HTMLDivElement>> {
  xml: string | null;
}

export type UseXMLPreviewState = XMLPreviewProps;

export function useXMLPreviewState({
  xml,
  ...props
}: XMLPreviewProps): UseXMLPreviewState {
  return { xml, ...props };
}
