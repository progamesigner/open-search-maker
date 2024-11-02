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
      {label ? <span className="font-semibold">{label}</span> : null}
      <input
        type={type}
        className={`rounded text-gray-600 dark:text-gray-300 bg-gray-300 dark:bg-gray-600 hover:bg-gray-200 hover:dark:bg-gray-700 disabled:opacity-30 transition-all p-2 ${className}`}
        required={required}
        {...props}
      />
    </label>
  );
}
