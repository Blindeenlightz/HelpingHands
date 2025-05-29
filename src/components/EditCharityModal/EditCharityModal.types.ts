import { Charity } from "@/types/Charity";

export interface EditCharityModalProps {
    charity: Charity;
    open: boolean;
    onClose: () => void;
    initialValues: EditedCharityValues;
}

export interface EditedCharityValues {
    name: string;
    description: string;
    imageUrl: string;
    email: string;
    phone: string;
    targetAmount: string;
}
