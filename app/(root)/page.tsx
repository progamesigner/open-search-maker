'use client';

import { useRouter } from 'next/navigation';
import { type JSX, useCallback } from 'react';
import { PageComponent } from './Page+Component';
import { type UsePageStateProps, usePageState } from './Page+State';

export default function Page(): JSX.Element {
  const router = useRouter();

  const onRedirect = useCallback<UsePageStateProps['onRedirect']>(
    (name: string, url: string): void => {
      const params = new URLSearchParams();
      params.append('n', name);
      params.append('u', url);
      router.push(`/make?${params.toString()}`);
    },
    [router],
  );

  const onUpload = useCallback<UsePageStateProps['onUpload']>(
    async (content: string): Promise<string> => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_DPASTE_API}`, {
        method: 'POST',
        body: new URLSearchParams({
          content,
          format: 'json',
          expires: 'onetime',
          lexer: 'xml',
        }),
      });
      const json = await response.json();
      return `${json.url}/raw`;
    },
    [],
  );

  return <PageComponent {...usePageState({ onRedirect, onUpload })} />;
}
