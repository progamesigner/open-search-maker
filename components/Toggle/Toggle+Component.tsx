import type { UseToggleState } from './Toggle+State';

export function ToggleComponent({
  children,
  className,
  checked,
  ...props
}: UseToggleState): JSX.Element {
  return (
    <div className="flex gap-2 items-center">
      <label className="relative inline-block cursor-pointer rounded-full bg-gray-300 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 has-[:checked]:bg-blue-400 dark:has-[:checked]:bg-blue-700 hover:has-[:checked]:bg-blue-300 hover:dark:has-[:checked]:bg-blue-800 transition-colors h-8 w-16">
        <input
          type="checkbox"
          className="peer sr-only"
          checked={checked}
          {...props}
        />
        <span className="absolute start-0 m-1 size-6 rounded-full bg-gray-600 dark:bg-gray-300 peer-checked:bg-gray-100 transition-all peer-checked:start-8" />
      </label>
      <span className="inline-block">{children}</span>
    </div>
  );
}
