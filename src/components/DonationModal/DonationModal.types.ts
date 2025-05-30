import { Frequency } from "@/enums/Frequency";
import { Charity } from "@/types/Charity";
import { Dispatch, SetStateAction } from "react";

export interface DonationModalProps {
    open: boolean;
    onClose: () => void;
    onSuccess: () => void;
    charityName: string;
    initialValues: DonationValues;
    charities: Charity[];
    setCharities: Dispatch<SetStateAction<Charity[]>>;
}
export interface DonationValues {
    name: string;
    amount: string;
    frequency: Frequency;
}
