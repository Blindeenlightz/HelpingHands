import { NameInputProps } from "./NameInput.types";

export const NameInput: React.FC<NameInputProps> = ({name, value, onChange}) => {
    
    return (
        <div className="relative">
            <label
                htmlFor={name}
                className="absolute -top-2 left-2 inline-block rounded-lg bg-white px-1 text-xs font-medium text-gray-900"
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
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-rose-600 sm:text-sm/6"
            />
        </div>
    );
};