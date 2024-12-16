import type { UseImageInputState } from './ImageInput+State';

export function ImageInputComponent({
  className,
  label,
  onFileChanged,
  required,
  value,
  ...props
}: UseImageInputState): JSX.Element {
  return (
    <label className="flex flex-col gap-1">
      {label ? (
        <span className="font-semibold">
          {label}
          {required ? <span className="ms-1 text-red-700">&#42;</span> : null}
        </span>
      ) : null}
      <div className="flex">
        <div className="relative aspect-square w-[2.5rem] shrink-0 rounded-s bg-gray-600 text-gray-300 dark:bg-gray-300 dark:text-gray-600">
          <div className="absolute inset-1">
            {value !== null && value !== '' ? (
              <img className="h-full w-full object-cover" src={value} alt="" />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                ?
              </div>
            )}
          </div>
        </div>
        <input
          type="text"
          className={`flex-grow bg-gray-300 p-2 text-gray-600 transition-opacity disabled:opacity-30 dark:bg-gray-600 dark:text-gray-300 ${className} rounded-none outline-none`}
          required={required}
          value={value ?? ''}
          {...props}
        />
        <label className="flex cursor-pointer items-center justify-center rounded-e bg-gray-600 text-gray-300 transition-colors hover:bg-gray-500 dark:bg-gray-300 dark:text-gray-600 dark:hover:bg-gray-400">
          <input className="hidden" type="file" onChange={onFileChanged} />
          <div className="p-2">Browser</div>
        </label>
      </div>
    </label>
  );
}
