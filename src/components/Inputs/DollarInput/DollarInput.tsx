import React from "react";
import { DollarInputProps } from "./DollarInput.types";

export const DollarInput: React.FC<DollarInputProps> = ({
    name,
    value,
    onChange,
    label = "Amount",
    placeholder = "0.00",
    currency = "USD",
}) => (
    <div>
        <label htmlFor={name} className="mb-2 text-sm font-medium">
            {label}
        </label>
        <div className="mt-2">
            <div className="flex items-center rounded-md px-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-rose-600">
                <input
                    id={name}
                    name={name}
                    type="text"
                    inputMode="decimal"
                    pattern="^\\$?\\d{1,3}(?:,\\d{3})*(?:\\.\\d{0,2})?$"
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base focus:outline-none sm:text-sm/6"
                    required
                />
                <div
                    id="price-currency"
                    className="shrink-0 text-base select-none sm:text-sm/6"
                >
                    {currency}
                </div>
            </div>
        </div>
    </div>
);
