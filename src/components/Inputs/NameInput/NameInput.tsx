import { NameInputProps } from "./NameInput.types";

export const NameInput: React.FC<NameInputProps> = ({
    name,
    value,
    onChange,
}) => {
    return (
        <div className="flex flex-col">
            <label
                htmlFor={name}
                className="mb-2 text-sm font-medium"
            >
                Name
            </label>
            <input
                id={name}
                name={name}
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Anonymous"
                className="block w-full rounded-md px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-rose-600 sm:text-sm/6"
            />
        </div>
    );
};
