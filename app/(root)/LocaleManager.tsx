import { negotiateLanguages } from '@fluent/langneg';
import { useSearchParams } from 'next/navigation';
import { type JSX, useEffect } from 'react';
import { LOCALES, Locale } from '../../context/localization';

export interface LocaleManagerProps {
  onLocaleChanged: (locale: string) => void;
}

export function LocaleManager({
  onLocaleChanged,
}: LocaleManagerProps): JSX.Element {
  const searchParams = useSearchParams();

  useEffect(() => {
    const [locale] = negotiateLanguages(
      [searchParams.get('l') ?? '', ...window.navigator.languages],
      Object.keys(LOCALES),
      {
        defaultLocale: Locale.EN_US,
      },
    );
    onLocaleChanged(locale);
  }, [onLocaleChanged, searchParams]);

  return <></>;
}
