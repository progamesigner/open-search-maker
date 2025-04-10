import type { JSX } from 'react';
import { default as Button } from '../../components/Button/Button';
import ImageInput from '../../components/ImageInput/ImageInput';
import { default as TextInput } from '../../components/TextInput/TextInput';
import Toggle from '../../components/Toggle/Toggle';
import { default as XMLPreview } from '../../components/XMLPreview/XMLPreview';
import { Localized } from '../../context/localization';
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
  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row">
        <Localized id="xml-preview" attrs={{ message: true, tab: true }}>
          <XMLPreview
            className="order-3 grow overflow-x-hidden md:order-1 md:basis-0"
            message="Name &amp; valid URLs are required."
            tab="Open Search XML"
            xml={hasValidXML ? xml : null}
          />
        </Localized>
        <div className="order-2 border border-gray-300 dark:border-gray-700" />
        <div className="order-1 grow basis-0 md:order-3">
          <form className="flex flex-col gap-4" onSubmit={onSubmitted}>
            <div>
              <Toggle
                checked={showAdvancedOptions}
                onChange={onShowAdvancedOptionsChanged}
              >
                <p>
                  <Localized id="control-show-advanced-options">
                    Show advanced options
                  </Localized>
                </p>
              </Toggle>
            </div>

            <div>
              <Localized
                id="control-name-input"
                attrs={{ label: true, placeholder: true }}
              >
                <TextInput
                  label="Name"
                  maxLength={16}
                  name="name"
                  placeholder="Example Search"
                  required
                  value={name}
                  onChange={onNameChanged}
                />
              </Localized>
            </div>

            {showAdvancedOptions ? (
              <div>
                <Localized
                  id="control-description-input"
                  attrs={{ label: true }}
                >
                  <TextInput
                    label="Description"
                    maxLength={1024}
                    value={description}
                    onChange={onDescriptionChanged}
                  />
                </Localized>
              </div>
            ) : null}

            <div className="flex flex-col gap-1">
              <Localized id="control-url-input" attrs={{ label: true }}>
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
              </Localized>
              <p className="text-gray-500 dark:text-gray-400">
                <Localized
                  id="control-url-input-hint"
                  elems={{
                    name: (
                      <code className="text-red-700 dark:text-red-300">
                        &#123;searchTerms&#125;
                      </code>
                    ),
                    placeholder: <span className="font-bold">%s</span>,
                  }}
                >
                  <span>
                    The variable <strong>%s</strong> will be substituted with
                    query <code>&#123;searchTerms&#125;</code>.
                  </span>
                </Localized>
              </p>
            </div>

            {showAdvancedOptions ? (
              <div className="ms-4">
                <Toggle
                  checked={usePostMethod}
                  onChange={onUsePostMethodChanged}
                >
                  <span>
                    <Localized
                      id="control-post-input"
                      elems={{
                        code: (
                          <code className="text-red-700 dark:text-red-300">
                            POST
                          </code>
                        ),
                      }}
                    >
                      <span>
                        Use <code>POST</code> query parameters
                      </span>
                    </Localized>
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
              <Localized
                id="control-icon-input"
                attrs={{ browser: true, label: true }}
              >
                <ImageInput
                  browser="Browser"
                  label="Icon"
                  required
                  value={image}
                  onChange={onImageChanged}
                  onFileChanged={onImageFileChanged}
                />
              </Localized>
              <p className="text-gray-500 dark:text-gray-400">
                <Localized
                  id="control-icon-input-hint"
                  elems={{
                    hyperlink: (
                      <a
                        className="text-blue-500 dark:text-blue-400"
                        href="https://developer.mozilla.org/docs/Web/URI/Schemes/data"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Data URLs
                      </a>
                    ),
                  }}
                  vars={{ size: 16 }}
                >
                  <span>
                    Icon should be at least 16&#215;16 pixels - Data URLs are
                    also accepted here.
                  </span>
                </Localized>
              </p>
            </div>

            {showAdvancedOptions ? (
              <div>
                <Localized id="control-encoding-input" attrs={{ label: true }}>
                  <TextInput
                    label="Input Encoding"
                    value={inputEncoding}
                    onChange={onInputEncodingChanged}
                  />
                </Localized>
              </div>
            ) : null}

            {showAdvancedOptions ? (
              <div className="flex flex-col gap-1">
                <Localized
                  id="control-suggestion-url-input"
                  attrs={{ label: true }}
                >
                  <TextInput
                    type="url"
                    label="Suggestion URL"
                    placeholder="https://example.org/search?q=%s"
                    value={suggestionURL}
                    onChange={onSuggestionURLChanged}
                  />
                </Localized>
                <p className="text-gray-500 dark:text-gray-400">
                  <Localized
                    id="control-suggestion-url-input-hint"
                    elems={{
                      code: (
                        <code className="text-red-700 dark:text-red-300">
                          _
                        </code>
                      ),
                      placeholder: <span className="font-bold">%s</span>,
                    }}
                  >
                    <span>
                      <strong>%s</strong> will be substituted with the entered
                      search query (<code>&#123;searchTerms&#125;</code>) and
                      will be <code>application/x-suggestions+json</code> type
                      URL.
                    </span>
                  </Localized>
                </p>
              </div>
            ) : null}

            <div className="flex">
              <Button type="submit" className="ms-auto" disabled={!hasValidXML}>
                <Localized
                  id="button-submit"
                  vars={{ status: isUploading || isUploaded ? 'pending' : '' }}
                >
                  Make
                </Localized>
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
