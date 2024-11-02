'use client';

import { useRouter } from 'next/navigation';
import { Suspense, useState } from 'react';
import { OpenSearchManager } from './OpenSearchManager';
import { PageComponent } from './Page+Component';
import { usePageState } from './Page+State';

export default function Page(): JSX.Element {
  const router = useRouter();

  const [name, setName] = useState<string | null>('');

  return (
    <>
      <Suspense>
        <OpenSearchManager onParsed={setName} />
      </Suspense>
      <PageComponent {...usePageState({ name, router })} />
    </>
  );
}
