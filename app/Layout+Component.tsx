import type { JSX, PropsWithChildren } from 'react';
import { Localized } from '../context/localization';

export function LayoutComponent({ children }: PropsWithChildren): JSX.Element {
  return (
    <>
      <header className="mt-16 text-center">
        <h1 className="font-bold text-4xl">
          <Localized id="title">Open Search Maker</Localized>
        </h1>
      </header>
      <main className="mt-16">{children}</main>
      <footer className="mt-auto flex justify-center p-4">
        <Localized
          id="footer"
          elems={{
            author: (
              <a
                className="text-blue-700 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-400"
                href="https://progamesigner.com"
              >
                author
              </a>
            ),
            heart: <span className="text-red-700" />,
          }}
          vars={{
            heart: '&hearts;',
          }}
        >
          <span>Made with &hearts; by progamesigner</span>
        </Localized>
      </footer>
    </>
  );
}
