import type { useRouter } from 'next/navigation';
import { type MouseEventHandler, useCallback } from 'react';

export interface UsePageStateProps {
  router: ReturnType<typeof useRouter>;
}

export interface UsePageState {
  onBackClicked: MouseEventHandler<HTMLAnchorElement>;
}

export default function usePageState({
  router,
}: UsePageStateProps): UsePageState {
  const onBackClicked = useCallback<MouseEventHandler<HTMLAnchorElement>>(
    (event): void => {
      router.back();

      event.preventDefault();
    },
    [router],
  );

  return {
    onBackClicked,
  };
}
