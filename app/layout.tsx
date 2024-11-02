import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

import { FormProvider } from '../context/form';

import './index.css';

export const metadata: Metadata = {
  title: 'Open Search Maker',
  description:
    'A simple tool to easily add custom search engines to browsers that support OpenSearch.',
};

export default function Layout({ children }: PropsWithChildren): JSX.Element {
  return (
    <html lang="en">
      <body className="flex flex-col text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-900 w-full max-w-[1280px] h-[100vh] mx-auto px-8">
        <header className="text-center mt-16">
          <h1 className="text-6xl font-bold">Open Search Maker</h1>
        </header>
        <main className="mt-16">
          <FormProvider>{children}</FormProvider>
        </main>
        <footer className="flex justify-center mt-auto p-4">
          <p>
            Made with <span className="text-red-600">&hearts;</span> by{' '}
            <a className="text-blue-600" href="https://progamesigner.com">
              progamesigner
            </a>
            .
          </p>
        </footer>
      </body>
    </html>
  );
}
