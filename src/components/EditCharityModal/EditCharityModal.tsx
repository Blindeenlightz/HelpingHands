import { XMarkIcon } from "@heroicons/react/24/outline";
import {
    EditCharityModalProps,
    EditedCharityValues,
} from "./EditCharityModal.types";
import { useForm } from "@/utils/CommonHooks";
import { FormEvent, useEffect } from "react";
import { CharityImagePicker } from "../Inputs/CharityImagePicker/CharityImagePicker";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { DollarInput } from "../Inputs/DollarInput/DollarInput";
import { editCharityFromCharities } from "@/utils/CharityUtils";

export const EditCharityModal: React.FC<EditCharityModalProps> = ({
    open,
    charity,
    onClose,
    initialValues,
}) => {
    const { form, handleChange, setForm } =
        useForm<EditedCharityValues>(initialValues);

    useEffect(() => {
        if (open) setForm(initialValues);
    }, [open, initialValues, setForm]);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        const editedCharity: EditedCharityValues = {
            name: form.name,
            description: form.description,
            email: form.email,
            phone: form.phone,
            targetAmount: form.targetAmount,
            imageUrl: form.imageUrl,
        };
        editCharityFromCharities(charity.name, editedCharity);
        onClose();
    }

    function handleModalClose() {
        onClose();
    }

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;
        const url = URL.createObjectURL(file);
        setForm((f) => ({ ...f, imageUrl: url }));
    }

    return (
        <Dialog
            open={open}
            onClose={handleModalClose}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
        >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

            <DialogPanel className="relative mx-auto w-full max-w-md max-h-[90vh] overflow-y-auto rounded bg-white p-6 shadow-lg">
                <div className="flex items-center justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">
                        Edit Charity
                    </DialogTitle>
                    <button
                        onClick={handleModalClose}
                        className=" cursor-pointer rounded p-1 text-gray-600 hover:text-gray-700"
                    >
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="mt-4 space-y-6">
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-full">
                                    <label
                                        htmlFor="name"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={form.name}
                                            onChange={handleChange}
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-rose-600 sm:text-sm/6"
                                            required
                                        />
                                    </div>
                                </div>
                                {/* Description */}
                                <div className="col-span-full">
                                    <label
                                        htmlFor="description"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Description
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="description"
                                            name="description"
                                            rows={3}
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-rose-600 sm:text-sm/6"
                                            value={form.description}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-full">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-rose-600 sm:text-sm/6"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-full">
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Phone
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            autoComplete="tel"
                                            pattern="[0-9()+\-\s]*"
                                            value={form.phone}
                                            onChange={handleChange}
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-rose-600 sm:text-sm/6"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-full">
                                    <DollarInput
                                        name="targetAmount"
                                        value={form.targetAmount}
                                        onChange={handleChange}
                                        label="Target Amount"
                                    />
                                </div>
                                <div className="sm:col-span-full">
                                    <CharityImagePicker
                                        name="imageUrl"
                                        value={form.imageUrl}
                                        defaultImage={initialValues.imageUrl}
                                        onChange={handleImageChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button
                            type="button"
                            onClick={handleModalClose}
                            className="cursor-pointer text-sm/6 font-semibold text-gray-900"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="cursor-pointer px-4 py-2 rounded-lg text-sm font-medium bg-rose-500 hover:bg-rose-600 text-white transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-px focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-white"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </DialogPanel>
        </Dialog>
    );
};
