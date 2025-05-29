import { Statuses } from "@/enums/Statuses";
import { DonorListProps } from "./DonorList/DonorList.types";
import { classNames } from "@/utils/classNames";

export const DonorList: React.FC<DonorListProps> = ({ charity }) => {
    return (
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
                                {donor.frequency.charAt(0).toUpperCase() +
                                    donor.frequency.slice(1)}
                            </p>
                        </div>
                        <div className="mt-1 flex items-center gap-x-2 text-xs/5 text-gray-500">
                            <p className="whitespace-nowrap">
                                Donated on{" "}
                                <time dateTime={donor.date}>
                                    {new Date(donor.date).toLocaleDateString()}
                                </time>
                            </p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};