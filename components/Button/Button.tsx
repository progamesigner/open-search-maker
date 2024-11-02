import { ButtonComponent } from './Button+Component';
import { type ButtonProps, useButtonState } from './Button+State';

export default function Button(props: ButtonProps): JSX.Element {
  return <ButtonComponent {...useButtonState(props)} />;
}
