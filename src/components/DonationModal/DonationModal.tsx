import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { DonationModalProps, DonationValues } from "./DonationModal.types";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FormEvent } from "react";
import { NameInput } from "../Inputs/NameInput/NameInput";
import { FrequencyInput } from "../FrequencyInput/FrequencyInput";
import { PaymentMethods } from "../PaymentMethods/PaymentMethods";
import { useForm } from "@/utils/CommonHooks";
import { Frequency } from "@/enums/Frequency";
import { Donation } from "@/types/Donation";
import { parseCurrency, formatCurrency } from "@/utils/CharityUtils";
import { DollarInput } from "../Inputs/DollarInput/DollarInput";

export const DonationModal: React.FC<DonationModalProps> = ({
    open,
    onClose,
    onSuccess,
    charityName,
    initialValues,
    charities,
    setCharities,
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
        setCharities([...charities]);
        onClose();
        onSuccess();
    }

    function addDonationToCharities(
        charityName: string,
        donation: Donation
    ): void {
        const charity = charities.find((c) => c.name === charityName);
        if (!charity) {
            throw new Error(`Charity \"${charityName}\" not found`);
        }

        // Append new donation
        charity.donations.push(donation);

        // Update amountRaised
        const current = parseCurrency(charity.amountRaised);
        charity.amountRaised = formatCurrency(current + donation.amount);
    }

    function handleModalClose() {
        setForm(initialValues);
        onClose();
    }

    return (
        <Dialog
            open={open}
            onClose={handleModalClose}
            className="fixed inset-0 z-50 backdrop-blur-sm"
        >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel className="mx-auto max-w-md rounded bg-[var(--color-cardBackground)] p-6 shadow-lg">
                    <div className="flex items-center justify-between">
                        <DialogTitle className="text-lg font-medium">
                            {charityName}
                        </DialogTitle>
                        <button
                            onClick={handleModalClose}
                            className="cursor-pointer rounded p-1"
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
                        <DollarInput
                            name="amount"
                            value={form.amount}
                            onChange={handleChange}
                        />
                        <FrequencyInput
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
