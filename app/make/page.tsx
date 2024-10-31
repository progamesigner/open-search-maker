'use client';

import { default as Link } from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';
import { type UsePageState, default as usePageState } from './state';

export default function Page(): JSX.Element {
  return (
    <>
      <Suspense>
        <OpenSearchManager />
      </Suspense>
      <PageComponent {...usePageState()} />
    </>
  );
}

function OpenSearchManager(): JSX.Element {
  const searchParams = useSearchParams();

  useEffect(() => {
    const name = searchParams.get('n');
    const url = searchParams.get('u');

    if (name !== null && url !== null) {
      const element = document.createElement('link');
      element.rel = 'search';
      element.type = 'application/opensearchdescription+xml';
      element.title = name;
      element.href = url;
      document.head.append(element);
      return () => element.remove();
    }
  }, [searchParams]);

  return <></>;
}

function PageComponent(_: UsePageState): JSX.Element {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-3xl font-bold text-center">Open Search Maker</h1>
      <Link
        className="flex bg-indigo-600 hover:bg-indigo-500 rounded shadow ms-auto px-2 py-1.5"
        href="/"
      >
        Back
      </Link>
    </div>
  );
}
