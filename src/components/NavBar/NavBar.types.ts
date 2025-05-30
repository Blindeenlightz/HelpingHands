import { Charity } from "@/types/Charity";
import { Dispatch, SetStateAction } from "react";

export interface NavBarProps {
    charities: Charity[];
    setCharities: Dispatch<SetStateAction<Charity[]>>;
}
