import { ImageInputComponent } from './ImageInput+Component';
import { type ImageInputProps, useImageInputState } from './ImageInput+State';

export default function ImageInput(props: ImageInputProps): JSX.Element {
  return <ImageInputComponent {...useImageInputState(props)} />;
}
