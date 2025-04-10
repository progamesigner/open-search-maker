import type { Metadata } from 'next';
import type { JSX, PropsWithChildren } from 'react';
import { FormProvider } from '../context/form';
import { LocalizationProvider } from '../context/localization';
import { LayoutComponent } from './Layout+Component';

import './index.css';

export const metadata: Metadata = {
  title: 'Open Search Maker',
  description:
    'A simple tool to easily add custom search engines to browsers that support OpenSearch.',
};

export default function Layout({ children }: PropsWithChildren): JSX.Element {
  return (
    <html lang="en">
      <body className="mx-auto flex h-[100vh] w-full max-w-[1280px] flex-col bg-gray-100 px-8 text-gray-700 dark:bg-gray-900 dark:text-gray-300">
        <LocalizationProvider>
          <FormProvider>
            <LayoutComponent>{children}</LayoutComponent>
          </FormProvider>
        </LocalizationProvider>
      </body>
    </html>
  );
}
