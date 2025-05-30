import React from "react";

export interface DollarInputProps {
    name: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    label?: string;
    placeholder?: string;
}

/**
 * A controlled dollar-amount input with a leading '$' prefix.
 * Supports comma separators and up to two decimals.
 * Pattern allows optional leading '$'.
 */
export const DollarInput: React.FC<DollarInputProps> = ({
    name,
    value,
    onChange,
    label = "Amount",
    placeholder = "0.00",
}) => (
    <div className="flex flex-col">
        <label
            htmlFor={name}
            className="mb-1 text-sm font-medium text-gray-900"
        >
            {label}
        </label>
        <div className="relative">
            <input
                id={name}
                name={name}
                type="text"
                inputMode="decimal"
                pattern="^\\$?\\d{1,3}(?:,\\d{3})*(?:\\.\\d{0,2})?$"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-rose-600 sm:text-sm/6"
                required
            />
        </div>
    </div>
);
