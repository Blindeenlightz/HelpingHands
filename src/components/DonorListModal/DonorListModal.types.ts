import { Charity } from "@/types/Charity";

export interface DonorListProps {
    charity: Charity;
    open: boolean;
    onClose: () => void;
}
