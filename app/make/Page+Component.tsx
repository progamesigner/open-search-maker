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
      <ol className="mx-auto flex max-w-[75%] list-outside list-decimal flex-col gap-8 text-xl marker:text-6xl">
        <li>
          <strong>Right-click</strong> on the address bar.
        </li>
        <li>
          Click <strong>Add "{name}"</strong>.
        </li>
        <li>
          Go to
          <mark
            className="mx-1 rounded bg-red-400 px-1 text-gray-900 dark:bg-red-500 dark:text-gray-100"
            onClick={onMarkClicked}
            {...{}}
          >
            about:preferences#search
          </mark>
          to see your installed search engines.
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
