import React from "react";
import Image from "next/image";
import { CharityImageInputProps } from "./CharityImageInput.types";
import { PhotoIcon } from "@heroicons/react/24/outline";

/**
 * A file-picker component that shows a preview (using Next/Image) of either
 * the chosen file (`value`) or a default fallback (`defaultImage`).
 *
 * - `name` is used for the input’s id and name attributes.
 * - `value` is the current image URL (objectURL or saved URL).
 * - `defaultImage` is the fallback URL when `value` is empty.
 * - `onChange` is the file-input change handler.
 */
export function CharityImageInput({
    name,
    value,
    defaultImage,
    onChange,
}: CharityImageInputProps) {
    const previewSrc = value || defaultImage;

    return (
        <div className="col-span-full mt-2">
            <label
                htmlFor={name}
                className="block text-sm/6 font-medium"
            >
                Charity Image
            </label>

            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className=" text-center">
                    {previewSrc === undefined ? (
                        <PhotoIcon
                            aria-hidden="true"
                            className="mx-auto size-12"
                        />
                    ) : (
                        <div className="relative w-full aspect-square">
                            <Image
                                src={previewSrc}
                                alt="Charity preview"
                                fill
                                sizes="100vw"
                                className="object-cover rounded-lg"
                                unoptimized
                                loader={({ src }) => src}
                                key={previewSrc}
                            />
                        </div>
                    )}
                    <div className="mt-4 flex text-sm/6">
                        <label
                            htmlFor={name}
                            className="relative cursor-pointer rounded-md font-semibold text-rose-600  hover:text-rose-500"
                        >
                            {previewSrc === undefined ? (
                                <span>Upload File</span>
                            ) : (
                                <span>Choose New File</span>
                            )}
                            <input
                                id={name}
                                name={name}
                                type="file"
                                accept="image/*"
                                onChange={onChange}
                                className="sr-only"
                                required={previewSrc === undefined}
                            />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs/5">
                        PNG, JPG, GIF up to 10MB
                    </p>
                </div>
            </div>
        </div>
    );
}
