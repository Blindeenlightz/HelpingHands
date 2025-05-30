import { Charity } from "@/types/Charity";
import { Dispatch, SetStateAction } from "react";

export interface CharityListProps {
    charities: Charity[];
    setCharities: Dispatch<SetStateAction<Charity[]>>;
}
