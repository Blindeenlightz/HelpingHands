import { DollarInputProps } from "./DollarInput.types";

/**
 * A controlled dollar-amount input with a leading '$' prefix.
 * Uses inputMode="decimal" and a simple regex pattern to allow up to two decimals.
 */
export const DollarInput: React.FC<DollarInputProps> = ({
    name,
    value,
    onChange,
    label = "Amount",
    placeholder = "0.00",
}) => (
    <div>
        <label
            htmlFor={name}
            className="block text-sm/6 font-medium text-gray-900"
        >
            {label}
        </label>
        <div className="mt-2">
            <input
                id={name}
                name={name}
                type="text"
                inputMode="decimal"
                pattern="^\\d*(\\.\\d{0,2})?$"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-rose-600 sm:text-sm/6"
                required
            />
        </div>
    </div>
);
