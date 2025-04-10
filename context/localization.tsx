'use client';

import { FluentBundle, FluentResource } from '@fluent/bundle';
import { negotiateLanguages } from '@fluent/langneg';
import {
  Localized as FluentLocalized,
  LocalizationProvider as FluentProvider,
  type LocalizedProps,
  ReactLocalization,
} from '@fluent/react';
import { type JSX, type PropsWithChildren, useEffect, useState } from 'react';
import locale_EN_US from '../locales/en-US.ftl';
import locale_ZH_HANS from '../locales/zh-Hans.ftl';
import locale_ZH_HANT from '../locales/zh-Hant.ftl';

enum Locale {
  EN_US = 'en-US',
  ZH_HANT = 'zh-Hant',
  ZH_HANS = 'zh-Hans',
}

const LOCALES = [Locale.EN_US, Locale.ZH_HANT, Locale.ZH_HANS];
const RESOURCES = {
  [Locale.EN_US]: [new FluentResource(locale_EN_US)],
  [Locale.ZH_HANT]: [new FluentResource(locale_ZH_HANT)],
  [Locale.ZH_HANS]: [new FluentResource(locale_ZH_HANS)],
} as const;

function loadFluentBundle<T extends Locale>(locale: T): FluentBundle {
  const bundle = new FluentBundle(locale);
  for (const resource of RESOURCES[locale]) {
    bundle.addResource(resource);
  }
  return bundle;
}

function* generateBundles(locales: string[]): Generator<FluentBundle> {
  yield* locales.map((locale) => locale as Locale).map(loadFluentBundle);
}

export function LocalizationProvider({
  children,
  ...props
}: PropsWithChildren): JSX.Element {
  const [localization, setLocalization] = useState<ReactLocalization>(
    new ReactLocalization(generateBundles([Locale.EN_US]), null),
  );

  useEffect(() => {
    const locales = negotiateLanguages(window.navigator.languages, LOCALES, {
      defaultLocale: Locale.EN_US,
    });
    setLocalization(new ReactLocalization(generateBundles(locales)));
  }, []);

  return (
    <FluentProvider l10n={localization} {...props}>
      {children}
    </FluentProvider>
  );
}

export function Localized({ children, ...props }: LocalizedProps): JSX.Element {
  return <FluentLocalized {...props}>{children}</FluentLocalized>;
}
