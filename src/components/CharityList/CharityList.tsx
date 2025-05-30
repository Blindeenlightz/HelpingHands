import { useState } from "react";
import Image from "next/image";
import { UserGroupIcon, PencilIcon } from "@heroicons/react/20/solid";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Charity } from "@/types/Charity";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { DonationModal } from "../DonationModal/DonationModal";
import { ThankYouModal } from "../ThankYouModal/ThankYouModal";
import { Frequency } from "@/enums/Frequency";
import { DonorList } from "../DonorListModal/DonorListModal";
import { EditCharityModal } from "../EditCharityModal/EditCharityModal";
import { CharityListProps } from "./CharityList.types";

export const CharityList: React.FC<CharityListProps> = ({
    charities,
    setCharities,
}) => {
    const [donateOpen, setDonateOpen] = useState(false);
    const [thankYouOpen, setThankYouOpen] = useState(false);
    const [donorsOpen, setDonorsOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [currentCharity, setCurrentCharity] = useState<Charity | null>(null);

    function handleRemoveCharity(name: string) {
        const index = charities.findIndex((c) => c.name === name);
        if (index === -1) {
            throw new Error(`Charity \"${name}\" not found`);
        }
        charities.splice(index, 1);
        setCharities([...charities]);
    }

    function handleEditCharity(charity: Charity) {
        setCurrentCharity(charity);
        setEditOpen(true);
    }

    function handleDonateClick(charity: Charity) {
        setCurrentCharity(charity);
        setDonateOpen(true);
    }

    function handleDonorsClick(charity: Charity) {
        setCurrentCharity(charity);
        setDonorsOpen(true);
    }

    return (
        <>
            <ul
                role="list"
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
                {charities.map((charity) => (
                    <li
                        key={charity.email}
                        className="bg-[var(--color-cardBackground)] border border-gray-500/50 shadow-lg hover:shadow-xl hover:scale-[1.03] transform col-span-1 flex flex-col divide-y divide-gray-200 rounded-xl text-center"
                    >
                        <div className="flex flex-1 flex-col p-8 justify-between">
                            <div>
                                <div className="relative w-full aspect-square">
                                    <Image
                                        alt={charity.name}
                                        src={charity.imageUrl}
                                        fill
                                        className="object-cover rounded-lg"
                                        sizes="100vw"
                                        priority
                                    />
                                </div>
                                <h3 className="mt-6 text-m font-bold text-primary">
                                    {charity.name}
                                </h3>
                                <p className="mt-1 text-sm text-primary">
                                    {charity.description}
                                </p>
                            </div>

                            <div className="mt-4">
                                <ProgressBar
                                    amountRaised={charity.amountRaised}
                                    targetAmount={charity.targetAmount}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex space-x-2">
                                <button
                                    type="button"
                                    className="cursor-pointer p-2 rounded-md  hover:bg-gray-50 transition-colors duration-200"
                                    onClick={() => handleDonorsClick(charity)}
                                >
                                    <UserGroupIcon
                                        className="h-6 w-6 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </button>
                                <button
                                    type="button"
                                    className="cursor-pointer p-2 rounded-md  hover:bg-gray-50 transition-colors duration-200"
                                    onClick={() => handleEditCharity(charity)}
                                >
                                    <PencilIcon
                                        className="h-6 w-6 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </button>
                                <button
                                    type="button"
                                    className="cursor-pointer p-2 rounded-md hover:text-rose-700 hover:bg-rose-50 transition-colors duration-200"
                                    onClick={() =>
                                        handleRemoveCharity(charity.name)
                                    }
                                >
                                    <TrashIcon
                                        className="h-6 w-6 text-rose-600"
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>

                            <div className="w-1/3">
                                <button
                                    onClick={() => handleDonateClick(charity)}
                                    className="cursor-pointer w-full px-4 py-2 rounded-lg text-sm font-medium bg-rose-500 hover:bg-rose-600 text-white transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-px"
                                >
                                    Donate
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            {currentCharity && (
                <DonationModal
                    open={donateOpen}
                    onClose={() => setDonateOpen(false)}
                    onSuccess={() => setThankYouOpen(true)}
                    charityName={currentCharity.name}
                    charities={charities}
                    setCharities={setCharities}
                    initialValues={{
                        name: "Anonymous",
                        amount: "",
                        frequency: Frequency.OneTime,
                    }}
                />
            )}

            {currentCharity && (
                <EditCharityModal
                    open={editOpen}
                    onClose={() => setEditOpen(false)}
                    charity={currentCharity}
                    charities={charities}
                    setCharities={setCharities}
                    initialValues={{
                        name: currentCharity.name,
                        description: currentCharity.description,
                        email: currentCharity.email,
                        phone: currentCharity.phone,
                        targetAmount: currentCharity.targetAmount,
                        imageUrl: currentCharity.imageUrl,
                    }}
                />
            )}

            <ThankYouModal
                open={thankYouOpen}
                onClose={() => setThankYouOpen(false)}
            />

            {currentCharity && (
                <DonorList
                    open={donorsOpen}
                    charity={currentCharity}
                    onClose={() => setDonorsOpen(false)}
                />
            )}
        </>
    );
};
