import type { JSX, MouseEventHandler } from 'react';
import Button from '../../components/Button/Button';
import { Localized } from '../../context/localization';

export interface ErrorDialogProps {
  message?: string | null;
  onClosed: MouseEventHandler<HTMLButtonElement>;
  open?: boolean;
}

export function ErrorDialog({
  message = null,
  onClosed,
  open = false,
}: ErrorDialogProps): JSX.Element {
  return (
    <dialog
      className={`${open ? 'fixed' : 'hidden'} inset-0 flex h-full w-full items-center justify-center bg-gray-900/30 text-gray-700 backdrop-blur-sm dark:bg-gray-100/30 dark:text-gray-300`}
      open={open}
    >
      <div className="flex flex-col gap-4 rounded-sm bg-gray-100 p-4 shadow-sm dark:bg-gray-900">
        <div className="flex max-w-80 flex-col gap-2">
          <p className="font-semibold text-2xl">
            <Localized id="dialog-error-title">Something Wrong!</Localized>
          </p>
          {message !== null ? <p>{message}</p> : null}
        </div>
        <Button className="ms-auto" onClick={onClosed}>
          <Localized id="button-confirm">Ok</Localized>
        </Button>
      </div>
    </dialog>
  );
}
