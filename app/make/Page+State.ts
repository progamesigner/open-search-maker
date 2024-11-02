import type { useRouter } from 'next/navigation';
import { type MouseEventHandler, useCallback } from 'react';

export interface UsePageStateProps {
  name: string | null;
  router: ReturnType<typeof useRouter>;
}

export interface UsePageState {
  name: string | null;
  onBackClicked: MouseEventHandler<HTMLButtonElement>;
  onMarkClicked: MouseEventHandler<HTMLElement>;
}

export function usePageState({
  name,
  router,
}: UsePageStateProps): UsePageState {
  const onBackClicked = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event): void => {
      router.back();

      event.preventDefault();
    },
    [router],
  );

  const onMarkClicked = useCallback<MouseEventHandler<HTMLElement>>(
    ({ target }): void => {
      if (target && target instanceof Node) {
        const range = window.document.createRange();
        range.selectNodeContents(target);

        const selection = window.document.getSelection();
        if (selection) {
          selection.removeAllRanges();
          selection.addRange(range);
        }
      }
    },
    [],
  );

  return { name, onBackClicked, onMarkClicked };
}
