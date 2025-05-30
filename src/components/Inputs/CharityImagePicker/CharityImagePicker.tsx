import React from "react";
import Image from "next/image";
import { CharityImagePickerProps } from "./CharityImagePicker.types";

/**
 * A file-picker component that shows a preview (using Next/Image) of either
 * the chosen file (`value`) or a default fallback (`defaultImage`).
 *
 * - `name` is used for the input’s id and name attributes.
 * - `value` is the current image URL (objectURL or saved URL).
 * - `defaultImage` is the fallback URL when `value` is empty.
 * - `onChange` is the file-input change handler.
 */
export function CharityImagePicker({
    name,
    value,
    defaultImage,
    onChange,
}: CharityImagePickerProps) {
    // Choose preview: controlled by `value`, fallback to `defaultImage`
    const previewSrc = value || defaultImage;

    return (
        <div className="col-span-full mt-2">
            <label
                htmlFor={name}
                className="block text-sm/6 font-medium text-gray-900"
            >
                Charity Image
            </label>

            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="relative h-48 w-full max-w-xs">
                    <Image
                        src={previewSrc}
                        alt="Charity preview"
                        fill
                        sizes="(max-width: 640px) 100vw, 256px"
                        className="object-cover rounded-lg"
                        unoptimized
                        loader={({ src }) => src}
                        key={previewSrc} // ensure Next/Image updates on change
                    />
                </div>
            </div>

            <div className="mt-2 flex text-sm/6 text-gray-600 justify-center">
                <label
                    htmlFor={name}
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-rose-600 focus-within:ring-2 focus-within:ring-rose-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-rose-500"
                >
                    <span>Upload a file</span>
                    <input
                        id={name}
                        name={name}
                        type="file"
                        accept="image/*"
                        onChange={onChange}
                        className="sr-only"
                    />
                </label>
                <p className="pl-1">or drag and drop</p>
            </div>

            <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
        </div>
    );
}
