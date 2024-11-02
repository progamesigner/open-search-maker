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
      className={`${open ? 'fixed' : 'hidden'} inset-0 flex h-full w-full items-center justify-center bg-gray-900/30 text-gray-700 backdrop-blur dark:bg-gray-100/30 dark:text-gray-300`}
      open={open}
    >
      <div className='flex flex-col gap-4 rounded bg-gray-100 p-4 shadow dark:bg-gray-900'>
        <div className='flex max-w-80 flex-col gap-2'>
          <p className='font-semibold text-2xl'>Something Wrong!</p>
          {message !== null ? <p>{message}</p> : null}
        </div>
        <Button className="ms-auto" onClick={onClosed}>
          Ok
        </Button>
      </div>
    </dialog>
  );
}
