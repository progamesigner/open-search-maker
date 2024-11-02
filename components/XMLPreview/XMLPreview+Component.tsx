import type { UseXMLPreviewState } from './XMLPreview+State';

export function XMLPreviewComponent({
  xml,
  ...props
}: UseXMLPreviewState): JSX.Element {
  return (
    <div {...props}>
      <div>Open Search File</div>
      {xml !== null ? <pre>{xml}</pre> : <p>Name &amp; URL are required.</p>}
    </div>
  );
}
