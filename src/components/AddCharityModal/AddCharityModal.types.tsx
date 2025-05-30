import { Charity } from "@/types/Charity";
import { Dispatch, SetStateAction } from "react";

export interface AddCharityModalProps {
    open: boolean;
    onClose: () => void;
    initialValues: Charity;
    charities: Charity[];
    setCharities: Dispatch<SetStateAction<Charity[]>>;
}
