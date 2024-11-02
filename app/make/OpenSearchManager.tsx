import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export interface OpenSearchManagerProps {
  onParsed: (name: string | null) => void;
}

export function OpenSearchManager({
  onParsed,
}: OpenSearchManagerProps): JSX.Element {
  const searchParams = useSearchParams();

  useEffect(() => {
    const name = searchParams.get('n');
    const url = searchParams.get('u');

    onParsed(name);

    if (name !== null && url !== null) {
      const element = document.createElement('link');
      element.rel = 'search';
      element.type = 'application/opensearchdescription+xml';
      element.title = name;
      element.href = url;
      document.head.append(element);
      return () => element.remove();
    }
  }, [onParsed, searchParams]);

  return <></>;
}
