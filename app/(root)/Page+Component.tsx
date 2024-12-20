import { useMemo } from 'react';
import { default as Button } from '../../components/Button/Button';
import ImageInput from '../../components/ImageInput/ImageInput';
import { default as TextInput } from '../../components/TextInput/TextInput';
import Toggle from '../../components/Toggle/Toggle';
import { default as XMLPreview } from '../../components/XMLPreview/XMLPreview';
import { ErrorDialog } from './ErrorDialog';
import type { UsePageState } from './Page+State';

export function PageComponent({
  description,
  hasValidXML,
  image,
  inputEncoding,
  isUploaded,
  isUploading,
  name,
  onDescriptionChanged,
  onDialogCloseClicked,
  onImageChanged,
  onImageFileChanged,
  onInputEncodingChanged,
  onNameChanged,
  onParamsChanged,
  onShowAdvancedOptionsChanged,
  onSubmitted,
  onSuggestionURLChanged,
  onURLBlur,
  onURLChanged,
  onUsePostMethodChanged,
  params,
  showAdvancedOptions,
  suggestionURL,
  uploadError,
  url,
  usePostMethod,
  xml,
}: UsePageState): JSX.Element {
  const submitButtonText = useMemo<string>(
    () => (isUploading || isUploaded ? 'Making ...' : 'Make'),
    [isUploading, isUploaded],
  );

  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row">
        <XMLPreview
          className="order-3 flex-grow overflow-x-hidden md:order-1 md:basis-0"
          xml={hasValidXML ? xml : null}
        />
        <div className="order-2 border border-gray-300 dark:border-gray-700" />
        <div className="order-1 flex-grow basis-0 md:order-3">
          <form className="flex flex-col gap-4" onSubmit={onSubmitted}>
            <div>
              <Toggle
                checked={showAdvancedOptions}
                onChange={onShowAdvancedOptionsChanged}
              >
                <p>Show advanced options</p>
              </Toggle>
            </div>

            <div>
              <TextInput
                label="Name"
                maxLength={16}
                name="name"
                placeholder="Example Search"
                required
                value={name}
                onChange={onNameChanged}
              />
            </div>

            {showAdvancedOptions ? (
              <div>
                <TextInput
                  label="Description"
                  maxLength={1024}
                  value={description}
                  onChange={onDescriptionChanged}
                />
              </div>
            ) : null}

            <div className="flex flex-col gap-1">
              <TextInput
                type="url"
                label="Search URL"
                name="url"
                placeholder="https://example.org/search?q=%s"
                required
                value={url}
                onBlur={onURLBlur}
                onChange={onURLChanged}
              />
              <p className="text-gray-500 dark:text-gray-400">
                The variable <span className="font-bold">%s</span> will be
                substituted with query
                <code className="mx-1 text-red-700 dark:text-red-300">
                  &#123;searchTerms&#125;
                </code>
                .
              </p>
            </div>

            {showAdvancedOptions ? (
              <div className="ms-4">
                <Toggle
                  checked={usePostMethod}
                  onChange={onUsePostMethodChanged}
                >
                  <span>
                    Use
                    <code className="mx-1 text-red-700 dark:text-red-300">
                      POST
                    </code>
                    query parameters
                  </span>
                </Toggle>
              </div>
            ) : null}

            {showAdvancedOptions ? (
              <div className="ms-4">
                <TextInput
                  placeholder="q=%s&param=value"
                  disabled={!usePostMethod}
                  value={params}
                  onChange={onParamsChanged}
                />
              </div>
            ) : null}

            <div className="flex flex-col gap-1">
              <ImageInput
                label="Icon"
                required
                value={image}
                onChange={onImageChanged}
                onFileChanged={onImageFileChanged}
              />
              <p className="text-gray-500 dark:text-gray-400">
                Icon should be at least 16&#215;16 pixels -
                <a
                  className="mx-1 text-blue-500 dark:text-blue-400"
                  href="https://developer.mozilla.org/docs/Web/URI/Schemes/data"
                  target="_blank"
                  rel="noreferrer"
                >
                  Data URLs
                </a>
                are also accepted here.
              </p>
            </div>

            {showAdvancedOptions ? (
              <div>
                <TextInput
                  label="Input Encoding"
                  value={inputEncoding}
                  onChange={onInputEncodingChanged}
                />
              </div>
            ) : null}

            {showAdvancedOptions ? (
              <div className="flex flex-col gap-1">
                <TextInput
                  type="url"
                  label="Suggestion URL"
                  placeholder="https://example.org/search?q=%s"
                  value={suggestionURL}
                  onChange={onSuggestionURLChanged}
                />
                <p className="text-gray-500 dark:text-gray-400">
                  <span className="font-bold">%s</span> will be substituted with
                  the entered search query (
                  <code className="text-red-700 dark:text-red-300">
                    &#123;searchTerms&#125;
                  </code>
                  ) and will be
                  <code className="mx-1 text-red-700 dark:text-red-300">
                    application/x-suggestions+json
                  </code>
                  type URL.
                </p>
              </div>
            ) : null}

            <div className="flex">
              <Button type="submit" className="ms-auto" disabled={!hasValidXML}>
                {submitButtonText}
              </Button>
            </div>
          </form>
        </div>
      </div>
      <ErrorDialog
        message={uploadError?.message}
        open={uploadError !== null}
        onClosed={onDialogCloseClicked}
      />
    </>
  );
}
