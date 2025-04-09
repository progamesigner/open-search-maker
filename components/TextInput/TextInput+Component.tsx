import type { JSX } from 'react';
import type { UseTextInputState } from './TextInput+State';

export function TextInputComponent({
  type = 'text',
  className,
  label,
  required,
  ...props
}: UseTextInputState): JSX.Element {
  return (
    <label className="flex flex-col gap-1">
      {label ? (
        <span className="font-semibold">
          {label}
          {required ? <span className="ms-1 text-red-700">&#42;</span> : null}
        </span>
      ) : null}
      <input
        type={type}
        className={`rounded-sm bg-gray-300 p-2 text-gray-600 transition-all hover:bg-gray-200 disabled:opacity-30 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 ${className} outline-hidden`}
        required={required}
        {...props}
      />
    </label>
  );
}
