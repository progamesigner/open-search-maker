import type { JSX } from 'react';
import { XMLPreviewComponent } from './XMLPreview+Component';
import { type XMLPreviewProps, useXMLPreviewState } from './XMLPreview+State';

export type { XMLPreviewProps } from './XMLPreview+State';

export default function XMLPreview(props: XMLPreviewProps): JSX.Element {
  return <XMLPreviewComponent {...useXMLPreviewState(props)} />;
}
