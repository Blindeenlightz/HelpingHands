import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { DonationModalProps } from "./DonationModal.types";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FormEvent } from "react";
import { NameInput } from "../NameInput";
import { AmountInput } from "../AmountInput";
import { RecurringSelection } from "../RecurringSelection";
import { PaymentMethods } from "../PaymentMethods";

export const DonationModal: React.FC<DonationModalProps> = ({
    open,
    onClose,
    onSuccess,
    charity,
}) => {
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        onClose();
        onSuccess();
    }

    return (
        <Dialog open={open} onClose={onClose} className="fixed inset-0 z-50">
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel className="mx-auto max-w-md rounded bg-white p-6 shadow-lg">
                    <div className="flex items-center justify-between">
                        <DialogTitle className="text-lg font-medium text-gray-900">
                            Donate to {charity.name}
                        </DialogTitle>
                        <button
                            onClick={onClose}
                            className="cursor-pointer rounded p-1 text-gray-600 hover:text-gray-700"
                        >
                            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-4 space-y-6">
                        <NameInput />
                        <AmountInput />
                        <RecurringSelection />
                        <PaymentMethods />

                        <button
                            type="submit"
                            className="cursor-pointer w-full rounded bg-green-600 px-4 py-2 text-white hover:bg-green-500"
                        >
                            Donate Now
                        </button>
                    </form>
                </DialogPanel>
            </div>
        </Dialog>
    );
};