import type { JSX } from 'react';
import type { UseXMLPreviewState } from './XMLPreview+State';

export function XMLPreviewComponent({
  xml,
  ...props
}: UseXMLPreviewState): JSX.Element {
  return (
    <div {...props}>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 rounded-t bg-gray-300 px-4 py-2 font-semibold dark:bg-gray-700">
          {xml === null ? (
            <p className="flex size-4 items-center justify-center rounded-full bg-red-300 font-bold text-xs dark:bg-red-700">
              !
            </p>
          ) : null}
          Open Search
        </div>
        <a
          className="ms-auto flex size-6 items-center justify-center rounded-full bg-gray-700 font-bold text-gray-300 text-sm transition-colors hover:bg-gray-800 dark:bg-gray-300 dark:text-gray-700 dark:hover:bg-gray-400"
          href="https://developer.mozilla.org/docs/Web/OpenSearch"
          target="_blank"
          rel="noreferrer"
        >
          ?
        </a>
      </div>
      <div className="rounded-sm rounded-tl-none bg-gray-300 p-2 dark:bg-gray-700">
        <div className="overflow-x-scroll py-4">
          {xml !== null ? (
            <pre>{xml}</pre>
          ) : (
            <p className="text-center text-red-700 dark:text-red-300">
              Name &amp; valid URLs are required.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
