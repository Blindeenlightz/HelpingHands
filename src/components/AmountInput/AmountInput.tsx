import { AmountInputProps } from "./AmountInput.types";

export const AmountInput: React.FC<AmountInputProps> = ({
    name,
    value,
    onChange,
}) => {
    return (
        <div>
            <label
                htmlFor="price"
                className="block text-sm/6 font-medium text-gray-900"
            >
                Price
            </label>
            <div className="mt-2">
                <div className="flex items-center rounded-md bg-white px-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-rose-600">
                    <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                        $
                    </div>
                    <input
                        id={name}
                        name={name}
                        value={value}
                        type="text"
                        onChange={onChange}
                        placeholder="0.00"
                        required
                        aria-describedby="price-currency"
                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                    <div
                        id="price-currency"
                        className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"
                    >
                        USD
                    </div>
                </div>
            </div>
        </div>
    );
};
