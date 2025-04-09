import type { JSX } from 'react';
import { TextInputComponent } from './TextInput+Component';
import { type TextInputProps, useTextInputState } from './TextInput+State';

export default function TextInput(props: TextInputProps): JSX.Element {
  return <TextInputComponent {...useTextInputState(props)} />;
}
