import type { UseToggleState } from './Toggle+State';

export function ToggleComponent({
  children,
  className,
  checked,
  ...props
}: UseToggleState): JSX.Element {
  return (
    <div className='flex items-center gap-2'>
      <label className='relative inline-block h-8 w-16 cursor-pointer rounded-full bg-gray-300 transition-colors hover:bg-gray-200 has-[:checked]:bg-blue-400 hover:has-[:checked]:bg-blue-300 dark:bg-gray-600 dark:has-[:checked]:bg-blue-700 dark:hover:bg-gray-700 hover:dark:has-[:checked]:bg-blue-800'>
        <input
          type="checkbox"
          className="peer sr-only"
          checked={checked}
          {...props}
        />
        <span className='absolute start-0 m-1 size-6 rounded-full bg-gray-600 transition-all peer-checked:start-8 peer-checked:bg-gray-100 dark:bg-gray-300' />
      </label>
      <span className="inline-block">{children}</span>
    </div>
  );
}
