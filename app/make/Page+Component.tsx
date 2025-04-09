import type { JSX } from 'react';
import Button from '../../components/Button/Button';
import type { UsePageState } from './Page+State';

export function PageComponent({
  name,
  onBackClicked,
  onMarkClicked,
}: UsePageState): JSX.Element {
  return (
    <div className="flex flex-col gap-12">
      <p className="text-center font-semibold text-3xl">Almost done!</p>
      <ol className="mx-auto flex max-w-full list-none flex-col gap-8 text-xl">
        <li>
          <p className="mb-4 text-6xl">1.</p>
          <p>
            <strong>Right-click</strong> on the address bar.
          </p>
        </li>
        <li>
          <p className="mb-4 text-6xl">2.</p>
          <p>
            Click <strong>Add "{name}"</strong>.
          </p>
        </li>
        <li>
          <p className="mb-4 text-6xl">3.</p>
          <p>
            Go to
            <mark
              className="mx-1 rounded-sm bg-red-400 px-1 text-gray-900 dark:bg-red-500 dark:text-gray-100"
              onClick={onMarkClicked}
              {...{}}
            >
              about:preferences#search
            </mark>
            to see your installed search engines.
          </p>
        </li>
      </ol>
      <div className="flex">
        <Button className="mx-auto" onClick={onBackClicked}>
          Back
        </Button>
      </div>
    </div>
  );
}
