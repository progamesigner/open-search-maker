import type { UseTextInputState } from './TextInput+State';

export function TextInputComponent({
  type = 'text',
  className,
  label,
  ...props
}: UseTextInputState): JSX.Element {
  return (
    <label className="flex flex-col gap-1">
      {label ? <span className="font-semibold">{label}</span> : null}
      <input
        className={`rounded text-gray-600 dark:text-gray-300 bg-gray-300 dark:bg-gray-600 disabled:opacity-30 transition-opacity p-2 ${className}`}
        type={type}
        {...props}
      />
    </label>
  );
}
