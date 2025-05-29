import { Frequency } from "@/enums/Frequency";

export interface DonationModalProps {
    open: boolean;
    onClose: () => void;
    onSuccess: () => void;
    charityName: string;
    initialValues: DonationValues;
}
export interface DonationValues {
    name: string;
    amount: string;
    frequency: Frequency;
}