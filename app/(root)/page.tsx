'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import {
  type UsePageState,
  type UsePageStateProps,
  default as usePageState,
} from './state';

export default function Page(): JSX.Element {
  const router = useRouter();

  const onRedirect = useCallback<UsePageStateProps['onRedirect']>(
    (name: string, url: string): void => {
      const params = new URLSearchParams();
      params.append('n', name);
      params.append('u', url);
      router.push(`/make?${params.toString()}`);
    },
    [router],
  );

  const onUpload = useCallback<UsePageStateProps['onUpload']>(
    async (content: string): Promise<string> => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_DPASTE_API}`, {
        method: 'POST',
        body: new URLSearchParams({
          content,
          format: 'json',
          expires: 'onetime',
          lexer: 'xml',
        }),
      });
      const json = await response.json();
      return `${json.url}/raw`;
    },
    [],
  );

  return <PageComponent {...usePageState({ onRedirect, onUpload })} />;
}

function PageComponent({
  description,
  hasImage,
  hasValidXML,
  image,
  inputEncoding,
  name,
  onDescriptionChanged,
  onImageChanged,
  onImageFileChanged,
  onInputEncodingChanged,
  onNameChanged,
  onParamsChanged,
  onSubmitted,
  onSuggestionURLChanged,
  onURLChanged,
  onUsePostMethodChanged,
  params,
  suggestionURL,
  url,
  usePostMethod,
  xml,
}: UsePageState): JSX.Element {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-3xl font-bold text-center">Open Search Maker</h1>
      <div className="flex flex-row gap-4">
        <div className="basis-0 flex-grow">
          <form
            className="flex flex-col gap-4"
            action="#"
            method="POST"
            onSubmit={onSubmitted}
          >
            <div>
              <label className="flex flex-col gap-1">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  maxLength={16}
                  placeholder="Example Search"
                  required
                  value={name}
                  onChange={onNameChanged}
                />
              </label>
            </div>

            <div>
              <label className="flex flex-col gap-1">
                <span>Description</span>
                <input
                  type="text"
                  name="description"
                  maxLength={1024}
                  value={description}
                  onChange={onDescriptionChanged}
                />
              </label>
            </div>

            <div>
              <label className="flex flex-col gap-1">
                <span>Search URL</span>
                <input
                  type="text"
                  name="url"
                  placeholder="https://example.org/search?q=%s"
                  required
                  value={url}
                  onChange={onURLChanged}
                />
              </label>
              <p className="text-gray-700">
                <b>%s</b> is substituted with the entered search query
              </p>
            </div>

            <div>
              <label className="flex flex-col gap-1">
                <input
                  type="checkbox"
                  name="post"
                  value={usePostMethod ? '1' : '0'}
                  onChange={onUsePostMethodChanged}
                />
                <span>
                  Use <code>POST</code> query parameters
                </span>
                <input
                  type="text"
                  name="params"
                  placeholder="q=%s&param=value"
                  disabled={!usePostMethod}
                  value={params}
                  onChange={onParamsChanged}
                />
              </label>
            </div>

            <div>
              {hasImage ? (
                <img className="w-8 h-8" src={image} alt="Icon" />
              ) : (
                <div className="bg-slate-300 rounded w-8 h-8" />
              )}
              <label className="flex flex-col gap-1">
                <span>Icon</span>
                <input
                  type="text"
                  name="icon"
                  value={image}
                  onChange={onImageChanged}
                />
              </label>
              <label>
                <input type="file" onChange={onImageFileChanged} />
              </label>
            </div>

            <div>
              <label className="flex flex-col gap-1">
                <span>Input Encoding</span>
                <input
                  type="text"
                  name="url"
                  placeholder="UTF-8"
                  value={inputEncoding}
                  onChange={onInputEncodingChanged}
                />
              </label>
            </div>

            <div>
              <label className="flex flex-col gap-1">
                <span>Suggestion URL</span>
                <input
                  type="text"
                  name="suggestion"
                  placeholder="https://example.org/search?q=%s"
                  value={suggestionURL}
                  onChange={onSuggestionURLChanged}
                />
              </label>
              <p className="text-gray-700">
                <b>%s</b> is substituted with the entered search query
              </p>
            </div>

            <div>
              <button
                type="submit"
                className="flex bg-indigo-600 hover:bg-indigo-500 rounded shadow ms-auto px-2 py-1.5"
              >
                Make
              </button>
            </div>
          </form>
        </div>
        <div className="basis-0 flex-grow">
          {hasValidXML ? (
            <pre className="text-wrap">{xml}</pre>
          ) : (
            <p>Name &amp; URL are required.</p>
          )}
        </div>
      </div>
    </div>
  );
}
