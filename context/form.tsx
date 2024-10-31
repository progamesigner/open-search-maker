'use client';

import {
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  createContext,
  useMemo,
  useState,
} from 'react';

interface FormContextState {
  description: string | null;
  image: string | null;
  inputEncoding: string;
  name: string | null;
  params: string | null;
  setDescription: Dispatch<SetStateAction<string | null>>;
  setImage: Dispatch<SetStateAction<string | null>>;
  setInputEncoding: Dispatch<SetStateAction<string>>;
  setName: Dispatch<SetStateAction<string | null>>;
  setParams: Dispatch<SetStateAction<string | null>>;
  setSuggestionURL: Dispatch<SetStateAction<string | null>>;
  setURL: Dispatch<SetStateAction<string | null>>;
  setUsePostMethod: Dispatch<SetStateAction<boolean>>;
  suggestionURL: string | null;
  url: string | null;
  usePostMethod: boolean;
}

export const FormContext = createContext<FormContextState>({
  description: null,
  image: null,
  inputEncoding: 'UTF-8',
  name: null,
  params: null,
  setDescription: () => {},
  setImage: () => {},
  setInputEncoding: () => {},
  setName: () => {},
  setParams: () => {},
  setSuggestionURL: () => {},
  setURL: () => {},
  setUsePostMethod: () => {},
  suggestionURL: null,
  url: null,
  usePostMethod: false,
});

export function FormProvider({ children }: PropsWithChildren): JSX.Element {
  const [description, setDescription] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [inputEncoding, setInputEncoding] = useState<string>('UTF-8');
  const [name, setName] = useState<string | null>(null);
  const [params, setParams] = useState<string | null>(null);
  const [suggestionURL, setSuggestionURL] = useState<string | null>(null);
  const [url, setURL] = useState<string | null>(null);
  const [usePostMethod, setUsePostMethod] = useState<boolean>(false);

  const context = useMemo<FormContextState>(
    () => ({
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
      setSuggestionURL,
      setURL,
      setUsePostMethod,
      suggestionURL,
      url,
      usePostMethod,
    }),
    [
      description,
      image,
      inputEncoding,
      name,
      params,
      suggestionURL,
      url,
      usePostMethod,
    ],
  );

  return (
    <FormContext.Provider value={context}>{children}</FormContext.Provider>
  );
}
