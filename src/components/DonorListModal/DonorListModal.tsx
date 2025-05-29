import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Statuses } from "@/enums/Statuses";
import { DonorListProps } from "./DonorListModal.types";
import { classNames } from "@/utils/classNames";
import { XMarkIcon } from "@heroicons/react/24/outline";

export const DonorList: React.FC<DonorListProps> = ({
    charity,
    open,
    onClose,
}) => {
    return (
        <Dialog open={open} className="fixed inset-0 z-50" onClose={onClose}>
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel className="mx-auto max-w-md rounded bg-white p-6 shadow-lg">
                    <div className="flex items-center justify-between">
                        <DialogTitle className="text-lg font-medium text-gray-900">
                            {charity.name}
                        </DialogTitle>
                        <button
                            onClick={onClose}
                            className="mx-1.5 cursor-pointer rounded p-1 text-gray-600 hover:text-gray-700"
                        >
                            <XMarkIcon className="h-6 w6" aria-hidden="true" />
                        </button>
                    </div>

                    <ul role="list" className="divide-y divide-gray-100">
                        {charity.donations.map((donor) => (
                            <li
                                key={donor.donorName}
                                className="flex items-center justify-between gap-x-6 py-5"
                            >
                                <div className="min-w-0">
                                    <div className="flex items-start gap-x-3">
                                        <p className="text-sm/6 font-semibold text-gray-900">
                                            {donor.donorName}
                                        </p>
                                        <p
                                            className={classNames(
                                                Statuses[donor.frequency],
                                                "mt-0.5 rounded-md px-1.5 py-0.5 text-xs font-medium whitespace-nowrap ring-1 ring-inset"
                                            )}
                                        >
                                            {donor.frequency
                                                .charAt(0)
                                                .toUpperCase() +
                                                donor.frequency.slice(1)}
                                        </p>
                                    </div>
                                    <div className="mt-1 flex items-center gap-x-2 text-xs/5 text-gray-500">
                                        <p className="whitespace-nowrap">
                                            Donated on{" "}
                                            <time dateTime={donor.date}>
                                                {new Date(
                                                    donor.date
                                                ).toLocaleDateString()}
                                            </time>
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <h1>${donor.amount}</h1>
                                </div>
                            </li>
                        ))}
                    </ul>
                </DialogPanel>
            </div>
        </Dialog>
    );
};
