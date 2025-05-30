import { Charity } from "@/types/Charity";
import { Dispatch, SetStateAction } from "react";

export interface EditCharityModalProps {
    charity: Charity;
    open: boolean;
    onClose: () => void;
    initialValues: EditedCharityValues;
    charities: Charity[];
    setCharities: Dispatch<SetStateAction<Charity[]>>;
}

export interface EditedCharityValues {
    name: string;
    description: string;
    imageUrl: string;
    email: string;
    phone: string;
    targetAmount: string;
}
