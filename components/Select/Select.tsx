import type { JSX } from 'react';
import { SelectComponent } from './Select+Component';
import { type SelectProps, useSelectState } from './Select+State';

export default function Select(props: SelectProps): JSX.Element {
  return <SelectComponent {...useSelectState(props)} />;
}
