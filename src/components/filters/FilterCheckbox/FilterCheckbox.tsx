import React from 'react';

interface FilterCheckboxProps {
  label: string;
  count?: number;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  label,
  count,
  checked,
  onChange
}) => {
  return (
    <label className="flex items-center space-x-3 cursor-pointer group">
      <div className="relative">
        <input
          type="checkbox"
          className="hidden"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <div className={`
          w-5 h-5 border-2 rounded
          transition-colors duration-200
          flex items-center justify-center
          ${checked 
            ? 'border-[--color-text-green] bg-[--color-text-green]' 
            : 'border-gray-300 dark:border-gray-600'
          }
          group-hover:border-[--color-text-green]
        `}>
          {checked && (
            <svg 
              className="w-3 h-3 text-white" 
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 3L4.5 8.5L2 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
      <span className="text-sm text-gray-700 dark:text-gray-300">
        {label}
        {count !== undefined && (
          <span className="text-gray-400 dark:text-gray-500 ml-1">
            ({count})
          </span>
        )}
      </span>
    </label>
  );
};