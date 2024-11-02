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
      {label ? <span className="font-semibold">{label}</span> : null}
      <div className="flex">
        <div className="relative aspect-square rounded-s text-gray-300 dark:text-gray-600 bg-gray-600 dark:bg-gray-300">
          <div className="absolute inset-1">
            {value !== null && value !== '' ? (
              <img className="object-cover w-full h-full" src={value} alt="" />
            ) : (
              <div className="flex justify-center items-center w-full h-full">
                ?
              </div>
            )}
          </div>
        </div>
        <input
          type="text"
          className={`flex-grow text-gray-600 dark:text-gray-300 bg-gray-300 dark:bg-gray-600 disabled:opacity-30 transition-opacity p-2 ${className}`}
          required={required}
          value={value ?? ''}
          {...props}
        />
        <label className="flex justify-center items-center cursor-pointer rounded-e text-gray-300 dark:text-gray-600 bg-gray-600 dark:bg-gray-300 hover:bg-gray-500 dark:hover:bg-gray-400 transition-colors">
          <input className="hidden" type="file" onChange={onFileChanged} />
          <div className="p-2">Browser</div>
        </label>
      </div>
    </label>
  );
}
