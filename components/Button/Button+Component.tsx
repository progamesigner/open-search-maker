import type { UseButtonState } from './Button+State';

export function ButtonComponent({
  className = '',
  type = 'button',
  children,
  ...props
}: UseButtonState): JSX.Element {
  return (
    <button
      className={`block rounded font-semibold text-gray-100 bg-blue-600 hover:bg-blue-500 shadow cursor-pointer transition-colors px-4 py-2 ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
