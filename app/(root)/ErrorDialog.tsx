import type { MouseEventHandler } from 'react';
import Button from '../../components/Button/Button';

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
      className={`${open ? 'fixed' : 'hidden'} inset-0 flex justify-center items-center text-gray-700 dark:text-gray-300 bg-gray-900/30 dark:bg-gray-100/30 backdrop-blur w-full h-full`}
      open={open}
    >
      <div className="flex flex-col gap-4 rounded bg-gray-100 dark:bg-gray-900 shadow p-4">
        <div className="flex flex-col gap-2 max-w-80">
          <p className="text-2xl font-semibold">Something Wrong!</p>
          {message !== null ? <p>{message}</p> : null}
        </div>
        <Button className="ms-auto" onClick={onClosed}>
          Ok
        </Button>
      </div>
    </dialog>
  );
}
