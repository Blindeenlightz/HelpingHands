import {
    Label,
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/16/solid";
import { CheckIcon } from "@heroicons/react/20/solid";
import { frequencies } from "@/enums/Frequency";
import { FrequencyInputProps } from "./FrequencyInput.types";

export const FrequencyInput: React.FC<FrequencyInputProps> = ({
    value,
    onChange,
}) => {
    return (
        <Listbox value={value} onChange={onChange}>
            <Label className="text-sm font-medium">
                Donation Frequency
            </Label>

            <div className="relative mt-2">
                <ListboxButton className="cursor-pointer grid w-full grid-cols-1 rounded-md py-1.5 pr-2 pl-3 text-left outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-rose-600 sm:text-sm/6">
                    <span className="col-start-1 row-start-1 truncate pr-6">
                        {frequencies.find((f) => f.id === value)?.name ||
                            "Select…"}
                    </span>
                    <ChevronUpDownIcon
                        aria-hidden="true"
                        className="col-start-1 row-start-1 size-5 self-center justify-self-end sm:size-4"
                    />
                </ListboxButton>

                <ListboxOptions
                    transition
                    className="bg-[var(--color-cardBackground)] absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
                >
                    {frequencies.map((freq) => (
                        <ListboxOption
                            key={freq.id}
                            value={freq.id}
                            className="cursor-pointer group relative py-2 pr-9 pl-3 select-none data-focus:bg-rose-600 data-focus:text-white data-focus:outline-hidden"
                        >
                            <span className="block truncate font-normal group-data-selected:font-semibold">
                                {freq.name}
                            </span>

                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-rose-600 group-not-data-selected:hidden group-data-focus:text-white">
                                <CheckIcon
                                    aria-hidden="true"
                                    className="size-5"
                                />
                            </span>
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </div>
        </Listbox>
    );
};
