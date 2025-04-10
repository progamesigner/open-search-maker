'use client';

import { useRouter } from 'next/navigation';
import { type JSX, Suspense, use, useCallback } from 'react';
import { LocalizationContext } from '../../context/localization';
import { LocaleManager } from './LocaleManager';
import { PageComponent } from './Page+Component';
import { type UsePageStateProps, usePageState } from './Page+State';

export default function Page(): JSX.Element {
  const router = useRouter();

  const { locale, setLocale } = use(LocalizationContext);

  const onLocaleUpdated = useCallback<UsePageStateProps['onLocaleUpdated']>(
    (locale: string): void => {
      const params = new URLSearchParams();
      setLocale(locale);
      params.append('l', locale);
      router.push(`/?${params.toString()}`);
    },
    [router, setLocale],
  );

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

  return (
    <>
      <Suspense>
        <LocaleManager onLocaleChanged={setLocale} />
      </Suspense>
      <PageComponent
        {...usePageState({
          locale,
          onLocaleUpdated,
          onRedirect,
          onUpload,
        })}
      />
    </>
  );
}
