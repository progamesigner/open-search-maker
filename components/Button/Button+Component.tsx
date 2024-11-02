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
      className={`block rounded font-semibold text-gray-100 bg-blue-500 dark:bg-blue-600 hover:bg-blue-400 dark:hover:bg-blue-700 shadow cursor-pointer transition-colors px-4 py-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
