import type { UseButtonState } from './Button+State';

export function ButtonComponent({
  className = '',
  type = 'button',
  children,
  ...props
}: UseButtonState): JSX.Element {
  return (
    <button
      type={type}
      className={`block cursor-pointer rounded bg-blue-500 px-4 py-2 font-semibold text-gray-100 shadow transition-colors hover:bg-blue-400 dark:bg-blue-600 dark:hover:bg-blue-700 ${className} disabled:cursor-default disabled:opacity-70 disabled:hover:bg-blue-500 dark:disabled:hover:bg-blue-600`}
      {...props}
    >
      {children}
    </button>
  );
}
