import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { DonationModalProps, DonationValues } from "./DonationModal.types";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FormEvent } from "react";
import { NameInput } from "../Inputs/NameInput/NameInput";
import { AmountInput } from "../Inputs/AmountInput/AmountInput";
import { RecurringSelection } from "../RecurringSelection/RecurringSelection";
import { PaymentMethods } from "../PaymentMethods";
import { useForm } from "@/utils/CommonHooks";
import { Frequency } from "@/enums/Frequency";
import { addDonationToCharities } from "@/utils/CharityUtils";
import { Donation } from "@/types/Donation";

export const DonationModal: React.FC<DonationModalProps> = ({
    open,
    onClose,
    onSuccess,
    charityName,
    initialValues,
}) => {
    const { form, handleChange, setForm } =
        useForm<DonationValues>(initialValues);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        const newDonation: Donation = {
            donorName: form.name,
            amount: Number(form.amount),
            frequency: form.frequency,
            date: new Date().toISOString(),
        };
        addDonationToCharities(charityName, newDonation);
        setForm(initialValues);

        onClose();
        onSuccess();
    }

    function handleModalClose() {
        setForm(initialValues);
        onClose();
    }

    return (
        <Dialog open={open} onClose={handleModalClose} className="fixed inset-0 z-50">
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel className="mx-auto max-w-md rounded bg-white p-6 shadow-lg">
                    <div className="flex items-center justify-between">
                        <DialogTitle className="text-lg font-medium text-gray-900">
                            {charityName}
                        </DialogTitle>
                        <button
                            onClick={handleModalClose}
                            className="cursor-pointer rounded p-1 text-gray-600 hover:text-gray-700"
                        >
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-4 space-y-6">
                        <NameInput
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                        />
                        <AmountInput
                            name="amount"
                            value={form.amount}
                            onChange={handleChange}
                        />
                        <RecurringSelection
                            value={form.frequency}
                            onChange={(freq: Frequency) =>
                                setForm((f) => ({ ...f, frequency: freq }))
                            }
                        />
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
