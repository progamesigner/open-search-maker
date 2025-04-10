import type { JSX } from 'react';
import Button from '../../components/Button/Button';
import { Localized } from '../../context/localization';
import type { UsePageState } from './Page+State';

export function PageComponent({
  name,
  onBackClicked,
  onMarkClicked,
}: UsePageState): JSX.Element {
  return (
    <div className="flex flex-col gap-12">
      <p className="text-center font-semibold text-3xl">
        <Localized id="help-title">Almost done!</Localized>
      </p>
      <ol className="mx-auto flex max-w-full list-none flex-col gap-8 text-xl">
        <li>
          <p className="mb-4 text-6xl">1.</p>
          <p>
            <Localized
              id="help-step-1"
              elems={{ bold: <strong>Right-click</strong> }}
            >
              <span>
                <strong>Right-click</strong> on the address bar.
              </span>
            </Localized>
          </p>
        </li>
        <li>
          <p className="mb-4 text-6xl">2.</p>
          <p>
            <Localized
              id="help-step-2"
              elems={{ bold: <strong>Add "Name"</strong> }}
              vars={{ name: name || '' }}
            >
              <span>
                Click <strong>Add "Name"</strong>.
              </span>
            </Localized>
          </p>
        </li>
        <li>
          <p className="mb-4 text-6xl">3.</p>
          <p>
            <Localized
              id="help-step-3"
              elems={{
                marker: (
                  <mark
                    className="rounded-sm bg-red-400 px-1 text-gray-900 dark:bg-red-500 dark:text-gray-100"
                    onClick={onMarkClicked}
                    {...{}}
                  >
                    about:preferences#search
                  </mark>
                ),
              }}
            >
              <span>
                Go to
                <mark
                  className="rounded-sm bg-red-400 px-1 text-gray-900 dark:bg-red-500 dark:text-gray-100"
                  onClick={onMarkClicked}
                  {...{}}
                >
                  about:preferences#search
                </mark>
                to see your installed search engines.
              </span>
            </Localized>
          </p>
        </li>
      </ol>
      <div className="flex">
        <Button className="mx-auto" onClick={onBackClicked}>
          <Localized id="button-back">Back</Localized>
        </Button>
      </div>
    </div>
  );
}
