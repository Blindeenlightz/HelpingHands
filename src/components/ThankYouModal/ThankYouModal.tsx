import { ThankYouModalProps } from "./ThankYouModal.types";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

export const ThankYouModal: React.FC<ThankYouModalProps> = ({
    open,
    onClose,
}) => {
    return (
        <Dialog open={open} onClose={onClose} className="fixed inset-0 z-50">
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel className="max-w-sm rounded-md bg-green-50 p-6 shadow-lg">
                    <div className="flex">
                        <div className="shrink-0">
                            <CheckCircleIcon
                                aria-hidden="true"
                                className="h-5 w-5 text-green-400"
                            />
                        </div>
                        <div className="ml-3 flex-1">
                            <DialogTitle className="text-sm font-medium text-green-800">
                                Donation Received
                            </DialogTitle>
                            <div className="mt-2 text-sm text-green-700">
                                <p>
                                    Thank you so much for your generous
                                    donation! Your support truly makes a
                                    difference and brings us closer to our goal.
                                    We are deeply grateful for your kindness and
                                    belief in our cause.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="cursor-pointer rounded-md bg-green-100 px-3 py-1.5 text-sm font-medium text-green-800 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                        >
                            Dismiss
                        </button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
};
