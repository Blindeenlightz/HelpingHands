import { XMarkIcon } from "@heroicons/react/24/outline";
import {
    EditCharityModalProps,
    EditedCharityValues,
} from "./EditCharityModal.types";
import { useForm } from "@/utils/CommonHooks";
import { FormEvent } from "react";
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
        setForm(initialValues);
        onClose();
    }

    function handleModalClose() {
        setForm(initialValues);
        onClose();
    }

    return (
        <Dialog
            open={open}
            onClose={handleModalClose}
            className="fixed inset-0 z-50 min-h-full overflow-y-auto"
        >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

            <div className=" fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel className="mx-auto max-w-md rounded bg-white p-6 shadow-lg">
                    <div className="flex items-center justify-between">
                        <DialogTitle className="text-lg font-medium text-gray-900">
                            Editing {charity.name}
                        </DialogTitle>
                        <button
                            onClick={handleModalClose}
                            className="mx-2 cursor-pointer rounded p-1 text-gray-600 hover:text-gray-700"
                        >
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <form onSubmit={handleSubmit}>
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
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                type="text"
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-rose-600 sm:text-sm/6"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label
                                        htmlFor="description"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Description
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            name="description"
                                            rows={3}
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-rose-600 sm:text-sm/6"
                                            value={form.description}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
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
                                <div>
                                    <label
                                        htmlFor="phone-number"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Phone
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            name="phone-number"
                                            type="tel"
                                            value={form.phone}
                                            onChange={handleChange}
                                            autoComplete="tel"
                                            pattern="[0-9()+\-\s]*"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-rose-600 sm:text-sm/6"
                                            required
                                        />
                                    </div>
                                </div>
                                <DollarInput
                                    name="target-amount"
                                    value={form.targetAmount}
                                    placeholder={charity.targetAmount}
                                    onChange={handleChange}
                                />

                                <CharityImagePicker
                                    name="charity-image"
                                    value={form.imageUrl}
                                    defaultImage={charity.imageUrl}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button
                                type="button"
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
            </div>
        </Dialog>
    );
};
