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
      <body className="mx-auto flex h-[100vh] w-full max-w-[1280px] flex-col bg-gray-100 px-8 text-gray-700 dark:bg-gray-900 dark:text-gray-300">
        <header className="mt-16 text-center">
          <h1 className="font-bold text-4xl">Open Search Maker</h1>
        </header>
        <main className="mt-16">
          <FormProvider>{children}</FormProvider>
        </main>
        <footer className="mt-auto flex justify-center p-4">
          <p>
            Made with <span className="text-red-700">&hearts;</span> by
            <a
              className="mx-1 text-blue-700 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-400"
              href="https://progamesigner.com"
            >
              progamesigner
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
