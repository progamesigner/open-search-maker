import {
  type ChangeEventHandler,
  type FormEventHandler,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { useOpenSearchDescription } from '../../lib/openSearch';

export interface UsePageStateProps {
  onRedirect: (name: string, url: string) => void;
  onUpload: (content: string) => Promise<string>;
}

export interface UsePageState {
  description: string;
  hasImage: boolean;
  hasValidXML: boolean;
  image: string;
  inputEncoding: string;
  name: string;
  onDescriptionChanged: ChangeEventHandler<HTMLInputElement>;
  onImageChanged: ChangeEventHandler<HTMLInputElement>;
  onImageFileChanged: ChangeEventHandler<HTMLInputElement>;
  onInputEncodingChanged: ChangeEventHandler<HTMLInputElement>;
  onNameChanged: ChangeEventHandler<HTMLInputElement>;
  onParamsChanged: ChangeEventHandler<HTMLInputElement>;
  onSubmitted: FormEventHandler<HTMLFormElement>;
  onSuggestionURLChanged: ChangeEventHandler<HTMLInputElement>;
  onURLChanged: ChangeEventHandler<HTMLInputElement>;
  onUsePostMethodChanged: ChangeEventHandler<HTMLInputElement>;
  params: string;
  suggestionURL: string;
  url: string;
  usePostMethod: boolean;
  xml: string | null;
}

export default function usePageState({
  onRedirect,
  onUpload,
}: UsePageStateProps): UsePageState {
  const [description, setDescription] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [inputEncoding, setInputEncoding] = useState<string>('UTF-8');
  const [name, setName] = useState<string | null>(null);
  const [params, setParams] = useState<string | null>(null);
  const [suggestionURL, setSuggestionURL] = useState<string | null>(null);
  const [url, setURL] = useState<string | null>(null);
  const [usePostMethod, setUsePostMethod] = useState<boolean>(false);

  const isValid = useMemo(() => name !== null && url !== null, [name, url]);

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
      try {
        const url = await onUpload(content);
        onRedirect(name ?? '', url);
      } catch (error) {
        console.error(error);
      }
    },
    [name, onRedirect, onUpload],
  );

  const onDescriptionChanged = useCallback<
    ChangeEventHandler<HTMLInputElement>
  >(
    ({ target: { value } }): void =>
      setDescription(value !== '' ? value : null),
    [],
  );

  const onImageChanged = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target: { value } }): void => setImage(value !== '' ? value : null),
    [],
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
    [],
  );

  const onInputEncodingChanged = useCallback<
    ChangeEventHandler<HTMLInputElement>
  >(
    ({ target: { value } }): void =>
      setInputEncoding(value !== '' ? value : 'UTF-8'),
    [],
  );

  const onNameChanged = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target: { value } }): void => setName(value !== '' ? value : null),
    [],
  );

  const onParamsChanged = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target: { value } }): void => setParams(value !== '' ? value : null),
    [],
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
    [],
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
    [],
  );

  const onUsePostMethodChanged = useCallback<
    ChangeEventHandler<HTMLInputElement>
  >(({ target: { checked } }): void => {
    setUsePostMethod(checked);
    setParams(null);
  }, []);

  return {
    description: description ?? '',
    hasImage: image !== null,
    hasValidXML: isValid,
    image: image ?? '',
    inputEncoding,
    name: name ?? '',
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
    params: params ?? '',
    suggestionURL: suggestionURL ?? '',
    url: url ?? '',
    usePostMethod,
    xml: isValid ? xml : null,
  };
}
