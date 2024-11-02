import { ToggleComponent } from './Toggle+Component';
import { type ToggleProps, useToggleState } from './Toggle+State';

export default function Toggle(props: ToggleProps): JSX.Element {
  return <ToggleComponent {...useToggleState(props)} />;
}
