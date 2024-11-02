import {
  type ChangeEventHandler,
  type FormEventHandler,
  type MouseEventHandler,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { FormContext } from '../../context/form';
import { useOpenSearchDescription } from '../../lib/openSearch';

export interface UsePageStateProps {
  onRedirect: (name: string, url: string) => void;
  onUpload: (content: string) => Promise<string>;
}

export interface UsePageState {
  description: string;
  hasValidXML: boolean;
  image: string;
  inputEncoding: string;
  isUploaded: boolean;
  isUploading: boolean;
  name: string;
  onDescriptionChanged: ChangeEventHandler<HTMLInputElement>;
  onDialogCloseClicked: MouseEventHandler<HTMLButtonElement>;
  onImageChanged: ChangeEventHandler<HTMLInputElement>;
  onImageFileChanged: ChangeEventHandler<HTMLInputElement>;
  onInputEncodingChanged: ChangeEventHandler<HTMLInputElement>;
  onNameChanged: ChangeEventHandler<HTMLInputElement>;
  onParamsChanged: ChangeEventHandler<HTMLInputElement>;
  onShowAdvancedOptionsChanged: ChangeEventHandler<HTMLInputElement>;
  onSubmitted: FormEventHandler<HTMLFormElement>;
  onSuggestionURLChanged: ChangeEventHandler<HTMLInputElement>;
  onURLChanged: ChangeEventHandler<HTMLInputElement>;
  onUsePostMethodChanged: ChangeEventHandler<HTMLInputElement>;
  params: string;
  showAdvancedOptions: boolean;
  suggestionURL: string;
  uploadError: Error | null;
  url: string;
  usePostMethod: boolean;
  xml: string | null;
}

function isValidURL(url: string | null): boolean {
  try {
    if (url !== null) {
      new URL(url);
    }
    return true;
  } catch (error) {
    return false;
  }
}

export function usePageState({
  onRedirect,
  onUpload,
}: UsePageStateProps): UsePageState {
  const {
    description,
    image,
    inputEncoding,
    name,
    params,
    setDescription,
    setImage,
    setInputEncoding,
    setName,
    setParams,
    setShowAdvancedOptions,
    setSuggestionURL,
    setURL,
    setUsePostMethod,
    showAdvancedOptions,
    suggestionURL,
    url,
    usePostMethod,
  } = useContext(FormContext);

  const [isUploaded, setIsUploaded] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadError, setUploadError] = useState<Error | null>(null);

  const isValidXML = useMemo(() => {
    try {
      return (
        name !== null &&
        url !== null &&
        isValidURL(url) &&
        isValidURL(suggestionURL)
      );
    } catch (error) {
      return false;
    }
  }, [name, url, suggestionURL]);

  const xml = useOpenSearchDescription({
    description,
    image,
    inputEncoding,
    name: name ?? '',
    params,
    suggestionURL,
    url: url ?? '',
  });

  const upload = useCallback<(content: string) => Promise<void>>(
    async (content: string): Promise<void> => {
      setIsUploaded(false);
      setIsUploading(true);

      try {
        const url = await onUpload(content);
        onRedirect(name ?? '', url);
        setIsUploaded(true);
      } catch (error) {
        if (error instanceof Error) {
          setUploadError(error);
        } else {
          setUploadError(new Error(String(error)));
        }
      } finally {
        setIsUploading(false);
      }
    },
    [name, onRedirect, onUpload],
  );

  const onDescriptionChanged = useCallback<
    ChangeEventHandler<HTMLInputElement>
  >(
    ({ target: { value } }): void =>
      setDescription(value !== '' ? value : null),
    [setDescription],
  );

  const onDialogCloseClicked = useCallback<
    MouseEventHandler<HTMLButtonElement>
  >((event): void => {
    setIsUploaded(false);
    setIsUploading(false);
    setUploadError(null);

    event.preventDefault();
  }, []);

  const onImageChanged = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target: { value } }): void => setImage(value !== '' ? value : null),
    [setImage],
  );

  const onImageFileChanged = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target: { files } }): void => {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        if (reader.result !== null) {
          setImage(reader.result.toString());
        }
      });
      if (files !== null && files[0] !== null) {
        reader.readAsDataURL(files[0]);
      }
    },
    [setImage],
  );

  const onInputEncodingChanged = useCallback<
    ChangeEventHandler<HTMLInputElement>
  >(
    ({ target: { value } }): void =>
      setInputEncoding(value !== '' ? value : 'UTF-8'),
    [setInputEncoding],
  );

  const onNameChanged = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target: { value } }): void => setName(value !== '' ? value : null),
    [setName],
  );

  const onParamsChanged = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target: { value } }): void => setParams(value !== '' ? value : null),
    [setParams],
  );

  const onShowAdvancedOptionsChanged = useCallback<
    ChangeEventHandler<HTMLInputElement>
  >(
    ({ target: { checked } }): void => {
      setShowAdvancedOptions(checked);
      if (!checked) {
        setDescription(null);
        setInputEncoding('UTF-8');
        setParams(null);
        setSuggestionURL(null);
        setUsePostMethod(false);
      }
    },
    [
      setDescription,
      setInputEncoding,
      setParams,
      setShowAdvancedOptions,
      setSuggestionURL,
      setUsePostMethod,
    ],
  );

  const onSubmitted = useCallback<FormEventHandler<HTMLFormElement>>(
    (event): void => {
      event.preventDefault();
      void upload(xml);
    },
    [upload, xml],
  );

  const onSuggestionURLChanged = useCallback<
    ChangeEventHandler<HTMLInputElement>
  >(
    ({ target: { value } }): void =>
      setSuggestionURL(value !== '' ? value : null),
    [setSuggestionURL],
  );

  const onURLChanged = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target: { value } }): void => {
      try {
        const url = new URL(value);
        setImage((image) => {
          if (image === null) {
            return `${url.origin}/favicon.ico`;
          }
          return image;
        });
      } catch (error) {
        // note: do nothing here
      } finally {
        setURL(value !== '' ? value : null);
      }
    },
    [setImage, setURL],
  );

  const onUsePostMethodChanged = useCallback<
    ChangeEventHandler<HTMLInputElement>
  >(
    ({ target: { checked } }): void => {
      setUsePostMethod(checked);
      setParams(null);
    },
    [setParams, setUsePostMethod],
  );

  return {
    description: description ?? '',
    hasValidXML: isValidXML,
    image: image ?? '',
    inputEncoding,
    isUploaded,
    isUploading,
    name: name ?? '',
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
    onURLChanged,
    onUsePostMethodChanged,
    params: params ?? '',
    showAdvancedOptions,
    suggestionURL: suggestionURL ?? '',
    uploadError,
    url: url ?? '',
    usePostMethod,
    xml: isValidXML ? xml : null,
  };
}
