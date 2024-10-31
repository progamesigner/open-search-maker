import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

import './index.css';

export const metadata: Metadata = {
  title: 'Open Search Maker',
  description:
    'A simple tool to easily add custom search engines to browsers that support OpenSearch.',
};

export default function Layout({ children }: PropsWithChildren): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
