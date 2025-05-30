import { Frequency } from "@/enums/Frequency";

export interface FrequencyInputProps {
    value: Frequency;
    onChange: (next: Frequency) => void;
}
